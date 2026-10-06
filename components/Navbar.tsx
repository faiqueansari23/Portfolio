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
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Smooth scroll handler that accurately navigates to sections on both mobile and desktop
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Make sure body is completely scrollable
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    const targetId = href.startsWith('#') ? href.slice(1) : href;

    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      try {
        window.history.pushState(null, '', '#home');
      } catch {}
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      // 50ms delay lets mobile touch gestures finish so the browser does not cancel programmatic scroll
      setTimeout(() => {
        const headerOffset = 76;
        const elementRect = element.getBoundingClientRect();
        const absoluteTop = elementRect.top + window.scrollY;
        const targetScroll = Math.max(0, Math.round(absoluteTop - headerOffset));

        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });

        try {
          window.history.pushState(null, '', href);
        } catch {}
      }, 50);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#F8F6F1]/98 backdrop-blur-md border-b border-[#E2DDD5] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled || isOpen ? 'py-3' : 'py-4 sm:py-5'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#121211] rounded-lg p-1 min-w-0"
          >
            <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl bg-[#121211] text-[#FAF8F5] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Smartphone className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#FAF8F5]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-[#121211] text-xs sm:text-base tracking-tight leading-tight group-hover:text-[#C25E30] transition-colors truncate max-w-[145px] sm:max-w-none">
                Faique Akmal Ansari
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#7D7971] tracking-wide uppercase truncate">
                React Native Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#EFECE6]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E2DDD5]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
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

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#121211] hover:bg-[#252422] text-[#FAF8F5] text-xs font-semibold shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5 text-[#FAF8F5]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={contactData.resumeUrl}
              download="Faique_Akmal_Ansari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#121211] text-[#FAF8F5] text-[11px] font-semibold active:scale-95 transition-transform"
            >
              <FileDown className="w-3 h-3" />
              <span>CV</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 rounded-lg text-[#121211] bg-black/[0.03] hover:bg-black/[0.07] border border-[#E2DDD5] focus:outline-none focus:ring-2 focus:ring-[#121211] min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-[#121211]" />
              ) : (
                <Menu className="w-5 h-5 text-[#121211]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer — inside header, controlled by max-height animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#F8F6F1] border-t border-[#E2DDD5]"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-3 max-h-[calc(100vh-85px)] overflow-y-auto">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#7D7971] px-1">
                Navigation
              </p>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation active:scale-95 ${
                        isActive
                          ? 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                          : 'text-[#4A4742] bg-white border border-[#E2DDD5] hover:bg-black/[0.04] hover:text-[#121211]'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#E2DDD5] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-[#E2DDD5] text-[#4A4742] hover:text-[#121211] transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-[#E2DDD5] text-[#4A4742] hover:text-[#121211] transition-colors"
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#121211] text-[#FAF8F5] text-xs font-bold shadow-xs active:scale-95 transition-transform"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}