'use client';

import { motion } from 'framer-motion';
import {
  Cloud,
  ShieldCheck,
  Cpu,
  Terminal,
  Sparkles,
  BookOpen,
  CheckCircle2,
  FolderGit2,
  Layers,
} from 'lucide-react';
import { salesforceLearning } from '@/lib/data';

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Cpu,
  Terminal,
  Sparkles,
  Cloud,
};

export default function Salesforce() {
  return (
    <section id="salesforce" className="py-24 relative overflow-hidden bg-[#070b14]/90">
      {/* Visual differentiation: Salesforce Blue ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-3">
            <Cloud className="w-3.5 h-3.5 text-sky-400" />
            <span>Currently Learning • Entry-Level / Fresher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Salesforce — <span className="gradient-text-salesforce">Self-Directed Learning</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Foundational knowledge of Salesforce Administration and Development (Apex, SOQL,
            LWC, Flows) practiced in a Developer Org and Trailhead Playground.
          </p>
        </div>

        {/* Clear Disclaimer Banner as requested */}
        <div className="max-w-4xl mx-auto mb-12 p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 backdrop-blur-md">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-300 shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-sky-200">
                Learning Journey &amp; Fresher Foundation
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {salesforceLearning.intro}
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {salesforceLearning.categories.map((cat, idx) => {
            const Icon = categoryIconMap[cat.iconName] || Cloud;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel rounded-2xl p-6 border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 space-y-4 hover:shadow-lg hover:shadow-sky-500/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                </div>

                <ul className="space-y-2">
                  {cat.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="flex items-start gap-2 text-xs text-slate-300/90 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Salesforce Practice Projects */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <FolderGit2 className="w-5 h-5 text-sky-400" />
              <span>Salesforce Practice Projects (Developer Org)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Hands-on configuration, automation, and Apex code developed in personal Developer Org
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salesforceLearning.projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-sky-500/20 flex flex-col justify-between hover:border-sky-500/40 transition-all space-y-4"
              >
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    {proj.environment}
                  </span>
                  <h4 className="text-base font-bold text-white">{proj.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Hands-On Work:
                    </p>
                    <ul className="space-y-1">
                      {proj.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-slate-300/80 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] text-sky-400/80 font-mono">
                  #DeveloperOrg #Trailhead
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
