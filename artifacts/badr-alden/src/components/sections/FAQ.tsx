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
    question: "ما هي مواعيد التوصيل؟",
    answer: "نعمل يوميًا من الساعة 10 صباحًا حتى 11 مساءً لتلبية جميع طلباتكم."
  },
  {
    question: "هل يتوفر توصيل لجميع مناطق القاهرة؟",
    answer: "نعم، نوفر خدمة التوصيل لجميع مناطق القاهرة الكبرى من خلال فرعينا في المعادي والتجمع."
  },
  {
    question: "كيف يمكنني الطلب؟",
    answer: "يمكنكم الطلب بكل سهولة عبر الواتساب أو من خلال الاتصال المباشر بالفرع الأقرب إليكم."
  },
  {
    question: "هل المنتجات طازجة يوميًا؟",
    answer: "بالتأكيد، نحن نقوم بتحميص منتجاتنا يوميًا في محامصنا الخاصة لضمان أعلى مستويات الجودة والطعم الطازج."
  },
  {
    question: "هل يوجد عروض وتخفيضات؟",
    answer: "نعم، نقدم عروضاً مميزة باستمرار. يمكنكم متابعتنا على وسائل التواصل الاجتماعي لمعرفة أحدث العروض."
  },
  {
    question: "هل يمكن طلب كميات جملة؟",
    answer: "بالطبع، نوفر أسعاراً خاصة لطلبات الجملة والمناسبات. يرجى التواصل معنا مباشرة للتنسيق."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-secondary mb-4"
          >
            الأسئلة الشائعة
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 md:p-8 rounded-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10 last:border-0">
                <AccordionTrigger className="text-right text-lg font-bold text-secondary hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
