/* =====================================================================
   FICHIER DE PHILOSOPHIE — données
   Thème de l'année : L'HUMANITÉ (cours de L. Giassi, 2026-2027)
   Source : Google Doc du cours relu par le professeur.

   Pour ajouter une thèse : copier un bloc { t: ..., x: ... } dans le
   tableau "theses" de l'auteur.
     t : titre de la thèse          x : explication
     n : notions (mots-clés)        s : séance (date AAAA-MM-JJ)
     o : œuvre / référence          c : citation (facultatif)
     k : "cours" ou "colle"         a : conseil du prof pour la copie (facultatif)
   ===================================================================== */

const THEME = "L’humanité";

const SEANCES = [
  { d: "2026-09-01", titre: "Introduction : étymologie et définitions de l’humanité" },
  { d: "2026-09-07", titre: "Le troisième homme, problèmes métaphysiques, récits des origines" },
  { d: "2026-09-14", titre: "Fonction fabulatrice, origines, partage des hommes et des dieux, Montaigne" },
  { d: "2026-09-21", titre: "Montaigne : fixité du genre, inhumanité, condition humaine, pluralisme" },
  { d: "2026-09-28", titre: "Kant (1) : le point de vue de la raison pure" },
  { d: "2026-10-05", titre: "Kant (2) : double caractère, antinomies, raison pratique" },
  { d: "2026-10-12", titre: "Kant (3) : formules de l’impératif, devoirs, éducation, culture" },
  { d: "2026-11-02", titre: "Kant (4) : histoire, paix perpétuelle, règne des fins, jugement de goût" }
];

const AUTEURS_INCONTOURNABLES = [
  "L’humanité et la condition humaine — extraits des Essais de Montaigne",
  "L’humanité et la dignité humaine — la philosophie morale de Kant",
  "Les lois de développement de l’humanité — la sociologie de Comte",
  "Les leçons de l’anthropologie structurale — Lévi-Strauss",
  "La question de l’humanitas et de l’humanisme — Heidegger"
];

const AUTEURS = [

/* ============================ MONTAIGNE ============================ */
{ id: "montaigne", nom: "Montaigne", dates: "1533 – 1592", courant: "Humanisme de la Renaissance", majeur: true,
  intro: "Auteur incontournable du thème. Il part du moi pour penser l’homme, critique la présomption humaine et l’universel figé, dénonce l’inhumanité des hommes et fait de l’humanité le consentement à la condition humaine.",
  theses: [
  { t: "« Chaque homme porte la forme entière de l’humaine condition »", s: "2026-09-14", k: "cours",
    o: "Essais, III, 2, « Du repentir »",
    c: "Qui se connaît, connaît aussi les autres, car chaque homme porte la forme entière de l’humaine condition.",
    x: "La « forme » n’est pas l’apparence extérieure : il s’agit de réaliser, d’incarner la condition humaine. Paradoxe montanien : comment passer du moi à l’homme, du singulier à l’universel ?",
    n: ["condition humaine", "universel", "individu", "moi"] },
  { t: "Le paradoxe montanien : trois manières d’articuler le moi et l’homme", s: "2026-09-14", k: "cours",
    x: "1) Généraliser à partir d’un cas particulier donne un pseudo-universel qui exclut ceux qui ne correspondent pas à la définition. 2) S’enfermer dans sa particularité interdit tout accès à l’universel (reproche de Pascal : « le moi est haïssable », Montaigne se croirait faussement universel). 3) Montaigne remet en cause ce partage : il part de lui, du « skeletos » (vision immanente, méthode quasi chirurgicale qui décompose l’homme, sans introspection) et non du regard divin.",
    n: ["universel", "individu", "moi", "méthode"] },
  { t: "La destruction de l’humaine présomption", s: "2026-09-14", k: "cours", o: "Apologie de Raymond Sebond (Essais, II, 12)",
    x: "Montaigne étudie « l’homme armé seulement de ses armes », sans Dieu. La présomption est une image idéalisée de l’humanité : surestimation de soi, dévalorisation des autres créatures. Il nivelle animalité et humanité en humanisant les animaux, sans détruire l’humanité. Contre l’échelle des êtres (matière > minéral > végétal > animal > homme > anges > Dieu) défendue par Raymond Sebond.",
    n: ["animal", "présomption", "anthropocentrisme", "échelle des êtres", "Dieu"] },
  { t: "La critique de l’anthropocentrisme : l’oison", s: "2026-09-14", k: "cours", o: "Apologie de Raymond Sebond",
    x: "Texte ironique : un oison juge tout à partir de sa propre existence, comme l’homme qui se croit au centre de l’univers, forme l’invisible à son image et croit que l’invisible fait tout pour lui. Vise les stoïciens (Cicéron, De la nature des dieux), pour qui tout est fait pour le bien de l’homme. Montaigne dénonce aussi sans cesse l’anthropomorphisation de Dieu.",
    n: ["anthropocentrisme", "animal", "Dieu", "stoïcisme"] },
  { t: "La remise en cause du propre de l’homme", s: "2026-09-14", k: "cours", o: "Apologie de Raymond Sebond",
    x: "Montaigne détruit les arguments de la bipédie, de l’intelligence, des outils. La station droite est la plus calamiteuse et fait de l’homme une créature fragile. Langage : nous n’avons pas le droit d’exclure les animaux du langage à cause de notre incompréhension (on peut tout dire par les mains). Intelligence : le chien qui raisonne par l’odorat. Technique : l’hirondelle qui choisit l’emplacement et les matériaux du nid.",
    n: ["animal", "propre de l’homme", "langage", "technique", "intelligence", "corps"] },
  { t: "« Il y a plus de distance de tel homme à tel homme que de tel homme à telle bête »", s: "2026-09-21", k: "cours",
    o: "Formule de Plutarque citée deux fois dans les Essais",
    x: "Première occurrence : différence entre grand homme et homme ordinaire. Seconde, dans l’Apologie : sens radical, qui vise l’éclatement de l’espèce. La différence entre l’homme et le meilleur des animaux est faible, celle entre un homme et un autre homme est la plus grande.",
    n: ["animal", "espèce", "individu", "différence"] },
  { t: "L’unité du sujet est fictive", s: "2026-09-21", k: "cours", o: "Essais, III, 9, « De la vanité »",
    c: "Moi à cette heure et moi tantôt, nous sommes bien deux.",
    x: "Il y a de la différence dans l’individu lui-même. Montaigne est plus radical que le nominalisme d’Occam, qui ne conteste pas qu’il y ait des choses communes entre individus malgré l’absence d’essence commune. Pour Montaigne, l’universel est une fiction.",
    n: ["sujet", "moi", "inconstance", "universel", "identité"] },
  { t: "La critique de la fixité du genre : pluralisme cosmologique et ethnologique", s: "2026-09-21", k: "cours",
    x: "Montaigne ouvre la possibilité d’une cosmologie où notre monde n’est pas le seul. Le pluralisme cosmologique va de pair avec le pluralisme ethnologique pour contester la vision médiévale où chaque chose est à sa place. Cette pluralité n’a rien à voir avec le merveilleux médiéval (Le Goff).",
    n: ["pluralité", "genre", "cosmologie", "altérité"] },
  { t: "La cruauté : le vice extrême", s: "2026-09-21", k: "cours",
    c: "Il n’est rien qui appelle mes larmes autant que les larmes.",
    x: "Cruauté vient de crudelitas, cruor (le sang versé). Elle est un manque d’humanité envers les autres, mais aussi envers soi (macérations médiévales). La souffrance d’autrui nous fait souffrir : commisération.",
    n: ["cruauté", "inhumanité", "souffrance", "pitié", "autrui"] },
  { t: "Le rejet de la torture et des souffrances inutiles", s: "2026-09-21", k: "cours",
    x: "La cruauté n’a aucune efficacité préventive ou curative. Exemple de l’exécution de Catena à Rome : on l’étrangle avant de le démembrer. Pour agir sur les autres, il suffit de l’imagination forte, qui permet de s’identifier à autrui. Il faut rendre justice sans être inhumain : Artaxerxès fait fouetter les habits des fautifs (logique du simulacre). Limite : Montaigne ne voit pas qu’il peut y avoir un plaisir à la violence, car il la rend extérieure à l’homme (causes externes : passions), sans germe de violence en l’homme.",
    n: ["cruauté", "justice", "torture", "violence", "châtiment", "imagination"] },
  { t: "« Un devoir général d’humanité » envers les autres créatures", s: "2026-09-21", k: "cours",
    x: "L’homme a un devoir de prise en charge et de réciprocité envers les autres créatures, y compris les animaux (exemple des enterrements d’animaux chez de nombreux peuples).",
    n: ["animal", "devoir", "humanité", "réciprocité"] },
  { t: "La critique des conquêtes", s: "2026-09-21", k: "cours", o: "Essais, « Des coches »",
    x: "Montaigne dénonce les exactions des colons et des conquérants (un des usages du mot « inhumain » chez lui, avec la mort des gladiateurs et la déportation des juifs). Il y voit surtout la soif de l’or ; Todorov nuancera.",
    n: ["colonisation", "inhumanité", "conquête", "violence"] },
  { t: "La tolérance et l’éloge de Julien l’Apostat", s: "2026-09-21", k: "cours", o: "Essais, II, 19, « De la liberté de conscience »",
    c: "Il n’y a pas de bête au monde tant à craindre à l’homme que l’homme.",
    x: "Chapitre placé au centre du livre II, ce qui traduit l’intention de Montaigne. Julien, revenu au paganisme, n’a pas persécuté les chrétiens : l’égale présence des sectes dans l’espace public affaiblit l’intolérance. Les chrétiens incarnent alors l’intolérance, les païens la tolérance. Cet éloge fait partie des reproches de la censure romaine.",
    n: ["tolérance", "religion", "intolérance", "liberté de conscience"] },
  { t: "Les deux niveaux de la foi", s: "2026-09-21", k: "cours", o: "Apologie de Raymond Sebond",
    x: "La « foi vive » vient de la grâce divine ; la « simple croyance » est mêlée aux passions et intérêts humains. Il n’est pas bon de persécuter son semblable pour sa confession, et c’est une erreur de croire que le martyre serait un gage de vérité. La tolérance doit s’étendre aux hérésies et aux accusés de sorcellerie.",
    n: ["foi", "religion", "tolérance", "croyance", "passions"] },
  { t: "La douceur, et son ambivalence", s: "2026-09-21", k: "cours",
    c: "Nature est un doux guide, mais non pas plus doux que prudent et juste.",
    x: "La douceur de la nature s’oppose à la rudesse des mœurs : refus de frapper les enfants (comme Érasme), « douce et muette tranquillité » comme maire de Bordeaux, persuasion plutôt que violence face aux chasseurs de sorcières. Mais la douceur peut masquer la cruauté (César étrangle les pirates avant de les crucifier), servir l’ironie, ou devenir mollesse obséquieuse (II, 31, « De la colère »).",
    n: ["douceur", "éducation", "nature", "cruauté"] },
  { t: "« Chacun appelle barbarie ce qui n’est pas de son usage »", s: "2026-09-21", k: "cours", o: "Essais, I, 31, « Des cannibales »",
    a: "Citation trop connue : le professeur demande de ne pas l’utiliser dans la copie.",
    x: "Montaigne critique l’ethnocentrisme comme il critique l’anthropocentrisme. Les cannibales ne sont pas plus cruels que nous parce qu’ils mangent leurs ennemis. La barbarie est la survalorisation de sa coutume par rapport à celles des autres. C’est au plus loin de soi qu’on se voit : le détour par la pluralité ethnologique sert à penser son identité. Le monde est le livre dans lequel il faut s’instruire.",
    n: ["barbarie", "coutume", "ethnocentrisme", "relativisme", "altérité", "culture"] },
  { t: "Les coutumes sont indispensables", s: "2026-09-21", k: "cours",
    x: "Après 1585, Montaigne reconnaît une valeur positive aux coutumes : on ne peut imaginer une humanité sans coutume. Dans un monde instable, la coutume donne la stabilité au corps social et évite l’anomie (quitte à « abêtir » l’homme pour avoir la paix). Elle efface la conscience de sa genèse et paraît donc universelle. On s’ouvre à la pluralité de l’humanité par la formation du jugement, par l’éducation.",
    a: "Ne pas employer « tradition » pour « coutume » : la tradition naît de la contestation du passé (Hobsbawm).",
    n: ["coutume", "société", "éducation", "jugement", "stabilité"] },
  { t: "L’humanité, c’est accepter la condition humaine", s: "2026-09-21", k: "cours",
    x: "Montaigne se détache progressivement du stoïcisme : l’immuabilité du sage contredit l’inconstance de l’homme. Critique de l’arrogance du sage (Pyrrhon : « le sage dépouille l’humanité ») et du contemptus mundi (paradoxe du taureau de Phalaris : prétendre que le sage ne souffre pas est inhumain et invraisemblable). Causes du changement : la lecture de Plutarque traduit par Amyot, ses épreuves corporelles (accident de cheval en 1573, calculs rénaux en 1578).",
    n: ["condition humaine", "stoïcisme", "sagesse", "corps", "souffrance"] },
  { t: "Contre le dualisme : la jointure de l’âme et du corps", s: "2026-09-21", k: "cours",
    x: "Platon dit que l’homme est l’âme ; Montaigne le rejette. On ne peut pas purifier l’âme en maltraitant le corps, Dieu ne le demande pas : il ne faut pas être inhumain envers soi-même. Contrairement aux stoïciens, il ne faut pas rejeter les passions. Le « terre à terre » refuse la vaporisation du corps : il faut une culture du corps. Dimension anti-ascétique.",
    n: ["corps", "âme", "dualisme", "passions", "ascétisme"] },
  { t: "Le consentement à la vie finie : « j’aime la vie »", s: "2026-09-21", k: "cours",
    x: "L’humanité, c’est consentir au corps, donc au temps, et jouir de vivre avec les infirmités de l’âge. Celui qui dédaigne son être entre en dualité avec lui-même. La nature est « notre bon guide », « notre mère nourrice ». Comparaison possible avec Nietzsche et le dépassement du ressentiment.",
    n: ["finitude", "vie", "corps", "temps", "bonheur", "nature"] },
  { t: "L’image de la boucle : « Quand je danse, je danse »", s: "2026-09-21", k: "cours",
    a: "Référence peu connue, à valoriser dans la copie.",
    x: "Deux façons de représenter la vie : la ligne droite, désir qui ne trouve jamais satisfaction ; la courbe, contentement de ce qu’on a et de ce qu’on est. C’est la pleine présence au moment présent.",
    n: ["bonheur", "désir", "présent", "temps"] },
  { t: "La métaphore pédestre", s: "2026-09-21", k: "cours", o: "Essais, I, 25, « De l’institution des enfants »",
    c: "Nous sommes tous contraints et amoncelés en nous, et avons la vue raccourcie à la longueur de notre nez.",
    a: "Référence à utiliser : elle sera peu présente dans les copies, qui se contentent des formules générales.",
    x: "Sens négatif : on ne regarde que le bout de ses pieds, vue bornée. Sens positif : Socrate a les pieds sur terre, il incarne une vie pleinement humaine et terre à terre. Le Socrate de Xénophon est un Socrate à échelle humaine. En ancien français, « esprit » est « imagination » : il faut un déverrouillement des possibles.",
    n: ["Socrate", "sagesse", "imagination", "ouverture"] },
  { t: "Une humanité ouverte : suspendre le jugement, accueillir le monstre", s: "2026-09-21", k: "cours",
    x: "Les hommes se hâtent de généraliser à partir de ce qu’ils ont vu : il faut garder le plus possible l’indétermination du jugement et ne pas enfermer les gens dans des catégories. Le monstre est une forme de vie inconnue qui ne doit pas être diabolisée. L’humanité se forme par composition et par rencontre.",
    n: ["jugement", "monstre", "altérité", "pluralité", "cosmopolitisme"] },
  { t: "Le voyage : « la plupart ne vont au loin que pour en revenir »", s: "2026-09-21", k: "cours", o: "Essais, III, 9",
    x: "Le voyage ne sert à rien quand les voyageurs évitent de mettre en cause leurs coutumes. La découverte de l’altérité suppose d’accepter d’être déplacé. Une humanité sans coutume reste impossible.",
    n: ["voyage", "altérité", "coutume"] },
  { t: "La censure des Essais à Rome", s: "2026-09-14", k: "cours",
    x: "Reproches : condamnation de la torture, usage du mot « fortune » au lieu de « providence », éloge de Julien l’Apostat, conditions posées à la prière (âme « déchargée de passions »). Réponse de Montaigne : il augmente les occurrences de « fortune » (173 → 349) et distingue théologien et philosophe.",
    n: ["religion", "censure", "Dieu"] }
]},

/* ============================== KANT ============================== */
{ id: "kant", nom: "Kant", dates: "1724 – 1804", courant: "Criticisme", majeur: true,
  intro: "Auteur incontournable du thème : l’humanité et la dignité humaine. La finitude de la connaissance protège l’homme de toute réduction objectivante ; la raison pratique fonde la dignité ; l’humanité se réalise dans l’éducation, la culture et l’histoire.",
  theses: [
  { t: "La révolution copernicienne : l’humanité ne connaît qu’elle-même", s: "2026-09-28", k: "cours", o: "Critique de la raison pure, préface de la 2e édition",
    c: "Nous ne connaissons a priori des choses que ce que nous y mettons nous-mêmes.",
    x: "Kant part du sujet : les conditions de possibilité de l’expérience sont les conditions de possibilité des objets de l’expérience. Image du « voile d’Isis » (Novalis) : en soulevant le voile de la nature, on se voit soi-même.",
    n: ["connaissance", "sujet", "raison"] },
  { t: "« J’ai dû supprimer le savoir pour faire place à la croyance »", s: "2026-09-28", k: "cours", o: "Critique de la raison pure, préface",
    x: "Dieu, la liberté et l’immortalité ne peuvent être connus : il faut repousser les prétentions de la raison pure à des vues transcendantes pour admettre ces idées selon le besoin de la raison pratique. Il est de l’intérêt de l’humanité de résoudre les questions spéculatives relatives à la morale.",
    n: ["croyance", "Dieu", "liberté", "métaphysique", "raison"] },
  { t: "Les quatre questions : tout se ramène à « Qu’est-ce que l’homme ? »", s: "2026-09-28", k: "cours", o: "Logique",
    x: "Que puis-je savoir ? (métaphysique) Que dois-je faire ? (morale) Que m’est-il permis d’espérer ? (religion) Qu’est-ce que l’homme ? (anthropologie). Les trois premières se rapportent à la dernière. Mais la philosophie ne devient pas anthropologie : l’Anthropologie d’un point de vue pragmatique est empirique, la philosophie est rationnelle.",
    n: ["homme", "anthropologie", "morale", "religion", "connaissance"] },
  { t: "« L’homme est à lui-même sa propre et dernière fin »", s: "2026-09-28", k: "cours", o: "Anthropologie d’un point de vue pragmatique, préface",
    a: "Expliquer dans la copie ce que cela veut dire : normalement l’humanité réalise des fins, elle n’est pas sa propre fin.",
    x: "L’objet le plus important auquel l’homme puisse appliquer son expérience, c’est l’homme lui-même.",
    n: ["fin", "homme", "anthropologie"] },
  { t: "Finitude du sujet : on ne connaît que des phénomènes", s: "2026-09-28", k: "cours", o: "Critique de la raison pure, Esthétique transcendantale",
    x: "Connaître = concept + intuition. Il y a une intuition pure a priori (espace et temps) irréductible à l’intelligible. L’intuition intellectuelle, qui crée son objet, est réservée à Dieu. Nous ne connaissons que des phénomènes, jamais les choses en soi (noumènes), que nous pouvons seulement penser. On ne peut donc pas connaître l’âme comme substance simple.",
    n: ["finitude", "connaissance", "âme", "phénomène", "chose en soi"] },
  { t: "La critique de la psychologie rationnelle", s: "2026-10-05", k: "cours",
    x: "Syllogisme : une substance simple est immortelle ; l’âme est une substance simple ; donc l’âme est immortelle. Mais je ne peux pas construire le concept d’âme dans l’intuition, faute d’intuition intellectuelle. Les mathématiques construisent leurs concepts dans l’intuition pure ; la métaphysique ne le peut pas. L’âme devient une idée de la raison, un « programme de recherche » (Lakatos).",
    n: ["âme", "métaphysique", "immortalité", "connaissance"] },
  { t: "Le double caractère remplace le dualisme âme / corps", s: "2026-09-28", k: "cours",
    x: "Caractère empirique : moi comme individu qui ne se distingue pas de la nature (point de vue naturaliste : nous sommes faits des mêmes briques qu’une mouche, François Jacob). Caractère intelligible : ce qui distingue l’individu de la nature, l’humanité. Le point de vue moral préserve ainsi une liberté qui fait la dignité et la responsabilité de l’homme.",
    n: ["liberté", "nature", "dignité", "corps", "âme", "science"] },
  { t: "L’entendement, législateur de la nature", s: "2026-10-05", k: "cours", o: "Critique de la raison pure, Analytique transcendantale",
    x: "L’entendement est la faculté des règles : il fait de la nature un système unifié par des lois nécessaires. La loi de la nature (entendement) n’est pas la loi morale (raison pratique). La finitude de l’individu n’exclut pas l’infini de l’humanité par la succession des générations (contre Montaigne).",
    n: ["nature", "entendement", "loi", "finitude"] },
  { t: "La troisième antinomie : liberté et causalité naturelle", s: "2026-10-05", k: "cours", o: "Critique de la raison pure, Dialectique",
    x: "Thèse (dogmatique, intérêt pratique) : il existe une causalité libre, capable de commencer une série de phénomènes. Antithèse (empiriste) : tout arrive selon les lois de la nature. Solution : le monde n’étant pas connaissable en soi, il n’y a pas d’incompatibilité : l’homme peut être libre comme chose en soi et déterminé comme sujet empirique.",
    n: ["liberté", "déterminisme", "nature", "métaphysique"] },
  { t: "La finité positive : sauver l’homme de la réduction objectivante", s: "2026-10-05", k: "cours",
    x: "Quand la raison théorique prend l’homme pour objet, elle tend à le déshumaniser (Lévi-Strauss veut « dissoudre l’homme » ; Taine : « le vice et la vertu sont des produits, comme le vitriol et le sucre »). La limite de la connaissance protège la personne : le caractère intelligible résiste à toute saisie extérieure et permet de penser un progrès moral.",
    c: "Une science de faits ne donne qu’une humanité de faits. (Husserl)",
    n: ["finitude", "science", "dignité", "personne", "humanité"] },
  { t: "Les postulats de la raison pratique", s: "2026-10-05", k: "cours", o: "Critique de la raison pratique",
    x: "Ce que la raison pure ne peut prouver, la raison pratique le postule : liberté, immortalité de l’âme, Dieu qui proportionne le bonheur à la moralité. Sans eux la vie n’aurait pas plus de sens qu’un tournebroche. Kant remplace l’immortalité de l’âme par la moralisation à l’infini.",
    n: ["liberté", "Dieu", "immortalité", "croyance", "morale"] },
  { t: "La morale ne rend pas heureux, mais digne du bonheur", s: "2026-10-05", k: "cours",
    x: "Le bonheur n’est pas un concept moral : on ne peut forger un concept universel de ce qui plaît. Chercher son propre bonheur n’est pas moral ; mais faire le bonheur d’autrui est un devoir. Le souverain bien est assuré par la médiation de Dieu. Schopenhauer : le bonheur reste de l’égoïsme.",
    n: ["bonheur", "morale", "devoir", "autrui"] },
  { t: "Volonté = raison pratique : la loi morale comme fait de la raison", s: "2026-10-05", k: "cours", o: "Critique de la raison pratique",
    x: "La volonté se détermine par une maxime. Kant rejette la règle d’or, qui vise les conséquences extérieures. La loi morale est un factum rationis, immanent à la volonté. Seule la volonté de Dieu est identique à la loi morale : l’homme n’est pas bon par nature.",
    n: ["volonté", "morale", "raison", "loi"] },
  { t: "« Le bois courbe dont l’homme est fait »", s: "2026-10-12", k: "cours", o: "Idée d’une histoire universelle",
    x: "On ne peut pas redresser l’humanité sans la casser. Idée de l’homo curvus, penché vers la terre (Augustin, Luther). L’homme a besoin d’un maître, mais ne peut pas en trouver un qui ne soit pas lui-même un homme.",
    n: ["mal", "nature humaine", "politique", "éducation"] },
  { t: "Morale anti-conséquentialiste, contre les morales du sentiment", s: "2026-10-05", k: "cours", o: "Observations sur le sentiment du beau et du sublime",
    x: "Agir par devoir, sans tenir compte des conséquences. Rembourser son créancier passe avant donner au mendiant : on combat alors le penchant à l’avarice. Au XVIIIe siècle dominent les morales de la sympathie et de la pitié (Diderot, drame bourgeois) ; pour Kant, la sensibilité est trop changeante.",
    n: ["devoir", "morale", "sensibilité", "pitié"] },
  { t: "1re formule : l’universalité", s: "2026-10-05", k: "cours", o: "Fondements de la métaphysique des mœurs, II",
    c: "Agis uniquement d’après la maxime qui fait que tu puisses vouloir en même temps qu’elle devienne une loi universelle.",
    x: "Seul l’impératif catégorique (« tu dois ») compte pour la morale, pas les impératifs hypothétiques d’habileté et de prudence. L’universalité évite l’introspection (personne ne peut objectiver son intention). Cas de conscience : la cargaison de blé (Cicéron, Des devoirs) ; Antigone et les lois non écrites.",
    n: ["morale", "universel", "impératif", "devoir"] },
  { t: "2e formule : l’humanité comme fin en soi", s: "2026-10-05", k: "cours", o: "Fondements de la métaphysique des mœurs, II",
    c: "Agis de telle sorte que tu traites l’humanité aussi bien dans ta personne que dans la personne de tout autre toujours en même temps comme une fin, et jamais simplement comme un moyen.",
    x: "Principe de dignité : l’homme a une valeur absolue. Mais qu’est-ce que traiter l’humanité ? Elle n’est pas mon corps. Le salarié est un moyen pour l’employeur, mais par un contrat libre. Le personnalisme (Mounier) prolonge ce respect de la personne.",
    n: ["dignité", "personne", "fin", "moyen", "humanité", "travail"] },
  { t: "Paradoxe : aucune définition de l’humanité chez Kant", s: "2026-10-12", k: "cours",
    x: "L’humanité ne se définit que par la fin en soi et la dignité. Il existe des êtres raisonnables non humains (les anges) : l’homme est un être raisonnable incarné, ce qui sort de l’anthropocentrisme. L’humanité ne se manifeste pas par le corps (contrairement à Hegel).",
    n: ["humanité", "définition", "anthropocentrisme", "corps"] },
  { t: "Le suicide, le mariage, le mensonge : une morale inhumaine ?", s: "2026-10-12", k: "cours",
    x: "Le suicide est interdit, non comme interdit divin, mais parce qu’il fait du corps un moyen. Le mariage est pensé comme usage du corps de l’autre (ce qui indigne Hegel). Il ne faut jamais mentir, même pour éviter un crime (controverse avec Constant). La morale kantienne ignore circonstances et exceptions. Critiques : Ogien (la dignité n’est pas opératoire), la greffe (autrui me sert de moyen pour vivre, J.-L. Nancy, L’Intrus).",
    n: ["suicide", "mensonge", "corps", "dignité", "morale"] },
  { t: "3e formule : l’autonomie, chacun co-législateur", s: "2026-10-12", k: "cours", o: "Fondements de la métaphysique des mœurs, II",
    c: "L’idée de la volonté de tout être raisonnable conçue comme volonté instituant une législation universelle.",
    x: "Le singulier communique avec l’universel. Écho de Rousseau : « l’obéissance à la loi qu’on s’est prescrite est liberté ».",
    n: ["autonomie", "liberté", "loi", "universel"] },
  { t: "Le tribunal de la conscience et le sentiment de respect", s: "2026-10-12", k: "cours",
    x: "L’homme nouménal juge l’homme phénoménal : dédoublement qui correspond au double caractère. Le respect médiatise sensibilité (crainte devant la majesté de la loi) et raison (analogie avec l’amour, car la loi vient de nous). C’est la loi qu’on respecte, pas la personne singulière. Dieu juge est une idée forgée par la raison pratique ; la prière est superstition.",
    n: ["conscience", "respect", "Dieu", "dualisme"] },
  { t: "Les devoirs envers soi et envers autrui", s: "2026-10-12", k: "cours", o: "Doctrine de la vertu",
    x: "Envers soi comme être animal : vices qui font du corps un moyen (suicide, excès, souillure). Envers soi comme être moral : mensonge, avarice (vivre indécemment par peur de consommer), fausse humilité. Envers autrui : bienveillance active sans affection (vices : envie, ingratitude, joie maligne) et respect de la dignité. Pas de devoirs directs envers les animaux ni envers Dieu : ce sont des devoirs envers soi.",
    n: ["devoir", "animal", "corps", "autrui", "respect", "Dieu"] },
  { t: "L’éducation : transformer l’animalité en humanité", s: "2026-10-12", k: "cours", o: "Réflexions sur l’éducation",
    x: "Éducation = soins + discipline (limiter les penchants brutaux) + instruction. Il faut éduquer selon « l’idée de l’humanité », en vue du futur et pas de la situation présente. Boucle du progrès : l’art d’éduquer perfectionne l’humanité, qui perfectionne l’art d’éduquer. Après la discipline vient l’autonomie : supprimer les châtiments et les récompenses pour que l’enfant fasse le bien pour le bien.",
    n: ["éducation", "animal", "progrès", "perfectibilité", "enfance", "autonomie"] },
  { t: "Le mal radical : un penchant, pas une nature", s: "2026-10-12", k: "cours", o: "La Religion dans les limites de la simple raison",
    x: "La disposition au bien est originelle, le penchant au mal acquis. Trois degrés : fragilité, impureté (motifs mêlés), méchanceté (mal choisi). L’homme est mauvais par nature en tant qu’il a contracté le mal ; on ne peut l’extirper, mais on doit vouloir le dominer. Cela n’empêche pas la perfectibilité.",
    n: ["mal", "nature humaine", "perfectibilité", "liberté"] },
  { t: "L’insociable sociabilité", s: "2026-10-12", k: "cours", o: "Idée d’une histoire universelle, 4e proposition",
    x: "Application des forces newtoniennes d’attraction et de répulsion : je ne peux vivre seul, mais les autres me heurtent. Le conflit développe les talents ; sans l’aiguillon du besoin, les hommes seraient des « bergers d’Arcadie » oisifs. Rapprochement avec la main invisible de Smith. Contre-image : les hérissons de Schopenhauer.",
    n: ["société", "conflit", "culture", "progrès", "passions"] },
  { t: "L’historicité naît de l’inadéquation entre l’individu et le genre", s: "2026-11-02", k: "cours", o: "Idée d’une histoire universelle",
    x: "Aucun individu ne peut développer seul toutes les dispositions de la raison : elles ne se développent que dans l’espèce, au fil des générations. Kant pense dynamiquement le rapport genre / individu : la Bestimmung (destination) de l’individu.",
    n: ["histoire", "individu", "espèce", "raison", "destination"] },
  { t: "Vers la paix perpétuelle : une confédération d’États", s: "2026-11-02", k: "cours", o: "Vers la paix perpétuelle",
    x: "Ce qui vaut de la société civile vaut des États. Solution : une fédération, pas un État mondial (oppression générale). La paix est un devoir moral (contre Machiavel), mais Kant n’est pas un pacifiste immédiat : la guerre met les peuples en rapport. Il compte sur le dépérissement de la guerre, car les peuples refuseront d’en payer le coût. Moyens : constitution républicaine (liberté, dépendance à une législation unique, égalité), publicité, non-ingérence, fin des armées permanentes et des dettes de guerre.",
    n: ["paix", "guerre", "politique", "cosmopolitisme", "droit", "État"] },
  { t: "Le « peuple de démons »", s: "2026-11-02", k: "cours", o: "Vers la paix perpétuelle",
    x: "Cas-limite : même des êtres égoïstes, pourvu qu’ils soient intelligents, se soumettraient à des lois dont la sanction est immédiate. On n’a pas besoin de supposer que les hommes veulent le bien pour fonder un État de droit. Rapprochement : Nicole, De la charité et de l’amour-propre.",
    n: ["droit", "État", "égoïsme", "politique"] },
  { t: "Moraliste politique contre politique moral", s: "2026-11-02", k: "cours", o: "Vers la paix perpétuelle, appendice",
    x: "Le moraliste politique se fabrique une morale à sa convenance, à court terme : fac et excusa, si fecisti nega, divide et impera. Le politique moral fait passer le droit avant l’intérêt : l’humanité est aussi dialogue.",
    n: ["politique", "morale", "machiavélisme"] },
  { t: "L’humanité progresse-t-elle ? Le signe historique", s: "2026-11-02", k: "cours", o: "Le Conflit des facultés",
    x: "Trois hypothèses rejetées : le « terrorisme moral » (régression continue), l’eudémonisme ou chiliasme (progrès constant, impossible car le bien vient de causes finies), l’abdéritisme (oscillation, rocher de Sisyphe). Un événement prouve la tendance morale de l’humanité : l’enthousiasme désintéressé des spectateurs de la Révolution française, « une sympathie d’aspiration qui frise l’enthousiasme ». Le progrès porte sur la légalité, pas sur la moralité.",
    n: ["histoire", "progrès", "révolution", "enthousiasme"] },
  { t: "L’homme, membre du règne des fins", s: "2026-11-02", k: "cours", o: "Fondements de la métaphysique des mœurs",
    x: "Sécularisation du « règne de la grâce » de Leibniz. L’humanité est pensée comme communauté morale universelle, plus large que toute communauté politique. Elle se réalise dans les interactions avec autrui : le règne des fins est un horizon. Contre les critiques de l’universalisme abstrait (culturalisme, communautariens, pensée décoloniale) : nier la possibilité de se mettre à la place de l’autre enferme chacun dans son identité.",
    n: ["règne des fins", "universel", "communauté", "autrui", "identité"] },
  { t: "Les maximes du sens commun", s: "2026-11-02", k: "cours", o: "Critique de la faculté de juger, § 40",
    x: "Penser par soi-même (sans préjugés), penser en se mettant à la place de l’autre, penser de manière conséquente. Se mettre à la place de l’autre par la réflexion et non par le sentiment, en imaginant les objections qu’on peut se faire (pas seulement « penser contre soi », Sartre).",
    n: ["jugement", "autrui", "sens commun", "intersubjectivité"] },
  { t: "L’homme, fin ultime de la nature", s: "2026-11-02", k: "cours", o: "Critique de la faculté de juger",
    x: "La troisième Critique jette un pont entre nature et liberté. L’homme est fin en soi ; la nature est pensée selon la finalité (organismes, finalité sans fin du beau). L’homme comme fin ultime (Endzweck) de la nature articule les deux.",
    n: ["nature", "liberté", "fin", "finalité"] },
  { t: "« Le beau est le symbole du bien »", s: "2026-11-02", k: "cours", o: "Critique de la faculté de juger",
    x: "Le beau est l’harmonie libre de l’imagination et de l’entendement ; il plaît sans intérêt, prétend à l’universel et suppose un sens commun. Finalité sans fin (critique de l’art engagé). Le sublime (mathématique ou dynamique) est un désaccord : la raison fait violence à l’imagination. Le jugement de goût est dialogique : il se prête à la discussion. Celui qui éprouve le beau a de bonnes dispositions morales.",
    n: ["beau", "goût", "jugement", "sublime", "art", "morale"] }
]},

/* ============================ ARISTOTE ============================ */
{ id: "aristote", nom: "Aristote", dates: "384 – 322 av. J.-C.", courant: "Philosophie antique",
  intro: "L’universel existe, mais seulement dans les individus : l’humanité n’est ni une fiction ni un être séparé.",
  theses: [
  { t: "L’universel existe, mais pas séparément des individus", s: "2026-09-01", k: "cours", o: "Métaphysique ; Catégories",
    x: "Je peux séparer l’universel des individus par la pensée, pas en réalité. Les individus sont substances premières ; l’universel (la forme) est substance seconde. Pour connaître l’universel je pars des individus (dimension gnoséologique), mais c’est l’universel présent en eux qui explique leur nature (dimension ontologique). L’humanité n’est pas une fiction, mais elle n’existe pas comme être séparé.",
    n: ["universel", "individu", "substance", "espèce", "humanité"] },
  { t: "« L’homme engendre l’homme »", s: "2026-09-01", k: "cours",
    x: "La procréation assure la perpétuité de l’humanité : l’homme comme espèce est éternel, mais l’homme en soi n’existe pas séparément des individus. « L’espèce est plus substance que le genre. »",
    n: ["espèce", "reproduction", "éternité"] },
  { t: "L’homme est un animal qui a le logos, un animal politique", s: "2026-09-07", k: "cours", o: "Politiques, I, 2",
    x: "Zôon logon echon : le logos différencie l’homme. « Animal » désigne ici l’être animé, pas la bête sauvage. Aristote donne aussi la définition zoologique, moins citée, d’« animal bipède ».",
    n: ["animal", "langage", "politique", "définition", "raison"] },
  { t: "Le propre et l’essence", s: "2026-09-14", k: "cours", o: "Topiques",
    x: "L’essence (définition) exprime la quiddité. Le propre appartient à la chose sans dire son essence (« seul animal qui rit », « capable d’apprendre la grammaire »). Le genre se dit de sujets qui diffèrent par l’espèce. L’accident peut appartenir ou non à une chose.",
    n: ["essence", "propre de l’homme", "définition", "genre", "rire"] },
  { t: "« L’individu est ineffable » : il n’y a de science que du général", s: "2026-09-14", k: "cours", o: "Seconds Analytiques ; Poétique",
    x: "On peut faire un récit sur Socrate, pas une démonstration. La poésie est plus philosophique que l’histoire : elle dit ce qui pourrait être, l’histoire ce qui a été. Je connais ce qui fait de Socrate un homme, pas sa « socratité ».",
    n: ["individu", "science", "universel", "histoire", "poésie"] },
  { t: "La subordination de la femme", s: "2026-09-21", k: "cours", o: "De la génération des animaux",
    x: "Dans sa théorie de la procréation, la femme apporte la matière passive, l’homme la forme active et l’âme. Elle serait du côté du froid (incapable de « cuire » l’aliment). Quand Aristote parle de l’homme raisonnable, il ne parle pas de la femme. Marie de Gournay subvertira cette théorie.",
    n: ["femme", "procréation", "inégalité", "corps"] },
  { t: "La règle de Lesbos", s: "2026-09-21", k: "cours", o: "Éthique à Nicomaque, V",
    x: "Règle souple des architectes qui épouse les courbes. Montaigne en fait l’image de la raison « molle », soumise à nos préjugés.",
    n: ["raison", "équité", "jugement"] },
  { t: "La colère, sentiment de l’injustice", s: "2026-09-21", k: "cours", o: "Rhétorique",
    x: "Pour les aristotéliciens, la colère est le sentiment de l’injustice et le bon orateur sait susciter les passions ; pour les stoïciens, toute passion est une maladie de l’âme.",
    n: ["passions", "colère", "justice"] }
]},

/* ============================= PLATON ============================= */
{ id: "platon", nom: "Platon", dates: "428 – 348 av. J.-C.", courant: "Philosophie antique",
  intro: "L’homme en soi existe comme Idée intelligible ; l’humanité vulgaire participe de l’éternité par la reproduction, le sage par la contemplation.",
  theses: [
  { t: "L’homme en soi existe même sans l’homme empirique", s: "2026-09-01", k: "cours", o: "République, X (le lit)",
    x: "La définition intelligible du lit est le vrai lit ; de même l’Idée d’homme existe indépendamment des hommes sensibles, qui en participent.",
    n: ["universel", "Idée", "essence", "humanité"] },
  { t: "L’argument du troisième homme", s: "2026-09-07", k: "cours", o: "Parménide",
    x: "Si l’Idée d’homme et les hommes sensibles forment une pluralité, il faut une troisième Idée pour les unifier, puis une quatrième, à l’infini. L’argument feint d’accepter le dualisme platonicien pour mieux le détruire. Réponse platonicienne : l’intelligible et le sensible sont hétérogènes, on ne peut pas les englober dans une Idée supérieure.",
    n: ["universel", "Idée", "participation", "métaphysique"] },
  { t: "Le mythe d’Aristophane : l’amour comme recherche de la moitié perdue", s: "2026-09-07", k: "cours", o: "Banquet",
    x: "Les hommes étaient doubles (HF, HH, FF) ; Zeus les a coupés en deux pour les punir et ils cherchent à se rejoindre. L’humanité s’accomplirait par un retour à l’origine.",
    n: ["amour", "mythe", "origine", "désir"] },
  { t: "Participer de l’éternité : reproduction ou contemplation", s: "2026-09-07", k: "cours", o: "Banquet ; Timée",
    c: "Le temps est l’image mobile de l’éternité. (Timée)",
    x: "L’humanité vulgaire participe indirectement de l’éternité par la reproduction (Aphrodite terrestre) ; le sage y participe en contemplant le beau en soi, au terme de la dialectique ascendante : beaux corps, belles âmes, belles sciences, Idée du beau.",
    n: ["éternité", "beau", "amour", "sagesse", "reproduction"] }
]},

/* =========================== LÉVI-STRAUSS =========================== */
{ id: "levi-strauss", nom: "Lévi-Strauss", dates: "1908 – 2009", courant: "Anthropologie structurale", majeur: true,
  intro: "Auteur incontournable du thème (les leçons de l’anthropologie structurale). Apparaît pour l’instant de façon dispersée dans le cours.",
  theses: [
  { t: "Préserver la diversité des cultures", s: "2026-09-21", k: "cours", o: "Race et culture",
    x: "On ne peut pas supprimer les barrières culturelles : on formerait une homogénéité dangereuse. La destruction de l’identité des cultures est un danger.",
    n: ["culture", "diversité", "relativisme", "identité"] },
  { t: "« Dissoudre l’homme »", s: "2026-10-05", k: "cours", o: "La Pensée sauvage",
    x: "L’homme ne doit plus se voir comme supérieur, unité, « maître de soi comme de l’univers ». Kant y répond d’avance : la raison pratique limite la dissolution de l’humanité.",
    n: ["science", "humanité", "anthropocentrisme", "sciences humaines"] },
  { t: "L’échange fonde la société", s: "2026-09-14", k: "cours", o: "Les Structures élémentaires de la parenté",
    x: "Échange des mots, des biens, des femmes. La prohibition de l’inceste a un volet négatif (interdit) et positif (obligation d’échange). Les cyclopes, sans sacrifice, s’excluent de l’échange.",
    n: ["échange", "société", "inceste", "culture"] },
  { t: "La nostalgie des commencements", s: "2026-09-14", k: "cours", o: "Tristes tropiques ; « Leçon d’écriture »",
    x: "Lévi-Strauss parle de « la grandeur des commencements », comme s’il regrettait une humanité primitive dont le mode de vie plus simple aurait beaucoup à nous apprendre. Pour lui le symbolique est déjà préfiguré dans la nature.",
    n: ["origine", "nature", "culture", "primitif"] },
  { t: "Une machine à fabriquer des représentations transcendantes", s: "2026-11-02", k: "cours",
    x: "Paradoxe : Lévi-Strauss adopte une approche culturelle de l’humanité tout en considérant qu’il existe chez l’homme une machine universelle à produire des représentations.",
    n: ["culture", "universel", "culturalisme"] }
]},

/* ============================ BERGSON ============================ */
{ id: "bergson", nom: "Bergson", dates: "1859 – 1941", courant: "Spiritualisme",
  intro: "La fonction fabulatrice protège les sociétés humaines contre les effets dissolvants de l’intelligence.",
  theses: [
  { t: "La fonction fabulatrice", s: "2026-09-14", k: "cours", o: "Les Deux Sources de la morale et de la religion",
    x: "L’élan vital aboutit à deux types de sociétés : d’insectes (instinct) et humaines (intelligence). Les sociétés humaines ne subsistent que par la fonction fabulatrice, résidu d’instinct, qui protège contre 1) le pouvoir dissolvant de l’intelligence (qui isole et mène à l’égoïsme), 2) la représentation angoissante de la mort, 3) le découragement face à l’échec. Bergson va plus loin que les Lumières, qui ne voyaient dans la religion que superstition et domination.",
    n: ["mythe", "religion", "société", "intelligence", "mort", "instinct"] },
  { t: "Homo faber et homo loquax", s: "2026-09-07", k: "cours",
    x: "L’homme se définit comme fabricant d’outils et comme être bavard.",
    n: ["définition", "technique", "langage"] }
]},

/* ========================== SCHOPENHAUER ========================== */
{ id: "schopenhauer", nom: "Schopenhauer", dates: "1788 – 1860", courant: "Pessimisme",
  intro: "L’homme est un animal métaphysique : il s’étonne de l’existence elle-même, surtout devant la souffrance.",
  theses: [
  { t: "L’homme est un animal métaphysique", s: "2026-09-14", k: "cours", o: "Le Monde comme volonté et comme représentation, suppléments",
    x: "Variation sur l’animal politique d’Aristote. Deux étonnements : devant les choses étonnantes (éclipses), qui donne la science ; devant ce qui n’étonne personne, l’existence. Ce qui stimule le plus est l’expérience de la souffrance. Contre le vouloir-vivre aveugle, l’homme dépasse son animalité en pensant.",
    n: ["définition", "métaphysique", "étonnement", "souffrance", "animal"] },
  { t: "Les hérissons", s: "2026-10-12", k: "cours", o: "Parerga et Paralipomena",
    x: "Les hérissons se rapprochent quand ils ont froid, se piquent et s’éloignent. Contre l’optimisme de l’insociable sociabilité kantienne.",
    n: ["société", "autrui", "conflit"] },
  { t: "Critique de la morale kantienne", s: "2026-10-05", k: "cours",
    a: "Ne pas reprendre dans la copie son allusion venimeuse au judaïsme.",
    x: "Il voit dans la morale kantienne un résidu religieux qui ne respecte pas le vivant ; le bonheur reste toujours de l’égoïsme.",
    n: ["morale", "vivant", "bonheur"] }
]},

/* ============================= CASSIRER ============================ */
{ id: "cassirer", nom: "Cassirer", dates: "1874 – 1945", courant: "Néokantisme",
  intro: "L’homme est un animal symbolique.",
  theses: [
  { t: "L’homme est un animal symbolique", s: "2026-09-14", k: "cours", o: "Essai sur l’homme",
    x: "L’homme se définit par la culture, qui externalise l’esprit : il objective son esprit dans des matériaux sensibles auxquels il donne une signification (religion, art, philosophie). Définition de l’homme par la médiation de l’esprit.",
    n: ["définition", "culture", "symbole", "esprit", "art", "religion"] }
]},

/* ============================== HEGEL ============================== */
{ id: "hegel", nom: "Hegel", dates: "1770 – 1831", courant: "Idéalisme allemand",
  intro: "L’homme est un être inquiet qui devient pour soi en transformant le monde.",
  theses: [
  { t: "L’homme, être inquiet (Unruhe)", s: "2026-09-14", k: "cours", o: "Cours d’esthétique ; Philosophie de l’esprit",
    x: "L’homme ne peut s’en tenir au donné : il transforme le monde et se transforme. Il devient pour soi par son activité pratique. L’enfant qui jette des cailloux dans l’eau pour voir les ronds, ou qui casse ses jouets, veut agir.",
    n: ["définition", "conscience de soi", "travail", "enfance", "action"] },
  { t: "La reconnaissance entre consciences", s: "2026-10-12", k: "cours", o: "Phénoménologie de l’esprit",
    x: "Dans la dialectique du maître et du serviteur, l’homme rencontre son semblable et les consciences se reconnaissent comme humaines (chez Kant, la reconnaissance n’est que gratitude).",
    n: ["reconnaissance", "autrui", "conscience"] },
  { t: "La liberté se réalise objectivement", s: "2026-10-05", k: "cours", o: "Principes de la philosophie du droit",
    x: "L’être objectif que je suis se réalise dans la propriété. Hegel s’indigne de la conception kantienne du mariage comme usage du corps d’autrui.",
    n: ["liberté", "droit", "propriété", "mariage"] }
]},

/* ============================ NIETZSCHE ============================ */
{ id: "nietzsche", nom: "Nietzsche", dates: "1844 – 1900", courant: "Généalogie",
  intro: "Il déconstruit les illusions morales de l’homme, animal malade de la culpabilité.",
  theses: [
  { t: "Penser l’homme comme une cascade", s: "2026-10-05", k: "cours", o: "Humain, trop humain",
    x: "Chaque goutte d’une cascade obéit aux lois de la nature : pourquoi pas l’homme ? La liberté serait une illusion ; l’homme est un animal malade de la culpabilité.",
    n: ["liberté", "déterminisme", "morale", "culpabilité"] },
  { t: "L’éloge des vertus altruistes, instrument de manipulation", s: "2026-10-12", k: "cours", o: "Le Gai Savoir, § 21",
    x: "Les classes supérieures font l’éloge des vertus de sacrifice pour l’humanité afin de faire de ceux qui les pratiquent des moyens au service d’une fin qui les dépasse.",
    n: ["morale", "devoir", "sacrifice", "domination"] },
  { t: "La cruauté au cœur de la morale", s: "2026-09-21", k: "cours", o: "Généalogie de la morale",
    x: "Il cite Thomas d’Aquin : voir souffrir les damnés serait une des jouissances des bienheureux.",
    n: ["cruauté", "religion", "souffrance"] }
]},

/* ========================== MARIE DE GOURNAY ========================== */
{ id: "gournay", nom: "Marie de Gournay", dates: "1565 – 1645", courant: "Humanisme",
  intro: "Disciple de Montaigne, elle applique sa critique de la présomption à la hiérarchie des sexes.",
  theses: [
  { t: "Égalité des hommes et des femmes", s: "2026-09-21", k: "cours", o: "Égalité des hommes et des femmes (1622)",
    x: "On ne peut pas exclure la moitié du genre humain. Elle critique la hiérarchie de la nature comme fondement de celle des sexes : s’il n’y a que des individus singuliers, ils sont incommensurables donc égaux. La misogynie démontre le manque de raison de ceux qui reprochent aux femmes d’en manquer. Il suffirait de laisser les femmes aux affaires pour réduire la distance.",
    n: ["femme", "égalité", "présomption", "raison"] },
  { t: "« L’animal humain n’est ni homme ni femme »", s: "2026-09-21", k: "cours",
    x: "L’humanité ne peut pas être séparée en deux ; l’animal humain se définit par la forme de l’âme. Cette définition subvertit la théorie aristotélicienne et redonne raison et âme à la femme. Elle critique aussi la loi salique, loi imaginaire inventée pour justifier une différence imaginaire.",
    n: ["femme", "âme", "genre", "humanité"] }
]},

/* ============================= ROUSSEAU ============================= */
{ id: "rousseau", nom: "Rousseau", dates: "1712 – 1778", courant: "Lumières",
  intro: "Cité dans le cours comme influence de Kant et figure de la singularité moderne.",
  theses: [
  { t: "« L’obéissance à la loi qu’on s’est prescrite est liberté »", s: "2026-10-12", k: "cours", o: "Du contrat social, I, 8",
    x: "Reprise par Kant dans la troisième formule de l’impératif catégorique (autonomie).",
    n: ["liberté", "loi", "autonomie"] },
  { t: "La nature a brisé le moule", s: "2026-11-02", k: "cours", o: "Les Confessions",
    x: "À l’époque moderne seulement, on pense que chaque homme est unique. Au Moyen Âge, l’individu est déficient par rapport au genre (individuation par la matière).",
    n: ["individu", "singularité", "modernité"] },
  { t: "L’homme, « animal dépravé »", k: "colle", col: "animalite-humanite/2/0", o: "Discours sur l’origine de l’inégalité",
    x: "Parti d’un équilibre avec la nature et avec lui-même, l’homme devient, par la propriété et les inégalités, l’ennemi irréconciliable de son semblable. La sauvagerie n’a rien à voir avec la cruauté de l’homme envers l’homme : il y a une animalité propre à l’homme, sans rapport avec celle de l’animal.",
    n: ["animal", "cruauté", "inégalité", "société", "nature"] },
  { t: "L’éducation selon la nature", s: "2026-10-05", k: "cours", o: "Émile",
    x: "Suivre les rythmes de l’enfant. Kant, d’abord empiriste, l’avait lu avant d’élaborer sa propre morale.",
    n: ["éducation", "nature", "enfance"] }
]},

/* ============================= FREUD ============================= */
{ id: "freud", nom: "Freud", dates: "1856 – 1939", courant: "Psychanalyse",
  intro: "Les mythes et la religion répondent à la détresse originelle de l’humanité.",
  theses: [
  { t: "L’humanité dans la détresse (Hilflosigkeit)", s: "2026-09-14", k: "cours", o: "L’Avenir d’une illusion",
    x: "Les hommes ont eu besoin de mythes pour combler leur finitude. Freud ironise aussi sur « aimer son prochain comme soi-même » : on en fait un devoir parce qu’on ne s’aime pas.",
    n: ["mythe", "religion", "finitude", "détresse", "amour"] },
  { t: "Le sacrifice, répétition névrotique du parricide", s: "2026-09-14", k: "cours", o: "Totem et tabou",
    x: "L’humanité primitive aurait commis le parricide (les fils contre le père qui monopolisait les femmes). Freud déporte la violence sur les enfants, à contre-courant des mythes grecs. Notre psychisme est un système « pare-excitation » ; le sacrifice serait un « pare-violence ».",
    n: ["sacrifice", "violence", "religion", "origine"] }
]},

/* ============================= GIRARD ============================= */
{ id: "girard", nom: "René Girard", dates: "1923 – 2015", courant: "Anthropologie mimétique",
  intro: "Le sacrifice canalise la violence mimétique qui menace de détruire la société.",
  theses: [
  { t: "Le désir mimétique et le bouc émissaire", s: "2026-09-14", k: "cours", o: "La Violence et le sacré",
    x: "Le désir est triangulaire : je désire ce que l’autre désire. La rivalité peut dégénérer jusqu’à détruire la société. Le sacrifice fixe la violence collective sur une victime expiatoire. Le système ne fonctionne que si tous croient la victime coupable : le christianisme l’enraye, car la victime y est innocente.",
    n: ["sacrifice", "violence", "désir", "société", "religion"] }
]},

/* ============================= VERNANT ============================= */
{ id: "vernant", nom: "Jean-Pierre Vernant", dates: "1914 – 2007", courant: "Anthropologie historique",
  intro: "Le sacrifice remet l’homme à sa place, entre les bêtes et les dieux.",
  theses: [
  { t: "Le sacrifice ramène l’homme à sa condition", s: "2026-09-14", k: "cours", o: "« À la table des hommes » (lecture d’Hésiode)",
    x: "Prométhée dupe Zeus en faisant deux parts (os cachés dans la graisse, chair dans l’estomac). Lien structural : chair cachée dans l’estomac, graine dans la terre, semence dans la femme. Le feu cuit la viande et fait monter l’odeur vers les dieux. Sacrifier, c’est manger, donc reconnaître sa finitude. L’homme entre en contact avec les dieux et chacun est remis à sa place.",
    n: ["sacrifice", "mythe", "finitude", "dieux", "condition humaine"] }
]},

/* ============================= HOMÈRE ============================= */
{ id: "homere", nom: "Homère", dates: "VIIIe s. av. J.-C.", courant: "Épopée grecque",
  intro: "L’Odyssée trace le partage entre l’humain et l’inhumain : être homme, c’est être mortel et inscrit dans la mémoire.",
  theses: [
  { t: "Ulysse refuse l’immortalité", s: "2026-09-14", k: "cours", o: "Odyssée",
    x: "L’humanité est mortalité et historicité. Ulysse refuse l’immortalité offerte : il ne vivrait plus dans la mémoire des hommes et ne reviendrait pas à Ithaque.",
    n: ["mortalité", "mémoire", "condition humaine", "dieux"] },
  { t: "Les espaces de l’inhumain : nature sans mémoire, sans sacrifice", s: "2026-09-14", k: "cours", o: "Odyssée",
    x: "Les hommes sont « mangeurs de pain » (espace cultivé, échange, hospitalité). La mer est stérile ; mourir en mer, c’est être sans tombeau, donc oublié. Les espaces sauvages sont sans mémoire (lotus, drogue de Circé, Sirènes contre-muses) et sans sacrifice. Les cyclopes mangent les hommes et ne sacrifient pas : ils s’excluent de l’échange.",
    n: ["inhumanité", "nature", "mémoire", "sacrifice", "culture", "hospitalité"] }
]},

/* ============================== OVIDE ============================== */
{ id: "ovide", nom: "Ovide", dates: "43 av. – 17 ap. J.-C.", courant: "Poésie latine",
  intro: "Le récit du déluge révèle deux duretés humaines.",
  theses: [
  { t: "Lycaon, Deucalion et Pyrrha : deux formes de dureté", s: "2026-09-07", k: "cours", o: "Métamorphoses, I",
    x: "Lycaon nargue Zeus et veut lui faire manger de la chair humaine (impiété et anthropophagie) : dureté amorale, monstrueuse, punie par la métamorphose en loup et le déluge. Deucalion et Pyrrha recréent l’humanité en jetant des pierres qui deviennent des os : dureté morale (persévérance, courage). Le sacrifice remet l’humanité à sa place.",
    n: ["mythe", "origine", "cannibalisme", "monstre", "courage"] }
]},

/* ============================= CICÉRON ============================= */
{ id: "ciceron", nom: "Cicéron", dates: "106 – 43 av. J.-C.", courant: "Stoïcisme romain, éclectisme",
  intro: "Il résume la morale humaniste : une communauté morale universelle des hommes.",
  theses: [
  { t: "La communauté morale universelle", s: "2026-09-01", k: "cours", o: "Des devoirs ; Des termes extrêmes des biens et des maux",
    x: "La nature de l’individu est bonne et sociable ; on passe du cercle des proches à une cité unique du monde. Contradiction pour nous avec une société esclavagiste ; mais pour les Romains l’esclavage n’empêche pas de reconnaître l’esclave comme homme (Paul Veyne), et cela ne trouble pas la bonne conscience de Cicéron.",
    n: ["morale", "cosmopolitisme", "esclavage", "universel"] },
  { t: "Le cas de la cargaison de blé", s: "2026-10-05", k: "cours", o: "Des devoirs, III",
    x: "Un marchand arrive dans une ville affamée : doit-il dire que d’autres navires arrivent ? Problème de l’asymétrie d’information et de ce que l’humanité exige.",
    n: ["casuistique", "morale", "commerce"] }
]},

/* ========================== AULU-GELLE / ISIDORE ========================== */
{ id: "aulu-gelle", nom: "Aulu-Gelle", dates: "IIe s.", courant: "Érudition latine",
  intro: "Le sens romain d’humanitas : éducation et produit d’une éducation.",
  theses: [
  { t: "Humanitas = paideia", s: "2026-09-01", k: "cours", o: "Nuits attiques, XIII, 17",
    x: "Humanitas désigne les qualités de l’homme contre la bête : culture, douceur, compassion. Elle traduit la paideia : la connaissance des lettres permet la vertu ; l’humanité est l’éducation et son produit. À distinguer de la philanthropia grecque.",
    n: ["éducation", "culture", "étymologie", "animal"] }
]},
{ id: "isidore", nom: "Isidore de Séville", dates: "v. 560 – 636", courant: "Encyclopédisme chrétien",
  intro: "« Homo ab humo » : l’homme vient de la terre.",
  theses: [
  { t: "Homo ab humo", s: "2026-09-01", k: "cours", o: "Étymologies, X et XI",
    x: "Livre X : définition morale, compassion et attention à autrui. Livre XI : homme = âme + corps ; « homo ab humo », l’homme vient de la terre, ce qui dans un monde chrétien dit la vulnérabilité. L’étymologie scientifique renvoie à une racine *man- : la terre (dimension chthonienne) et la pensée.",
    n: ["étymologie", "terre", "corps", "âme", "vulnérabilité"] }
]},

/* ============================== MAUSS ============================== */
{ id: "mauss", nom: "Marcel Mauss", dates: "1872 – 1950", courant: "Sociologie",
  intro: "Le don et le contre-don pour penser la philanthropie.",
  theses: [
  { t: "Don et contre-don", s: "2026-09-01", k: "cours", o: "Essai sur le don",
    x: "Pour penser la philanthropie actuelle : l’évergétisme gréco-romain (devoir moral des riches de financer la cité) ; le philanthrope se sent en dette morale envers la population. La philanthropia antique est-elle sincère ou logique de réciprocité contrainte ?",
    n: ["don", "philanthropie", "réciprocité", "société"] }
]},

/* =========================== HANS JONAS =========================== */
{ id: "jonas", nom: "Hans Jonas", dates: "1903 – 1993", courant: "Éthique de la responsabilité",
  intro: "L’heuristique de la peur : l’humanité a des devoirs envers la nature.",
  theses: [
  { t: "L’heuristique de la peur", s: "2026-09-07", k: "cours", o: "Le Principe responsabilité (contre Le Principe espérance d’Ernst Bloch)",
    x: "L’humanité a des devoirs envers la nature, pas seulement envers autrui ; il faut faire peur pour faire réagir. Objection (Spinoza) : agir par la peur, c’est jouer sur les passions tristes, qui diminuent la puissance d’agir et préparent à toute domination.",
    n: ["écologie", "peur", "responsabilité", "nature", "avenir"] }
]},

/* =========================== MARCEL GAUCHET =========================== */
{ id: "gauchet", nom: "Marcel Gauchet", dates: "né en 1946", courant: "Philosophie politique",
  intro: "L’écologie peut-elle prendre la place du marxisme ?",
  theses: [
  { t: "Écologie et marxisme", s: "2026-09-07", k: "cours",
    x: "Le marxisme repose sur l’espoir de sauver l’humanité, l’écologie sur la peur de sa fin. « Pollution », d’abord terme moral (l’impur), a pris un sens écologique ; les deux sens fusionnent chez des écologistes qui haïssent l’humanité. Incompatibilité théorique des deux.",
    n: ["écologie", "marxisme", "espérance", "peur"] }
]},

/* =========================== RAYMOND ARON =========================== */
{ id: "aron", nom: "Raymond Aron", dates: "1905 – 1983", courant: "Libéralisme",
  intro: "Le marxisme comme religion séculière.",
  theses: [
  { t: "Les religions séculières", s: "2026-09-07", k: "cours", o: "L’Âge des empires et l’avenir de la France ; L’Opium des intellectuels",
    x: "Les religions séculières promettent un salut à l’humanité en sécularisant l’espérance. Le marxisme fournit aux intellectuels une alternative religieuse, avec son Satan (les États-Unis). L’humanité aurait un but à réaliser dans l’histoire.",
    n: ["histoire", "religion", "marxisme", "espérance"] }
]},

/* ============================ SAHLINS ============================ */
{ id: "sahlins", nom: "Marshall Sahlins", dates: "1930 – 2021", courant: "Anthropologie",
  intro: "Les chasseurs-cueilleurs vivaient dans des sociétés d’abondance.",
  theses: [
  { t: "La société d’abondance primitive", s: "2026-09-14", k: "cours", o: "Âge de pierre, âge d’abondance",
    x: "Les chasseurs-cueilleurs avaient trouvé un optimum sans course à la production et à la consommation. La sédentarisation impose lois et impôts. Mais alors, pourquoi ne pas être restés chasseurs-cueilleurs ?",
    n: ["origine", "abondance", "travail", "primitif"] }
]},

/* =========================== STOCZKOWSKI =========================== */
{ id: "stoczkowski", nom: "Wiktor Stoczkowski", dates: "né en 1958", courant: "Anthropologie",
  intro: "Les récits des origines parlent surtout de nous.",
  theses: [
  { t: "Le récit standard des origines", s: "2026-09-14", k: "cours", o: "Anthropologie naïve, anthropologie savante",
    x: "Il existe un récit standard de l’humanité, avec ses modes ; s’interroger sur l’origine, c’est s’interroger sur nous. Présupposés : déterminisme du milieu, matérialisme (Engels, le travail transforme le singe en homme), utilité, rôle actif de l’individu. Exemple : Lucrèce et l’humanité primitive s’élevant laborieusement à la culture.",
    n: ["origine", "récit", "préhistoire", "culture"] }
]},

/* ============================ PASCAL ============================ */
{ id: "pascal", nom: "Pascal", dates: "1623 – 1662", courant: "Jansénisme",
  intro: "« Ni ange ni bête » ; critique de Montaigne.",
  theses: [
  { t: "« Le moi est haïssable »", s: "2026-09-14", k: "cours", o: "Pensées",
    x: "Pascal reproche à Montaigne de se complaire dans sa singularité et de se croire faussement universel.",
    n: ["moi", "universel", "individu"] },
  { t: "L’homme n’est ni ange ni bête", s: "2026-11-02", k: "cours",
    x: "Les anges, sans matière, sont chacun une espèce. L’homme n’est pas une espèce à lui seul : chacun est déficient par rapport au genre.",
    n: ["animal", "ange", "individu", "espèce"] },
  { t: "Progrès du savoir, non des mœurs", s: "2026-10-12", k: "cours", o: "Préface au Traité du vide",
    x: "L’humanité progresse comme un seul homme qui apprend continuellement, mais pas du point de vue des mœurs.",
    n: ["progrès", "science", "histoire"] }
]},

/* ============================ LESSING ============================ */
{ id: "lessing", nom: "Lessing", dates: "1729 – 1781", courant: "Lumières allemandes",
  intro: "La parabole des trois anneaux et l’éducation du genre humain.",
  theses: [
  { t: "La parabole des trois anneaux", s: "2026-10-12", k: "cours", o: "Nathan le Sage",
    x: "Un père fait faire deux copies de son anneau pour ses trois fils. Le juge dit que le vrai anneau produit l’amour : chacun doit vivre le plus vertueusement possible. Le père est Dieu, les anneaux le judaïsme, le christianisme et l’islam. Les religions peuvent-elles s’entendre ?",
    n: ["religion", "tolérance", "vertu"] },
  { t: "L’éducation du genre humain", s: "2026-10-12", k: "cours",
    x: "Les trois monothéismes ont permis à l’homme de devenir maître de lui-même. Être homme, c’est s’éduquer : thème des Lumières (perfectibilité chez Condorcet).",
    n: ["éducation", "religion", "progrès", "perfectibilité"] }
]},

/* ============================ SLOTERDIJK ============================ */
{ id: "sloterdijk", nom: "Peter Sloterdijk", dates: "né en 1947", courant: "Philosophie contemporaine",
  intro: "Les humanités littéraires cèdent la place aux biotechnologies.",
  theses: [
  { t: "Règles pour le parc humain", s: "2026-10-12", k: "cours", o: "Règles pour le parc humain",
    x: "Les humanités ne sont plus nécessaires à l’humanité actuelle ; elles sont remplacées par les biotechnologies. Où commence l’humanité à l’ère de la post-humanité ?",
    n: ["humanisme", "technique", "éducation", "post-humanité"] }
]},

/* ============================ ADAM SMITH ============================ */
{ id: "smith", nom: "Adam Smith", dates: "1723 – 1790", courant: "Lumières écossaises",
  intro: "La sympathie et la main invisible.",
  theses: [
  { t: "Le spectateur impartial", s: "2026-10-12", k: "cours", o: "Théorie des sentiments moraux",
    x: "On peut prendre part à la souffrance d’autrui sans ressentir ce qu’il ressent : je suis donc capable de moralité.",
    n: ["sympathie", "morale", "autrui", "souffrance"] },
  { t: "La main invisible", s: "2026-10-12", k: "cours", o: "Recherches sur la nature et les causes de la richesse des nations",
    x: "Le progrès se fait indépendamment des intentions des agents (rapproché de l’insociable sociabilité). Querelle du luxe : la vanité des riches fait travailler les pauvres (Voltaire pour, Rousseau contre).",
    n: ["progrès", "économie", "luxe", "société"] }
]},

/* ============================ TODOROV ============================ */
{ id: "todorov", nom: "Tzvetan Todorov", dates: "1939 – 2017", courant: "Histoire des idées",
  intro: "La conquête de l’Amérique.",
  theses: [
  { t: "Pourquoi les Aztèques ont perdu", s: "2026-09-21", k: "cours", o: "La Conquête de l’Amérique",
    x: "Motifs religieux, territoriaux et de curiosité, pas seulement l’or (contre Montaigne). Les Espagnols ont joué des rivalités avec les peuples dominés par les Aztèques, incapables d’adapter le nouveau à l’ancien.",
    n: ["colonisation", "altérité", "conquête"] }
]},

/* ============================= AUTRES ============================= */
{ id: "durkheim", nom: "Durkheim", dates: "1858 – 1917", courant: "Sociologie",
  intro: "Adorer les dieux, c’est adorer la société.",
  theses: [
  { t: "La religion, forme transfigurée de la société", s: "2026-09-14", k: "cours", o: "Les Formes élémentaires de la vie religieuse",
    x: "En adorant les dieux, les hommes adorent la société ; ils s’immergent dans le bain social qui donne sens à leur existence.",
    n: ["religion", "société", "sacrifice"] }
]},
{ id: "dumezil", nom: "Georges Dumézil", dates: "1898 – 1986", courant: "Mythologie comparée",
  intro: "Le schéma trifonctionnel indo-européen.",
  theses: [
  { t: "Les trois fonctions", s: "2026-09-14", k: "cours",
    x: "Souveraineté politico-religieuse (Jupiter), force guerrière (Mars), fécondité et travail (Quirinus) : prêtres, guerriers, producteurs. Cette trinité se retrouve dans les trois ordres et jusque dans nos classes sociales.",
    n: ["société", "mythe", "classes sociales"] }
]},
{ id: "teilhard", nom: "Teilhard de Chardin", dates: "1881 – 1955", courant: "Philosophie chrétienne",
  intro: "La noosphère.",
  theses: [
  { t: "La noosphère", s: "2026-09-07", k: "cours",
    x: "La Terre recouverte par la pensée comme un réseau neuronal : réconciliation du darwinisme et du christianisme, l’humanité ayant un rôle dans l’accomplissement de l’univers.",
    n: ["évolution", "religion", "humanité"] }
]},
{ id: "husserl", nom: "Husserl", dates: "1859 – 1938", courant: "Phénoménologie",
  intro: "Contre la réduction objectivante.",
  theses: [
  { t: "« Une science de faits ne donne qu’une humanité de faits »", s: "2026-10-05", k: "cours", o: "La Crise des sciences européennes",
    x: "S’oppose à la dissolution de la spécificité de l’homme dans les sciences.",
    n: ["science", "humanité", "sens"] }
]},
{ id: "jacob", nom: "François Jacob", dates: "1920 – 2013", courant: "Biologie",
  intro: "Le point de vue naturaliste.",
  theses: [
  { t: "La souris, la mouche et l’homme", s: "2026-09-28", k: "cours", o: "La Souris, la mouche et l’homme",
    x: "Nous sommes faits des mêmes briques moléculaires qu’une mouche : l’humanité n’a pas de privilège, ce qui ruine sa prétention. C’est le caractère empirique chez Kant.",
    n: ["science", "animal", "biologie", "nature"] }
]},
{ id: "taine", nom: "Hippolyte Taine", dates: "1828 – 1893", courant: "Déterminisme",
  intro: "La race, le milieu, le moment.",
  theses: [
  { t: "« Le vice et la vertu sont des produits, comme le vitriol et le sucre »", s: "2026-10-05", k: "cours", o: "Histoire de la littérature anglaise",
    x: "Tout s’explique par la race, le milieu et le moment : réduction de l’homme à son caractère empirique.",
    n: ["déterminisme", "morale", "science"] }
]},
{ id: "elias", nom: "Norbert Elias", dates: "1897 – 1990", courant: "Sociologie",
  intro: "Processus de civilisation.",
  theses: [
  { t: "Civilisation et décivilisation", s: "2026-09-21", k: "cours",
    x: "Montre ce que Montaigne ne voit pas : une progression graduelle vers la cruauté est possible, la violence n’est pas seulement extérieure à l’homme.",
    n: ["civilisation", "violence", "cruauté"] }
]},
{ id: "nicole", nom: "Pierre Nicole", dates: "1625 – 1695", courant: "Jansénisme",
  intro: "L’amour-propre police les sociétés.",
  theses: [
  { t: "L’amour-propre éclairé", s: "2026-11-02", k: "cours", o: "De la charité et de l’amour-propre",
    x: "L’amour-propre suffit à rendre les sociétés policées, même vides de charité : ce n’est pas en voulant le bien que les hommes font le bien (rapproché du peuple de démons kantien).",
    n: ["société", "égoïsme", "morale"] }
]},
{ id: "leibniz", nom: "Leibniz", dates: "1646 – 1716", courant: "Rationalisme",
  intro: "Règne de la nature et règne de la grâce.",
  theses: [
  { t: "Le règne de la grâce", s: "2026-11-02", k: "cours", o: "Principes de la nature et de la grâce",
    x: "Cité terrestre (nature) et cité céleste (grâce), où toutes les actions ont des répercussions. Kant sécularise ce règne en règne des fins. Leibniz rêvait aussi d’un langage universel pour résoudre les différends.",
    n: ["règne des fins", "Dieu", "communauté"] }
]},
{ id: "jullien", nom: "François Jullien", dates: "né en 1951", courant: "Philosophie comparée",
  intro: "Des situations où l’humanité se manifeste.",
  theses: [
  { t: "L’enfant qui tombe dans le puits", s: "2026-11-02", k: "cours",
    x: "Il y a des situations où l’humanité se manifeste : on ne peut pas ne pas sauver l’enfant.",
    n: ["humanité", "pitié", "universel"] }
]},
{ id: "communautariens", nom: "Les communautariens", dates: "XXe – XXIe s.", courant: "Philosophie politique",
  intro: "Critiques de l’universalisme abstrait.",
  theses: [
  { t: "Contre la vision désincarnée de l’humanité", s: "2026-11-02", k: "cours",
    x: "Contre Rawls (principe de liberté, principe de différence), les libéraux auraient une vision désincarnée de l’humanité. Fragmentation et « archipélisation » (Fourquet). À rapprocher de l’éthique du care.",
    n: ["universel", "identité", "communauté", "politique"] },
  { t: "La pensée décoloniale", s: "2026-11-02", k: "cours",
    x: "La colonisation s’est faite au nom de l’humanité : l’humanisme serait un masque, il faudrait décoloniser la raison. Le cours souligne sa fascination pour l’irrationnel. Si l’on nie la possibilité de se mettre à la place de l’autre, on enferme chacun dans son identité (exemple de Philadelphia).",
    n: ["colonisation", "humanisme", "identité", "universel"] }
]},
{ id: "vilmer", nom: "Jean-Baptiste Jeangène Vilmer", dates: "né en 1975", courant: "Relations internationales",
  intro: "La guerre au nom de l’humanité.",
  theses: [
  { t: "La guerre au nom de l’humanité", s: "2026-11-02", k: "cours", o: "La Guerre au nom de l’humanité",
    x: "Les grandes guerres ont été faites au nom de l’humanité : paradoxe du point de vue kantien. Carl Schmitt critiquait déjà ces guerres (à citer avec prudence).",
    n: ["guerre", "humanité", "humanitaire"] }
]},
{ id: "malherbe", nom: "Jean-François Malherbe", dates: "né en 1950", courant: "Éthique",
  intro: "La disparition de l’humanité dans la maladie.",
  theses: [
  { t: "Alzheimer et la reconnaissance", s: "2026-10-12", k: "cours", o: "Alzheimer, la vie, la mort, la reconnaissance (2015)",
    x: "La disparition de l’humanité n’est pas seulement physique : c’est se vider de sa personnalité et de sa capacité d’être en relation avec autrui.",
    n: ["maladie", "personne", "reconnaissance", "autrui"] }
]},
{ id: "nancy", nom: "Jean-Luc Nancy", dates: "1940 – 2021", courant: "Philosophie contemporaine",
  intro: "Vivre avec le cœur d’un autre.",
  theses: [
  { t: "L’Intrus : la greffe", s: "2026-10-12", k: "cours", o: "L’Intrus",
    x: "La greffe, rendue possible par la mort cérébrale, fait d’autrui un moyen pour vivre : elle oblige à repenser le rapport fin / moyen.",
    n: ["corps", "greffe", "fin", "moyen", "autrui"] }
]},
{ id: "spinoza", nom: "Spinoza", dates: "1632 – 1677", courant: "Rationalisme",
  intro: "Contre la politique des passions tristes.",
  theses: [
  { t: "Les passions tristes", s: "2026-09-07", k: "cours",
    x: "Agir sur la peur, c’est jouer sur les passions tristes, qui réduisent la puissance d’agir et préparent à accepter toute domination. Objection à l’heuristique de la peur de Jonas.",
    n: ["peur", "passions", "domination", "politique"] }
]},
{ id: "de-maistre", nom: "Joseph de Maistre", dates: "1753 – 1821", courant: "Contre-révolution",
  intro: "« L’homme n’existe pas ».",
  theses: [
  { t: "« Je n’ai jamais vu d’homme »", s: "2026-09-01", k: "cours", o: "Considérations sur la France",
    x: "Il n’y a que des Français, des Italiens, etc. : rejet de l’universel abstrait des droits de l’homme.",
    n: ["universel", "droits de l’homme", "nation"] }
]},
{ id: "lacan", nom: "Lacan", dates: "1901 – 1981", courant: "Psychanalyse",
  intro: "« La femme n’existe pas ».",
  theses: [
  { t: "« La femme n’existe pas »", s: "2026-09-21", k: "cours", o: "Séminaire XX, Encore",
    x: "On ne sait pas si toute femme est castrée, alors que l’homme l’est : il est du côté de l’universel. Les féministes l’ont lu comme « aucune femme n’est pareille », ce qui affadit l’énoncé : Lacan permet aussi de critiquer l’universel.",
    n: ["femme", "universel"] }
]},
{ id: "fourquet", nom: "Jérôme Fourquet", dates: "né en 1973", courant: "Sociologie politique",
  intro: "L’archipel français.",
  theses: [
  { t: "L’archipélisation", s: "2026-11-02", k: "cours",
    x: "Fragmentation du territoire en communautés selon les affinités. Le cours cite aussi Homo occidentalis à propos de la société de consommation où l’on croit que tout est donné.",
    n: ["société", "identité", "communauté", "consommation"] }
]},
/* ---------------------- auteurs issus des colles ---------------------- */
{ id: "porphyre", nom: "Porphyre", dates: "v. 234 – 305", courant: "Néoplatonisme",
  intro: "L’arbre de Porphyre hiérarchise genres, espèces et individus.",
  theses: [
  { t: "L’arbre de Porphyre", k: "colle", col: "animalite-humanite/0/0", o: "Isagoge",
    x: "Les concepts s’emboîtent selon leur extension et leur compréhension : tout genre englobe les genres subordonnés et les espèces ; chaque espèce se forme par un genre prochain et une différence spécifique. L’homme est un « animal raisonnable » : « animal » est le genre, « raisonnable » la différence spécifique.",
    n: ["animal", "genre", "espèce", "définition", "universel"] }
]},
{ id: "lucrece", nom: "Lucrèce", dates: "v. 98 – 55 av. J.-C.", courant: "Épicurisme",
  intro: "Le récit de l’hominisation comme humanisation, sans intervention divine.",
  theses: [
  { t: "De l’animalité primitive à la culture", k: "colle", col: "animalite-humanite/1/1", o: "De la nature, V",
    c: "l’usage des cabanes, des peaux et du feu",
    x: "Les premiers hommes, sans feu ni maison, chassent les bêtes féroces qui les chassent. Par les cabanes, les peaux et le feu, les amours deviennent personnelles (la « Vénus domestique »), les corps s’amollissent, la violence est canalisée par l’amitié. L’animalité est dispersion ; l’humanité organise cette dispersion en « série des générations ». Le récit est aussi évoqué en cours comme modèle du récit standard des origines.",
    n: ["animal", "origine", "culture", "nature", "amitié"] }
]},
{ id: "diderot", nom: "Diderot", dates: "1713 – 1784", courant: "Lumières",
  intro: "La gradation de sens entre bête, animal et brute.",
  theses: [
  { t: "Bête, animal, brute", k: "colle", col: "animalite-humanite/1/0", o: "Encyclopédie, article « Bête, animal, brute »",
    c: "Brute est un terme de mépris qu’on n’applique aux bêtes et à l’homme qu’en mauvaise part.",
    x: "Ce n’est pas l’animal qui est connoté négativement, mais la brute : la bête considérée comme affranchie des lois de la raison et de l’honnêteté. La véritable opposition n’est pas entre l’homme et l’animal, mais entre animalité et humanité.",
    n: ["animal", "brutalité", "langage", "raison"] }
]},
{ id: "zola", nom: "Zola", dates: "1840 – 1902", courant: "Naturalisme",
  intro: "Le fonds pulsionnel de la « bête humaine ».",
  theses: [
  { t: "La bête humaine", k: "colle", col: "animalite-humanite/1/0", o: "La Bête humaine",
    x: "La « bête » signifie l’absence de médiation, l’incapacité de différer la satisfaction de la pulsion. Jacques Lantier, produit de l’hérédité, est décrit avec sa cousine Flore comme une « bête enragée » ivre du désir de tuer, parent des « loups mangeurs d’hommes ».",
    n: ["animal", "pulsion", "violence", "hérédité"] }
]},
{ id: "klemperer", nom: "Victor Klemperer", dates: "1881 – 1960", courant: "Philologie",
  intro: "La langue nazie animalise l’ennemi.",
  theses: [
  { t: "L’animalisation de l’ennemi par la langue", k: "colle", col: "animalite-humanite/2/1", o: "LTI, la langue du Troisième Reich (1947)",
    x: "La novlangue nazie parle de parasites, de rats, de poux pour présenter la persécution comme une œuvre hygiénique. Il est incongru de faire de l’animal un homme, mais possible de faire de l’homme un animal.",
    n: ["animal", "déshumanisation", "langage", "totalitarisme"] }
]},
{ id: "levinas", nom: "Levinas", dates: "1906 – 1995", courant: "Phénoménologie, éthique",
  intro: "Le chien Bobby, « dernier kantien » d’Allemagne.",
  theses: [
  { t: "Bobby, le dernier kantien d’Allemagne", k: "colle", col: "animalite-humanite/2/1", o: "Difficile liberté, « Nom d’un chien ou le droit naturel »",
    x: "Le racisme enferme chacun dans une espèce sans possibilité d’en sortir : les bourreaux reproduisent avec les prisonniers le partage entre l’homme et les autres animaux. Seul le chien Bobby reconnaît la dignité des prisonniers : il voit l’homme avant le maître, quand les tortionnaires ne voient que le moyen.",
    n: ["animal", "dignité", "déshumanisation", "racisme", "autrui"] }
]},
{ id: "helvetius", nom: "Helvétius", dates: "1715 – 1771", courant: "Lumières, matérialisme",
  intro: "La toute-puissance de l’éducation.",
  theses: [
  { t: "« L’éducation fait danser l’ours »", s: "2026-10-12", k: "cours", o: "De l’homme (1773)",
    x: "Il n’est rien d’impossible à l’éducation.",
    n: ["éducation", "animal", "perfectibilité"] }
]}
];

/* ============================ QUESTIONS ============================
   Rubrique « Questions » du cours. statut : "a-poser" | "posee" | "repondue"
   ==================================================================== */
const QUESTIONS = [
  { s: "2026-09-07", statut: "repondue", auteur: "platon",
    q: "Dans l’argument du troisième homme, la self-prédication suppose que l’Idée de l’Homme est elle-même homme. Mais peut-on appeler « homme » une pure essence, alors qu’un homme concret a des déterminations particulières ?",
    r: "L’argument feint d’accepter le dualisme platonicien pour mieux le réfuter. Dire que l’homme est concret, c’est raisonner hors du cadre platonicien et aristotélicien : ni l’un ni l’autre ne nie l’individu concret, mais on ne peut penser que l’universel et le nécessaire. Même pour Aristote, ce qui fait que cet homme-ci est un homme, c’est la définition générale (animal raisonnable). Je connais ce qui fait de Socrate un homme, pas sa « socratité »." },
  { s: "2026-11-02", statut: "a-poser", auteur: "kant",
    q: "Vers la paix perpétuelle : les notes rangent la publicité, la non-ingérence et l’interdiction de l’espionnage parmi les articles « à valeur immédiate », et les armées permanentes et les dettes de guerre parmi les articles « à réalisation ultérieure ». Pourriez-vous redonner la liste exacte des articles préliminaires et préciser lesquels sont immédiats et lesquels peuvent être différés ?" },
  { s: "2026-11-02", statut: "a-poser", auteur: "kant",
    q: "Le cours du 02/11 dit que « pour Kant, on ne peut pas avoir de morale sans Dieu », alors que celui du 12/10 dit qu’on peut avoir une morale sans Dieu et que l’idée de Dieu renforce seulement la moralité. Comment concilier ces deux affirmations (rôle exact du postulat de Dieu) ?" },
  { s: "2026-11-02", statut: "a-poser", auteur: "kant",
    q: "Le « peuple de démons » : pourriez-vous préciser la thèse de Kant (le problème de l’institution de l’État serait soluble même pour des démons « pourvu qu’ils aient de l’entendement ») et pourquoi le cours la distingue de la harangue de Sade dans La Philosophie dans le boudoir ?" },
  { s: "2026-11-02", statut: "a-poser", auteur: "kant",
    q: "Homo occidentalis est attribué à Jérôme Fourquet le 12/10 et à « Ravinovitch » le 02/11 : quel est l’auteur exact ? Et quel est le lien entre l’exemple de Tolstoï (Maître et serviteur, la gangrène) et l’homme comme fin ultime de la nature ?" },
  { s: "2026-11-02", statut: "a-poser", auteur: "kant",
    q: "Kant juge la Révolution en spectateur et « s’en tient à 1789 ». Mais Le Conflit des facultés paraît en 1798, après la Terreur : comment Kant peut-il maintenir son enthousiasme en connaissant 1793 ?" }
];

/* ========================= SUJETS DE COLLE =========================
   Un objet par sujet. Plan : parties (I, II, III) > sous-parties (§1, §2, §3).
   Chaque sous-partie : titre, idee (idée directrice), refs [{ auteur, oeuvre, these }],
   exemple, defs [{ terme, def }] (définitions importantes, facultatif).
   ==================================================================== */
const COLLES = [
{ id: "animalite-humanite", titre: "Animalité et humanité", source: "Corrigé du professeur",
  refsPossibles: [
    "Gombrowicz, Journal : la rencontre de la « vachéité »",
    "Burroughs, le mythe de Tarzan : une fusion imaginaire de l’humanité et de l’animalité"
  ],
  parties: [
  { num: "I", titre: "L’animalité, concept au second degré formé à partir d’« animal », comme « humanité » à partir d’« homme »",
    sous: [
    { num: "§1", titre: "Animal et animalité",
      idee: "Le langage permet de former des concepts de plus en plus généraux. « Animal » est déjà un terme général (le lion, la gazelle sont des animaux) ; « animalité » est un terme abstrait formé à partir d’animal pour signifier l’appartenance d’une série d’êtres à un ensemble, à une hiérarchie logique et ontologique. L’animalité n’est pas redondante : elle ne se divise pas à son tour en espèces.",
      refs: [{ auteur: "Porphyre", oeuvre: "Isagoge (introduction aux Catégories d’Aristote)",
        these: "L’arbre de Porphyre emboîte les concepts selon leur extension et leur compréhension : tout genre englobe les genres subordonnés et les espèces ; chaque espèce se forme par un genre prochain et une différence spécifique. L’homme est un « animal raisonnable » : « animal » est le genre, « raisonnable » la différence spécifique (pensée et langage articulé)." }],
      exemple: "La substance se divise en substance matérielle et immatérielle, la substance matérielle en corps animé et inanimé, etc. C’est sur ce modèle qu’on forme les concepts d’humanité et d’animalité.",
      defs: [
        { terme: "Genre", def: "Ce qui est commun à plusieurs espèces et les englobe." },
        { terme: "Différence spécifique", def: "Ce qui, ajouté au genre prochain, forme l’espèce (pour l’homme : « raisonnable »)." },
        { terme: "Extension / compréhension", def: "L’extension est l’ensemble des êtres auxquels un concept s’applique ; la compréhension est l’ensemble des caractères qui le définissent." }
      ] },
    { num: "§2", titre: "Le caractère opératoire du concept d’animalité",
      idee: "L’animalité permet à la pensée d’organiser la pluralité des formes de vie animale sans prendre un concept pour un être. Paradoxe : ce concept très abstrait évite de confondre « l’animal » avec une espèce, l’animal en soi avec cet animal-ci. Il protège contre la tentation platonicienne de redoubler le monde des existences par celui des essences. C’est aussi une économie de mots.",
      refs: [{ auteur: "Aristote", oeuvre: "Métaphysique (argument du troisième homme)",
        these: "Contre la participation platonicienne (le loup sensible participe du loup en soi), si l’Idée unifie une multiplicité, il faut une autre Idée pour unifier l’Idée et cette multiplicité, à l’infini. Il est plus économique de poser que l’animal en soi n’existe pas : il n’existe que des individus (substances premières) ; l’universel (substance seconde) est dégagé par l’esprit et immanent aux formes animales." }],
      exemple: "Le loup : pour Platon, le loup qui existe ici et maintenant participe du loup intelligible ; pour Aristote, inutile de séparer la définition du loup des loups particuliers.",
      defs: [
        { terme: "Réaliser une abstraction", def: "Prendre un concept pour un être existant, piège que tend l’abstraction du langage." },
        { terme: "Substance première / seconde", def: "La substance première est l’individu réel ; la substance seconde est l’universel, la définition dégagée par l’esprit." }
      ] },
    { num: "§3", titre: "Problème : un concept abstrait, sans valeur scientifique, à usage polémique",
      idee: "1° L’animalité évite de confondre l’animal et un animal, mais ne donne aucune connaissance déterminée. Il ne faut pas confondre concept universel et concept abstrait : l’universel est déterminant parce que discriminant (coextensif à une classe) ; l’animalité, formée à partir d’« animal » qui n’est pas un concept scientifique, n’apparaît dans aucune taxonomie. 2° Formée comme « humanité », elle signifie pourtant le contraire : parler de l’animalité d’un homme, c’est dire qu’il ne correspond pas à son essence.",
      refs: [{ auteur: "Taxonomie moderne", oeuvre: "Classification du vivant",
        these: "La science classe par domaine, règne, embranchement, classe, ordre, famille, genre et espèce, sans jamais passer par le concept d’animalité." }],
      exemple: "Les mammifères : vertébrés, vivipares, à mamelles, cœur à quatre cavités, respiration pulmonaire, et seulement eux (universalité coextensive à une classe). L’écureuil roux : règne animal, embranchement des chordés, ordre des rongeurs, famille des sciuridés, genre Sciurus, espèce Sciurus vulgaris.",
      defs: [
        { terme: "Concept universel", def: "Concept déterminant et discriminant : il vaut pour tous les êtres d’une classe et seulement pour eux." },
        { terme: "Concept abstrait", def: "Concept formé à partir d’un terme général, sans pouvoir discriminant ni valeur scientifique." }
      ] }
    ] },
  { num: "II", titre: "L’animalité de l’homme n’a rien à voir avec le concept général d’animalité : c’est ce dont l’homme doit se détacher, en lui et hors de lui",
    sous: [
    { num: "§1", titre: "Comparaison des concepts d’animalité et d’humanité",
      idee: "L’homme et l’animal ne s’opposent pas : « animal » entre dans la définition de l’homme (animal raisonnable, ou animal issu de l’évolution). L’animal s’oppose au végétal et au minéral (les trois règnes). La véritable opposition est entre animalité et humanité : une vie conduite par les pulsions et l’instinct contre une vie fondée sur la détermination de soi par soi, l’autocontrainte.",
      refs: [
        { auteur: "Diderot", oeuvre: "Encyclopédie, article « Bête, animal, brute »",
          these: "Ce n’est pas l’animal qui est connoté négativement, mais la brute : « terme de mépris qu’on n’applique aux bêtes et à l’homme qu’en mauvaise part », la bête « affranchie des lois de la raison et de l’honnêteté »." },
        { auteur: "Zola", oeuvre: "La Bête humaine",
          these: "La « bête » concentre ce que signifiait la brutalité : l’absence de médiation, l’incapacité de différer la satisfaction de la pulsion. Parler de « bête humaine » rappelle un fonds pulsionnel présent en l’homme et opposé à son humanité." }
      ],
      exemple: "Jacques Lantier, produit de la misère et de l’alcoolisme de ses parents : face à sa cousine Flore, Zola le dit « haletant », plein de « fureur » et de « férocité », « bête enragée » ivre du désir de tuer, apparenté aux « loups mangeurs d’hommes » (le loup-garou).",
      defs: [
        { terme: "Anthropocène", def: "Terme créé par Paul Crutzen (Nobel de chimie) : non pas un nouveau règne du vivant, mais une époque où l’homme interagit avec le climat." },
        { terme: "Brute / bête / bêtise", def: "La brutalité (de brute) est plus dégradante que la bêtise (de bête) ; selon les termes présents, le sens se redistribue." }
      ] },
    { num: "§2", titre: "La lutte de l’humanité contre l’animalité",
      idee: "L’animalité est le véritable contraire de l’humanité : l’homme ne parvient à son essence qu’en refoulant une partie de lui-même et en dominant les autres êtres. Le récit de l’hominisation est en même temps celui de l’humanisation : le passage de la nature à la culture.",
      refs: [{ auteur: "Lucrèce", oeuvre: "De la nature, V",
        these: "Sans intervention divine, l’homme dépasse progressivement sa condition animale primitive. Les premiers hommes, sans feu, sans maison, chassent les bêtes féroces qui les chassent. Par « l’usage des cabanes, des peaux et du feu », les amours deviennent personnelles (la « Vénus domestique »), les corps s’amollissent, la violence est canalisée par l’amitié et la concorde. L’animalité est dispersion ; l’humanité, par Vénus et les arts, organise cette dispersion en « série des générations »." }],
      exemple: "Le lien entre domus (la maison) et domestication : l’errance, la vulnérabilité face aux bêtes et la dépendance aux rythmes de la nature cessent avec l’habitat. Comme dans l’atomisme, un monde naît de la connexion régulière des atomes.",
      defs: [
        { terme: "Hominisation / humanisation", def: "L’hominisation est l’évolution biologique vers l’homme ; l’humanisation, le passage à la culture. Chez Lucrèce, les deux coïncident." }
      ] },
    { num: "§3", titre: "Problème : le prix du passage à la vie civilisée",
      idee: "Le récit de Lucrèce décrit un dressage par lequel l’homme intériorise la contrainte pour refouler son animalité. La culture fait des pulsions communes à l’homme et à l’animal un passé biologique honteux, à oublier ou à sublimer. Mais le refoulé fait retour : l’homme pourrait être capable d’animalité non par régression, mais par radicalisation de ses pulsions, sous la forme de conduites inhumaines sans rapport avec le comportement animal.",
      refs: [{ auteur: "La psychanalyse (Freud)", oeuvre: "",
        these: "Elle pense les mécanismes qui articulent psychisme et monde extérieur par le corps : la phobie projette à l’extérieur des contenus inconscients ; le refoulement fait disparaître ce qui menace l’équilibre psychique, mais tout refoulement s’accompagne d’un retour du refoulé." }],
      exemple: "Le retour du refoulé se manifeste de façon éminente avec l’animalité : la culture élève des « digues » contre les pulsions, sans garantie qu’elles tiennent.",
      defs: [
        { terme: "Refoulement", def: "Disparition de contenus gênants qui remettraient en cause l’équilibre homéostatique du psychisme ; il se produit sous la forme d’un retour du refoulé." },
        { terme: "Phobie", def: "Mécanisme psychique par lequel on projette à l’extérieur des contenus inconscients." },
        { terme: "Sublimation", def: "Transformation des pulsions en activités socialement valorisées." }
      ] }
    ] },
  { num: "III", titre: "L’animalité est la transgression par l’homme des limites de sa propre humanité : une régression impossible et l’expérience inquiétante d’un tel dépassement",
    sous: [
    { num: "§1", titre: "L’homme comme « animal dépravé »",
      idee: "L’humanitas renvoie aux humanités, qui donnent une image idéalisée de l’homme ; l’art est un mensonge admis qui fait admirer ce qui n’est pas admirable. L’histoire montre au contraire guerres et atrocités, bien plus meurtrières que les rencontres avec les animaux. L’homme relègue sa violence dans l’animalité et l’extériorise sous la forme d’une prétendue « loi de la jungle », qui n’existe pas : dans la jungle règne un équilibre entre les espèces.",
      refs: [
        { auteur: "Rousseau", oeuvre: "Discours sur l’origine et les fondements de l’inégalité",
          these: "L’homme est « un animal dépravé » : parti d’un équilibre avec la nature et avec lui-même, il devient par la propriété et les inégalités l’ennemi irréconciliable de son semblable. La sauvagerie n’a rien à voir avec la cruauté de l’homme envers l’homme. Il y a une animalité propre à l’homme, sans rapport avec celle de l’animal." },
        { auteur: "Aristote", oeuvre: "Poétique",
          these: "L’homme tire plaisir de l’imitation, même de récits de meurtres ou d’incestes." },
        { auteur: "Aulu-Gelle", oeuvre: "Nuits attiques",
          these: "L’humanitas, ce sont les humanités : la connaissance et la pratique du beau et du vrai." }
      ],
      exemple: "La cruauté humaine prend des formes multiples, de la raillerie jusqu’à l’indifférence aux maux de ses semblables.",
      defs: [] },
    { num: "§2", titre: "La tension entre l’animalité et l’humanité",
      idee: "Si l’on pense l’humanité dans la continuité des formes de vie animale, la tension se manifeste par une possibilité propre à l’homme : déshumaniser l’autre homme en le réduisant à l’état de chose ou d’animal. Il est incongru de faire de l’animal un homme, mais possible de faire de l’homme un animal. Seul l’homme peut manifester l’extrême de son humanité par le dépouillement total de son humanité.",
      refs: [
        { auteur: "Victor Klemperer", oeuvre: "LTI, la langue du Troisième Reich (1947)",
          these: "La langue nazie animalise l’ennemi (parasites, rats, poux) pour présenter la persécution comme une œuvre hygiénique." },
        { auteur: "Levinas", oeuvre: "Difficile liberté, « Nom d’un chien ou le droit naturel »",
          these: "Le racisme n’est pas une extension abusive du concept de race : c’est l’enfermement de chacun dans une espèce, sans possibilité d’en sortir. Les bourreaux reproduisent avec les prisonniers le partage inaugural entre l’homme et les autres animaux, et en font une espèce inférieure exclue du monde commun." }
      ],
      exemple: "Dans le camp de prisonniers où Levinas est interné, seul un chien, Bobby, est « le dernier kantien » d’Allemagne : il voit l’homme avant le maître et reconnaît sa dignité, quand les tortionnaires ne voient que le moyen, la main-d’œuvre exploitable jusqu’à la mort.",
      defs: [
        { terme: "Déshumanisation", def: "Réduction d’un homme à l’état de chose ou d’animal : une animalité d’un genre nouveau, propre à l’homme." },
        { terme: "Métamorphose", def: "Normalement commencement d’une vie nouvelle ; ici, forme de la déchéance ultime." }
      ] },
    { num: "§3", titre: "La fusion impossible",
      idee: "Par compensation, à l’animalisation extrême de l’homme répond aujourd’hui une humanisation parfois extrême de l’animal. Mais des caractères biologiques communs ne suffisent pas à fonder une communauté morale et politique de droits et d’obligations. La différence, longtemps prise pour une supériorité, peut changer de sens : l’homme est l’animal qui a conscience d’être un animal, et donc de ne pas l’être tout à fait. L’animalité ne précède pas l’humanité : elle vient en second, quand l’homme réfléchit à sa place dans la nature.",
      refs: [
        { auteur: "Gombrowicz", oeuvre: "Journal", these: "La rencontre de la « vachéité » : l’animal comme altérité irréductible, interlocuteur muet qui interroge l’humanité." },
        { auteur: "Burroughs", oeuvre: "Tarzan", these: "Le mythe de Tarzan représente, sur un mode imaginaire, une fusion de l’humanité et de l’animalité." }
      ],
      exemple: "On imagine les débuts de l’humanité comme une lutte quotidienne contre les prédateurs ; or les hommes sont plus probablement morts de maladies et d’infections, et les animaux cherchaient sans doute à les éviter.",
      defs: [
        { terme: "Communauté morale et politique", def: "Société fondée sur des droits et des obligations partagés, que des caractères biologiques communs ne suffisent pas à créer." }
      ] }
    ] }
  ] },
{
  "id": "homme-fait-religion",
  "titre": "C’est l’homme qui fait la religion, ce n’est pas la religion qui fait l’homme",
  "attribution": "Marx",
  "source": "Corrigé du professeur",
  "parties": [
    {
      "num": "I",
      "titre": "L’homme fait la religion au sens où des hommes servent de médiateurs entre le divin et l’humain : la religion va de pair avec l’histoire de l’humanité",
      "sous": [
        {
          "num": "§1",
          "titre": "La religion comme institution",
          "idee": "La religion n’est ni un fait naturel ni une pratique solitaire : comme il n’y a pas d’humanité sans relation à autrui, il n’y a pas de culte sans société. C’est une institution, un fait social collectif qui représente le monde selon le pur et l’impur, le sacré et le profane. Elle fait l’homme en le distinguant de ce qui est au-dessus de lui (les dieux, signalés par la zone du sacré). Elle suppose un clergé et des fidèles, et accompagne l’histoire de l’humanité.",
          "refs": [
            {
              "auteur": "Durkheim",
              "oeuvre": "Les Formes élémentaires de la vie religieuse",
              "these": "« Une religion est un système solidaire de croyances et de pratiques relatives à des choses sacrées, c’est-à-dire séparées, interdites, croyances et pratiques qui unissent en une même communauté morale, appelée Église, tous ceux qui y adhèrent. »"
            }
          ],
          "exemple": "L’étymologie (fausse mais parlante) de religio par ligare, relier : la religion comme lien entre les hommes et comme subordination au divin.",
          "defs": [
            {
              "terme": "Institution",
              "def": "Fait social à dimension essentiellement collective."
            },
            {
              "terme": "Sacré / profane",
              "def": "Le sacré est ce qui est séparé, interdit ; le profane, ce qui relève de l’usage ordinaire."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "Les médiateurs humains",
          "idee": "Paradoxe : la religion renvoie à des puissances qui dépassent l’humanité, mais l’homme doit recevoir une parole d’origine non humaine exprimée dans un langage humain. Il faut donc des personnes spécialisées pour la recevoir et la déchiffrer. Il serait anachronique de penser l’humanité ancienne comme autonome : elle dépend constitutivement des dieux.",
          "refs": [
            {
              "auteur": "Les oracles",
              "oeuvre": "Antiquité grecque",
              "these": "Les hommes servent d’intermédiaires avec les dieux pour chaque décision importante : il faut consulter les dieux par les prêtres."
            },
            {
              "auteur": "Les prophètes",
              "oeuvre": "Ancien Testament, Isaïe",
              "these": "Hommes et porte-parole de Dieu, ils instruisent l’humanité en vue de sa formation morale : « Apprenez à faire le bien, recherchez la justice, protégez l’opprimé, faites droit à l’orphelin, défendez la veuve. »"
            }
          ],
          "exemple": "Agamemnon doit sacrifier sa fille Iphigénie après la consultation de l’oracle pour pouvoir naviguer vers Troie. Les exhortations d’Isaïe montrent comment la religion fait l’homme en lui rappelant son humanité : le souci des faibles.",
          "defs": []
        },
        {
          "num": "§3",
          "titre": "Problème : de médiateurs à instigateurs ?",
          "idee": "Une institution humaine, datable, peut-elle échapper à l’analyse ? Il faut distinguer l’état d’esprit qui voit dans les dieux la cause de ce qui est, et la transformation de la religion en chose sociale durable, qui dépend de l’histoire. Les médiateurs ne deviennent-ils pas les instigateurs d’un complot pour opprimer leur prochain ? La religion faite par l’homme deviendrait aliénante.",
          "refs": [
            {
              "auteur": "Ron Hubbard",
              "oeuvre": "La Dianétique (scientologie)",
              "these": "Une religion qui prétend purifier l’humanité de ce qui la fait souffrir, calquée sur le prestige de la science dans les sociétés occidentales, complétée de doctrines obscures réservées aux initiés."
            }
          ],
          "exemple": "Le propos prêté à Hubbard (1949) : « I’d like to start a religion. That’s where the money is. » La naissance des religions à partir des sectes montre leur dimension purement humaine.",
          "defs": []
        }
      ]
    },
    {
      "num": "II",
      "titre": "En fondant la religion, les hommes risquent de l’utiliser pour asseoir leur domination et produisent superstition et intolérance : une vision dégradante de l’humanité",
      "sous": [
        {
          "num": "§1",
          "titre": "L’ignorance de l’humanité primitive",
          "idee": "Les hommes font la religion non par une construction artificielle au service d’une élite, mais parce que leur ignorance accentue leur détresse : ne maîtrisant pas leur environnement, ils expliquent les phénomènes naturels par des êtres surnaturels. L’ignorance est la cause de la superstition.",
          "refs": [
            {
              "auteur": "d’Holbach",
              "oeuvre": "La Contagion sacrée, ou histoire naturelle de la superstition",
              "these": "« Faute de connaître les forces de la nature », l’homme la suppose soumise à des puissances invisibles qu’il veut se rendre propices. Mais son imagination ne lui montre dans ces dieux que « des hommes exagérés ». Aliénation double : l’humanité se croit dépendante des dieux, et se les représente comme des hommes."
            }
          ],
          "exemple": "Des dieux capricieux, tantôt irrités, tantôt favorables, que le culte doit apaiser comme on traite avec un homme puissant dont on craint la colère ou dont on veut la faveur.",
          "defs": [
            {
              "terme": "Superstition",
              "def": "Explication surnaturelle des phénomènes, née de l’ignorance des causes naturelles."
            },
            {
              "terme": "Anthropomorphisme",
              "def": "Représenter le divin sous forme humaine (« des hommes exagérés »)."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "La critique de Marx",
          "idee": "Si même la religion du vrai Dieu repose sur une aliénation, l’homme ne peut se faire lui-même qu’en se défaisant de l’emprise religieuse. On ne plie pas seulement l’échine devant Dieu, mais devant ses semblables, qui se servent de la religion pour faire accepter sa condition. L’homme doit se faire lui-même en défaisant la religion, par l’analyse du processus de projection qui crée les dieux.",
          "refs": [
            {
              "auteur": "Marx",
              "oeuvre": "Contribution à la critique de la philosophie du droit de Hegel",
              "these": "« L’homme, c’est le monde de l’homme, l’État, la société. Cet État, cette société produisent la religion, conscience renversée du monde, parce qu’ils sont un monde renversé. » La religion est une idéologie : elle reflète l’aliénation réelle, économique, et fait de la superstructure la cause de l’infrastructure. Il faut, par la Révolution, refuser de projeter dans l’au-delà les conditions d’une vie heureuse."
            }
          ],
          "exemple": "La religion comme « théorie générale de ce monde », « sa logique sous forme populaire », « sa raison universelle de consolation et de justification ».",
          "defs": [
            {
              "terme": "Idéologie",
              "def": "Représentation sociale qui inverse le rapport réel : elle présente le spirituel comme cause de ce qui le conditionne."
            },
            {
              "terme": "Infrastructure / superstructure",
              "def": "La base économique réelle / les représentations (droit, religion, morale) qu’elle conditionne."
            },
            {
              "terme": "Aliénation",
              "def": "Perte de soi par laquelle l’homme se rend étranger à sa propre essence."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : l’ambiguïté de la critique marxienne",
          "idee": "D’un côté, Marx rejette la religion comme produit de l’ignorance, qui la perpétue. De l’autre, la religion dit quelque chose de l’essence de l’homme : c’est par elle qu’il s’objective. La religion a pu servir le pouvoir, mais son usage n’épuise pas sa nature et ne fait pas comprendre sa dimension anthropogène : elle produit un certain type d’humanité.",
          "refs": [
            {
              "auteur": "Matérialisme des Lumières",
              "oeuvre": "",
              "these": "La représentation religieuse du monde est un produit de l’ignorance, qu’elle entretient dans un cercle vicieux."
            }
          ],
          "exemple": "L’« alliance du trône et de l’autel », dénoncée au XIXe siècle : la religion comme instrument de légitimation des gouvernants.",
          "defs": [
            {
              "terme": "Anthropogène",
              "def": "Qui produit, façonne l’humanité."
            }
          ]
        }
      ]
    },
    {
      "num": "III",
      "titre": "L’homme a beau se faire par la science et la technique, il reste religieux, à condition de comprendre dans la religion une universalité humaine",
      "sous": [
        {
          "num": "§1",
          "titre": "La religion et le besoin de sécurité de l’humanité",
          "idee": "La maîtrise scientifique du monde recule l’explication religieuse sans supprimer la représentation religieuse. Freud montre l’origine humaine de la religion, mais reconnaît qu’elle a fait l’homme : elle a permis à l’humanité de se sentir en sécurité dans un univers hostile, en répondant aux questions de l’origine, du mal et de la mort. Des interdits moraux (l’homicide) ont reçu leur force d’être présentés comme commandements divins.",
          "refs": [
            {
              "auteur": "Freud",
              "oeuvre": "L’Avenir d’une illusion",
              "these": "Les représentations religieuses sont des « illusions, accomplissement des souhaits les plus anciens, les plus forts et les plus puissants de l’humanité ». Le désaide de l’enfant éveille le besoin de protection ; il persiste toute la vie et fonde l’attachement à un père plus puissant. Freud juge pourtant puéril de maintenir l’homme dans ces consolations et attend de la science qu’elle remplace la religion."
            }
          ],
          "exemple": "La Providence apaise l’angoisse, l’ordre moral du monde garantit la justice inaccomplie ici-bas, la vie future prolonge l’existence terrestre.",
          "defs": [
            {
              "terme": "Illusion (Freud)",
              "def": "Croyance motivée par l’accomplissement d’un désir, indépendamment de sa vérité."
            },
            {
              "terme": "Désaide (Hilflosigkeit)",
              "def": "Détresse de l’enfant incapable de subvenir seul à ses besoins."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "Religion et démocratie",
          "idee": "Le refus de la théocratie n’implique pas la disparition de la religion : elle reste un moyen irremplaçable de créer un lien intersubjectif contre les forces centrifuges de la société. Originalité de Tocqueville : la religion n’est pas cause et effet de l’aliénation politique ; elle a des effets positifs, en développant le sentiment de l’égalité devant Dieu et l’universalisme. L’universalité impersonnelle de la science ne remplace pas l’universalité intersubjective de la religion, plus accessible.",
          "refs": [
            {
              "auteur": "Tocqueville",
              "oeuvre": "De la démocratie en Amérique",
              "these": "Les hommes ont un intérêt immense à se faire des idées arrêtées sur Dieu, l’âme et leurs devoirs, sans quoi le doute livrerait leurs actions au hasard. Toute religion élève l’âme au-dessus des biens de la terre et impose des devoirs envers l’espèce humaine : « Les peuples religieux sont donc naturellement forts précisément à l’endroit où les peuples démocratiques sont faibles. »"
            }
          ],
          "exemple": "Les savants forment une communauté transnationale à condition de comprendre le langage de la science ; la religion enseigne une solidarité interhumaine sans cette condition.",
          "defs": [
            {
              "terme": "Théocratie",
              "def": "Gouvernement par la tradition et le clergé, au nom de Dieu."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Religion et spiritualité humaine",
          "idee": "Il ne faut pas confondre la religion comme institution, soumise à un cycle de naissance et de déclin, et la religion comme attitude de l’humanité face au cosmos et à sa condition. La désinstitutionnalisation n’est pas la disparition. La science ne donne pas de vérité absolue et ne comble pas les désirs de l’humanité : la remplacer par la science laisserait l’homme démuni. D’où le projet, au XIXe siècle, d’une religion sans institution.",
          "refs": [
            {
              "auteur": "Malraux",
              "oeuvre": "Propos célèbre",
              "these": "« Le XXIe siècle sera spirituel ou ne sera pas. »"
            },
            {
              "auteur": "Victor Hugo",
              "oeuvre": "Lettre à Lamartine, 24 juin 1862",
              "these": "Une religion qui admet l’enfer, une humanité qui admet la guerre sont inférieures : il tend vers « la société d’en haut, l’humanité d’en haut, la religion d’en haut : société sans roi, humanité sans frontières, religion sans livre »."
            }
          ],
          "exemple": "Aller sur la Lune n’apporte pas plus de clarté sur la condition humaine ; la société sans classes et la conquête spatiale ont été de maigres substituts, une « religion de la science » fragile.",
          "defs": [
            {
              "terme": "Désinstitutionnalisation",
              "def": "Affaiblissement de la religion comme institution, distinct de la disparition de l’attitude religieuse."
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "homme-sociable",
  "titre": "L’homme est sociable, les hommes ne le sont pas",
  "source": "Corrigé du professeur",
  "parties": [
    {
      "num": "I",
      "titre": "Si l’humanité se définit par une nature sociable, il n’y a pas de raison de refuser cette caractéristique aux hommes particuliers : être humain et être sociable sont des concepts réciproques",
      "sous": [
        {
          "num": "§1",
          "titre": "L’homme comme animal politique",
          "idee": "L’homme naît dans une société naturelle (la famille) et se développe dans une autre (la cité) : son essence, son humanité, est d’être sociable. Il ne s’accomplit pleinement que dans la cité, où il passe de la satisfaction des besoins à une vie active de citoyen. L’amitié fait durer la société. Ce qui vaut du général vaut a fortiori du particulier : on voit mal comment opposer la sociabilité de l’homme et l’insociabilité des hommes.",
          "refs": [
            {
              "auteur": "Aristote",
              "oeuvre": "Politiques, I, 2",
              "these": "« L’homme est un animal politique plus que n’importe quelle abeille. » Seul il a le langage (logos), qui manifeste l’avantageux et le nuisible, le juste et l’injuste, alors que la voix ne signifie que le plaisir et la douleur. La cité est antérieure à la famille et à l’individu, comme le tout à la partie. Celui qui vit hors de la cité est « soit une bête soit un dieu »."
            }
          ],
          "exemple": "Le corps détruit, il n’y a plus ni pied ni main : de même l’individu séparé de la cité n’est plus une partie d’un tout.",
          "defs": [
            {
              "terme": "L’homme",
              "def": "L’essence de l’homme, l’humanité : ce qui est commun à tout sujet concret subsumé sous la classe « homme »."
            },
            {
              "terme": "Sociabilité",
              "def": "Attribut essentiel de l’homme, ce sans quoi l’homme n’est pas humain."
            },
            {
              "terme": "Voix / langage",
              "def": "La voix signifie le plaisir et la douleur (animaux) ; le langage signifie le juste et l’injuste (homme)."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "Le rôle de l’éducation",
          "idee": "La dualité n’est pas définitive : il faut du temps pour que l’éducation transforme un être incapable de s’autolimiter en un être qui tient compte d’autrui. Les hommes ne sont pas immédiatement sociaux : leur humanité est une essence qui se réalise par des médiations (règles communes, impératifs, tabous intériorisés).",
          "refs": [
            {
              "auteur": "Defoe",
              "oeuvre": "Robinson Crusoé",
              "these": "La relation pédagogique entre Robinson et Vendredi montre le passage de l’insociabilité à la sociabilité médiatisée par la culture : l’individu réalise son essence malgré des conditions qui semblaient l’exclure du genre humain (la sauvagerie comme absence de culture)."
            }
          ],
          "exemple": "Vendredi apprend la propreté, la décence, renonce à l’anthropophagie. Defoe accélère volontairement cette éducation : domestiquer l’île prend des années, éduquer Vendredi très peu de temps.",
          "defs": []
        },
        {
          "num": "§3",
          "titre": "Problème : l’essence contredite par l’existence",
          "idee": "On peut admettre la réciprocité des concepts d’humanité et de sociabilité sans accepter le passage nécessaire du général au particulier. Les faits contredisent l’idée d’un homme a priori sociable : l’émulation se change vite en rivalité pour la possession de ce qui avantage chacun. L’humanité se définit par la sociabilité, mais l’existence des hommes la contredit.",
          "refs": [
            {
              "auteur": "Norman McLaren",
              "oeuvre": "Neighbours (court-métrage, 1952)",
              "these": "Deux voisins civilisés en apparence s’animalisent dès que des rapports mimétiques naissent entre eux : chacun veut ce que veut l’autre. La relation à autrui met en jeu l’être et l’avoir."
            }
          ],
          "exemple": "Les deux hommes s’entretuent pour une fleur ; le film se clôt sur « Aimez-vous les uns les autres » dans toutes les langues, précisément ce qui ne vient pas spontanément. (Le film est visible sur YouTube.)",
          "defs": [
            {
              "terme": "Désir mimétique",
              "def": "Désir orienté par ce que désire l’autre, source de rivalité (voir Girard)."
            }
          ]
        }
      ]
    },
    {
      "num": "II",
      "titre": "La nature individuelle des hommes s’oppose à toute définition qui fait de l’humanité l’essence des hommes particuliers",
      "sous": [
        {
          "num": "§1",
          "titre": "Les différentes formes de sociabilité",
          "idee": "Parler de la sociabilité de l’homme n’exprime pas une essence mais une attente fondée sur l’observation. L’homme n’est pas un animal social comme les autres : chaque individu a le sentiment de son indépendance et n’est pas un simple rouage. Les individus sont profondément différenciés, d’où les frictions : les hommes s’opposent à l’intérieur même de leur société.",
          "refs": [
            {
              "auteur": "Maeterlinck",
              "oeuvre": "La Vie des abeilles",
              "these": "« Dans la ruche l’individu n’est rien, il n’a qu’une existence conditionnelle, il n’est qu’un moment indifférent, un organe ailé de l’espèce. » Isolée, même nourrie, l’abeille meurt en quelques jours."
            }
          ],
          "exemple": "Les abeilles sont liguées contre les ennemis extérieurs ; les hommes se disputent le pouvoir et la distribution des biens au sein de leur propre société, et font la guerre aux autres.",
          "defs": []
        },
        {
          "num": "§2",
          "titre": "La séparation de l’humanité et de la sociabilité",
          "idee": "Si le genre humain n’est que l’ensemble des individus, on peut douter du lien entre appartenance au genre et aptitude à former une société. Naître dans une famille, c’est une nécessité biologique, pas une sociabilité : chaque être est ontologiquement seul. La sociabilité s’est développée à mesure que l’homme est devenu incapable de vivre seul ; elle ne fait pas partie de la définition de l’humanité.",
          "refs": [
            {
              "auteur": "Rousseau",
              "oeuvre": "Discours sur l’origine et les fondements de l’inégalité",
              "these": "L’homme à l’état de nature n’est pas sociable. Son devenir social est une décadence, liée à la perfectibilité : il quitte l’équilibre avec la nature pour une société où inégalités et querelles d’amour-propre le rendent malheureux."
            },
            {
              "auteur": "Hobbes",
              "oeuvre": "Léviathan",
              "these": "Critiqué par Rousseau : la rivalité, la méfiance et la fierté qu’il prête à l’état de nature ne sont pas innées, elles sont le produit de la sortie de l’état de nature."
            }
          ],
          "exemple": "La famille comme « première société naturelle » : selon le corrigé, c’est confondre la nécessité biologique et la solitude ontologique de tout être séparé.",
          "defs": [
            {
              "terme": "Perfectibilité (Rousseau)",
              "def": "Faculté de se perfectionner, qui est aussi la source des malheurs de l’homme."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : la pitié, germe de sociabilité",
          "idee": "Rousseau doit tenir compte du fait que les hommes vivent en société. L’amour de soi, la pitié et la perfectibilité posent les germes d’une relation à l’autre. La pitié définit l’humanité : sans elle l’homme serait un monstre, indifférent au péril d’autrui. Si elle reste la voix de la nature, que les préjugés cachent sans la détruire, l’homme reste capable de former société avec autrui au-delà de son intérêt.",
          "refs": [
            {
              "auteur": "Rousseau",
              "oeuvre": "Discours sur l’origine de l’inégalité",
              "these": "La pitié pose une relation à autrui non médiatisée par l’amour-propre et modère l’amour de soi en tenant compte de celui qui souffre : identification et sympathie sont la condition d’une société qui ne soit pas une simple association d’intérêts."
            }
          ],
          "exemple": "Même dans les conditions les plus défavorables à la réciprocité, un individu peut rester humain et s’intéresser à l’autre contre ses intérêts personnels.",
          "defs": [
            {
              "terme": "Amour de soi / amour-propre",
              "def": "L’amour de soi est le souci naturel de sa conservation ; l’amour-propre, sentiment social, naît de la comparaison avec autrui."
            }
          ]
        }
      ]
    },
    {
      "num": "III",
      "titre": "Il faut alors trouver un sens à l’écart entre l’a priori de la sociabilité (l’humanité) et le comportement insociable des hommes",
      "sous": [
        {
          "num": "§1",
          "titre": "L’insociable sociabilité",
          "idee": "« L’homme est sociable » signifie que l’homme doit l’être, alors que les hommes ne le sont pas en fait. Sans société, l’homme reste fruste et ne profite pas de la culture. Mais c’est au cours même de la socialisation que naît la tendance à s’opposer aux autres. On ne peut réduire la différence entre l’être et le devoir-être, ni inverser le sens (dire que l’homme doit être insociable).",
          "refs": [
            {
              "auteur": "Kant",
              "oeuvre": "Idée d’une histoire universelle au point de vue cosmopolitique, 4e proposition",
              "these": "L’« insociable sociabilité » : l’homme a besoin de ses semblables pour développer ses dispositions, sinon il reste dans une inertie préjudiciable au genre humain ; mais par égoïsme chacun veut imposer son point de vue, et ce conflit développe les talents."
            }
          ],
          "exemple": "Chaque génération doit augmenter le capital de connaissances légué par la précédente : sans le contact conflictuel des autres, l’humanité resterait inerte.",
          "defs": [
            {
              "terme": "Être / devoir-être",
              "def": "Ce que les hommes sont en fait / ce que l’homme doit être en droit."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "Une dualité indépassable",
          "idee": "Supprimer l’écart supposerait d’éliminer tout ce qui rend l’homme insociable, sur le plan de l’être, du paraître et de l’avoir : un nivellement qui ferait de l’homme un insecte social sans personnalité. La tension entre sociabilité et insociabilité est la condition de la liberté et de la personnalité, pour que l’humanité ne devienne pas une masse indifférenciée.",
          "refs": [
            {
              "auteur": "Ionesco",
              "oeuvre": "Rhinocéros",
              "these": "Les hommes perdent progressivement leur identité, leur humanité et leur sociabilité en devenant des rhinocéros, des brutes qui ne savent que charger. Bérenger, tenté de les rejoindre, reste le dernier homme."
            }
          ],
          "exemple": "Bérenger devant le miroir : « Malheur à celui qui veut conserver son originalité ! […] Je suis le dernier homme, je le resterai jusqu’au bout ! Je ne capitule pas ! »",
          "defs": []
        },
        {
          "num": "§3",
          "titre": "L’homme dialogique",
          "idee": "La tension ne peut être supprimée, mais la sociabilité n’est pas une donnée : c’est une tâche. Les hommes réalisent leur humanité en formant une communauté morale qui englobe idéalement tous les hommes. L’humanité devient un horizon par-delà tout ce qui pousse les hommes à se combattre.",
          "refs": [
            {
              "auteur": "Francis Wolff",
              "oeuvre": "Plaidoyer pour l’universel",
              "these": "L’homme se définit non par la raison seule mais par la raison dialogique : par le langage, la conscience est en relation avec elle-même, le monde et une autre conscience. Les machines calculent logiquement, l’homme raisonne dialogiquement. Il peut suspendre ses attaches (langue, religion, couleur de peau) pour intégrer tout autre dans une relation de réciprocité."
            }
          ],
          "exemple": "Ni la conscience (les animaux l’ont aussi) ni l’esprit (présent dans les machines) ne distinguent l’homme : c’est une conscience et un esprit inséparables du langage et de l’échange.",
          "defs": [
            {
              "terme": "Raison dialogique",
              "def": "Raison qui s’exerce dans l’échange de paroles, en comprenant les raisons que donne l’autre."
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "animal-perdu-nature",
  "titre": "L’homme est-il un animal qui a perdu sa nature ?",
  "source": "Corrigé du professeur",
  "parties": [
    {
      "num": "I",
      "titre": "Si l’homme avait perdu sa nature, il serait le seul dans ce cas : il est et demeure un être naturel, dont l’existence a des traits constants (une nature humaine, l’humanité) : un vivant qui a la raison en partage",
      "sous": [
        {
          "num": "§1",
          "titre": "Les mythes de la chute de l’humanité",
          "idee": "Dire que l’homme a perdu sa nature, c’est imaginer une séparation douloureuse entre un avant et un après, un divorce entre ce que l’homme est et ce qu’il devrait être. Les mythes de la chute traduisent cette dysharmonie, complétés par les mythes du retour à l’unité perdue (la nature promise après le Jugement dernier). Ils ne disent pas que l’homme a perdu sa nature, mais qu’elle a été corrompue : ils confirment l’existence d’une nature actuelle, distincte de la nature originaire.",
          "refs": [
            {
              "auteur": "La Genèse",
              "oeuvre": "Le mythe chrétien de la Chute",
              "these": "La distinction entre la vie prélapsaire d’Adam (avant la faute) et la vie actuelle : la nature humaine est transformée par une action de l’homme qui lui vaut ce châtiment, mais elle demeure."
            }
          ],
          "exemple": "Adam avant et après la faute : l’homme n’est plus comme il était, mais il est toujours un homme.",
          "defs": [
            {
              "terme": "Perdre sa nature",
              "def": "Ne plus appartenir à la nature, ne plus avoir d’essence, c’est-à-dire de traits constants permettant de reconnaître un humain et de le distinguer d’un non-humain."
            },
            {
              "terme": "Animal",
              "def": "Être vivant."
            },
            {
              "terme": "Prélapsaire",
              "def": "Antérieur à la Chute (du latin lapsus)."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "L’homme a une nature car il a une essence, comme tout étant naturel",
          "idee": "« Perdre sa nature » ne peut se dire que d’un individu privé des propriétés attendues de son espèce : un monstre, celui qu’on montre. Quand je reconnais un homme, j’ai des attentes qui définissent sa nature. Aristote exclut de la nature humaine le dieu et le criminel mis au ban de la cité (formule à ne pas prendre à la lettre : nos politiques pénales ne jugent personne irrécupérable).",
          "refs": [
            {
              "auteur": "Aristote",
              "oeuvre": "Politiques",
              "these": "L’homme est l’animal qui a le logos : capable de penser, de sentir le juste et l’injuste et de vivre en société pour réaliser son essence."
            },
            {
              "auteur": "David Lynch",
              "oeuvre": "Elephant Man (film)",
              "these": "Joseph Merrick, défiguré par la neurofibromatose, est exhibé comme monstre de foire. C’est par la parole qu’il réintègre son humanité et remplit la définition aristotélicienne. Les vrais monstres sont le public et l’entourage, qui ont perdu toute compassion."
            }
          ],
          "exemple": "Merrick suscite le dégoût et non la pitié : en le rendant monstrueux, ceux qui le regardent perdent eux-mêmes leur nature humaine.",
          "defs": [
            {
              "terme": "Monstre",
              "def": "Étymologiquement, celui qu’on montre, qu’on ne peut manquer de voir tant il diffère des autres."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : les limites d’une définition essentialiste",
          "idee": "1° Avoir une nature permet de se reconnaître, mais cette reconnaissance se limite à ceux qui nous ressemblent : d’où l’esclavage et la xénophobie (Aristote lui-même tenait l’esclavage pour naturel). 2° Une définition trop restreinte exclut, une définition trop large devient générale. De plus, l’homme est à l’origine de transformations : si sa nature animale voulait ces transformations, la perte de sa nature serait son destin. La nature prend alors un second sens : non plus l’essence, mais la nature immédiate.",
          "refs": [
            {
              "auteur": "Joseph de Maistre",
              "oeuvre": "Considérations sur la France",
              "these": "« Il n’y a point d’homme dans le monde. J’ai vu, dans ma vie, des Français, des Italiens, des Russes ; je sais même, grâce à Montesquieu, qu’on peut être Persan : mais quant à l’homme, je déclare ne l’avoir rencontré de ma vie. »"
            }
          ],
          "exemple": "Seule l’anthropologie moderne, aidée de l’ethnologie, est parvenue à une définition unique de l’homme à partir de la multiplicité des peuples, après beaucoup d’errements.",
          "defs": [
            {
              "terme": "Essence / nature immédiate",
              "def": "L’essence est l’ensemble des traits constants qui définissent l’homme ; la nature immédiate est son état premier, avant toute médiation."
            }
          ]
        }
      ]
    },
    {
      "num": "II",
      "titre": "L’homme a perdu sa nature immédiate, celle où il était encore infra-humain : il est l’être dont la nature est de ne pas avoir de nature, c’est-à-dire de la médiatiser pour parvenir à l’humanité",
      "sous": [
        {
          "num": "§1",
          "titre": "La nature marâtre et la perte de la nature immédiate",
          "idee": "L’histoire humaine n’a pas de sens clair mais une constance : la transmission d’un capital moral, culturel et économique. Rien de plus étranger à cela que l’Arcadie mythique d’un homme en équilibre avec son milieu. La nature a voulu que l’homme perde sa nature première, fruste, pour devenir pleinement humain : l’homme est un animal dénaturé, et c’est la condition pour accéder à l’humanité.",
          "refs": [
            {
              "auteur": "Kant",
              "oeuvre": "Idée d’une histoire universelle au point de vue cosmopolitique",
              "these": "Kant remplace l’homme raisonnable par « l’insociable sociabilité », antagonisme inspiré de la polarité newtonienne, qui actualise les dispositions, germes naturels attendant l’occasion de croître. La nature même a voulu que l’homme sorte de sa torpeur et forme des sociétés. Raison et liberté le distinguent de toutes les créatures."
            }
          ],
          "exemple": "Les bergers d’Arcadie : une harmonie entre l’homme et la nature, thèse jugée « saugrenue » par le corrigé.",
          "defs": [
            {
              "terme": "Nature marâtre",
              "def": "Nature qui ne donne rien à l’homme et le contraint à se développer par lui-même."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "L’absence de nature ?",
          "idee": "Qui pourrait dater le moment où l’homme aurait eu une nature immédiate ? Dès le Paléolithique, outils, techniques et sépultures forment un saut qualitatif. On voit mal l’humanité se mettre soudain à vivre autrement après une unité avec la nature. S’il est dans la nature de l’homme de ne pas avoir de nature, l’idée d’une perte n’a pas de sens : sa nature est devant lui, elle est ce qu’il en fera.",
          "refs": [
            {
              "auteur": "Pic de la Mirandole",
              "oeuvre": "De la dignité de l’homme (1486)",
              "these": "Dieu dit à Adam : « Je ne t’ai donné ni place déterminée, ni visage propre, ni don particulier […] afin que, souverain de toi-même, tu achèves ta propre forme librement, à la façon d’un peintre ou d’un sculpteur. » L’homme peut dégénérer vers les bêtes ou se régénérer vers le divin. Le thème prométhéen de l’homme nu se mêle au thème chrétien de l’imago Dei."
            },
            {
              "auteur": "Cassirer",
              "oeuvre": "Essai sur l’homme",
              "these": "L’homme est un « animal symbolique » : sans le symbolisme, sa vie serait celle des prisonniers de la caverne, limitée aux besoins biologiques. Il transforme la nature en se la représentant et modifie sa propre nature en l’extériorisant (art, religion, philosophie, science)."
            }
          ],
          "exemple": "L’invention de la sépulture et des outils dès le Paléolithique : aucune trace d’une humanité qui aurait d’abord vécu fondue dans la nature.",
          "defs": [
            {
              "terme": "Imago Dei",
              "def": "L’homme créé à l’image de Dieu."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : l’homme comme pure antiphysis ?",
          "idee": "À force de faire de l’homme une négation de sa nature, on feint de croire qu’il n’a rien de naturel. Sartre fait de la liberté la négation du donné, mais c’est le même raisonnement que celui qui nie l’homme et assassine l’humanité. Sartre ne peut limiter cette négation qu’en supposant naturel de respecter la liberté d’autrui et de vivre en société. L’homme n’est pas une liberté incarnée, mais un vivant, donc un animal, qui est en même temps libre.",
          "refs": [
            {
              "auteur": "Sartre",
              "oeuvre": "Les Mouches",
              "these": "Si tout est nature, le seul moyen d’affirmer sa liberté est de nier la nature : le matricide d’Oreste n’est pas seulement la vengeance d’Agamemnon, il montre que rien n’est joué d’avance et que la liberté échappe aux dieux."
            },
            {
              "auteur": "Lamartine",
              "oeuvre": "« L’Homme » (Méditations poétiques)",
              "these": "« L’homme est un dieu tombé qui se souvient des cieux » : image de l’homme tombé dans la matière."
            }
          ],
          "exemple": "Le meurtre de masse pratiqué « comme on procède à une dératisation » : la négation de toute nature mène à nier l’homme lui-même.",
          "defs": [
            {
              "terme": "Antiphysis",
              "def": "Ce qui s’oppose à la nature (phusis) : l’homme comme négation de sa nature et de son animalité."
            }
          ]
        }
      ]
    },
    {
      "num": "III",
      "titre": "L’homme peut oublier son origine naturelle, mais pas son commencement, qui ne cesse jamais : d’où l’idéalisation de la nature à mesure que son environnement se technicise",
      "sous": [
        {
          "num": "§1",
          "titre": "L’évolution et la nouvelle image de l’homme",
          "idee": "La révolution darwinienne (au sens astronomique et politique) prend l’homme dans son existence naturelle, sans en faire l’image de Dieu ni le seigneur de la création. L’homme a une nature spécifique : il donne une autre direction à la sélection naturelle. Deux discours se répondent : Sartre met entre parenthèses les bases naturelles de la liberté ; la sociobiologie naturalise complètement l’homme en oubliant que l’évolution culturelle prend le relais de l’évolution naturelle.",
          "refs": [
            {
              "auteur": "Darwin",
              "oeuvre": "La Descendance de l’homme",
              "these": "Sans hypothèse transcendante (Dieu, âme immortelle), l’homme passé de la horde à la société consacre temps et ressources aux pauvres, aux malades, aux nécessiteux au lieu d’éliminer les faibles : l’évolution rend possibles des comportements naturels qui expriment l’humanité."
            }
          ],
          "exemple": "La « loi de la jungle » est une caricature : dans la jungle, il n’y a que des rapports naturels entre proie et prédateur.",
          "defs": [
            {
              "terme": "Sociobiologie",
              "def": "Théorie qui explique les comportements sociaux, humains compris, par la biologie et l’évolution."
            },
            {
              "terme": "Révolution (double sens)",
              "def": "Au sens astronomique, retour au point de départ (revenir au commencement) ; au sens politique, renversement."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "Liberté et nature",
          "idee": "Être naturel ne signifie pas avoir une nature fixe. On reconnaît aux autres vivants (grands singes) des interactions sociales et un rapport technique à la nature. Mais on a souvent invoqué la nature pour naturaliser un rapport de forces. La liberté ne s’actualise qu’à partir d’un donné naturel qu’il faut reconnaître pour ne pas le subir.",
          "refs": [
            {
              "auteur": "Simone de Beauvoir",
              "oeuvre": "Le Deuxième Sexe",
              "these": "Critique de « l’éternel féminin ». Beauvoir admet des différences physiologiques indéniables entre homme et femme, mais elles n’autorisent pas à parler d’une nature masculine guerrière et d’une nature féminine douce et maternelle : tout dépend de l’éducation, des rapports sociaux et de l’idéologie."
            },
            {
              "auteur": "Spinoza",
              "oeuvre": "Éthique, I, appendice",
              "these": "La nature est souvent, comme Dieu, un « asile de l’ignorance » auquel on recourt quand on ne sait pas expliquer la cause d’un fait."
            }
          ],
          "exemple": "Les lieux communs sans cesse réactualisés : Les hommes viennent de Mars, les femmes viennent de Vénus (John Gray, 1992).",
          "defs": [
            {
              "terme": "Naturaliser",
              "def": "Présenter comme naturel ce qui n’est que le résultat d’un rapport de forces."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "L’idéalisation de la nature et les biotechnologies",
          "idee": "Paradoxe : plus la part de nature décroît avec la technicisation, plus l’homme a la nostalgie d’une nature vierge et d’une humanité régénérée à son contact. Le mythe maternel de la nature protectrice remplace le Père du monothéisme. Le décalage entre la science et l’idéologie est flagrant. La science montre que la nature n’est pas saturée : les possibles qui définissent un ordre ne sont pas tous actualisés. Qui fixera la frontière entre naturel et artificiel ?",
          "refs": [
            {
              "auteur": "Exodarwinisme",
              "oeuvre": "",
              "these": "L’évolution des outils prend le relais de l’évolution biologique : l’homme extériorise ses facultés dans des objets et des machines qui travaillent à sa place (robotisation, automatisation)."
            }
          ],
          "exemple": "Thérapie cellulaire, greffe de visage, cœur artificiel ; repousser la ménopause : pourquoi ne serait-il pas naturel d’avoir un enfant à cinquante ans si l’on vit jusqu’à cent ans ?",
          "defs": [
            {
              "terme": "Anthropisation",
              "def": "Transformation du milieu par l’action humaine."
            },
            {
              "terme": "Hybris",
              "def": "Démesure, transgression des limites, que la nature protectrice est censée conjurer."
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "nature-guide",
  "titre": "La nature est-elle un guide pour l’humanité ?",
  "source": "Corrigé du professeur",
  "parties": [
    {
      "num": "I",
      "titre": "La nature peut être un guide : par son corps et pour sa survie l’homme en dépend, et par la raison il peut prendre conscience de son appartenance à la nature et la suivre ; l’humanité n’est pas la source de ses règles",
      "sous": [
        {
          "num": "§1",
          "titre": "Le mythe de l’âge d’or",
          "idee": "Biologiquement, l’homme relève de l’Évolution. Plus on remonte vers la préhistoire, plus sa condition dépend des lois de la vie et de la survie : c’est la nature (lutte pour l’existence, nécessité d’inventer et de ruser) qui a permis à l’espèce de s’imposer. Les mythes de l’âge d’or présentent ce processus sous une forme inversée : une harmonie première, puis la décadence (le fer, la guerre).",
          "refs": [
            {
              "auteur": "Aristote",
              "oeuvre": "Physique ; Politiques",
              "these": "« La nature ne fait rien en vain » : elle réalise ses fins avec économie de moyens. Théoriquement, chaque être se comporte selon sa nature (les corps lourds tombent, les légers montent) ; pratiquement, l’art imite la nature."
            }
          ],
          "exemple": "Le mythe de l’âge d’or situe la guerre et l’invention du fer dans une étape de décadence, alors que la lutte était présente dès l’origine.",
          "defs": []
        },
        {
          "num": "§2",
          "titre": "La nature, guide unique face à une humanité divisée",
          "idee": "Par la raison, l’homme surplombe la nature sans rompre avec elle. Quoi de plus universel que la nature face à une humanité fractionnée en sociétés ? Les coutumes sont particulières et relatives ; la raison, faculté de l’universel, cherche ce qui est commun à tous et trouve dans la nature la voie à suivre.",
          "refs": [
            {
              "auteur": "Montaigne",
              "oeuvre": "Essais, III, 13, « De l’expérience »",
              "these": "Reprenant le « vivre selon la nature » des Anciens, il faut accepter la condition finie sans viser une surhumanité stoïcienne : « Nature est un doux guide, mais non pas plus doux que prudent et juste. » La nature n’est pas corrompue par le péché : elle guide vers la jouissance de la vie charnelle."
            }
          ],
          "exemple": "« J’aime la vie, et la cultive telle qu’il a plu à Dieu nous l’octroyer. […] Je quête partout sa piste, nous l’avons confondue de traces artificielles. »",
          "defs": [
            {
              "terme": "Eudémonisme",
              "def": "Morale qui fait du bonheur la fin de la vie (épicuriens, stoïciens)."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : deux présupposés discutables",
          "idee": "a) Il faut que la voix de la nature soit audible, qu’on distingue la coutume de la nature ; or toute universalisation d’une coutume est une fiction. b) Il faut que la nature soit une source de sens : cela suppose une intention signifiante, une finalité, soit d’une intelligence qui parle par elle, soit de la nature elle-même. N’est-ce pas une représentation anthropomorphique ?",
          "refs": [
            {
              "auteur": "Sextus Empiricus",
              "oeuvre": "Hypotyposes pyrrhoniennes",
              "these": "On oppose coutume à coutume, loi à loi, institution à institution : les Éthiopiens marquent le corps de leurs enfants, les Perses portent des habits bigarrés jugés indécents ailleurs. Impossible de déclarer une coutume naturelle et les autres artificielles."
            },
            {
              "auteur": "Pascal",
              "oeuvre": "Pensées",
              "these": "« La coutume est une seconde nature, qui détruit la première. […] J’ai grand peur que cette nature ne soit elle-même qu’une première coutume. » La frontière entre coutume et nature est indécidable."
            }
          ],
          "exemple": "Chez les Romains, qui renonce aux biens de son père ne paie pas ses dettes ; chez les Rhodiens, il doit les payer. En Scythie, on immolait les étrangers à Diane.",
          "defs": [
            {
              "terme": "Finalité",
              "def": "Le fait d’agir en vue d’une fin ; prêter une intention à la nature."
            },
            {
              "terme": "Scepticisme",
              "def": "Doctrine qui suspend le jugement en opposant les opinions, les lois et les coutumes entre elles."
            }
          ]
        }
      ]
    },
    {
      "num": "II",
      "titre": "Se laisser guider par la nature, c’est accepter une tutelle incompatible avec l’autonomie et la dignité de l’humanité",
      "sous": [
        {
          "num": "§1",
          "titre": "L’affranchissement de l’humanité à l’égard de la nature",
          "idee": "Guidée par la nature, l’humanité aurait stagné dans la contemplation des cycles naturels et une vision d’une nature peuplée d’esprits (chamanisme). Elle a progressé en s’émancipant des savoirs traditionnels, mélange de merveilleux et d’empirisme, pour interroger la nature à partir de théories et d’expériences.",
          "refs": [
            {
              "auteur": "Brecht",
              "oeuvre": "La Vie de Galilée",
              "these": "Braquer le télescope sur le ciel, c’est le geste de la science nouvelle : rejeter l’autorité d’Aristote pour aller aux choses mêmes par le langage mathématique."
            },
            {
              "auteur": "Descartes",
              "oeuvre": "Le Monde, ou Traité de la lumière, VII",
              "these": "« Par la Nature, je n’entends point ici quelque déesse, ou quelque autre sorte de puissance imaginaire », mais la matière même. Réduite à l’étendue, la nature ne peut plus guider l’homme : c’est la raison, par ses idées innées, qui découvre la vérité."
            }
          ],
          "exemple": "La signatura rerum : le cerneau de noix soignerait les maux de tête parce qu’il ressemble au cerveau.",
          "defs": [
            {
              "terme": "Signatura rerum",
              "def": "Doctrine selon laquelle les choses forment un langage de ressemblances révélant leurs propriétés."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "La transformation de la nature par l’humanité",
          "idee": "Par la technique, l’homme fait faire à la nature ce qu’elle ne produirait pas. Même l’imitation est déjà une transformation : l’art crée des formes sui generis. Connaître la nature permet de créer des artefacts qui corrigent ou détruisent certains effets naturels.",
          "refs": [
            {
              "auteur": "Bacon",
              "oeuvre": "La Nouvelle Atlantide",
              "these": "Sur l’île de Bensalem, une communauté de savants réalise les rêves de l’humanité (voler, aller sous l’eau) grâce aux mécanismes arrachés à la nature par la « torture » de l’expérimentation."
            }
          ],
          "exemple": "Les premiers architectes auraient créé les colonnes en imitant les arbres ; mais la colonne est une création de l’esprit, où la recherche de la forme et de l’harmonie dépasse la nature.",
          "defs": [
            {
              "terme": "Sui generis",
              "def": "D’un genre propre, irréductible à autre chose."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : l’homme, un empire dans un empire ?",
          "idee": "En faisant de l’homme un être autonome dominant la nature, on oublie qu’il en fait partie. La science et la technique sont-elles efficaces parce que l’homme échappe à la nature, ou parce qu’il coopère intelligemment avec elle ? Pour que la raison des choses et les choses de la raison coïncident, l’homme ne doit pas être un étranger dans la nature.",
          "refs": [
            {
              "auteur": "Spinoza",
              "oeuvre": "Éthique, III, préface",
              "these": "L’homme n’est pas « un empire dans un empire » : il fait partie de la nature et obéit à ses lois."
            },
            {
              "auteur": "Sartre",
              "oeuvre": "Les Mouches",
              "these": "Oreste à Jupiter : « Hors nature, contre nature, sans excuse […] Car je suis un homme, Jupiter, et chaque homme doit inventer son chemin. La nature a horreur de l’homme. » Une liberté pure, limitée par rien."
            }
          ],
          "exemple": "Oreste refuse de revenir sous la loi de Jupiter et l’ordre des choses : « je suis condamné à n’avoir d’autre loi que la mienne ».",
          "defs": []
        }
      ]
    },
    {
      "num": "III",
      "titre": "La nature ne décide pas à la place de l’humanité, mais elle lui permet de se penser comme participant activement à son dynamisme : coopération sans hiérarchie de domination",
      "sous": [
        {
          "num": "§1",
          "titre": "L’entendement législateur de la nature",
          "idee": "Ni la contemplation de la nature ni la raison livrée à elle-même (la métaphysique) n’ont produit de savoir. Il faut une relation cohérente où raison et nature contribuent chacune à la connaissance. Ce n’est pas la nature en totalité qui nous guide : elle donne seulement le contenu déterminé des phénomènes, qu’on ne peut déduire a priori.",
          "refs": [
            {
              "auteur": "Kant",
              "oeuvre": "Critique de la raison pure",
              "these": "Synthèse de l’empirisme et du rationalisme : l’entendement pose le cadre de l’expérience possible et les lois générales de la nature, mais le donné sensible doit confirmer les théories. Sans l’entendement, la nature serait une poussière de phénomènes ; sans le donné, la connaissance serait un jeu vide de concepts."
            }
          ],
          "exemple": "Le savant a raison de « suivre la nature », de s’en tenir à ce qu’il constate au laboratoire plutôt qu’aux idées préconçues, mais il ne le peut que parce que l’entendement a posé a priori les lois de la nature.",
          "defs": [
            {
              "terme": "A priori / a posteriori",
              "def": "Indépendant de l’expérience / tiré de l’expérience."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "Le refus d’une domination totale sur la nature",
          "idee": "La coopération corrige la tendance de l’homme à se croire omniscient et omnipotent. Notre mentalité scientiste croit que connaître, c’est maîtriser. Descartes dit pourtant « comme maîtres et possesseurs » : l’homme ne l’est pas, Dieu reste le créateur. On peut se représenter la nature comme coresponsable du développement de l’humanité, sans lui prêter d’intention consciente.",
          "refs": [
            {
              "auteur": "Descartes",
              "oeuvre": "Discours de la méthode, VI",
              "these": "« Comme maîtres et possesseurs de la nature » : à ne pas confondre avec la promesse du serpent, « vous serez comme des dieux » (eritis sicut dii). L’homme est le second de Dieu sur terre."
            },
            {
              "auteur": "Auguste Comte",
              "oeuvre": "Synthèse subjective ; Discours sur l’esprit positif",
              "these": "La science dépeuple la nature de toute intention (état positif de la loi des trois états), mais elle doit rejoindre son commencement en incorporant le fétichisme au positivisme : se représenter la nature comme si elle avait voulu encourager l’humanité. Nouvelle trinité : le Grand-Être (l’Humanité), le Grand-Fétiche (la Terre), le Grand-Milieu (l’Espace)."
            }
          ],
          "exemple": "À l’heure des préoccupations écologiques, la pensée comtienne d’une relation entre l’homme et la Terre perd de son étrangeté.",
          "defs": [
            {
              "terme": "Loi des trois états (Comte)",
              "def": "L’esprit humain passe par l’état théologique, l’état métaphysique, puis l’état positif (scientifique)."
            },
            {
              "terme": "Fétichisme",
              "def": "Premier stade théologique, qui prête à la nature des volontés et des intentions."
            },
            {
              "terme": "Scientisme",
              "def": "Croyance que la science peut tout connaître et que connaître donne la maîtrise."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Une humanité plus ouverte",
          "idee": "Un humanisme élargi n’oblige pas à choisir entre le naturalisme (l’homme purement naturel) et l’humanisme traditionnel (une nature humaine coupée de la nature). L’examen de la nature aide à comprendre l’homme, et la connaissance de soi ne nous éloigne pas de la nature : la nature peut guider l’homme sur la voie de la connaissance de soi.",
          "refs": [
            {
              "auteur": "Léonard de Vinci",
              "oeuvre": "Dessins",
              "these": "Il étudie la métamorphose des formes dans tous les êtres naturels et retrouve le même dynamisme à l’œuvre."
            },
            {
              "auteur": "Rousseau",
              "oeuvre": "Émile",
              "these": "En principe la nature éduque Émile, en respectant ses rythmes. En fait le précepteur coopère avec la nature : il se rend invisible et naturalise son artifice, intervenant pour que le cours de la nature se déroule normalement."
            }
          ],
          "exemple": "Les dessins de Vinci mettent sur le même plan la spirale des cheveux et le tourbillon de l’eau : une même forme récurrente.",
          "defs": [
            {
              "terme": "Naturalisme / humanisme",
              "def": "Le naturalisme fait de l’homme un être purement naturel ; l’humanisme traditionnel le pense séparé de la nature."
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "verite-mesure",
  "titre": "La vérité est-elle la mesure de l’homme ?",
  "source": "Corrigé du professeur",
  "parties": [
    {
      "num": "I",
      "titre": "La vérité est la mesure de l’homme car sans elle la pensée et l’action sont impossibles : elle est l’unité de mesure qui met en rapport la pensée et l’être",
      "sous": [
        {
          "num": "§1",
          "titre": "La vérité, mesure de la pensée humaine",
          "idee": "L’humanité a besoin d’un critère pour évaluer ses représentations. Le jugement dépend de l’homme, et avec lui la possibilité de se tromper ; mais la vérité ne peut dépendre de l’humanité, sous peine de cercle vicieux. On ne pense pas la vérité : on pense parce que la vérité est la condition de la pensée. Elle n’est pas relative : il n’y a pas de régimes de vérité variables selon les cultures.",
          "refs": [
            {
              "auteur": "Parménide",
              "oeuvre": "Poème",
              "these": "On ne peut penser que ce qui est, au sens de ce qui est stable et identique, par opposition au devenir, au changeant, au multiple."
            }
          ],
          "exemple": "Les énoncés vrais particuliers dépendent de nous et sont évalués selon la vérité, qui, elle, ne dépend pas des hommes.",
          "defs": [
            {
              "terme": "Jugement",
              "def": "Acte de pensée qui exprime le rapport entre un être et ses propriétés, ou entre plusieurs êtres."
            },
            {
              "terme": "Vérité-correspondance",
              "def": "Accord de la pensée avec l’être."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "La vérité, mesure de l’action",
          "idee": "Sans référence à la vérité, l’action serait livrée au hasard. Modèle traditionnel : l’action est réussie quand elle respecte les coutumes (version faible de la vérité : est-ce l’utilité qui fait la vérité ou l’inverse ?). Modèle socratique : l’action est déterminée par la connaissance du vrai et du bien (version forte), qui réalise l’humanité de l’homme, sa vertu.",
          "refs": [
            {
              "auteur": "Socrate",
              "oeuvre": "(chez Platon et Xénophon)",
              "these": "Contre les maximes de sagesse pratique, c’est le vrai et le bien qui doivent déterminer la conduite. L’enkrateia, maîtrise de soi, suppose la connaissance de ce qu’est la vertu."
            }
          ],
          "exemple": "Une technique de pêche est-elle tenue pour vraie parce qu’elle marche, ou jugée utile parce que les ancêtres l’ont transmise ? Les maximes sapientiales grecques : « Rien de trop ».",
          "defs": [
            {
              "terme": "Enkrateia",
              "def": "Maîtrise de soi, qui suppose chez Socrate la connaissance du bien."
            },
            {
              "terme": "Vertu (aretê)",
              "def": "Excellence par laquelle un être réalise ce qu’il a de meilleur."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : mesure au sens propre ou au sens figuré ?",
          "idee": "Une mesure au sens propre établit une proportion entre des grandeurs commensurables, fixée par un accord sur un critère. Si la vérité existe en soi, elle peut servir de mesure. Mais si les hommes se disputent sur la mesure elle-même, le doute naît : la mesure est-elle fidèle au mesuré ou dépend-elle du mesurant ? On passe alors de la mesure objective (la vérité détermine l’humanité) à la mesure relative (l’humanité détermine la vérité).",
          "refs": [
            {
              "auteur": "Le système métrique",
              "oeuvre": "",
              "these": "Les mesures traditionnelles venaient du corps (pied, pouce) ; la science a établi des mesures objectives indépendantes du mesurant."
            }
          ],
          "exemple": "Le mètre, défini en 1790 comme le dix-millionième du quart du méridien terrestre, l’est aujourd’hui comme la distance parcourue par la lumière dans le vide en 1/299 792 458 de seconde.",
          "defs": [
            {
              "terme": "Commensurable",
              "def": "Qui peut être mesuré par une même unité."
            }
          ]
        }
      ]
    },
    {
      "num": "II",
      "titre": "Une mesure n’a de sens que pour celui qui l’invente et l’utilise : la vérité n’est pas une norme absolue mais un instrument que l’humanité invente",
      "sous": [
        {
          "num": "§1",
          "titre": "Le paradoxe d’une mesure mesurée : la vérité relative à l’humanité",
          "idee": "On a fait de la vérité une norme transcendante en confondant la mesure (le critère) et le mesuré, en oubliant l’acte de mesurer. Toute mesure suppose un sujet mesurant, un objet mesuré et une unité. La vérité est le nom de l’accord entre la pensée et l’être : elle résulte de cet accord, elle ne le précède pas. Elle suppose l’intervention active du sujet.",
          "refs": [
            {
              "auteur": "Bachelard",
              "oeuvre": "L’Activité rationaliste de la physique contemporaine",
              "these": "La « phénoménotechnique » : la science moderne ne trouve pas sa mesure dans la nature, elle l’invente en créant des appareils qui réalisent des théories. Les atomes ne sont pas pensés comme existant en soi, mais en relation avec les théories qui permettent de les mesurer."
            }
          ],
          "exemple": "L’interférométrie atomique : on divise un faisceau d’atomes en deux chemins, on les recombine, et les franges d’interférence permettent de calculer leur longueur d’onde.",
          "defs": [
            {
              "terme": "Phénoménotechnique",
              "def": "Production instrumentale des phénomènes étudiés à partir de la théorie."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "La vérité et le conflit",
          "idee": "Si la vérité est mesurée par l’homme, il est illusoire d’en attendre qu’elle règle les conflits. La géométrie, science de la mesure, a donné l’illusion de mesures invariables pour tous les domaines. Mais dans les affaires humaines, la vérité naît de la lutte des opinions et ne peut s’en abstraire : elle est le produit d’une négociation, d’un compromis, une fois que les hommes se sont mesurés dans leurs conflits.",
          "refs": [
            {
              "auteur": "Hérodote",
              "oeuvre": "Histoires, II",
              "these": "La crue du Nil effaçait chaque année les limites des champs ; pour lever l’impôt il fallait les rétablir : naissance de la géométrie (mesure de la terre), qui s’élève ensuite à des idéalités indépendantes des opinions."
            },
            {
              "auteur": "Cicéron",
              "oeuvre": "Brutus",
              "these": "Après une période de troubles, quand les biens privés ont été réclamés devant les tribunaux, Corax et Tisias ont codifié l’art oratoire : la vérité sur les propriétaires ne s’impose pas, elle dépend de l’habileté à interpréter les faits."
            }
          ],
          "exemple": "La géométrie s’éloigne des disputes à mesure que ses figures deviennent abstraites ; la rhétorique judiciaire reste prise dans la lutte des opinions en Sicile.",
          "defs": [
            {
              "terme": "Géométrie",
              "def": "Étymologiquement, mesure de la terre."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : la démesure de l’homme-mesure",
          "idee": "Dire que la vérité est mesurée par l’homme risque de reprendre la thèse de Protagoras. Lue comme relativisme, elle s’autodétruit ; lue à la lettre, elle donne au discours une toute-puissance et passe du sens du discours à l’être. L’homme peut tout mesurer, mais il ne peut pas changer les choses par la force du logos. Ce qui est critiquable, c’est moins le relativisme que la démesure qui fait du logos une fin suprême.",
          "refs": [
            {
              "auteur": "Protagoras",
              "oeuvre": "La Vérité, ou Discours destructifs",
              "these": "« L’homme est la mesure de toutes choses, de celles qui existent et de leur nature ; de celles qui ne sont pas et de l’explication de leur non-existence. »"
            }
          ],
          "exemple": "Les négationnistes se livrent à de savants calculs pour prétendre qu’il était impossible de faire mourir des millions de personnes en si peu de temps : on ne change pas le vrai en faux par le discours.",
          "defs": [
            {
              "terme": "Relativisme",
              "def": "Thèse selon laquelle la vérité dépend du sujet, de la culture ou du point de vue."
            },
            {
              "terme": "Négationnisme",
              "def": "Négation de l’extermination massive des Juifs."
            }
          ]
        }
      ]
    },
    {
      "num": "III",
      "titre": "La vérité n’est ni transcendante ni simple convention : elle apporte de la mesure à l’homme et l’humanise en lui évitant les extrêmes du dogmatisme et du scepticisme",
      "sous": [
        {
          "num": "§1",
          "titre": "Le dogmatisme naturel de l’humanité",
          "idee": "Laissée à sa tendance naturelle, l’humanité fait un usage intolérant de la vérité : plus la vérité est mise au-dessus de l’homme, plus il risque la démesure. Le fanatique se croit tout permis au nom de la vérité qu’il possède. La vérité devrait au contraire mesurer l’homme (le modérer) et être à sa mesure (adaptée à lui) : lui donner le sens des limites entre ce qu’il sait et ce qu’il ignore.",
          "refs": [
            {
              "auteur": "Voltaire",
              "oeuvre": "Traité sur la tolérance, XXIII, « Prière à Dieu »",
              "these": "« Daigne regarder en pitié les erreurs attachées à notre nature ; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger. » Que les petites nuances qui distinguent « les atomes appelés hommes » ne soient pas des signaux de haine."
            }
          ],
          "exemple": "« Que ceux qui allument des cierges en plein midi pour te célébrer supportent ceux qui se contentent de la lumière de ton soleil. » « Puissent tous les hommes se souvenir qu’ils sont frères ! »",
          "defs": [
            {
              "terme": "Fanatisme",
              "def": "Attitude de celui qui se croit tout permis au nom d’une vérité qu’il prétend posséder, et rejette la discussion critique."
            },
            {
              "terme": "Dogmatisme",
              "def": "Prétention à posséder une vérité absolue."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "La solution du scepticisme ?",
          "idee": "Entre la démesure du relativisme et celle du fanatisme, on pourrait s’abstenir : la vérité existe sans doute, mais l’homme n’y a pas accès. Les sceptiques ne nient pas la vérité, ils la cherchent (dimension zététique). Il faut distinguer la vérité comme contenu définissable et comme exigence asymptotique. La vérité contraint l’humanité à rester à sa place et lui rappelle sa finitude.",
          "refs": [
            {
              "auteur": "Montaigne",
              "oeuvre": "Apologie de Raymond Sebond",
              "these": "« La peste de l’homme, c’est l’opinion de savoir » : une sage ignorance, consciente des limites de la connaissance, procure le bonheur. « Nous n’avons aucune communication à l’être, parce que toute humaine nature est toujours au milieu entre le naître et le mourir. » La vérité est en Dieu, inaccessible."
            }
          ],
          "exemple": "Montaigne ne se contredit pas en doutant de l’accès à la vérité tout en disant vrai de l’homme : il cherche sans prétendre s’arrêter.",
          "defs": [
            {
              "terme": "Zététique",
              "def": "Qui relève de la recherche (zêtêsis) : le sceptique cherche sans conclure."
            },
            {
              "terme": "Asymptotique",
              "def": "Dont on se rapproche indéfiniment sans jamais l’atteindre."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Le principe de discussion",
          "idee": "Hors des sciences, il est vain d’espérer un consensus universel imposé. La vérité est objet de discussion, y compris en science (débat avec la nature et avec d’autres théories), pour tout énoncé théorique ou pratique. Aucune norme n’est valable si elle est imposée par la force : sa validité suppose l’avis égal de toutes les personnes concernées. La vérité ne s’impose pas à l’humanité et n’est pas non plus un relativisme sociologique.",
          "refs": [
            {
              "auteur": "Habermas",
              "oeuvre": "Morale et communication",
              "these": "Principe D : « Une norme ne peut prétendre à la validité que si toutes les personnes qui peuvent être concernées sont d’accord (ou pourraient l’être) en tant que participants à une discussion pratique. » Version réduite du principe U d’universalisation : les conséquences de l’observation universelle d’une norme doivent pouvoir être acceptées par tous."
            }
          ],
          "exemple": "La raison n’est pas une faculté individuelle en rapport singulier avec la vérité, mais une confrontation entre égaux, à laquelle peut se référer l’humanité présente et future.",
          "defs": [
            {
              "terme": "Principe D",
              "def": "Principe de discussion de Habermas : validité d’une norme fondée sur l’accord possible de tous les concernés."
            },
            {
              "terme": "Principe U",
              "def": "Principe d’universalisation : les effets de l’observation universelle d’une norme doivent être acceptables par tous."
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "animal-modele",
  "titre": "Peut-on faire de l’animal un modèle pour l’humanité ?",
  "source": "Corrigé du professeur",
  "parties": [
    {
      "num": "I",
      "titre": "On peut faire de l’animal un modèle, car c’est la seule condition pour le rendre intelligible : l’animal est un modèle construit par l’humanité (modèle = représentation intelligible faite pour comprendre)",
      "sous": [
        {
          "num": "§1",
          "titre": "L’animal comme modélisation intelligible faite par l’humanité",
          "idee": "Les animaux accompagnent l’homme depuis toujours, mais la bascule a lieu quand l’animal cesse d’être un moyen pour devenir un modèle dans le discours, un sujet considéré pour lui-même. C’est l’invention de l’histoire naturelle : elle dégage ce qu’il y a de stable derrière les apparences et décrit les caractères propres de chaque animal (taille, mœurs), sans se contenter de la subsomption sous le genre.",
          "refs": [
            {
              "auteur": "Pline l’Ancien",
              "oeuvre": "Histoire naturelle, VIII et XI",
              "these": "Deux tendances : rapporter tout ce qu’on sait de l’animal, et plaire par des anecdotes sans valeur scientifique. Malgré sa faible scientificité, l’histoire naturelle fait pour la première fois de l’animal un sujet du discours, un modèle de référence pour le savoir."
            }
          ],
          "exemple": "Les Romains font combattre des hommes contre des léopards dans les jeux du cirque. Pline traite de l’éléphant au livre VIII et de l’abeille au livre XI, et raconte qu’une panthère aurait épargné l’homme qui l’avait aidée à sauver ses petits.",
          "defs": [
            {
              "terme": "Modèle (1er sens)",
              "def": "Représentation intelligible faite pour comprendre."
            },
            {
              "terme": "Subsomption",
              "def": "Opération qui range un particulier sous un concept général (l’animal sous l’espèce, l’espèce sous le genre)."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "La modélisation scientifique",
          "idee": "La description est un pis-aller : il y a des millions d’espèces. Le dessin et la description donnent à voir sans expliquer. La pensée doit remplacer la présence immédiate de l’animal par une construction qui sélectionne ce qui est pertinent, pour passer des phénomènes à leurs causes : renoncer à l’animal dans sa totalité contingente pour le recomposer sous une forme idéale.",
          "refs": [
            {
              "auteur": "Descartes",
              "oeuvre": "Principes de la philosophie, IV, art. 203",
              "these": "« Je ne reconnais aucune différence entre les machines que font les artisans et les divers corps que la nature seule compose », sinon la taille des tuyaux et des ressorts. L’animal-machine n’est pas une réduction choquante, c’est un modèle mécanique (l’automate) contre l’explication médiévale par l’âme, principe immatériel qui échappe à l’analyse."
            }
          ],
          "exemple": "« Lorsqu’une montre marque les heures par le moyen des roues dont elle est faite, cela ne lui est pas moins naturel qu’il est à un arbre de produire ses fruits. »",
          "defs": [
            {
              "terme": "Animal-machine",
              "def": "Modèle cartésien qui explique les fonctions de l’animal par les lois du mouvement des parties matérielles, comme un automate."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : un modèle théorique ne suffit pas",
          "idee": "Le dessinateur ne peut s’abstraire de sa perspective. La modélisation scientifique l’admet, mais croit épuiser l’animal par une simplification qui n’a de sens que pour la connaissance. Un modèle théorique n’a de sens que par rapport à une expérience possible : le point de vue théorique appelle le point de vue pratique. L’animal peut alors devenir un exemple à suivre, un modèle au sens pratique.",
          "refs": [
            {
              "auteur": "Descartes",
              "oeuvre": "(prolongement)",
              "these": "Penser l’animal comme automate, c’est réduire la vie à des éléments homogènes dans un circuit fermé."
            }
          ],
          "exemple": "Que dirait-on d’un ingénieur qui concevrait des modèles de voiture irréalisables ? Ce serait un gaspillage de temps, d’argent et de ressources intellectuelles.",
          "defs": [
            {
              "terme": "Exemple / modèle",
              "def": "L’exemple illustre une généralité (instanciation) ; le modèle pratique est un exemple à suivre."
            }
          ]
        }
      ]
    },
    {
      "num": "II",
      "titre": "En raison de ce qu’il y a de commun à l’homme et aux animaux, l’ethos animal peut offrir un exemple de conduite dont l’humanité s’inspire pour se régler (modèle = exemple moral à suivre)",
      "sous": [
        {
          "num": "§1",
          "titre": "Biomimétisme et praxis humaine",
          "idee": "Pour expliquer les premières techniques, les hommes ont invoqué les dieux ou l’imitation des animaux, parfois les deux. Le biomimétisme rend cette idée féconde : il dépasse la querelle entre finalité et mécanisme et opère un décentrement par rapport au savant et à l’ingénieur glorifiés. Il n’y a pas de différence de nature entre productions humaines et productions animales : l’animal réalise des possibles sous contraintes systémiques dont l’homme peut s’inspirer.",
          "refs": [
            {
              "auteur": "Nonnos de Panopolis",
              "oeuvre": "Les Dionysiaques",
              "these": "Le jeune Dionysos voit un serpent mordre une grappe de raisin ; il l’imite, presse les grappes et boit le jus : l’animal est modèle pour le dieu et pour l’homme."
            },
            {
              "auteur": "Buffon",
              "oeuvre": "Discours sur la nature des animaux (1753)",
              "these": "Contre ceux qui voient la main de Dieu dans les hexagones des abeilles : cette figure n’est « qu’un résultat mécanique et assez imparfait », qu’on retrouve dans les cristaux."
            }
          ],
          "exemple": "La termitière, modèle d’une construction humaine économe en énergie et parfaitement fonctionnelle.",
          "defs": [
            {
              "terme": "Biomimétisme",
              "def": "Discipline scientifique qui s’inspire des productions du vivant pour concevoir des productions humaines."
            },
            {
              "terme": "Finalisme / mécanisme",
              "def": "Expliquer par des fins / expliquer par des causes mécaniques aveugles."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "L’éthos animal et l’éthique humaine",
          "idee": "L’Occident a fondé sa morale sur l’humanisme gréco-latin et la révélation biblique, qui marginalisent l’animal. Mais une tendance naturaliste et cynique résiste : l’animal, qui n’a pas besoin du superflu, n’est pas esclave des moyens inventés pour être heureux. Celui qui possède une chose est possédé par elle. Diogène est à l’origine d’une vision décentrée de l’humanité qui nourrit les critiques de l’aliénation, du gaspillage et de l’abrutissement par les loisirs.",
          "refs": [
            {
              "auteur": "Diogène de Sinope",
              "oeuvre": "rapporté par Plutarque (Les Cyniques grecs, éd. Paquet)",
              "these": "Pendant les fêtes d’Athènes, Diogène se lamente de sa vie de privations ; il voit une souris se réjouir des miettes de sa galette et se réprimande : « voilà une souris qui se réjouit de tes restes et s’en nourrit : toi, au contraire, l’âme bien née, tu te plains »."
            }
          ],
          "exemple": "Diogène demande à Alexandre le Grand de s’ôter de son soleil : personne n’est plus libre que celui qui n’a rien.",
          "defs": [
            {
              "terme": "Ethos",
              "def": "Manière d’être, de vivre."
            },
            {
              "terme": "Cynisme",
              "def": "École de Diogène, qui prend la vie animale pour modèle contre les conventions et le superflu."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : les dérives de la sociobiologie",
          "idee": "Faire de l’animal le modèle moral, c’est déséquilibrer la polarité au profit de l’animal, comme la sociobiologie. Deux erreurs : la naturalisation de la culture (les œuvres humaines ont une histoire propre, non biologique : on n’explique pas l’histoire des religions par la zone du cerveau active pendant la prière) et le sophisme naturaliste (conclure de ce qui est à ce qui doit être). Faire de l’animal un modèle déterministe, c’est liquider l’humanisme.",
          "refs": [
            {
              "auteur": "Edward O. Wilson",
              "oeuvre": "Sociobiology (1975) ; On Human Nature (1978)",
              "these": "Les comportements sociaux humains et animaux auraient une cause commune, les gènes : altruisme, agressivité, maternage. Faute de gène de la culture détectable, Wilson extrapole à partir des chimpanzés (cueillette, chasse en bandes, partage de la viande), jusqu’au comportement religieux."
            },
            {
              "auteur": "Les anarchistes du XIXe siècle",
              "oeuvre": "",
              "these": "Ils tiraient de Darwin une morale de la coopération contre la guerre de tous contre tous."
            }
          ],
          "exemple": "Si la morale venait des gènes, comment expliquer la pluralité des morales, alors que le patrimoine génétique de l’humanité s’est uniformisé ?",
          "defs": [
            {
              "terme": "Sophisme naturaliste",
              "def": "Conclure de ce qui est à ce qui doit être."
            },
            {
              "terme": "Sociobiologie",
              "def": "Discipline fondée par E. O. Wilson, qui explique les comportements sociaux par la génétique et l’évolution."
            }
          ]
        }
      ]
    },
    {
      "num": "III",
      "titre": "Pour préserver l’altérité animale comme singularité ontologique, il faut une modélisation qui extrait de l’animal ce qu’il a d’excellent : une stylisation (modèle = stylisation faite pour satisfaire le besoin de contemplation)",
      "sous": [
        {
          "num": "§1",
          "titre": "Homo pictor",
          "idee": "On oublie le plaisir que l’homme prend à reproduire l’animal. À côté de l’animal raisonnable et de l’homo faber, l’homme est un homo pictor qui s’entoure d’images, où l’animal domine. L’art pariétal (terme anachronique : l’art n’y est pas séparé du rite ou de la chasse) offre une modélisation pré-artistique : l’animal est stylisé, réduit à sa dynamique essentielle. Ces hommes ont « inventé » les animaux en les faisant entrer dans le monde des représentations.",
          "refs": [
            {
              "auteur": "Hans Jonas",
              "oeuvre": "« Homo pictor et la différence de l’homme » (1961)",
              "these": "L’homme est un fabricateur d’images."
            },
            {
              "auteur": "Pline l’Ancien",
              "oeuvre": "Histoire naturelle",
              "these": "La légende de la fille de Dibutade, qui trace sur un mur le profil de son amant parti à la guerre, origine de la peinture : démentie par l’art pariétal, où dominent les animaux."
            }
          ],
          "exemple": "Lascaux : effet de profondeur par les couleurs sombres au premier plan, contours surlignés, cornes et crinières soulignées. Le sens nous échappe, la stylisation nous parle encore.",
          "defs": [
            {
              "terme": "Homo pictor",
              "def": "L’homme fabricateur d’images (Hans Jonas)."
            },
            {
              "terme": "Mimesis",
              "def": "Imitation, représentation."
            },
            {
              "terme": "Cynégétique",
              "def": "Qui concerne la chasse."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "L’animal comme œuvre, ou la présence de l’animal",
          "idee": "Dans l’œuvre d’art, l’animal est un modèle (sujet de l’œuvre) sans être assujetti au logos. L’intérêt esthétique est incommensurable avec l’intérêt cognitif (catégories de la science) et l’intérêt pratique (l’utile) : pour la première fois l’animal sort de la taxonomie et apparaît dans sa vérité antéprédicative. Sa beauté ne tient pas à la conformité avec l’idée d’oiseau, mais à la rupture avec la perception.",
          "refs": [
            {
              "auteur": "Brancusi",
              "oeuvre": "L’Oiseau dans l’espace",
              "these": "La stylisation supprime tout détail réaliste : un bloc fuselé sans tête ni bec, qui s’élance vers le ciel ; l’aérodynamisme abolit la matérialité du corps."
            },
            {
              "auteur": "Messiaen",
              "oeuvre": "Réveil des oiseaux (1953)",
              "these": "Retranscrire la musicalité du chant des oiseaux."
            }
          ],
          "exemple": "L’oiseau de Brancusi produit une intensité émotionnelle impersonnelle : il n’y a pas de rapport affectif subjectif avec une forme pure.",
          "defs": [
            {
              "terme": "Antéprédicatif",
              "def": "Antérieur à tout jugement, à toute attribution de prédicats."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "L’intégration de l’animal au monde de l’humanité",
          "idee": "Modéliser l’animal, c’est lier les fonctions supérieures du cerveau à la prise en compte d’êtres différents de nous. La sublimation de l’animal en image fait contrepoids à la brutalité qui l’a réduit à une chose et rend plus difficile son exploitation intensive. L’imaginaire (hybridations, Tarzan) prépare de nouveaux rapports avec des animaux qui ne nous ressemblent pas.",
          "refs": [
            {
              "auteur": "Auguste Comte",
              "oeuvre": "Système de politique positive",
              "these": "La « biocratie » : les animaux, longtemps tenus pour « auxiliaires indispensables » et « ministres inférieurs de l’humanité », doivent être reconnus pour leur aide. Comte imaginait une fête du chien, du cheval et du bœuf pour services rendus."
            }
          ],
          "exemple": "Les associations contre la souffrance animale utilisent la force de l’image dans les abattoirs ; l’histoire récente a décoré des chiens, des chevaux et des oiseaux.",
          "defs": [
            {
              "terme": "Biocratie (Comte)",
              "def": "Intégration des animaux utiles à la société humaine, reconnus pour leurs services."
            },
            {
              "terme": "Chimère",
              "def": "Être hybride, aujourd’hui aussi combinaison génétique réalisée par la science."
            }
          ]
        }
      ]
    }
  ]
},
{
  "id": "animal-plus-ou-moins-homme",
  "titre": "Tout animal est plus ou moins homme",
  "attribution": "Diderot",
  "source": "Corrigé du professeur",
  "parties": [
    {
      "num": "I",
      "titre": "Il n’y a qu’une différence de degré entre l’homme et l’animal : l’humanité n’est pas absolument séparée de l’animalité",
      "sous": [
        {
          "num": "§1",
          "titre": "L’âme et ses fonctions",
          "idee": "L’homme est un vivant comme les autres et se singularise pourtant par des aptitudes propres. Il partage avec l’animal la nutrition, qui rappelle la finitude des êtres animés. L’âme est l’accomplissement premier d’un corps ayant la vie en puissance ; ses fonctions se répartissent entre les vivants : la plante se nourrit, l’animal sent en plus, l’homme pense en plus. Il y a une série continue de la plante à l’homme : l’animal est « plus ou moins homme ».",
          "refs": [
            {
              "auteur": "Aristote",
              "oeuvre": "De l’âme",
              "these": "« L’âme est principe des manifestations […] et elle se définit par les fonctions nutritive, sensitive, cogitative et par le mouvement. » L’âme humaine contient toutes ces fonctions comme un tout, non comme un agrégat. Aristote reconnaît à l’animal mémoire et prudence : la différence graduelle est fondée dans la nature."
            },
            {
              "auteur": "Hésiode",
              "oeuvre": "Théogonie",
              "these": "Prométhée partage le bœuf sacrifié : la chair aux hommes, les os couverts de graisse aux dieux. Les hommes doivent se nourrir régulièrement, ce qui leur rappelle leur finitude."
            }
          ],
          "exemple": "L’animal capitalise l’expérience et tient compte du passé pour se conduire à l’avenir, sans posséder la faculté cogitative.",
          "defs": [
            {
              "terme": "Âme (Aristote)",
              "def": "Forme du corps vivant, accomplissement premier d’un corps ayant la vie en puissance."
            },
            {
              "terme": "Fonctions nutritive, sensitive, cogitative",
              "def": "Se nourrir et croître (plante) ; sentir (animal) ; penser grâce au logos (homme)."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "La relation de correspondance entre l’animal et l’homme",
          "idee": "La continuité suppose qu’entre deux termes on peut toujours trouver des intermédiaires, même entre des termes en apparence sans rapport. C’est le principe de la physiognomonie : deviner une disposition intérieure, morale, à partir de signes extérieurs, surtout le visage, en vertu du rapport de l’âme et du corps.",
          "refs": [
            {
              "auteur": "Lavater",
              "oeuvre": "L’Art de connaître les hommes par la physionomie",
              "these": "Une correspondance entre le caractère humain, son expression faciale et crânienne, et des formes animales en série parallèle. On peut y voir une sorte de pré-humanité de l’aigle."
            }
          ],
          "exemple": "Une gravure rapproche l’aigle et l’homme au nez aquilin : le bec tranchant correspond à la fierté et à la noblesse. On pourrait raisonner de même avec les bestiaires du Moyen Âge.",
          "defs": [
            {
              "terme": "Physiognomonie",
              "def": "Art de deviner le caractère d’après les traits du visage et du corps."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : une hiérarchie projetée sur la nature",
          "idee": "Chercher des correspondances répond à un besoin pratique (la chasse, éviter un danger), qui n’est pas commensurable avec le rapport théorique. La continuité biologique a été confondue avec une continuité hiérarchique, calquée sur le monde social : tous les animaux tendraient vers l’homme comme des sujets vers leur roi. La continuité doit être horizontale (le temps, la structure), non verticale.",
          "refs": [
            {
              "auteur": "Voltaire",
              "oeuvre": "Dictionnaire philosophique, « Chaîne des êtres »",
              "these": "Cette hiérarchie « plaît beaucoup aux bonnes gens, qui croient voir le pape et ses cardinaux suivis des archevêques, des évêques […] et la marche est fermée par les capucins ». Elle n’existe pas : des espèces ont disparu. « Nous n’avons plus de murex […] où donc est la chaîne ? »"
            }
          ],
          "exemple": "Le lapin et le renard ont un rapport (l’un mange l’autre) ; on voit mal le rapport entre le pélican et la musaraigne.",
          "defs": [
            {
              "terme": "Chaîne des êtres",
              "def": "Représentation d’une gradation continue de la matière brute jusqu’à Dieu, en passant par l’homme."
            }
          ]
        }
      ]
    },
    {
      "num": "II",
      "titre": "Deux exigences paraissent inconciliables : reconnaître la différence (sinon on confond ce qui est séparé) et la continuité (car rien ne vient de rien) entre l’humanité et l’animalité",
      "sous": [
        {
          "num": "§1",
          "titre": "La fausse analogie entre l’animal et l’homme",
          "idee": "Faire de l’animal une anticipation de l’homme est un raisonnement préscientifique fondé sur de vagues ressemblances. On disséquait des animaux et l’on concluait aux hommes. Chaque animal est parfait : il a tout ce qu’il faut pour vivre. La prise en compte de l’organisation de l’animal interdit la comparaison hiérarchique avec l’homme et évite les jugements de valeur.",
          "refs": [
            {
              "auteur": "Cuvier",
              "oeuvre": "Recherches sur les ossements fossiles",
              "these": "Les mammifères « plus que parfaits » : chaque animal est parfait en tant qu’il vit. Principe de corrélation des formes : à partir d’une partie d’un squelette, on peut déduire les parties manquantes, car tout animal qui a vécu était viable. Cuvier nie l’échelle des êtres."
            }
          ],
          "exemple": "Le chien a un meilleur odorat que l’homme, mais l’homme n’est pas un chien à l’odorat diminué. Les médicaments testés sur des animaux au métabolisme proche doivent toujours être expérimentés sur l’homme.",
          "defs": [
            {
              "terme": "Corrélation des formes",
              "def": "Principe de Cuvier : les parties d’un organisme sont solidaires, si bien qu’une partie permet de reconstituer le tout."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "Le devenir de l’animal et de l’homme",
          "idee": "L’échelle des êtres ignore le temps. L’étude horizontale montre comment chaque être devient ce qu’il est à partir d’autres. Diderot préfigure le transformisme. « L’homme descend du singe » est faux : les espèces divergent selon un modèle arborescent. Le raisonnement s’inverse : si des qualités humaines existent chez l’animal avant l’homme, c’est que l’humain est en fait animal. C’est l’homme qui est plus ou moins animal.",
          "refs": [
            {
              "auteur": "Diderot",
              "oeuvre": "Le Rêve de d’Alembert",
              "these": "« Tout animal est plus ou moins homme » : préfiguration du transformisme et de l’évolutionnisme."
            },
            {
              "auteur": "Darwin",
              "oeuvre": "La Descendance de l’homme",
              "these": "Application de l’évolution à l’homme, au scandale de ses contemporains. Darwin insiste sur les facultés mentales et le sens moral des animaux pour combler le fossé : l’évolution mentale humaine n’est que leur développement."
            },
            {
              "auteur": "Lamarck",
              "oeuvre": "Philosophie zoologique",
              "these": "Le premier, il affirme que l’homme a évolué à partir d’un ancêtre proche des grands singes ; le transformisme explique le devenir par le besoin."
            }
          ],
          "exemple": "La formule fausse « l’homme descend du singe » : l’homme a évolué sur une branche autonome pendant des millions d’années, non à partir d’un singe actuel.",
          "defs": [
            {
              "terme": "Transformisme / évolutionnisme",
              "def": "Deux théories du devenir des espèces : par le besoin (Lamarck) ou par la sélection naturelle des variations fortuites (Darwin)."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Problème : de l’animalité de l’homme à l’humanité potentielle de l’animal",
          "idee": "Si Darwin a raison, il faut inverser la formule de Diderot. Mais on ne doit pas affirmer dogmatiquement que l’homme n’est qu’un animal évolué. Le cerveau triunique reproduit en fait la hiérarchie que la science combat. Si la différence n’est que graduelle, il faut prendre au sérieux l’humanité potentielle de l’animal : la résolution de problèmes est répandue chez les formes de vie les plus variées.",
          "refs": [
            {
              "auteur": "MacLean",
              "oeuvre": "Le cerveau triunique (années 1960)",
              "these": "Trois couches : le cerveau reptilien (pulsions, sexualité, agression), le système limbique (émotions), le cortex (cognition). Théorie aujourd’hui dépassée par la connaissance de l’architecture neuronale."
            },
            {
              "auteur": "Popper",
              "oeuvre": "La Connaissance objective",
              "these": "« De l’amibe à Einstein, il n’y a qu’un pas. Mais les actions de l’amibe ne sont pas rationnelles, alors qu’on peut supposer que celles d’Einstein le sont. Il doit donc bien y avoir quelque différence, au bout du compte. »"
            }
          ],
          "exemple": "La représentation du cerveau reptilien « en bas » et du cortex « en haut » est aussi indigente que celle de la tête noble opposée au ventre ignoble : les deux travaillent de concert.",
          "defs": []
        }
      ]
    },
    {
      "num": "III",
      "titre": "Reconnaître l’humanité potentielle de l’animal pose la question du seuil entre l’animal et l’homme, et remet en cause l’idée d’un homme émancipé de son animalité comme son rapport utilitaire aux animaux",
      "sous": [
        {
          "num": "§1",
          "titre": "Le totémisme",
          "idee": "La biologie détruit l’idée d’une créature spéciale et rappelle la parenté de l’homme avec tous les vivants. Cette parenté avait déjà été pensée par les représentations les plus anciennes. Le totémisme n’a rien d’extraordinaire : c’est le propre de la pensée humaine d’établir une correspondance entre différences sociales et différences naturelles, pour rendre intelligibles la nature et la société.",
          "refs": [
            {
              "auteur": "Lévi-Strauss",
              "oeuvre": "Le Totémisme aujourd’hui",
              "these": "On a tort de voir dans le totémisme le propre de la pensée primitive : toute pensée humaine instaure des coupures entre monde animal et monde humain et les fait se signifier réciproquement. La correspondance est approximative, symbolique, sans rapport avec la ressemblance physique."
            }
          ],
          "exemple": "Chez les Nuer, les jumeaux sont des oiseaux : comme hommes ce sont des « personnes d’en haut », comme les oiseaux célestes ; comme oiseaux, ce sont des « oiseaux d’en bas », parmi les humains.",
          "defs": [
            {
              "terme": "Totémisme",
              "def": "Système qui associe des groupes humains à des espèces animales ou végétales."
            }
          ]
        },
        {
          "num": "§2",
          "titre": "La dérangeante proximité avec le singe",
          "idee": "Les singes anthropomorphes posent la question du seuil : sont-ils des hommes dégénérés ou des singes en voie d’humanisation ? Le seuil est aussi difficile à penser que l’origine, faute de traces ; il est antérieur à l’opposition entre différence de nature et différence de degré. L’effet de seuil déjoue la logique où le quantitatif produit le qualitatif : l’humanité a une précondition animale sans se réduire à l’augmentation du cerveau.",
          "refs": [
            {
              "auteur": "Itard",
              "oeuvre": "Mémoires sur Victor de l’Aveyron (vers 1800)",
              "these": "On croyait que l’enfant sauvage confirmerait l’anthropologie des Lumières (le passage progressif de l’animalité à l’humanité) ; il n’a pu que répéter quelques mots et réagir à des signaux, faute d’apprentissage à temps."
            }
          ],
          "exemple": "L’image du quadrupède qui se redresse, comme celle du poisson qui sort de l’eau : des représentations pédagogiques qui simplifient un processus de millions d’années. L’eau, elle, bout par simple augmentation de température.",
          "defs": [
            {
              "terme": "Différence de nature",
              "def": "Hétérogénéité, manifestée par la stérilité des accouplements entre espèces."
            },
            {
              "terme": "Différence de degré",
              "def": "Continuité d’une multiplicité qu’on peut aligner en série."
            },
            {
              "terme": "Singes anthropomorphes",
              "def": "Hominoïdes : gibbons, orangs-outans, gorilles, chimpanzés."
            }
          ]
        },
        {
          "num": "§3",
          "titre": "Humanisation de l’animal ou surhumanité de l’homme ?",
          "idee": "En produisant un technocosme, l’homme semble renoncer à son animalité : un « suranimal » qui a refoulé son passé animal. Mais les biotechnologies l’objectivent comme il a objectivé les animaux (capital biologique à optimiser, chimères). En même temps, les idéologies animalistes affirment l’identité des formes de vie et font de l’animal un sujet de droit. Paradoxe : plus l’homme veut dépasser son animalité, plus il humanise l’animal.",
          "refs": [
            {
              "auteur": "Nietzsche",
              "oeuvre": "Fragments posthumes",
              "these": "L’homme comme « suranimal », qui par la culture a rompu avec ses origines et refoulé ce qui le relie aux animaux."
            }
          ],
          "exemple": "L’animal humain en puissance est-il subordonné à l’humanité en acte, ou déjà présence implicite de l’humanité ? De cette nuance dépendent l’expérimentation animale et l’usage des animaux dans la nutrition, le divertissement et l’industrie.",
          "defs": [
            {
              "terme": "Technocosme",
              "def": "Milieu artificiel produit par la technique, qui remplace l’environnement naturel."
            },
            {
              "terme": "Cellules totipotentes",
              "def": "Cellules capables de produire tous les types cellulaires d’un organisme."
            }
          ]
        }
      ]
    }
  ]
}
];

/* ===================== THÈSES TIRÉES DES COLLES =====================
   Chaque entrée est ajoutée à la fiche de l'auteur « aid » au chargement
   (l'auteur est créé s'il n'existe pas : nom, dates, courant, intro).
   col : "<id du sujet>/<index partie>/<index sous-partie>" (à partir de 0).
   ==================================================================== */
const THESES_COLLES = [
  {
    "aid": "marx",
    "nom": "Marx",
    "dates": "1818 – 1883",
    "courant": "Matérialisme historique",
    "intro": "La religion, « conscience renversée » d’un monde renversé.",
    "t": "La religion, conscience renversée du monde",
    "col": "homme-fait-religion/1/1",
    "o": "Contribution à la critique de la philosophie du droit de Hegel",
    "c": "L’homme, c’est le monde de l’homme, l’État, la société.",
    "x": "La religion est une idéologie qui reflète l’aliénation réelle, économique : elle fait de la superstructure la cause de l’infrastructure. L’homme ne se fait lui-même qu’en défaisant la religion, en refusant de projeter dans l’au-delà les conditions d’une vie heureuse.",
    "n": [
      "religion",
      "aliénation",
      "idéologie",
      "société"
    ]
  },
  {
    "aid": "holbach",
    "nom": "d’Holbach",
    "dates": "1723 – 1789",
    "courant": "Matérialisme des Lumières",
    "intro": "La superstition, fille de l’ignorance.",
    "t": "Les dieux, « des hommes exagérés »",
    "col": "homme-fait-religion/1/0",
    "o": "La Contagion sacrée",
    "x": "Faute de connaître les forces de la nature, l’homme la soumet à des puissances invisibles qu’il se représente comme des hommes exagérés. Double aliénation : se croire dépendant des dieux, et les penser à son image.",
    "n": [
      "religion",
      "superstition",
      "ignorance",
      "anthropomorphisme"
    ]
  },
  {
    "aid": "tocqueville",
    "nom": "Tocqueville",
    "dates": "1805 – 1859",
    "courant": "Libéralisme",
    "intro": "La religion, force des peuples démocratiques.",
    "t": "La religion corrige les faiblesses de la démocratie",
    "col": "homme-fait-religion/2/1",
    "o": "De la démocratie en Amérique",
    "c": "Les peuples religieux sont donc naturellement forts précisément à l’endroit où les peuples démocratiques sont faibles.",
    "x": "La religion fixe les idées qui règlent la conduite, élève l’âme au-dessus des biens terrestres et impose des devoirs envers l’espèce humaine. Elle développe le sentiment de l’égalité devant Dieu et l’universalisme : une universalité intersubjective que la science ne remplace pas.",
    "n": [
      "religion",
      "démocratie",
      "égalité",
      "universel",
      "société"
    ]
  },
  {
    "aid": "freud",
    "t": "La religion répond au besoin de sécurité de l’humanité",
    "col": "homme-fait-religion/2/0",
    "o": "L’Avenir d’une illusion",
    "c": "Illusions, accomplissement des souhaits les plus anciens, les plus forts et les plus puissants de l’humanité.",
    "x": "La religion a une origine purement humaine (le complexe paternel), mais elle a fait l’homme : elle l’a sécurisé dans un univers hostile et a donné force aux interdits moraux en les présentant comme divins. Freud attend pourtant de la science qu’elle la remplace.",
    "n": [
      "religion",
      "illusion",
      "science",
      "détresse",
      "morale"
    ]
  },
  {
    "aid": "durkheim",
    "t": "Définition de la religion",
    "col": "homme-fait-religion/0/0",
    "o": "Les Formes élémentaires de la vie religieuse",
    "c": "Un système solidaire de croyances et de pratiques relatives à des choses sacrées, c’est-à-dire séparées, interdites.",
    "x": "Croyances et pratiques qui unissent en une même communauté morale, appelée Église, tous ceux qui y adhèrent : la religion est une institution, un fait social.",
    "n": [
      "religion",
      "sacré",
      "société",
      "institution"
    ]
  },
  {
    "aid": "hugo",
    "nom": "Victor Hugo",
    "dates": "1802 – 1885",
    "courant": "Romantisme",
    "intro": "Une humanité sans frontières, une religion sans livre.",
    "t": "« Religion sans livre »",
    "col": "homme-fait-religion/2/2",
    "o": "Lettre à Lamartine, 24 juin 1862",
    "c": "Société sans roi, humanité sans frontières, religion sans livre.",
    "x": "Une religion qui admet l’enfer, une humanité qui admet la guerre sont inférieures. Hugo veut une religion sans institution, qui prenne en charge les aspirations de l’humanité : « je veux détruire la fatalité humaine ». Le cours cite aussi La Légende des siècles comme vision du développement de l’humanité.",
    "n": [
      "religion",
      "humanité",
      "progrès",
      "cosmopolitisme"
    ]
  },
  {
    "aid": "aristote",
    "t": "« Soit une bête soit un dieu » : l’homme hors de la cité",
    "col": "homme-sociable/0/0",
    "o": "Politiques, I, 2",
    "c": "L’homme est un animal politique plus que n’importe quelle abeille et que n’importe quel animal grégaire.",
    "x": "Seul l’homme a le langage, qui manifeste le juste et l’injuste ; la voix animale ne signifie que plaisir et douleur. La cité est antérieure à l’individu comme le tout à la partie : celui qui n’en a pas besoin est une bête ou un dieu.",
    "n": [
      "politique",
      "langage",
      "animal",
      "société",
      "cité"
    ]
  },
  {
    "aid": "maeterlinck",
    "nom": "Maeterlinck",
    "dates": "1862 – 1949",
    "courant": "Symbolisme",
    "intro": "La ruche, société où l’individu n’est rien.",
    "t": "Dans la ruche, l’individu n’est rien",
    "col": "homme-sociable/1/0",
    "o": "La Vie des abeilles",
    "c": "Il n’est qu’un moment indifférent, un organe ailé de l’espèce.",
    "x": "L’abeille isolée meurt en quelques jours : sa vie est un sacrifice total à l’espèce. À l’inverse, l’homme a le sentiment de son indépendance et n’est pas un rouage, d’où les conflits internes aux sociétés humaines.",
    "n": [
      "animal",
      "société",
      "individu",
      "espèce"
    ]
  },
  {
    "aid": "rousseau",
    "t": "L’homme n’est pas naturellement sociable",
    "col": "homme-sociable/1/1",
    "o": "Discours sur l’origine de l’inégalité",
    "x": "À l’état de nature, rien ne pousse l’homme vers ses semblables. Son devenir social est une décadence liée à la perfectibilité. Hobbes a confondu l’homme des origines et l’homme socialisé : rivalité, méfiance et fierté ne sont pas innées. Mais la pitié, voix de la nature, reste le germe d’une sociabilité.",
    "n": [
      "société",
      "nature",
      "pitié",
      "perfectibilité",
      "état de nature"
    ]
  },
  {
    "aid": "kant",
    "t": "L’insociable sociabilité dans les colles",
    "k": "colle",
    "col": "homme-sociable/2/0",
    "o": "Idée d’une histoire universelle, 4e proposition",
    "x": "« L’homme est sociable, les hommes ne le sont pas » : l’homme doit être sociable, et c’est dans la socialisation même que naît l’opposition aux autres. L’écart entre l’être et le devoir-être ne se réduit pas ; il est fécond.",
    "n": [
      "société",
      "conflit",
      "devoir",
      "progrès"
    ]
  },
  {
    "aid": "ionesco",
    "nom": "Ionesco",
    "dates": "1909 – 1994",
    "courant": "Théâtre de l’absurde",
    "intro": "La perte d’humanité dans la masse.",
    "t": "Rhinocéros : le dernier homme",
    "col": "homme-sociable/2/1",
    "o": "Rhinocéros",
    "c": "Je suis le dernier homme, je le resterai jusqu’au bout ! Je ne capitule pas !",
    "x": "Les hommes deviennent des rhinocéros, brutes uniformes qui ne savent que charger : en perdant leur singularité ils perdent leur humanité et leur sociabilité. La tension entre sociabilité et insociabilité protège la personnalité.",
    "n": [
      "identité",
      "masse",
      "totalitarisme",
      "individu",
      "animal"
    ]
  },
  {
    "aid": "wolff",
    "nom": "Francis Wolff",
    "dates": "né en 1950",
    "courant": "Philosophie contemporaine",
    "intro": "L’homme, animal à raison dialogique.",
    "t": "La raison dialogique",
    "col": "homme-sociable/2/2",
    "o": "Plaidoyer pour l’universel",
    "x": "L’homme se distingue par une conscience et un esprit inséparables du langage : il raisonne dialogiquement, là où la machine calcule. Il peut suspendre ses appartenances pour intégrer tout autre dans une relation de réciprocité : l’humanité est un horizon universel.",
    "n": [
      "langage",
      "universel",
      "autrui",
      "raison",
      "machine"
    ]
  },
  {
    "aid": "defoe",
    "nom": "Defoe",
    "dates": "1660 – 1731",
    "courant": "Roman anglais",
    "intro": "Robinson éduque Vendredi.",
    "t": "Robinson et Vendredi",
    "col": "homme-sociable/0/1",
    "o": "Robinson Crusoé",
    "x": "L’éducation de Vendredi (propreté, décence, renoncement à l’anthropophagie) montre le passage de l’insociabilité à une sociabilité médiatisée par la culture : l’humanité est une essence qui se réalise par des médiations.",
    "n": [
      "éducation",
      "culture",
      "société",
      "sauvagerie"
    ]
  },
  {
    "aid": "pic",
    "nom": "Pic de la Mirandole",
    "dates": "1463 – 1494",
    "courant": "Humanisme de la Renaissance",
    "intro": "L’homme sans nature fixe, sculpteur de lui-même.",
    "t": "L’homme achève librement sa propre forme",
    "col": "animal-perdu-nature/1/1",
    "o": "De la dignité de l’homme (1486)",
    "c": "Je ne t’ai donné ni place déterminée, ni visage propre, ni don particulier, ô Adam.",
    "x": "Dieu place l’homme au milieu du monde sans nature propre, afin que, souverain de lui-même, il se définisse à la façon d’un peintre ou d’un sculpteur. Il peut dégénérer vers les bêtes ou se régénérer vers le divin. Le thème prométhéen de l’homme nu rejoint celui de l’imago Dei.",
    "n": [
      "nature humaine",
      "liberté",
      "dignité",
      "animal",
      "Dieu"
    ]
  },
  {
    "aid": "darwin",
    "nom": "Darwin",
    "dates": "1809 – 1882",
    "courant": "Évolutionnisme",
    "intro": "L’homme dans la continuité du vivant.",
    "t": "L’homme réoriente la sélection naturelle",
    "col": "animal-perdu-nature/2/0",
    "o": "La Descendance de l’homme",
    "x": "Sans hypothèse transcendante, l’homme est un être naturel ; mais en société il protège les faibles au lieu de les éliminer. L’évolution rend possibles des comportements qui expriment l’humanité. Contre la caricature de la « loi de la jungle ».",
    "n": [
      "évolution",
      "nature",
      "animal",
      "solidarité",
      "science"
    ]
  },
  {
    "aid": "beauvoir",
    "nom": "Simone de Beauvoir",
    "dates": "1908 – 1986",
    "courant": "Existentialisme",
    "intro": "Contre le mythe de l’éternel féminin.",
    "t": "Il n’y a pas d’« éternel féminin »",
    "col": "animal-perdu-nature/2/1",
    "o": "Le Deuxième Sexe",
    "x": "Les différences physiologiques entre homme et femme sont réelles, mais n’autorisent pas à parler de natures masculine et féminine : la place de chacun dépend de l’éducation, des rapports sociaux et de l’idéologie. On naturalise souvent un rapport de forces.",
    "n": [
      "femme",
      "nature humaine",
      "liberté",
      "éducation"
    ]
  },
  {
    "aid": "sartre",
    "nom": "Sartre",
    "dates": "1905 – 1980",
    "courant": "Existentialisme",
    "intro": "La liberté comme négation du donné.",
    "t": "La liberté contre la nature (et ses limites)",
    "col": "animal-perdu-nature/1/2",
    "o": "Les Mouches",
    "x": "Oreste tue sa mère pour montrer que rien n’est joué d’avance : la liberté échappe à toute nature. Objection du corrigé : nier toute nature, c’est le raisonnement de celui qui nie l’homme ; Sartre présuppose qu’il est naturel de respecter la liberté d’autrui.",
    "n": [
      "liberté",
      "nature humaine",
      "humanisme"
    ]
  },
  {
    "aid": "cassirer",
    "t": "Sans le symbolisme, la vie serait celle de la caverne",
    "col": "animal-perdu-nature/1/1",
    "o": "Essai sur l’homme",
    "x": "Sans symbolisme, la vie humaine serait limitée aux besoins biologiques ; religion, art, philosophie et science ouvrent un « monde idéal ». L’homme transforme la nature en se la représentant et modifie sa propre nature en l’extériorisant.",
    "n": [
      "symbole",
      "culture",
      "nature humaine"
    ]
  },
  {
    "aid": "lynch",
    "nom": "David Lynch",
    "dates": "1946 – 2025",
    "courant": "Cinéma",
    "intro": "Elephant Man : qui sont les vrais monstres ?",
    "t": "Elephant Man : la parole rend l’humanité",
    "col": "animal-perdu-nature/0/1",
    "o": "The Elephant Man (1980)",
    "x": "Joseph Merrick, exhibé comme monstre de foire, réintègre son humanité par la parole. Le public, qui le regarde avec dégoût plutôt qu’avec pitié, perd sa propre humanité : les vrais monstres ne sont pas ceux que l’on croit.",
    "n": [
      "monstre",
      "langage",
      "pitié",
      "reconnaissance"
    ]
  },
  {
    "aid": "de-maistre",
    "t": "« Quant à l’homme, je déclare ne l’avoir rencontré de ma vie »",
    "col": "animal-perdu-nature/0/2",
    "o": "Considérations sur la France",
    "x": "Sarcasme contre une définition trop générale de l’homme : élargir la nature humaine à toutes les différences la rend abstraite.",
    "n": [
      "universel",
      "nature humaine"
    ]
  },
  {
    "aid": "montaigne",
    "t": "« Nature est un doux guide » : suivre la nature",
    "col": "nature-guide/0/1",
    "o": "Essais, III, 13, « De l’expérience »",
    "c": "Je quête partout sa piste, nous l’avons confondue de traces artificielles.",
    "x": "Reprenant le « vivre selon la nature » des Anciens, Montaigne refuse la surhumanité stoïcienne : la nature n’est pas corrompue par le péché et guide vers la jouissance d’une vie charnelle et finie.",
    "n": [
      "nature",
      "condition humaine",
      "corps",
      "bonheur"
    ]
  },
  {
    "aid": "pascal",
    "t": "« La coutume est une seconde nature »",
    "col": "nature-guide/0/2",
    "o": "Pensées",
    "c": "J’ai grand peur que cette nature ne soit elle-même qu’une première coutume, comme la coutume est une seconde nature.",
    "x": "La frontière entre coutume et nature est indécidable, ce qui rend vain le projet de vivre selon la nature.",
    "n": [
      "coutume",
      "nature",
      "habitude"
    ]
  },
  {
    "aid": "sextus",
    "nom": "Sextus Empiricus",
    "dates": "IIe – IIIe s.",
    "courant": "Scepticisme",
    "intro": "Opposer les coutumes entre elles.",
    "t": "Coutume contre coutume, loi contre loi",
    "col": "nature-guide/0/2",
    "o": "Hypotyposes pyrrhoniennes",
    "x": "Puisqu’on trouve partout des coutumes et des lois opposées, il est arbitraire d’en déclarer une naturelle : toute universalisation d’une coutume est une fiction.",
    "n": [
      "coutume",
      "relativisme",
      "loi",
      "scepticisme"
    ]
  },
  {
    "aid": "descartes",
    "nom": "Descartes",
    "dates": "1596 – 1650",
    "courant": "Rationalisme",
    "intro": "La nature réduite à la matière ; « comme maîtres et possesseurs ».",
    "t": "La nature n’est pas une déesse : elle est matière",
    "col": "nature-guide/1/0",
    "o": "Le Monde, VII",
    "x": "Réduite à l’étendue, la nature ne dit plus à l’homme le sens de sa conduite : c’est la raison qui découvre la vérité. Et « comme maîtres et possesseurs de la nature » (Discours, VI) tempère la puissance de l’homme : Dieu reste créateur.",
    "n": [
      "nature",
      "science",
      "technique",
      "raison"
    ]
  },
  {
    "aid": "bacon",
    "nom": "Francis Bacon",
    "dates": "1561 – 1626",
    "courant": "Empirisme",
    "intro": "L’utopie scientifique de Bensalem.",
    "t": "La Nouvelle Atlantide",
    "col": "nature-guide/1/1",
    "o": "La Nouvelle Atlantide",
    "x": "Une communauté savante réalise les rêves de l’humanité (voler, aller sous l’eau) grâce aux secrets arrachés à la nature par l’expérimentation : la technique fait faire à la nature ce qu’elle ne ferait pas.",
    "n": [
      "technique",
      "science",
      "nature",
      "progrès"
    ]
  },
  {
    "aid": "comte",
    "nom": "Auguste Comte",
    "dates": "1798 – 1857",
    "courant": "Positivisme",
    "majeur": true,
    "intro": "Auteur incontournable du thème : les lois de développement de l’humanité. Pas encore traité en cours.",
    "t": "Incorporer le fétichisme au positivisme",
    "col": "nature-guide/2/1",
    "o": "Synthèse subjective ; Discours sur l’esprit positif",
    "x": "La science dépeuple la nature de toute intention (état positif), mais doit rejoindre son commencement : se représenter la nature comme si elle encourageait l’humanité. Trinité : le Grand-Être (l’Humanité), le Grand-Fétiche (la Terre), le Grand-Milieu (l’Espace).",
    "n": [
      "humanité",
      "nature",
      "religion",
      "science",
      "écologie"
    ]
  },
  {
    "aid": "brecht",
    "nom": "Brecht",
    "dates": "1898 – 1956",
    "courant": "Théâtre",
    "intro": "Galilée et la science nouvelle.",
    "t": "Le télescope de Galilée",
    "col": "nature-guide/1/0",
    "o": "La Vie de Galilée",
    "x": "Braquer le télescope sur le ciel, c’est rejeter l’autorité d’Aristote pour aller aux choses mêmes par le langage mathématique : l’humanité s’affranchit d’une nature-guide.",
    "n": [
      "science",
      "nature",
      "autorité"
    ]
  },
  {
    "aid": "rousseau",
    "t": "Le précepteur d’Émile naturalise son artifice",
    "col": "nature-guide/2/2",
    "o": "Émile",
    "x": "En principe la nature éduque Émile ; en fait le précepteur coopère avec elle en se rendant invisible et en mettant en scène ce qui n’est pas naturel.",
    "n": [
      "éducation",
      "nature",
      "artifice"
    ]
  },
  {
    "aid": "protagoras",
    "nom": "Protagoras",
    "dates": "v. 490 – 420 av. J.-C.",
    "courant": "Sophistique",
    "intro": "L’homme, mesure de toutes choses.",
    "t": "L’homme est la mesure de toutes choses",
    "col": "verite-mesure/1/2",
    "o": "La Vérité, ou Discours destructifs",
    "c": "L’homme est la mesure de toutes choses, de celles qui existent et de leur nature ; de celles qui ne sont pas et de l’explication de leur non-existence.",
    "x": "Lue comme relativisme, la thèse s’autodétruit ; lue à la lettre, elle donne au logos une toute-puissance sur l’être. Selon le corrigé, ce qui la rend critiquable est moins son relativisme que sa démesure.",
    "n": [
      "vérité",
      "relativisme",
      "langage",
      "mesure"
    ]
  },
  {
    "aid": "bachelard",
    "nom": "Bachelard",
    "dates": "1884 – 1962",
    "courant": "Épistémologie",
    "intro": "La science invente ses mesures.",
    "t": "La phénoménotechnique",
    "col": "verite-mesure/1/0",
    "o": "L’Activité rationaliste de la physique contemporaine",
    "x": "La science moderne ne trouve pas ses mesures dans la nature : elle les invente par des appareils qui réalisent des théories (ex. l’interférométrie atomique). La vérité résulte de l’accord entre pensée et être, avec l’intervention active du sujet.",
    "n": [
      "vérité",
      "science",
      "technique",
      "mesure"
    ]
  },
  {
    "aid": "habermas",
    "nom": "Habermas",
    "dates": "né en 1929",
    "courant": "École de Francfort",
    "intro": "L’éthique de la discussion.",
    "t": "Le principe de discussion (principe D)",
    "col": "verite-mesure/2/2",
    "o": "Morale et communication",
    "c": "Une norme ne peut prétendre à la validité que si toutes les personnes qui peuvent être concernées sont d’accord (ou pourraient l’être) en tant que participants à une discussion pratique.",
    "x": "La vérité et la justesse d’un énoncé supposent l’avis, à égalité, de toutes les personnes concernées : aucune norme imposée par la force n’est valable. Ni vérité transcendante, ni relativisme sociologique.",
    "n": [
      "vérité",
      "discussion",
      "universel",
      "démocratie",
      "morale"
    ]
  },
  {
    "aid": "voltaire",
    "nom": "Voltaire",
    "dates": "1694 – 1778",
    "courant": "Lumières",
    "intro": "La tolérance et la prière à Dieu.",
    "t": "La prière à Dieu",
    "col": "verite-mesure/2/0",
    "o": "Traité sur la tolérance, XXIII",
    "c": "Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger.",
    "x": "Contre le fanatisme : que les petites différences entre « les atomes appelés hommes » ne soient pas des signaux de haine. La vérité doit modérer l’homme. Le cours cite aussi Voltaire pour le Dieu au-delà des coutumes et la défense du luxe.",
    "n": [
      "tolérance",
      "fanatisme",
      "religion",
      "fraternité"
    ]
  },
  {
    "aid": "montaigne",
    "t": "« Nous n’avons aucune communication à l’être »",
    "col": "verite-mesure/2/1",
    "o": "Apologie de Raymond Sebond",
    "c": "Toute humaine nature est toujours au milieu entre le naître et le mourir.",
    "x": "La vérité est en Dieu, inaccessible : une sage ignorance consciente de ses limites rend heureux. La vérité, exigence asymptotique, rappelle à l’homme sa finitude.",
    "n": [
      "vérité",
      "scepticisme",
      "finitude",
      "ignorance"
    ]
  },
  {
    "aid": "parmenide",
    "nom": "Parménide",
    "dates": "VIe – Ve s. av. J.-C.",
    "courant": "Présocratiques",
    "intro": "On ne peut penser que ce qui est.",
    "t": "Penser, c’est penser ce qui est",
    "col": "verite-mesure/0/0",
    "o": "Poème",
    "x": "On ne peut penser que ce qui est, stable et identique, contre le devenir et le multiple : la vérité est la condition de la pensée et ne dépend pas des hommes.",
    "n": [
      "vérité",
      "être",
      "pensée"
    ]
  },
  {
    "aid": "descartes",
    "t": "L’animal-machine comme modèle d’intelligibilité",
    "col": "animal-modele/0/1",
    "o": "Principes de la philosophie, IV, art. 203",
    "c": "Je ne reconnais aucune différence entre les machines que font les artisans et les divers corps que la nature seule compose.",
    "x": "L’animal-machine n’est pas une réduction méprisante mais un modèle mécanique (l’automate) qui remplace l’explication par l’âme : penser l’animal par l’esprit et non par les sens.",
    "n": [
      "animal",
      "machine",
      "science",
      "corps"
    ]
  },
  {
    "aid": "diogene",
    "nom": "Diogène de Sinope",
    "dates": "v. 413 – 327 av. J.-C.",
    "courant": "Cynisme",
    "intro": "L’animal, modèle d’une vie sans superflu.",
    "t": "La souris, modèle de vertu",
    "col": "animal-modele/1/1",
    "o": "rapporté par Plutarque",
    "x": "Voyant une souris se réjouir de ses miettes, Diogène se reproche de regretter les festins : l’animal n’est pas esclave des moyens inventés pour être heureux. Celui qui possède est possédé ; nul n’est plus libre que celui qui n’a rien.",
    "n": [
      "animal",
      "liberté",
      "bonheur",
      "nature",
      "aliénation"
    ]
  },
  {
    "aid": "wilson",
    "nom": "Edward O. Wilson",
    "dates": "1929 – 2021",
    "courant": "Sociobiologie",
    "intro": "Les gènes, clé des comportements sociaux ?",
    "t": "La sociobiologie et ses deux erreurs",
    "col": "animal-modele/1/2",
    "o": "Sociobiology (1975) ; On Human Nature (1978)",
    "x": "Wilson explique l’altruisme, l’agressivité ou la religion par les gènes, en extrapolant à partir des chimpanzés. Le corrigé y voit deux erreurs : la naturalisation de la culture et le sophisme naturaliste (de ce qui est à ce qui doit être).",
    "n": [
      "animal",
      "culture",
      "nature humaine",
      "science",
      "morale"
    ]
  },
  {
    "aid": "buffon",
    "nom": "Buffon",
    "dates": "1707 – 1788",
    "courant": "Histoire naturelle",
    "intro": "Contre l’admiration des abeilles géomètres.",
    "t": "Les hexagones des abeilles, résultat mécanique",
    "col": "animal-modele/1/0",
    "o": "Discours sur la nature des animaux (1753)",
    "x": "La figure géométrique des cellules n’est qu’un résultat mécanique et imparfait, qu’on retrouve dans les cristaux : pas de trace de Dieu ni d’intelligence dans l’animal.",
    "n": [
      "animal",
      "finalité",
      "nature",
      "science"
    ]
  },
  {
    "aid": "pline",
    "nom": "Pline l’Ancien",
    "dates": "23 – 79",
    "courant": "Histoire naturelle",
    "intro": "Naissance de l’histoire naturelle.",
    "t": "L’animal devient sujet du discours",
    "col": "animal-modele/0/0",
    "o": "Histoire naturelle",
    "x": "Pline décrit l’éléphant (livre VIII) ou l’abeille (livre XI) en mêlant savoir et anecdotes merveilleuses. Malgré sa faible scientificité, l’histoire naturelle fait pour la première fois de l’animal un modèle du savoir.",
    "n": [
      "animal",
      "science",
      "connaissance"
    ]
  },
  {
    "aid": "jonas",
    "t": "Homo pictor",
    "col": "animal-modele/2/0",
    "o": "« Homo pictor et la différence de l’homme » (1961)",
    "x": "L’homme est un fabricateur d’images : à côté de l’homo faber, il s’entoure d’un univers d’images où l’animal domine, depuis l’art pariétal.",
    "n": [
      "art",
      "image",
      "animal",
      "définition"
    ]
  },
  {
    "aid": "brancusi",
    "nom": "Brancusi",
    "dates": "1876 – 1957",
    "courant": "Sculpture moderne",
    "intro": "L’animal stylisé jusqu’à la forme pure.",
    "t": "L’Oiseau dans l’espace",
    "col": "animal-modele/2/1",
    "o": "L’Oiseau dans l’espace",
    "x": "En supprimant tous les détails réalistes, Brancusi réduit l’oiseau à un fuseau qui s’élance : l’animal sort de la taxonomie et apparaît dans sa présence, hors de tout intérêt cognitif ou pratique.",
    "n": [
      "art",
      "animal",
      "beau",
      "stylisation"
    ]
  },
  {
    "aid": "comte",
    "t": "La biocratie",
    "col": "animal-modele/2/2",
    "o": "Système de politique positive",
    "x": "Les animaux, « ministres inférieurs de l’humanité », doivent être reconnus pour leurs services : Comte imaginait une fête du chien, du cheval et du bœuf.",
    "n": [
      "animal",
      "humanité",
      "reconnaissance"
    ]
  },
  {
    "aid": "diderot",
    "t": "« Tout animal est plus ou moins homme »",
    "col": "animal-plus-ou-moins-homme/1/1",
    "o": "Le Rêve de d’Alembert",
    "x": "Diderot préfigure le transformisme : il n’y a qu’une différence de degré entre l’animal et l’homme. Darwin conduit à inverser la formule : c’est l’homme qui est plus ou moins animal.",
    "n": [
      "animal",
      "évolution",
      "continuité",
      "nature humaine"
    ]
  },
  {
    "aid": "cuvier",
    "nom": "Cuvier",
    "dates": "1769 – 1832",
    "courant": "Anatomie comparée",
    "intro": "Chaque animal est parfait.",
    "t": "Chaque animal est parfait : contre l’échelle des êtres",
    "col": "animal-plus-ou-moins-homme/1/0",
    "o": "Recherches sur les ossements fossiles",
    "x": "Tout animal qui vit a tout ce qu’il faut pour vivre ; par la corrélation des formes, une partie du squelette permet de reconstituer le tout. L’organisation propre de chaque animal interdit d’en faire un homme inachevé.",
    "n": [
      "animal",
      "science",
      "échelle des êtres",
      "hiérarchie"
    ]
  },
  {
    "aid": "voltaire",
    "t": "Il n’y a pas de chaîne des êtres",
    "col": "animal-plus-ou-moins-homme/0/2",
    "o": "Dictionnaire philosophique, « Chaîne des êtres »",
    "c": "Nous n’avons plus de murex. […] où donc est la chaîne ?",
    "x": "La hiérarchie des êtres est la projection de la hiérarchie sociale (le pape, les cardinaux… les capucins). Les espèces disparues prouvent qu’il y a des lacunes : pas de progression des animaux vers l’homme.",
    "n": [
      "animal",
      "échelle des êtres",
      "hiérarchie",
      "nature"
    ]
  },
  {
    "aid": "lavater",
    "nom": "Lavater",
    "dates": "1741 – 1801",
    "courant": "Physiognomonie",
    "intro": "Lire le caractère sur le visage.",
    "t": "La physiognomonie : l’aigle et le nez aquilin",
    "col": "animal-plus-ou-moins-homme/0/1",
    "o": "L’Art de connaître les hommes par la physionomie",
    "x": "Une correspondance entre caractère humain, visage et formes animales : le bec de l’aigle correspond à la fierté de l’homme au nez aquilin. Raisonnement préscientifique, critiqué ensuite.",
    "n": [
      "animal",
      "corps",
      "âme",
      "caractère"
    ]
  },
  {
    "aid": "popper",
    "nom": "Popper",
    "dates": "1902 – 1994",
    "courant": "Épistémologie",
    "intro": "De l’amibe à Einstein.",
    "t": "« De l’amibe à Einstein, il n’y a qu’un pas »",
    "col": "animal-plus-ou-moins-homme/1/2",
    "o": "La Connaissance objective",
    "c": "Les actions de l’amibe ne sont pas rationnelles, alors qu’on peut supposer que celles d’Einstein le sont.",
    "x": "La résolution de problèmes par essais et éliminations d’erreurs est répandue chez tous les vivants ; elle se développe chez le savant. Mais il reste une différence : la rationalité.",
    "n": [
      "animal",
      "science",
      "raison",
      "évolution"
    ]
  },
  {
    "aid": "levi-strauss",
    "t": "Le totémisme, opération ordinaire de l’esprit",
    "col": "animal-plus-ou-moins-homme/2/0",
    "o": "Le Totémisme aujourd’hui",
    "x": "Toute pensée humaine fait correspondre différences sociales et différences naturelles : chez les Nuer, les jumeaux sont des « oiseaux d’en bas ». Une correspondance symbolique, non fondée sur la ressemblance.",
    "n": [
      "animal",
      "totémisme",
      "symbole",
      "culture"
    ]
  },
  {
    "aid": "itard",
    "nom": "Jean Itard",
    "dates": "1774 – 1838",
    "courant": "Médecine",
    "intro": "L’enfant sauvage de l’Aveyron.",
    "t": "L’enfant sauvage",
    "col": "animal-plus-ou-moins-homme/2/1",
    "o": "Mémoires sur Victor de l’Aveyron",
    "x": "On espérait vérifier le passage progressif de l’animalité à l’humanité ; l’enfant n’a pu que répéter quelques mots, faute d’apprentissage à temps. La question du seuil entre l’animal et l’homme reste difficile à penser.",
    "n": [
      "éducation",
      "animal",
      "langage",
      "nature humaine"
    ]
  },
  {
    "aid": "aristote",
    "t": "Les fonctions de l’âme : une série continue",
    "col": "animal-plus-ou-moins-homme/0/0",
    "o": "De l’âme",
    "x": "La plante se nourrit, l’animal sent en plus, l’homme pense en plus : il y a une série continue des vivants. Aristote reconnaît à l’animal mémoire et prudence.",
    "n": [
      "animal",
      "âme",
      "vivant",
      "continuité"
    ]
  }
];
