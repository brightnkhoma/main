import {
  Car,
  Compass,
  CreditCard,
  type LucideIcon,
  Pickaxe,
  Plane,
  Radio,
  ShoppingBag,
  Sprout,
  Truck,
  Wrench,
} from "lucide-react"



export interface Subsidiary {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  services: string[]
  founded: string
  location?: string
  email?: string
  phone?: string
  icon: LucideIcon
  heroImage: string
  image: string
  accent: string
  highlights?: string[]
  focus?: string
}

export const subsidiaries: Subsidiary[] = [
  {
    id: "autoshop",
    name: "The Anchorage Autoshop",
    shortName: "Autoshop",
    tagline: "Keeping Malawi Moving",
    description:
      "The Anchorage Autoshop delivers expert automotive services and repairs for individuals, businesses, and fleets across Malawi. Our certified technicians combine modern diagnostic equipment with genuine parts, so every vehicle that leaves our bay runs the way it was built to.",
    services: [
      "Vehicle Diagnostics & Repair",
      "Scheduled Maintenance",
      "Fleet Servicing",
      "Genuine Parts & Fitting",
    ],
    founded: "2019",
    location: "Blantyre and Lilongwe, Malawi",
    email: "sales@theanchoragegroup.com",
    // phone: "+265 999 123 456",
    icon: Wrench,
    heroImage: "https://www.autotrainingcentre.com/wp-content/uploads/2014/05/Staying-Safe-and-Healthy-in-the-Auto-Shop.jpg",
    image: "https://images.contentstack.io/v3/assets/blte891c850d5781579/blteb00d63e25d20e74/668ed7a2bbb9222cf735a391/diesel-technician-vs-auto-mechanic.jpg?auto=webp&w=1080&q=75",
    accent: "#C9A227",
    focus: "Automotive Services",
    highlights: [
      "Certified technicians with modern diagnostic equipment",
      "Genuine parts and manufacturer-approved procedures",
      "Fleet servicing for businesses of all sizes",
      "Quick turnaround times without compromising quality"
    ]
  },
  {
    id: "communications",
    name: "The Anchorage Communications",
    shortName: "Communications",
    tagline: "Amplifying Brands, Connecting Audiences",
    description:
      "The Anchorage Communications builds strategic communication solutions that help brands find and hold their audience. From digital campaigns to full media production, we pair creative thinking with measurable outcomes for clients across sectors.",
    services: [
      "Brand Strategy",
      "Digital Marketing",
      "Public Relations",
      "Media Production",
    ],
    founded: "2019",
    location: "Lilongwe, Malawi",
    email: "communications@theanchoragegroup.com",
    phone: "+265 886 245 100",
    icon: Radio,
    heroImage: "/images/four.jpg",
    image: "https://poweradspy.com/wp-content/uploads/2022/03/How-To-Come-Up-With-Creative-Marketing-Ideas.webp",
    accent: "#4C8DFF",
    focus: "Media & Communications",
    highlights: [
      "Full-service digital and traditional media solutions",
      "Data-driven campaigns with measurable ROI",
      "Creative team with cross-sector experience",
      "End-to-end production capabilities"
    ]
  },
  {
  id: "motors",
  name: "The Anchorage Motors",
  shortName: "Motors",
  tagline: "Keeping You Moving with Confidence.",
  description:
    "The Anchorage Motors is a comprehensive automotive and power equipment solutions provider specializing in vehicle sales, fleet management, maintenance, repairs, and aftersales support. We offer a wide selection of new and pre-owned vehicles, motorcycles, and outboard engines, supported by professional technical services designed to keep our clients moving with confidence. Our workshop provides expert servicing and repairs for vehicles, motorcycles, generators, water pumps, and outboard engines, while our mobile technical support brings essential services directly to our clients. Working closely with The Anchorage Autoshop, we also provide access to genuine spare parts, delivering convenient and reliable automotive solutions under one roof.",
  services: [
    "New and Pre-Owned Vehicle Sales",
    "Motorcycle Sales and Services",
    "Fleet Management Solutions",
    "General Vehicle Repairs",
    "Service A and B",
    "Engine Diagnostics",
    "Tyre Fitting, Balancing and Alignment",
    "Panel Beating and Vehicle Restoration",
    "Vehicle Painting and Facelifting",
    "Generator and Water Pump Servicing",
    "Outboard Engine Servicing and Repairs",
    "Mobile Technical Support",
    "Aftersales Support"
  ],
  founded: "2020",
  location: "Njewa Industrial Area, Mchinji Road, Malawi",
  email: "",
  phone: "",
  icon: Car,
  heroImage: "/images/fix.jpg",
  image: "/images/g.jpg",
  accent: "#DC2626",
  highlights: [
    "New and pre-owned vehicles",
    "Professional automotive workshop",
    "Expert diagnostics and repairs",
    "Motorcycle and power equipment servicing",
    "Mobile technical support",
    "Comprehensive aftersales support",
    "Access to genuine spare parts through The Anchorage Autoshop"
  ],
  focus: "Automotive & Fleet Solutions"
},
  {
    id: "logistics",
    name: "The Anchorage Logistics",
    shortName: "Logistics",
    tagline: "Moving What Matters",
    description:
      "The Anchorage Logistics manages efficient logistics and supply chain operations for businesses that can't afford delays. From haulage to warehousing, we keep goods and the businesses that depend on them moving.",
    services: [
      "Freight & Haulage",
      "Warehousing & Distribution",
      "Supply Chain Consulting",
      "Customs Coordination",
    ],
    founded: "2019",
    location: "Nationwide Coverage",
    email: "logistics@theanchoragegroup.com",
    phone: "+265 991 498 992",
    icon: Truck,
    heroImage: "https://www.brownintegratedlogistics.com/hubfs/Organized%20Warehouse%20with%20Pallets%20and%20Shelves%202.webp",
    image: "https://arelogisticsclearing.com/wp-content/uploads/2026/04/hero-3.png",
    accent: "#2E9E5B",
    focus: "Logistics & Supply Chain",
    highlights: [
      "Reliable freight and haulage services",
      "Secure warehousing and distribution network",
      "Expert supply chain consulting",
      "Efficient customs coordination"
    ]
  },
  {
  id: "agritech",
  name: "The Anchorage Agritech",
  shortName: "Agritech",

  tagline: "Building Resilient Agricultural Value Chains",

  description: `The Anchorage Agritech is a subsidiary of The Anchorage Group focused on commercial agriculture, commodity aggregation, agro-processing, food safety, and market development. Through Anchor Farm, outgrower schemes, and smallholder farmer networks, we connect farmers to markets while creating value across key agricultural value chains.

TAG is the sole certified distributor of Aflasafe® in Malawi, supporting safer, higher-quality agricultural production for local, regional, and international markets.`,

  services: [
    "Commercial Agriculture & Aggregation",
    "Commodity Offtake & Market Linkages",
    "Food Safety & Aflasafe® Distribution",
    "Agro-Processing & Value Addition",
    "Outgrower & Farmer Development",
    "Export Market Development",
  ],

  founded: "2019",
  location: "Lilongwe, Malawi",
  email: "sales@theanchoragegroup.com",
  // phone: "+265 888 456 789",

  icon: Sprout,
  heroImage: "/images/sorghum.jpg",
  image: "/images/gnuts.jpg",

  accent: "#7CB342",
  focus: "Agricultural Value Chains",

  highlights: [
    "Key value chains include soybeans, groundnuts, African bird’s eye chili, sorghum, sesame, cotton, pigeon peas and white haricot beans."
  ],
}
  ,
  {
  id: "outlet",
  name: "The Anchorage Outlet",
  shortName: "Outlet",
  tagline: "Quality Products. Reliable Procurement. Unbeatable Value.",
  description:
    "The Anchorage Outlet is a trusted procurement and merchandise supplier serving organizations, companies, government departments, and individuals. We provide a diverse range of quality products sourced locally and internationally, including specialized goods imported from China, South Africa, and Dubai through The Anchorage Logistics. With a strong focus on reliability, communication, competitive pricing, and customer satisfaction, we deliver convenient procurement solutions tailored to meet the specific needs of every client.",
  services: [
    "Plant and Equipment Hire",
    "General Product Supply",
    "Procurement and Sourcing",
    "Hardware and Construction Supplies",
    "Agricultural Supplies",
    "Electronics and Electrical Products",
    "Safety Equipment and Protective Gear",
    "Specialized and Custom Product Sourcing"
  ],
  founded: "2020",
  location: "Lilongwe, Malawi",
  email: "",
  phone: "",
  icon: ShoppingBag,
  heroImage: "/images/out.jpg",
  image: "/images/out.jpg",
  accent: "#7C3AED",
  highlights: [
    "Wide range of quality products",
    "Local and international sourcing",
    "Competitive and transparent pricing",
    "Plant and equipment hire",
    "Procurement solutions for organizations and individuals",
    "Reliable communication and timely delivery"
  ],
  focus: "Procurement & General Supplies"
},
{
  id: "voyages",
  name: "The Anchorage Voyages",
  shortName: "Voyages",
  tagline: "Travel Beyond Destinations. Experience the Journey.",
  description:
    "The Anchorage Voyages is a premium travel and tour company creating memorable journeys for business, leisure, and adventure travelers. We provide international and domestic travel packages, visa facilitation, adventure and cultural tours, luxury escapes, wellness retreats, heritage experiences, and tailor-made holidays designed around each client's preferences and budget. Through strong partnerships with airlines, hotels, and tour operators, combined with professional travel consultancy and 24/7 assistance, we make travel seamless, comfortable, safe, and meaningful.",
  services: [
    "International and Domestic Travel Packages",
    "Visa Facilitation",
    "Adventure and Cultural Tours",
    "Luxury Escapes and Exclusive Experiences",
    "Wellness Retreats",
    "Heritage and Cultural Trips",
    "Tailor-Made Holidays",
    "Corporate and Business Travel",
    "Flight and Accommodation Booking",
    "24/7 Travel Assistance"
  ],
  founded: "2020",
  location: "Lilongwe, Malawi",
  email: "",
  phone: "",
  icon: Plane,
  heroImage: "/images/v.jpg",
  image: "/images/c.jpg",
  accent: "#0EA5E9",
  highlights: [
    "International and domestic travel solutions",
    "Visa facilitation for destinations including UAE and China",
    "Tailor-made holidays and exclusive experiences",
    "Adventure, cultural and heritage tours",
    "Global airline, hotel and tour operator partnerships",
    "Professional travel consultants",
    "24/7 customer support and travel assistance"
  ],
  focus: "Travel & Tourism"
},
{ id: "mining",
  name: "The Anchorage Mining Solutions", 
  shortName: "Mining", 
  tagline: "Responsible Mining. Sustainable Value. Shared Prosperity.", 
  
  description: "The Anchorage Mining Solutions is a Malawian mineral exploration and gold mining venture focused on developing responsible, scalable, and inclusive mining operations. The company combines mineral exploration and large-scale mining ambitions with small-scale mining operations and strategic partnerships with artisanal and small-scale miners and cooperatives. Through the application of modern geological, geospatial, and exploration technologies, responsible mining practices, environmental stewardship, and community engagement, The Anchorage Mining Solutions seeks to unlock Malawi's mineral potential while creating sustainable value for communities, investors, government, and other stakeholders.", 
  services: [ "Mineral Exploration and Geological Surveys", "Gold Exploration and Resource Development", "Small-Scale Gold Mining", "Mining Claim Acquisition and Development", "Artisanal and Small-Scale Miner Partnerships", "Mining Equipment and Technical Support", "Gold Processing and Value Addition", "Mineral Supply Chain and Traceability", "Mining Project Development", "Environmental and ESG Management", "Community Engagement and Development" ], 
  founded: "2020", 
  location: "Lilongwe, Malawi", 
  email: "", 
  phone: "", 
  icon: Pickaxe, 
  heroImage: "/images/m.jpg", 
  image: "/images/gold.jpg", 
  accent: "#CA8A04", 
  
  highlights: [ "Gold exploration and mining development", "GIS, geochemical and geophysical exploration", "Small-scale mining and mining claim development", "Partnerships with artisanal miners and cooperatives", "Gold processing and mineral value addition", "Responsible and environmentally conscious mining", "Community-focused mining development", "Transparent and traceable mineral supply chains" ], 
  focus: "Mineral Exploration & Gold Mining" }
 
]

export function getAllSubsidiaries(): Subsidiary[] {
  return subsidiaries
}

export function getSubsidiaryById(id: string): Subsidiary | undefined {
  return subsidiaries.find((s) => s.id === id)
}
