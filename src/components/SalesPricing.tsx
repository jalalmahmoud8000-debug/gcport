import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, ShoppingCart, MonitorSmartphone, Scale, Layers, Tag } from 'lucide-react';

/**
 * واجهة الخصائص لمكون المبيعات والتسعير.
 */
interface SalesPricingProps {
  t: any;             // كائن نصوص الترجمة الحالي
  isRtl: boolean;     // اتجاه الصفحة (RTL / LTR) لتحديد اتجاه حركية framer motion
}

/**
 * مكون قنوات المبيعات والتسعير (Sales Channels & Pricing Component).
 * يعرض تفاصيل قنوات المبيعات النشطة (الموزعون، سلاسل التجزئة، التجارة الإلكترونية)،
 * واستراتيجية التسعير المتدرجة المطبقة في دول الخليج وشمال إفريقيا وأوروبا.
 */
export default function SalesPricing({ t, isRtl }: SalesPricingProps) {
  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="sales-pricing">
      {/* وهج ذهبي خفيف في الخلفية */}
      <div className="absolute right-[5rem] top-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      
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
            {t.salesAndPricing.title}
            <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
          </h3>
        </motion.div>

        {/* شبكة القنوات والتسعير */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* العمود الأول: قنوات المبيعات (Sales Channels) */}
          <div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
             >
               <h4 className="text-2xl font-semibold text-white mb-4">{t.salesAndPricing.channelsDesc}</h4>
             </motion.div>

             <div className="space-y-6">
                {t.salesAndPricing.channels.map((channel: any, i: number) => {
                  const icons = [Briefcase, ShoppingCart, MonitorSmartphone];
                  const Icon = icons[i % icons.length];
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-6 items-start p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group"
                    >
                       <div className="shrink-0 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                          <Icon className="w-6 h-6 text-[#D4AF37]" />
                       </div>
                       <div>
                          <h5 className="text-xl font-bold text-white mb-2">{channel.title}</h5>
                          <p className="text-neutral-400 leading-relaxed">{channel.desc}</p>
                       </div>
                    </motion.div>
                  )
                })}
             </div>
          </div>

          {/* العمود الثاني: استراتيجيات التسعير (Pricing Strategy) */}
          <div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
             >
               <p className="text-lg text-neutral-300 leading-relaxed">{t.salesAndPricing.pricingDesc}</p>
             </motion.div>

             <div className="space-y-6">
                {t.salesAndPricing.pricing.map((item: any, i: number) => {
                  const icons = [Scale, Layers, Tag];
                  const Icon = icons[i % icons.length];
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-6 items-start p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group"
                    >
                       <div className="shrink-0 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                          <Icon className="w-6 h-6 text-[#D4AF37]" />
                       </div>
                       <div>
                          <h5 className="text-xl font-bold text-white mb-2">{item.title}</h5>
                          <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                       </div>
                    </motion.div>
                  )
                })}
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
