import React from 'react';
import { motion } from 'motion/react';
import { Table } from 'lucide-react';

/**
 * واجهة الخصائص لمكون الجداول المقارنة.
 */
interface TablesProps {
  t: any; // كائن نصوص الترجمة الحالي
}

/**
 * مكون الجداول المقارنة (Comparative Tables Component).
 * يعرض جداول مقارنة هيكلية لكل من:
 * 1. المصانع والشهادات (مصر وليبيا وشهادة ISO و GMP).
 * 2. أسواق التصدير والتوزيع (السعودية، ليبيا، أوروبا، مصر).
 * 3. قائمة الأسعار التقريبية للمنتجات بالريال السعودي.
 */
export default function Tables({ t }: TablesProps) {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="tables">
      {/* وهج ذهبي خفيف في الخلفية */}
      <div className="absolute left-[10rem] top-[10rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* عنوان القسم الرئيسي */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            {t.tables.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
        </motion.div>

        {/* فضاء الجداول المقارنة الثلاثة */}
        <div className="space-y-16">
          
          {/* الجدول الأول: المصانع والشهادات (Factories & Certifications) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Table className="w-6 h-6 text-[#D4AF37]" />
                {t.tables.factories.title}
             </h4>
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="border-b border-white/10 bg-neutral-900/50">
                     <th className="py-4 px-6 font-semibold text-[#D4AF37] whitespace-nowrap text-right rtl:text-right ltr:text-left">{t.tables.factories.headers[0]}</th>
                     <th className="py-4 px-6 font-semibold text-[#D4AF37] text-right rtl:text-right ltr:text-left">{t.tables.factories.headers[1]}</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {t.tables.factories.rows.map((row: any, i: number) => (
                     <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                       <td className="py-4 px-6 text-white font-medium align-top whitespace-nowrap text-right rtl:text-right ltr:text-left">{row[0]}</td>
                       <td className="py-4 px-6 text-neutral-400 align-top text-right rtl:text-right ltr:text-left">{row[1]}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </motion.div>

          {/* الجدول الثاني: أسواق التصدير والتوزيع (Export Markets & Distribution) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Table className="w-6 h-6 text-[#D4AF37]" />
                {t.tables.exportMarkets.title}
             </h4>
             <div className="overflow-x-auto mb-4">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="border-b border-white/10 bg-neutral-900/50">
                     <th className="py-4 px-6 font-semibold text-[#D4AF37] whitespace-nowrap text-right rtl:text-right ltr:text-left">{t.tables.exportMarkets.headers[0]}</th>
                     <th className="py-4 px-6 font-semibold text-[#D4AF37] text-right rtl:text-right ltr:text-left">{t.tables.exportMarkets.headers[1]}</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {t.tables.exportMarkets.rows.map((row: any, i: number) => (
                     <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                       <td className="py-4 px-6 text-white font-medium align-top whitespace-nowrap text-right rtl:text-right ltr:text-left">{row[0]}</td>
                       <td className="py-4 px-6 text-neutral-400 align-top text-right rtl:text-right ltr:text-left">{row[1]}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </motion.div>

          {/* الجدول الثالث: قائمة الأسعار (Price List) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Table className="w-6 h-6 text-[#D4AF37]" />
                {t.tables.priceList.title}
             </h4>
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="border-b border-white/10 bg-neutral-900/50">
                     <th className="py-4 px-6 font-semibold text-[#D4AF37] whitespace-nowrap text-right rtl:text-right ltr:text-left">{t.tables.priceList.headers[0]}</th>
                     <th className="py-4 px-6 font-semibold text-[#D4AF37] text-right rtl:text-right ltr:text-left">{t.tables.priceList.headers[1]}</th>
                     <th className="py-4 px-6 font-semibold text-[#D4AF37] text-right rtl:text-right ltr:text-left">{t.tables.priceList.headers[2]}</th>
                     <th className="py-4 px-6 font-semibold text-[#D4AF37] text-right rtl:text-right ltr:text-left">{t.tables.priceList.headers[3]}</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {t.tables.priceList.rows.map((row: any, i: number) => (
                     <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                       <td className="py-4 px-6 text-white font-medium align-top whitespace-nowrap text-right rtl:text-right ltr:text-left">{row[0]}</td>
                       <td className="py-4 px-6 text-neutral-400 align-top text-right rtl:text-right ltr:text-left">{row[1]}</td>
                       <td className="py-4 px-6 text-neutral-400 align-top text-right rtl:text-right ltr:text-left">{row[2]}</td>
                       <td className="py-4 px-6 text-neutral-400 align-top text-right rtl:text-right ltr:text-left">{row[3]}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
