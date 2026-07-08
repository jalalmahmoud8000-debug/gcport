import React from 'react';
import { motion } from 'motion/react';

/**
 * واجهة الخصائص لمكون الملخص التنفيذي.
 */
interface ExecutiveSummaryProps {
  t: any; // كائن نصوص الترجمة الحالي
}

/**
 * مكون قسم الملخص التنفيذي (Executive Summary Component).
 * يعرض نبذة تاريخية وتشغيلية عن شركة جولد كلين مع كروت تسلط الضوء على الشهادات وحجم الإنتاج والمصانع.
 */
export default function ExecutiveSummary({ t }: ExecutiveSummaryProps) {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="about">
      {/* وهج خفيف خلف القسم باللون الذهبي */}
      <div className="absolute -left-[20rem] top-0 w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* الجانب الأيمن: النص والفقرات التعريفية */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.executiveSummary.title}
            </h3>
            <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
              {t.executiveSummary.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* الجانب الأيسر: شبكة بطاقات الميزات (Features) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.executiveSummary.features.map((feat: any, i: number) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-colors group relative overflow-hidden"
                >
                  {/* تأثير التدرج عند تمرير الفأرة (Hover Effect) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* الأيقونة داخل البطاقة */}
                  <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-all relative z-10">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  
                  {/* العنوان والوصف للميزة */}
                  <h4 className="text-xl font-semibold mb-2 relative z-10">{feat.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed relative z-10">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
