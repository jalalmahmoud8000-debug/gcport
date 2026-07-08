import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp } from 'lucide-react';

/**
 * واجهة الخصائص لمكون الأسواق المستهدفة.
 */
interface TargetMarketsProps {
  t: any; // كائن نصوص الترجمة الحالي
}

/**
 * مكون قطاعات الأسواق المستهدفة (Target Markets & Segments Component).
 * يستعرض شرائح العملاء التي تستهدفها الشركة من قطاع الضيافة والمؤسسات، والتجزئة، وأسواق التصدير الإقليمية والدولية.
 */
export default function TargetMarkets({ t }: TargetMarketsProps) {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="target-markets">
      {/* وهج ذهبي خفيف في الخلفية */}
      <div className="absolute right-[10rem] top-[10rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان ووصف القسم */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            {t.targetMarkets.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
          <p className="text-neutral-300 text-lg leading-relaxed">
            {t.targetMarkets.description}
          </p>
        </motion.div>

        {/* عرض قطاعات السوق الأساسية الثلاثة */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.targetMarkets.segments.map((segment: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                   <Target className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h4 className="text-xl font-bold text-white">{segment.title}</h4>
              </div>
              <p className="text-neutral-400 leading-relaxed">{segment.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* بطاقة الخلاصة وأبحاث السوق */}
        {t.targetMarkets.conclusion && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 bg-[#D4AF37]/5 rounded-2xl border border-[#D4AF37]/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
               <div className="shrink-0">
                  <TrendingUp className="w-12 h-12 text-[#D4AF37]" />
               </div>
               <p className="text-neutral-300 leading-relaxed md:text-lg">
                 {t.targetMarkets.conclusion}
               </p>
            </div>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}
