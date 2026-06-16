import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useBranch } from '../../context/BranchContext';
import { branches, BranchId } from '../../lib/branch-data';
import logoIcon from "@assets/logo_1779558557784_1781575002339.png";
import { Button } from '../ui/button';

export function Navbar() {
  const { activeBranch, setActiveBranch } = useBranch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'منتجاتنا', href: '#products' },
    { name: 'فروعنا', href: '#branches' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const currentBranch = branches[activeBranch];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass-panel shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="محمصة بدر الدين" className="w-12 h-12 object-contain" />
            <span className="font-bold text-xl text-secondary hidden sm:block">محمصة بدر الدين</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-secondary hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex bg-white/50 p-1 rounded-full border border-primary/20 backdrop-blur-md">
              {(Object.keys(branches) as BranchId[]).map((id) => (
                <button
                  key={id}
                  onClick={() => setActiveBranch(id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeBranch === id 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-secondary hover:bg-white/60'
                  }`}
                >
                  {branches[id].name}
                </button>
              ))}
            </div>

            <Button 
              className="rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-secondary hover:bg-secondary/90 text-white gap-2"
              onClick={() => window.open(currentBranch.whatsappLink, '_blank')}
            >
              <span>اطلب الآن</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </Button>
          </div>

          <button 
            className="md:hidden text-secondary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/20 mt-2"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-secondary font-bold text-lg border-b border-primary/10 pb-2"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-2">اختر الفرع:</p>
                <div className="flex gap-2">
                  {(Object.keys(branches) as BranchId[]).map((id) => (
                    <button
                      key={id}
                      onClick={() => setActiveBranch(id)}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                        activeBranch === id 
                          ? 'bg-primary text-white' 
                          : 'bg-white/50 text-secondary border border-primary/20'
                      }`}
                    >
                      {branches[id].name}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full mt-2 rounded-xl h-12 text-lg bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open(currentBranch.whatsappLink, '_blank')}
              >
                تواصل عبر واتساب
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
