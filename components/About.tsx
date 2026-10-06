'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Server,
  Cloud,
  Rocket,
  Shield,
  Layers,
  MapPin,
  Briefcase,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { contactData } from '@/lib/data';

const pillars = [
  {
    icon: Smartphone,
    title: 'Cross-Platform Mobile Dev',
    description:
      'Architecting smooth, performant mobile apps for both iOS and Android using React Native, maximizing code reuse without sacrificing native feel.',
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/30',
  },
  {
    icon: Rocket,
    title: 'App Store & Play Store Delivery',
    description:
      'Proven release management: building APK/AAB packages, submitting to Google Play, configuring Xcode, managing TestFlight betas, and releasing to the Apple App Store.',
    color: 'from-indigo-500 to-purple-600',
    borderColor: 'border-indigo-500/30',
  },
  {
    icon: Layers,
    title: 'Architecture & Native Features',
    description:
      'Integrating RESTful APIs, centralized Redux state management, background services, hardware sensors, and complex device permissions for resilient operation.',
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Server,
    title: 'Full-Stack & Cloud Foundation',
    description:
      'Building complete solutions with the MERN stack (Node.js, Express, MongoDB) and relational MySQL databases, complemented by AWS deployment tools.',
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/30',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-accent">Faique Akmal Ansari</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A dedicated React Native Developer focused on building high-performance,
            production-grade mobile applications and end-to-end release workflows.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5 relative">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    React Native Developer
                  </h3>
                  <p className="text-xs text-slate-400">
                    Cowberry Industries • Surat / Nagpur, India
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I am an experienced React Native developer specializing in building, deploying,
                and maintaining cross-platform mobile applications for Android and iOS, with
                apps published on both the <strong className="text-white">Google Play Store</strong>{' '}
                and the <strong className="text-white">Apple App Store</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                My core expertise spans modern JavaScript/TypeScript, REST API integration, Redux
                state management, and native device capabilities — including background tasks,
                hardware sensors, and permission pipelines. I also bring full-stack versatility
                with the MERN stack and MySQL databases.
              </p>

              {/* Secondary Salesforce Callout as requested */}
              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 text-xs sm:text-sm text-sky-200/90 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-sky-300">
                  <Cloud className="w-4 h-4 text-sky-400" />
                  <span>Secondary Focus: Salesforce Learner (Fresher Level)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Alongside mobile development, I am an entry-level Salesforce learner with
                  foundational knowledge of Salesforce Administration, Flow Builder automation,
                  Apex Classes &amp; Triggers, SOQL, and Lightning Web Components (LWC) practiced in
                  a Developer Org and Trailhead Playground.
                </p>
              </div>

              {/* Verified Key Competencies checklist */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Core Engineering Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Android APK / AAB Release Builds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>iOS Builds via Xcode &amp; TestFlight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Production Play Store &amp; App Store Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Redux State Management &amp; REST APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Background Services &amp; Permissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full-Stack MERN + MySQL Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Context Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Location</p>
                  <p className="text-xs font-bold text-white">Nagpur &amp; Surat, India</p>
                </div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Core Tech</p>
                  <p className="text-xs font-bold text-white">React Native Mobile</p>
                </div>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Store Apps</p>
                  <p className="text-xs font-bold text-white">Google Play &amp; App Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel p-5 rounded-2xl border ${pillar.borderColor} hover:bg-white/[0.04] transition-all duration-200 group`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
