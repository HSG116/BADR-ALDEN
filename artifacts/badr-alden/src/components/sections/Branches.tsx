import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Star, Truck } from 'lucide-react';
import { branches, BranchId } from '../../lib/branch-data';
import { useBranch } from '../../context/BranchContext';

export function Branches() {
  const { activeBranch, setActiveBranch } = useBranch();
  const branch = branches[activeBranch];
  const branchIds = Object.keys(branches) as BranchId[];

  return (
    <section id="branches" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fdf9f3 0%, #faf6f0 100%)' }}>

      {/* Subtle background pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }}>
        <defs>
          <pattern id="branch-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#5c3d21" strokeWidth="0.7">
              <polygon points="30,2 56,16 56,44 30,58 4,44 4,16" />
              <polygon points="30,12 46,20 46,40 30,48 14,40 14,20" />
              <circle cx="30" cy="30" r="3.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#branch-geo)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div style={{ width: 32, height: 2, background: '#ec8944' }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#ec8944' }}>فروعنا</span>
            <div style={{ width: 32, height: 2, background: '#ec8944' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-3"
            style={{ color: '#3e2712' }}
          >
            اختر فرعك
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: '#9a7250' }}
          >
            حدّد فرعك لتظهر لك جميع تفاصيله فوراً
          </motion.p>
        </div>

        {/* Branch selector tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {branchIds.map((id) => {
            const b = branches[id];
            const isActive = activeBranch === id;
            return (
              <motion.button
                key={id}
                data-testid={`branch-tab-${id}`}
                onClick={() => setActiveBranch(id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-8 py-3 rounded-2xl font-bold text-base transition-all duration-300"
                style={{
                  background: isActive
                    ? (id === 'maadi'
                      ? 'linear-gradient(135deg, #ed7d2d 0%, #ec8944 100%)'
                      : 'linear-gradient(135deg, #5c3d21 0%, #8b5e34 100%)')
                    : 'rgba(255,255,255,0.7)',
                  color: isActive ? '#fff' : '#9a7250',
                  border: isActive ? 'none' : '1.5px solid rgba(92,61,33,0.15)',
                  boxShadow: isActive
                    ? (id === 'maadi'
                      ? '0 6px 24px rgba(236,137,68,0.32)'
                      : '0 6px 24px rgba(92,61,33,0.28)')
                    : '0 2px 8px rgba(92,61,33,0.06)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {b.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-2xl"
                    style={{ border: '2px solid rgba(255,255,255,0.35)' }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Branch content — animated switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBranch}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >

            {/* Hero card */}
            <div
              className="rounded-3xl overflow-hidden mb-6"
              style={{
                background: 'rgba(255,252,247,0.82)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: `1.5px solid ${activeBranch === 'maadi' ? 'rgba(236,137,68,0.25)' : 'rgba(92,61,33,0.2)'}`,
                boxShadow: '0 12px 50px rgba(92,61,33,0.10)',
              }}
            >
              {/* Colored top bar */}
              <div
                className="h-2"
                style={{
                  background: activeBranch === 'maadi'
                    ? 'linear-gradient(90deg, #ed7d2d, #ec8944, #f5a266)'
                    : 'linear-gradient(90deg, #3e2712, #5c3d21, #8b5e34)',
                }}
              />

              <div className="p-8 md:p-10">
                {/* Branch name & tagline */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: branch.colorLight }}
                      >
                        <MapPin size={24} style={{ color: branch.color }} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black" style={{ color: '#3e2712' }}>{branch.name}</h3>
                        <p className="text-sm font-medium" style={{ color: '#9a7250' }}>{branch.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Live badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full self-start md:self-auto"
                    style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-bold text-green-700">مفتوح الآن</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Address block */}
                  <div className="rounded-2xl p-5" style={{ background: branch.colorLight, border: `1px solid ${branch.color}22` }}>
                    <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: branch.color }}>العنوان</p>
                    {branch.addressLines.map((line, i) => (
                      <p key={i} className="font-semibold text-base leading-relaxed" style={{ color: '#3e2712' }}>
                        {i === 0 ? <strong>{line}</strong> : line}
                      </p>
                    ))}
                    <div className="mt-3 flex items-center gap-2 text-sm font-medium" style={{ color: branch.color }}>
                      <Star size={14} fill="currentColor" />
                      <span>{branch.landmark}</span>
                    </div>
                  </div>

                  {/* Hours + phones */}
                  <div className="space-y-4">
                    {/* Hours */}
                    <div className="rounded-2xl p-4 flex items-center gap-4"
                      style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(92,61,33,0.1)' }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: branch.colorLight }}>
                        <Clock size={20} style={{ color: branch.color }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: '#9a7250' }}>ساعات العمل</p>
                        <p className="font-black text-lg" style={{ color: '#3e2712' }}>{branch.workingHours}</p>
                        <p className="text-sm" style={{ color: '#9a7250' }}>{branch.workingDays}</p>
                      </div>
                    </div>

                    {/* Phones */}
                    <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(92,61,33,0.1)' }}>
                      <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: '#9a7250' }}>أرقام الطلب والدليفري</p>
                      <div className="flex flex-wrap gap-2">
                        {branch.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:+20${phone.substring(1)}`}
                            data-testid={`phone-link-${phone}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl font-black text-base transition-all duration-200 hover:scale-105"
                            style={{
                              background: branch.colorLight,
                              color: branch.color,
                              border: `1.5px solid ${branch.color}33`,
                              textDecoration: 'none',
                            }}
                          >
                            <Phone size={15} />
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                  <motion.a
                    href={`tel:+20${branch.phones[0].substring(1)}`}
                    data-testid={`call-btn-${activeBranch}`}
                    whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(92,61,33,0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 h-13 py-3.5 rounded-xl font-bold text-white transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #5c3d21 0%, #8b5e34 100%)',
                      boxShadow: '0 4px 14px rgba(92,61,33,0.25)',
                      textDecoration: 'none',
                    }}
                  >
                    <Phone size={18} />
                    اتصل الآن
                  </motion.a>

                  <motion.a
                    href={branch.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`whatsapp-btn-${activeBranch}`}
                    whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(37,211,102,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 h-13 py-3.5 rounded-xl font-bold text-white transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #1da851 0%, #25D366 100%)',
                      boxShadow: '0 4px 14px rgba(37,211,102,0.25)',
                      textDecoration: 'none',
                    }}
                  >
                    <MessageCircle size={18} />
                    واتساب الفرع
                  </motion.a>

                  <motion.a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`map-btn-${activeBranch}`}
                    whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(236,137,68,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 h-13 py-3.5 rounded-xl font-bold text-white transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #ed7d2d 0%, #ec8944 100%)',
                      boxShadow: '0 4px 14px rgba(236,137,68,0.25)',
                      textDecoration: 'none',
                    }}
                  >
                    <Navigation size={18} />
                    الموقع على الخريطة
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Bottom two panels: features + delivery areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Features grid */}
              <div
                className="rounded-3xl p-6"
                style={{
                  background: 'rgba(255,252,247,0.82)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(92,61,33,0.1)',
                  boxShadow: '0 4px 24px rgba(92,61,33,0.07)',
                }}
              >
                <p className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: branch.color }}>
                  مميزات الفرع
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {branch.features.map((feat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      className="rounded-xl p-3 flex flex-col gap-1"
                      style={{ background: branch.colorLight }}
                    >
                      <span className="text-xl">{feat.icon}</span>
                      <p className="font-bold text-sm" style={{ color: '#3e2712' }}>{feat.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: '#9a7250' }}>{feat.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Delivery areas */}
              <div
                className="rounded-3xl p-6"
                style={{
                  background: 'rgba(255,252,247,0.82)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(92,61,33,0.1)',
                  boxShadow: '0 4px 24px rgba(92,61,33,0.07)',
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Truck size={18} style={{ color: branch.color }} />
                  <p className="text-sm font-bold uppercase tracking-widest" style={{ color: branch.color }}>
                    مناطق التوصيل
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {branch.deliveryAreas.map((area, i) => (
                    <motion.span
                      key={area}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      className="px-3 py-1.5 rounded-full text-sm font-semibold"
                      style={{
                        background: branch.colorLight,
                        color: branch.color,
                        border: `1px solid ${branch.color}30`,
                      }}
                    >
                      📍 {area}
                    </motion.span>
                  ))}
                </div>

                {/* Delivery note */}
                <div className="mt-5 p-4 rounded-2xl" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                  <p className="text-sm font-semibold text-green-700 flex items-start gap-2">
                    <span className="mt-0.5">✅</span>
                    <span>نوصل لجميع المناطق المحيطة بالفرع — تواصل معنا لأي منطقة غير مذكورة</span>
                  </p>
                </div>

                {/* WhatsApp quick order */}
                <motion.a
                  href={branch.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #1da851 0%, #25D366 100%)',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.25)',
                  }}
                >
                  <MessageCircle size={16} />
                  اطلب الآن عبر واتساب {branch.nameShort}
                </motion.a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
