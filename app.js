/* Fichier de philo — logique du site (routage par #, recherche, vues). */
(() => {
"use strict";

/* ---------- Outils ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $("#app");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const norm = s => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, " ");
const stem = w => (w.length > 3 ? w.replace(/(s|x)$/, "") : w);
const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
const fdate = d => { const [y, m, j] = d.split("-").map(Number); return `${j} ${MOIS[m - 1]} ${y}`; };
const fshort = d => { const [, m, j] = d.split("-"); return `${j}/${m}`; };
const store = {
  get(k, def) { try { const v = localStorage.getItem("fdp:" + k); return v ? JSON.parse(v) : def; } catch { return def; } },
  set(k, v) { try { localStorage.setItem("fdp:" + k, JSON.stringify(v)); } catch {} }
};
function toast(msg) {
  $(".toast")?.remove();
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.append(t);
  setTimeout(() => t.remove(), 2300);
}
async function copy(text) {
  try { await navigator.clipboard.writeText(text); toast("Copié"); }
  catch { const ta = document.createElement("textarea"); ta.value = text; document.body.append(ta); ta.select(); document.execCommand("copy"); ta.remove(); toast("Copié"); }
}

/* ---------- Index ---------- */
AUTEURS.sort((a, b) => (b.majeur ? 1 : 0) - (a.majeur ? 1 : 0) || a.nom.localeCompare(b.nom, "fr"));
const ALPHA = [...AUTEURS].sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
const BYID = Object.fromEntries(AUTEURS.map(a => [a.id, a]));
const ALL = [];
AUTEURS.forEach(a => a.theses.forEach((t, i) => {
  t.k = t.k || "cours"; t.n = t.n || [];
  ALL.push({ a, t, i,
    hn: norm(t.n.join(" | ")), ht: norm(t.t), hx: norm(t.x), hc: norm([t.c, t.o, t.a].join(" ")), ha: norm(a.nom) });
}));
const NOTIONS = {};
ALL.forEach(({ t }) => t.n.forEach(n => { const k = n.toLowerCase(); NOTIONS[k] = NOTIONS[k] || { label: n, count: 0 }; NOTIONS[k].count++; }));
const NOTION_LIST = Object.values(NOTIONS).sort((a, b) => a.label.localeCompare(b.label, "fr"));
const LAST_SEANCE = SEANCES[SEANCES.length - 1];

/* ---------- Recherche ---------- */
let srcFilter = store.get("src", "tout");
function search(q, src = srcFilter) {
  const all = searchMode(q, src, true);
  return all.length ? all : searchMode(q, src, false);
}
function searchMode(q, src, every) {
  const terms = norm(q).split(/\s+/).filter(Boolean).map(stem);
  if (!terms.length) return [];
  const out = [];
  for (const e of ALL) {
    if (src !== "tout" && e.t.k !== src) continue;
    let score = 0, ok = true;
    for (const w of terms) {
      let s = 0;
      if (e.hn.split(" | ").some(n => n === w || stem(n) === w)) s += 12;
      else if (e.hn.includes(w)) s += 7;
      if (e.ht.includes(w)) s += 5;
      if (e.ha.includes(w)) s += 4;
      if (e.hc.includes(w)) s += 2;
      if (e.hx.includes(w)) s += 1;
      if (!s && every) { ok = false; break; }
      score += s;
    }
    if (ok && score) out.push({ ...e, score: score + (e.a.majeur ? .5 : 0) });
  }
  return out.sort((x, y) => y.score - x.score);
}
function hl(text, q) {
  const raw = String(text ?? "");
  const terms = norm(q).split(/\s+/).filter(Boolean).map(stem).filter(w => w.length > 1);
  if (!terms.length) return esc(raw);
  const n = norm(raw);
  const ranges = [];
  terms.forEach(w => { let i = 0; while ((i = n.indexOf(w, i)) !== -1) { ranges.push([i, i + w.length]); i += w.length; } });
  if (!ranges.length) return esc(raw);
  ranges.sort((a, b) => a[0] - b[0]);
  let res = "", pos = 0;
  for (const [s, e] of ranges) { if (s < pos) continue; res += esc(raw.slice(pos, s)) + "<mark>" + esc(raw.slice(s, e)) + "</mark>"; pos = e; }
  return res + esc(raw.slice(pos));
}
function grouped(results) {
  const g = new Map();
  results.forEach(r => { if (!g.has(r.a.id)) g.set(r.a.id, []); g.get(r.a.id).push(r); });
  return [...g.values()];
}

/* ---------- Composants ---------- */
const enc = s => encodeURIComponent(s);
const chip = (n, extra = "") => `<a class="chip" href="#/notion/${enc(n)}">${esc(n)}${extra}</a>`;

function theseCard(a, t, i, q = "", showAuthor = false, idx = 0) {
  const id = `${a.id}-${i}`;
  const src = t.k === "colle"
    ? `<span class="src colle">Colle</span>`
    : `<a class="src cours" href="#/seance/${t.s}" title="Voir la séance">Cours · ${fshort(t.s)}</a>`;
  return `<article class="these rise" id="t-${id}" style="--i:${Math.min(idx, 12)}">
    <div class="these-top">
      <h3>${showAuthor ? `<a href="#/auteur/${a.id}/${i}" style="text-decoration:none">` : ""}${hl(t.t, q)}${showAuthor ? "</a>" : ""}</h3>
      ${showAuthor ? "" : `<span class="num">${String(i + 1).padStart(2, "0")}</span>`}
    </div>
    <p>${hl(t.x, q)}</p>
    ${t.c ? `<blockquote>« ${hl(t.c, q)} »</blockquote>` : ""}
    ${t.a ? `<div class="astuce"><b>Copie</b><span>${hl(t.a, q)}</span></div>` : ""}
    <div class="chips">${t.n.map(n => chip(n)).join("")}</div>
    <div class="these-foot">
      <span class="ref">${showAuthor ? `<b>${esc(a.nom)}</b>${t.o ? " · " : ""}` : ""}${t.o ? hl(t.o, q) : ""}</span>
      <span style="display:flex;gap:8px;align-items:center">
        <button class="copy" type="button" data-copy="${esc(id)}">Copier</button>${src}
      </span>
    </div>
  </article>`;
}

/* ---------- Vues ---------- */
function viewHome() {
  const nTheses = ALL.length, nColles = ALL.filter(e => e.t.k === "colle").length;
  const day = Math.floor(Date.now() / 864e5);
  const pool = ALL.filter(e => e.t.c || e.a.majeur);
  const picks = [0, 1, 2].map(k => pool[(day * 7 + k * 37) % pool.length]);
  const top = Object.values(NOTIONS).sort((a, b) => b.count - a.count).slice(0, 26);
  const max = top[0]?.count || 1;
  const majors = AUTEURS.filter(a => a.majeur);
  const lastAuthors = [...new Set(ALL.filter(e => e.t.s === LAST_SEANCE.d).map(e => e.a.nom))];
  return `<div class="page">
    <section class="hero">
      <div>
        <div class="eyebrow rise">ECG2 · Philosophie · Thème ${esc(THEME)}</div>
        <h1 class="h-display">${["Toutes", "les", "thèses,", "<em>une</em>", "<em>recherche.</em>"].map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(" ")}</h1>
        <p class="lead rise" style="--i:4">Le cours de L. Giassi classé par auteur. Cherchez une notion pour retrouver toutes les thèses qui en parlent.</p>
        <button class="hero-search rise" style="--i:5" type="button" data-open-search>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>
          <span class="typed" id="typed"></span><span class="caret" aria-hidden="true"></span>
        </button>
        <div class="stats rise" style="--i:6">
          <div class="stat"><b data-count="${AUTEURS.length}">${AUTEURS.length}</b><span>Auteurs</span></div>
          <div class="stat"><b data-count="${nTheses}">${nTheses}</b><span>Thèses</span></div>
          <div class="stat"><b data-count="${SEANCES.length}">${SEANCES.length}</b><span>Séances</span></div>
          <div class="stat"><b data-count="${nColles}">${nColles}</b><span>Colles</span></div>
        </div>
      </div>
      <div class="stack" aria-label="Fiches du jour">
        ${picks.map((e, k) => `<a class="card-f" style="--i:${k}" href="#/auteur/${e.a.id}/${e.i}">
          <span class="cf-auteur">${esc(e.a.nom)}</span>
          <span class="cf-titre">${esc(e.t.t)}</span>
          <span class="cf-texte">${esc(e.t.x)}</span></a>`).join("")}
      </div>
    </section>

    <div class="section-head"><h2>Les incontournables</h2><a class="link-more" href="#/auteurs">Tous les auteurs →</a></div>
    <div class="majors">
      ${majors.map((a, k) => `<a class="major rise" style="--i:${k}" href="#/auteur/${a.id}">
        <span class="meta">${esc(a.dates)} · ${a.theses.length} thèses</span>
        <span class="big">${esc(a.nom)}</span>
        <p>${esc(a.intro.split(". ").slice(1).join(". ") || a.intro)}</p>
        <span class="initial" aria-hidden="true">${esc(a.nom[0])}</span></a>`).join("")}
    </div>
    <ul class="incontournables">${AUTEURS_INCONTOURNABLES.map(x => `<li>${esc(x)}</li>`).join("")}</ul>

    <div class="section-head"><h2>Dernier cours</h2><a class="link-more" href="#/seances">Toutes les séances →</a></div>
    <div class="timeline" style="margin-top:0"><div class="tl-item last rise"><a class="tl-card" href="#/seance/${LAST_SEANCE.d}">
      <div class="d">${fdate(LAST_SEANCE.d)}</div><div class="t">${esc(LAST_SEANCE.titre)}</div>
      <div class="who">${lastAuthors.map(esc).join(" · ")}</div></a></div></div>

    <div class="section-head"><h2>Notions les plus présentes</h2><a class="link-more" href="#/notions">Toutes les notions →</a></div>
    <div class="chips cloud">${top.map(n => `<a class="chip" style="--w:${(n.count / max).toFixed(2)}" href="#/notion/${enc(n.label)}">${esc(n.label)}<small>${n.count}</small></a>`).join("")}</div>
  </div>`;
}

function viewAuteurs() {
  return `<div class="page">
    <div class="eyebrow rise">Index</div>
    <h1 class="h-display rise" style="font-size:clamp(2.8rem,7vw,4.6rem);margin:10px 0 12px">Auteurs</h1>
    <p class="lead rise">${AUTEURS.length} auteurs, du plus cité au moins cité dans le cours. Les auteurs incontournables sont marqués en noir.</p>
    <input class="filter-input rise" id="afilter" type="search" placeholder="Filtrer les auteurs…" autocomplete="off" aria-label="Filtrer les auteurs">
    <div class="alpha" id="alpha">${[...AUTEURS].sort((a, b) => (b.majeur - a.majeur) || b.theses.length - a.theses.length || a.nom.localeCompare(b.nom, "fr")).map((a, k) => `
      <a class="a-card rise ${a.majeur ? "is-major" : ""}" style="--i:${Math.min(k, 20)}" href="#/auteur/${a.id}" data-name="${esc(norm(a.nom + " " + a.courant))}">
        <span class="ini">${esc(a.nom.replace(/^(Les |Le |La )/, "")[0])}</span>
        <span class="nm">${esc(a.nom)}<small>${esc(a.courant || a.dates)}</small></span>
        <span class="n">${a.theses.length}</span></a>`).join("")}
    </div></div>`;
}

function viewAuteur(id, focus) {
  const a = BYID[id];
  if (!a) return viewNotFound();
  const idx = ALPHA.indexOf(a), prev = ALPHA[idx - 1], next = ALPHA[idx + 1];
  const nC = a.theses.filter(t => t.k !== "colle").length, nK = a.theses.length - nC;
  const notions = [...new Set(a.theses.flatMap(t => t.n))];
  return `<div class="page fiche">
    <aside class="toc">
      <a class="back" href="#/auteurs">← Tous les auteurs</a>
      <ol>${a.theses.map((t, i) => `<li><a href="#/auteur/${a.id}/${i}" data-toc="${i}">${esc(t.t.replace(/[«»]/g, "").trim())}</a></li>`).join("")}</ol>
    </aside>
    <div>
      <header class="f-head">
        <div class="eyebrow rise">Fiche auteur</div>
        <h1 class="h-display">${esc(a.nom)}</h1>
        <div class="meta rise" style="--i:1">
          <span>${esc(a.dates)}</span>${a.courant ? `<span>${esc(a.courant)}</span>` : ""}
          <span>${nC} thèse${nC > 1 ? "s" : ""} de cours</span>${nK ? `<span>${nK} de colle</span>` : ""}
          ${a.majeur ? `<span class="badge">◆ Incontournable</span>` : ""}
        </div>
        <p class="lead rise" style="--i:2">${esc(a.intro)}</p>
        <div class="chips rise" style="--i:3;margin-top:18px">${notions.slice(0, 18).map(n => chip(n)).join("")}</div>
      </header>
      <div class="theses">${a.theses.map((t, i) => theseCard(a, t, i, "", false, i)).join("")}</div>
      <nav class="section-head" style="margin-top:48px" aria-label="Auteur précédent et suivant">
        ${prev ? `<a class="link-more" href="#/auteur/${prev.id}">← ${esc(prev.nom)}</a>` : "<span></span>"}
        ${next ? `<a class="link-more" href="#/auteur/${next.id}">${esc(next.nom)} →</a>` : ""}
      </nav>
    </div></div>`;
}

function viewResults(q, title, eyebrow) {
  const res = search(q, "tout");
  const groups = grouped(res);
  return `<div class="page">
    <a class="back rise" href="#/notions">← Toutes les notions</a>
    <div class="eyebrow rise" style="margin-top:22px">${esc(eyebrow)}</div>
    <h1 class="h-display rise" style="font-size:clamp(2.6rem,7vw,4.6rem);margin:10px 0 12px">${esc(title)}</h1>
    <p class="lead rise">${res.length ? `${res.length} thèse${res.length > 1 ? "s" : ""} chez ${groups.length} auteur${groups.length > 1 ? "s" : ""}.` : "Aucune thèse ne correspond."}</p>
    ${groups.map((g, gi) => `<section class="results-group">
      <h2 class="rise" style="--i:${gi}"><a href="#/auteur/${g[0].a.id}">${esc(g[0].a.nom)}</a><small>${g.length}</small></h2>
      <div class="theses">${g.map((r, k) => theseCard(r.a, r.t, r.i, q, false, k)).join("")}</div>
    </section>`).join("")}
  </div>`;
}

function viewNotions() {
  const byLetter = {};
  NOTION_LIST.forEach(n => { const l = norm(n.label)[0].toUpperCase(); (byLetter[l] = byLetter[l] || []).push(n); });
  return `<div class="page">
    <div class="eyebrow rise">Index</div>
    <h1 class="h-display rise" style="font-size:clamp(2.8rem,7vw,4.6rem);margin:10px 0 12px">Notions</h1>
    <p class="lead rise">${NOTION_LIST.length} notions. Cliquez sur une notion pour voir toutes les thèses qui l’abordent.</p>
    ${Object.entries(byLetter).map(([l, ns], k) => `<div class="rise" style="--i:${Math.min(k, 15)};display:grid;grid-template-columns:44px 1fr;gap:12px;margin-top:22px;align-items:start">
      <span class="h-display" style="font-size:1.8rem;color:var(--accent)">${l}</span>
      <div class="chips">${ns.map(n => chip(n.label, `<small>${n.count}</small>`)).join("")}</div></div>`).join("")}
  </div>`;
}

function viewSeances() {
  return `<div class="page">
    <div class="eyebrow rise">Chronologie</div>
    <h1 class="h-display rise" style="font-size:clamp(2.8rem,7vw,4.6rem);margin:10px 0 12px">Séances</h1>
    <p class="lead rise">Le cours séance par séance, du plus récent au plus ancien.</p>
    <div class="timeline">${[...SEANCES].reverse().map((s, k) => {
      const es = ALL.filter(e => e.t.s === s.d);
      const who = [...new Set(es.map(e => e.a.nom))];
      return `<div class="tl-item rise ${k === 0 ? "last" : ""}" style="--i:${k}"><a class="tl-card" href="#/seance/${s.d}">
        <div class="d">${fdate(s.d)} · ${es.length} thèses</div><div class="t">${esc(s.titre)}</div>
        <div class="who">${who.slice(0, 9).map(esc).join(" · ")}${who.length > 9 ? " …" : ""}</div></a></div>`;
    }).join("")}</div></div>`;
}

function viewSeance(d) {
  const s = SEANCES.find(x => x.d === d);
  if (!s) return viewNotFound();
  const groups = grouped(ALL.filter(e => e.t.s === d));
  return `<div class="page">
    <a class="back rise" href="#/seances">← Toutes les séances</a>
    <div class="eyebrow rise" style="margin-top:22px">Séance du ${fdate(d)}</div>
    <h1 class="h-display rise" style="font-size:clamp(2.2rem,6vw,3.8rem);margin:10px 0 12px">${esc(s.titre)}</h1>
    ${groups.map((g, gi) => `<section class="results-group">
      <h2 class="rise" style="--i:${gi}"><a href="#/auteur/${g[0].a.id}">${esc(g[0].a.nom)}</a><small>${g.length}</small></h2>
      <div class="theses">${g.map((r, k) => theseCard(r.a, r.t, r.i, "", false, k)).join("")}</div></section>`).join("")}
  </div>`;
}

/* Questions : celles du fichier de données + celles ajoutées dans ce navigateur */
let qFilter = "a-poser";
function allQuestions() {
  const local = store.get("questions", []);
  const over = store.get("qstatus", {});
  const base = QUESTIONS.map((q, i) => ({ ...q, id: "d" + i, statut: over["d" + i] || q.statut }));
  return [...local.map(q => ({ ...q, local: true, statut: over[q.id] || q.statut })), ...base];
}
function qText(q) {
  const s = SEANCES.find(x => x.d === q.s);
  return `Question (cours du ${s ? fshort(s.d) : "?"}) : ${q.q}`;
}
function viewQuestions() {
  const qs = allQuestions();
  const shown = qs.filter(q => qFilter === "toutes" || q.statut === qFilter);
  const cnt = st => qs.filter(q => q.statut === st).length;
  const labels = { "a-poser": "À poser", posee: "Posée", repondue: "Répondue" };
  return `<div class="page" style="max-width:900px">
    <div class="eyebrow rise">Rubrique du cours</div>
    <h1 class="h-display rise" style="font-size:clamp(2.8rem,7vw,4.6rem);margin:10px 0 12px">Questions</h1>
    <p class="lead rise">Les points à éclaircir sur le cours le plus récent (${fdate(LAST_SEANCE.d)}). Copiez une question pour la coller dans la rubrique « Questions » du Google Doc.</p>
    <div class="seg rise" role="group" aria-label="Filtrer">
      ${[["a-poser", "À poser"], ["posee", "Posées"], ["repondue", "Répondues"], ["toutes", "Toutes"]].map(([k, l]) =>
        `<button type="button" data-qf="${k}" aria-pressed="${qFilter === k}">${l}${k !== "toutes" ? ` · ${cnt(k)}` : ""}</button>`).join("")}
    </div>
    <div class="qlist">${shown.length ? shown.map((q, k) => `<article class="q rise" style="--i:${k}">
      <div class="q-top"><span class="pill ${q.statut}">${labels[q.statut]}</span>
        <span class="ref">Cours du ${fdate(q.s)}${q.auteur && BYID[q.auteur] ? ` · <a href="#/auteur/${q.auteur}">${esc(BYID[q.auteur].nom)}</a>` : ""}${q.local ? " · ajoutée par vous" : ""}</span></div>
      <p>${esc(q.q)}</p>
      ${q.r ? `<div class="rep"><b style="font-family:var(--f-mono);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase">Réponse du professeur</b><br>${esc(q.r)}</div>` : ""}
      <div class="q-actions">
        <button class="btn primary" type="button" data-qcopy="${q.id}">Copier pour le Google Doc</button>
        ${q.statut === "a-poser" ? `<button class="btn" type="button" data-qset="${q.id}" data-v="posee">Marquer comme posée</button>` : ""}
        ${q.statut === "posee" ? `<button class="btn" type="button" data-qset="${q.id}" data-v="a-poser">Remettre à poser</button>` : ""}
        ${q.local ? `<button class="btn" type="button" data-qdel="${q.id}">Supprimer</button>` : ""}
      </div></article>`).join("") : `<p class="pr-empty">Rien dans cette catégorie.</p>`}</div>
    <form class="q-form rise" id="qform">
      <h2>Ajouter une question</h2>
      <label for="qnew" style="font-size:.95rem;color:var(--ink-2)">Une notion ou un exemple pas clair dans le cours du ${fdate(LAST_SEANCE.d)} ?</label>
      <textarea id="qnew" required placeholder="Ex. : Que signifie exactement « finalité sans fin » ?"></textarea>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
        <small>Enregistrée dans ce navigateur uniquement.</small>
        <button class="btn primary" type="submit">Ajouter</button>
      </div>
    </form>
  </div>`;
}

function viewNotFound() {
  return `<div class="page"><h1 class="h-display" style="font-size:3rem">Page introuvable</h1><p class="lead">Ce lien ne correspond à aucune fiche. <a href="#/">Retour à l’accueil</a>.</p></div>`;
}

/* ---------- Routage ---------- */
let booted = false;
function route() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  const [r, p1, p2] = parts;
  let html, nav = r || "", after;
  switch (r) {
    case "": case undefined: html = viewHome(); after = afterHome; break;
    case "auteurs": html = viewAuteurs(); after = afterAuteurs; break;
    case "auteur": html = viewAuteur(p1); nav = "auteurs"; after = () => afterAuteur(p1, p2); break;
    case "notions": html = viewNotions(); break;
    case "notion": html = viewResults(p1, p1, "Notion"); nav = "notions"; break;
    case "recherche": html = viewResults(p1, `« ${p1} »`, "Recherche"); nav = ""; break;
    case "seances": html = viewSeances(); break;
    case "seance": html = viewSeance(p1); nav = "seances"; break;
    case "questions": html = viewQuestions(); after = afterQuestions; break;
    default: html = viewNotFound();
  }
  const render = () => {
    app.innerHTML = html;
    $$(".nav a").forEach(a => a.dataset.nav === nav ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
    const keepScroll = r === "auteur" && p2 !== undefined;
    if (!keepScroll) window.scrollTo({ top: 0, behavior: "instant" });
    after?.();
    updateBadge();
    document.title = (r === "auteur" && BYID[p1] ? BYID[p1].nom + " — " : r === "notion" ? p1 + " — " : "") + "Fichier de philo";
  };
  const sameAuthor = r === "auteur" && app.dataset.view === "auteur/" + p1;
  app.dataset.view = r === "auteur" ? "auteur/" + p1 : r || "";
  if (sameAuthor) { afterAuteur(p1, p2); return; }
  if (booted && document.startViewTransition && !document.hidden && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const vt = document.startViewTransition(render);
    vt.ready.catch(() => {}); vt.finished.catch(() => {});
  } else render();
  booted = true;
}
window.addEventListener("hashchange", () => { if (!pal.hidden) closePalette(false); route(); });

/* ---------- Après rendu ---------- */
let typer;
function afterHome() {
  $$("[data-count]").forEach(el => {
    const end = +el.dataset.count, t0 = performance.now();
    const tick = now => { const p = Math.min(1, (now - t0) / 1100); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
  const words = ["animal", "cruauté", "dignité", "coutume", "sacrifice", "éducation", "universel", "liberté"];
  const el = $("#typed"); let w = 0, c = 0, del = false;
  clearTimeout(typer);
  const step = () => {
    if (!document.body.contains(el)) return;
    const word = words[w];
    c += del ? -1 : 1; el.textContent = word.slice(0, c);
    let wait = del ? 45 : 95;
    if (!del && c === word.length) { del = true; wait = 1500; }
    else if (del && c === 0) { del = false; w = (w + 1) % words.length; wait = 300; }
    typer = setTimeout(step, wait);
  };
  step();
}
function afterAuteurs() {
  const inp = $("#afilter");
  inp.addEventListener("input", () => {
    const q = norm(inp.value);
    $$("#alpha .a-card").forEach(c => c.hidden = q && !c.dataset.name.includes(q));
  });
}
let tocObs;
function afterAuteur(id, focus) {
  tocObs?.disconnect();
  const cards = $$(".these");
  tocObs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      const i = e.target.id.split("-").pop();
      $$(".toc a").forEach(a => a.classList.toggle("on", a.dataset.toc === i));
    }
  }), { rootMargin: "-30% 0px -60% 0px" });
  cards.forEach(c => tocObs.observe(c));
  if (focus !== undefined) {
    const el = $(`#t-${id}-${focus}`);
    if (el) requestAnimationFrame(() => { el.scrollIntoView({ behavior: "smooth", block: "start" }); el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); });
  }
}
function afterQuestions() {
  $("#qform").addEventListener("submit", e => {
    e.preventDefault();
    const v = $("#qnew").value.trim(); if (!v) return;
    const list = store.get("questions", []);
    list.unshift({ id: "u" + Date.now(), s: LAST_SEANCE.d, statut: "a-poser", q: v });
    store.set("questions", list); qFilter = "a-poser"; toast("Question ajoutée"); route();
  });
}
function updateBadge() {
  const n = allQuestions().filter(q => q.statut === "a-poser").length;
  $("#qbadge").textContent = n || "";
}

/* ---------- Palette de recherche ---------- */
const pal = $("#palette"), pq = $("#pq"), pres = $("#presults");
let sel = 0, lastFocus;
function openPalette(q = "") {
  lastFocus = document.activeElement;
  pal.hidden = false; document.body.style.overflow = "hidden";
  pq.value = q; pq.focus(); renderPalette();
  clearTimeout(typer);
}
function closePalette(restore = true) {
  pal.hidden = true; document.body.style.overflow = "";
  if (restore) { lastFocus?.focus?.(); if (app.dataset.view === "") afterHome(); }
}
function renderPalette() {
  $$(".palette-filters button").forEach(b => b.setAttribute("aria-pressed", b.dataset.src === srcFilter));
  const q = pq.value.trim();
  sel = 0;
  if (!q) {
    const top = Object.values(NOTIONS).sort((a, b) => b.count - a.count).slice(0, 14);
    pres.innerHTML = `<div class="pr-hint"><p>Notions fréquentes</p><div class="chips">${top.map(n => `<button type="button" class="chip" data-fill="${esc(n.label)}">${esc(n.label)}</button>`).join("")}</div>
      <p style="margin-top:18px">Auteurs</p><div class="chips">${AUTEURS.filter(a => a.majeur).map(a => `<a class="chip" href="#/auteur/${a.id}" data-close-nav>${esc(a.nom)}</a>`).join("")}</div></div>`;
    return;
  }
  const nq = norm(q);
  const authors = AUTEURS.filter(a => norm(a.nom).includes(nq)).slice(0, 4);
  const res = search(q);
  const groups = grouped(res);
  let k = 0, html = "";
  if (authors.length) {
    html += `<div class="pr-group"><span>Auteurs</span></div>` + authors.map(a =>
      `<a class="pr-item" style="--i:${k++}" href="#/auteur/${a.id}"><b>${hl(a.nom, q)}</b><span class="pr-meta">${esc(a.dates)} · ${a.theses.length} thèses</span></a>`).join("");
  }
  if (res.length) {
    html += `<div class="pr-group"><span>${res.length} thèse${res.length > 1 ? "s" : ""}</span><a class="link-more" href="#/recherche/${enc(q)}">Tout afficher →</a></div>`;
    groups.forEach(g => g.slice(0, 6).forEach(r => {
      html += `<a class="pr-item" style="--i:${Math.min(k++, 14)}" href="#/auteur/${r.a.id}/${r.i}">
        <b>${hl(r.t.t, q)}</b><span>${hl(r.t.x, q)}</span>
        <span class="pr-meta">${esc(r.a.nom)}${r.t.o ? " · " + esc(r.t.o) : ""} · ${r.t.k === "colle" ? "Colle" : "Cours du " + fshort(r.t.s)}</span></a>`;
    }));
  }
  if (!html) html = `<div class="pr-empty">Aucun résultat pour « ${esc(q)} ». Essayez un mot plus court (ex. « anim ») ou une autre notion.</div>`;
  pres.innerHTML = html;
  markSel();
}
function markSel() {
  const items = $$(".pr-item", pres);
  items.forEach((it, i) => it.classList.toggle("sel", i === sel));
  items[sel]?.scrollIntoView({ block: "nearest" });
}
pq.addEventListener("input", renderPalette);
pq.addEventListener("keydown", e => {
  const items = $$(".pr-item", pres);
  if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(sel + 1, items.length - 1); markSel(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(sel - 1, 0); markSel(); }
  else if (e.key === "Enter") {
    e.preventDefault();
    if (items[sel]) { location.hash = items[sel].getAttribute("href"); closePalette(); }
    else if (pq.value.trim()) { location.hash = "#/recherche/" + enc(pq.value.trim()); closePalette(); }
  }
});

/* ---------- Événements globaux ---------- */
document.addEventListener("click", e => {
  const t = e.target;
  if (t.closest("[data-open-search], #openSearch")) { openPalette(); return; }
  if (t.closest("[data-close]")) { closePalette(); return; }
  const fill = t.closest("[data-fill]");
  if (fill) { pq.value = fill.dataset.fill; renderPalette(); pq.focus(); return; }
  const f = t.closest(".palette-filters button");
  if (f) { srcFilter = f.dataset.src; store.set("src", srcFilter); renderPalette(); pq.focus(); return; }
  const cp = t.closest("[data-copy]");
  if (cp) {
    const [aid, i] = [cp.dataset.copy.slice(0, cp.dataset.copy.lastIndexOf("-")), +cp.dataset.copy.split("-").pop()];
    const a = BYID[aid], th = a.theses[i];
    copy(`${a.nom} — ${th.t}\n${th.x}${th.c ? `\n« ${th.c} »` : ""}${th.o ? `\n(${th.o})` : ""}`);
    return;
  }
  const qf = t.closest("[data-qf]");
  if (qf) { qFilter = qf.dataset.qf; route(); return; }
  const qc = t.closest("[data-qcopy]");
  if (qc) { const q = allQuestions().find(x => x.id === qc.dataset.qcopy); if (q) copy(qText(q)); return; }
  const qs = t.closest("[data-qset]");
  if (qs) { const o = store.get("qstatus", {}); o[qs.dataset.qset] = qs.dataset.v; store.set("qstatus", o); route(); return; }
  const qd = t.closest("[data-qdel]");
  if (qd) { store.set("questions", store.get("questions", []).filter(q => q.id !== qd.dataset.qdel)); route(); return; }
});
document.addEventListener("keydown", e => {
  const typing = /INPUT|TEXTAREA/.test(document.activeElement?.tagName);
  if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); openPalette(); }
  else if (e.key === "Escape" && !pal.hidden) closePalette();
});

route();
})();
