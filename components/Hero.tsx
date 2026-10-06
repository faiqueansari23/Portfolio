'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Layers,
  ArrowRight,
  FileDown,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { contactData, heroStats } from '@/lib/data';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-18 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern bg-radial-fade opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I&apos;m{' '}
                <span className="gradient-text-accent block sm:inline">
                  {contactData.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 tracking-tight flex items-center gap-2 pt-1">
                <span>React Native Developer</span>
                <span className="text-cyan-400 font-mono text-sm px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 hidden sm:inline-block">
                  iOS &amp; Android
                </span>
              </p>
            </motion.div>

            {/* Supporting Copy (Directly aligned with resume) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal"
            >
              Building, deploying, and maintaining production-ready cross-platform mobile
              applications for Android and iOS. Hands-on expertise in{' '}
              <span className="text-cyan-300 font-medium">React Native</span>,{' '}
              <span className="text-indigo-300 font-medium">REST API integration</span>,{' '}
              <span className="text-purple-300 font-medium">Redux</span>, background services,
              and native device features — with apps live on the{' '}
              <strong className="text-white font-semibold">Google Play Store</strong> and{' '}
              <strong className="text-white font-semibold">Apple App Store</strong>.
            </motion.p>

            {/* Quick Tech Highlights Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                Cross-Platform (iOS &amp; Android)
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Live Production Apps
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                MERN Stack + MySQL
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={contactData.resumeUrl}
                download="Faique_Akmal_Ansari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-200 active:scale-95"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] text-sm font-medium transition-colors"
              >
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Stats Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.08]"
            >
              {heroStats.map((stat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-[11px] text-slate-400 font-medium">{stat.label}</p>
                  <p className="text-xs sm:text-sm font-semibold text-white tracking-tight mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Architecture SVG Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Visual Canvas Display Area */}
            <div className="w-full rounded-2xl glass-panel p-3 border border-white/10 relative overflow-hidden shadow-2xl shadow-black/60 min-h-[420px] flex items-center justify-center">
              <div className="w-full">
                <HeroIllustration />
              </div>
            </div>

            {/* Quick Context Caption */}
            <p className="text-center text-[11px] text-slate-400 mt-3 flex items-center justify-center gap-1.5">
              <span>Vector architectural illustration of the mobile application stack</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}