import productRestafval from "@/assets/product-restafval.jpg";
import productGft from "@/assets/product-gft.jpg";
import productPapier from "@/assets/product-papier.jpg";
import productGlas from "@/assets/product-glas.jpg";
import productTextiel from "@/assets/product-textiel.jpg";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  image: string;
  specs: { label: string; value: string }[];
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "ondergrondse-restafvalcontainer",
    name: "Ondergrondse Restafvalcontainer",
    shortDescription: "Hoogwaardige ondergrondse container voor restafval met een groot inwerpvolume en duurzame constructie.",
    fullDescription: "De ondergrondse restafvalcontainer van B-Advice is ontworpen voor intensief gebruik in woonwijken en bedrijventerreinen. Met een robuuste stalen constructie en een slimme inwerpzuil biedt deze container een hygiënische en ruimtebesparende oplossing voor restafvalinzameling. De container is volledig recyclebaar en voldoet aan alle Nederlandse en Europese veiligheidsnormen. Dankzij het modulaire ontwerp is plaatsing snel en efficiënt, met minimale overlast voor de omgeving.",
    price: "€ 0,00",
    image: productRestafval,
    specs: [
      { label: "Inhoud", value: "5.000 liter" },
      { label: "Materiaal", value: "Verzinkt staal" },
      { label: "Afmetingen", value: "1600 x 1600 x 2800 mm" },
      { label: "Kleur", value: "RAL 7016 (antracietgrijs)" },
      { label: "Levertijd", value: "4-6 weken" },
    ],
    category: "Restafval",
  },
  {
    id: "2",
    slug: "ondergrondse-gft-container",
    name: "Ondergrondse GFT-container",
    shortDescription: "Speciaal ontworpen ondergrondse container voor groente-, fruit- en tuinafval met ventilatie.",
    fullDescription: "De ondergrondse GFT-container is speciaal ontwikkeld voor de inzameling van organisch afval. Dankzij het geïntegreerde ventilatiesysteem wordt geurvorming geminimaliseerd. De container beschikt over een corrosiebestendige coating en is geschikt voor zowel particuliere als commerciële toepassingen. Het inwerpslot kan worden uitgerust met een toegangscontrolesysteem voor gecontroleerde afgifte.",
    price: "€ 0,00",
    image: productGft,
    specs: [
      { label: "Inhoud", value: "3.000 liter" },
      { label: "Materiaal", value: "Verzinkt staal met anti-corrosie coating" },
      { label: "Afmetingen", value: "1400 x 1400 x 2600 mm" },
      { label: "Kleur", value: "RAL 6018 (geelgroen)" },
      { label: "Levertijd", value: "4-6 weken" },
    ],
    category: "GFT",
  },
  {
    id: "3",
    slug: "ondergrondse-papiercontainer",
    name: "Ondergrondse Papiercontainer",
    shortDescription: "Ondergrondse container specifiek voor papier en karton, met extra brede inwerpopening.",
    fullDescription: "Deze ondergrondse papiercontainer is geoptimaliseerd voor de inzameling van papier en karton. De extra brede inwerpopening maakt het eenvoudig om ook grotere stukken karton in te werpen. De container is voorzien van een waterafstotende binnencoating om het papier droog te houden tot de lediging. Ideaal voor gemeenten en VvE's die streven naar een schone en overzichtelijke leefomgeving.",
    price: "€ 0,00",
    image: productPapier,
    specs: [
      { label: "Inhoud", value: "5.000 liter" },
      { label: "Materiaal", value: "Verzinkt staal" },
      { label: "Afmetingen", value: "1600 x 1600 x 2800 mm" },
      { label: "Kleur", value: "RAL 5015 (hemelsblauw)" },
      { label: "Levertijd", value: "3-5 weken" },
    ],
    category: "Papier",
  },
  {
    id: "4",
    slug: "ondergrondse-glascontainer",
    name: "Ondergrondse Glascontainer",
    shortDescription: "Geluiddempende ondergrondse glascontainer met gescheiden inwerp voor wit, groen en bruin glas.",
    fullDescription: "De ondergrondse glascontainer van B-Advice is voorzien van geavanceerde geluidsdemping, waardoor overlast voor omwonenden tot een minimum wordt beperkt. De container kan worden uitgerust met gescheiden inwerpopeningen voor wit, groen en bruin glas. De robuuste constructie is bestand tegen de impact van glasscherven en garandeert een lange levensduur met minimaal onderhoud.",
    price: "€ 0,00",
    image: productGlas,
    specs: [
      { label: "Inhoud", value: "4.000 liter" },
      { label: "Materiaal", value: "Verzinkt staal met geluidsdemping" },
      { label: "Afmetingen", value: "1500 x 1500 x 2700 mm" },
      { label: "Kleur", value: "RAL 6005 (mosgroen)" },
      { label: "Levertijd", value: "5-7 weken" },
    ],
    category: "Glas",
  },
  {
    id: "5",
    slug: "ondergrondse-textielcontainer",
    name: "Ondergrondse Textielcontainer",
    shortDescription: "Ondergrondse container voor textiel en kleding, met droge opslag en anti-vandalisme beveiliging.",
    fullDescription: "De ondergrondse textielcontainer biedt een veilige en droge opslagplaats voor ingezameld textiel en kleding. De container is voorzien van een anti-vandalismeconstructie en een waterdicht afdeksysteem dat het ingezamelde textiel beschermt tegen weersinvloeden. Geschikt voor plaatsing in woonwijken, bij winkelcentra en op milieustraten. De inwerpopening is ontworpen om ongewenst afval te voorkomen.",
    price: "€ 0,00",
    image: "/placeholder.svg",
    specs: [
      { label: "Inhoud", value: "3.500 liter" },
      { label: "Materiaal", value: "Verzinkt staal met waterdichte coating" },
      { label: "Afmetingen", value: "1400 x 1400 x 2600 mm" },
      { label: "Kleur", value: "RAL 3020 (verkeersrood)" },
      { label: "Levertijd", value: "4-6 weken" },
    ],
    category: "Textiel",
  },
];
