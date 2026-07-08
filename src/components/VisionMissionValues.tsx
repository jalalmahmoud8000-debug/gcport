import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Heart } from 'lucide-react';

/**
 * واجهة الخصائص لمكون الرؤية والرسالة والقيم.
 */
interface VisionMissionValuesProps {
  t: any; // كائن نصوص الترجمة الحالي
}

/**
 * مكون الرؤية والرسالة والقيم (Vision, Mission & Values Component).
 * يعرض التوجه الاستراتيجي لـ جولد كلين حتى عام 2030 على هيئة بطاقات تفاعلية مع أيقونات جذابة.
 */
export default function VisionMissionValues({ t }: VisionMissionValuesProps) {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="vision">
      {/* وهج ذهبي خافت في الخلفية */}
      <div className="absolute right-[20rem] bottom-0 w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      
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
            {t.vision.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
        </motion.div>

        {/* كروت المحتوى: الرؤية، الرسالة، والقيم */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* كارت الرؤية (Vision) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all group hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
              <Target className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">{t.vision.vision.title}</h4>
            <p className="text-neutral-400 leading-relaxed">{t.vision.vision.desc}</p>
          </motion.div>

          {/* كارت الرسالة (Mission) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all group hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
              <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">{t.vision.mission.title}</h4>
            <p className="text-neutral-400 leading-relaxed">{t.vision.mission.desc}</p>
          </motion.div>

          {/* كارت القيم (Values) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all group hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
              <Heart className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">{t.vision.values.title}</h4>
            <p className="text-neutral-400 leading-relaxed">{t.vision.values.desc}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
