import { getAllSubsidiaries } from "@/lib/sub"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Briefcase,
  Car,
  Compass,
  CreditCard,
  Globe2,
  Image as ImageIcon,
  Network,
  Package,
  Radio,
  ShoppingBag,
  Sprout,
  TrendingUp,
  Truck,
  Wheat,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import { TagSocial } from "../social/social-links"

/**
 * Design note
 * -----------
 * Restyled after tesla.com: full-bleed photo/video blocks, oversized
 * flat typography, near-zero chrome (no card shadows, no rounded
 * boxes), thin hairline dividers instead of borders-as-decoration, and
 * small pill CTAs. Sections alternate white and near-black instead of
 * Tesla's black/white, with the brand's navy standing in for Tesla's
 * black and gold standing in for Tesla's sparing red accent.
 *
 * No real photography exists yet, so every image/video slot renders
 * as a <MediaPlaceholder /> instead of a broken <img> — swap each one
 * for next/image or <video> once assets are ready; each is commented
 * with what belongs there.
 *
 * Body only — no <html>/<head>, no site header/nav, no footer.
 */

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "1000+", label: "Clients Served" },
  { value: "8", label: "Subsidiaries" },
  { value: "100%", label: "Client Satisfaction" },
]

const partners = [
  "USAID",
  "EGENCO",
  "Water Board",
  "MDF",
  "DAPP",
  "Mangochi District Council",
  "Public Service Pension Trust",
  "Riders for Health",
  "CEPA",
  "DAI-GFS",
  "FDH",
  "Malawi Council of Sports",
  "Malawi Liverpool Wellcome Trust",
  "Stephanos Foundation",
  "Women's Legal Resources Centre",
  "Mai Khanda",
]

type SLink = `/subsidiary/${string}`

const subsidiaries = [
  {
    name: "Autoshop", focus: "Automotive services & repairs", image: "/images/auto.jpg",
    link: "/subsidiary/autoshop"
  },
  {
    name: "Communications", focus: "Strategic communications & media", image: "/images/four.jpg",
    link: "/subsidiary/communications"
  },
  {
    name: "Motors", focus: "Quality vehicles, every budget", image: "https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp",
    link: "/subsidiary/motors"
  },
  {
    name: "Logistics", focus: "Supply chain & freight management", image: "https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2021/05/global-supply.png?fit=757%2C393&ssl=1",
    link: "/subsidiary/logistics"
  },
  {
    name: "Agritech", focus: "Sustainable agricultural technology", image: "/images/two.jpg",
    link: "/subsidiary/agritech"
  },
  // {
  //   name: "Paye", focus: "Modern, secure payment solutions", image: "https://londonsba.org.uk/wp-content/uploads/2023/11/cardano-blockchain-platform-with-smartphone-1-1200x800.jpg",
  //   link: "/subsidiary/paye"
  // },
  // {
  //   name: "Voyages", focus: "Curated travel experiences", image: "https://virginvoyages.imgix.net/dam/jcr:49c2bbf2-e893-4abb-af12-36b1cd95dc70/wave-season-2025.png",
  //   link: "/subsidiary/voyages"
  // },
  // {
  //   name: "Outlet", focus: "Accessible, quality retail", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/50/ee/e5/sicilia-outlet-village.jpg?w=800&h=500&s=1",
  //   link: "/subsidiary/outlet"
  // },
] satisfies { name: string; focus: string; image: string,link : SLink }[]

const aflasafeMissions = [
  "Protect human health by ensuring safe, aflatoxin-free food.",
  "Empower farmers with solutions that increase yield and market access.",
  "Safeguard the environment through nature-based crop technologies.",
]

const focusAreas = [
  { title: "Consultancy Services", desc: "Research, ICT, media, education & development consulting.", icon: Briefcase },
  { title: "Commercial Agriculture", desc: "Anchor Farm model & structured out-grower schemes.", icon: Wheat },
  { title: "Export Market Development", desc: "International buyer linkages for compliant produce.", icon: Globe2 },
  { title: "Agri-Input Distribution", desc: "Including Aflasafe® and other essential inputs.", icon: Package },
  { title: "Commodity Trading", desc: "Aggregation and trading across key value chains.", icon: TrendingUp },
  { title: "Value Chain Development", desc: "Strengthening systems from farm to market.", icon: Network },
]

const leaders = [
  { name: "Davy Jambo", title: "Group Chief Executive Officer", image :"/images/davie.png" },
  { name: "Mwasalipa Mfune", title: "Group Executive Associate" , image :"/images/mwasa1.png"},
  { name: "Khumbo Jambo", title: "Operations Director" , image :"/images/khumbo.jpg"},
  { name: "Saleka Mawimba", title: "Digital Marketing Officer" , image :"/images/saleka.jpg"},
]

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------

/** Stand-in for a photo or video until real assets are available. */
function MediaPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-2 bg-gradient-to-br from-[#0A2540] to-[#163C63] text-white/30 ${className}`}
    >
      <ImageIcon size={18} strokeWidth={1.5} />
      <span className="text-[11px] font-medium uppercase tracking-[0.2em]">{label}</span>
    </div>
  )
}

function Buttons({
  dark,
  primaryLabel = "Get in Touch",
  secondaryLabel = "Learn More",
}: {
  dark: boolean
  primaryLabel?: string
  secondaryLabel?: string
}) {
  const outline = dark
    ? "border-white/30 text-white hover:bg-white hover:text-[#0A0F14]"
    : "border-black/20 text-black hover:bg-black hover:text-white"
  const solid = "bg-[#C9A227] text-[#0A0F14] hover:bg-[#DBB53A]"

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-200 ${solid}`}>
        {primaryLabel}
      </button>
      <button className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-200 ${outline}`}>
        {secondaryLabel}
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      {/* Real hero image with Next.js Image optimization */}
      <Image
        src="/images/zx.jpeg"
        alt="The Anchorage Group operations in Malawi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={90}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B10]/95 via-[#050B10]/40 to-[#050B10]/20" />
      
      {/* Optional: Add a subtle bottom gradient for extra depth */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050B10]/80 to-transparent" />

      <div className="relative flex h-full flex-col items-center justify-end px-6 pb-20 text-center text-white sm:px-8 md:pb-24">
        {/* Optional: Add a badge or tagline above the heading */}
        {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DBB53A]/30 bg-[#DBB53A]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[#DBB53A] backdrop-blur-sm">
          Since 2019
        </div> */}
        
        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
          The Anchorage Group
        </h1>
        
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 drop-shadow-md md:text-lg">
          Malawi&apos;s leading provider of practical, customised solutions —
          delivering excellence across multiple industries since 2019.
        </p>
        
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#DBB53A]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#DBB53A] backdrop-blur-sm border border-[#DBB53A]/20">
          <span className="h-1.5 w-1.5 rounded-full bg-[#DBB53A]"></span>
          Authorised Exclusive Distributor of Aflasafe® in Malawi
        </div>
        
        <div className="mt-10">
          <Buttons 
            dark 
            primaryLabel="Get in Touch" 
            secondaryLabel="Explore Our Companies" 
          />
        </div>
      </div>
    </section>
  );
}


function Stats() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-black/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center gap-1 px-4 py-4 text-center">
            <span className="text-4xl font-semibold tracking-tight text-black md:text-5xl">{s.value}</span>
            <span className="text-xs uppercase tracking-[0.15em] text-black/50">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="overflow-hidden border-y border-black/10 bg-white py-10">
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <style>{`
          @keyframes anchorage-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        <div className="flex w-max animate-[anchorage-marquee_40s_linear_infinite] items-center gap-14">
          {[...partners, ...partners].map((p, i) => (
            <span key={`${p}-${i}`} className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-black/35">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* <Image src={"https://siouxfalls.business/wp-content/uploads/2019/05/GettyImages-1092744152-copy.jpg"} width={200} height={200} alt="Team / Operations Photo" className="h-[420px] w-full md:h-auto" /> */}
          <video
              autoPlay
              muted
              loop
              playsInline
              className=" w-full h-full object-cover"
            >
              <source src={"https://res.cloudinary.com/datlh0njj/video/upload/v1787132317/q4szz8m7synkduhmiaao.mp4"} type="video/mp4" />
            </video>

      <div className="flex flex-col justify-center bg-white px-8 py-16 md:px-16 md:py-0">
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">Who We Are</h2>
        <p className="mt-6 max-w-md leading-relaxed text-black/60">
          Founded in 2019, The Anchorage Group is a dynamic Malawian
          conglomerate delivering innovative and sustainable solutions across diverse
          sectors through our specialised subsidiaries shaping markets
          and creating lasting impact in Malawi and beyond.
        </p>

        <div className="mt-10 max-w-md divide-y divide-black/10 border-t border-black/10">
          <div className="py-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A227]">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Deliver exceptional, tailored solutions through our diverse
              subsidiaries, meeting their unique needs.
            </p>
          </div>
          <div className="py-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A227]">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              To be Africa&apos;s most trusted provider of sustainable,
              customised solutions driving client success through
              technology and partnership.
            </p>
          </div>
        </div>
              <TagSocial className="mt-10"/>

      </div>
    </section>
  )
}

function Subsidiaries() {
  const subsidiaries = getAllSubsidiaries()
  return (
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
            Our Subsidiaries
          </h2>
          <p className="mt-4 text-black/60">
            Eight subsidiaries. One shared commitment to quality, creativity, and impact.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {subsidiaries.map((s) => (
            <a key={s.name} href={`/subsidiary/${s.id}`} className="group block">
              {/* Image container with hover effects */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#F3F3F3] rounded-lg">
                <Image
                  src={s.image}
                  alt={`${s.name} - ${s.focus}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Optional: Add company tag on hover */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full">
                    {s.focus}
                  </span>
                </div>
              </div>
              
              <h3 className="mt-5 text-lg font-medium text-black transition-colors group-hover:text-[#C9A227]">
                {s.name}
              </h3>
              <p className="mt-1 text-sm text-black/50">{s.focus}</p>
              <span className="mt-3 inline-flex items-center gap-1 border-b border-black/20 pb-0.5 text-xs font-medium uppercase tracking-wide text-black transition-all group-hover:border-[#C9A227] group-hover:text-[#C9A227]">
                Learn More 
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


export function AflasafeFeature() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Replace with a real photo of crops, farmers, or Aflasafe product */}
      <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={"https://res.cloudinary.com/datlh0njj/video/upload/v1786803897/znhmiz8ginb36fzt1io9.mov"} type="video/mp4" />
            </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B10]/95 via-[#050B10]/60 to-transparent" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24 text-white md:px-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DBB53A]">
          Exclusive Aflasafe® Distributor
        </span>
        <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Advancing Food Safety &amp; Agricultural Resilience
        </h2>
        <p className="mt-6 max-w-lg leading-relaxed text-white/70">
          As the official IITA-approved distributor of Aflasafe in Malawi, we
          help reduce aflatoxin contamination in maize, sorghum and groundnuts unlocking access to premium, compliant markets.
        </p>

        <ul className="mt-8 max-w-lg space-y-3">
          {aflasafeMissions.map((m) => (
            <li key={m} className="flex items-start gap-3 text-sm leading-relaxed text-white/80 md:text-base">
              <span className="mt-2 h-px w-4 shrink-0 bg-[#C9A227]" />
              {m}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Buttons dark primaryLabel="Learn About Anchorage Agritech" secondaryLabel="Contact Sales" />
        </div>
      </div>
    </section>
  )
}

export function FocusAreas() {
  return (
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">Core Focus Areas</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 divide-y divide-black/10 border-t border-black/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
          {focusAreas.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="flex flex-col gap-3 border-black/10 px-0 py-8 sm:border-r sm:px-8 lg:[&:nth-child(3n)]:border-r-0">
                <Icon size={22} strokeWidth={1.25} className="text-[#C9A227]" />
                <h3 className="text-base font-medium text-black">{f.title}</h3>
                <p className="text-sm leading-relaxed text-black/50">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section className="bg-[#F7F7F7] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">Our Leadership</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <div key={l.name}>
              {/* <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#0A2540] to-[#163C63]" /> */}
              <img src={l.image} alt="" className="aspect-[4/5] w-full "/>
              <h3 className="mt-4 text-base font-medium text-black">{l.name}</h3>
              <p className="mt-0.5 text-sm text-black/50">{l.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBanner() {
  return (
    <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-[#050B10] px-6 text-center text-white">
      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Let&apos;s Build Something Together
      </h2>
      <p className="mt-4 max-w-md text-white/60">
        Agriculture, mobility, logistics, communications — our team is ready
        to build the right solution with you.
      </p>
      <div className="mt-8">
        <Buttons dark primaryLabel="Get in Touch" secondaryLabel="sales@theanchoragegroup.com" />
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AnchorageLanding() {
  return (
    <main className="bg-white">
      <Hero />
      <Stats />
      {/* <Partners /> */}
      <About />
      <Subsidiaries />
      {/* <FocusAreas /> */}
      {/* <Leadership /> */}
      {/* <CtaBanner /> */}
    </main>
  )
}