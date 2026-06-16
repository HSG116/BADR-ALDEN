import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { branches, BranchId } from '../../lib/branch-data';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { MessageCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'الاسم يجب أن يكون أكثر من حرفين' }),
  phone: z.string().min(10, { message: 'رقم الهاتف غير صحيح' }),
  branchId: z.enum(['maadi', 'tagamoa'] as const),
  message: z.string().min(5, { message: 'الرسالة قصيرة جداً' }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      branchId: 'maadi',
      message: '',
    },
  });

  function onSubmit(values: FormValues) {
    const branch = branches[values.branchId];
    const text = `مرحباً، أنا ${values.name}%0Aرقم هاتفي: ${values.phone}%0Aرسالتي:%0A${values.values.message}`;
    const url = `https://api.whatsapp.com/send?phone=${branch.whatsappPhone}&text=${text}`;
    window.open(url, '_blank');
  }

  return (
    <section id="contact" className="py-24 relative bg-arabesque">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-secondary mb-4">أرسل لنا رسالتك</h2>
            <p className="text-muted-foreground">نسعد بتواصلكم معنا، سنقوم بالرد عليكم في أقرب وقت عبر واتساب.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondary font-bold text-base">الاسم الكريم</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="أدخل اسمك هنا" 
                        {...field} 
                        className="bg-white/60 border-primary/20 focus-visible:ring-primary focus-visible:border-primary rounded-xl h-12 text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondary font-bold text-base">رقم الهاتف</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="أدخل رقم هاتفك" 
                        {...field} 
                        className="bg-white/60 border-primary/20 focus-visible:ring-primary focus-visible:border-primary rounded-xl h-12 text-lg"
                        dir="ltr"
                        style={{ textAlign: 'right' }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="branchId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondary font-bold text-base">الفرع المعني</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/60 border-primary/20 focus:ring-primary focus:border-primary rounded-xl h-12 text-lg">
                          <SelectValue placeholder="اختر الفرع" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(branches).map(b => (
                          <SelectItem key={b.id} value={b.id} className="text-right">{b.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondary font-bold text-base">رسالتك</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="اكتب استفسارك أو طلبك هنا..." 
                        {...field} 
                        className="bg-white/60 border-primary/20 focus-visible:ring-primary focus-visible:border-primary rounded-xl min-h-[120px] text-lg resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full rounded-xl h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all gap-2"
              >
                <MessageCircle size={24} />
                <span>إرسال عبر واتساب</span>
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
