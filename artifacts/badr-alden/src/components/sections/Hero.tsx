import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useBranch } from '../../context/BranchContext';
import { branches, BranchId } from '../../lib/branch-data';
import logoWithName from "@assets/A_logo_with_the_store's_name_below_it_1779558557783_1781574989841.png";

function ArabesqueBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Very subtle tile pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.04 }}>
        <defs>
          <pattern id="geo" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#5c3d21" strokeWidth="0.8">
              <polygon points="36,2 68,20 68,52 36,70 4,52 4,20" />
              <polygon points="36,12 58,24 58,48 36,60 14,48 14,24" />
              <polygon points="36,22 50,30 50,42 36,50 22,42 22,30" />
              <circle cx="36" cy="36" r="4" />
              <circle cx="36" cy="2" r="2" fill="#ec8944" stroke="none" opacity="0.6" />
              <circle cx="36" cy="70" r="2" fill="#ec8944" stroke="none" opacity="0.6" />
              <circle cx="4" cy="20" r="1.5" fill="#ec8944" stroke="none" opacity="0.4" />
              <circle cx="68" cy="20" r="1.5" fill="#ec8944" stroke="none" opacity="0.4" />
              <circle cx="4" cy="52" r="1.5" fill="#ec8944" stroke="none" opacity="0.4" />
              <circle cx="68" cy="52" r="1.5" fill="#ec8944" stroke="none" opacity="0.4" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo)" />
      </svg>

      {/* Soft orange top-right corner accent — small and elegant */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0"
        style={{
          width: 260,
          height: 260,
          background: 'radial-gradient(circle at top left, rgba(237,125,45,0.22) 0%, rgba(236,137,68,0.08) 55%, transparent 75%)',
          borderRadius: '0 0 100% 0',
        }}
      />

      {/* Small brown bottom-left accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.3 }}
        className="absolute bottom-0 right-0"
        style={{
          width: 200,
          height: 200,
          background: 'radial-gradient(circle at bottom right, rgba(92,61,33,0.12) 0%, transparent 70%)',
          borderRadius: '100% 0 0 0',
        }}
      />

      {/* Soft center warm glow */}
      <div
        className="absolute"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(250,230,200,0.35) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}

export function Hero() {
  const { setActiveBranch } = useBranch();

  const handleBranchSelect = (id: BranchId) => {
    setActiveBranch(id);
    const next = document.getElementById('features');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  const branchIds = Object.keys(branches) as BranchId[];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fdf9f3 0%, #faf6f0 50%, #f7f0e6 100%)' }}
    >
      <ArabesqueBackground />

      <div className="container mx-auto px-4 z-10 flex flex-col items-center max-w-4xl">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <motion.img
            src={logoWithName}
            alt="محمصة بدر الدين"
            className="w-56 md:w-80 h-auto drop-shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Main glass card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl text-center w-full px-8 md:px-14 py-10 md:py-14"
          style={{
            background: 'rgba(255, 252, 247, 0.72)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(236,137,68,0.18)',
            boxShadow: '0 8px 48px rgba(92,61,33,0.09), 0 2px 12px rgba(236,137,68,0.07)',
          }}
        >
          {/* Small decorative line top */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div style={{ width: 40, height: 2, background: 'linear-gradient(to right, transparent, #ec8944)' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ec8944' }} />
            <div style={{ width: 60, height: 2, background: '#ec8944', opacity: 0.4 }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5c3d21' }} />
            <div style={{ width: 40, height: 2, background: 'linear-gradient(to left, transparent, #5c3d21)', opacity: 0.5 }} />
          </div>

          <motion.h1
            className="text-3xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: '#3e2712' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
          >
            أهلاً بكم في{' '}
            <span style={{ color: '#ec8944' }}>محمصة بدر الدين</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ color: '#5c3d21' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.48, duration: 0.5 }}
          >
            حيث تتجسّد الجودة في كل تفصيلة
          </motion.p>

          <motion.p
            className="text-base md:text-lg mb-10 leading-relaxed font-medium"
            style={{ color: '#9a7250' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.58, duration: 0.5 }}
          >
            أجود المكسرات والقهوة الطازجة — محمصة بالحب والخبرة منذ سنوات
          </motion.p>

          {/* Branch selector */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p className="text-sm font-bold mb-4 tracking-widest uppercase" style={{ color: '#9a7250' }}>
              اختر فرعك للطلب الفوري
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {branchIds.map((id, idx) => (
                <motion.button
                  key={id}
                  data-testid={`hero-branch-btn-${id}`}
                  onClick={() => handleBranchSelect(id)}
                  whileHover={{ y: -3, boxShadow: idx === 0 ? '0 10px 28px rgba(236,137,68,0.38)' : '0 10px 28px rgba(92,61,33,0.32)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 h-14 rounded-xl text-base font-bold text-white transition-all duration-200"
                  style={{
                    background: idx === 0
                      ? 'linear-gradient(135deg, #ed7d2d 0%, #ec8944 100%)'
                      : 'linear-gradient(135deg, #5c3d21 0%, #8b5e34 100%)',
                    boxShadow: idx === 0
                      ? '0 4px 18px rgba(236,137,68,0.28)'
                      : '0 4px 18px rgba(92,61,33,0.25)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {branches[id].name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Small decorative line bottom */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div style={{ width: 20, height: 1, background: 'rgba(236,137,68,0.3)' }} />
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(92,61,33,0.3)' }} />
            <div style={{ width: 40, height: 1, background: 'rgba(92,61,33,0.2)' }} />
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(236,137,68,0.3)' }} />
            <div style={{ width: 20, height: 1, background: 'rgba(236,137,68,0.3)' }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer select-none"
        style={{ color: '#ec8944' }}
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.span
          className="text-xs font-semibold mb-1 tracking-widest"
          style={{ color: '#9a7250' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          اكتشف المزيد
        </motion.span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} style={{ color: '#ec8944' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
