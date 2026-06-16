import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "ما هي مواعيد العمل؟",
    a: "نعمل يومياً من الساعة 9 صباحاً حتى 4 فجراً — بدون انقطاع ولا إجازات طوال أيام الأسبوع.",
  },
  {
    q: "هل يوجد إجازة أسبوعية؟",
    a: "لا يوجد إجازة — نحن مفتوحون كل أيام الأسبوع بما فيها الجمعة والسبت والأعياد الرسمية.",
  },
  {
    q: "ما هي مناطق التوصيل المتاحة؟",
    a: "نوصل لجميع مناطق القاهرة الكبرى من خلال فرعينا في المعادي والتجمع الخامس — اتصل بالفرع الأقرب إليك للتأكد من منطقتك.",
  },
  {
    q: "كيف يمكنني الطلب؟",
    a: "يمكنك الطلب بسهولة عبر واتساب أو الاتصال المباشر بأي من فرعينا. فرع المعادي: 01020727773 أو 01110085927 | فرع التجمع: 01117555759 أو 01001706283.",
  },
  {
    q: "هل المنتجات طازجة يومياً؟",
    a: "بالتأكيد، نحمّص منتجاتنا يومياً في محامصنا الخاصة لضمان أعلى مستويات الجودة والطازجية في كل طلب.",
  },
  {
    q: "ما هي أنواع المنتجات المتوفرة؟",
    a: "نوفر مجموعة واسعة تشمل: المكسرات المحمصة (كاجو، لوز، فستق، بندق، ماكاديميا)، القهوة الطازجة المطحونة، التسالي والبذور، والفواكه المجففة الفاخرة.",
  },
  {
    q: "هل يوجد حد أدنى للطلب؟",
    a: "لا يوجد حد أدنى للطلب — نقبل جميع الطلبات صغيرها وكبيرها ونوصلها إليك.",
  },
  {
    q: "هل يمكن طلب كميات جملة للمناسبات؟",
    a: "بالطبع، نوفر أسعاراً خاصة لطلبات الجملة والمناسبات والهدايا المؤسسية. تواصل معنا مباشرة للحصول على عرض سعر مناسب.",
  },
  {
    q: "هل يوجد عروض وتخفيضات؟",
    a: "نعم، نقدم عروضاً مميزة باستمرار. تابعونا على وسائل التواصل الاجتماعي لمعرفة أحدث العروض والتخفيضات.",
  },
  {
    q: "كم تستغرق مدة التوصيل؟",
    a: "تتراوح مدة التوصيل عادةً بين 30 إلى 60 دقيقة حسب موقعك وحجم الطلب والفرع المختار.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fdf9f3 0%, #faf6f0 100%)' }}>

      {/* Subtle pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }}>
        <defs>
          <pattern id="faq-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#5c3d21" strokeWidth="0.7">
              <polygon points="30,2 56,16 56,44 30,58 4,44 4,16" />
              <circle cx="30" cy="30" r="3.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faq-geo)" />
      </svg>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div style={{ width: 32, height: 2, background: '#ec8944' }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#ec8944' }}>أسئلة شائعة</span>
            <div style={{ width: 32, height: 2, background: '#ec8944' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-3"
            style={{ color: '#3e2712' }}
          >
            الأسئلة الشائعة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: '#9a7250' }}
          >
            كل ما تريد معرفته عن محمصة بدر الدين
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,252,247,0.85)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1.5px solid rgba(236,137,68,0.15)',
            boxShadow: '0 12px 48px rgba(92,61,33,0.09)',
          }}
        >
          {/* Top bar */}
          <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #ed7d2d, #ec8944, #5c3d21)' }} />

          <div className="p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-2xl px-4 border-0 overflow-hidden"
                    style={{ background: 'rgba(250,246,240,0.6)' }}
                  >
                    <AccordionTrigger
                      className="text-right text-base font-bold py-4 hover:no-underline"
                      style={{ color: '#3e2712' }}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                          style={{ background: index % 2 === 0 ? '#ec8944' : '#5c3d21', minWidth: 24 }}
                        >
                          {index + 1}
                        </span>
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent
                      className="text-base leading-relaxed pb-4 pr-9"
                      style={{ color: '#7a5c3a' }}
                    >
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
