import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { branches } from '../../lib/branch-data';
import branchCardImg from "@assets/image_1781574951024.png";
import { Button } from '../ui/button';

export function Branches() {
  return (
    <section id="branches" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-secondary mb-4 flex items-center justify-center gap-4"
          >
            <span className="h-[2px] w-12 bg-primary"></span>
            فروعنا
            <span className="h-[2px] w-12 bg-primary"></span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">نسعد بزيارتكم في فروعنا لتجربة تسوق فريدة</p>
        </div>

        {/* Decorative image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none z-0">
          <img src={branchCardImg} alt="Branches Decorative" className="w-[800px] h-auto object-contain blur-[2px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {Object.values(branches).map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, x: idx === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 border-t-4 border-t-primary"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-primary/20">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-secondary">{branch.name}</h3>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-secondary font-medium leading-relaxed">{branch.address}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div className="flex flex-col">
                    <span className="text-muted-foreground mb-1">أرقام الدليفري والتواصل:</span>
                    <div className="flex flex-wrap gap-3">
                      {branch.phones.map(phone => (
                        <a 
                          key={phone} 
                          href={`tel:+20${phone.substring(1)}`}
                          className="text-xl font-bold text-secondary hover:text-primary transition-colors bg-white/50 px-3 py-1 rounded-lg border border-primary/10"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button 
                  onClick={() => window.open(`tel:+20${branch.phones[0].substring(1)}`, '_self')}
                  className="rounded-xl h-12 bg-secondary hover:bg-secondary/90 text-white gap-2 font-bold"
                >
                  <Phone size={18} />
                  <span>اتصل الآن</span>
                </Button>
                
                <Button 
                  onClick={() => window.open(branch.whatsappLink, '_blank')}
                  className="rounded-xl h-12 bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 font-bold"
                >
                  <MessageCircle size={18} />
                  <span>واتساب</span>
                </Button>

                <Button 
                  onClick={() => window.open(branch.mapLink, '_blank')}
                  className="rounded-xl h-12 bg-primary hover:bg-primary/90 text-white gap-2 font-bold"
                >
                  <Navigation size={18} />
                  <span>موقعنا</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
