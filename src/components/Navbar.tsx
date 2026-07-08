import React from 'react';
import { Sparkles, Globe } from 'lucide-react';
import { Lang } from '../data/content';

/**
 * تعريف واجهة الخصائص (Props Interface) لمكون شريط التنقل.
 */
interface NavbarProps {
  lang: Lang;               // اللغة الحالية النشطة
  toggleLang: () => void;   // دالة لتبديل اللغة
  t: any;                   // كائن نصوص الترجمة الحالي
}

/**
 * مكون شريط التنقل العلوي (Navbar Component).
 * يعرض شعار الشركة، روابط التنقل، وزر تبديل لغة الموقع.
 */
export default function Navbar({ lang, toggleLang, t }: NavbarProps) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* شعار الشركة (Logo) */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
            <span className="text-xl font-bold tracking-widest uppercase text-white">
              {lang === 'en' ? 'Gold Clean' : 'جولد كلين'}
            </span>
          </div>
          
          {/* روابط التنقل وزر تغيير اللغة */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {Object.values(t.nav).map((item: any, i: number) => (
                <a key={i} href="#" className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors">
                  {item}
                </a>
              ))}
            </div>
            
            {/* زر تبديل اللغة (العربية <-> الإنجليزية) */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-white/5 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
