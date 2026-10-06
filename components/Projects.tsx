'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  Smartphone,
  Server,
  Shield,
  Layers,
  Sparkles,
  CheckCircle2,
  Radio,
  Users,
  Compass,
  ExternalLink,
} from 'lucide-react';
import { projects } from '@/lib/data';
import FeaturedProject from './FeaturedProject';

type FilterType = 'all' | 'store' | 'fullstack' | 'native';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Filter logic based strictly on actual project data
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'store') {
      return project.publishedOn && project.publishedOn.length > 0;
    }
    if (activeFilter === 'fullstack') {
      return project.id === 'koding-street';
    }
    if (activeFilter === 'native') {
      return project.id === 'anti-theft' || project.id === 'lantern360';
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-text-accent">Projects</span> &amp; Applications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world mobile applications built, deployed, and maintained with React Native,
            native features, and full-stack integration.
          </p>
        </div>

        {/* Featured Project Showcase */}
        <FeaturedProject />

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white">All Portfolio Applications</h3>
            <p className="text-xs text-slate-400">Applications documented in official resume</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'store', label: 'Play Store & App Store' },
              { id: 'fullstack', label: 'Full-Stack (MERN + MySQL)' },
              { id: 'native', label: 'Native Sensors & Tracking' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as FilterType)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white bg-white/[0.03] border border-white/5 hover:bg-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isStorePublished =
                project.publishedOn && project.publishedOn.length > 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/50"
                >
                  <div className="space-y-4">
                    {/* Card Top: Category & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      {isStorePublished && project.storeUrl ? (
  <a
    href={project.storeUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${project.title} on the app store`}
    className="group"
  >
    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 transition-all duration-200 group-hover:bg-emerald-500/25 group-hover:border-emerald-400/50 group-hover:text-emerald-200 cursor-pointer">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      Store Published
      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
    </span>
  </a>
) : isStorePublished ? (
  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
    Store Published
  </span>
) : (
  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/[0.05] text-slate-400 border border-white/10">
    Completed App
  </span>
)}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Highlights:
                      </p>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((hl, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom: Technologies */}
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-white/[0.02] text-[10px] text-slate-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
