import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, PackageCheck, Leaf } from 'lucide-react';

/**
 * واجهة الخصائص لمكون التعبئة والملصقات.
 */
interface PackagingLabelingProps {
  t: any; // كائن نصوص الترجمة الحالي
}

/**
 * مكون التعبئة والتغليف والملصقات القانونية (Packaging & Labeling Component).
 * يعرض تفاصيل الامتثال للوائح التغليف للمنظفات الكيماوية في مصر والسعودية (سـاسو) والاتحاد الأوروبي.
 */
export default function PackagingLabeling({ t }: PackagingLabelingProps) {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="packaging">
      {/* وهج ذهبي خفيف في الخلفية */}
      <div className="absolute left-[20rem] bottom-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان ووصف القسم */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            {t.packaging.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
          <p className="text-lg text-neutral-300 leading-relaxed">
            {t.packaging.description}
          </p>
        </motion.div>

        {/* شبكة القوانين الإقليمية للتعبئة */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {t.packaging.regions.map((region: any, i: number) => {
            const icons = [Globe, ShieldCheck, PackageCheck];
            const Icon = icons[i % icons.length];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-all group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* أيقونة خلفية مائية كبيرة */}
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                   <Icon className="w-32 h-32 text-[#D4AF37]" />
                </div>
                {/* أيقونة الكارت */}
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors relative z-10">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{region.title}</h4>
                <p className="text-neutral-400 leading-relaxed relative z-10">{region.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* كارت الملاحظة البيئية والقانونية في الأسفل */}
        {t.packaging.conclusion && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 bg-[#D4AF37]/5 rounded-2xl border border-[#D4AF37]/20 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="shrink-0 p-4 rounded-full bg-[#D4AF37]/10">
              <Leaf className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <p className="text-neutral-300 leading-relaxed md:text-lg">
              {t.packaging.conclusion}
            </p>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}
