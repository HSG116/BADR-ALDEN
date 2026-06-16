import React from 'react';
import { branches } from '../../lib/branch-data';
import logoWithName from "@assets/A_logo_with_the_store's_name_below_it_1779558557783_1781574989841.png";
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-[6px] border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-xl">
              <img src={logoWithName} alt="محمصة بدر الدين" className="w-48 h-auto" />
            </div>
            <p className="text-white/70 leading-relaxed max-w-xs">
              أجود أنواع المكسرات والقهوة الطازجة المحمصة بعناية وحب لتزين أوقاتكم بأروع النكهات.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary">روابط سريعة</h4>
            <ul className="space-y-4">
              {['الرئيسية', 'منتجاتنا', 'لماذا بدر الدين؟', 'فروعنا', 'الأسئلة الشائعة'].map((item, i) => (
                <li key={i}>
                  <a href={`#${['home', 'products', 'features', 'branches', 'faq'][i]}`} className="text-white/80 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Maadi Branch */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary">{branches.maadi.name}</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>{branches.maadi.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span dir="ltr">{branches.maadi.phones.join(' - ')}</span>
              </li>
              <li className="pt-2">
                <Button 
                  onClick={() => window.open(branches.maadi.whatsappLink, '_blank')}
                  variant="outline" 
                  className="bg-white/5 border-white/20 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white w-full rounded-xl transition-colors"
                >
                  <MessageCircle size={16} className="ml-2" />
                  تواصل عبر واتساب
                </Button>
              </li>
            </ul>
          </div>

          {/* Tagamoa Branch */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary">{branches.tagamoa.name}</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>{branches.tagamoa.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span dir="ltr">{branches.tagamoa.phones.join(' - ')}</span>
              </li>
              <li className="pt-2">
                <Button 
                  onClick={() => window.open(branches.tagamoa.whatsappLink, '_blank')}
                  variant="outline" 
                  className="bg-white/5 border-white/20 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white w-full rounded-xl transition-colors"
                >
                  <MessageCircle size={16} className="ml-2" />
                  تواصل عبر واتساب
                </Button>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center flex flex-col items-center justify-center gap-4">
          <div className="flex gap-2 text-primary">
            <span className="w-2 h-2 rounded-full bg-primary block"></span>
            <span className="w-2 h-2 rounded-full bg-primary block opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-primary block opacity-25"></span>
          </div>
          <p className="text-white/60 text-sm">
            © {currentYear} محمصة بدر الدين - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
