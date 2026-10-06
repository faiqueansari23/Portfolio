'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Layers,
  ArrowRight,
  FileDown,
  Sparkles,
  ShieldCheck,
  Box,
  Code2,
} from 'lucide-react';
import { contactData, heroStats } from '@/lib/data';
import HeroIllustration from './HeroIllustration';
import Hero3DScene from './Hero3DScene';

export default function Hero() {
  const [visualMode, setVisualMode] = useState<'svg' | '3d'>('svg');

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#F8F6F1]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern bg-radial-fade opacity-80 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#C25E30]/6 via-[#D4CEC3]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#E2DDD5] text-[#2C2A26] text-xs font-semibold shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C25E30] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C25E30]" />
              </span>
              <span>React Native Developer • Cross-Platform Mobile Engineer</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#121211] leading-[1.08]">
                Hi, I&apos;m{' '}
                <span className="gradient-text-accent block sm:inline">
                  {contactData.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4A4742] tracking-tight flex items-center gap-2 pt-1">
                <span>React Native Developer</span>
                <span className="text-[#2C2A26] font-mono text-xs px-2.5 py-1 rounded-md bg-[#EFECE6] border border-[#E2DDD5] font-semibold hidden sm:inline-block">
                  iOS &amp; Android
                </span>
              </p>
            </motion.div>

            {/* Supporting Copy (Directly aligned with resume) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#57544E] leading-relaxed max-w-2xl font-normal"
            >
              Building, deploying, and maintaining production-ready cross-platform mobile
              applications for Android and iOS. Hands-on expertise in{' '}
              <span className="text-[#121211] font-semibold">React Native</span>,{' '}
              <span className="text-[#121211] font-semibold">REST API integration</span>,{' '}
              <span className="text-[#121211] font-semibold">Redux</span>, background services,
              and native device features — with apps live on the{' '}
              <strong className="text-[#121211] font-bold">Google Play Store</strong> and{' '}
              <strong className="text-[#121211] font-bold">Apple App Store</strong>.
            </motion.p>

            {/* Quick Tech Highlights Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E2DDD5] text-xs text-[#2C2A26] flex items-center gap-1.5 font-medium shadow-2xs">
                <Smartphone className="w-3.5 h-3.5 text-[#121211]" />
                Cross-Platform (iOS &amp; Android)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E2DDD5] text-xs text-[#2C2A26] flex items-center gap-1.5 font-medium shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5E8262]" />
                Live Production Apps
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E2DDD5] text-xs text-[#2C2A26] flex items-center gap-1.5 font-medium shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-[#7D7971]" />
                MERN Stack + MySQL
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E2DDD5] text-xs text-[#2C2A26] flex items-center gap-1.5 font-medium shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C25E30]" />
                Salesforce Learner (Admin + Apex)
              </span>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121211] hover:bg-[#252422] text-[#FAF8F5] font-semibold text-sm shadow-md transition-all duration-200 active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={contactData.resumeUrl}
                download="Faique_Akmal_Ansari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#FAF9F6] border border-[#E2DDD5] hover:border-[#C7C1B5] text-[#121211] font-semibold text-sm transition-all duration-200 active:scale-95 shadow-2xs"
              >
                <FileDown className="w-4 h-4 text-[#C25E30]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[#57544E] hover:text-[#121211] hover:bg-black/[0.04] text-sm font-medium transition-colors"
              >
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Stats Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#E2DDD5]"
            >
              {heroStats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/70 border border-[#E2DDD5] shadow-2xs">
                  <p className="text-[11px] text-[#7D7971] font-medium">{stat.label}</p>
                  <p className="text-xs sm:text-sm font-bold text-[#121211] tracking-tight mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Showcase (Vector + 3D) (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Visual Canvas Display Area */}
            <div className="w-full rounded-2xl bg-white/85 p-3.5 border border-[#E2DDD5] relative overflow-hidden shadow-sm min-h-[460px] flex flex-col items-center justify-center">
              {/* Sleek Editorial Switcher */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-[#EFECE6] border border-[#E2DDD5] mb-2 z-20">
                <button
                  type="button"
                  onClick={() => setVisualMode('svg')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    visualMode === 'svg'
                      ? 'bg-[#121211] text-[#FAF8F5] shadow-2xs'
                      : 'text-[#57544E] hover:text-[#121211]'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Vector Blueprint</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVisualMode('3d')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    visualMode === '3d'
                      ? 'bg-[#121211] text-[#FAF8F5] shadow-2xs'
                      : 'text-[#57544E] hover:text-[#121211]'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>Interactive 3D</span>
                </button>
              </div>

              <div className="w-full flex items-center justify-center">
                {visualMode === 'svg' ? <HeroIllustration /> : <Hero3DScene />}
              </div>
            </div>

            {/* Quick Context Caption */}
            <p className="text-center text-[11px] text-[#7D7971] mt-3 flex items-center justify-center gap-1.5">
              <span>{visualMode === 'svg' ? 'Vector architectural schematic of production mobile stack' : 'Interactive 3D device model • Rotate & explore'}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}