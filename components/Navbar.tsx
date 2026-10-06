'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Smartphone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { contactData } from '@/lib/data';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Salesforce', href: '#salesforce' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#E2DDD5] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#121211] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-[#121211] text-[#FAF8F5] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Smartphone className="w-5 h-5 text-[#FAF8F5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#121211] text-base tracking-tight leading-tight group-hover:text-[#C25E30] transition-colors">
                Faique Akmal Ansari
              </span>
              <span className="text-[11px] font-semibold text-[#7D7971] tracking-wide uppercase">
                React Native Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#EFECE6]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E2DDD5]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#FAF8F5]'
                      : 'text-[#57544E] hover:text-[#121211] hover:bg-black/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#121211] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[#57544E] hover:text-[#121211] hover:bg-black/[0.05] rounded-lg transition-colors border border-transparent hover:border-[#E2DDD5]"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-[#57544E] hover:text-[#121211] hover:bg-black/[0.05] rounded-lg transition-colors border border-transparent hover:border-[#E2DDD5]"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={contactData.resumeUrl}
              download="Faique_Akmal_Ansari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#121211] hover:bg-[#252422] text-[#FAF8F5] text-xs font-semibold shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5 text-[#FAF8F5]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={contactData.resumeUrl}
              download="Faique_Akmal_Ansari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121211] text-[#FAF8F5] text-xs font-medium"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#121211] hover:bg-black/[0.05] border border-[#E2DDD5] focus:outline-none focus:ring-2 focus:ring-[#121211]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#F8F6F1]/98 backdrop-blur-xl border-b border-[#E2DDD5] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 py-6 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-[#121211] text-[#FAF8F5]'
                          : 'text-[#4A4742] hover:bg-black/[0.05] hover:text-[#121211]'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/[0.04] text-[#4A4742] hover:text-[#121211]"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/[0.04] text-[#4A4742] hover:text-[#121211]"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href={contactData.resumeUrl}
                  download="Faique_Akmal_Ansari_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#121211] text-[#FAF8F5] text-xs font-semibold shadow-sm"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
