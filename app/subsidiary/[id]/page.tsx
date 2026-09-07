"use client"

import { useState, useEffect, useRef } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUp,
  Image as ImageIcon, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ChevronDown,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  Briefcase,
  Target,
  Globe,
  Menu,
  X,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { getAllSubsidiaries, getSubsidiaryById } from "@/lib/sub"

/**
 * Fallback shown if a photo is missing or fails to load — keeps the
 * navy/gold brand mark instead of a broken-image icon.
 */
function MediaFallback({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-2 bg-gradient-to-br from-[#0A2540] to-[#163C63] text-white/30 ${className}`}
    >
      <ImageIcon size={18} strokeWidth={1.5} />
      <span className="text-[11px] font-medium uppercase tracking-[0.2em]">{label}</span>
    </div>
  )
}

/**
 * Real photo with a graceful degrade: shows a soft accent-tinted
 * skeleton while loading, and swaps to the brand fallback if the
 * source ever 404s.
 */
function Photo({
  src,
  alt,
  label,
  accent,
  className = "",
  imgClassName = "",
  priority = false,
}: {
  src?: string
  alt: string
  label: string
  accent?: string
  className?: string
  imgClassName?: string
  priority?: boolean
}) {
  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(true)

  if (!src || failed) {
    return <MediaFallback label={label} className={className} />
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ backgroundColor: accent ? `${accent}1A` : undefined }}
    >
      {/* Loading skeleton */}
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setFailed(true)}
        onLoad={() => setLoading(false)}
        className={`object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'} ${imgClassName}`}
        quality={90}
      />
    </div>
  )
}

export default function SubsidiaryPage() {
  const params = useParams() as any
  const subsidiary = getSubsidiaryById(params.id)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const overviewRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  
  if (!subsidiary) notFound()

  const Icon = subsidiary.icon
  const others = getAllSubsidiaries().filter((s) => s.id !== subsidiary.id)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      setShowScrollTop(window.scrollY > 400)
      
      // Calculate reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)

      // Track active section
      const sections = [overviewRef.current, servicesRef.current, contactRef.current]
      const scrollPosition = window.scrollY + 200
      
      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id)
          }
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const stats = [
    { icon: Award, label: "Established", value: subsidiary.founded },
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: TrendingUp, label: "Projects", value: "100+" },
  ]

  return (
    <main className="bg-white">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 z-[60] h-1 transition-all duration-300"
        style={{ 
          width: `${readingProgress}%`,
          backgroundColor: subsidiary.accent 
        }}
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          style={{ border: `2px solid ${subsidiary.accent}` }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} style={{ color: subsidiary.accent }} />
        </button>
      )}

      {/* ---------- Hero Section ---------- */}
      <section 
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden bg-[#0A2540]"
      >
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <Photo
            src={subsidiary.heroImage}
            alt={`${subsidiary.name} — hero visual`}
            label={`${subsidiary.shortName} — Hero Visual`}
            accent={subsidiary.accent}
            className="h-full w-full"
            imgClassName="scale-105"
            priority
          />
          {/* Enhanced overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B10]/90 via-[#050B10]/70 to-[#050B10]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B10]/60 via-transparent to-transparent" />
        </div>

        {/* Animated particles/gradient effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{
            background: `radial-gradient(circle at 30% 50%, ${subsidiary.accent}20, transparent 50%)`
          }} />
        </div>

        {/* Fixed Navigation */}
        <div className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050B10]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-all hover:text-white/80"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">The Anchorage Group</span>
                <span className="sm:hidden">Back</span>
              </Link>
              
             

              {/* Quick Links */}
              <div className="hidden lg:flex items-center gap-4">
                <button 
                  onClick={() => scrollToSection('overview')}
                  className={`text-xs transition-colors ${activeSection === 'overview' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className={`text-xs transition-colors ${activeSection === 'services' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`text-xs transition-colors ${activeSection === 'contact' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                >
                  Contact
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-16 z-40 md:hidden">
            <div className="bg-[#050B10]/95 backdrop-blur-md shadow-lg">
              <div className="px-6 py-4 space-y-2">
                <button 
                  onClick={() => { scrollToSection('overview'); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                >
                  Overview
                </button>
                <button 
                  onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex min-h-screen flex-col justify-center py-24">
            <div className="max-w-xl">
              {/* Company badge with animation */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 animate-fade-in-up">
                <span className="text-xs font-medium text-white/80">
                  {subsidiary.focus}
                </span>
              </div>
              
              {/* Title with animation */}
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl animate-fade-in-up animation-delay-100">
                {subsidiary.shortName}
              </h1>
              
              {/* Tagline with animation */}
              <p className="mt-4 text-lg text-white/80 md:text-xl animate-fade-in-up animation-delay-200">
                {subsidiary.tagline}
              </p>
              
              {/* Quick stats */}
              {/* <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm animate-fade-in-up animation-delay-300">
                <span className="inline-flex items-center gap-2 text-white/70">
                  <Calendar size={14} className="text-white/50" />
                  Est. {subsidiary.founded}
                </span>
                
                {subsidiary.location && (
                  <span className="inline-flex items-center gap-2 text-white/70">
                    <MapPin size={14} className="text-white/50" />
                    {subsidiary.location}
                  </span>
                )}
              </div> */}
              
              {/* CTA Buttons with enhanced hover effects */}
              <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in-up animation-delay-400">
                <Link
                  href="/#contact-us"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: subsidiary.accent }}
                >
                  Get in Touch
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                
                <button
                  onClick={() => scrollToSection('overview')}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/50"
                >
                  Learn More
                  <ChevronDown size={16} className="transition-transform group-hover:translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/50">Scroll to explore</span>
            <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
              <div className="h-2 w-2 rounded-full bg-white/70 animate-bounce mx-auto" />
            </div>
          </div>
        </div> */}
      </section>

      {/* ---------- Overview Section ---------- */}
      <section 
        ref={overviewRef}
        id="overview" 
        className="grid grid-cols-1 md:grid-cols-2 scroll-mt-20"
      >
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24 animate-fade-in">
          <span 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: subsidiary.accent }}
          >
            <span className="h-px w-8" style={{ backgroundColor: subsidiary.accent }} />
            Overview
          </span>
          
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black md:text-4xl lg:text-5xl">
            About {subsidiary.shortName}
          </h2>
          
          <div className="flex flex-col space-y-4">
            {subsidiary.description.split("***").map((paragraph, index) => (
              <p 
                key={index}
                className="mt-4 max-w-md leading-relaxed text-black/60 md:text-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Key Highlights with enhanced styling */}
          {subsidiary.highlights && subsidiary.highlights.length > 0 && (
            <div className="mt-8 space-y-4">
              {subsidiary.highlights.map((highlight, index) => (
                <div 
                  key={highlight} 
                  className="group flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 
                      size={20} 
                      className="transition-transform group-hover:scale-110"
                      style={{ color: subsidiary.accent }}
                    />
                  </div>
                  <span className="text-sm text-black/70 group-hover:text-black transition-colors">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}
          
          <p className="mt-8 text-sm text-black/40 animate-fade-in">
            Part of The Anchorage Group · Est. {subsidiary.founded}
          </p>
        </div>

        <Photo
          src={subsidiary.image}
          alt={`${subsidiary.name} at work`}
          label={`${subsidiary.shortName} Photo`}
          accent={subsidiary.accent}
          className="h-[360px] w-full md:h-auto group"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
      </section>

      {/* ---------- Services Section ---------- */}
      <section 
        ref={servicesRef}
        id="services"
        className="bg-[#F7F7F7] px-6 py-24 md:px-10 scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between animate-fade-in">
            <div>
              <span 
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: subsidiary.accent }}
              >
                <span className="h-px w-8" style={{ backgroundColor: subsidiary.accent }} />
                Services
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                What We Do
              </h2>
              <p className="mt-4 text-black/60">
                Our core services and areas of expertise
              </p>
            </div>
            <span className="hidden md:block text-6xl font-bold text-black/5 animate-fade-in">
              {String(subsidiary.services.length).padStart(2, '0')}
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subsidiary.services.map((service, i) => (
              <div
                key={service}
                className="group relative bg-white p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="font-mono text-xs transition-colors flex-shrink-0"
                    style={{ color: subsidiary.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium text-black group-hover:text-gray-700 transition-colors">
                    {service}
                  </span>
                </div>
                
                {/* Hover effect */}
                <div 
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-2"
                  style={{ backgroundColor: subsidiary.accent }}
                />
                
                {/* Arrow icon on hover */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-2">
                  <ArrowRight size={16} style={{ color: subsidiary.accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact CTA Section ---------- */}
      <section 
        ref={contactRef}
        id="contact"
        className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-[#050B10] px-6 text-center text-white scroll-mt-20"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full animate-pulse" style={{
            background: `radial-gradient(circle at 50% 50%, ${subsidiary.accent}30, transparent 70%)`
          }} />
        </div>
        
        <div className="relative z-10 max-w-3xl animate-fade-in-up">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Work With {subsidiary.shortName}
          </h2>
          <p className="mt-4 text-white/60 md:text-lg">
            Reach out and our team will connect you with the right people.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact-us"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-[#0A0F14] transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: subsidiary.accent }}
            >
              Get in Touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            
            {subsidiary.email && (
              <a
                href={`mailto:${subsidiary.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/50"
              >
                <Mail size={14} className="transition-transform group-hover:scale-110" />
                {subsidiary.email}
              </a>
            )}
            
            {subsidiary.phone && (
              <a
                href={`tel:${subsidiary.phone}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/50"
              >
                <Phone size={14} className="transition-transform group-hover:scale-110" />
                {subsidiary.phone}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ---------- More from the Group ---------- */}
      <section className="bg-white px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between animate-fade-in">
            <div>
              <span 
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: subsidiary.accent }}
              >
                <span className="h-px w-8" style={{ backgroundColor: subsidiary.accent }} />
                Explore
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black md:text-3xl">
                More From The Anchorage Group
              </h2>
            </div>
            <Link 
              href="/subsidiaries" 
              className="group hidden md:inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black transition-all"
            >
              View All
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.slice(0, 4).map((s, index) => {
              const OtherIcon = s.icon
              return (
                <Link 
                  key={s.id} 
                  href={`/subsidiary/${s.id}`} 
                  className="group block animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-shadow group-hover:shadow-xl">
                    <Photo
                      src={s.image}
                      alt={s.name}
                      label={s.shortName}
                      accent={s.accent}
                      className="h-full w-full"
                      imgClassName="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                    
                    <div
                      className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition-all group-hover:scale-110 group-hover:rotate-12"
                      style={{ backgroundColor: `${s.accent}CC` }}
                    >
                      <OtherIcon size={20} strokeWidth={1.5} className="text-white" />
                    </div>
                    
                    <span className="absolute bottom-4 right-4 text-xs font-medium text-white/80">
                      Est. {s.founded}
                    </span>
                    
                    {/* Hover overlay with CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-black backdrop-blur-sm">
                        View Company
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-medium text-black transition-colors group-hover:text-gray-600">
                        {s.shortName}
                      </h3>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-black/50 transition-all group-hover:text-black">
                        View Details
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                    <ExternalLink size={16} className="text-black/30 transition-colors group-hover:text-black" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}