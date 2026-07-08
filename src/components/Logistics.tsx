import React from 'react';
import { motion } from 'motion/react';

/**
 * واجهة الخصائص لمكون التوزيع والخدمات اللوجستية.
 */
interface LogisticsProps {
  t: any; // كائن نصوص الترجمة الحالي
}

/**
 * مكون التوزيع والخدمات اللوجستية (Distribution & Logistics Component).
 * يشرح كيف تقوم شركة جولد كلين بإدارة سلاسل الإمداد ونقل البضائع براً وبحراً،
 * ومواقع مستودعاتها الاستراتيجية في جدة وطرابلس وتغطية المحافظات المصرية.
 */
export default function Logistics({ t }: LogisticsProps) {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="logistics">
      {/* وهج ذهبي خفيف في الخلفية */}
      <div className="absolute left-[10rem] top-[5rem] w-[30rem] h-[30rem] bg-[#D4AF37] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان القسم */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            {t.logistics.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
        </motion.div>

        {/* عرض الفقرات والتحليلات اللوجستية */}
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-neutral-300 leading-relaxed text-lg"
          >
            {t.logistics.paragraphs.map((p: string, i: number) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 relative group hover:border-[#D4AF37]/30 transition-colors">
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                 <p className="relative z-10">{p}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
