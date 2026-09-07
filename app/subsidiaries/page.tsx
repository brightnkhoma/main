"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Compass,
  CreditCard,
  Radio,
  ShoppingBag,
  Sprout,
  Truck,
  Wrench,
  ArrowUpRight,
  MapPin,
  Building2,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { getAllSubsidiaries, type Subsidiary } from "@/lib/sub";

const C = {
  navy: "#0B1F3F",
  navy2: "#13294B",
  gold: "#C6A15B",
  goldLight: "#E8CE8B",
  goldDeep: "#9C7A34",
  paper: "#FBFAF7",
  ink: "#1B1F27",
  line: "#E4DFD3",
};

const ICONS: Record<string, LucideIcon> = { 
  Wrench, 
  Radio, 
  Car, 
  Truck, 
  Sprout, 
  CreditCard, 
  Compass, 
  ShoppingBag 
};

interface SubsidiaryCardProps {
  subsidiary: Subsidiary;
  index: number;
}

function SubsidiaryCard({ subsidiary: s, index }: SubsidiaryCardProps) {
  const Icon = s.icon;
  const [imageError, setImageError] = useState(false);
  
  return (
    <Link
      href={`/subsidiary/${s.id}`}
      className="group relative flex flex-col rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ border: `1px solid ${C.line}` }}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <Image
            src={s.image}
            alt={s.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${s.accent}20, ${C.navy}20)` }}
          >
            <Icon size={48} strokeWidth={1} style={{ color: s.accent }} />
          </div>
        )}
        
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(11,31,63,0) 40%, rgba(11,31,63,0.7) 100%)`,
          }}
        />
        
        <div
          className="absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
          style={{ background: "rgba(255,255,255,0.95)" }}
        >
          <Icon size={18} style={{ color: s.accent }} strokeWidth={2} />
        </div>
        
        <div 
          className="absolute top-3 right-3 text-xs font-bold text-white/70"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
        
        <div
          className="absolute bottom-3 left-4 right-4 text-xs font-semibold tracking-wide uppercase"
          style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
        >
          {s.focus}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-semibold text-lg mb-2"
          style={{ color: C.navy, fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {s.shortName}
        </h3>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: "#5A5F6E" }}>
          {s.tagline}
        </p>

        <div
          className="mt-auto flex items-center justify-between pt-4 text-xs font-semibold uppercase tracking-wide"
          style={{ borderTop: `1px solid ${C.line}`, color: C.goldDeep }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} />
            {s.location || "Malawi"}
          </span>
          <span className="inline-flex items-center gap-1 transition-all group-hover:gap-2">
            View
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      <span
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: s.accent }}
      />
    </Link>
  );
}

export default function SubsidiariesPage() {
  const subsidiaries = getAllSubsidiaries();
  
  return (
    <div style={{ background: C.paper }} className="w-full min-h-screen">
      <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif" }}>
        {/* Compact Header with Background Image */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-[#0B1F3F]">
          {/* Background Image */}
          <div className="absolute inset-0">
           <Image
           src={"https://res.cloudinary.com/datlh0njj/image/upload/v1776243379/samples/ecommerce/analog-classic.jpg"}
            fill
           alt=""
              className="absolute inset-0 w-full h-full object-cover"
              />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F] via-transparent to-[#0B1F3F]/50" />
          </div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase mb-3"
              style={{ color: C.goldLight }}
            >
              <span className="inline-block w-6 h-px" style={{ background: C.gold }} />
              The Anchorage Group
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1
                  className="text-white text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Our Subsidiaries
                </h1>
                <p className="text-white/70 mt-2 max-w-lg text-sm md:text-base">
                  Eight businesses, one group — spanning automotive, logistics,
                  agritech, media, finance, travel, and retail across Malawi.
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: C.gold }}>8</div>
                  <div className="text-xs text-white/60">Companies</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: C.gold }}>6+</div>
                  <div className="text-xs text-white/60">Sectors</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: C.gold }}>2019</div>
                  <div className="text-xs text-white/60">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          {/* Section header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: C.goldDeep }}
              >
                <span className="inline-block w-6 h-px" style={{ background: C.gold }} />
                Our Portfolio
              </div>
              <h2 className="mt-1 text-xl md:text-2xl font-semibold" style={{ color: C.navy }}>
                Explore Our Companies
              </h2>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subsidiaries.map((s, index) => (
              <SubsidiaryCard key={s.id} subsidiary={s} index={index} />
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-black/50 mb-3">
              Interested in partnering with The Anchorage Group?
            </p>
            <Link
              href="/#contact-us"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ 
                background: `linear-gradient(180deg, ${C.goldLight}, ${C.gold})`,
                color: C.navy 
              }}
            >
              Get in Touch
              <ChevronRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}