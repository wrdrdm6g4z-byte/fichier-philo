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
  ] }
];
