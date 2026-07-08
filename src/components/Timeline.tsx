import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

/**
 * واجهة الخصائص لمكون المخطط الزمني للنمو والتوسع.
 */
interface TimelineProps {
  t: any;             // كائن نصوص الترجمة الحالي
  isRtl: boolean;     // اتجاه الصفحة (RTL / LTR) لتحديد اتجاه التموضع والحركة
}

/**
 * مكون المخطط الزمني (Timeline Component).
 * يعرض المعالم التاريخية ونقاط التوسع الخاصة بـ جولد كلين من مرحلة التأسيس حتى رؤية 2030،
 * بتصميم عمودي تفاعلي يتناسب مع لغة واتجاه الصفحة.
 */
export default function Timeline({ t, isRtl }: TimelineProps) {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="timeline">
      {/* وهج ذهبي خافت في الخلفية */}
      <div className="absolute right-[10rem] top-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان ووصف المخطط الزمني */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            {t.timeline.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
          <p className="text-lg text-neutral-300 leading-relaxed">
            {t.timeline.description}
          </p>
        </motion.div>

        {/* المخطط الزمني التفاعلي */}
        <div className="relative max-w-4xl mx-auto">
          {/* الخط الرأسي المركزي الذي يربط النقاط */}
          <div className={`absolute ${isRtl ? 'right-[23px]' : 'left-[23px]'} md:left-1/2 md:right-auto top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2`} />
          
          <div className="space-y-12">
            {t.timeline.events.map((event: any, i: number) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0"
                >
                  {/* النقطة المركزية المضيئة باللون الذهبي */}
                  <div className={`absolute ${isRtl ? 'right-[24px] translate-x-1/2' : 'left-[24px] -translate-x-1/2'} md:left-1/2 md:right-auto w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)] transform md:-translate-x-1/2 z-10`} />

                  {/* كارت المحتوى (يتناوب بين اليمين واليسار في الشاشات الكبيرة) */}
                  <div className={`w-full md:w-1/2 ${isRtl ? 'pr-16 md:pr-0' : 'pl-16 md:pl-0'} ${
                    isEven 
                      ? (isRtl ? 'md:pl-16 text-right md:text-left' : 'md:pr-16 text-left md:text-right')
                      : (isRtl ? 'md:mr-auto md:pr-16 text-right' : 'md:ml-auto md:pl-16 text-left')
                  }`}>
                    <div className="p-6 bg-neutral-900/40 border border-white/5 rounded-2xl hover:border-[#D4AF37]/30 transition-colors group">
                      
                      {/* تاريخ الحدث (العام) */}
                      <span className="inline-flex items-center gap-2 text-[#D4AF37] font-mono text-sm mb-3">
                         <Calendar className="w-4 h-4" />
                         {event.year}
                      </span>
                      
                      {/* عنوان وتفاصيل الحدث */}
                      <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                      <p className="text-neutral-400 leading-relaxed text-sm">{event.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
