"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Eye, Target } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-darkBlue-950/60">
              Our Direction
            </span>
          </div>
          
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-darkBlue-950 max-w-3xl">
            Guided by purpose,
            <br />
            <span className="text-gold-500">driven by impact.</span>
          </h2>
        </motion.div>

        {/* Vision - Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-20 lg:mb-24"
        >
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-darkBlue-950 flex items-center justify-center">
                <Eye size={22} className="text-gold-400" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-darkBlue-950">
                01 — Vision
              </span>
            </div>

            <h3 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-darkBlue-950 mb-6">
              Africa's most trusted provider of sustainable solutions.
            </h3>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-darkBlue-900/80 max-w-xl font-medium">
              Empowering growth through innovation, technology, and 
              partnerships that enhance livelihoods and promote environmental 
              stewardship across the continent.
            </p>

            {/* Vision Points */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Innovation-driven growth",
                "Environmental stewardship",
                "Community empowerment",
                "Sustainable partnerships"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  <p className="text-sm text-darkBlue-900 font-semibold leading-6">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src="https://framerusercontent.com/images/7z1hXX6sKwqOJVdRhrabioWYc6U.png"
              alt="Sustainable development in Africa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-darkBlue-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-darkBlue-950/90 via-darkBlue-950/40 to-darkBlue-950/30" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Our Aspiration
                </span>
              </div>
              <p className="text-white/90 text-sm font-medium leading-6 max-w-md">
                Building a future where African innovation leads sustainable development across every sector we touch.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission - Image Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Image */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden group lg:order-1 order-2">
            <Image
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/405230/567571_198506.jpeg"
              alt="Team collaboration and innovation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-darkBlue-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-darkBlue-950/90 via-darkBlue-950/40 to-darkBlue-950/30" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Our Purpose
                </span>
              </div>
              <p className="text-white/90 text-sm font-medium leading-6 max-w-md">
                Uniting diverse expertise to create solutions that transform challenges into lasting opportunities.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center lg:order-2 order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center">
                <Target size={22} className="text-darkBlue-950" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-darkBlue-950">
                02 — Mission
              </span>
            </div>

            <h3 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-darkBlue-950 mb-6">
              Turning challenges into opportunities.
            </h3>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-darkBlue-900/80 max-w-xl font-medium">
              To harness the collective expertise of our diverse subsidiaries 
              to deliver impactful, innovative, and sustainable solutions 
              across various sectors.
            </p>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-darkBlue-900/80 max-w-xl mt-4 font-medium">
              We are dedicated to supporting Malawi's development journey 
              by connecting people, ideas, and resources that create lasting 
              value for businesses, communities, and the planet.
            </p>

            {/* CTA Link */}
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-darkBlue-950 hover:text-gold-600 transition-colors group"
              >
                Learn more about our approach
                <span className="text-gold-500 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}