import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useBranch } from '../../context/BranchContext';
import { branches, BranchId } from '../../lib/branch-data';
import logoWithName from "@assets/A_logo_with_the_store's_name_below_it_1779558557783_1781574989841.png";
import arabPattern from "@assets/image_1781574957306.png";
import { Button } from '../ui/button';

export function Hero() {
  const { setActiveBranch } = useBranch();

  const handleBranchSelect = (id: BranchId) => {
    setActiveBranch(id);
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `url(${arabPattern})`, backgroundSize: '400px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src={logoWithName} 
            alt="محمصة بدر الدين" 
            className="w-64 md:w-80 h-auto animate-float drop-shadow-xl" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl text-center max-w-3xl w-full backdrop-blur-xl border border-white/40 shadow-2xl relative"
        >
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/20 animate-ping"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-secondary/20 animate-pulse"></div>
          
          <h1 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-6">
            أهلاً بكم في محمصة بدر الدين... <br/>
            <span className="text-primary">حيث تتجسد الجودة في كل تفصيلة</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
            أجود المكسرات والقهوة الطازجة - محمصة بالحب والخبرة منذ سنوات لتزين أوقاتكم بأروع النكهات.
          </p>

          <div className="bg-white/40 p-6 rounded-2xl border border-white/50 inline-block w-full max-w-lg">
            <h3 className="text-xl font-bold text-secondary mb-4">اختر فرعك وابدأ طلبك الآن</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {(Object.keys(branches) as BranchId[]).map((id) => (
                <Button 
                  key={id}
                  onClick={() => handleBranchSelect(id)}
                  size="lg"
                  className="flex-1 rounded-xl text-lg font-bold h-14 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {branches[id].name}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-primary/60 animate-bounce"
      >
        <span className="text-sm font-medium mb-2">اكتشف المزيد</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
