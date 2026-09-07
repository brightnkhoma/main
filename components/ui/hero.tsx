"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[55svh] sm:min-h-[60svh] lg:min-h-[65svh] overflow-hidden bg-darkBlue-950">
      {/* Background Image */}
      <Image
        src="https://png.pngtree.com/thumb_back/fh260/background/20231027/pngtree-hexagonal-abstract-background-with-a-black-textured-surface-image_13704307.png"
        alt="Abstract hexagonal background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Heavy Dark Overlays for Text Readability */}
      <div className="absolute inset-0 bg-darkBlue-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-darkBlue-950/98 via-darkBlue-950/85 to-darkBlue-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-darkBlue-950/95 via-darkBlue-950/50 to-darkBlue-950/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[55svh] sm:min-h-[60svh] lg:min-h-[65svh] max-w-[1400px] flex-col justify-between px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#F5D56C]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
            Malawi · Since 2019
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl pt-8 sm:pt-10 lg:pt-12">
          {/* Small Heading - Bright Gold */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#F5D56C] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            The Anchorage Group
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl text-[clamp(2.2rem,5.5vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
          >
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Empowering
            </span>
            <br />
            <span className="text-[#F5D56C] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Innovation,
            </span>
            <br />
            <span className="text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Driving Sustainable and inclusive Growth,
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-white/90 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
          >
            The Anchorage Group is a Malawian company championing innovation, sustainability, and strategic 
            excellence across the agriculture, mining, communication, and commercial service sectors.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F5D56C] px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A1628] shadow-lg shadow-black/30 transition-all duration-300 hover:bg-[#F7DF8B] hover:shadow-xl hover:shadow-[#F5D56C]/20 active:scale-[0.98]"
            >
              Discover TAG
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>

            <Link
              href="/subsidiaries"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:border-white/60 hover:bg-white/20 hover:shadow-xl active:scale-[0.98]"
            >
              Our Businesses
            </Link>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t border-white/25 pt-4 sm:pt-5"
        >
          <div className="flex gap-6 sm:gap-8">
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-white/70 font-semibold">
                Established
              </span>
              <span className="mt-0.5 block text-sm font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                2019
              </span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-white/70 font-semibold">
                Based in
              </span>
              <span className="mt-0.5 block text-sm font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                Malawi
              </span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-2.5 text-white/70">
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} strokeWidth={2} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}