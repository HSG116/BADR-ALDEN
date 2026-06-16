import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, MapPin } from 'lucide-react';
import { useBranch } from '../../context/BranchContext';
import { branches, BranchId } from '../../lib/branch-data';
import logoIcon from "@assets/logo_1779558557784_1781575002339.png";

export function Navbar() {
  const { activeBranch, setActiveBranch } = useBranch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'مميزاتنا', href: '#features' },
    { name: 'فروعنا', href: '#branches' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const currentBranch = branches[activeBranch];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(253,249,243,0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(18px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(236,137,68,0.12)' : 'none',
        boxShadow: isScrolled ? '0 4px 24px rgba(92,61,33,0.07)' : 'none',
        padding: isScrolled ? '8px 0' : '16px 0',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3">

          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={logoIcon} alt="بدر الدين" className="w-10 h-10 object-contain" />
            <span className="font-black text-lg hidden sm:block" style={{ color: '#3e2712' }}>
              محمصة بدر الدين
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-semibold text-sm transition-colors duration-200 hover:opacity-70"
                style={{ color: '#5c3d21', textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop: branch switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Branch pill switcher */}
            <div
              className="flex p-1 rounded-full gap-1"
              style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(92,61,33,0.12)', backdropFilter: 'blur(12px)' }}
            >
              {(Object.keys(branches) as BranchId[]).map((id) => {
                const b = branches[id];
                const isActive = activeBranch === id;
                return (
                  <button
                    key={id}
                    data-testid={`navbar-branch-${id}`}
                    onClick={() => setActiveBranch(id)}
                    className="px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-250"
                    style={{
                      background: isActive ? b.colorGradient : 'transparent',
                      color: isActive ? '#fff' : '#9a7250',
                      boxShadow: isActive ? `0 2px 10px ${b.color}40` : 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {b.name}
                  </button>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={currentBranch.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="navbar-whatsapp-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white"
              style={{
                background: 'linear-gradient(135deg, #1da851 0%, #25D366 100%)',
                boxShadow: '0 3px 14px rgba(37,211,102,0.3)',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={15} />
              اطلب الآن
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors"
            style={{ color: '#5c3d21' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="قائمة"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'rgba(253,249,243,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(236,137,68,0.12)',
            }}
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-4">

              {/* Nav links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center py-3 px-4 rounded-xl font-bold text-base transition-colors"
                    style={{ color: '#3e2712', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(236,137,68,0.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Branch selector */}
              <div
                className="rounded-2xl p-4"
                style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(92,61,33,0.1)' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#9a7250' }}>
                  اختر فرعك
                </p>
                <div className="flex gap-2">
                  {(Object.keys(branches) as BranchId[]).map((id) => {
                    const b = branches[id];
                    const isActive = activeBranch === id;
                    return (
                      <button
                        key={id}
                        data-testid={`mobile-branch-${id}`}
                        onClick={() => setActiveBranch(id)}
                        className="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
                        style={{
                          background: isActive ? b.colorGradient : 'rgba(250,246,240,0.8)',
                          color: isActive ? '#fff' : '#9a7250',
                          border: isActive ? 'none' : '1px solid rgba(92,61,33,0.15)',
                          boxShadow: isActive ? `0 3px 12px ${b.color}35` : 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <MapPin size={12} className="inline ml-1" />
                        {b.nameShort}
                      </button>
                    );
                  })}
                </div>

                {/* Active branch quick info */}
                <div className="mt-3 flex items-center justify-between text-xs" style={{ color: '#9a7250' }}>
                  <span>{currentBranch.workingHours}</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    {currentBranch.workingDays}
                  </span>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href={currentBranch.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-whatsapp-btn"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-base"
                style={{
                  background: 'linear-gradient(135deg, #1da851 0%, #25D366 100%)',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.28)',
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={20} />
                اطلب الآن — {currentBranch.nameShort}
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </a>

              {/* Call button */}
              <a
                href={`tel:+20${currentBranch.phones[0].substring(1)}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-base"
                style={{
                  background: currentBranch.colorLight,
                  color: currentBranch.color,
                  border: `1.5px solid ${currentBranch.color}30`,
                  textDecoration: 'none',
                }}
              >
                📞 اتصل بـ {currentBranch.nameShort}: {currentBranch.phones[0]}
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
