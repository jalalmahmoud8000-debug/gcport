import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, FileText } from 'lucide-react';
import { Lang } from '../data/content';

/**
 * واجهة الخصائص لمكون شهادات الجودة.
 */
interface CertificationsProps {
  lang: Lang;                 // اللغة الحالية لتحديد لغة نص التنزيل
  t: any;                     // كائن نصوص الترجمة الحالي
}

/**
 * مكون شهادات الجودة (Certifications Component).
 * يستعرض شهادة ISO 9001:2015 و المعايير الأمريكية لسلامة الجودة (GMP) مع إمكانية تحميل الشهادات بصيغة PDF.
 */
export default function Certifications({ lang, t }: CertificationsProps) {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="certifications">
      {/* وهج خفيف خلف القسم باللون الذهبي */}
      <div className="absolute -left-[10rem] top-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      
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
            {t.certifications.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
        </motion.div>

        {/* عرض الشهادات الفردية */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {t.certifications.items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-colors group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* أيقونة الشهادة */}
              <div className="w-20 h-20 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-all relative z-10">
                 {i === 0 ? <Award className="w-10 h-10 text-[#D4AF37]" /> : <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />}
              </div>
              
              {/* المسمى والوصف التفصيلي */}
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h4>
              <p className="text-neutral-400 leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* زر تحميل الشهادات كـ PDF */}
        <div className="text-center">
          <a 
            href="/ISO_GMB.pdf" 
            download="ISO_GMB_Certificates.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-full hover:bg-[#bfa030] transition-all"
          >
            <FileText className="w-5 h-5" />
            {lang === 'en' ? 'Download Certificates (PDF)' : 'تحميل الشهادات (PDF)'}
          </a>
        </div>

        {/* ملاحظة هامشية لأسفل القسم */}
        {t.certifications.note && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center mt-12"
          >
            <p className="text-neutral-500 text-sm italic">
              {t.certifications.note}
            </p>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}
