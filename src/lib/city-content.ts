export interface FireEvent {
  name: string;
  year: number;
  acres: number;
  structures?: number;
}

export interface CityContent {
  cityName: string;
  slug: string;
  county: string;
  population: number;
  elevation: number;
  h1: string;
  metaDescription: string;
  intro: string;
  fireHistory: FireEvent[];
  primaryVegetation: string[];
  terrain: string;
  nearestCities: string[];
  services: string[];
  faqs: { question: string; answer: string }[];
}

const SERVICES_DEFAULT = [
  'Defensible Space Creation',
  'Wildfire Fuel Reduction',
  'Invasive Weed Removal',
  'HOA Vegetation Management',
  'EMNRD Compliance',
  'Commercial Land Clearing',
  'Prescribed Grazing',
];

export const CITY_PAGES: Record<string, CityContent> = {
  // ─── TIER 1: SFGG Core Market (Santa Fe metro + existing cities) ─────────

  'santa-fe': {
    cityName: 'Santa Fe',
    slug: 'santa-fe',
    county: 'Santa Fe',
    population: 89177,
    elevation: 7199,
    h1: 'Goat Grazing & Defensible Space Services in Santa Fe, New Mexico',
    metaDescription: 'Santa Fe Goat Guys delivers targeted goat grazing for wildfire fuel reduction and defensible space in Santa Fe, NM. EMNRD-compliant vegetation management for homes, HOAs, and commercial properties.',
    intro: 'Santa Fe sits at the base of the Sangre de Cristo Mountains in a landscape shaped by fire. The city\'s pinon-juniper woodlands, ponderosa pine forests, and chamisa-covered hillsides create continuous fuel loads from the urban core to the surrounding national forest. The 2022 Hermit\'s Peak/Calf Canyon Fire — burning 341,000 acres just 20 miles northeast — demonstrated how quickly wildfire can threaten the capital city. Decades of fire suppression have left Santa Fe\'s wildland-urban interface dangerously overgrown. Our Spanish goat herds create effective defensible space for homes, HOAs, and commercial properties across Santa Fe, from the historic Eastside to the city\'s western mesa neighborhoods.',
    fireHistory: [
      { name: 'Hermit\'s Peak/Calf Canyon Fire', year: 2022, acres: 341471, structures: 903 },
      { name: 'Pacheco Fire', year: 2011, acres: 10500 },
      { name: 'La Mesa Fire', year: 1977, acres: 15444 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Chamisa/Sage', 'Mixed Conifer'],
    terrain: 'Mountain foothills transitioning from high desert mesa to forested slopes; elevation 6,800-8,000 ft with steep arroyos and ridgelines',
    nearestCities: ['eldorado', 'tesuque', 'la-cienega', 'pojoaque', 'nambe', 'cerrillos'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How much does goat grazing cost in Santa Fe?', answer: 'Most Santa Fe residential properties range from $800-$3,500 for initial clearing, depending on acreage, vegetation density, and terrain. Properties on the Eastside with steep pinon-juniper slopes cost more than flat mesa lots. HOA bulk contracts reduce per-property costs 30-40%.' },
      { question: 'What areas of Santa Fe do you serve?', answer: 'We serve all of Santa Fe and surrounding communities — from the historic Eastside and Canyon Road area through the Southside, Las Campanas, Aldea, and the western mesa. We also cover every community within 45 minutes of Santa Fe.' },
      { question: 'How does the Hermit\'s Peak Fire affect Santa Fe defensible space?', answer: 'The 2022 Hermit\'s Peak/Calf Canyon Fire burned 341,000 acres in forests identical to what surrounds Santa Fe. It demonstrated that any community in the Sangre de Cristo foothills faces extreme wildfire risk. EMNRD now recommends defensible space zones from 0-30 ft (Zone 1) and 30-100 ft (Zone 2) around all structures.' },
    ],
  },

  eldorado: {
    cityName: 'Eldorado',
    slug: 'eldorado',
    county: 'Santa Fe',
    population: 6400,
    elevation: 6800,
    h1: 'Professional Defensible Space Services for Eldorado, New Mexico',
    metaDescription: 'Targeted goat grazing for wildfire fuel reduction in Eldorado, NM. Spanish goats create EMNRD-compliant defensible space zones for your property.',
    intro: 'Eldorado\'s rolling pinon-juniper terrain and proximity to the Sangre de Cristo foothills create unique wildfire vulnerability for this sought-after community south of Santa Fe. The area\'s dense native vegetation, combined with drought-stressed trees and seasonal winds from Glorieta Pass, demands proactive fuel reduction strategies. Our Spanish goat herds excel at clearing understory brush and ladder fuels that threaten Eldorado\'s custom homes and horse properties. Unlike mechanical clearing that can disturb archaeological sites common in this historic area, targeted goat grazing preserves cultural resources while creating effective defensible space.',
    fireHistory: [
      { name: 'Cerro Grande Fire', year: 2000, acres: 47650, structures: 235 },
      { name: 'Pacheco Fire', year: 2011, acres: 10500 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Grass'],
    terrain: 'Rolling pinon-juniper hills with scattered arroyos; moderate slopes with exposed ridgelines vulnerable to wind-driven fire',
    nearestCities: ['santa-fe', 'lamy', 'galisteo', 'la-cienega', 'cerrillos', 'stanley'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How much does goat grazing cost in Eldorado?', answer: 'Pricing depends on acreage, vegetation density, and terrain. Most Eldorado residential properties range from $800-$2,500 for initial clearing. HOA bulk contracts reduce per-property costs significantly.' },
      { question: 'How long does it take to clear an Eldorado lot?', answer: 'A typical Eldorado residential lot (1-5 acres) takes 3-7 days depending on vegetation density. Our herd of 40-80 goats works continuously, supervised by Great Pyrenees guardian dogs.' },
      { question: 'Will goats damage my Eldorado property?', answer: 'No. Goats are selective browsers that target brush, weeds, and ladder fuels while leaving established trees intact. They actually improve soil health through natural fertilization and hoof action that breaks soil crusts.' },
    ],
  },

  tesuque: {
    cityName: 'Tesuque',
    slug: 'tesuque',
    county: 'Santa Fe',
    population: 1700,
    elevation: 6500,
    h1: 'Tesuque Wildfire Prevention: Professional Defensible Space Services',
    metaDescription: 'Targeted goat grazing for Tesuque\'s high-value properties. Create fire-resistant landscapes while preserving your mountain community\'s natural beauty.',
    intro: 'Tesuque\'s position in the foothills directly north of Santa Fe places this historic community at the convergence of multiple fire-prone ecosystems. The village\'s narrow valley, flanked by steep canyon walls thick with gambel oak and ponderosa pine, creates natural fire chimneys that can rapidly spread flames upslope toward residential areas. Recent drought conditions have stressed the area\'s mature cottonwoods along the Tesuque Creek corridor, creating additional fuel loads near high-value estates and working horse ranches. Our goat herds navigate Tesuque\'s challenging topography to clear understory fuels that mechanical equipment cannot reach.',
    fireHistory: [
      { name: 'Pacheco Fire', year: 2011, acres: 10500 },
      { name: 'Tesuque Fire', year: 2008, acres: 150 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Gambel Oak', 'Cottonwood/Riparian', 'Pinon-Juniper'],
    terrain: 'Narrow valley flanked by steep canyon walls; foothills with mixed conifer transitioning to riparian corridor along Tesuque Creek',
    nearestCities: ['santa-fe', 'pojoaque', 'nambe', 'la-puebla'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Can goats handle Tesuque\'s steep terrain?', answer: 'Absolutely. Spanish and Kiko goats are natural climbers that thrive on steep, rocky terrain. They access slopes and canyon walls that would be impossible or prohibitively expensive to clear mechanically.' },
      { question: 'How do you protect Tesuque\'s mature trees?', answer: 'Goats browse understory brush and ladder fuels but leave established ponderosa pines and cottonwoods intact. We manage browse pressure with strategic fencing to ensure goats clear target vegetation only.' },
      { question: 'Is goat grazing safe near Tesuque Creek?', answer: 'Yes. Unlike herbicides, goat grazing leaves zero chemical residue. Goats actually improve riparian buffer zones by removing invasive species without disturbing stream banks or contaminating water.' },
    ],
  },

  'los-alamos': {
    cityName: 'Los Alamos',
    slug: 'los-alamos',
    county: 'Los Alamos',
    population: 13166,
    elevation: 7320,
    h1: 'Los Alamos Defensible Space: Advanced Wildfire Fuel Reduction Services',
    metaDescription: 'Specialized goat grazing for Los Alamos\'s unique WUI challenges. SFGG creates defensible space zones that protect communities built in fire-adapted forests.',
    intro: 'Los Alamos County\'s mesa-top communities face exceptional wildfire risk, surrounded by dense ponderosa pine and mixed conifer forests that have experienced decades of fire suppression. The Las Conchas Fire of 2011 demonstrated the extreme vulnerability of residential areas built directly within fire-adapted ecosystems. Our targeted grazing services address the specific fuel reduction needs of communities like White Rock and the Townsite, where homes interface directly with national forest lands. Spanish goats excel at clearing understory vegetation beneath Los Alamos\'s towering ponderosas, reducing ladder fuels that carry ground fires into the canopy.',
    fireHistory: [
      { name: 'Las Conchas Fire', year: 2011, acres: 156293, structures: 63 },
      { name: 'Cerro Grande Fire', year: 2000, acres: 47650, structures: 235 },
      { name: 'La Mesa Fire', year: 1977, acres: 15444 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Gambel Oak', 'Pinon-Juniper'],
    terrain: 'Mesa-top communities surrounded by deep canyons; volcanic tuff landscape with steep canyon walls and forested plateaus',
    nearestCities: ['white-rock', 'cochiti-lake', 'espanola', 'pojoaque', 'jemez-springs'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How does goat grazing help after the Las Conchas Fire?', answer: 'Post-fire regrowth creates dense understory that increases future fire risk. Goats manage this regrowth naturally, maintaining the fuel reduction achieved by previous fires while preventing new ladder fuel accumulation.' },
      { question: 'Can you work near Los Alamos National Laboratory?', answer: 'We work on residential and community properties throughout Los Alamos County. Our services focus on private land and HOA common areas where defensible space is needed most.' },
      { question: 'What makes Los Alamos fire risk different?', answer: 'Los Alamos sits on mesas surrounded by ponderosa forest with decades of fire suppression. This creates dense, continuous fuel from ground to canopy. Goat grazing reduces the understory component that carries fire to structures.' },
    ],
  },

  'white-rock': {
    cityName: 'White Rock',
    slug: 'white-rock',
    county: 'Los Alamos',
    population: 5725,
    elevation: 6475,
    h1: 'White Rock Wildfire Protection: Expert Defensible Space Management',
    metaDescription: 'Professional goat grazing for White Rock\'s canyon-edge properties. Reduce wildfire risk while maintaining the natural beauty of your mesa-top community.',
    intro: 'White Rock\'s dramatic position on volcanic tuff cliffs above the Rio Grande creates breathtaking views and significant fire management challenges. This Los Alamos County community sits at the intersection of pinon-juniper woodlands and ponderosa pine forests, with residential areas carved into fire-prone vegetation. The 2000 Cerro Grande Fire and 2011 Las Conchas Fire highlighted White Rock\'s vulnerability as a community built on the edge of wilderness. Our Spanish goat herds specialize in clearing dense understory growth that accumulates in the area\'s protected microclimates and drainages.',
    fireHistory: [
      { name: 'Las Conchas Fire', year: 2011, acres: 156293, structures: 63 },
      { name: 'Cerro Grande Fire', year: 2000, acres: 47650, structures: 235 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Chamisa/Sage'],
    terrain: 'Mesa-top community perched on volcanic tuff cliffs above the Rio Grande; canyon-edge exposure with steep drops into Frijoles and other canyons',
    nearestCities: ['los-alamos', 'cochiti-lake', 'espanola', 'pojoaque'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How close did the Cerro Grande Fire come to White Rock?', answer: 'The 2000 Cerro Grande Fire forced White Rock evacuations and burned to the community\'s edge. This history makes defensible space critical for every White Rock property, especially those bordering undeveloped canyon land.' },
      { question: 'Can goats work on White Rock\'s mesa edges?', answer: 'Yes. Goats are ideal for the steep, rocky terrain around White Rock\'s canyon edges where mechanical equipment can\'t operate safely. They clear brush from slopes that would otherwise remain untreated fuel loads.' },
      { question: 'How often should White Rock properties be grazed?', answer: 'Most White Rock properties benefit from annual maintenance grazing after initial clearing. The area\'s vigorous regrowth in pinon-juniper means understory can rebuild quickly without ongoing management.' },
    ],
  },

  edgewood: {
    cityName: 'Edgewood',
    slug: 'edgewood',
    county: 'Santa Fe',
    population: 6800,
    elevation: 6200,
    h1: 'Edgewood Fire Prevention: Professional Defensible Space Services',
    metaDescription: 'Comprehensive goat grazing for Edgewood\'s expansive properties. SFGG reduces wildfire fuel loads across East Mountain communities facing increasing fire risk.',
    intro: 'Edgewood\'s position on the eastern slope of the Sandia Mountains places this growing community at the intersection of Great Plains grasslands and montane forests, creating complex fuel management challenges. The area\'s rapid residential development has introduced structures into fire-prone pinon-juniper woodlands where natural fire cycles have been disrupted for decades. Seasonal winds from the Rio Grande Valley, combined with drought-stressed vegetation and increasing residential density, elevate fire risk for properties throughout the East Mountains.',
    fireHistory: [
      { name: 'Dog Head Fire', year: 2016, acres: 17912, structures: 24 },
      { name: 'Tablazon Fire', year: 2008, acres: 10800 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Grass', 'Chamisa/Sage'],
    terrain: 'Eastern slope of Sandia Mountains transitioning to Great Plains grassland; rolling terrain with juniper-studded hills',
    nearestCities: ['cedar-crest', 'tijeras', 'stanley', 'sandia-park', 'moriarty'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Is Edgewood really at wildfire risk?', answer: 'Yes. Edgewood\'s East Mountain location puts it in the wildland-urban interface where pinon-juniper woodland meets residential development. The 2016 Dog Head Fire burned nearly 18,000 acres nearby, destroying 24 structures.' },
      { question: 'How do goats handle Edgewood\'s large properties?', answer: 'Our herds of 40-80 goats efficiently clear large acreage. A 5-acre Edgewood lot typically takes 5-10 days. We use portable electric fencing to direct grazing to priority areas first.' },
      { question: 'What about Edgewood HOA common areas?', answer: 'We offer bulk HOA contracts that reduce per-property costs significantly. Common area grazing creates community-wide fuel breaks that protect multiple homes simultaneously.' },
    ],
  },

  'la-cienega': {
    cityName: 'La Cienega',
    slug: 'la-cienega',
    county: 'Santa Fe',
    population: 3800,
    elevation: 5900,
    h1: 'La Cienega Defensible Space: Historic Community Fire Protection',
    metaDescription: 'Specialized goat grazing for La Cienega\'s unique landscape. Protect this historic settlement with defensible space services that respect cultural heritage.',
    intro: 'La Cienega\'s distinction as one of New Mexico\'s oldest continuously inhabited communities brings unique fire management challenges to this historic village between Santa Fe and Cochiti Pueblo. The settlement\'s location in the broad valley of the Santa Fe River, surrounded by pinon-covered hills and ancient acequia systems, requires defensible space strategies that preserve cultural landscapes while reducing wildfire risk. Our Spanish goat herds navigate the area\'s traditional agricultural plots and historic structures with sensitivity, clearing invasive species and fire-prone brush without disturbing the cultural resources that make La Cienega irreplaceable.',
    fireHistory: [
      { name: 'Cerro Grande Fire (regional impact)', year: 2000, acres: 47650 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Cottonwood/Riparian', 'Chamisa/Sage', 'Grass'],
    terrain: 'Broad river valley surrounded by pinon-covered hills; acequia-irrigated bottomland with gentle slopes',
    nearestCities: ['santa-fe', 'cerrillos', 'eldorado', 'cochiti-lake', 'madrid'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Can goats work around La Cienega\'s acequia systems?', answer: 'Yes. Goats are ideal for acequia-adjacent vegetation management. They remove invasive species along ditch banks without the soil compaction or chemical contamination that comes with mechanical or chemical methods.' },
      { question: 'How do you protect La Cienega\'s historic sites?', answer: 'Goat grazing is the least invasive fuel reduction method available. Unlike heavy equipment, goats leave no ruts, don\'t damage subsurface archaeology, and actually reveal previously hidden features by clearing overgrowth.' },
      { question: 'What invasive species do goats target in La Cienega?', answer: 'Goats effectively control Russian thistle, kochia, cheatgrass, and juniper seedlings that encroach on La Cienega\'s agricultural and residential areas. They preferentially browse these species over native grasses.' },
    ],
  },

  cerrillos: {
    cityName: 'Cerrillos',
    slug: 'cerrillos',
    county: 'Santa Fe',
    population: 350,
    elevation: 5700,
    h1: 'Cerrillos Wildfire Defense: Mining Town Defensible Space Services',
    metaDescription: 'Professional goat grazing for Cerrillos\'s unique topography. Targeted fuel reduction for this historic mining community\'s challenging terrain.',
    intro: 'Cerrillos\'s legacy as a 19th-century mining boom town left this community with distinctive fire management challenges in the rolling hills southeast of Santa Fe. The town sits where pinon-juniper woodland meets grassland, creating diverse fuel types that can carry fire rapidly between structures. Historic mining infrastructure and narrow property layouts make mechanical clearing difficult, while the community\'s artistic character demands fire protection methods that preserve rather than destroy the landscape. Our goat herds navigate Cerrillos\'s unique terrain and tight spaces with precision.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Grass', 'Chamisa/Sage'],
    terrain: 'Rolling hills at the pinon-juniper/grassland transition; narrow valley with historic structures built into hillsides',
    nearestCities: ['madrid', 'la-cienega', 'eldorado', 'galisteo', 'stanley'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Can goats work in Cerrillos\'s tight spaces?', answer: 'Yes. Goats are perfect for the narrow lots and historic structures common in Cerrillos. They clear vegetation in spaces too tight for machinery while leaving buildings and fencing intact.' },
      { question: 'What fire risk does Cerrillos face?', answer: 'Cerrillos sits where pinon-juniper meets grassland, creating conditions for both slow-moving brush fires and fast-moving grass fires. The town\'s historic wooden structures are especially vulnerable.' },
      { question: 'How does goat grazing help Cerrillos?', answer: 'Goats create defensible space around structures by removing brush, ladder fuels, and invasive weeds. They\'re especially effective in Cerrillos\'s hilly terrain where equipment access is limited.' },
    ],
  },

  lamy: {
    cityName: 'Lamy',
    slug: 'lamy',
    county: 'Santa Fe',
    population: 200,
    elevation: 6400,
    h1: 'Defensible Space Services in Lamy, New Mexico',
    metaDescription: 'Professional defensible space services for Lamy properties. Spanish goats create EMNRD-compliant fuel breaks to protect your ranch from wildfire.',
    intro: 'Lamy\'s historic railroad community sits in a particularly vulnerable position where grasslands meet pinyon-juniper woodlands, creating textbook wildfire conditions. The area\'s scattered ranch properties and rural residential developments face unique challenges — wide-open spaces that can carry fast-moving grass fires, plus dense tree clusters that create dangerous crown fire potential. Recent fire seasons have demonstrated how quickly flames can race across the Galisteo Basin, putting Lamy\'s historic depot area and surrounding homes at risk.',
    fireHistory: [],
    primaryVegetation: ['Grass', 'Pinon-Juniper', 'Chamisa/Sage'],
    terrain: 'Galisteo Basin grasslands meeting pinyon-juniper foothills; open rangeland with scattered tree clusters near the railroad corridor',
    nearestCities: ['eldorado', 'galisteo', 'glorieta', 'santa-fe', 'stanley'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How do goats handle Lamy\'s grassland fire risk?', answer: 'Goats reduce fine fuel loads in grasslands that carry fast-moving fires. They create fuel breaks between grass and juniper stands, interrupting the fuel continuity that allows fires to grow.' },
      { question: 'Can you graze ranch properties near Lamy?', answer: 'Absolutely. We regularly work on large ranch parcels throughout the Galisteo Basin. Our portable fencing system allows us to target specific areas while keeping goats contained and productive.' },
      { question: 'How does Lamy\'s location affect fire risk?', answer: 'Lamy sits where the Galisteo Basin\'s grasslands meet the foothills. Wind-driven grass fires can move rapidly across the basin, and pinyon-juniper stands near structures create crown fire potential.' },
    ],
  },

  glorieta: {
    cityName: 'Glorieta',
    slug: 'glorieta',
    county: 'Santa Fe',
    population: 400,
    elevation: 7400,
    h1: 'Glorieta Defensible Space and Wildfire Fuel Reduction Services',
    metaDescription: 'Wildfire fuel reduction for Glorieta\'s forested properties. Targeted goat grazing creates defensible space while preserving your mountain property\'s natural beauty.',
    intro: 'Glorieta\'s position along the historic Santa Fe Trail places modern properties directly in New Mexico\'s high-risk wildfire corridor, where ponderosa pine forests meet dense oak and mountain mahogany understory. The 2022 Hermit\'s Peak/Calf Canyon Fire demonstrated just how vulnerable this elevation zone can be, with similar forest types burning intensely throughout the Sangre de Cristo foothills. Glorieta properties often feature challenging terrain — steep slopes, rocky outcroppings, and mixed conifer stands that make traditional fuel reduction difficult and expensive.',
    fireHistory: [
      { name: 'Hermit\'s Peak/Calf Canyon Fire (nearby)', year: 2022, acres: 341471, structures: 903 },
      { name: 'Viveash Fire', year: 2000, acres: 28508 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Gambel Oak', 'Mountain Mahogany'],
    terrain: 'Steep mountain slopes along Glorieta Pass; rocky outcroppings with dense mixed conifer forest at 7,000-8,500 ft',
    nearestCities: ['pecos', 'lamy', 'santa-fe', 'eldorado'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How did the Hermit\'s Peak Fire affect Glorieta area?', answer: 'The 2022 Hermit\'s Peak/Calf Canyon Fire burned 341,000 acres in similar forest types to Glorieta\'s. It demonstrated the extreme risk facing forested mountain communities without adequate defensible space.' },
      { question: 'Can goats work on Glorieta\'s steep terrain?', answer: 'Spanish goats are natural mountaineers. They thrive on the steep, rocky slopes common around Glorieta where heavy equipment can\'t operate. They clear understory while navigating terrain that would stop a bulldozer.' },
      { question: 'What does EMNRD require for Glorieta properties?', answer: 'NM EMNRD recommends defensible space zones from 0-30 feet (Zone 1) and 30-100 feet (Zone 2) around structures. Goat grazing efficiently addresses both zones by clearing ladder fuels and reducing vegetation density.' },
    ],
  },

  pecos: {
    cityName: 'Pecos',
    slug: 'pecos',
    county: 'San Miguel',
    population: 1400,
    elevation: 6900,
    h1: 'Pecos Wildfire Defense: Professional Defensible Space Services',
    metaDescription: 'Wildfire defensible space services for Pecos properties. Expert goat grazing reduces forest fire risk while working with your land\'s natural ecosystem.',
    intro: 'Pecos sits in the heart of New Mexico\'s wildfire country, where the 2022 Hermit\'s Peak/Calf Canyon Fire burned over 341,000 acres and forever changed how forest communities think about defensible space. The village\'s location in dense mixed-conifer forest — with Gambel oak, aspen groves, and towering ponderosa pines — creates extreme fire risk during dry seasons. Many Pecos properties feature the challenging combination of steep terrain, rocky soil, and established forest that makes mechanical fuel reduction both expensive and ecologically disruptive.',
    fireHistory: [
      { name: 'Hermit\'s Peak/Calf Canyon Fire', year: 2022, acres: 341471, structures: 903 },
      { name: 'Viveash Fire', year: 2000, acres: 28508 },
    ],
    primaryVegetation: ['Mixed Conifer', 'Ponderosa Pine', 'Gambel Oak', 'Aspen'],
    terrain: 'Upper Pecos River valley in the Sangre de Cristo Mountains; steep forested slopes with narrow valley bottom',
    nearestCities: ['glorieta', 'las-vegas-nm', 'ribera', 'santa-fe'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Is Pecos still at risk after the Hermit\'s Peak Fire?', answer: 'Yes. While some areas burned, much of the forest around Pecos retains dense fuel loads. Post-fire regrowth also creates new ladder fuels. Ongoing defensible space maintenance is essential.' },
      { question: 'How do goats compare to mechanical clearing in Pecos?', answer: 'Goats cost 30-60% less per acre than mechanical clearing in Pecos\'s forested terrain. They don\'t compact soil, damage root systems, or require road access. And they naturally fertilize as they work.' },
      { question: 'What vegetation do goats target around Pecos?', answer: 'Goats browse Gambel oak, mountain mahogany, juniper seedlings, and understory brush that creates ladder fuels. They leave established ponderosa and spruce intact while clearing the fuel that connects ground fires to canopy.' },
    ],
  },

  pojoaque: {
    cityName: 'Pojoaque',
    slug: 'pojoaque',
    county: 'Santa Fe',
    population: 1800,
    elevation: 5900,
    h1: 'Pojoaque Valley Defensible Space: Wildfire Fuel Reduction Services',
    metaDescription: 'Defensible space services for Pojoaque Valley properties. Targeted goat grazing reduces wildfire risk across agricultural and residential land.',
    intro: 'The Pojoaque Valley\'s unique geography — where agricultural fields meet pinon-juniper hillsides and cottonwood bosques — creates complex wildfire fuel patterns that require specialized management. Properties along the valley floor benefit from natural fire breaks created by acequia systems and cultivated fields, but the transition zones where development meets native vegetation pose significant risk. Pojoaque\'s growing residential areas often feature ornamental landscaping adjacent to native shrublands, creating fuel continuity that can carry fire directly to structures.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Cottonwood/Riparian', 'Chamisa/Sage', 'Grass'],
    terrain: 'Broad valley floor along the Pojoaque River with acequia-irrigated bottomland; pinon-juniper hillsides flank both sides',
    nearestCities: ['tesuque', 'nambe', 'santa-fe', 'espanola', 'la-puebla'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How does Pojoaque\'s valley location affect fire risk?', answer: 'The valley floor has natural breaks from acequias and agriculture, but hillside properties face direct exposure to pinon-juniper wildfire. Wind can funnel through the valley, accelerating fires from surrounding hills toward homes.' },
      { question: 'Can goats work around Pojoaque\'s agricultural areas?', answer: 'Yes. We use portable electric fencing to keep goats in target areas and away from crops. Goats are ideal for clearing the buffer zones between agricultural land and native vegetation.' },
      { question: 'What about Pojoaque HOA communities?', answer: 'We serve HOA communities throughout the Pojoaque Valley with bulk contracts. Common area grazing creates community-wide fuel breaks while reducing per-property costs for homeowners.' },
    ],
  },

  nambe: {
    cityName: 'Nambe',
    slug: 'nambe',
    county: 'Santa Fe',
    population: 1700,
    elevation: 6200,
    h1: 'Nambe Area Defensible Space and Fire Risk Reduction',
    metaDescription: 'Wildfire defensible space for Nambe area properties. Professional goat grazing creates fuel breaks while respecting cultural and natural landscapes.',
    intro: 'Nambe\'s position in the Sangre de Cristo foothills creates a challenging wildfire environment where pinon-juniper woodlands transition into ponderosa pine forest, with seasonal grasslands and agricultural areas adding complexity to fuel management. The area\'s cultural significance and landscape sensitivity require defensible space solutions that work within existing land use patterns while providing effective fire protection. Our goat herds deliver precisely this balance, clearing fire-prone vegetation while preserving the natural and cultural character of the Nambe landscape.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Cottonwood/Riparian', 'Chamisa/Sage'],
    terrain: 'Sangre de Cristo foothills with pinon-juniper transitioning to ponderosa; Nambe River valley with riparian corridor',
    nearestCities: ['pojoaque', 'tesuque', 'santa-fe', 'chimayo', 'la-puebla'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How do you work with Nambe\'s sensitive landscapes?', answer: 'Goat grazing is inherently low-impact. No heavy equipment, no chemicals, no soil disturbance. Goats remove target vegetation while leaving the landscape\'s character intact — ideal for culturally sensitive areas.' },
      { question: 'What elevation zones do you serve around Nambe?', answer: 'We serve properties from the Nambe valley floor through the pinon-juniper transition zone and into lower ponderosa forests. Each elevation has different fuel types that our goats are trained to manage.' },
      { question: 'How often does Nambe area vegetation need management?', answer: 'Most Nambe properties benefit from annual maintenance after initial clearing. The foothills\' vigorous growing season means understory regrowth can rebuild fire risk within 1-2 years without management.' },
    ],
  },

  galisteo: {
    cityName: 'Galisteo',
    slug: 'galisteo',
    county: 'Santa Fe',
    population: 300,
    elevation: 6200,
    h1: 'Galisteo Basin Defensible Space: Targeted Wildfire Fuel Reduction',
    metaDescription: 'Defensible space services for Galisteo Basin properties. Spanish goats reduce grassland fire risk while preserving your land\'s natural character.',
    intro: 'The Galisteo Basin\'s expansive grasslands and scattered juniper groves create ideal conditions for fast-moving wildfire, where flames can travel for miles with little natural interruption. This ancient landscape, rich with archaeological sites and traditional grazing areas, requires defensible space solutions that work within its cultural and ecological context. Our Spanish goat herds provide targeted fuel reduction that respects the basin\'s heritage while creating effective fire breaks around structures and communities.',
    fireHistory: [],
    primaryVegetation: ['Grass', 'Pinon-Juniper', 'Chamisa/Sage'],
    terrain: 'Broad open basin with expansive grasslands and scattered juniper groves; gentle rolling terrain with wide views and wind exposure',
    nearestCities: ['eldorado', 'lamy', 'cerrillos', 'stanley', 'santa-fe'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How fast can grass fires move across the Galisteo Basin?', answer: 'Wind-driven grass fires in the Galisteo Basin can move at 5-15 mph, covering large areas in minutes. Creating fuel breaks around structures is critical because there\'s often no natural barrier to stop a fire.' },
      { question: 'Can goats help with Galisteo\'s juniper encroachment?', answer: 'Yes. Goats browse juniper seedlings and young trees, preventing the juniper encroachment that\'s converting grassland to woodland throughout the basin. This maintains the natural grassland fire regime.' },
      { question: 'How do you protect archaeological sites during grazing?', answer: 'Goat grazing is the most archaeologically-sensitive clearing method available. No ground disturbance, no equipment tracks, no excavation. Goats actually reveal hidden features by removing overgrowth.' },
    ],
  },

  madrid: {
    cityName: 'Madrid',
    slug: 'madrid',
    county: 'Santa Fe',
    population: 250,
    elevation: 6050,
    h1: 'Madrid Historic District Defensible Space and Fire Protection',
    metaDescription: 'Wildfire defensible space for Madrid\'s historic mining district. Specialized goat grazing protects historic structures from wildfire risk.',
    intro: 'Madrid\'s unique position as a historic mining town nestled in pinon-juniper woodland creates distinctive wildfire challenges where cultural preservation meets fire safety requirements. The town\'s narrow valley setting, with historic structures built directly into hillsides covered in native vegetation, requires defensible space solutions that protect irreplaceable buildings without destroying the landscape character that defines this artistic community. Our goat herds are perfectly suited to Madrid\'s tight spaces, steep slopes, and sensitive historic structures.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Grass'],
    terrain: 'Narrow valley between pinon-juniper covered hills; historic mining community with structures built into steep hillsides',
    nearestCities: ['cerrillos', 'la-cienega', 'eldorado', 'golden'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Can goats protect Madrid\'s historic buildings?', answer: 'Yes. Goats clear fire-prone vegetation from around historic structures without the damage that comes from heavy equipment. They work in tight spaces between buildings and on steep hillsides that machinery can\'t reach.' },
      { question: 'What fire risk does Madrid face?', answer: 'Madrid\'s wooden historic structures sit in dense pinon-juniper woodland with minimal defensible space. The narrow valley can channel winds and fire. One structure fire could spread to the entire historic district without fuel breaks.' },
      { question: 'How do you work in Madrid\'s narrow valley?', answer: 'Our goats thrive in tight spaces. We use targeted fencing to direct them around specific structures and along hillsides. No heavy equipment needed — goats access terrain that machines simply cannot.' },
    ],
  },

  stanley: {
    cityName: 'Stanley',
    slug: 'stanley',
    county: 'Santa Fe',
    population: 1200,
    elevation: 6400,
    h1: 'Stanley Area Wildfire Defense: Professional Defensible Space Services',
    metaDescription: 'Defensible space services for Stanley\'s rural properties. Expert goat grazing reduces fire risk in the Estancia Valley\'s grassland-juniper transition.',
    intro: 'Stanley\'s position in the southern Sangre de Cristo foothills places properties at the transition between Estancia Valley grasslands and pinon-juniper woodland, creating diverse wildfire fuel conditions. The area\'s large ranch properties and scattered residential developments face both grass fire and brush fire risk, with wind patterns off the mountains driving fire behavior that can change rapidly. Our targeted goat grazing creates effective fuel breaks across Stanley\'s varied terrain, reducing both grass and brush fuel loads that threaten structures.',
    fireHistory: [
      { name: 'Dog Head Fire (nearby)', year: 2016, acres: 17912, structures: 24 },
    ],
    primaryVegetation: ['Grass', 'Pinon-Juniper', 'Chamisa/Sage'],
    terrain: 'Southern Sangre de Cristo foothills transitioning to Estancia Valley grassland; rolling terrain with wind exposure from multiple directions',
    nearestCities: ['edgewood', 'galisteo', 'cerrillos', 'moriarty', 'eldorado'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risks exist around Stanley?', answer: 'Stanley faces dual risk: fast-moving grass fires from the Estancia Valley and slower brush fires from pinon-juniper woodland. Wind off the mountains can push either type rapidly toward structures.' },
      { question: 'Can goats clear large ranch properties near Stanley?', answer: 'Yes. Our herds efficiently clear large acreage — a 20-acre parcel typically takes 2-3 weeks. We use portable fencing to systematically work across the property, prioritizing areas closest to structures.' },
      { question: 'How does Stanley compare to other SFGG service areas?', answer: 'Stanley\'s grassland-juniper mix is similar to Galisteo and Lamy. The main difference is elevation and wind exposure. We tailor our grazing plan to your specific property\'s fuel types and terrain.' },
    ],
  },

  // ─── TIER 1: Major NM Fire-Risk Communities ──────────────────────────────

  taos: {
    cityName: 'Taos',
    slug: 'taos',
    county: 'Taos',
    population: 6049,
    elevation: 6969,
    h1: 'Taos Wildfire Prevention: Professional Defensible Space Services',
    metaDescription: 'Targeted goat grazing for Taos properties. Create EMNRD-compliant defensible space in the Sangre de Cristo foothills. Free quotes from Santa Fe Goat Guys.',
    intro: 'Taos sits at the base of the Sangre de Cristo Mountains in a landscape defined by fire risk — dense ponderosa pine forests above, pinon-juniper woodlands at town level, and chamisa-covered mesas below. The 2003 Encebado Fire and recurring drought cycles demonstrate Taos\'s vulnerability as a community surrounded by fire-adapted vegetation. The town\'s mix of historic adobe compounds, modern residential development, and rural ranchland creates complex defensible space needs. Our Spanish goat herds address the full spectrum of Taos fuel types, from dense mountain understory to chamisa-choked arroyos running through town.',
    fireHistory: [
      { name: 'Encebado Fire', year: 2003, acres: 5000 },
      { name: 'Hondo Fire', year: 1996, acres: 9800 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Pinon-Juniper', 'Chamisa/Sage', 'Mixed Conifer'],
    terrain: 'Sangre de Cristo foothills above, Rio Grande gorge below; town occupies a high mesa with mountain backdrop and deep arroyos',
    nearestCities: ['arroyo-seco', 'ranchos-de-taos', 'angel-fire', 'questa', 'penasco', 'dixon'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How much does goat grazing cost in Taos?', answer: 'Most Taos residential properties range from $1,000-$3,500 for initial clearing, depending on acreage and vegetation density. Properties backing up to forested slopes cost more due to heavier fuel loads. We offer multi-property discounts for Taos neighborhoods.' },
      { question: 'What vegetation do goats target around Taos?', answer: 'Goats browse chamisa, rabbitbrush, juniper seedlings, Gambel oak understory, and other ladder fuels that carry ground fires into the tree canopy. They\'re especially effective at clearing the dense chamisa that fills Taos arroyos and vacant lots.' },
      { question: 'Do you serve Taos Ski Valley and the mountain communities?', answer: 'We serve the entire Taos County area from the mesa communities through the foothills. Higher-elevation properties in forested settings have the greatest fire risk and benefit most from targeted goat grazing.' },
    ],
  },

  ruidoso: {
    cityName: 'Ruidoso',
    slug: 'ruidoso',
    county: 'Lincoln',
    population: 7700,
    elevation: 6900,
    h1: 'Ruidoso Wildfire Defense: Post-McBride Fire Defensible Space Services',
    metaDescription: 'Defensible space services for Ruidoso properties. After the McBride Fire destroyed 200+ homes, professional goat grazing reduces your wildfire risk.',
    intro: 'The 2022 McBride Fire changed Ruidoso forever, destroying over 200 structures and forcing the evacuation of thousands. This mountain resort community, built within dense ponderosa pine and mixed conifer forest, faces some of New Mexico\'s highest wildfire risk. Ruidoso\'s canyon-laced terrain, steep slopes, and decades of fire suppression have created extreme fuel loads throughout the wildland-urban interface. Post-fire regrowth is already rebuilding the understory that fed the McBride Fire. Our goat herds provide ongoing fuel management that keeps defensible space effective in Ruidoso\'s fast-growing mountain environment.',
    fireHistory: [
      { name: 'McBride Fire', year: 2022, acres: 6159, structures: 207 },
      { name: 'Little Bear Fire', year: 2012, acres: 44330, structures: 242 },
      { name: 'Gavilan Fire', year: 2003, acres: 1900 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Gambel Oak', 'Mountain Mahogany'],
    terrain: 'Mountain resort community in forested canyons; steep slopes with dense tree cover and limited access roads',
    nearestCities: ['alto', 'cloudcroft', 'capitan'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How does post-McBride Fire regrowth affect Ruidoso?', answer: 'Post-fire areas regenerate dense understory within 2-3 years. This new growth creates ladder fuels that can carry the next fire. Annual goat grazing maintains the fuel reduction that the fire temporarily achieved.' },
      { question: 'Can goats work on Ruidoso\'s steep mountain terrain?', answer: 'Yes. Spanish goats are natural mountaineers — they thrive on the steep, rocky terrain that defines Ruidoso\'s canyons. They access slopes where heavy equipment can\'t operate, clearing fuels that would otherwise go untreated.' },
      { question: 'What\'s the fire risk in Ruidoso now?', answer: 'Despite the McBride and Little Bear fires, much of Ruidoso\'s surrounding forest retains extreme fuel loads. The forested canyons funnel wind and fire directly toward structures. Defensible space is more critical than ever.' },
    ],
  },

  'las-vegas-nm': {
    cityName: 'Las Vegas',
    slug: 'las-vegas-nm',
    county: 'San Miguel',
    population: 13753,
    elevation: 6424,
    h1: 'Las Vegas NM Defensible Space: Hermit\'s Peak Recovery Fire Protection',
    metaDescription: 'Defensible space services for Las Vegas, NM. After the Hermit\'s Peak Fire devastated the Gallinas watershed, protect your property with targeted goat grazing.',
    intro: 'The 2022 Hermit\'s Peak/Calf Canyon Fire transformed Las Vegas, New Mexico\'s relationship with wildfire. Burning 341,471 acres — the largest fire in state history — it destroyed 903 structures and devastated the Gallinas watershed that supplies the city\'s drinking water. Las Vegas sits where the Great Plains meet the Sangre de Cristo Mountains, surrounded by fire-prone pinon-juniper and ponderosa forests. The fire laid bare decades of fuel accumulation and demonstrated that every property in the greater Las Vegas area needs defensible space. Our goat herds provide the fuel reduction this recovering community needs.',
    fireHistory: [
      { name: 'Hermit\'s Peak/Calf Canyon Fire', year: 2022, acres: 341471, structures: 903 },
      { name: 'Viveash Fire', year: 2000, acres: 28508 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Grass', 'Chamisa/Sage'],
    terrain: 'Great Plains meeting the Sangre de Cristo foothills; city occupies a broad valley at the base of timbered mountains with the Gallinas River corridor',
    nearestCities: ['pecos', 'ribera', 'mora', 'montezuma'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How did the Hermit\'s Peak Fire affect Las Vegas NM?', answer: 'The 2022 fire destroyed 903 structures, devastated the city\'s watershed, and forced extended evacuations. It was the largest wildfire in New Mexico history and demonstrated the extreme vulnerability of communities in the Sangre de Cristo foothills.' },
      { question: 'Is Las Vegas NM still at fire risk?', answer: 'Yes. Unburned areas retain extreme fuel loads, and post-fire regrowth is creating new understory. The watershed remains vulnerable to debris flows. Defensible space around structures is essential for ongoing protection.' },
      { question: 'How does goat grazing help Las Vegas NM recovery?', answer: 'Goats manage post-fire regrowth, clear remaining dense vegetation around structures, and create fuel breaks without further disturbing damaged soil. They\'re ideal for the ongoing maintenance Las Vegas needs.' },
    ],
  },

  corrales: {
    cityName: 'Corrales',
    slug: 'corrales',
    county: 'Sandoval',
    population: 8800,
    elevation: 5100,
    h1: 'Corrales Defensible Space: Bosque & Horse Property Fire Protection',
    metaDescription: 'Goat grazing for Corrales bosque and horse properties. Reduce wildfire fuel along the Rio Grande corridor while maintaining your property\'s natural character.',
    intro: 'Corrales\'s character as a rural village within the Albuquerque metro comes with unique fire management challenges. The village\'s position along the Rio Grande bosque creates a continuous riparian fuel corridor running through town, while adjacent mesa land supports dense chamisa and Russian thistle that carries grassland fire. Corrales\'s large horse properties, acequia systems, and agricultural land demand vegetation management that works within rural land use — exactly what targeted goat grazing delivers. Our herds clear bosque understory, fence lines, and overgrown parcels while providing natural weed control for the invasive species that plague the Rio Grande corridor.',
    fireHistory: [
      { name: 'Bosque fire events (recurring)', year: 2020, acres: 200 },
    ],
    primaryVegetation: ['Cottonwood/Riparian', 'Chamisa/Sage', 'Russian Thistle', 'Grass'],
    terrain: 'Rio Grande bosque corridor with cottonwood gallery forest; agricultural bottomland transitioning to mesa with chamisa and grassland',
    nearestCities: ['bernalillo', 'placitas', 'rio-rancho', 'algodones'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Can goats clear bosque understory in Corrales?', answer: 'Yes. Goats are ideal for bosque management — they clear dead wood, invasive species, and dense understory without the erosion risk of heavy equipment. They\'re especially effective against Russian olive and salt cedar that fuel bosque fires.' },
      { question: 'How do goats help Corrales horse properties?', answer: 'Goats clear fence lines, reduce weed pressure in pastures, and remove fire-prone vegetation around barns and arenas. Many Corrales horse property owners use annual goat grazing as part of their land management program.' },
      { question: 'What about Corrales acequia corridors?', answer: 'Goats are perfect for acequia maintenance — they clear vegetation from ditch banks without compacting soil or introducing chemicals. This improves water flow while reducing fire risk along these linear fuel corridors.' },
    ],
  },

  placitas: {
    cityName: 'Placitas',
    slug: 'placitas',
    county: 'Sandoval',
    population: 5000,
    elevation: 6000,
    h1: 'Placitas Wildfire Prevention: Sandia Mountain WUI Defensible Space',
    metaDescription: 'Defensible space services for Placitas properties on the Sandia Mountain wildland-urban interface. Professional goat grazing reduces fire risk.',
    intro: 'Placitas occupies one of New Mexico\'s most dramatic wildland-urban interfaces, where custom homes and rural estates nestle directly into the northern face of the Sandia Mountains. The community\'s pinon-juniper woodlands, chamisa-covered mesas, and steep rocky terrain create extreme wildfire vulnerability that\'s compounded by limited access roads and difficult evacuation routes. Properties in Placitas often back up to thousands of acres of undeveloped mountain terrain that has not burned in over a century. Our goat herds are uniquely suited to Placitas\'s challenging landscape, clearing fuel on slopes that no machine can reach.',
    fireHistory: [
      { name: 'Tunnel Spring Fire', year: 2008, acres: 1500 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Grass', 'Oak Brush'],
    terrain: 'Northern face of Sandia Mountains; steep rocky slopes with mesa-top residential areas overlooking the Rio Grande valley',
    nearestCities: ['bernalillo', 'corrales', 'cedar-crest', 'sandia-park', 'algodones'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How serious is Placitas wildfire risk?', answer: 'Extremely serious. Placitas is surrounded by dense pinon-juniper that hasn\'t burned in over a century. Limited access roads mean evacuation is difficult. Creating defensible space is the single most important thing Placitas property owners can do.' },
      { question: 'Can goats navigate Placitas\'s rocky terrain?', answer: 'Goats are natural rock climbers. They thrive on the steep, boulder-strewn slopes that define Placitas, accessing fuel loads that would be untreatable by any other method.' },
      { question: 'What about Placitas community wildfire protection?', answer: 'We work with Placitas HOAs and neighborhood groups to create community-scale fuel breaks. Treating multiple adjacent properties creates far more effective wildfire protection than individual defensible space alone.' },
    ],
  },

  'cedar-crest': {
    cityName: 'Cedar Crest',
    slug: 'cedar-crest',
    county: 'Bernalillo',
    population: 1100,
    elevation: 6800,
    h1: 'Cedar Crest Defensible Space: East Mountain Fire Protection',
    metaDescription: 'Professional goat grazing for Cedar Crest\'s forested East Mountain properties. Reduce wildfire fuel loads and create EMNRD-compliant defensible space.',
    intro: 'Cedar Crest\'s position high in the East Mountains along the Turquoise Trail places homes in dense pinon-juniper and ponderosa pine forest with decades of accumulated fuel. The 2016 Dog Head Fire, which burned nearly 18,000 acres and destroyed 24 structures just south of here, demonstrated the extreme vulnerability of East Mountain communities. Cedar Crest properties typically feature steep terrain, limited access, and continuous tree canopy — conditions that make wildfire both likely and dangerous. Our goat herds provide fuel reduction that works within Cedar Crest\'s forested character rather than against it.',
    fireHistory: [
      { name: 'Dog Head Fire (nearby)', year: 2016, acres: 17912, structures: 24 },
      { name: 'Tablazon Fire', year: 2008, acres: 10800 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Gambel Oak', 'Mountain Mahogany'],
    terrain: 'East face of the Sandia-Manzano mountain chain; steep forested slopes with narrow ridgelines and limited road access',
    nearestCities: ['sandia-park', 'tijeras', 'edgewood', 'placitas'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How close was the Dog Head Fire to Cedar Crest?', answer: 'The 2016 Dog Head Fire burned 17,912 acres just south of Cedar Crest in identical vegetation types. It destroyed 24 structures and forced widespread evacuations. Cedar Crest faces the same fire conditions.' },
      { question: 'What makes East Mountain fire risk unique?', answer: 'The East Mountains combine steep terrain, dense forest, limited road access, and strong wind patterns. Fires can move rapidly upslope through continuous fuel, and evacuation routes are limited to a few corridors.' },
      { question: 'How do goats work in Cedar Crest\'s forest?', answer: 'Goats clear understory brush, oak thickets, and juniper seedlings that create ladder fuels beneath established ponderosa pines. They reduce the ground-to-canopy fuel continuity that makes crown fires possible.' },
    ],
  },

  tijeras: {
    cityName: 'Tijeras',
    slug: 'tijeras',
    county: 'Bernalillo',
    population: 550,
    elevation: 6500,
    h1: 'Tijeras Canyon Wildfire Prevention: Defensible Space Services',
    metaDescription: 'Goat grazing for Tijeras Canyon properties. Reduce wildfire fuel in this critical East Mountain corridor where canyon winds amplify fire risk.',
    intro: 'Tijeras Canyon serves as both a geographic funnel and a fire corridor in the East Mountains, with I-40 following the canyon floor through dense pinon-juniper and ponderosa pine forests. The canyon\'s topography amplifies wind speeds and creates conditions where fire can run rapidly through continuous fuel from the canyon floor to ridgetops. Properties along Tijeras Canyon face some of the East Mountains\' highest fire risk due to this combination of terrain, fuel, and wind. Our goat herds create defensible space throughout the canyon, working on slopes and in draws that define Tijeras\'s fire-prone landscape.',
    fireHistory: [
      { name: 'Dog Head Fire (nearby)', year: 2016, acres: 17912, structures: 24 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Gambel Oak'],
    terrain: 'Narrow mountain canyon along I-40 corridor; steep canyon walls funneling wind with dense forest on both sides',
    nearestCities: ['cedar-crest', 'edgewood', 'sandia-park'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Why is Tijeras Canyon especially fire-prone?', answer: 'The canyon acts as a natural wind tunnel, accelerating fire spread. Dense vegetation on steep canyon walls creates continuous fuel from floor to ridgetop. Canyon fires can move extremely fast and cut off evacuation routes.' },
      { question: 'Can goats work on Tijeras\'s steep canyon walls?', answer: 'Absolutely. Goats are natural canyon dwellers. They clear brush and ladder fuels on slopes too steep for any equipment, accessing the exact terrain where wildfire risk is greatest.' },
      { question: 'How does Tijeras connect to regional fire risk?', answer: 'Tijeras Canyon connects the Albuquerque metro to the East Mountains. A fire running through the canyon could spread in either direction, threatening multiple communities. Fuel breaks in the canyon protect the entire corridor.' },
    ],
  },

  'angel-fire': {
    cityName: 'Angel Fire',
    slug: 'angel-fire',
    county: 'Colfax',
    population: 1300,
    elevation: 8382,
    h1: 'Angel Fire Wildfire Protection: Mountain Resort Defensible Space',
    metaDescription: 'Defensible space for Angel Fire mountain properties. Professional goat grazing reduces wildfire fuel in this Moreno Valley resort community.',
    intro: 'Angel Fire\'s position in the Moreno Valley at over 8,000 feet puts this mountain resort community in dense spruce-fir and ponderosa pine forest with extreme wildfire potential. The combination of steep mountain terrain, limited access roads, high winds, and decades of fire suppression has created dangerous fuel loads throughout the community. Angel Fire\'s mix of full-time residents and seasonal vacation properties means many structures sit unmonitored in the forest for months at a time. Our goat herds provide the ongoing fuel management that keeps Angel Fire\'s mountain properties protected.',
    fireHistory: [
      { name: 'Cimarron Fire', year: 2018, acres: 2500 },
    ],
    primaryVegetation: ['Mixed Conifer', 'Ponderosa Pine', 'Aspen', 'Mountain Meadow'],
    terrain: 'High mountain valley at 8,000+ ft surrounded by forested peaks; steep ski area terrain with meadow valleys between ridges',
    nearestCities: ['eagle-nest', 'red-river', 'taos'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What makes Angel Fire fire risk unique?', answer: 'Angel Fire combines high-elevation forest, steep terrain, limited evacuation routes, and many seasonal/unoccupied homes. The Moreno Valley can funnel wind through the community, and dense mountain forest creates extreme fire behavior.' },
      { question: 'Can goats work at Angel Fire\'s elevation?', answer: 'Yes. Our goats graze effectively at elevations up to 9,000+ feet. The mountain vegetation at Angel Fire\'s elevation — mixed conifer understory, aspen suckers, mountain mahogany — is exactly what goats browse most effectively.' },
      { question: 'How often should Angel Fire properties be grazed?', answer: 'Annual maintenance grazing is recommended. Mountain vegetation at Angel Fire\'s elevation grows vigorously during the short summer season and can rebuild fire-risk understory within one to two growing seasons.' },
    ],
  },

  espanola: {
    cityName: 'Espanola',
    slug: 'espanola',
    county: 'Rio Arriba',
    population: 10224,
    elevation: 5590,
    h1: 'Espanola Valley Defensible Space: Wildfire Fuel Reduction Services',
    metaDescription: 'Professional goat grazing for Espanola Valley properties. Reduce wildfire risk in the Rio Grande corridor with targeted vegetation management.',
    intro: 'The Espanola Valley sits at the confluence of the Rio Grande and Rio Chama, surrounded by fire-prone pinon-juniper hillsides and mesa lands that can carry wildfire directly into the valley\'s communities. The 2011 Las Conchas Fire and 2022 Hermit\'s Peak Fire both sent smoke plumes over Espanola, reminders of the wildfire risk that encircles this valley. Espanola\'s mix of agricultural land, residential neighborhoods, and commercial development creates complex fuel management needs. Our goat herds address the full range — from bosque understory to mesa-top chamisa to hillside juniper.',
    fireHistory: [
      { name: 'Las Conchas Fire (regional impact)', year: 2011, acres: 156293 },
      { name: 'Hermit\'s Peak Fire (regional impact)', year: 2022, acres: 341471 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Cottonwood/Riparian', 'Chamisa/Sage', 'Grass'],
    terrain: 'Broad valley at the confluence of the Rio Grande and Rio Chama; valley floor with agricultural land rising to pinon-juniper mesas on all sides',
    nearestCities: ['pojoaque', 'la-puebla', 'chimayo', 'los-alamos', 'abiquiu', 'dixon'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What wildfire risk does Espanola face?', answer: 'Espanola is surrounded by pinon-juniper hillsides that can carry fire into the valley from any direction. The 2011 Las Conchas Fire and 2022 Hermit\'s Peak Fire both demonstrated how quickly major fires can develop in the surrounding terrain.' },
      { question: 'Can goats clear Espanola\'s bosque areas?', answer: 'Yes. Goats excel at bosque management — clearing invasive species, dead wood, and dense understory along the Rio Grande and Rio Chama corridors without the damage heavy equipment causes to riparian soils.' },
      { question: 'Do you serve the greater Espanola Valley?', answer: 'We serve all communities in the Espanola Valley — from Ohkay Owingeh to Hernandez, and up into the surrounding foothill communities. Our central Santa Fe location puts us within 30 minutes of the entire valley.' },
    ],
  },

  'jemez-springs': {
    cityName: 'Jemez Springs',
    slug: 'jemez-springs',
    county: 'Sandoval',
    population: 280,
    elevation: 6200,
    h1: 'Jemez Springs Defensible Space: Canyon Community Fire Protection',
    metaDescription: 'Defensible space for Jemez Springs properties. Professional goat grazing protects this canyon community surrounded by fire-prone national forest.',
    intro: 'Jemez Springs occupies a narrow canyon along the Jemez River, surrounded by Jemez Mountains forest that has experienced some of New Mexico\'s most destructive wildfires. The 2011 Las Conchas Fire burned to within miles of the community, and the 2013 Thompson Ridge Fire forced evacuations. This canyon community\'s single-road access, dense forest cover, and steep terrain create a wildfire scenario where early preparation is not optional — it\'s survival. Our goat herds work in the tight canyon spaces and steep slopes that define Jemez Springs, providing fuel reduction that the community\'s geography demands.',
    fireHistory: [
      { name: 'Thompson Ridge Fire', year: 2013, acres: 24685, structures: 5 },
      { name: 'Las Conchas Fire (nearby)', year: 2011, acres: 156293, structures: 63 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Gambel Oak', 'Cottonwood/Riparian'],
    terrain: 'Narrow river canyon in the Jemez Mountains; single-road community with steep forested canyon walls and limited evacuation',
    nearestCities: ['san-ysidro', 'bernalillo', 'los-alamos', 'cochiti-lake'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How serious is Jemez Springs fire risk?', answer: 'Critical. Jemez Springs has one road in and one road out through a forested canyon. The 2013 Thompson Ridge Fire forced evacuations, and the Las Conchas Fire burned to within miles. Defensible space isn\'t optional here — it\'s survival preparation.' },
      { question: 'Can goats work in the Jemez Canyon?', answer: 'Yes. Goats are ideal for canyon work — they clear steep slopes, narrow spaces, and riverside vegetation that machinery can\'t access. They navigate the exact terrain that makes Jemez Springs so vulnerable to fire.' },
      { question: 'How does Jemez Springs compare to other mountain communities?', answer: 'Jemez Springs combines multiple risk factors: single evacuation route, canyon wind patterns, dense surrounding forest, and proximity to historically active fire areas. It\'s among the highest-risk communities in New Mexico.' },
    ],
  },

  'cochiti-lake': {
    cityName: 'Cochiti Lake',
    slug: 'cochiti-lake',
    county: 'Sandoval',
    population: 600,
    elevation: 5600,
    h1: 'Cochiti Lake Defensible Space: Wildfire Protection Near Bandelier',
    metaDescription: 'Defensible space services for Cochiti Lake properties. Protect your community adjacent to Bandelier National Monument\'s fire-prone forests.',
    intro: 'Cochiti Lake\'s proximity to Bandelier National Monument and the Jemez Mountains places this community in the path of the region\'s largest historical wildfires. The 2011 Las Conchas Fire burned through adjacent Bandelier lands, sending embers toward Cochiti communities. The area\'s pinon-juniper woodland transitions to ponderosa forest on surrounding mesas, creating continuous fuel paths from wildlands to residential areas. Our goat herds create the defensible space buffer that Cochiti Lake needs between the community and the vast forested landscape to its west.',
    fireHistory: [
      { name: 'Las Conchas Fire (nearby)', year: 2011, acres: 156293, structures: 63 },
      { name: 'Cerro Grande Fire (regional)', year: 2000, acres: 47650, structures: 235 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Grass', 'Cottonwood/Riparian'],
    terrain: 'Reservoir community on mesa land adjacent to Bandelier National Monument; pinon-covered mesas with views of the Jemez Mountains',
    nearestCities: ['la-cienega', 'los-alamos', 'white-rock', 'bernalillo', 'jemez-springs'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How does proximity to Bandelier affect Cochiti Lake fire risk?', answer: 'Bandelier\'s forests have experienced major fires including the 2011 Las Conchas Fire. Ember showers from fires in the monument can reach Cochiti Lake properties. Defensible space is the primary defense against these ember attacks.' },
      { question: 'What vegetation creates fire risk at Cochiti Lake?', answer: 'Dense pinon-juniper woodland and chamisa provide continuous fuel around the community. The transition from these fuels to the ponderosa forests on surrounding mesas creates fire pathways from wilderness to structures.' },
      { question: 'Can goats clear the pinon-juniper around Cochiti Lake?', answer: 'Goats excel at pinon-juniper management — they browse juniper seedlings, clear understory brush, and reduce ladder fuels beneath established trees. They create defensible space without removing the tree canopy that defines the landscape.' },
    ],
  },

  // ─── TIER 2: Northern NM Communities ─────────────────────────────────────

  'red-river': {
    cityName: 'Red River',
    slug: 'red-river',
    county: 'Taos',
    population: 480,
    elevation: 8671,
    h1: 'Red River Wildfire Defense: Mountain Community Defensible Space',
    metaDescription: 'Defensible space for Red River\'s forested mountain properties. Professional goat grazing reduces wildfire risk in this high-altitude ski community.',
    intro: 'Red River\'s narrow valley at over 8,600 feet sits in some of New Mexico\'s densest mountain forest, with a single road connecting this isolated ski community to the outside world. Dense spruce-fir and ponderosa stands create extreme fire risk, and the valley\'s topography can funnel wind and fire directly through town. Our goat herds provide fuel reduction in the challenging mountain terrain that defines Red River.',
    fireHistory: [
      { name: 'Taos County fires', year: 2003, acres: 5000 },
    ],
    primaryVegetation: ['Mixed Conifer', 'Spruce-Fir', 'Aspen', 'Ponderosa Pine'],
    terrain: 'Narrow high-altitude valley with single-road access; steep forested mountainsides on both flanks',
    nearestCities: ['questa', 'angel-fire', 'eagle-nest', 'taos'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What makes Red River fire risk extreme?', answer: 'Red River combines dense mountain forest, a narrow valley with single-road access, and high winds. A canyon fire could sweep through town with limited evacuation options. Defensible space is essential for every Red River property.' },
      { question: 'Can goats work at Red River\'s elevation?', answer: 'Yes. Our goats work effectively at elevations over 8,000 feet. The dense mountain understory at Red River — spruce seedlings, aspen suckers, mountain shrubs — is exactly what goats browse best.' },
      { question: 'How often should Red River properties be maintained?', answer: 'Annual grazing is recommended given Red River\'s vigorous mountain growing season. One summer of unchecked regrowth can rebuild dangerous fuel levels around structures.' },
    ],
  },

  questa: {
    cityName: 'Questa',
    slug: 'questa',
    county: 'Taos',
    population: 1770,
    elevation: 7461,
    h1: 'Questa Defensible Space: Red River Canyon Fire Protection',
    metaDescription: 'Goat grazing for Questa properties. Reduce wildfire risk at the gateway to Red River Canyon with professional defensible space services.',
    intro: 'Questa sits at the gateway to the Red River Canyon, surrounded by dense pinon-juniper and ponderosa pine forest that transitions into spruce-fir at higher elevations. The community\'s position along the Rio Grande gorge creates complex fire behavior influenced by canyon winds and varied terrain. Our goat herds address Questa\'s fuel management needs from the valley floor through the forested foothills.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Chamisa/Sage'],
    terrain: 'Rio Grande gorge edge community at the mouth of Red River Canyon; steep terrain with mixed vegetation zones',
    nearestCities: ['red-river', 'taos', 'eagle-nest'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Questa face?', answer: 'Questa is surrounded by dense forest and sits at a canyon junction where winds accelerate fire spread. The community\'s proximity to Red River Canyon and the Rio Grande gorge creates complex fire behavior patterns.' },
      { question: 'How do canyon winds affect Questa fire risk?', answer: 'Canyon winds can accelerate fire dramatically through the Red River and Rio Grande corridors. These wind patterns make defensible space essential — fire can arrive faster than expected from multiple directions.' },
      { question: 'Do you serve the greater Questa area?', answer: 'Yes. We serve Questa and the surrounding communities including the road to Red River, the Cabresto area, and properties along the Rio Grande gorge.' },
    ],
  },

  'eagle-nest': {
    cityName: 'Eagle Nest',
    slug: 'eagle-nest',
    county: 'Colfax',
    population: 310,
    elevation: 8382,
    h1: 'Eagle Nest Wildfire Prevention: Moreno Valley Defensible Space',
    metaDescription: 'Defensible space for Eagle Nest properties in the Moreno Valley. Professional goat grazing reduces wildfire fuel loads in this mountain community.',
    intro: 'Eagle Nest sits in the broad Moreno Valley at over 8,000 feet, surrounded by forested mountains on all sides. The community\'s high-altitude setting and mountain forest create significant wildfire risk, particularly during dry summers when winds sweep across the valley floor. Our goat herds provide fuel reduction throughout the Eagle Nest area, from valley-floor grasslands to forested mountain slopes.',
    fireHistory: [],
    primaryVegetation: ['Ponderosa Pine', 'Mountain Meadow', 'Aspen', 'Mixed Conifer'],
    terrain: 'Broad high-altitude valley floor at 8,000+ ft surrounded by forested mountains; exposed to valley winds',
    nearestCities: ['angel-fire', 'red-river', 'questa', 'taos'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk exists in Eagle Nest?', answer: 'Eagle Nest is surrounded by forested mountains with decades of fuel accumulation. Valley winds can drive fire rapidly across grassland and into forest. The community\'s isolation means fire response times are long.' },
      { question: 'Can goats manage Eagle Nest\'s mountain meadows?', answer: 'Yes. Goats reduce the fine fuel loads in mountain meadows that carry fast-moving grass fires, while also clearing the forest understory at the meadow-forest interface where fire transitions from grass to tree canopy.' },
      { question: 'How do you get goats to Eagle Nest?', answer: 'We transport our herds via livestock trailer. Eagle Nest is within our extended service area and we schedule multi-property visits to serve the Moreno Valley communities efficiently.' },
    ],
  },

  mora: {
    cityName: 'Mora',
    slug: 'mora',
    county: 'Mora',
    population: 1100,
    elevation: 7200,
    h1: 'Mora Defensible Space: Hermit\'s Peak Fire Recovery & Protection',
    metaDescription: 'Defensible space for Mora after the Hermit\'s Peak Fire. Professional goat grazing provides ongoing fuel management for this recovering community.',
    intro: 'Mora was ground zero for the 2022 Hermit\'s Peak/Calf Canyon Fire, which devastated this historic farming and ranching community. The fire burned through dense ponderosa pine and mixed conifer forest surrounding the Mora Valley, destroying hundreds of structures and changing the landscape fundamentally. Recovery efforts are ongoing, but post-fire regrowth is already creating new fuel loads. Our goat herds provide the ongoing vegetation management that Mora needs to maintain fire-safe conditions as the landscape recovers.',
    fireHistory: [
      { name: 'Hermit\'s Peak/Calf Canyon Fire', year: 2022, acres: 341471, structures: 903 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Grass', 'Gambel Oak'],
    terrain: 'Mountain valley in the Sangre de Cristo foothills; recovering post-fire landscape with active regrowth',
    nearestCities: ['las-vegas-nm', 'ribera', 'pecos'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How does goat grazing help Mora\'s fire recovery?', answer: 'Post-fire regrowth creates dense new understory within 2-3 years. Goats manage this regrowth to maintain fuel reduction, prevent new ladder fuel accumulation, and support landscape recovery without further disturbing damaged soils.' },
      { question: 'Is Mora still at fire risk after the Hermit\'s Peak Fire?', answer: 'Yes. Many surrounding areas didn\'t burn and retain extreme fuel loads. Regrowth in burned areas is creating new fuel. And the watershed damage from the fire increases flood and debris flow risk. Ongoing vegetation management is essential.' },
      { question: 'What does FEMA Hermit\'s Peak recovery cover?', answer: 'FEMA\'s Hermit\'s Peak/Calf Canyon Claims Office covers losses from the fire. While that addresses past damage, future fire protection through defensible space is the property owner\'s responsibility. Goat grazing is a cost-effective approach.' },
    ],
  },

  bernalillo: {
    cityName: 'Bernalillo',
    slug: 'bernalillo',
    county: 'Sandoval',
    population: 10638,
    elevation: 5050,
    h1: 'Bernalillo Defensible Space: Rio Grande Corridor Fire Protection',
    metaDescription: 'Goat grazing for Bernalillo properties along the Rio Grande corridor. Reduce wildfire risk from bosque fuels and adjacent mesa vegetation.',
    intro: 'Bernalillo\'s position along the Rio Grande places this growing town at the intersection of riparian bosque forest and pinon-juniper mesa lands, creating diverse wildfire fuel conditions. The bosque corridor running through town carries periodic fire, while adjacent mesa vegetation can bring wildfire from the surrounding landscape directly into residential areas. Our goat herds manage both environments, clearing bosque understory and mesa brush to create defensible space for Bernalillo properties.',
    fireHistory: [
      { name: 'Bosque fire events (recurring)', year: 2019, acres: 100 },
    ],
    primaryVegetation: ['Cottonwood/Riparian', 'Pinon-Juniper', 'Chamisa/Sage', 'Grass'],
    terrain: 'Rio Grande valley town with bosque corridor; residential areas transition to pinon-juniper mesas east of the river',
    nearestCities: ['placitas', 'corrales', 'algodones', 'cochiti-lake', 'rio-rancho'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Bernalillo face?', answer: 'Bernalillo faces dual fire risk: bosque fires along the Rio Grande corridor and brush fires from adjacent pinon-juniper mesas. Bosque fires are especially dangerous because the riparian corridor runs directly through populated areas.' },
      { question: 'Can goats help with Bernalillo bosque management?', answer: 'Yes. Goats are excellent bosque managers — they clear invasive species, dead wood, and dense understory without damaging riparian soils. They\'re the most effective method for maintaining fire-safe conditions in cottonwood gallery forest.' },
      { question: 'Do you work with Bernalillo HOAs?', answer: 'Yes. We offer bulk HOA contracts throughout Bernalillo for common area and individual property fuel reduction. Community-scale treatment creates interconnected defensible space that protects entire neighborhoods.' },
    ],
  },

  chimayo: {
    cityName: 'Chimayo',
    slug: 'chimayo',
    county: 'Santa Fe/Rio Arriba',
    population: 3200,
    elevation: 6100,
    h1: 'Chimayo Defensible Space: Historic Village Fire Protection',
    metaDescription: 'Culturally sensitive defensible space for Chimayo properties. Professional goat grazing reduces fire risk while respecting this historic community\'s heritage.',
    intro: 'Chimayo\'s status as one of New Mexico\'s most treasured historic communities brings fire management challenges unique to centuries-old villages. Traditional adobe and wood-frame structures, narrow acequia-lined roads, and historic orchards interspersed with fire-prone pinon-juniper and chamisa require defensible space approaches that preserve cultural character while reducing wildfire risk. Our goat herds provide exactly this balance, working within Chimayo\'s historic landscape to clear fire-prone vegetation without disturbing the cultural resources that make this community irreplaceable.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Cottonwood/Riparian', 'Chamisa/Sage', 'Orchard'],
    terrain: 'Historic farming valley in the Sangre de Cristo foothills; acequia-irrigated orchards surrounded by pinon-covered hills',
    nearestCities: ['espanola', 'nambe', 'truchas', 'la-puebla', 'dixon'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How do you work in Chimayo\'s historic areas?', answer: 'Goat grazing is the most culturally sensitive fuel reduction method available. No heavy equipment, no chemical application, no ground disturbance. Goats clear fire-prone vegetation while preserving Chimayo\'s historic structures, acequias, and orchard trees.' },
      { question: 'What fire risk does Chimayo face?', answer: 'Chimayo\'s wooden structures, narrow roads, and dense surrounding vegetation create significant fire vulnerability. Pinon-juniper hillsides can carry fire into the community, and limited access complicates evacuation and firefighting.' },
      { question: 'Can goats work around Chimayo\'s orchards?', answer: 'Yes. We use portable fencing to keep goats out of fruit orchards while clearing surrounding fuel. Goats are especially effective at removing the chamisa and invasive weeds that encroach on traditional agricultural areas.' },
    ],
  },

  dixon: {
    cityName: 'Dixon',
    slug: 'dixon',
    county: 'Rio Arriba',
    population: 1200,
    elevation: 6100,
    h1: 'Dixon Defensible Space: Embudo Valley Fire Protection',
    metaDescription: 'Goat grazing for Dixon and Embudo Valley properties. Reduce wildfire risk in this farming community with professional vegetation management.',
    intro: 'Dixon\'s farming community in the Embudo Valley faces growing wildfire risk as pinon-juniper woodland and chamisa encroach on traditional agricultural land. The valley\'s position between fire-prone foothills and the Rio Grande gorge creates complex wind patterns that can drive fire rapidly through the community. Our goat herds provide fuel reduction that respects Dixon\'s agricultural character while creating the defensible space this valley community needs.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Cottonwood/Riparian', 'Orchard'],
    terrain: 'Embudo River valley farming community; irrigated bottomland flanked by pinon-covered foothills',
    nearestCities: ['espanola', 'penasco', 'chimayo', 'taos'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Dixon face?', answer: 'Dixon is surrounded by pinon-juniper woodland that can carry fire into the agricultural valley. The Embudo Valley\'s wind patterns can accelerate fire spread, and limited road access complicates evacuation.' },
      { question: 'Can goats help Dixon farmers with weed control?', answer: 'Yes. Goats provide chemical-free weed control for fence lines, ditch banks, and fallow fields. They\'re especially effective against invasive species that compete with crops and create fire fuel.' },
      { question: 'Do you serve the Embudo Valley area?', answer: 'We serve Dixon, Embudo, and surrounding communities throughout the Embudo Valley. Our central location makes regular service visits efficient for the entire corridor.' },
    ],
  },

  penasco: {
    cityName: 'Penasco',
    slug: 'penasco',
    county: 'Taos',
    population: 600,
    elevation: 7600,
    h1: 'Penasco Wildfire Protection: Mountain Community Defensible Space',
    metaDescription: 'Defensible space for Penasco properties in the Sangre de Cristo foothills. Professional goat grazing reduces wildfire fuel in this mountain village.',
    intro: 'Penasco\'s mountain village sits where irrigated farmland meets dense ponderosa pine and mixed conifer forest in the Sangre de Cristo foothills. The community\'s elevation and forested surroundings create serious wildfire exposure, while traditional agricultural practices and limited infrastructure make fire response challenging. Our goat herds create defensible space that works within Penasco\'s mountain village character.',
    fireHistory: [],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Pinon-Juniper', 'Chamisa/Sage'],
    terrain: 'Mountain village in the Sangre de Cristo foothills; irrigated valley floor rising to dense forest on surrounding slopes',
    nearestCities: ['dixon', 'taos', 'truchas', 'chimayo'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What wildfire risk does Penasco face?', answer: 'Penasco is surrounded by dense mountain forest with decades of fire suppression. The community\'s single-road access and forested terrain create conditions where wildfire can arrive quickly and evacuation is limited.' },
      { question: 'Can goats handle Penasco\'s mountain terrain?', answer: 'Yes. Our goats thrive on the steep, forested slopes that surround Penasco. They clear the understory brush and ladder fuels that carry ground fires into the tree canopy.' },
      { question: 'How do you work around Penasco\'s irrigated fields?', answer: 'We use portable fencing to direct goats away from crops and irrigated pastures while clearing fire-prone vegetation on surrounding hillsides and along fence lines.' },
    ],
  },

  abiquiu: {
    cityName: 'Abiquiu',
    slug: 'abiquiu',
    county: 'Rio Arriba',
    population: 250,
    elevation: 6040,
    h1: 'Abiquiu Defensible Space: Chama River Valley Fire Protection',
    metaDescription: 'Goat grazing for Abiquiu and Chama River Valley properties. Professional defensible space in Georgia O\'Keeffe country.',
    intro: 'Abiquiu\'s dramatic landscape along the Chama River — the red and white cliffs that inspired Georgia O\'Keeffe — also creates distinct wildfire challenges. Pinon-juniper woodland and chamisa cover the mesas above the river valley, while cottonwood bosque lines the Chama corridor. This combination of fuels, wind, and terrain places Abiquiu properties at meaningful fire risk. Our goat herds provide fuel reduction that preserves the landscape character that makes Abiquiu extraordinary.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Cottonwood/Riparian', 'Grass'],
    terrain: 'Chama River valley with colorful sandstone formations; mesa-top land above river bottoms with canyon exposures',
    nearestCities: ['espanola', 'ojo-caliente', 'chama'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk exists around Abiquiu?', answer: 'Abiquiu\'s mesa-top pinon-juniper and valley-floor bosque create two distinct fire environments. Wind can drive fires rapidly across the mesa, while bosque fires threaten properties along the Chama River corridor.' },
      { question: 'Can goats work on Abiquiu\'s mesas?', answer: 'Yes. Goats navigate Abiquiu\'s mesa terrain effectively, clearing pinon-juniper understory and chamisa on the flat and rolling mesa-top areas where most residential properties are located.' },
      { question: 'Do you serve Ghost Ranch and the Abiquiu area?', answer: 'Yes. We serve the greater Abiquiu area including communities along the Chama River from Abiquiu Dam to Medanales. Our service area extends throughout northern Rio Arriba County.' },
    ],
  },

  // ─── TIER 2: East Mountains & Sandia Area ────────────────────────────────

  'sandia-park': {
    cityName: 'Sandia Park',
    slug: 'sandia-park',
    county: 'Bernalillo',
    population: 300,
    elevation: 7200,
    h1: 'Sandia Park Defensible Space: Mountain Forest Fire Protection',
    metaDescription: 'Defensible space for Sandia Park\'s forested properties. Professional goat grazing reduces wildfire fuel in the East Mountains.',
    intro: 'Sandia Park\'s homes nestle into dense ponderosa pine and mixed conifer forest on the eastern face of the Sandia Mountains. Properties here interface directly with tens of thousands of acres of national forest — creating some of the East Mountains\' highest wildfire exposure. The 2016 Dog Head Fire demonstrated how quickly similar terrain can burn. Our goat herds clear the understory fuel that creates fire pathways from the forest to your home.',
    fireHistory: [
      { name: 'Dog Head Fire (nearby)', year: 2016, acres: 17912, structures: 24 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Gambel Oak', 'Pinon-Juniper'],
    terrain: 'Eastern slope of Sandia Mountains; steep forested terrain with homes built into dense mountain forest',
    nearestCities: ['cedar-crest', 'tijeras', 'placitas', 'edgewood'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What makes Sandia Park fire risk extreme?', answer: 'Homes are built directly in dense mountain forest with decades of fuel accumulation. The steep terrain accelerates upslope fire movement. Limited road access means slow evacuation. Defensible space is the primary protection.' },
      { question: 'Can goats work in Sandia Park\'s steep forest?', answer: 'Yes. Goats clear understory brush and ladder fuels on slopes too steep for machinery, creating defensible space within the established forest canopy. They\'re the ideal tool for Sandia Park\'s terrain.' },
      { question: 'How does Sandia Park relate to the Dog Head Fire?', answer: 'The 2016 Dog Head Fire burned 17,912 acres in identical vegetation just south of Sandia Park. It demonstrated that East Mountain communities face extreme crown fire risk when understory fuels are not managed.' },
    ],
  },

  algodones: {
    cityName: 'Algodones',
    slug: 'algodones',
    county: 'Sandoval',
    population: 600,
    elevation: 5200,
    h1: 'Algodones Defensible Space: Rio Grande Bosque Fire Protection',
    metaDescription: 'Goat grazing for Algodones properties along the Rio Grande. Reduce bosque fire risk with professional vegetation management.',
    intro: 'Algodones sits along the Rio Grande bosque between Bernalillo and Santa Domingo, where cottonwood gallery forest and adjacent mesa vegetation create recurring fire risk. The bosque corridor running through the community carries seasonal fire, driven by accumulated dead wood and invasive species. Our goat herds provide targeted clearing of bosque understory and mesa brush.',
    fireHistory: [],
    primaryVegetation: ['Cottonwood/Riparian', 'Chamisa/Sage', 'Grass'],
    terrain: 'Rio Grande valley community; bosque corridor flanked by mesa land',
    nearestCities: ['bernalillo', 'placitas', 'cochiti-lake', 'corrales'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Algodones face?', answer: 'The Rio Grande bosque running through Algodones carries periodic wildfire fueled by dead cottonwood, salt cedar, and Russian olive. Adjacent mesa chamisa adds additional fuel. Bosque fires in the corridor threaten properties on both sides of the river.' },
      { question: 'Can goats manage bosque vegetation in Algodones?', answer: 'Yes. Goats are ideal for bosque management — clearing invasive species and dead understory without the soil damage that heavy equipment causes in riparian areas.' },
      { question: 'How often should Algodones bosque areas be grazed?', answer: 'Annual grazing is recommended. The bosque accumulates new fuel each year from fallen branches, leaf litter, and invasive species growth. Regular goat grazing keeps fuel loads at manageable levels.' },
    ],
  },

  'rio-rancho': {
    cityName: 'Rio Rancho',
    slug: 'rio-rancho',
    county: 'Sandoval',
    population: 104046,
    elevation: 5300,
    h1: 'Rio Rancho Defensible Space: Mesa & Grassland Fire Protection',
    metaDescription: 'Goat grazing for Rio Rancho properties. Reduce wildfire fuel on mesa lots and undeveloped land throughout New Mexico\'s third-largest city.',
    intro: 'Rio Rancho\'s rapid growth has placed thousands of homes adjacent to undeveloped mesa land covered in chamisa, tumbleweeds, and invasive grasses that carry fast-moving wildfire. The city\'s western edge interfaces with vast tracts of open rangeland where wind-driven grass fires can develop with little warning. Vacant lots throughout the city accumulate fire-prone vegetation that threatens neighboring structures. Our goat herds provide efficient fuel reduction for both individual properties and HOA common areas across Rio Rancho.',
    fireHistory: [
      { name: 'Mesa fires (recurring)', year: 2020, acres: 500 },
    ],
    primaryVegetation: ['Chamisa/Sage', 'Grass', 'Russian Thistle'],
    terrain: 'High desert mesa west of the Rio Grande; flat to gently rolling with arroyos and exposed ridgelines',
    nearestCities: ['corrales', 'bernalillo', 'placitas'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Does Rio Rancho really have wildfire risk?', answer: 'Yes. Rio Rancho\'s undeveloped mesa land accumulates chamisa, tumbleweeds, and grass that carry fast-moving fire. Wind-driven grass fires can move at 10-15 mph across the mesa, threatening homes at the urban-wildland edge.' },
      { question: 'What about Rio Rancho vacant lots?', answer: 'Vacant lots are a significant fire risk in Rio Rancho. Accumulated vegetation creates fuel islands within neighborhoods. Goat grazing efficiently clears vacant lots while naturally improving soil health.' },
      { question: 'Can goats help Rio Rancho HOAs?', answer: 'Yes. We offer bulk HOA contracts for Rio Rancho communities to manage common areas, arroyos, and vacant lots. Community-scale treatment creates interconnected fuel breaks that protect entire neighborhoods.' },
    ],
  },

  // ─── TIER 2: Additional Northern & Mountain Communities ──────────────────

  'la-puebla': {
    cityName: 'La Puebla',
    slug: 'la-puebla',
    county: 'Santa Fe/Rio Arriba',
    population: 800,
    elevation: 6000,
    h1: 'La Puebla Defensible Space: Pojoaque Valley Fire Protection',
    metaDescription: 'Goat grazing for La Puebla properties in the Pojoaque Valley. Reduce wildfire fuel with professional vegetation management.',
    intro: 'La Puebla\'s farming community along the Pojoaque River faces wildfire risk from surrounding pinon-juniper hillsides and chamisa-covered mesa land. The community\'s traditional agricultural character and acequia systems require defensible space approaches that work within established land use patterns. Our goat herds clear fire-prone vegetation while respecting La Puebla\'s agricultural landscape.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Cottonwood/Riparian'],
    terrain: 'Pojoaque River valley farming community; irrigated bottomland flanked by pinon-covered hills',
    nearestCities: ['pojoaque', 'nambe', 'espanola', 'chimayo', 'tesuque'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does La Puebla face?', answer: 'La Puebla is flanked by pinon-juniper hillsides that can carry fire into the agricultural valley. Wind channeling through the Pojoaque drainage accelerates fire spread toward structures.' },
      { question: 'Can goats work around La Puebla\'s farms?', answer: 'Yes. We use portable fencing to direct goats to fire-prone areas while avoiding crops and irrigated pastures. Goats are ideal for clearing fence lines, ditch banks, and buffer zones between farmland and wildlands.' },
      { question: 'How does La Puebla connect to the ecosystem?', answer: 'La Puebla properties can get a free wildfire risk assessment at FireReady.ai, then connect with us for goat grazing. Our assessments help prioritize which areas of your property need fuel reduction first.' },
    ],
  },

  ribera: {
    cityName: 'Ribera',
    slug: 'ribera',
    county: 'San Miguel',
    population: 350,
    elevation: 6400,
    h1: 'Ribera Defensible Space: Upper Pecos Valley Fire Protection',
    metaDescription: 'Goat grazing for Ribera and upper Pecos Valley properties. Defensible space services for communities affected by the Hermit\'s Peak Fire.',
    intro: 'Ribera sits in the upper Pecos River valley below the communities most devastated by the 2022 Hermit\'s Peak/Calf Canyon Fire. Dense pinon-juniper and ponderosa forest surround this small community, and the fire demonstrated how rapidly flames can move through the valley. Our goat herds provide the fuel reduction Ribera needs to protect against future fire events.',
    fireHistory: [
      { name: 'Hermit\'s Peak/Calf Canyon Fire (nearby)', year: 2022, acres: 341471, structures: 903 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Cottonwood/Riparian'],
    terrain: 'Upper Pecos River valley; forested foothills with river corridor and scattered ranches',
    nearestCities: ['pecos', 'las-vegas-nm', 'mora'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How close was the Hermit\'s Peak Fire to Ribera?', answer: 'The fire burned in the watersheds above Ribera and threatened communities throughout the upper Pecos Valley. Ribera\'s surrounding vegetation is identical to what burned, making defensible space critical.' },
      { question: 'Can goats help with Ribera\'s post-fire landscape?', answer: 'Yes. Goats manage post-fire regrowth and maintain fuel reduction in unburned areas. They\'re ideal for the ongoing vegetation management that the upper Pecos Valley needs.' },
      { question: 'How do you serve the Ribera area?', answer: 'Ribera is within our extended service area along the I-25 corridor. We schedule multi-property visits to serve upper Pecos Valley communities efficiently.' },
    ],
  },

  montezuma: {
    cityName: 'Montezuma',
    slug: 'montezuma',
    county: 'San Miguel',
    population: 200,
    elevation: 6700,
    h1: 'Montezuma Defensible Space: Gallinas Canyon Fire Protection',
    metaDescription: 'Goat grazing for Montezuma properties. Protect this historic Gallinas Canyon community from wildfire with targeted vegetation management.',
    intro: 'Montezuma\'s historic community in the Gallinas Canyon — home to the United World College and the Montezuma Castle — sits in dense ponderosa and mixed conifer forest that burned catastrophically during the 2022 Hermit\'s Peak Fire. The Gallinas watershed above Montezuma supplies Las Vegas NM\'s drinking water and was severely damaged by the fire. Our goat herds provide the ongoing fuel management this recovering forest community needs.',
    fireHistory: [
      { name: 'Hermit\'s Peak/Calf Canyon Fire', year: 2022, acres: 341471, structures: 903 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Gambel Oak', 'Cottonwood/Riparian'],
    terrain: 'Gallinas Canyon community surrounded by dense mountain forest; steep canyon terrain with limited access',
    nearestCities: ['las-vegas-nm', 'pecos', 'ribera'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How was Montezuma affected by the Hermit\'s Peak Fire?', answer: 'The fire burned through the Gallinas watershed directly above Montezuma, threatening the community and devastating the forest and water supply. Post-fire recovery requires ongoing vegetation management to prevent repeat catastrophe.' },
      { question: 'Can goats work in the Gallinas Canyon?', answer: 'Yes. Goats navigate steep canyon terrain effectively, clearing post-fire regrowth and remaining fuel loads on slopes where machinery can\'t operate. They\'re ideal for Montezuma\'s confined canyon setting.' },
      { question: 'How does ongoing grazing help post-fire recovery?', answer: 'Goats manage aggressive post-fire regrowth that would otherwise rebuild dangerous fuel loads within a few years. Annual grazing maintains fire-safe conditions while allowing the forest ecosystem to recover naturally.' },
    ],
  },

  cloudcroft: {
    cityName: 'Cloudcroft',
    slug: 'cloudcroft',
    county: 'Otero',
    population: 700,
    elevation: 8663,
    h1: 'Cloudcroft Wildfire Protection: Sacramento Mountain Defensible Space',
    metaDescription: 'Defensible space for Cloudcroft\'s mountain properties. Professional goat grazing reduces wildfire fuel in the Sacramento Mountains.',
    intro: 'Cloudcroft perches at nearly 9,000 feet in the Sacramento Mountains, surrounded by dense mixed conifer forest with extreme fire potential. This mountain resort community faces many of the same risks that devastated Ruidoso 30 miles north during the 2022 McBride Fire. Limited evacuation routes, steep terrain, and decades of fire suppression create conditions where wildfire can arrive with devastating speed. Our goat herds provide the fuel reduction Cloudcroft needs in its challenging mountain environment.',
    fireHistory: [
      { name: 'McBride Fire (nearby Ruidoso)', year: 2022, acres: 6159, structures: 207 },
      { name: 'Scott Able Fire', year: 2000, acres: 15000 },
    ],
    primaryVegetation: ['Mixed Conifer', 'Ponderosa Pine', 'Gambel Oak', 'Aspen'],
    terrain: 'High mountain community at 8,600+ ft in the Sacramento Mountains; steep terrain with dense forest and limited road access',
    nearestCities: ['ruidoso', 'alto'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Cloudcroft face?', answer: 'Cloudcroft combines dense mountain forest, steep terrain, limited evacuation routes, and strong mountain winds. The 2022 McBride Fire in nearby Ruidoso showed what happens when fire hits a mountain community — Cloudcroft faces identical conditions.' },
      { question: 'Can goats work at Cloudcroft\'s elevation?', answer: 'Yes. Our goats graze effectively at 9,000+ feet. The dense mountain understory — mixed conifer seedlings, Gambel oak, mountain shrubs — is exactly what goats browse most effectively.' },
      { question: 'How does Cloudcroft compare to Ruidoso\'s fire risk?', answer: 'The two communities share nearly identical risk profiles: same forest types, similar terrain, both have limited evacuation. The McBride Fire should be Cloudcroft\'s wake-up call — defensible space cannot wait.' },
    ],
  },

  alto: {
    cityName: 'Alto',
    slug: 'alto',
    county: 'Lincoln',
    population: 1100,
    elevation: 7200,
    h1: 'Alto Defensible Space: Ruidoso Area Mountain Fire Protection',
    metaDescription: 'Goat grazing for Alto properties near Ruidoso. Professional defensible space after the McBride and Little Bear fires.',
    intro: 'Alto sits in the forested mountains near Ruidoso, sharing the same fire environment that produced the devastating McBride Fire in 2022 and the Little Bear Fire in 2012. This resort community\'s custom homes and golf course properties are built within dense ponderosa pine and mixed conifer forest. Our goat herds provide the fuel reduction Alto properties need to avoid repeating Ruidoso\'s fire history.',
    fireHistory: [
      { name: 'McBride Fire (nearby)', year: 2022, acres: 6159, structures: 207 },
      { name: 'Little Bear Fire', year: 2012, acres: 44330, structures: 242 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Gambel Oak'],
    terrain: 'Mountain resort community in forested hills adjacent to Ruidoso; rolling terrain with dense tree cover',
    nearestCities: ['ruidoso', 'cloudcroft', 'capitan'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How does Alto relate to the Ruidoso fires?', answer: 'Alto shares the same forest, terrain, and fire conditions that produced the McBride and Little Bear fires in nearby Ruidoso. The same fire types that destroyed over 400 structures in Ruidoso could reach Alto.' },
      { question: 'What defensible space does Alto need?', answer: 'EMNRD recommends Zone 1 (0-30 ft) and Zone 2 (30-100 ft) defensible space around structures. In Alto\'s dense forest, this means significant understory clearing — exactly what goat grazing delivers efficiently.' },
      { question: 'Can goats work around Alto\'s golf course properties?', answer: 'Yes. We use portable fencing to direct goats to forested areas adjacent to maintained landscapes. Goats clear the wildland fuel that threatens structures while leaving managed turf and landscaping untouched.' },
    ],
  },

  capitan: {
    cityName: 'Capitan',
    slug: 'capitan',
    county: 'Lincoln',
    population: 1500,
    elevation: 6560,
    h1: 'Capitan Defensible Space: Lincoln County Wildfire Protection',
    metaDescription: 'Goat grazing for Capitan properties. Professional defensible space in the birthplace of Smokey Bear — where fire risk remains very real.',
    intro: 'Capitan — birthplace of Smokey Bear — knows wildfire intimately. The original Smokey was rescued from a 1950 fire in the Capitan Mountains that still loom over town. Today, dense pinon-juniper woodland and ponderosa forest create significant fire risk for this Lincoln County community. The 2012 Little Bear Fire burned over 44,000 acres nearby. Our goat herds provide the ongoing fuel management that keeps Capitan properties protected.',
    fireHistory: [
      { name: 'Little Bear Fire (nearby)', year: 2012, acres: 44330, structures: 242 },
      { name: 'Capitan Gap Fire', year: 1950, acres: 17000 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Ponderosa Pine', 'Grass'],
    terrain: 'Valley town beneath the Capitan Mountains; pinon-juniper foothills transitioning to ponderosa forest above',
    nearestCities: ['ruidoso', 'alto'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Capitan face?', answer: 'Capitan sits beneath the Capitan Mountains in dense pinon-juniper and ponderosa forest. The 2012 Little Bear Fire burned 44,000 acres nearby, and the town\'s Smokey Bear heritage began with a devastating 1950 fire in these same mountains.' },
      { question: 'How do goats help Capitan\'s defensible space?', answer: 'Goats clear pinon-juniper understory, ladder fuels, and invasive grasses that carry fire toward structures. They create the fuel breaks between wildlands and structures that Capitan needs.' },
      { question: 'Do you serve all of Lincoln County?', answer: 'We serve Capitan, Alto, Ruidoso, and surrounding Lincoln County communities. Our herds are transported to the area for multi-property projects, making the most of each trip.' },
    ],
  },

  // ─── TIER 2: Smaller Northern NM Communities ─────────────────────────────

  'arroyo-seco': {
    cityName: 'Arroyo Seco',
    slug: 'arroyo-seco',
    county: 'Taos',
    population: 2500,
    elevation: 7400,
    h1: 'Arroyo Seco Defensible Space: Taos Mountain Fire Protection',
    metaDescription: 'Goat grazing for Arroyo Seco properties near Taos Ski Valley. Professional defensible space in the Sangre de Cristo foothills.',
    intro: 'Arroyo Seco\'s position between Taos and the ski valley places this community in a forested mountain corridor where ponderosa pine and mixed conifer create extreme wildfire fuel. Properties here back up directly to national forest, and the road to Taos Ski Valley means fire in the mountains above could cut off access. Our goat herds create defensible space in the challenging terrain that defines Arroyo Seco.',
    fireHistory: [],
    primaryVegetation: ['Ponderosa Pine', 'Pinon-Juniper', 'Mixed Conifer', 'Chamisa/Sage'],
    terrain: 'Mountain corridor between Taos and Taos Ski Valley; steep forested terrain with irrigated valley floor',
    nearestCities: ['taos', 'ranchos-de-taos', 'questa'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How does Arroyo Seco\'s mountain location affect fire risk?', answer: 'Arroyo Seco sits in a forested corridor leading to Taos Ski Valley. Dense forest on steep slopes creates extreme fire behavior potential, and the corridor\'s topography can funnel wind and fire through the community.' },
      { question: 'Can goats work near Arroyo Seco\'s acequia areas?', answer: 'Yes. Goats clear fire-prone vegetation along acequia corridors and agricultural boundaries without the chemical or mechanical impacts that damage traditional irrigation systems.' },
      { question: 'What vegetation do goats target in Arroyo Seco?', answer: 'Goats browse chamisa, rabbitbrush, juniper seedlings, Gambel oak, and forest understory that creates ladder fuels. They\'re especially effective at clearing the transition zone between irrigated land and forested slopes.' },
    ],
  },

  'ranchos-de-taos': {
    cityName: 'Ranchos de Taos',
    slug: 'ranchos-de-taos',
    county: 'Taos',
    population: 2500,
    elevation: 6950,
    h1: 'Ranchos de Taos Defensible Space: Historic Community Fire Protection',
    metaDescription: 'Culturally sensitive goat grazing for Ranchos de Taos. Defensible space that respects this historic community\'s adobe heritage.',
    intro: 'Ranchos de Taos — home to the San Francisco de Asis Church made famous by Georgia O\'Keeffe and Ansel Adams — requires fire protection that honors its historic character. Surrounding pinon-juniper and chamisa create wildfire fuel loads that threaten adobe and wood structures throughout this centuries-old community. Our goat herds provide defensible space creation that works within Ranchos de Taos\'s cultural landscape.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Grass'],
    terrain: 'High-altitude valley south of Taos; mesa-top community with views of the Sangre de Cristo Mountains',
    nearestCities: ['taos', 'arroyo-seco'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How do you protect historic Ranchos de Taos structures?', answer: 'Goat grazing is the most heritage-sensitive fire protection method. No heavy equipment near adobe walls, no chemicals near historic sites. Goats clear surrounding vegetation while preserving the structures that define this community.' },
      { question: 'What fire risk does Ranchos de Taos face?', answer: 'Surrounding pinon-juniper and chamisa create continuous fuel that can carry fire to historic structures. The combination of wooden vigas, dry vegetation, and wind make defensible space essential.' },
      { question: 'Can goats work around Ranchos de Taos acequias?', answer: 'Yes. Goats clear ditch banks and surrounding fuel without damaging acequia infrastructure. They\'re ideal for maintaining the traditional agricultural landscape while reducing fire risk.' },
    ],
  },

  truchas: {
    cityName: 'Truchas',
    slug: 'truchas',
    county: 'Rio Arriba',
    population: 600,
    elevation: 8050,
    h1: 'Truchas Defensible Space: High Mountain Village Fire Protection',
    metaDescription: 'Goat grazing for Truchas properties. Defensible space for this historic Sangre de Cristo mountain village.',
    intro: 'Truchas sits on a ridge at over 8,000 feet with sweeping views of the Sangre de Cristo peaks — and direct exposure to the mountain forests that produce New Mexico\'s largest wildfires. This historic farming and weaving village is surrounded by dense ponderosa and mixed conifer forest. The 2022 Hermit\'s Peak Fire burned in identical terrain just miles away. Our goat herds create defensible space on the steep mountain slopes that surround Truchas.',
    fireHistory: [
      { name: 'Hermit\'s Peak/Calf Canyon Fire (nearby)', year: 2022, acres: 341471 },
    ],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Aspen', 'Chamisa/Sage'],
    terrain: 'High ridgetop village at 8,000+ ft; steep mountain slopes with dense forest on all sides',
    nearestCities: ['chimayo', 'penasco', 'dixon'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What makes Truchas fire risk severe?', answer: 'Truchas sits on a mountain ridge surrounded by dense forest. At 8,000+ feet, fire behavior can be extreme with upslope winds. Limited road access makes evacuation difficult. The Hermit\'s Peak Fire burned in identical terrain nearby.' },
      { question: 'Can goats work at Truchas\'s elevation?', answer: 'Yes. Our goats are effective at 8,000+ feet. The mountain understory — mixed conifer seedlings, Gambel oak, mountain shrubs — is exactly what goats browse best.' },
      { question: 'How do you serve Truchas from Santa Fe?', answer: 'Truchas is approximately 45 minutes from our Santa Fe base. We schedule multi-day projects to serve Truchas and surrounding high mountain communities efficiently.' },
    ],
  },

  'ojo-caliente': {
    cityName: 'Ojo Caliente',
    slug: 'ojo-caliente',
    county: 'Taos',
    population: 1100,
    elevation: 6300,
    h1: 'Ojo Caliente Defensible Space: Hot Springs Valley Fire Protection',
    metaDescription: 'Goat grazing for Ojo Caliente properties. Reduce wildfire fuel in the Rio Grande corridor with professional vegetation management.',
    intro: 'Ojo Caliente\'s hot springs community sits where the Ojo Caliente River meets the Rio Grande rift, surrounded by pinon-juniper covered mesas and chamisa-filled arroyos. The area\'s dry conditions, wind exposure, and extensive wildland vegetation create meaningful fire risk for both the historic resort properties and surrounding residential areas. Our goat herds provide fuel reduction across Ojo Caliente\'s varied terrain.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Grass', 'Cottonwood/Riparian'],
    terrain: 'River valley at the edge of the Rio Grande rift; mesa lands with pinon-juniper and arroyos draining to the river',
    nearestCities: ['espanola', 'abiquiu', 'taos', 'dixon'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Ojo Caliente face?', answer: 'Ojo Caliente is surrounded by pinon-juniper mesa land and chamisa-filled arroyos that carry fire toward structures. Wind patterns in the Rio Grande rift can drive fires rapidly across the landscape.' },
      { question: 'Can goats manage Ojo Caliente\'s mesa vegetation?', answer: 'Yes. Goats effectively clear pinon-juniper understory and chamisa on mesa-top properties, creating defensible space in the rolling terrain that characterizes the Ojo Caliente area.' },
      { question: 'Do you serve the Ojo Caliente area regularly?', answer: 'Yes. Ojo Caliente is within our regular northern New Mexico service area. We schedule projects throughout the Rio Arriba and Taos County corridor.' },
    ],
  },

  golden: {
    cityName: 'Golden',
    slug: 'golden',
    county: 'Santa Fe',
    population: 150,
    elevation: 6800,
    h1: 'Golden Defensible Space: Turquoise Trail Community Fire Protection',
    metaDescription: 'Goat grazing for Golden properties on the Turquoise Trail. Defensible space for this former mining community surrounded by pinon-juniper.',
    intro: 'Golden\'s small Turquoise Trail community sits in a landscape of rolling pinon-juniper hills between the Sandia and Ortiz mountains. Like neighboring Madrid and Cerrillos, this former mining town has historic structures surrounded by dense native vegetation with no defensible space. Our goat herds clear fire-prone vegetation while preserving the historic character of this old mining community.',
    fireHistory: [],
    primaryVegetation: ['Pinon-Juniper', 'Chamisa/Sage', 'Grass'],
    terrain: 'Rolling pinon-juniper hills along the Turquoise Trail between the Sandia and Ortiz mountain ranges',
    nearestCities: ['madrid', 'cerrillos', 'cedar-crest', 'edgewood'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Golden face?', answer: 'Golden\'s historic structures sit in dense pinon-juniper with minimal defensible space. The rolling terrain and wind exposure along the Turquoise Trail create conditions for fire to spread quickly between properties.' },
      { question: 'How does Golden compare to Madrid and Cerrillos?', answer: 'All three Turquoise Trail communities share similar fire risk: historic structures in dense pinon-juniper woodland. Golden\'s more isolated location means longer fire response times, making defensible space even more important.' },
      { question: 'Can goats work on Golden\'s mining-era landscape?', answer: 'Yes. Goats navigate the irregular terrain and tight spaces around historic mining structures. They clear fire-prone vegetation without disturbing the cultural resources that define this old mining town.' },
    ],
  },

  'san-ysidro': {
    cityName: 'San Ysidro',
    slug: 'san-ysidro',
    county: 'Sandoval',
    population: 250,
    elevation: 5500,
    h1: 'San Ysidro Defensible Space: Jemez Valley Gateway Fire Protection',
    metaDescription: 'Goat grazing for San Ysidro properties at the gateway to the Jemez Mountains. Reduce wildfire fuel with professional vegetation management.',
    intro: 'San Ysidro sits at the junction where the Jemez River exits the mountains, placing this small community at the gateway to one of New Mexico\'s most fire-prone landscapes. Fires in the Jemez Mountains can threaten San Ysidro as they move down-canyon toward the Rio Grande valley. The area\'s mix of irrigated farmland, riparian bosque, and pinon-juniper mesa creates diverse fuel conditions. Our goat herds manage all three environments.',
    fireHistory: [
      { name: 'Thompson Ridge Fire (regional)', year: 2013, acres: 24685 },
    ],
    primaryVegetation: ['Pinon-Juniper', 'Cottonwood/Riparian', 'Chamisa/Sage', 'Grass'],
    terrain: 'Junction community where the Jemez River exits the mountains; irrigated valley floor meeting pinon-covered mesas',
    nearestCities: ['jemez-springs', 'bernalillo', 'cochiti-lake', 'corrales'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How do Jemez Mountain fires affect San Ysidro?', answer: 'Fires in the Jemez Mountains travel down the Jemez River canyon toward San Ysidro. The 2013 Thompson Ridge Fire demonstrated how quickly mountain fires can threaten communities at the canyon mouth. Defensible space provides the buffer San Ysidro needs.' },
      { question: 'Can goats manage San Ysidro\'s riverside vegetation?', answer: 'Yes. Goats clear invasive species and dense understory along the Jemez River without disturbing riparian soils. They\'re ideal for maintaining fire-safe conditions in the bosque corridor.' },
      { question: 'What about San Ysidro\'s agricultural areas?', answer: 'We use portable fencing to keep goats focused on fire-prone vegetation while protecting crops and irrigated pastures. Goats clear the wildland-agriculture interface that\'s critical for San Ysidro\'s safety.' },
    ],
  },

  moriarty: {
    cityName: 'Moriarty',
    slug: 'moriarty',
    county: 'Torrance',
    population: 1900,
    elevation: 6200,
    h1: 'Moriarty Defensible Space: Estancia Valley Fire Protection',
    metaDescription: 'Goat grazing for Moriarty and Estancia Valley properties. Reduce grassland and juniper fire risk with professional vegetation management.',
    intro: 'Moriarty sits in the Estancia Valley where wind-driven grass fires pose the primary wildfire threat. The area\'s open grasslands, scattered juniper patches, and consistent wind patterns create conditions for fast-moving wildfire that can develop with little warning. Properties on the edges of Moriarty interface with thousands of acres of open rangeland. Our goat herds reduce fuel loads in the grassland and juniper vegetation that surround this East Mountains gateway community.',
    fireHistory: [],
    primaryVegetation: ['Grass', 'Pinon-Juniper', 'Chamisa/Sage'],
    terrain: 'Estancia Valley floor at the base of the East Mountains; flat open grassland with juniper patches and wind exposure',
    nearestCities: ['edgewood', 'stanley', 'cedar-crest'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Moriarty face?', answer: 'Moriarty\'s primary risk is wind-driven grassland fire. The Estancia Valley\'s open terrain and consistent winds can push grass fires at 10-15 mph. Properties at the town\'s edge interface directly with open rangeland.' },
      { question: 'Can goats help with Moriarty\'s grassland fire risk?', answer: 'Yes. Goats reduce fine fuel loads in grasslands and create fuel breaks between open range and structures. They\'re especially effective at clearing the juniper patches that serve as fire stepping-stones across grassland.' },
      { question: 'Do you serve the Estancia Valley?', answer: 'Yes. We serve Moriarty, Edgewood, Stanley, and surrounding Estancia Valley communities. Our East Mountains projects often cover multiple communities in a single trip.' },
    ],
  },

  chama: {
    cityName: 'Chama',
    slug: 'chama',
    county: 'Rio Arriba',
    population: 1250,
    elevation: 7871,
    h1: 'Chama Wildfire Defense: Northern Mountains Defensible Space',
    metaDescription: 'Defensible space for Chama mountain properties. Professional goat grazing reduces wildfire fuel in northern New Mexico\'s forested mountains.',
    intro: 'Chama sits in the mountains of northern New Mexico near the Colorado border, surrounded by dense ponderosa pine and spruce-fir forest at nearly 8,000 feet. This railroad and recreation community faces significant wildfire risk from the same mountain forest types that produce the state\'s largest fires. Limited road access and remote location mean fire response is slow — making defensible space essential for every Chama property.',
    fireHistory: [],
    primaryVegetation: ['Ponderosa Pine', 'Mixed Conifer', 'Spruce-Fir', 'Aspen'],
    terrain: 'Mountain community at 7,800+ ft near the Colorado border; forested slopes with valley-floor meadows along the Chama River',
    nearestCities: ['abiquiu', 'espanola'],
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risk does Chama face?', answer: 'Chama is surrounded by dense mountain forest at 7,800+ feet. Limited road access, remote location, and long fire response times mean defensible space is the primary defense for Chama properties.' },
      { question: 'Can goats work in Chama\'s mountain forests?', answer: 'Yes. Our goats are effective in mountain forest understory at all elevations. The dense brush, oak thickets, and conifer seedlings that create ladder fuels are exactly what goats browse most effectively.' },
      { question: 'How do you serve Chama from Santa Fe?', answer: 'Chama is in our extended service area. We schedule multi-day projects in northern New Mexico to serve Chama and surrounding mountain communities efficiently.' },
    ],
  },
};

export function getCityContent(slug: string): CityContent | undefined {
  return CITY_PAGES[slug];
}

export function getAllCities(): CityContent[] {
  return Object.values(CITY_PAGES);
}

export function hasCityPage(slug: string): boolean {
  return slug in CITY_PAGES;
}

/**
 * Get nearest cities for smart internal linking.
 * Returns cities from the nearestCities field, filtered to only include cities that have pages.
 */
export function getNearestCities(slug: string, limit = 8): CityContent[] {
  const city = CITY_PAGES[slug];
  if (!city) return [];
  return city.nearestCities
    .filter((s) => s in CITY_PAGES)
    .slice(0, limit)
    .map((s) => CITY_PAGES[s]);
}

/**
 * Get the FireReady assessment URL for a given city.
 * Links to the city-specific FireReady page if available, otherwise the state assessment page.
 */
export function getFireReadyUrl(slug: string): string {
  // NM city slugs map to FireReady's /new-mexico/{slug} pattern
  return `https://fireready.ai/new-mexico/${slug}`;
}

/**
 * Get the GoatMaps URL for a given city.
 */
export function getGoatMapsUrl(slug: string): string {
  return `https://goatmaps.vercel.app/graziers/${slug}-nm`;
}
