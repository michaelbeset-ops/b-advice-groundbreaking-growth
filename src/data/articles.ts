export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "toekomst-ondergrondse-afvalinzameling",
    title: "De toekomst van ondergrondse afvalinzameling in Nederland",
    date: "2026-03-15",
    category: "Innovatie",
    author: "B-Advice Redactie",
    excerpt: "Steeds meer gemeenten kiezen voor ondergrondse containers. Wat zijn de voordelen en hoe ziet de toekomst eruit?",
    content: "De trend is duidelijk: ondergrondse afvalinzameling wint snel terrein in Nederland. Waar traditionele bovengrondse containers het straatbeeld domineren en regelmatig zorgen voor overlast, bieden ondergrondse systemen een schone, veilige en esthetisch verantwoorde oplossing.\n\nGemeenten als Amsterdam, Rotterdam en Utrecht hebben al grootschalig geïnvesteerd in ondergrondse inzameling. Maar ook kleinere gemeenten ontdekken de voordelen: minder zwerfafval, hogere scheidingspercentages en tevreden bewoners.\n\nB-Advice begeleidt gemeenten bij deze transitie — van haalbaarheidsonderzoek tot plaatsing en beheer. Met onze expertise zorgen wij voor een soepele overgang naar een toekomstbestendig inzamelsysteem.",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    slug: "duurzaamheid-afvalbeheer",
    title: "Duurzaamheid in afvalbeheer: meer dan alleen recyclen",
    date: "2026-02-28",
    category: "Duurzaamheid",
    author: "B-Advice Redactie",
    excerpt: "Duurzaam afvalbeheer gaat verder dan recyclen. Ontdek hoe circulaire principes het verschil maken.",
    content: "Wanneer we spreken over duurzaam afvalbeheer, denken veel mensen direct aan recycling. Maar echte duurzaamheid gaat veel verder. Het begint bij het voorkomen van afval, gevolgd door hergebruik, en pas dan recycling.\n\nB-Advice hanteert het Ladder van Lansink-principe bij al onze adviezen. Wij helpen organisaties niet alleen met het inzamelen van afval, maar ook met het reduceren ervan. Door slimme inzamelstructuren, bewonersparticipatie en data-gedreven beheer via B-Organized realiseren wij meetbare verduurzaming.\n\nOnze ondergrondse containers worden vervaardigd uit recyclebare materialen en zijn ontworpen voor een levensduur van minimaal 20 jaar — dat is pas echt duurzaam.",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    slug: "b-organized-platform-update",
    title: "B-Organized 2.0: nieuwe functies voor nog beter containerbeheer",
    date: "2026-01-20",
    category: "Platform",
    author: "B-Advice Redactie",
    excerpt: "Het B-Organized platform heeft een grote update gekregen. Lees hier over de nieuwe mogelijkheden.",
    content: "We zijn trots om B-Organized 2.0 aan te kondigen — een grote update van ons digitale beheerplatform. Met nieuwe functies zoals real-time vullingsgraadmonitoring, geautomatiseerde onderhoudsplanning en uitgebreide rapportagemogelijkheden wordt containerbeheer nog efficiënter.\n\nDe vernieuwde interface is intuïtiever dan ooit, met een dashboard dat in één oogopslag de status van uw volledige containerpark toont. Nieuwe API-koppelingen maken integratie met bestaande gemeentelijke systemen eenvoudig.\n\nAlle huidige gebruikers krijgen automatisch toegang tot de nieuwe versie. Nog geen gebruiker? Neem contact op voor een demo.",
    image: "/placeholder.svg",
  },
];
