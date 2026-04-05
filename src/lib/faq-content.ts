export interface FaqTopic {
  name: string;
  slug: string;
  faqs: { question: string; answer: string }[];
}

export const FAQ_TOPICS: FaqTopic[] = [
  {
    name: 'How much does goat grazing cost in New Mexico?',
    slug: 'goat-grazing-cost',
    faqs: [
      { question: 'What does targeted goat grazing cost per acre in New Mexico?', answer: 'Targeted goat grazing in New Mexico typically costs $200-400 per acre for initial clearing, depending on vegetation density and terrain accessibility. Follow-up maintenance grazing runs $150-250 per acre annually. These rates include livestock guardian dogs, fencing setup, and professional vegetation management planning.' },
      { question: 'How does goat grazing cost compare to mechanical brush clearing?', answer: 'Goat grazing costs 30-50% less than mechanical clearing over a 3-year period. While mechanical clearing may cost $300-600 per acre upfront, it requires expensive re-treatment every 2-3 years, totaling $900-1,800 over three years compared to goat grazing\'s $500-900 total cost including maintenance.' },
      { question: 'What factors affect goat grazing pricing in the Santa Fe area?', answer: 'Pricing depends on vegetation type (cholla and juniper cost more than grassland weeds), site accessibility (remote areas require additional transport costs), acreage size (larger properties get bulk discounts), and terrain steepness (slopes over 30% require specialized handling). Properties meeting NRCS conservation program criteria may qualify for cost-share funding.' },
      { question: 'How much does it cost to meet EMNRD defensible space standards with goats?', answer: 'Meeting New Mexico\'s 30-foot defensible space Zone 1 standards typically costs $800-1,200 per home using targeted goat grazing. This includes clearing understory vegetation to create the required 6-foot spacing between shrub crowns and removing ladder fuels within the critical zone around structures.' },
      { question: 'Are there financing options for goat grazing wildfire mitigation?', answer: 'Several financing options exist including NRCS Environmental Quality Incentives Program (EQIP) cost-share up to 75%, New Mexico Forestry Division grants for WUI properties, and some insurance companies offer premium discounts for documented defensible space maintenance. HOAs can also spread costs across multiple years in their landscape budgets.' },
    ],
  },
  {
    name: 'Goat grazing vs mechanical clearing vs herbicides',
    slug: 'goat-grazing-vs-alternatives',
    faqs: [
      { question: 'How effective is goat grazing compared to mechanical brush clearing?', answer: 'Goat grazing achieves 85-95% vegetation reduction in target species while preserving beneficial native plants, compared to mechanical clearing\'s 100% removal that often damages soil and desirable species. Goats create natural fuel breaks by selectively consuming fire-prone shrubs while mechanical methods require 2-3 years between treatments.' },
      { question: 'Why is goat grazing better than herbicides for defensible space?', answer: 'Goat grazing eliminates chemical runoff risks and works effectively on slopes where herbicide application is dangerous or prohibited. Goats achieve similar vegetation control rates (80-90% target species reduction) without the environmental concerns, groundwater contamination potential, or 3-5 year re-application cycles required by herbicides.' },
      { question: 'What are the soil health differences between methods?', answer: 'Goat grazing improves soil health through natural fertilization and hoof action that enhances water infiltration, while mechanical clearing compacts soil and destroys beneficial mycorrhizal networks. Studies show goat-grazed areas retain 40% more topsoil and have 60% better water absorption rates compared to mechanically cleared sites.' },
      { question: 'How do treatment longevity and maintenance compare?', answer: 'Mechanical clearing requires re-treatment every 2-3 years as vegetation regrows aggressively from root systems. Herbicide treatments need reapplication every 3-5 years with diminishing effectiveness. Targeted goat grazing provides ongoing management with annual maintenance visits that prevent vegetation from reaching dangerous fuel loads.' },
      { question: 'Which method best preserves native plant communities?', answer: 'Goat grazing selectively targets invasive and fire-prone species while preserving native grasses and beneficial forbs that provide erosion control. Mechanical clearing removes both problem and beneficial plants indiscriminately. Herbicides often damage non-target native species, while goats naturally avoid many native plants.' },
    ],
  },
  {
    name: 'What is targeted goat grazing?',
    slug: 'what-is-targeted-goat-grazing',
    faqs: [
      { question: 'What is targeted goat grazing and how does it work?', answer: 'Targeted goat grazing is precision vegetation management using livestock to selectively consume specific plant species for land management goals. Spanish goats are moved through planned grazing areas using portable fencing and guided by livestock guardian dogs, focusing their browsing on fire-prone shrubs, invasive weeds, and understory vegetation.' },
      { question: 'How is targeted grazing different from regular livestock grazing?', answer: 'Targeted grazing uses higher stocking densities (100-200 goats per acre) for shorter periods (3-10 days) with precise timing and plant species focus, compared to traditional grazing\'s season-long low-density approach. Professional vegetation management planning guides herd movement to achieve specific fuel reduction objectives.' },
      { question: 'What vegetation types do goats target for wildfire fuel reduction?', answer: 'Goats preferentially browse ladder fuels including juniper seedlings, oak brush, four-wing saltbush, and cholla cactus that create dangerous fire pathways from ground to tree canopies. They consume 70-80% of target shrub species within a single grazing period while typically avoiding fire-resistant native grasses and mature trees.' },
      { question: 'How do livestock guardian dogs work in targeted grazing?', answer: 'Great Pyrenees livestock guardian dogs protect goat herds from predators including coyotes, mountain lions, and bears common in Northern New Mexico. These dogs stay with the herd 24/7, reducing livestock losses to under 2% annually compared to 10-15% losses in unprotected herds.' },
      { question: 'How long does a targeted grazing project take?', answer: 'A typical residential property (1-5 acres) takes 3-7 days with a herd of 40-80 goats. Larger commercial or HOA projects may take 2-4 weeks depending on acreage and vegetation density. Initial clearing takes longer than annual maintenance grazing.' },
    ],
  },
  {
    name: 'Best vegetation management for Santa Fe properties',
    slug: 'vegetation-management-santa-fe',
    faqs: [
      { question: 'What is the most effective vegetation management method for Santa Fe?', answer: 'Targeted goat grazing is the most cost-effective and ecologically beneficial vegetation management method for Santa Fe area properties. It costs 30-60% less than mechanical clearing, eliminates chemical runoff risks, and improves soil health while creating EMNRD-compliant defensible space.' },
      { question: 'How often should vegetation management be performed in Northern NM?', answer: 'Most Northern New Mexico properties require annual maintenance after initial clearing. The region\'s growing season (April-October) means understory vegetation can rebuild fire risk within 12-18 months. Properties in high-risk pinon-juniper zones may benefit from twice-annual treatment.' },
      { question: 'What vegetation is most dangerous around Santa Fe homes?', answer: 'Pinon-juniper woodland creates the highest wildfire risk around Santa Fe homes. Juniper\'s volatile oils make it extremely flammable, while pinon needle accumulation creates ground-level fuel. Cholla cactus, four-wing saltbush, and dead wood debris also contribute significant fire risk.' },
      { question: 'Can vegetation management reduce my insurance premiums?', answer: 'Yes. Documented defensible space maintenance can reduce wildfire insurance premiums by 5-15% in New Mexico. Some insurers require proof of vegetation management for coverage renewal in WUI zones. Professional before/after documentation strengthens your case with underwriters.' },
      { question: 'What is the best time of year for vegetation management in Santa Fe?', answer: 'Late spring (May-June) before fire season is ideal for initial clearing. Fall (September-October) after monsoon growth is best for maintenance grazing. Avoid winter months when goats are less efficient and vegetation is dormant.' },
    ],
  },
  {
    name: 'How to prepare your NM property for wildfire season',
    slug: 'wildfire-season-preparation',
    faqs: [
      { question: 'When should New Mexico property owners begin wildfire preparation?', answer: 'Start defensible space preparation by early April, before New Mexico\'s peak fire season (April-June). The 2022 Hermit\'s Peak/Calf Canyon Fire started April 6, demonstrating why early preparation is critical. Allow 2-4 weeks for professional vegetation clearing before fire danger peaks.' },
      { question: 'What are the essential defensible space zones for NM homes?', answer: 'NM EMNRD recommends four zones: Structure zone (0-5 ft) with no combustible materials, Immediate zone (5-30 ft) with fire-resistant landscaping, Intermediate zone (30-100 ft) with thinned trees and reduced brush, and Extended zone (100+ ft) with managed vegetation density. Zone 1 is the most critical.' },
      { question: 'What should I do inside Zone 1 (0-30 feet)?', answer: 'Remove all dead vegetation, trim tree branches to 10 feet above ground, create 6-foot spacing between shrub crowns, clear pine needles from roof and gutters, move firewood stacks at least 30 feet from structures, and remove combustible patio furniture during fire season.' },
      { question: 'How do I manage the Intermediate zone (30-100 feet)?', answer: 'Thin trees to 10-foot crown spacing, remove ladder fuels connecting ground vegetation to tree canopies, mow grass to under 4 inches, and create fuel breaks along driveways and property edges. Targeted goat grazing is especially effective in this zone where mechanical access is limited.' },
      { question: 'What should I do if I can\'t clear my property before fire season?', answer: 'Focus on the most critical Zone 1 (0-30 feet) first — this zone provides the most protection per dollar spent. Clear combustible materials from within 5 feet of structures immediately. Contact a professional vegetation management service for emergency clearing if your property is in a high-risk WUI area.' },
    ],
  },
  {
    name: 'What invasive plants do goats eat in New Mexico?',
    slug: 'invasive-plants-goats-eat',
    faqs: [
      { question: 'Do goats effectively control tamarisk (salt cedar) in New Mexico?', answer: 'Goats browse tamarisk foliage and small-diameter stems, reducing canopy volume by 60-80% in a single treatment. While they cannot kill mature tamarisk trees outright, repeated browsing exhausts root reserves and prevents seed production. Goats are most effective on tamarisk stands under 10 feet in height.' },
      { question: 'Can goats eliminate Russian olive trees on NM properties?', answer: 'Goats effectively defoliate Russian olive saplings and browse bark on trees up to 3 inches in diameter. Complete elimination requires 2-3 consecutive years of browsing to exhaust root energy reserves. Goats are the preferred biological control for Russian olive in riparian areas where herbicides cannot be applied.' },
      { question: 'Which invasive grasses do goats control in New Mexico?', answer: 'Goats consume cheatgrass (Bromus tectorum), African lovegrass, and other invasive annuals that increase fire frequency. They preferentially browse cheatgrass in its palatable green stage (March-May), reducing seed production by up to 90% in treated areas.' },
      { question: 'Do goats eat kochia and Russian thistle (tumbleweed)?', answer: 'Yes. Goats readily consume kochia and Russian thistle at all growth stages, including mature woody stems that other livestock avoid. A single goat can consume 3-5 pounds of these invasives daily. Goat grazing is especially effective at preventing tumbleweed accumulation around fences and structures.' },
      { question: 'Can goats control juniper encroachment on NM rangeland?', answer: 'Goats are highly effective at preventing juniper encroachment by browsing seedlings and young trees under 4 feet tall. They strip foliage and bark from juniper, killing seedlings in a single treatment season. This prevents the grassland-to-woodland conversion that increases fire risk across the American West.' },
    ],
  },
  {
    name: 'EMNRD defensible space standards',
    slug: 'emnrd-defensible-space',
    faqs: [
      { question: 'What are New Mexico EMNRD defensible space requirements?', answer: 'New Mexico\'s Energy, Minerals and Natural Resources Department (EMNRD) recommends maintaining defensible space in zones extending from structures: Zone 1 (0-30 feet) requires removing ladder fuels and maintaining 6-foot spacing between shrub crowns. Zone 2 (30-100 feet) requires thinning trees and reducing brush density.' },
      { question: 'How far do EMNRD defensible space zones extend from homes?', answer: 'EMNRD recommends four zones: Structure zone (0-5 ft), Immediate zone (5-30 ft), Intermediate zone (30-100 ft), and Extended zone (100+ ft). Properties in high-risk WUI areas should maintain all four zones, with Zone 1 being the most critical for structure survival during wildfire.' },
      { question: 'Is EMNRD defensible space legally required in New Mexico?', answer: 'EMNRD defensible space standards are recommendations, not legal mandates in most of New Mexico. However, some counties and HOAs have adopted enforceable versions. Insurance companies increasingly require documented defensible space for coverage in WUI zones, making compliance a practical necessity.' },
    ],
  },
];
