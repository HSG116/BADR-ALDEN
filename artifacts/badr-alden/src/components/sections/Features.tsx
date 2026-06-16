import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flame, Truck, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "جودة لا تُضاهى",
    description: "ننتقي أفضل المكونات من مصادرها الأصلية لنضمن لكم مذاقاً استثنائياً في كل حبة."
  },
  {
    icon: <Flame className="w-8 h-8 text-primary" />,
    title: "تحميص يومي طازج",
    description: "نحمص منتجاتنا يومياً بشغف وخبرة للحفاظ على الزيوت العطرية والطعم الطازج."
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "خدمة توصيل سريعة",
    description: "نوفر خدمة التوصيل السريع من فرعينا لتصلكم منتجاتنا أينما كنتم في أسرع وقت."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "خبرة وثقة",
    description: "سنوات من الثقة والخبرة في السوق المصري جعلتنا الخيار الأول لعشاق المكسرات."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-arabesque">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-secondary mb-4"
          >
            لماذا بدر الدين؟
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-2xl text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
