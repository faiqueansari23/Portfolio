'use client';

import {
  Smartphone,
  Server,
  Cloud,
  Rocket,
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
  },
  {
    icon: Rocket,
    title: 'App Store & Play Store Delivery',
    description:
      'Proven release management: building APK/AAB packages, submitting to Google Play, configuring Xcode, managing TestFlight betas, and releasing to the Apple App Store.',
  },
  {
    icon: Layers,
    title: 'Architecture & Native Features',
    description:
      'Integrating RESTful APIs, centralized Redux state management, background services, hardware sensors, and complex device permissions for resilient operation.',
  },
  {
    icon: Server,
    title: 'Full-Stack & Cloud Foundation',
    description:
      'Building complete solutions with the MERN stack (Node.js, Express, MongoDB) and relational MySQL databases, complemented by AWS deployment tools.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#F4F1EB]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C25E30]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] border border-[#DDD7CC] text-[#2C2A26] text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5 text-[#121211]" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121211] tracking-tight">
            About <span className="gradient-text-accent">Faique Akmal Ansari</span>
          </h2>
          <p className="mt-3 text-[#57544E] text-sm sm:text-base leading-relaxed">
            A dedicated React Native Developer focused on building high-performance,
            production-grade mobile applications and end-to-end release workflows.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2DDD5] space-y-5 relative shadow-xs">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E2DDD5]">
                <div className="w-10 h-10 rounded-xl bg-[#EFECE6] border border-[#E2DDD5] flex items-center justify-center text-[#121211]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#121211]">
                    React Native Developer
                  </h3>
                  <p className="text-xs text-[#7D7971]">
                    Cowberry Industries • Surat / Nagpur, India
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4A4742] leading-relaxed">
                I am an experienced React Native developer specializing in building, deploying,
                and maintaining cross-platform mobile applications for Android and iOS, with
                apps published on both the <strong className="text-[#121211] font-bold">Google Play Store</strong>{' '}
                and the <strong className="text-[#121211] font-bold">Apple App Store</strong>.
              </p>

              <p className="text-sm sm:text-base text-[#4A4742] leading-relaxed">
                My core expertise spans modern JavaScript/TypeScript, REST API integration, Redux
                state management, and native device capabilities — including background tasks,
                hardware sensors, and permission pipelines. I also bring full-stack versatility
                with the MERN stack and MySQL databases.
              </p>

              {/* Secondary Salesforce Callout */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD5] text-xs sm:text-sm text-[#4A4742] space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-[#121211]">
                  <Cloud className="w-4 h-4 text-[#C25E30]" />
                  <span>Secondary Focus: Salesforce Learner (Fresher Level)</span>
                </div>
                <p className="text-xs text-[#57544E] leading-relaxed">
                  Alongside mobile development, I am an entry-level Salesforce learner with
                  foundational knowledge of Salesforce Administration, Flow Builder automation,
                  Apex Classes &amp; Triggers, SOQL, and Lightning Web Components (LWC) practiced in
                  a Developer Org and Trailhead Playground.
                </p>
              </div>

              {/* Verified Key Competencies checklist */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-[#7D7971] uppercase tracking-wider mb-3">
                  Core Engineering Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2C2A26]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E30] shrink-0" />
                    <span>Android APK / AAB Release Builds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E30] shrink-0" />
                    <span>iOS Builds via Xcode &amp; TestFlight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E30] shrink-0" />
                    <span>Production Play Store &amp; App Store Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E30] shrink-0" />
                    <span>Redux State Management &amp; REST APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E30] shrink-0" />
                    <span>Background Services &amp; Permissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E30] shrink-0" />
                    <span>Full-Stack MERN + MySQL Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Context Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-[#E2DDD5] flex items-center gap-3 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#121211] shrink-0" />
                <div>
                  <p className="text-[11px] text-[#7D7971] font-medium">Location</p>
                  <p className="text-xs font-bold text-[#121211]">Nagpur &amp; Surat, India</p>
                </div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#E2DDD5] flex items-center gap-3 shadow-2xs">
                <Smartphone className="w-4 h-4 text-[#C25E30] shrink-0" />
                <div>
                  <p className="text-[11px] text-[#7D7971] font-medium">Core Tech</p>
                  <p className="text-xs font-bold text-[#121211]">React Native Mobile</p>
                </div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#E2DDD5] flex items-center gap-3 shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#5E8262] shrink-0" />
                <div>
                  <p className="text-[11px] text-[#7D7971] font-medium">Store Apps</p>
                  <p className="text-xs font-bold text-[#121211]">Google Play &amp; App Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#E2DDD5] hover:border-[#121211] transition-all duration-200 shadow-2xs group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#121211] flex items-center justify-center text-[#FAF8F5] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#121211] group-hover:text-[#C25E30] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#57544E] leading-relaxed">
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
