import React from 'react';
import { motion } from 'motion/react';

/**
 * واجهة الخصائص لمكون المزايا التنافسية.
 */
interface USPProps {
  t: any; // كائن نصوص الترجمة الحالي
}

/**
 * مكون المزايا التنافسية والعوامل الفريدة (USP & Competitive Advantage Component).
 * يعرض النقاط التي تميز جولد كلين عن بقية المصنعين كصياغة المنتجات داخلياً،
 * والامتثال، والفاعلية من حيث التكلفة، والتواجد اللوجستي المحلي.
 */
export default function USP({ t }: USPProps) {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="usp">
      {/* وهج ذهبي خفيف في الخلفية */}
      <div className="absolute left-[10rem] top-[10rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      
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
            {t.usp.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
          <p className="text-neutral-300 text-lg leading-relaxed">
            {t.usp.description}
          </p>
        </motion.div>

        {/* شبكة نقاط القوة الفريدة */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {t.usp.items.map((item: any, i: number) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-colors group flex gap-6 items-start ${i === t.usp.items.length - 1 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto' : ''}`}
              >
                {/* الأيقونة */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                {/* تفاصيل الميزة */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* عبارة الخلاصة في أسفل القسم */}
        {t.usp.conclusion && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="inline-block px-8 py-4 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full font-medium border border-[#D4AF37]/20">
              {t.usp.conclusion}
            </p>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}
