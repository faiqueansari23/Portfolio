'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Layers, Hand } from 'lucide-react';

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
  initialMode = 'stack',
}: MobileCardStackProps<T>) {
  const [mode, setMode] = useState<'stack' | 'deck'>(initialMode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  if (!items || items.length === 0) return null;

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Loop back to start
      setDirection(1);
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Loop to end
      setDirection(-1);
      setCurrentIndex(items.length - 1);
    }
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 60;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className="w-full md:hidden select-none">
      {/* Mobile Mode Switcher Bar */}
      <div className="flex items-center justify-between gap-2 mb-4 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C25E30] animate-pulse shrink-0" />
          <span
            className={`text-[11px] font-semibold tracking-wide ${
              isDark ? 'text-[#B5B1A8]' : 'text-[#7D7971]'
            }`}
          >
            {mode === 'stack'
              ? 'Scroll down to stack cards'
              : `Card ${currentIndex + 1} of ${items.length} • Swipe to flip`}
          </span>
        </div>

        <div
          className={`inline-flex items-center p-0.5 rounded-full border text-[11px] font-semibold ${
            isDark
              ? 'bg-[#1E1D1B] border-white/10 text-[#FAF8F5]'
              : 'bg-[#EFECE6] border-[#E2DDD5] text-[#121211]'
          }`}
        >
          <button
            type="button"
            onClick={() => setMode('stack')}
            className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
              mode === 'stack'
                ? isDark
                  ? 'bg-[#FAF8F5] text-[#121211] shadow-xs'
                  : 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                : isDark
                ? 'text-[#8C867C] hover:text-white'
                : 'text-[#57544E] hover:text-[#121211]'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Stack</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('deck')}
            className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
              mode === 'deck'
                ? isDark
                  ? 'bg-[#FAF8F5] text-[#121211] shadow-xs'
                  : 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                : isDark
                ? 'text-[#8C867C] hover:text-white'
                : 'text-[#57544E] hover:text-[#121211]'
            }`}
          >
            <Hand className="w-3 h-3" />
            <span>Swipe</span>
          </button>
        </div>
      </div>

      {/* MODE 1: STACKED SCROLL (Cards stack one over another down the page) */}
      {mode === 'stack' && (
        <div className="relative space-y-6 pb-12">
          {items.map((item, index) => {
            // Progressive stacking top offset so cards layer on top of each other like a deck
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
                className="sticky cursor-grab active:cursor-grabbing shadow-xl rounded-2xl will-change-transform"
                drag="x"
                dragConstraints={{ left: -60, right: 60 }}
                dragElastic={0.2}
                whileDrag={{ scale: 1.01, rotate: 1 }}
              >
                {renderCard(item, index, false)}
              </motion.div>
            );
          })}
        </div>
      )}

      {/* MODE 2: SWIPE DECK (Cards stacked directly on top of each other like a physical deck) */}
      {mode === 'deck' && (
        <div className="relative pt-2 pb-6 flex flex-col items-center">
          {/* Deck Container */}
          <div className="relative w-full min-h-[380px] flex items-center justify-center">
            {/* Background layered card depth previews (cards stacked beneath) */}
            {items.length > 2 && (
              <div
                className="absolute inset-0 pointer-events-none transform translate-y-5 scale-[0.90] opacity-40 transition-all duration-300"
                style={{ zIndex: 1 }}
              >
                {renderCard(items[(currentIndex + 2) % items.length], (currentIndex + 2) % items.length, true)}
              </div>
            )}
            {items.length > 1 && (
              <div
                className="absolute inset-0 pointer-events-none transform translate-y-2.5 scale-[0.95] opacity-70 transition-all duration-300"
                style={{ zIndex: 2 }}
              >
                {renderCard(items[(currentIndex + 1) % items.length], (currentIndex + 1) % items.length, true)}
              </div>
            )}

            {/* Active Card with Touch Swipe Drag */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  x: direction > 0 ? 140 : -140,
                  opacity: 0,
                  scale: 0.94,
                  rotate: direction > 0 ? 4 : -4,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  x: direction > 0 ? -140 : 140,
                  opacity: 0,
                  scale: 0.94,
                  rotate: direction > 0 ? -4 : 4,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 28,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.45}
                onDragEnd={handleDragEnd}
                className="w-full relative cursor-grab active:cursor-grabbing shadow-2xl rounded-2xl will-change-transform"
                style={{ zIndex: 10 }}
              >
                {renderCard(items[currentIndex], currentIndex, true)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Swipe Deck Navigation Controls */}
          <div className="flex items-center justify-between w-full mt-5 px-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous card"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isDark
                  ? 'bg-[#1E1D1B] border-white/10 text-[#FAF8F5] hover:bg-[#252422]'
                  : 'bg-white border-[#E2DDD5] text-[#121211] hover:bg-[#FAF8F5]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to card ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-5 bg-[#C25E30]'
                      : isDark
                      ? 'w-1.5 bg-white/20 hover:bg-white/40'
                      : 'w-1.5 bg-black/20 hover:bg-black/40'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next card"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isDark
                  ? 'bg-[#1E1D1B] border-white/10 text-[#FAF8F5] hover:bg-[#252422]'
                  : 'bg-white border-[#E2DDD5] text-[#121211] hover:bg-[#FAF8F5]'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
