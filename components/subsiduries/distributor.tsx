import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Globe, MapPin, Phone } from "lucide-react";

/**
 * Enhanced Design Notes
 * ---------------------
 * - Real photography and imagery replacing abstract icons
 * - Cinematic, immersive visual storytelling
 * - Asymmetric layouts with generous whitespace
 * - Subtle parallax-ready backgrounds
 * - Premium automotive/luxury brand aesthetic
 * - Interactive hover states with smooth transitions
 */

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const abbySpecialisations = [
  "Flocculants & Coagulants",
  "Dewatering Aids",
  "pH Adjustment Chemicals",
  "Clarification & Settlement Aids",
  "Custom-Blended Solutions",
  "Forming Lubricants",
  "Automotive Magnetic Materials",
  "Sound Deadening Materials",
  "Textile Additives",
  "Sanitizers & Hygiene Products",
];

const abbyAccreditations = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "B-BBEE Level 4",
];

const abbyIndustries = [
  {
    title: "Water Treatment & Municipal",
    desc: "Full range of water treatment chemicals for municipal waterworks, dams, wastewater plants, and effluent treatment.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=85",
    tag: "Municipal Solutions"
  },
  {
    title: "Automotive & Auto-Component",
    desc: "Metal forming chemicals, magnetic materials, sound-deadening systems, and production process solutions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85",
    tag: "Production Excellence"
  },
  {
    title: "Textile Manufacturing",
    desc: "Antistatic agents, scouring aids, processing additives, and fibre-specific chemical support.",
    image: "/images/tx.webp",
    tag: "Fabric Innovation"
  },
  {
    title: "General Industrial",
    desc: "Degreasers, pH adjusters, antifoam agents, hygiene solutions, and custom formulations.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=85",
    tag: "Industrial Solutions"
  },
];

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function DistributorHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071A2D]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=95')",
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2D]/95 via-[#071A2D]/80 to-[#071A2D]/40" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071A2D] to-transparent" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A227]">
        <div className="absolute inset-0 animate-pulse bg-[#C9A227]/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Our Business At A Glance
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Trusted
            <span className="block text-[#C9A227]">Distributors</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            The Anchorage Group proudly partners with industry-leading
            manufacturers to bring world-class products, innovative solutions,
            and trusted brands to Malawi and beyond.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#abby-laboratories"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C9A227] px-8 py-4 text-base font-semibold text-[#071A2D] transition-all duration-300 hover:bg-[#DBB53A] hover:shadow-xl hover:shadow-[#C9A227]/20"
            >
              Explore Our Partners
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-[#C9A227] hover:text-[#C9A227]"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">4+</div>
              <div className="mt-1 text-sm text-white/60">Global Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">25+</div>
              <div className="mt-1 text-sm text-white/60">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">10+</div>
              <div className="mt-1 text-sm text-white/60">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AbbyLaboratories() {
  return (
    <section id="abby-laboratories" className="bg-white px-6 py-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Manufacturer Partner
          </span>
          <h2 className="mt-6 text-5xl font-bold tracking-tight text-[#0A2540] md:text-6xl lg:text-7xl">
            Abby Laboratories
          </h2>
          <p className="mt-6 text-xl text-[#0A2540]/60">
            Manufacturer of Water Treatment & Industrial Chemicals
          </p>
          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
        </div>

        {/* Contact Info Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="tel:+27415810512"
            className="group flex items-center gap-4 rounded-lg border border-[#0A2540]/10 p-6 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#F8F9FA]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227]/10">
              <Phone size={20} className="text-[#C9A227]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0A2540]">Phone</div>
              <div className="text-sm text-[#0A2540]/60">+27 (0)41 581 0512</div>
            </div>
          </a>
          
          <a
            href="https://www.abbylabs.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-[#0A2540]/10 p-6 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#F8F9FA]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227]/10">
              <Globe size={20} className="text-[#C9A227]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0A2540]">Website</div>
              <div className="text-sm text-[#0A2540]/60">www.abbylabs.co.za</div>
            </div>
          </a>
          
          <div className="flex items-center gap-4 rounded-lg border border-[#0A2540]/10 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227]/10">
              <MapPin size={20} className="text-[#C9A227]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0A2540]">Location</div>
              <div className="text-sm text-[#0A2540]/60">Walmer, Gqeberha</div>
            </div>
          </div>
        </div>

        {/* About with Image */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/abba.jpg"
                alt="Abby Laboratories Facility"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-lg font-semibold text-white">Since 1999</div>
                  <div className="text-sm text-white/80">Chemical Manufacturing Excellence</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold tracking-tight text-[#0A2540]">
              Chemical Manufacturing Excellence
            </h3>
            <p className="mt-6 leading-relaxed text-[#0A2540]/60 text-lg">
              Abby Laboratories is a chemical manufacturer based in Gqeberha, 
              supplying the water treatment, automotive, textile, and related 
              industries since 1999. We manufacture water treatment chemicals 
              and formulate specialised chemicals tailored to our customers' 
              specific applications.
            </p>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Accreditations & Compliance
              </h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {abbyAccreditations.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-2 rounded-full bg-[#C9A227]/10 px-5 py-2.5 text-sm font-medium text-[#0A2540]"
                  >
                    <CheckCircle2 size={16} className="text-[#C9A227]" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industries Served with Images */}
        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold tracking-tight text-[#0A2540]">
            Industries We Serve
          </h3>
          <p className="mt-4 text-center text-[#0A2540]/60">
            Comprehensive solutions across multiple sectors
          </p>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {abbyIndustries.map((industry, index) => (
              <div
                key={industry.title}
                className="group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-[#C9A227] px-3 py-1 text-xs font-semibold text-[#0A2540]">
                      {industry.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white">
                      {industry.title}
                    </h4>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#0A2540]/60">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialisations */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold tracking-tight text-[#0A2540]">
              Our Specialisations
            </h3>
            <p className="mt-4 text-[#0A2540]/60">
              Tailored chemical solutions for diverse industrial applications
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {abbySpecialisations.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-lg border border-[#0A2540]/10 p-4 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#F8F9FA]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#C9A227] group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-sm font-medium text-[#0A2540]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WolfLubricants() {
  return (
    <section className="relative overflow-hidden bg-[#0A2540] px-6 py-32 md:px-10 lg:px-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="order-2 text-white lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Authorized Distributor
            </span>
            <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Wolf Lubricants
            </h2>
            
            <p className="mt-8 max-w-lg text-xl leading-relaxed text-white/70">
              The Anchorage Group Limited is an official and authorized WOLF 
              LUBRICANTS DISTRIBUTOR. This authorized distributor certificate 
              gives the privilege to sell and service Wolf lubricants to 
              consumers in Malawi.
            </p>

            {/* Certificate Details */}
            <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">Awarded in</span>
                <span className="text-sm font-medium text-white">Hemiksem, Belgium</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">Valid From</span>
                <span className="text-sm font-medium text-white">01.01.2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">Valid To</span>
                <span className="text-sm font-medium text-white">31.12.2026</span>
              </div>
            </div>

            {/* Signatories */}
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-white">Philippe Verellen</p>
                <p className="mt-1 text-xs text-white/50">Managing Director</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Franck Jolly</p>
                <p className="mt-1 text-xs text-white/50">
                  Global Sales Trademarks & Marketing Director
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://wolflubes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C9A227] px-8 py-4 text-base font-semibold text-[#0A2540] transition-all duration-300 hover:bg-[#DBB53A] hover:shadow-xl hover:shadow-[#C9A227]/20"
              >
                <Globe size={20} />
                Visit Website
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </div>

          {/* Certificate Visual with Image */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative w-full max-w-lg">
              {/* Certificate Card */}
              <div className="relative overflow-hidden rounded-xl border border-[#C9A227]/30 bg-gradient-to-br from-[#0F2B45] to-[#1A3C63] p-10 shadow-2xl">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 h-20 w-20 border-t-2 border-l-2 border-[#C9A227]" />
                <div className="absolute top-0 right-0 h-20 w-20 border-t-2 border-r-2 border-[#C9A227]" />
                <div className="absolute bottom-0 left-0 h-20 w-20 border-b-2 border-l-2 border-[#C9A227]" />
                <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-[#C9A227]" />
                
                {/* Logo placeholder */}
                <div className="mb-8 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A227]">
                    <span className="text-3xl font-bold text-[#0A2540]">W</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                    Certificate of Authorization
                  </p>
                  <h3 className="mt-4 text-3xl font-bold text-white">
                    WOLF LUBRICANTS
                  </h3>
                  <p className="mt-3 text-lg text-white/70">
                    The Anchorage Group Limited
                  </p>
                  <p className="mt-2 text-sm text-white/50">
                    is an official and authorized distributor
                  </p>
                  
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-sm text-white/50">Valid for distribution in</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Malawi</p>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50">
                    <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
                    2026 Calendar Year
                  </div>
                </div>
              </div>
              
              {/* Floating image */}
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <div className="relative h-32 w-32 overflow-hidden rounded-lg border-4 border-[#0A2540] shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=85"
                    alt="Lubricants"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AflasafeDistributor() {
  return (
    <section className="bg-white px-6 py-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Visual with Real Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/maize.webp"
                  alt="Agriculture Field"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-lg font-semibold text-white">Maize</div>
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden rounded-lg mt-8">
                <Image
                  src="/images/gn.webp"
                  alt="Groundnuts"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-lg font-semibold text-white">Groundnuts</div>
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden rounded-lg -mt-8">
                <Image
                  src="/images/sg.jpg"
                  alt="Sorghum"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-lg font-semibold text-white">Sorghum</div>
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/f.webp"
                  alt="Farming"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-lg font-semibold text-white">Farming</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Agriculture Partner
            </span>
            <h2 className="mt-6 text-5xl font-bold tracking-tight text-[#0A2540] md:text-6xl lg:text-7xl">
              Aflasafe
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-[#0A2540]/60">
              As the official IITA-approved distributor of Aflasafe in Malawi, 
              The Anchorage Group helps reduce aflatoxin contamination in 
              maize, sorghum and groundnuts — unlocking access to premium, 
              compliant markets for Malawian farmers.
            </p>
            
            <div className="mt-10 space-y-4 border-t border-[#0A2540]/10 pt-10">
              {[
                "Protect human health by ensuring safe, aflatoxin-free food",
                "Empower farmers with solutions that increase yield and market access",
                "Safeguard the environment through nature-based crop technologies",
              ].map((mission) => (
                <div key={mission} className="flex items-start gap-4 text-lg text-[#0A2540]/70">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10">
                    <CheckCircle2 size={16} className="text-[#C9A227]" />
                  </div>
                  {mission}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/subsidiary/agritech"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-[#0A2540]/20 px-8 py-4 text-base font-medium text-[#0A2540] transition-all duration-300 hover:bg-[#0A2540] hover:text-white"
              >
                Learn About Anchorage Agritech
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DistributorCta() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0A2540] px-6 py-24 text-center text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/80 to-[#0A2540]" />
      
      <div className="relative z-10">
        <h2 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Partner With Us
        </h2>
        <p className="mt-6 max-w-xl text-xl text-white/60">
          Looking for reliable distribution or manufacturing partnerships? 
          Let&apos;s explore how we can work together.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:sales@theanchoragegroup.com"
            className="group inline-flex items-center gap-3 rounded-full bg-[#C9A227] px-8 py-4 text-base font-semibold text-[#0A2540] transition-all duration-300 hover:bg-[#DBB53A] hover:shadow-xl hover:shadow-[#C9A227]/20"
          >
            Contact Sales
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
          <a
            href="tel:+2651234567"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#0A2540]"
          >
            <Phone size={18} />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function DistributorRow() {
  return (
    <main className="bg-white">
      <DistributorHero />
      <AbbyLaboratories />
      <WolfLubricants />
      <AflasafeDistributor />
      <DistributorCta />
    </main>
  );
}