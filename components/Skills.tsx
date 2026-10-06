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
import MobileCardStack from './MobileCardStack';

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
  const renderSkillCard = (
    category: (typeof skillCategories)[0],
    _index: number,
    isDeckMode?: boolean
  ) => {
    const Icon = iconMap[category.iconName] || Code;

    return (
      <div
        className={`bg-white rounded-2xl p-6 border border-[#E2DDD5] flex flex-col justify-between h-full transition-all duration-300 ${
          isDeckMode ? 'shadow-2xl' : 'shadow-xl hover:border-[#121211]'
        }`}
      >
        <div className="space-y-4">
          {/* Category Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#121211] text-[#FAF8F5] flex items-center justify-center shrink-0 shadow-2xs">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#121211] group-hover:text-[#C25E30] transition-colors">
                {category.title}
              </h3>
              <p className="text-[11px] text-[#7D7971] font-medium">
                {category.description}
              </p>
            </div>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {category.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-semibold text-[#2C2A26] transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Subtext marker */}
        <div className="pt-5 mt-5 border-t border-[#E2DDD5] flex items-center gap-1.5 text-[11px] text-[#7D7971]">
          <CheckCircle className="w-3.5 h-3.5 text-[#C25E30]" />
          <span>Verified Resume Competency</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 relative bg-[#F3EFE8]">
      {/* Background ambient lighting safely clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#C25E30]/5 rounded-full blur-[140px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] border border-[#DDD7CC] text-[#2C2A26] text-xs font-semibold mb-3">
            <Code className="w-3.5 h-3.5 text-[#121211]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121211] tracking-tight">
            Skills &amp; <span className="gradient-text-accent">Technologies</span>
          </h2>
          <p className="mt-3 text-[#57544E] text-sm sm:text-base leading-relaxed">
            Curated strictly from verified resume experience in mobile engineering, release
            management, full-stack development, and team collaboration.
          </p>
        </div>

        {/* Mobile View: Interactive Stack & Swipe Deck */}
        <MobileCardStack
          items={skillCategories}
          renderCard={renderSkillCard}
          theme="light"
          initialMode="stack"
        />

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.iconName] || Code;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-[#E2DDD5] hover:border-[#121211] transition-all duration-300 flex flex-col justify-between group shadow-2xs"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#121211] text-[#FAF8F5] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#121211] group-hover:text-[#C25E30] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-[#7D7971] font-medium">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E2DDD5] hover:border-[#121211] hover:bg-white text-xs font-semibold text-[#2C2A26] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtext marker */}
                <div className="pt-5 mt-5 border-t border-[#E2DDD5] flex items-center gap-1.5 text-[11px] text-[#7D7971]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C25E30]" />
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
