'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  Send,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { contactData } from '@/lib/data';
import emailjs from '@emailjs/browser';

// ============================================================
// 🔧 EMAILJS CONFIG — replace these with your own credentials
// Get them from https://dashboard.emailjs.com/
//   - Service ID  → Email Services tab
//   - Template ID → Email Templates tab
//   - Public Key  → Account → API Keys
// ============================================================
const EMAILJS_SERVICE_ID = 'service_6ajdwrq';
const EMAILJS_TEMPLATE_ID = 'template_21or0hp';
const EMAILJS_PUBLIC_KEY = 'D9AhQZrqNhF-_qCVH';
// ============================================================

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // These keys must match variables in your EmailJS template
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: contactData.name,
          reply_to: formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage(
        'Failed to send your message. Please try again or email me directly.'
      );
    }
  };

  const isSending = status === 'sending';

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#111110]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#C25E30]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22211F] border border-white/10 text-[#FAF8F5] text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-[#C25E30]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FAF8F5] tracking-tight">
            Let&apos;s Build <span className="gradient-text-accent-dark">Something Great</span>
          </h2>
          <p className="mt-3 text-[#A8A49C] text-sm sm:text-base leading-relaxed">
            Interested in collaborating on a React Native mobile project or hiring for cross-platform
            development? Reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-[#181716] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#FAF8F5] tracking-tight">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-[#121211] border border-white/5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#242321] border border-white/10 flex items-center justify-center text-[#FAF8F5] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#C25E30]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#8C867C] font-medium">Email Address</p>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="font-semibold text-[#FAF8F5] hover:text-[#C25E30] transition-colors break-all"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#D4CEC3] transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#88B28D]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121211] border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[#242321] border border-white/10 flex items-center justify-center text-[#FAF8F5] shrink-0">
                    <Phone className="w-4 h-4 text-[#C25E30]" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#8C867C] font-medium">Phone / WhatsApp</p>
                    <a
                      href={`tel:${contactData.phone}`}
                      className="font-semibold text-[#FAF8F5] hover:text-[#C25E30] transition-colors"
                    >
                      +91 {contactData.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121211] border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[#242321] border border-white/10 flex items-center justify-center text-[#FAF8F5] shrink-0">
                    <MapPin className="w-4 h-4 text-[#C25E30]" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#8C867C] font-medium">Location</p>
                    <p className="font-semibold text-[#FAF8F5]">{contactData.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-xs font-bold text-[#8C867C] uppercase tracking-wider">
                  Professional Profiles:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#22211F] hover:bg-[#2A2926] border border-white/10 text-xs font-medium text-[#FAF8F5] transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#C25E30] shrink-0" />
                    <span className="truncate">LinkedIn</span>
                  </a>
                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#22211F] hover:bg-[#2A2926] border border-white/10 text-xs font-medium text-[#FAF8F5] transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-[#D4CEC3] shrink-0" />
                    <span className="truncate">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Feature Card */}
            <div className="bg-[#181716] p-6 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-[#FAF8F5] flex items-center gap-1.5 justify-center sm:justify-start">
                  <FileDown className="w-4 h-4 text-[#C25E30]" />
                  <span>Full Curriculum Vitae</span>
                </h4>
                <p className="text-xs text-[#8C867C]">
                  Verified PDF copy with detailed project breakdown
                </p>
              </div>

              <a
                href={contactData.resumeUrl}
                download="Faique_Akmal_Ansari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EAE5DC] text-[#121211] text-xs font-bold shadow-md active:scale-95 transition-all shrink-0"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#181716] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-[#FAF8F5] tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#8C867C] mt-1">
                  Fill in the details below to initiate direct email contact with Faique.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-[#D4CEC3] block">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      disabled={isSending}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121211] border border-white/10 focus:border-[#C25E30] focus:outline-none text-xs text-[#FAF8F5] placeholder-[#78746C] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-[#D4CEC3] block">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={isSending}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121211] border border-white/10 focus:border-[#C25E30] focus:outline-none text-xs text-[#FAF8F5] placeholder-[#78746C] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-[#D4CEC3] block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    disabled={isSending}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="React Native Role / Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121211] border border-white/10 focus:border-[#C25E30] focus:outline-none text-xs text-[#FAF8F5] placeholder-[#78746C] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-[#D4CEC3] block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    disabled={isSending}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your mobile application project or team requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121211] border border-white/10 focus:border-[#C25E30] focus:outline-none text-xs text-[#FAF8F5] placeholder-[#78746C] transition-colors resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FAF8F5] hover:bg-[#EAE5DC] text-[#121211] text-xs font-bold shadow-md active:scale-98 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-center text-xs text-[#88B28D] pt-2 flex items-center justify-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-center text-xs text-red-400 pt-2 flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}