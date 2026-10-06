'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MobileCardStackProps<T> {
  items: T[];
  renderCard: (item: T, index: number, isDeckMode?: boolean) => React.ReactNode;
  theme?: 'light' | 'dark';
  initialMode?: 'stack' | 'deck';
}

export default function MobileCardStack<T>({
  items,
  renderCard,
  theme = 'light',
}: MobileCardStackProps<T>) {
  if (!items || items.length === 0) return null;

  const isDark = theme === 'dark';

  return (
    <div className="w-full md:hidden">
      {/* Subtle Mobile Scroll Deck Indicator */}
      <div className="flex items-center gap-1.5 mb-4 px-1">
        <span className="w-2 h-2 rounded-full bg-[#C25E30] animate-pulse shrink-0" />
        <span
          className={`text-[11px] font-semibold tracking-wide ${
            isDark ? 'text-[#B5B1A8]' : 'text-[#7D7971]'
          }`}
        >
          {items.length} cards • Scroll to browse deck
        </span>
      </div>

      {/* STACKED SCROLL: Cards stack one above another as user scrolls down */}
      <div className="relative space-y-6 pb-12">
        {items.map((item, index) => {
          // Progressive stacking top offset so cards layer on top of each other down the page
          const stickyTop = 82 + (index % 6) * 10;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                top: `${stickyTop}px`,
                zIndex: index + 10,
              }}
              className="sticky shadow-xl rounded-2xl will-change-transform"
            >
              {renderCard(item, index, false)}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
