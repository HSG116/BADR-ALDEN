import React, { useEffect, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useBranch } from '../../context/BranchContext';
import { branches, BranchId } from '../../lib/branch-data';
import logoWithName from "@assets/A_logo_with_the_store's_name_below_it_1779558557783_1781574989841.png";
import { Button } from '../ui/button';

const ARABESQUE_PATHS = [
  "M30,0 L60,30 L30,60 L0,30 Z",
  "M15,15 L30,0 L45,15 L30,30 Z",
  "M15,45 L30,30 L45,45 L30,60 Z",
  "M0,15 L15,0 L30,15 L15,30 Z",
  "M30,15 L45,0 L60,15 L45,30 Z",
  "M0,45 L15,30 L30,45 L15,60 Z",
  "M30,45 L45,30 L60,45 L45,60 Z",
];

function ArabesqueSVGBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.055 }}
    >
      <defs>
        <pattern id="arabesque-tile" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#ec8944" strokeWidth="1.2">
            <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" />
            <polygon points="40,14 66,26 66,54 40,66 14,54 14,26" />
            <polygon points="40,24 56,32 56,48 40,56 24,48 24,32" />
            <line x1="40" y1="4" x2="40" y2="24" />
            <line x1="76" y1="22" x2="56" y2="32" />
            <line x1="76" y1="58" x2="56" y2="48" />
            <line x1="40" y1="76" x2="40" y2="56" />
            <line x1="4" y1="58" x2="24" y2="48" />
            <line x1="4" y1="22" x2="24" y2="32" />
            <circle cx="40" cy="40" r="6" />
            <circle cx="40" cy="4" r="2.5" fill="#ec8944" stroke="none" />
            <circle cx="40" cy="76" r="2.5" fill="#ec8944" stroke="none" />
            <circle cx="4" cy="22" r="2" fill="#5c3d21" stroke="none" />
            <circle cx="76" cy="22" r="2" fill="#5c3d21" stroke="none" />
            <circle cx="4" cy="58" r="2" fill="#5c3d21" stroke="none" />
            <circle cx="76" cy="58" r="2" fill="#5c3d21" stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#arabesque-tile)" />
    </svg>
  );
}

function OrangeCornerBlob() {
  return (
    <>
      {/* Top-right orange quarter circle — RTL style matching image */}
      <div className="absolute top-0 left-0 overflow-hidden pointer-events-none" style={{ width: '42%', height: '52%' }}>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-8 -left-8"
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #ed7d2d 0%, #ec8944 50%, #f5a266 100%)',
            borderRadius: '0 0 100% 0',
          }}
        />
        {/* Inner arabesque on orange */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-8 -left-8"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '0 0 100% 0',
            overflow: 'hidden',
          }}
        >
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.18 }}>
            <defs>
              <pattern id="arab-orange" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <g fill="none" stroke="#fff" strokeWidth="1">
                  <polygon points="30,3 57,18 57,42 30,57 3,42 3,18" />
                  <polygon points="30,13 47,22 47,38 30,47 13,38 13,22" />
                  <circle cx="30" cy="30" r="4" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arab-orange)" />
          </svg>
        </motion.div>
      </div>

      {/* Bottom-left secondary accent */}
      <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none" style={{ width: '28%', height: '32%' }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-4 -right-4"
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(315deg, #5c3d21 0%, #8b5e34 100%)',
            borderRadius: '100% 0 0 0',
          }}
        />
      </div>

      {/* Floating glow orbs */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute pointer-events-none"
        style={{ top: '30%', left: '15%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(236,137,68,0.18) 0%, transparent 70%)', borderRadius: '50%' }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute pointer-events-none"
        style={{ bottom: '25%', right: '18%', width: 250, height: 250, background: 'radial-gradient(circle, rgba(92,61,33,0.14) 0%, transparent 70%)', borderRadius: '50%' }}
      />
    </>
  );
}

const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 4 + (i % 4) * 3,
  x: 8 + (i * 7.5) % 85,
  y: 10 + (i * 11) % 80,
  delay: i * 0.4,
  duration: 4 + (i % 3) * 2,
}));

export function Hero() {
  const { setActiveBranch } = useBranch();

  const handleBranchSelect = (id: BranchId) => {
    setActiveBranch(id);
    const next = document.getElementById('features');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
      style={{ background: '#faf6f0' }}
    >
      {/* Full-page arabesque pattern */}
      <ArabesqueSVGBackground />

      {/* Orange corner + accents */}
      <OrangeCornerBlob />

      {/* Floating sparkle particles */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.id % 2 === 0
              ? 'rgba(236,137,68,0.35)'
              : 'rgba(92,61,33,0.2)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      {/* Main content */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center">

        {/* Logo — floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <motion.img
            src={logoWithName}
            alt="محمصة بدر الدين"
            className="w-64 md:w-96 h-auto drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Glass hero card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative p-8 md:p-12 rounded-3xl text-center max-w-3xl w-full"
          style={{
            background: 'rgba(250,246,240,0.55)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255,255,255,0.65)',
            boxShadow: '0 12px 50px rgba(92,61,33,0.12), 0 2px 8px rgba(236,137,68,0.08)',
          }}
        >
          {/* Decorative pings */}
          <motion.div
            className="absolute -top-3 -right-3 w-7 h-7 rounded-full"
            style={{ background: 'rgba(236,137,68,0.3)' }}
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full"
            style={{ background: 'rgba(92,61,33,0.2)' }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
          />

          <motion.h1
            className="text-3xl md:text-5xl font-black leading-tight mb-5"
            style={{ color: '#3e2712' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            أهلاً بكم في محمصة بدر الدين...{' '}
            <br />
            <span style={{ color: '#ec8944' }}>حيث تتجسد الجودة في كل تفصيلة</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 leading-relaxed font-medium"
            style={{ color: '#7a5c3a' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            أجود المكسرات والقهوة الطازجة — محمصة بالحب والخبرة منذ سنوات لتزين أوقاتكم بأروع النكهات.
          </motion.p>

          {/* Branch selector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="p-5 rounded-2xl inline-block w-full max-w-lg"
            style={{
              background: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(236,137,68,0.2)',
            }}
          >
            <p className="text-lg font-bold mb-4" style={{ color: '#5c3d21' }}>
              🎯 اختر فرعك وابدأ طلبك الآن
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {(Object.keys(branches) as BranchId[]).map((id, idx) => (
                <motion.div
                  key={id}
                  className="flex-1"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <button
                    data-testid={`hero-branch-btn-${id}`}
                    onClick={() => handleBranchSelect(id)}
                    className="w-full h-14 rounded-xl text-lg font-bold text-white transition-all duration-300"
                    style={{
                      background: idx === 0
                        ? 'linear-gradient(135deg, #ed7d2d 0%, #ec8944 100%)'
                        : 'linear-gradient(135deg, #5c3d21 0%, #8b5e34 100%)',
                      boxShadow: idx === 0
                        ? '0 4px 20px rgba(236,137,68,0.4)'
                        : '0 4px 20px rgba(92,61,33,0.35)',
                    }}
                  >
                    {branches[id].name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        style={{ color: '#ec8944' }}
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.span
          className="text-sm font-semibold mb-1 tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          اكتشف المزيد
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
