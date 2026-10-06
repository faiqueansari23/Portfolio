'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Code,
  Rocket,
  Layers,
  Database,
  Wrench,
  Users,
  CheckCircle,
} from 'lucide-react';
import { skillCategories } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Code,
  Rocket,
  Layers,
  Database,
  Wrench,
  Users,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#090b14]/70">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="gradient-text-accent">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Curated strictly from verified resume experience in mobile engineering, release
            management, full-stack development, and team collaboration.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.iconName] || Code;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 text-xs font-medium text-slate-200 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtext marker */}
                <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-500">
                  <CheckCircle className="w-3 h-3 text-cyan-400" />
                  <span>Verified Resume Competency</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
