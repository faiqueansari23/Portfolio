'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ShoppingBag,
  CreditCard,
  Package,
} from 'lucide-react';
import { projects } from '@/lib/data';

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured) || projects[0];

  return (
    <div className="relative mb-16">
      {/* Featured Project Header Tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#121211] text-[#FAF8F5] border border-[#121211] flex items-center gap-1.5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#C25E30] animate-pulse" />
          Featured Production Application
        </span>
        <span className="text-xs text-[#7D7971] hidden sm:inline">
          Live on Apple App Store &amp; Google Play Store
        </span>
      </div>

      {/* Main Large Visual Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl p-6 sm:p-10 bg-[#181716] border border-white/10 relative overflow-hidden shadow-xl"
      >
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C25E30]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Project Details & Technical Role (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#C25E30] mb-2">
                <ShoppingBag className="w-4 h-4" />
                <span>{featured.category}</span>
                <span>•</span>
                <span className="text-[#8C867C]">{featured.subtitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF8F5] tracking-tight">
                {featured.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#B5B1A8] leading-relaxed">
              {featured.description}
            </p>

            {/* Published On Stores Badge Bar */}
            <div className="p-3.5 rounded-xl bg-[#121211] border border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-[#8C867C] uppercase tracking-wider">
                Store Availability:
              </span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-[#5E8262]/15 border border-[#5E8262]/30 text-[#88B28D] text-xs font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Google Play Store
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-[#FAF8F5] text-xs font-semibold flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5" />
                  Apple App Store (TestFlight &amp; Prod)
                </span>
              </div>
            </div>

            {/* Role & Technical Contribution */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#8C867C] uppercase tracking-wider">
                Key Architectural Contributions:
              </h4>
              <ul className="space-y-2">
                {featured.role.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B5B1A8]">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E30] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-[#8C867C] uppercase tracking-wider mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {featured.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#242321] border border-white/5 text-xs font-medium text-[#FAF8F5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Elegant Abstract Mobile UI Placeholder / Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/18] rounded-[36px] bg-[#121211] p-3.5 shadow-2xl border-2 border-white/15 ring-1 ring-white/5 select-none">
              {/* Dynamic Island Notch */}
              <div className="w-28 h-5 bg-[#050505] rounded-full mx-auto mb-4 flex items-center justify-end px-3">
                <div className="w-2 h-2 rounded-full bg-[#2A2926]" />
              </div>

              {/* Inside App Mockup UI */}
              <div className="space-y-3 px-1">
                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#FAF8F5] flex items-center justify-center text-[#121211] font-extrabold text-[10px]">
                      C
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      Cowberry Store
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <ShoppingBag className="w-3 h-3 text-[#D4CEC3]" />
                  </div>
                </div>

                {/* Mockup Banner */}
                <div className="rounded-xl bg-[#242321] p-3 border border-white/10 space-y-1">
                  <span className="text-[9px] font-bold text-[#C25E30] uppercase tracking-wider">
                    E-Commerce Mobile
                  </span>
                  <p className="text-xs font-bold text-white">Production Release v1.0</p>
                  <div className="h-1.5 w-24 bg-white/20 rounded-full mt-1" />
                </div>

                {/* Mockup Catalog Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] space-y-2">
                    <div className="w-full h-16 rounded-lg bg-[#1E1D1B] flex items-center justify-center">
                      <Package className="w-6 h-6 text-[#D4CEC3]" />
                    </div>
                    <div className="h-2 w-16 bg-white/20 rounded-sm" />
                    <div className="h-2 w-10 bg-[#C25E30] rounded-sm" />
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] space-y-2">
                    <div className="w-full h-16 rounded-lg bg-[#1E1D1B] flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-[#D4CEC3]" />
                    </div>
                    <div className="h-2 w-16 bg-white/20 rounded-sm" />
                    <div className="h-2 w-10 bg-[#D4CEC3] rounded-sm" />
                  </div>
                </div>

                {/* Cart & Checkout Action Strip */}
                <div className="p-2.5 rounded-xl bg-[#222120] border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-[#FAF8F5] font-medium">Checkout Flow</p>
                    <p className="text-[9px] text-[#A8A49C] font-mono">REST API • Redux</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#121211] font-bold text-[10px]">
                    Pay Now
                  </div>
                </div>

                {/* Native Store Status Badge */}
                <div className="p-2 rounded-lg bg-black/60 border border-white/5 text-center">
                  <span className="text-[9px] text-[#88B28D] font-mono">
                    ✓ Verified on Play Store &amp; App Store
                  </span>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
