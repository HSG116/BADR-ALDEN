import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { branches, BranchId } from '../../lib/branch-data';
import { useBranch } from '../../context/BranchContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { MessageCircle, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'الاسم يجب أن يكون أكثر من حرفين' }),
  phone: z.string().min(10, { message: 'رقم الهاتف غير صحيح' }),
  branchId: z.enum(['maadi', 'tagamoa'] as const),
  message: z.string().min(5, { message: 'الرسالة قصيرة جداً' }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { activeBranch, setActiveBranch } = useBranch();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      branchId: activeBranch,
      message: '',
    },
  });

  // Sync form branch field with global active branch whenever it changes
  useEffect(() => {
    form.setValue('branchId', activeBranch, { shouldValidate: false });
  }, [activeBranch, form]);

  const selectedBranchId = form.watch('branchId') as BranchId;
  const selectedBranch = branches[selectedBranchId];

  function onSubmit(values: FormValues) {
    const branch = branches[values.branchId];
    const text = encodeURIComponent(
      `مرحباً، أنا ${values.name}\nرقم هاتفي: ${values.phone}\nرسالتي:\n${values.message}`
    );
    const url = `https://api.whatsapp.com/send?phone=${branch.whatsappPhone}&text=${text}`;
    window.open(url, '_blank');
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fdf9f3 0%, #faf6f0 100%)' }}>

      {/* Subtle pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }}>
        <defs>
          <pattern id="contact-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#5c3d21" strokeWidth="0.7">
              <polygon points="30,2 56,16 56,44 30,58 4,44 4,16" />
              <circle cx="30" cy="30" r="3.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-geo)" />
      </svg>

      <div className="container mx-auto px-4 max-w-2xl relative z-10">

        {/* Section label */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div style={{ width: 32, height: 2, background: '#ec8944' }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#ec8944' }}>تواصل معنا</span>
            <div style={{ width: 32, height: 2, background: '#ec8944' }} />
          </div>
          <h2 className="text-4xl font-black mb-2" style={{ color: '#3e2712' }}>أرسل لنا رسالتك</h2>
          <p style={{ color: '#9a7250' }}>نسعد بتواصلكم — سنرد عليكم عبر واتساب في أقرب وقت</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,252,247,0.85)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: `1.5px solid ${selectedBranch.color}28`,
            boxShadow: '0 12px 48px rgba(92,61,33,0.10)',
            transition: 'border-color 0.4s ease',
          }}
        >
          {/* Colored top bar matching selected branch */}
          <motion.div
            className="h-1.5"
            style={{ background: selectedBranch.colorGradient }}
            layoutId="form-bar"
          />

          {/* Active branch badge */}
          <div className="px-8 pt-6 pb-0">
            <motion.div
              key={selectedBranchId}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white mb-2"
              style={{ background: selectedBranch.colorGradient }}
            >
              <MapPin size={14} />
              سيُرسَل إلى: {selectedBranch.name}
            </motion.div>
          </div>

          <div className="p-8 pt-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-base" style={{ color: '#5c3d21' }}>الاسم الكريم</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="أدخل اسمك هنا"
                          data-testid="input-name"
                          {...field}
                          className="rounded-xl h-12 text-base"
                          style={{
                            background: 'rgba(255,255,255,0.7)',
                            border: '1.5px solid rgba(92,61,33,0.15)',
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-base" style={{ color: '#5c3d21' }}>رقم الهاتف</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="01xxxxxxxxx"
                          data-testid="input-phone"
                          {...field}
                          dir="ltr"
                          style={{
                            textAlign: 'right',
                            background: 'rgba(255,255,255,0.7)',
                            border: '1.5px solid rgba(92,61,33,0.15)',
                          }}
                          className="rounded-xl h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Branch — synced with global active branch, still user-changeable */}
                <FormField
                  control={form.control}
                  name="branchId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-base" style={{ color: '#5c3d21' }}>الفرع المعني</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={(val) => {
                          field.onChange(val);
                          setActiveBranch(val as BranchId);
                        }}
                      >
                        <FormControl>
                          <SelectTrigger
                            data-testid="select-branch"
                            className="rounded-xl h-12 text-base font-semibold"
                            style={{
                              background: 'rgba(255,255,255,0.7)',
                              border: `1.5px solid ${selectedBranch.color}44`,
                              color: selectedBranch.color,
                            }}
                          >
                            <SelectValue placeholder="اختر الفرع" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(branches).map((b) => (
                            <SelectItem key={b.id} value={b.id} className="text-right font-semibold">
                              {b.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-base" style={{ color: '#5c3d21' }}>رسالتك</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="اكتب استفسارك أو طلبك هنا..."
                          data-testid="input-message"
                          {...field}
                          className="rounded-xl min-h-[120px] text-base resize-none"
                          style={{
                            background: 'rgba(255,255,255,0.7)',
                            border: '1.5px solid rgba(92,61,33,0.15)',
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  data-testid="btn-submit-contact"
                  whileHover={{ y: -2, boxShadow: '0 10px 28px rgba(37,211,102,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-14 rounded-xl text-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #1da851 0%, #25D366 100%)',
                    boxShadow: '0 4px 18px rgba(37,211,102,0.28)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <MessageCircle size={22} />
                  إرسال عبر واتساب {selectedBranch.nameShort}
                </motion.button>

              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
