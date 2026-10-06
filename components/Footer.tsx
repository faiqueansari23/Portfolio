'use client';

import { ArrowUp, Smartphone, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { contactData } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070c] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm tracking-tight">
                {contactData.name}
              </p>
              <p className="text-xs text-cyan-400 font-medium">
                React Native Developer • Cross-Platform iOS &amp; Android
              </p>
            </div>
          </div>

          {/* Social and Resume Links */}
          <div className="flex items-center gap-3">
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors border border-white/5"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors border border-white/5"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={contactData.resumeUrl}
              download="Faique_Akmal_Ansari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors border border-white/5"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {contactData.name}. All verified resume content.
          </p>
          <p className="text-center sm:text-right">
            Built with Next.js, React, Tailwind CSS, Framer Motion &amp; Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
