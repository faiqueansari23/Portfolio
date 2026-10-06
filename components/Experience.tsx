'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  FolderGit2,
} from 'lucide-react';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#141312]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C25E30]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22211F] border border-white/10 text-[#FAF8F5] text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#C25E30]" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FAF8F5] tracking-tight">
            Professional <span className="gradient-text-accent-dark">Experience</span>
          </h2>
          <p className="mt-3 text-[#A8A49C] text-sm sm:text-base leading-relaxed">
            Hands-on cross-platform engineering, real-time application development, and production
            store deployment releases.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#C25E30] via-[#5E5A52] to-[#252422]" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isCurrent = exp.current;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Node Icon */}
                  <div
                    className={`absolute left-1 sm:left-5 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                      isCurrent
                        ? 'border-[#C25E30] bg-[#181716] shadow-md ring-4 ring-[#C25E30]/20'
                        : 'border-[#78746C] bg-[#181716] shadow-xs ring-4 ring-white/5'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                        isCurrent ? 'bg-[#C25E30] animate-pulse' : 'bg-[#78746C]'
                      }`}
                    />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`bg-[#181716] p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-sm ${
                      isCurrent ? 'border-[#C25E30]/35' : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl font-bold text-[#FAF8F5] tracking-tight">
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C25E30]/15 text-[#E0845B] border border-[#C25E30]/30">
                              Current Role
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-[#D4CEC3] mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-[#8C867C]">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#78746C]" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#78746C]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Associated Production Projects */}
                    <div className="py-4">
                      <p className="text-xs font-bold text-[#8C867C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FolderGit2 className="w-3.5 h-3.5 text-[#C25E30]" />
                        Key Applications Built in this Role:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.projectsMentioned.map((proj, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-2.5 py-1 rounded-lg bg-[#242321] border border-white/5 text-xs font-medium text-[#E0DDD5]"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities list */}
                    <div className="space-y-2.5 pt-1">
                      <p className="text-xs font-bold text-[#8C867C] uppercase tracking-wider mb-2">
                        Core Responsibilities &amp; Technical Contributions:
                      </p>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B5B1A8] leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#C25E30] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Pills */}
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-[#222120] border border-white/5 text-[11px] font-medium text-[#D4CEC3]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
