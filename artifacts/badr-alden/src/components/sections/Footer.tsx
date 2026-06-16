import React from 'react';
import { branches } from '../../lib/branch-data';
import logoWithName from "@assets/A_logo_with_the_store's_name_below_it_1779558557783_1781574989841.png";
import { MessageCircle, MapPin, Phone, Instagram, Facebook, Music2 } from 'lucide-react';
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
          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <a
              href="https://www.instagram.com/badr_alden_roastery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)' }}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/16sijBdhH5/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ background: '#1877f2' }}
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@badr.alden19"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ background: '#000' }}
              aria-label="TikTok"
            >
              <Music2 size={20} />
            </a>
          </div>

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
