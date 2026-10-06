'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationList } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#F8F6F1]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] border border-[#DDD7CC] text-[#2C2A26] text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#121211]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121211] tracking-tight">
            Academic <span className="gradient-text-accent">Education</span>
          </h2>
          <p className="mt-3 text-[#57544E] text-sm sm:text-base leading-relaxed">
            Formal computer science and secondary education credentials.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2DDD5] hover:border-[#121211] transition-all duration-300 flex flex-col justify-between group space-y-5 shadow-2xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#121211] text-[#FAF8F5] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5] border border-[#E2DDD5] text-[#2C2A26] flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#C25E30]" />
                    {edu.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#121211] group-hover:text-[#C25E30] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-[#57544E] font-medium mt-1">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5] flex items-center gap-2 text-xs text-[#7D7971]">
                <Award className="w-3.5 h-3.5 text-[#C25E30] shrink-0" />
                <span>{edu.boardOrUniversity}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
