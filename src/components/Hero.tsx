import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Lang } from '../data/content';

/**
 * تعريف واجهة الخصائص لمكون القسم التعريفي (Hero Section).
 */
interface HeroProps {
  lang: Lang;         // اللغة الحالية لتحديد الاتجاه ونصوص العنوان الفرعي
  t: any;             // كائن نصوص الترجمة الحالي
  isRtl: boolean;     // اتجاه الصفحة (RTL / LTR) لتحديد اتجاه السهم
}

/**
 * مكون القسم التعريفي البارز (Hero Component).
 * يعرض العنوان الرئيسي والفرعي للتطبيق مع تأثيرات حركية، وزر للانتقال إلى قسم "من نحن".
 */
export default function Hero({ lang, t, isRtl }: HeroProps) {
  // تحديد السهم المناسب بناءً على لغة واتجاه الصفحة
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[70vh] flex items-center">
      
      {/* تأثير تدرج الخلفية الدائري باللون الذهبي الخافت */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* العنوان الفرعي */}
          <h2 className="text-[#D4AF37] font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            {t.hero.subtitle}
          </h2>
          
          {/* العنوان الرئيسي للموقع */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white drop-shadow-2xl">
            {t.hero.title}
          </h1>
          
          {/* الوصف التعريفي القصير */}
          <p className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
             {lang === 'en' ? 'GOLD CLEAN Company Profile' : 'الملف التعريفي لشركة جولد كلين'}
          </p>
          
          {/* زر التفاعل الأساسي (Call to Action) */}
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            {t.hero.cta}
            <ArrowIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
