export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "afvalinzameling-management",
    icon: "Recycle",
    title: "Afvalinzameling & Management",
    shortDescription: "Volledig beheer van afvalinzameling voor gemeenten en bedrijven, van strategie tot uitvoering.",
    fullDescription: "B-Advice verzorgt het complete afvalmanagement voor gemeenten, woningcorporaties en bedrijven. Wij adviseren over de meest efficiënte inzamelstructuur, selecteren de juiste inzamelmiddelen en begeleiden de implementatie van A tot Z. Ons doel is om afvalscheiding te maximaliseren en restafval te minimaliseren, met oog voor kostenefficiëntie en bewonerstevredenheid.\n\nOnze aanpak begint met een grondige analyse van uw huidige situatie: hoe wordt afval nu ingezameld, welke fracties worden gescheiden, en waar liggen verbeterpunten? Op basis hiervan stellen wij een maatwerkadvies op dat aansluit bij uw doelstellingen en budget.\n\nWij werken nauw samen met uw organisatie gedurende het gehele traject — van de eerste planningsfase tot en met de operationele uitvoering en evaluatie. Zo zorgen wij voor een naadloze implementatie met minimale overlast voor bewoners en medewerkers.",
    benefits: [
      "Verhoogde afvalscheiding (doelstelling 60%+)",
      "Lagere kosten per ton ingezameld afval",
      "Hogere bewonerstevredenheid en minder overlast",
      "Duurzame en circulaire aanpak met meetbare impact",
    ],
  },
  {
    id: "2",
    slug: "plaatsen-containersystemen",
    icon: "Wrench",
    title: "Plaatsen van containersystemen",
    shortDescription: "Professionele plaatsing van boven- en ondergrondse containersystemen op elke locatie.",
    fullDescription: "Van locatieonderzoek tot oplevering: B-Advice begeleidt het volledige plaatsingsproces van ondergrondse en bovengrondse containersystemen. Wij zorgen voor vergunningsaanvragen, grondonderzoek, coördinatie met nutsbedrijven en de daadwerkelijke civiele werkzaamheden. Na plaatsing voeren wij een grondige inspectie en oplevering uit.\n\nOndergrondse containersystemen vergen een zorgvuldige voorbereiding. Wij brengen de ondergrondse infrastructuur in kaart, analyseren de grondgesteldheid en zorgen dat alle betrokken partijen — gemeente, nutsbedrijven en aannemers — goed op elkaar zijn afgestemd.\n\nNa plaatsing verzorgen wij de volledige opleverdocumentatie inclusief as-built tekeningen, onderhoudshandleidingen en garantiedocumenten. Uw personeel wordt getraind in het correct gebruik en melden van storingen.",
    benefits: [
      "Volledige ontzorging van vergunning tot oplevering",
      "Professionele coördinatie met nutsbedrijven en gemeente",
      "Grondige inspectie en technische oplevering",
      "Uitgebreide documentatie en personeelstraining",
    ],
  },
  {
    id: "3",
    slug: "projectmanagement",
    icon: "ClipboardList",
    title: "Projectmanagement",
    shortDescription: "Deskundig projectmanagement voor complexe afval- en containerprojecten.",
    fullDescription: "Onze ervaren projectmanagers sturen complexe afval- en containerprojecten aan van initiatie tot oplevering. Wij bewaken planning, budget en kwaliteit, en fungeren als centraal aanspreekpunt voor alle betrokken partijen. Of het nu gaat om het vervangen van honderden containers of het opzetten van een nieuw inzamelsysteem — B-Advice levert op tijd en binnen budget.\n\nEen succesvol containerproject vereist meer dan technische kennis. Het vraagt om sterke communicatie, risicobeheersing en stakeholdermanagement. Onze projectmanagers hebben ruime ervaring in het werken met gemeentelijke organisaties, aannemers, nutsbedrijven en bewonersgroepen.\n\nWij werken met transparante rapportages en heldere mijlpalen, zodat u als opdrachtgever altijd inzicht heeft in de voortgang. Regelmatige statusoverleggen houden alle betrokkenen op de hoogte en zorgen voor een soepel verloop.",
    benefits: [
      "Gegarandeerd op tijd en binnen budget",
      "Centraal aanspreekpunt voor alle partijen",
      "Transparante voortgangsrapportage en mijlpalen",
      "Bewezen track record van succesvolle projecten in Nederland",
    ],
  },
  {
    id: "4",
    slug: "meerjaren-investeringsplan",
    icon: "TrendingUp",
    title: "Meerjaren Investeringsplan (MIP)",
    shortDescription: "Strategische meerjarenplannen voor investeringen in afvalinfrastructuur.",
    fullDescription: "B-Advice stelt gedetailleerde meerjaren investeringsplannen op voor uw afvalinfrastructuur. Op basis van de huidige staat van uw inzamelmiddelen, verwachte levensduur en gewenste kwaliteitsniveau berekenen wij de benodigde investeringen voor de komende 10 tot 20 jaar. Zo voorkomt u onverwachte kosten en kunt u gericht budgetteren.\n\nEen goed meerjaren investeringsplan begint met een uitgebreide conditiemeting van uw bestaande containerpark. Elk inzamelmiddel wordt geïnspecteerd, gecategoriseerd en voorzien van een verwachte restlevensduur. Op basis hiervan stellen wij een gespreid vervangingsplan op.\n\nHet plan houdt rekening met technologische ontwikkelingen, wettelijke eisen en uw financiële kaders. Wij presenteren meerdere scenario's — van sober en doelmatig tot ambitieus en toekomstgericht — zodat u een weloverwogen keuze kunt maken.",
    benefits: [
      "Financieel plannen 10 tot 20 jaar vooruit",
      "Voorkomen van onverwachte en hoge vervangingskosten",
      "Gericht budgetteren op basis van actuele conditiemetingen",
      "Meerdere scenario's op maat voor uw organisatie",
    ],
  },
  {
    id: "5",
    slug: "beheer-onderhoud-refurbish",
    icon: "Settings",
    title: "Beheer, onderhoud & refurbish",
    shortDescription: "Preventief onderhoud, reparatie en refurbishment van containerparken.",
    fullDescription: "Wij verzorgen het complete beheer en onderhoud van uw containerpark. Van periodieke inspecties en preventief onderhoud tot reparatie en volledige refurbishment. Door regelmatig onderhoud verlengt u de levensduur van uw containers en voorkomt u storingen. Onze refurbishment-service geeft verouderde containers een tweede leven — duurzaam en kostenbesparend.\n\nOns team van ervaren technici voert periodieke inspecties uit aan de hand van vaste checklists. Bevindingen worden digitaal vastgelegd in B-Organized, zodat u altijd inzicht heeft in de staat van uw containerpark. Bij afwijkingen wordt direct actie ondernomen.\n\nRefurbishment is een duurzame en kosteneffectieve alternatief voor volledige vervanging. Door componenten te vervangen, lakwerk te vernieuwen en mechanische delen te reviseren, geeft u uw containers een tweede leven. Dit bespaart gemiddeld 40-60% ten opzichte van nieuwbouw.",
    benefits: [
      "Preventieve onderhoudsinspecties met digitale rapportage",
      "Verlenging van de levensduur van uw containers",
      "Kostenbesparende refurbishment als alternatief voor nieuwbouw",
      "Snelle storingsdienst met minimale downtime",
    ],
  },
  {
    id: "6",
    slug: "aanbesteding-bestek",
    icon: "FileText",
    title: "Aanbesteding & bestek",
    shortDescription: "Begeleiding bij aanbestedingen en het opstellen van bestekken voor afvalprojecten.",
    fullDescription: "B-Advice heeft ruime ervaring met het opstellen van bestekken en het begeleiden van (Europese) aanbestedingsprocedures voor afvalinzameling en containerprojecten. Wij zorgen voor heldere specificaties, objectieve beoordelingscriteria en een transparant proces dat leidt tot de beste prijs-kwaliteitverhouding.\n\nEen goed bestek is de basis voor een succesvolle aanbesteding. Wij vertalen uw wensen en eisen naar heldere technische en functionele specificaties. Daarbij houden wij rekening met de geldende wet- en regelgeving, Europese drempelwaarden en de markt voor afvalinzameling.\n\nTijdens de aanbestedingsprocedure begeleiden wij u bij de nota van inlichtingen, beoordeling van inschrijvingen en de gunningsbeslissing. Wij zorgen voor een transparant en juridisch houdbaar proces.",
    benefits: [
      "Europees aanbestedingsklaar bestek en documentatie",
      "Heldere technische en functionele specificaties",
      "Objectieve beoordelingscriteria en transparante gunning",
      "Optimale prijs-kwaliteitverhouding voor uw project",
    ],
  },
  {
    id: "7",
    slug: "bewonersparticipatie-communicatie",
    icon: "Users",
    title: "Bewonersparticipatie & Communicatie",
    shortDescription: "Effectieve communicatie en participatietrajecten voor bewoners bij afvalprojecten.",
    fullDescription: "Succesvol afvalbeheer staat of valt met draagvlak bij bewoners. B-Advice ontwikkelt en voert communicatiestrategieën uit die bewoners informeren, betrekken en motiveren. Van bewonersavonden en enquêtes tot informatiefolders en digitale campagnes — wij zorgen dat uw project breed gedragen wordt.\n\nWij starten elk traject met een stakeholderanalyse: wie zijn de betrokkenen, wat zijn hun zorgen en verwachtingen, en hoe kunnen we hen het beste bereiken? Op basis hiervan stellen wij een communicatieplan op dat aansluit bij uw doelgroepen.\n\nBewonersparticipatie gaat verder dan informeren. Wij betrekken bewoners actief bij het proces door inspraaksessies, online platforms en enquêtes. Zo voelen bewoners zich gehoord en vergroot u de kans op een succesvolle implementatie.",
    benefits: [
      "Breed draagvlak bij bewoners door actieve participatie",
      "Professionele bewonersavonden en inspraakprocedures",
      "Digitale informatiecampagnes op maat",
      "Hogere scheidingsbereidheid door effectieve communicatie",
    ],
  },
  {
    id: "8",
    slug: "b-organized-platform",
    icon: "Monitor",
    title: "B-Organized platform",
    shortDescription: "Ons eigen digitale platform voor het beheren en monitoren van al uw inzamelmiddelen.",
    fullDescription: "B-Organized is het door B-Advice ontwikkelde managementplatform waarmee u uw volledige containerpark digitaal beheert. Bekijk real-time data over vullingsgraden, plan onderhoud, beheer storingen en genereer rapportages — alles vanuit één overzichtelijk dashboard. Het platform is geschikt voor gemeenten, afvalinzamelaars en woningcorporaties.\n\nB-Organized versie 2.0 introduceert geavanceerde mogelijkheden zoals automatische onderhoudsplanning op basis van sensordata, geïntegreerde storingsbeheer en uitgebreide rapportagemogelijkheden. Het platform integreert via API's met bestaande gemeentelijke systemen.\n\nHet intuïtieve dashboard geeft u in één oogopslag inzicht in de status van uw gehele containerpark. Vullingsgraden, onderhoudsgeschiedenis, storingen en KPI's zijn overzichtelijk gepresenteerd. Notificaties zorgen dat u nooit een belangrijk moment mist.",
    benefits: [
      "Real-time vullingsgraadmonitoring via sensoren",
      "Geautomatiseerde onderhoudsplanning en storingsbeheer",
      "Uitgebreide rapportages en KPI-dashboards",
      "API-integratie met bestaande gemeentelijke systemen",
    ],
  },
];
