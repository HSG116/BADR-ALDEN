import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBranch } from '../../context/BranchContext';
import { branches } from '../../lib/branch-data';
import { Button } from '../ui/button';
import { MessageCircle } from 'lucide-react';

type Category = 'nuts' | 'coffee' | 'seeds' | 'dried-fruits';

const productsData: Record<Category, { name: string, desc: string, icon: string }[]> = {
  nuts: [
    { name: 'كاجو محمص', desc: 'حبة كبيرة جامبو ومقرمشة', icon: '🥜' },
    { name: 'لوز محمص', desc: 'غني بالفوائد محمص بعناية', icon: '🥜' },
    { name: 'فستق حلبي', desc: 'فاخر بقشرة سهلة الفتح', icon: '🥜' },
    { name: 'بندق', desc: 'طازج بنكهة غنية ومميزة', icon: '🥜' },
    { name: 'ماكاديميا', desc: 'ملكة المكسرات الغنية بالزيوت', icon: '🥜' },
    { name: 'جوز البقان', desc: 'ممتاز للحلويات والضيافة', icon: '🥜' },
  ],
  coffee: [
    { name: 'قهوة عربية', desc: 'أصيلة بالهيل والزعفران', icon: '☕' },
    { name: 'إسبريسو', desc: 'خلطة إيطالية قوية التركيز', icon: '☕' },
    { name: 'قهوة تركية', desc: 'محوجة وفاتحة أو غامقة', icon: '☕' },
    { name: 'بلندات خاصة', desc: 'خلطات بدر الدين المميزة', icon: '☕' },
  ],
  seeds: [
    { name: 'بذور عباد الشمس', desc: 'لب سوري محمص ومملح', icon: '🌻' },
    { name: 'بذور اليقطين', desc: 'لب أبيض ممتاز الحبة', icon: '🌻' },
    { name: 'تسالي مشكلة', desc: 'تشكيلة مقرمشات متنوعة', icon: '🍿' },
  ],
  'dried-fruits': [
    { name: 'مشمش مجفف', desc: 'طبيعي بدون سكر مضاف', icon: '🍑' },
    { name: 'توت أزرق', desc: 'مفيد ولذيذ للوجبات الخفيفة', icon: '🫐' },
    { name: 'زبيب', desc: 'عالي الجودة للضيافة والحلويات', icon: '🍇' },
    { name: 'تمر فخم', desc: 'محشي ومغطى بالشوكولاتة', icon: '🌴' },
  ]
};

const tabs = [
  { id: 'nuts', label: 'مكسرات محمصة', icon: '🥜' },
  { id: 'coffee', label: 'قهوة طازجة', icon: '☕' },
  { id: 'seeds', label: 'تسالي وبذور', icon: '🌻' },
  { id: 'dried-fruits', label: 'فواكه مجففة', icon: '🍇' },
] as const;

export function Products() {
  const [activeTab, setActiveTab] = useState<Category>('nuts');
  const { activeBranch } = useBranch();
  const currentBranch = branches[activeBranch];

  const handleOrder = (productName: string) => {
    const text = `مرحباً محمصة بدر الدين (${currentBranch.name})، أود الاستفسار عن ${productName}`;
    const url = `https://api.whatsapp.com/send?phone=${currentBranch.whatsappPhone}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="products" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-secondary mb-4"
          >
            منتجاتنا الفاخرة
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                  : 'bg-white text-secondary hover:bg-primary/10 border border-primary/20'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {productsData[activeTab].map((product, idx) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group"
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{product.desc}</p>
                <Button 
                  onClick={() => handleOrder(product.name)}
                  className="w-full rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
                >
                  <MessageCircle size={18} />
                  <span>اطلب الآن عبر واتساب</span>
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
