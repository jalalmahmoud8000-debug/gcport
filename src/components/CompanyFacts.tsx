import React from 'react';
import { motion } from 'motion/react';

/**
 * واجهة الخصائص لمكون حقائق الشركة.
 */
interface CompanyFactsProps {
  t: any;             // كائن نصوص الترجمة الحالي
  isRtl: boolean;     // اتجاه الصفحة (RTL / LTR) لتحديد اتجاه حافة الملاحظة الجانبية
}

/**
 * مكون حقائق ومعلومات الشركة (Company Facts Component).
 * يعرض بطاقات تفصيلية لحقائق الشركة مثل التأسيس، الهوية، المقر الرئيسي، المصانع، الأسواق، والشهادات.
 */
export default function CompanyFacts({ t, isRtl }: CompanyFactsProps) {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="facts">
      {/* تأثير خلفية مضيئة ذهبية خافتة */}
      <div className="absolute right-[10rem] top-[10rem] w-[30rem] h-[30rem] bg-[#D4AF37] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان القسم */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4">
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            {t.companyFacts.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
        </motion.div>

        {/* شبكة بطاقات الحقائق (Facts Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.companyFacts.facts.map((fact: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group"
            >
              {/* عنوان الحقيقة (مثال: سنة التأسيس) */}
              <h4 className="text-[#D4AF37] text-sm font-semibold mb-3 uppercase tracking-wider">{fact.label}</h4>
              
              {/* محتوى وقيمة الحقيقة مع دعم السطور المتعددة */}
              <div className="text-neutral-300">
                {fact.value.split('\n').map((line: string, idx: number) => (
                  <p key={idx} className={idx > 0 ? 'mt-1' : ''}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* الملاحظة الجانبية في أسفل القسم */}
        {t.companyFacts.note && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`mt-12 p-4 bg-neutral-900/30 border-y md:border-y-0 ${isRtl ? 'md:border-r-4' : 'md:border-l-4'} border-[#D4AF37]/50 rounded-lg`}
          >
            <p className="text-neutral-400 text-sm leading-relaxed italic">
              {t.companyFacts.note}
            </p>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}
