"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"

interface NavItemProps {
  name: string
  href: string
  dropdown?: boolean
}

const navItems: NavItemProps[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Subsidiaries",
    href: "/subsidiaries",
  },
  {
    name: "Aflasafe",
    href: "/aflasafe",
  },
  // {
  //   name: "Projects",
  //   href: "/projects",
  // },
]

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="The Anchorage Group - Home"
      className="flex shrink-0 items-center"
    >
      <Image
        src="/images/v2.png"
        alt="The Anchorage Group"
        width={200}
        height={10}
        priority
        className="
          h-auto
          w-28
          object-contain
          sm:w-30
          md:w-34
          lg:w-38
          xl:w-32
        "
      />
    </Link>
  );
};

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300
          ${isScrolled ? 'bg-[#171A20]/95 shadow-lg shadow-black/20' : 'bg-[#171A20]/80'}
          backdrop-blur-xl
          border-b
          ${isScrolled ? 'border-white/10' : 'border-transparent'}
        `}
      >
        <nav
          className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    px-4
                    py-2
                    text-[13px]
                    font-medium
                    tracking-[-0.01em]
                    transition-colors
                    duration-300
                    ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
                  `}
                >
                  {item.name}
                  
                  {/* Active/Hover indicator */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-4
                      right-4
                      h-px
                      transition-all
                      duration-300
                      ${isActive ? 'bg-[#C9A84C]' : 'bg-[#C9A84C] scale-x-0'}
                    `}
                  />
                  
                  {/* Hover background */}
                  <span
                    className="
                      absolute
                      inset-0
                      -z-10
                      rounded-full
                      bg-white/0
                      transition-all
                      duration-300
                      group-hover:bg-white/5
                    "
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/#contact-us"
            className="
              hidden
              items-center
              gap-2
              rounded-full
              bg-[#C9A84C]
              px-6
              py-2.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#171A20]
              transition-all
              duration-300
              hover:bg-[#D7B960]
              hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)]
              hover:scale-105
              active:scale-[0.97]
              lg:flex
            "
          >
            Contact Us
            <ArrowUpRight size={14} strokeWidth={2} />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/5
              lg:hidden
            "
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <div className="relative w-5 h-5">
              <Menu 
                size={20} 
                strokeWidth={1.5}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X 
                size={20} 
                strokeWidth={1.5}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`
            overflow-hidden
            bg-[#171A20]
            transition-all
            duration-500
            ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            lg:hidden
            ${isMenuOpen ? 'max-h-[600px] opacity-100 border-t border-white/[0.08]' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-5 sm:px-8">
            {/* Mobile links */}
            <div className="divide-y divide-white/[0.07]">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      group
                      flex
                      items-center
                      justify-between
                      py-4
                      text-xl
                      font-medium
                      tracking-[-0.025em]
                      transition-all
                      duration-300
                      ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
                    `}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <span className="flex items-center gap-3">
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                      )}
                      {item.name}
                    </span>

                    <span
                      className="
                        text-white/30
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#C9A84C]
                      "
                    >
                      <ArrowUpRight size={18} strokeWidth={1.5} />
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile CTA */}
            <Link
              href="/#contact-us"
              onClick={closeMenu}
              className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#C9A84C]
                px-6
                py-3.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#171A20]
                transition-all
                duration-300
                hover:bg-[#D7B960]
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              Contact Us
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </Link>

            {/* Mobile contact info */}
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/40">
              <span>Malawi</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Since 2019</span>
            </div>
          </div>
        </div>
      </header>

      {/* Prevent page content from sitting underneath fixed nav */}
      <div className="h-[72px]" />
    </>
  )
}