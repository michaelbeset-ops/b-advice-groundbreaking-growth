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
  imageAlt: string;
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
    content: "De trend is duidelijk: ondergrondse afvalinzameling wint snel terrein in Nederland. Waar traditionele bovengrondse containers het straatbeeld domineren en regelmatig zorgen voor overlast, bieden ondergrondse systemen een schone, veilige en esthetisch verantwoorde oplossing.\n\nGemeenten als Amsterdam, Rotterdam en Utrecht hebben al grootschalig geïnvesteerd in ondergrondse inzameling. Maar ook kleinere gemeenten ontdekken de voordelen: minder zwerfafval, hogere scheidingspercentages en tevreden bewoners.\n\nDe technologie achter ondergrondse containers heeft de afgelopen jaren een enorme vlucht genomen. Sensoren meten real-time de vullingsgraad, waardoor lege ritten worden voorkomen en de inzamelroutes efficiënter kunnen worden gepland. Dit bespaart brandstof, vermindert CO₂-uitstoot en verlaagt de operationele kosten.\n\nB-Advice begeleidt gemeenten bij deze transitie — van haalbaarheidsonderzoek tot plaatsing en beheer. Met onze expertise zorgen wij voor een soepele overgang naar een toekomstbestendig inzamelsysteem dat zowel bewoners als gemeentelijke organisaties ten goede komt.",
    // Rechtenvrije foto via Unsplash — stedelijke infrastructuur / duurzame stad
    image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Moderne stedelijke infrastructuur voor duurzame afvalinzameling",
  },
  {
    id: "2",
    slug: "duurzaamheid-afvalbeheer",
    title: "Duurzaamheid in afvalbeheer: meer dan alleen recyclen",
    date: "2026-02-28",
    category: "Duurzaamheid",
    author: "B-Advice Redactie",
    excerpt: "Duurzaam afvalbeheer gaat verder dan recyclen. Ontdek hoe circulaire principes het verschil maken.",
    content: "Wanneer we spreken over duurzaam afvalbeheer, denken veel mensen direct aan recycling. Maar echte duurzaamheid gaat veel verder. Het begint bij het voorkomen van afval, gevolgd door hergebruik, en pas dan recycling.\n\nB-Advice hanteert het Ladder van Lansink-principe bij al onze adviezen. Wij helpen organisaties niet alleen met het inzamelen van afval, maar ook met het reduceren ervan. Door slimme inzamelstructuren, bewonersparticipatie en data-gedreven beheer via B-Organized realiseren wij meetbare verduurzaming.\n\nCirculaire economie betekent dat grondstoffen zo lang mogelijk in de kringloop blijven. Dit vraagt om een andere manier van denken over afval: niet als eindproduct, maar als waardevolle grondstof. Onze aanpak helpt gemeenten en bedrijven om deze transitie te maken.\n\nOnze ondergrondse containers worden vervaardigd uit recyclebare materialen en zijn ontworpen voor een levensduur van minimaal 20 jaar — dat is pas echt duurzaam. En via B-Organized meten we de resultaten en sturen we bij waar nodig.",
    // Rechtenvrije foto via Unsplash — groene natuur / duurzaamheid
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Groene natuur als symbool voor duurzaamheid en circulaire economie",
  },
  {
    id: "3",
    slug: "b-organized-platform-update",
    title: "B-Organized 2.0: nieuwe functies voor nog beter containerbeheer",
    date: "2026-01-20",
    category: "Platform",
    author: "B-Advice Redactie",
    excerpt: "Het B-Organized platform heeft een grote update gekregen. Lees hier over de nieuwe mogelijkheden.",
    content: "We zijn trots om B-Organized 2.0 aan te kondigen — een grote update van ons digitale beheerplatform. Met nieuwe functies zoals real-time vullingsgraadmonitoring, geautomatiseerde onderhoudsplanning en uitgebreide rapportagemogelijkheden wordt containerbeheer nog efficiënter.\n\nDe vernieuwde interface is intuïtiever dan ooit, met een dashboard dat in één oogopslag de status van uw volledige containerpark toont. Nieuwe API-koppelingen maken integratie met bestaande gemeentelijke systemen eenvoudig.\n\nEen van de meest gevraagde functies is nu beschikbaar: predictive maintenance. Op basis van historische data en sensorinformatie voorspelt het systeem wanneer onderhoud nodig is, voordat er daadwerkelijk een storing optreedt. Dit bespaart tijd en kosten.\n\nAlle huidige gebruikers krijgen automatisch toegang tot de nieuwe versie. Nog geen gebruiker? Neem contact op voor een demo en ontdek hoe B-Organized uw organisatie kan helpen.",
    // Rechtenvrije foto via Unsplash — technologie / data dashboard
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Moderne technologie en data-dashboard voor digitaal containerbeheer",
  },
];
