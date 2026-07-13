import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Target } from 'lucide-react';
import { Lang } from '../data/content';

/**
 * واجهة الخصائص لمكون المنتجات والخدمات.
 */
interface ProductsProps {
  lang: Lang;                 // اللغة الحالية لتحديد النصوص الثابتة غير المترجمة
  t: any;                     // كائن نصوص الترجمة الحالي
  isRtl: boolean;             // اتجاه الصفحة (RTL / LTR)
  galleryImages: string[];    // قائمة روابط الصور المجلوبة ديناميكياً من معرض Supabase
}

/**
 * مكون المنتجات والخدمات (Products & Services Component).
 * يعرض خطوط الإنتاج والمنتج المميز وجدول الاستخدامات الأساسية للـ B2B،
 * بالإضافة إلى معرض المنتجات الديناميكي المتصل بـ Supabase.
 */
export default function Products({ lang, t, isRtl, galleryImages }: ProductsProps) {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="products">
      {/* وهج خفيف خلف القسم باللون الذهبي */}
      <div className="absolute -left-[10rem] top-[20rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان ووصف القسم */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            {t.products.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
          <p className="text-neutral-300 text-lg leading-relaxed">
            {t.products.description}
          </p>
        </motion.div>

        {/* عرض المنتجات: قائمة خطوط الإنتاج + المكون الإعلاني البصري */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* خطوط الإنتاج */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {t.products.lines.map((line: string, i: number) => {
              const [title, desc] = line.split(':');
              const isFeatured = i === 0;
              return (
                <div key={i} className={`flex gap-4 p-4 rounded-xl transition-colors ${
                  isFeatured 
                    ? 'bg-gradient-to-r from-[#D4AF37]/20 to-black border-2 border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                    : 'bg-black border border-white/5 hover:border-[#D4AF37]/30'
                }`}>
                  <div className="mt-1">
                    {isFeatured ? (
                      <div className="w-4 h-4 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.8)]">
                         <Sparkles className="w-3 h-3 text-black" />
                      </div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
                    )}
                  </div>
                  <div>
                    <span className={`font-semibold ${isFeatured ? 'text-[#D4AF37] text-lg' : 'text-white'}`}>{title}:</span>
                    <span className={`leading-relaxed ml-2 rtl:ml-0 rtl:mr-2 ${isFeatured ? 'text-white' : 'text-neutral-400'}`}>{desc}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
          
          {/* البطاقة البصرية للمنتج الأبرز (مع معطر الأرضيات / المنظف الشامل) */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] group h-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
            <img 
              src="https://vxedsjxzpekozeyhwbgg.supabase.co/storage/v1/object/public/gcport/856a4ee2-ac4d-4d4d-a5b2-ccca92b87ec9.png" 
              alt="Floor Freshener" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="inline-block px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/50 rounded-full mb-3 backdrop-blur-md">
                 <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">{lang === 'en' ? 'Featured Product' : 'المنتج المميز'}</span>
              </div>
              <h4 className="text-white font-bold text-2xl md:text-3xl drop-shadow-md mb-2">
                {lang === 'en' ? 'Floor Freshener' : 'المنظف الشامل GC'}
              </h4>
              <p className="text-neutral-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                {lang === 'en' ? 'Our most prominent and requested product' : 'المنتج الأبرز والأكثر طلباً لدينا'}
              </p>
            </div>
          </motion.div>
          
        </div>

        {/* جدول المنتجات والتطبيقات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-neutral-900/50">
                <th className="py-4 px-6 text-[#D4AF37] font-semibold text-right rtl:text-right ltr:text-left">{t.products.tableHeader[0]}</th>
                <th className="py-4 px-6 text-[#D4AF37] font-semibold text-right rtl:text-right ltr:text-left">{t.products.tableHeader[1]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {t.products.table.map((row: any, i: number) => {
                const isFeatured = i === 0;
                return (
                  <tr key={i} className={`transition-colors ${isFeatured ? 'bg-[#D4AF37]/10' : 'hover:bg-white/[0.02]'}`}>
                    <td className={`py-4 px-6 font-medium text-right rtl:text-right ltr:text-left ${isFeatured ? 'text-[#D4AF37]' : 'text-white'}`}>
                      {isFeatured && <Sparkles className="w-4 h-4 inline-block mr-2 rtl:mr-0 rtl:ml-2" />}
                      {row.name}
                    </td>
                    <td className={`py-4 px-6 text-right rtl:text-right ltr:text-left ${isFeatured ? 'text-white' : 'text-neutral-400'}`}>{row.app}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* معرض المنتجات المتصل بـ Supabase Storage */}
        {galleryImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 mb-8"
          >
             <h4 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                {lang === 'en' ? 'Product Gallery' : 'معرض المنتجات'}
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
             </h4>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((imageUrl, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-white/10 group aspect-square relative bg-neutral-900/50">
                    <img
                      src={imageUrl}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                       <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                          <Target className="w-6 h-6 text-[#D4AF37]" />
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>
        )}

        
      </div>
    </section>
  );
}
