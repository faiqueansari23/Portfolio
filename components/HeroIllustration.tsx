'use client';

import { motion } from 'framer-motion';

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center select-none">
      {/* Background ambient warm radial aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C25E30]/8 via-[#D4CEC3]/6 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        <defs>
          {/* Editorial Gradients */}
          <linearGradient id="phoneBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4CEC3" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#8C867C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C25E30" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="screenBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#161514" />
            <stop offset="100%" stopColor="#0E0E0D" />
          </linearGradient>

          <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#252422" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1A1918" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A84E22" />
            <stop offset="100%" stopColor="#C25E30" />
          </linearGradient>

          <linearGradient id="champagneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78746C" />
            <stop offset="100%" stopColor="#D4CEC3" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Tech Orbit Circle 1 */}
        <motion.circle
          cx="260"
          cy="260"
          r="230"
          stroke="rgba(18, 18, 17, 0.08)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '260px', originY: '260px' }}
        />

        {/* Outer Tech Orbit Circle 2 */}
        <motion.circle
          cx="260"
          cy="260"
          r="195"
          stroke="rgba(194, 94, 48, 0.22)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '260px', originY: '260px' }}
        />

        {/* Data Pipeline / Connection Lines */}
        <g opacity="0.7">
          {/* Left connection to API Node */}
          <path
            d="M 160 260 L 90 260 L 60 210"
            stroke="url(#terracottaGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Right connection to Cloud/DB Node */}
          <path
            d="M 360 220 L 430 220 L 460 170"
            stroke="url(#champagneGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Bottom connection to Build/Deploy Node */}
          <path
            d="M 260 420 L 260 460 L 320 480"
            stroke="#5E8262"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </g>

        {/* Floating Pulsing Signal Dots along connection lines */}
        <motion.circle
          cx="90"
          cy="260"
          r="3"
          fill="#C25E30"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="430"
          cy="220"
          r="3"
          fill="#D4CEC3"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* ==================== CENTRAL MOBILE PHONE FRAME ==================== */}
        <g id="smartphone-mockup" transform="translate(160, 90)">
          {/* Drop shadow back rectangle */}
          <rect
            x="4"
            y="6"
            width="200"
            height="340"
            rx="32"
            fill="#121211"
            opacity="0.35"
          />

          {/* Outer Phone Bezel with Titanium / Terracotta Border */}
          <rect
            x="0"
            y="0"
            width="200"
            height="340"
            rx="32"
            fill="#161514"
            stroke="url(#phoneBorderGrad)"
            strokeWidth="2.5"
          />

          {/* Screen Inner Background */}
          <rect
            x="7"
            y="7"
            width="186"
            height="326"
            rx="26"
            fill="url(#screenBgGrad)"
          />

          {/* Screen Dynamic Island / Top Notch */}
          <rect
            x="68"
            y="14"
            width="64"
            height="12"
            rx="6"
            fill="#050505"
          />
          <circle cx="118" cy="20" r="2.5" fill="#2A2926" />

          {/* App Header Bar inside Mobile */}
          <g transform="translate(18, 38)">
            <rect x="0" y="0" width="164" height="24" rx="6" fill="#201F1D" />
            <circle cx="12" cy="12" r="4" fill="#C25E30" />
            <rect x="22" y="9" width="46" height="6" rx="3" fill="#8C867C" />
            <rect x="134" y="9" width="18" height="6" rx="3" fill="#D4CEC3" />
          </g>

          {/* E-Commerce App Banner Card inside Mobile */}
          <g transform="translate(18, 70)">
            <rect
              x="0"
              y="0"
              width="164"
              height="72"
              rx="12"
              fill="url(#cardGrad1)"
              stroke="rgba(255, 255, 255, 0.08)"
            />
            {/* React Native Atom Emblem on banner */}
            <circle cx="34" cy="36" r="16" fill="rgba(194, 94, 48, 0.18)" />
            <ellipse
              cx="34"
              cy="36"
              rx="12"
              ry="4"
              stroke="#C25E30"
              strokeWidth="1.2"
              transform="rotate(30 34 36)"
            />
            <ellipse
              cx="34"
              cy="36"
              rx="12"
              ry="4"
              stroke="#C25E30"
              strokeWidth="1.2"
              transform="rotate(-30 34 36)"
            />
            <ellipse
              cx="34"
              cy="36"
              rx="12"
              ry="4"
              stroke="#D4CEC3"
              strokeWidth="1.2"
              transform="rotate(90 34 36)"
            />
            <circle cx="34" cy="36" r="2" fill="#FAF8F5" />

            {/* Text lines in banner */}
            <rect x="60" y="24" width="76" height="7" rx="3.5" fill="#FAF8F5" />
            <rect x="60" y="36" width="58" height="5" rx="2.5" fill="#8C867C" />
            <rect x="60" y="47" width="40" height="12" rx="6" fill="#C25E30" opacity="0.9" />
          </g>

          {/* Product / Feature Grid inside Mobile */}
          <g transform="translate(18, 152)">
            {/* Card Left */}
            <rect
              x="0"
              y="0"
              width="78"
              height="82"
              rx="10"
              fill="#1F1E1C"
              stroke="rgba(255, 255, 255, 0.06)"
            />
            <rect x="8" y="8" width="62" height="40" rx="6" fill="#292825" />
            <rect x="8" y="54" width="42" height="5" rx="2.5" fill="#E0DDD5" />
            <rect x="8" y="64" width="28" height="6" rx="3" fill="#C25E30" />

            {/* Card Right */}
            <rect
              x="86"
              y="0"
              width="78"
              height="82"
              rx="10"
              fill="#1F1E1C"
              stroke="rgba(255, 255, 255, 0.06)"
            />
            <rect x="94" y="8" width="62" height="40" rx="6" fill="#292825" />
            <rect x="94" y="54" width="42" height="5" rx="2.5" fill="#E0DDD5" />
            <rect x="94" y="64" width="28" height="6" rx="3" fill="#D4CEC3" />
          </g>

          {/* Quick API stats row */}
          <g transform="translate(18, 244)">
            <rect
              x="0"
              y="0"
              width="164"
              height="34"
              rx="8"
              fill="#1C1B19"
              stroke="rgba(255, 255, 255, 0.06)"
            />
            <circle cx="18" cy="17" r="5" fill="#5E8262" />
            <rect x="32" y="14" width="70" height="5" rx="2.5" fill="#8C867C" />
            <rect x="120" y="11" width="32" height="12" rx="4" fill="#2E2D2A" />
            <text x="136" y="20" fill="#D4CEC3" fontSize="7" fontWeight="bold" textAnchor="middle">
              REST
            </text>
          </g>

          {/* Mobile Bottom Navigation Bar */}
          <g transform="translate(18, 290)">
            <rect x="0" y="0" width="164" height="26" rx="8" fill="#141312" />
            <circle cx="24" cy="13" r="3.5" fill="#C25E30" />
            <circle cx="64" cy="13" r="3.5" fill="#5E5B54" />
            <circle cx="104" cy="13" r="3.5" fill="#5E5B54" />
            <circle cx="140" cy="13" r="3.5" fill="#5E5B54" />
          </g>

          {/* Home indicator bar at bottom */}
          <rect x="68" y="324" width="64" height="3" rx="1.5" fill="#5E5B54" />
        </g>

        {/* ==================== FLOATING CODE & TECH CHIPS ==================== */}

        {/* Floating Chip 1: React Native Atom Symbol (Top-Left) */}
        <motion.g
          animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          transform="translate(42, 110)"
        >
          <rect
            x="0"
            y="0"
            width="100"
            height="40"
            rx="12"
            fill="#181716"
            stroke="rgba(194, 94, 48, 0.45)"
            strokeWidth="1.2"
            className="drop-shadow-lg"
          />
          <circle cx="20" cy="20" r="10" fill="rgba(194, 94, 48, 0.18)" />
          {/* Miniature React loop */}
          <ellipse cx="20" cy="20" rx="7" ry="2.5" stroke="#C25E30" strokeWidth="1" transform="rotate(30 20 20)" />
          <ellipse cx="20" cy="20" rx="7" ry="2.5" stroke="#C25E30" strokeWidth="1" transform="rotate(-30 20 20)" />
          <circle cx="20" cy="20" r="1.5" fill="#FAF8F5" />
          <text x="36" y="19" fill="#FAF8F5" fontSize="10" fontWeight="bold">React Native</text>
          <text x="36" y="29" fill="#C25E30" fontSize="8" fontWeight="600">Android &amp; iOS</text>
        </motion.g>

        {/* Floating Chip 2: Redux Dispatch (Top-Right) */}
        <motion.g
          animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          transform="translate(370, 95)"
        >
          <rect
            x="0"
            y="0"
            width="105"
            height="38"
            rx="12"
            fill="#181716"
            stroke="rgba(212, 206, 195, 0.35)"
            strokeWidth="1.2"
            className="drop-shadow-lg"
          />
          <circle cx="20" cy="19" r="8" fill="rgba(212, 206, 195, 0.15)" />
          <text x="20" y="23" fill="#D4CEC3" fontSize="9" fontWeight="bold" textAnchor="middle">&#123; &#125;</text>
          <text x="34" y="18" fill="#FAF8F5" fontSize="9.5" fontWeight="bold">Redux State</text>
          <text x="34" y="28" fill="#D4CEC3" fontSize="7.5">dispatch(action)</text>
        </motion.g>

        {/* Floating Chip 3: REST API Node (Left Center) */}
        <motion.g
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          transform="translate(18, 235)"
        >
          <rect
            x="0"
            y="0"
            width="92"
            height="38"
            rx="10"
            fill="#181716"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
          <circle cx="16" cy="19" r="4" fill="#C25E30" />
          <text x="28" y="18" fill="#FAF8F5" fontSize="9" fontWeight="600">REST APIs</text>
          <text x="28" y="28" fill="#8C867C" fontSize="7.5">Real-time sync</text>
        </motion.g>

        {/* Floating Chip 4: App Store & Play Store Verified (Right Center) */}
        <motion.g
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          transform="translate(390, 260)"
        >
          <rect
            x="0"
            y="0"
            width="112"
            height="44"
            rx="12"
            fill="#181716"
            stroke="rgba(94, 130, 98, 0.35)"
            strokeWidth="1"
          />
          <circle cx="18" cy="22" r="5" fill="#5E8262" />
          <text x="28" y="19" fill="#FAF8F5" fontSize="9" fontWeight="bold">Production Live</text>
          <text x="28" y="32" fill="#88B28D" fontSize="7.5">Play Store + iOS</text>
        </motion.g>

        {/* Floating Chip 5: Native Code Tag <View /> (Bottom Left) */}
        <motion.g
          animate={{ y: [-4, 6, -4], rotate: [-1, 1, -1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
          transform="translate(48, 380)"
        >
          <rect
            x="0"
            y="0"
            width="88"
            height="32"
            rx="8"
            fill="#181716"
            stroke="rgba(255, 255, 255, 0.1)"
          />
          <text x="44" y="20" fill="#C25E30" fontSize="10" fontFamily="monospace" fontWeight="600" textAnchor="middle">
            &lt;View /&gt;
          </text>
        </motion.g>

        {/* Floating Chip 6: Background Services (Bottom Right) */}
        <motion.g
          animate={{ y: [6, -4, 6], rotate: [1, -1, 1] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          transform="translate(365, 380)"
        >
          <rect
            x="0"
            y="0"
            width="110"
            height="34"
            rx="10"
            fill="#181716"
            stroke="rgba(255, 255, 255, 0.1)"
          />
          <circle cx="16" cy="17" r="3.5" fill="#D4CEC3" />
          <text x="26" y="16" fill="#FAF8F5" fontSize="8.5" fontWeight="600">Background Tasks</text>
          <text x="26" y="26" fill="#8C867C" fontSize="7">Native Services</text>
        </motion.g>
      </svg>
    </div>
  );
}
