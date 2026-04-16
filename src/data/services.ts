import { Recycle, Wrench, ClipboardList, TrendingUp, Settings, FileText, Users, Monitor } from "lucide-react";

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export const services: Service[] = [
  {
    id: "1",
    icon: "Recycle",
    title: "Afvalinzameling & Management",
    shortDescription: "Volledig beheer van afvalinzameling voor gemeenten en bedrijven, van strategie tot uitvoering.",
    fullDescription: "B-Advice verzorgt het complete afvalmanagement voor gemeenten, woningcorporaties en bedrijven. Wij adviseren over de meest efficiënte inzamelstructuur, selecteren de juiste inzamelmiddelen en begeleiden de implementatie van A tot Z. Ons doel is om afvalscheiding te maximaliseren en restafval te minimaliseren, met oog voor kostenefficiëntie en bewonerstevredenheid.",
  },
  {
    id: "2",
    icon: "Wrench",
    title: "Plaatsen van containersystemen",
    shortDescription: "Professionele plaatsing van boven- en ondergrondse containersystemen op elke locatie.",
    fullDescription: "Van locatieonderzoek tot oplevering: B-Advice begeleidt het volledige plaatsingsproces van ondergrondse en bovengrondse containersystemen. Wij zorgen voor vergunningsaanvragen, grondonderzoek, coördinatie met nutsbedrijven en de daadwerkelijke civiele werkzaamheden. Na plaatsing voeren wij een grondige inspectie en oplevering uit.",
  },
  {
    id: "3",
    icon: "ClipboardList",
    title: "Projectmanagement",
    shortDescription: "Deskundig projectmanagement voor complexe afval- en containerprojecten.",
    fullDescription: "Onze ervaren projectmanagers sturen complexe afval- en containerprojecten aan van initiatie tot oplevering. Wij bewaken planning, budget en kwaliteit, en fungeren als centraal aanspreekpunt voor alle betrokken partijen. Of het nu gaat om het vervangen van honderden containers of het opzetten van een nieuw inzamelsysteem — B-Advice levert op tijd en binnen budget.",
  },
  {
    id: "4",
    icon: "TrendingUp",
    title: "Meerjaren Investeringsplan (MIP)",
    shortDescription: "Strategische meerjarenplannen voor investeringen in afvalinfrastructuur.",
    fullDescription: "B-Advice stelt gedetailleerde meerjaren investeringsplannen op voor uw afvalinfrastructuur. Op basis van de huidige staat van uw inzamelmiddelen, verwachte levensduur en gewenste kwaliteitsniveau berekenen wij de benodigde investeringen voor de komende 10 tot 20 jaar. Zo voorkomt u onverwachte kosten en kunt u gericht budgetteren.",
  },
  {
    id: "5",
    icon: "Settings",
    title: "Beheer, onderhoud & refurbish",
    shortDescription: "Preventief onderhoud, reparatie en refurbishment van containerparken.",
    fullDescription: "Wij verzorgen het complete beheer en onderhoud van uw containerpark. Van periodieke inspecties en preventief onderhoud tot reparatie en volledige refurbishment. Door regelmatig onderhoud verlengt u de levensduur van uw containers en voorkomt u storingen. Onze refurbishment-service geeft verouderde containers een tweede leven — duurzaam en kostenbesparend.",
  },
  {
    id: "6",
    icon: "FileText",
    title: "Aanbesteding & bestek",
    shortDescription: "Begeleiding bij aanbestedingen en het opstellen van bestekken voor afvalprojecten.",
    fullDescription: "B-Advice heeft ruime ervaring met het opstellen van bestekken en het begeleiden van (Europese) aanbestedingsprocedures voor afvalinzameling en containerprojecten. Wij zorgen voor heldere specificaties, objectieve beoordelingscriteria en een transparant proces dat leidt tot de beste prijs-kwaliteitverhouding.",
  },
  {
    id: "7",
    icon: "Users",
    title: "Bewonersparticipatie & Communicatie",
    shortDescription: "Effectieve communicatie en participatietrajecten voor bewoners bij afvalprojecten.",
    fullDescription: "Succesvol afvalbeheer staat of valt met draagvlak bij bewoners. B-Advice ontwikkelt en voert communicatiestrategieën uit die bewoners informeren, betrekken en motiveren. Van bewonersavonden en enquêtes tot informatiefolders en digitale campagnes — wij zorgen dat uw project breed gedragen wordt.",
  },
  {
    id: "8",
    icon: "Monitor",
    title: "B-Organized platform",
    shortDescription: "Ons eigen digitale platform voor het beheren en monitoren van al uw inzamelmiddelen.",
    fullDescription: "B-Organized is het door B-Advice ontwikkelde managementplatform waarmee u uw volledige containerpark digitaal beheert. Bekijk real-time data over vullingsgraden, plan onderhoud, beheer storingen en genereer rapportages — alles vanuit één overzichtelijk dashboard. Het platform is geschikt voor gemeenten, afvalinzamelaars en woningcorporaties.",
  },
];
