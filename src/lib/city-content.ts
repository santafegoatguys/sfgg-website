export interface CityContent {
  cityName: string;
  slug: string;
  h1: string;
  metaDescription: string;
  intro: string;
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
  eldorado: {
    cityName: 'Eldorado',
    slug: 'eldorado',
    h1: 'Professional Defensible Space Services for Eldorado, New Mexico',
    metaDescription: 'Targeted goat grazing for wildfire fuel reduction in Eldorado, NM. Spanish goats create EMNRD-compliant defensible space zones for your property.',
    intro: 'Eldorado\'s rolling pinon-juniper terrain and proximity to the Sangre de Cristo foothills create unique wildfire vulnerability for this sought-after community south of Santa Fe. The area\'s dense native vegetation, combined with drought-stressed trees and seasonal winds from Glorieta Pass, demands proactive fuel reduction strategies. Our Spanish goat herds excel at clearing understory brush and ladder fuels that threaten Eldorado\'s custom homes and horse properties. Unlike mechanical clearing that can disturb archaeological sites common in this historic area, targeted goat grazing preserves cultural resources while creating effective defensible space.',
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
    h1: 'Tesuque Wildfire Prevention: Professional Defensible Space Services',
    metaDescription: 'Targeted goat grazing for Tesuque\'s high-value properties. Create fire-resistant landscapes while preserving your mountain community\'s natural beauty.',
    intro: 'Tesuque\'s position in the foothills directly north of Santa Fe places this historic community at the convergence of multiple fire-prone ecosystems. The village\'s narrow valley, flanked by steep canyon walls thick with gambel oak and ponderosa pine, creates natural fire chimneys that can rapidly spread flames upslope toward residential areas. Recent drought conditions have stressed the area\'s mature cottonwoods along the Tesuque Creek corridor, creating additional fuel loads near high-value estates and working horse ranches. Our goat herds navigate Tesuque\'s challenging topography to clear understory fuels that mechanical equipment cannot reach.',
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
    h1: 'Los Alamos Defensible Space: Advanced Wildfire Fuel Reduction Services',
    metaDescription: 'Specialized goat grazing for Los Alamos\'s unique WUI challenges. SFGG creates defensible space zones that protect communities built in fire-adapted forests.',
    intro: 'Los Alamos County\'s mesa-top communities face exceptional wildfire risk, surrounded by dense ponderosa pine and mixed conifer forests that have experienced decades of fire suppression. The Las Conchas Fire of 2011 demonstrated the extreme vulnerability of residential areas built directly within fire-adapted ecosystems. Our targeted grazing services address the specific fuel reduction needs of communities like White Rock and the Townsite, where homes interface directly with national forest lands. Spanish goats excel at clearing understory vegetation beneath Los Alamos\'s towering ponderosas, reducing ladder fuels that carry ground fires into the canopy.',
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
    h1: 'White Rock Wildfire Protection: Expert Defensible Space Management',
    metaDescription: 'Professional goat grazing for White Rock\'s canyon-edge properties. Reduce wildfire risk while maintaining the natural beauty of your mesa-top community.',
    intro: 'White Rock\'s dramatic position on volcanic tuff cliffs above the Rio Grande creates breathtaking views and significant fire management challenges. This Los Alamos County community sits at the intersection of pinon-juniper woodlands and ponderosa pine forests, with residential areas carved into fire-prone vegetation. The 2000 Cerro Grande Fire and 2011 Las Conchas Fire highlighted White Rock\'s vulnerability as a community built on the edge of wilderness. Our Spanish goat herds specialize in clearing dense understory growth that accumulates in the area\'s protected microclimates and drainages.',
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
    h1: 'Edgewood Fire Prevention: Professional Defensible Space Services',
    metaDescription: 'Comprehensive goat grazing for Edgewood\'s expansive properties. SFGG reduces wildfire fuel loads across East Mountain communities facing increasing fire risk.',
    intro: 'Edgewood\'s position on the eastern slope of the Sandia Mountains places this growing community at the intersection of Great Plains grasslands and montane forests, creating complex fuel management challenges. The area\'s rapid residential development has introduced structures into fire-prone pinon-juniper woodlands where natural fire cycles have been disrupted for decades. Seasonal winds from the Rio Grande Valley, combined with drought-stressed vegetation and increasing residential density, elevate fire risk for properties throughout the East Mountains.',
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Is Edgewood really at wildfire risk?', answer: 'Yes. Edgewood\'s East Mountain location puts it in the wildland-urban interface where pinon-juniper woodland meets residential development. Drought years and wind events create conditions for fast-moving fires.' },
      { question: 'How do goats handle Edgewood\'s large properties?', answer: 'Our herds of 40-80 goats efficiently clear large acreage. A 5-acre Edgewood lot typically takes 5-10 days. We use portable electric fencing to direct grazing to priority areas first.' },
      { question: 'What about Edgewood HOA common areas?', answer: 'We offer bulk HOA contracts that reduce per-property costs significantly. Common area grazing creates community-wide fuel breaks that protect multiple homes simultaneously.' },
    ],
  },
  'la-cienega': {
    cityName: 'La Cienega',
    slug: 'la-cienega',
    h1: 'La Cienega Defensible Space: Historic Community Fire Protection',
    metaDescription: 'Specialized goat grazing for La Cienega\'s unique landscape. Protect this historic settlement with defensible space services that respect cultural heritage.',
    intro: 'La Cienega\'s distinction as one of New Mexico\'s oldest continuously inhabited communities brings unique fire management challenges to this historic village between Santa Fe and Cochiti Pueblo. The settlement\'s location in the broad valley of the Santa Fe River, surrounded by pinon-covered hills and ancient acequia systems, requires defensible space strategies that preserve cultural landscapes while reducing wildfire risk. Our Spanish goat herds navigate the area\'s traditional agricultural plots and historic structures with sensitivity, clearing invasive species and fire-prone brush without disturbing the cultural resources that make La Cienega irreplaceable.',
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
    h1: 'Cerrillos Wildfire Defense: Mining Town Defensible Space Services',
    metaDescription: 'Professional goat grazing for Cerrillos\'s unique topography. Targeted fuel reduction for this historic mining community\'s challenging terrain.',
    intro: 'Cerrillos\'s legacy as a 19th-century mining boom town left this community with distinctive fire management challenges in the rolling hills southeast of Santa Fe. The town sits where pinon-juniper woodland meets grassland, creating diverse fuel types that can carry fire rapidly between structures. Historic mining infrastructure and narrow property layouts make mechanical clearing difficult, while the community\'s artistic character demands fire protection methods that preserve rather than destroy the landscape. Our goat herds navigate Cerrillos\'s unique terrain and tight spaces with precision.',
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
    h1: 'Defensible Space Services in Lamy, New Mexico',
    metaDescription: 'Professional defensible space services for Lamy properties. Spanish goats create EMNRD-compliant fuel breaks to protect your ranch from wildfire.',
    intro: 'Lamy\'s historic railroad community sits in a particularly vulnerable position where grasslands meet pinyon-juniper woodlands, creating textbook wildfire conditions. The area\'s scattered ranch properties and rural residential developments face unique challenges \u2014 wide-open spaces that can carry fast-moving grass fires, plus dense tree clusters that create dangerous crown fire potential. Recent fire seasons have demonstrated how quickly flames can race across the Galisteo Basin, putting Lamy\'s historic depot area and surrounding homes at risk.',
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
    h1: 'Glorieta Defensible Space and Wildfire Fuel Reduction Services',
    metaDescription: 'Wildfire fuel reduction for Glorieta\'s forested properties. Targeted goat grazing creates defensible space while preserving your mountain property\'s natural beauty.',
    intro: 'Glorieta\'s position along the historic Santa Fe Trail places modern properties directly in New Mexico\'s high-risk wildfire corridor, where ponderosa pine forests meet dense oak and mountain mahogany understory. The 2022 Hermit\'s Peak/Calf Canyon Fire demonstrated just how vulnerable this elevation zone can be, with similar forest types burning intensely throughout the Sangre de Cristo foothills. Glorieta properties often feature challenging terrain \u2014 steep slopes, rocky outcroppings, and mixed conifer stands that make traditional fuel reduction difficult and expensive.',
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
    h1: 'Pecos Wildfire Defense: Professional Defensible Space Services',
    metaDescription: 'Wildfire defensible space services for Pecos properties. Expert goat grazing reduces forest fire risk while working with your land\'s natural ecosystem.',
    intro: 'Pecos sits in the heart of New Mexico\'s wildfire country, where the 2022 Hermit\'s Peak/Calf Canyon Fire burned over 341,000 acres and forever changed how forest communities think about defensible space. The village\'s location in dense mixed-conifer forest \u2014 with Gambel oak, aspen groves, and towering ponderosa pines \u2014 creates extreme fire risk during dry seasons. Many Pecos properties feature the challenging combination of steep terrain, rocky soil, and established forest that makes mechanical fuel reduction both expensive and ecologically disruptive.',
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
    h1: 'Pojoaque Valley Defensible Space: Wildfire Fuel Reduction Services',
    metaDescription: 'Defensible space services for Pojoaque Valley properties. Targeted goat grazing reduces wildfire risk across agricultural and residential land.',
    intro: 'The Pojoaque Valley\'s unique geography \u2014 where agricultural fields meet pinon-juniper hillsides and cottonwood bosques \u2014 creates complex wildfire fuel patterns that require specialized management. Properties along the valley floor benefit from natural fire breaks created by acequia systems and cultivated fields, but the transition zones where development meets native vegetation pose significant risk. Pojoaque\'s growing residential areas often feature ornamental landscaping adjacent to native shrublands, creating fuel continuity that can carry fire directly to structures.',
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
    h1: 'Nambe Area Defensible Space and Fire Risk Reduction',
    metaDescription: 'Wildfire defensible space for Nambe area properties. Professional goat grazing creates fuel breaks while respecting cultural and natural landscapes.',
    intro: 'Nambe\'s position in the Sangre de Cristo foothills creates a challenging wildfire environment where pinon-juniper woodlands transition into ponderosa pine forest, with seasonal grasslands and agricultural areas adding complexity to fuel management. The area\'s cultural significance and landscape sensitivity require defensible space solutions that work within existing land use patterns while providing effective fire protection. Our goat herds deliver precisely this balance, clearing fire-prone vegetation while preserving the natural and cultural character of the Nambe landscape.',
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'How do you work with Nambe\'s sensitive landscapes?', answer: 'Goat grazing is inherently low-impact. No heavy equipment, no chemicals, no soil disturbance. Goats remove target vegetation while leaving the landscape\'s character intact \u2014 ideal for culturally sensitive areas.' },
      { question: 'What elevation zones do you serve around Nambe?', answer: 'We serve properties from the Nambe valley floor through the pinon-juniper transition zone and into lower ponderosa forests. Each elevation has different fuel types that our goats are trained to manage.' },
      { question: 'How often does Nambe area vegetation need management?', answer: 'Most Nambe properties benefit from annual maintenance after initial clearing. The foothills\' vigorous growing season means understory regrowth can rebuild fire risk within 1-2 years without management.' },
    ],
  },
  galisteo: {
    cityName: 'Galisteo',
    slug: 'galisteo',
    h1: 'Galisteo Basin Defensible Space: Targeted Wildfire Fuel Reduction',
    metaDescription: 'Defensible space services for Galisteo Basin properties. Spanish goats reduce grassland fire risk while preserving your land\'s natural character.',
    intro: 'The Galisteo Basin\'s expansive grasslands and scattered juniper groves create ideal conditions for fast-moving wildfire, where flames can travel for miles with little natural interruption. This ancient landscape, rich with archaeological sites and traditional grazing areas, requires defensible space solutions that work within its cultural and ecological context. Our Spanish goat herds provide targeted fuel reduction that respects the basin\'s heritage while creating effective fire breaks around structures and communities.',
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
    h1: 'Madrid Historic District Defensible Space and Fire Protection',
    metaDescription: 'Wildfire defensible space for Madrid\'s historic mining district. Specialized goat grazing protects historic structures from wildfire risk.',
    intro: 'Madrid\'s unique position as a historic mining town nestled in pinon-juniper woodland creates distinctive wildfire challenges where cultural preservation meets fire safety requirements. The town\'s narrow valley setting, with historic structures built directly into hillsides covered in native vegetation, requires defensible space solutions that protect irreplaceable buildings without destroying the landscape character that defines this artistic community. Our goat herds are perfectly suited to Madrid\'s tight spaces, steep slopes, and sensitive historic structures.',
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'Can goats protect Madrid\'s historic buildings?', answer: 'Yes. Goats clear fire-prone vegetation from around historic structures without the damage that comes from heavy equipment. They work in tight spaces between buildings and on steep hillsides that machinery can\'t reach.' },
      { question: 'What fire risk does Madrid face?', answer: 'Madrid\'s wooden historic structures sit in dense pinon-juniper woodland with minimal defensible space. The narrow valley can channel winds and fire. One structure fire could spread to the entire historic district without fuel breaks.' },
      { question: 'How do you work in Madrid\'s narrow valley?', answer: 'Our goats thrive in tight spaces. We use targeted fencing to direct them around specific structures and along hillsides. No heavy equipment needed \u2014 goats access terrain that machines simply cannot.' },
    ],
  },
  stanley: {
    cityName: 'Stanley',
    slug: 'stanley',
    h1: 'Stanley Area Wildfire Defense: Professional Defensible Space Services',
    metaDescription: 'Defensible space services for Stanley\'s rural properties. Expert goat grazing reduces fire risk in the Estancia Valley\'s grassland-juniper transition.',
    intro: 'Stanley\'s position in the southern Sangre de Cristo foothills places properties at the transition between Estancia Valley grasslands and pinon-juniper woodland, creating diverse wildfire fuel conditions. The area\'s large ranch properties and scattered residential developments face both grass fire and brush fire risk, with wind patterns off the mountains driving fire behavior that can change rapidly. Our targeted goat grazing creates effective fuel breaks across Stanley\'s varied terrain, reducing both grass and brush fuel loads that threaten structures.',
    services: SERVICES_DEFAULT,
    faqs: [
      { question: 'What fire risks exist around Stanley?', answer: 'Stanley faces dual risk: fast-moving grass fires from the Estancia Valley and slower brush fires from pinon-juniper woodland. Wind off the mountains can push either type rapidly toward structures.' },
      { question: 'Can goats clear large ranch properties near Stanley?', answer: 'Yes. Our herds efficiently clear large acreage \u2014 a 20-acre parcel typically takes 2-3 weeks. We use portable fencing to systematically work across the property, prioritizing areas closest to structures.' },
      { question: 'How does Stanley compare to other SFGG service areas?', answer: 'Stanley\'s grassland-juniper mix is similar to Galisteo and Lamy. The main difference is elevation and wind exposure. We tailor our grazing plan to your specific property\'s fuel types and terrain.' },
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
