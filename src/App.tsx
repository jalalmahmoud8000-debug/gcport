import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabaseClient';
import { content, Lang } from './data/content';

// استيراد المكونات الفرعية المقسمة حديثاً
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import CompanyFacts from './components/CompanyFacts';
import Products from './components/Products';
import Facilities from './components/Facilities';
import Certifications from './components/Certifications';
import VisionMissionValues from './components/VisionMissionValues';
import USP from './components/USP';
import TargetMarkets from './components/TargetMarkets';
import Logistics from './components/Logistics';
import SalesPricing from './components/SalesPricing';
import PackagingLabeling from './components/PackagingLabeling';
import Tables from './components/Tables';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

/**
 * المكون الرئيسي للتطبيق (App Component).
 * يدير حالة اللغة وحالة جلب الصور من Supabase، ويقوم ببناء الصفحة كاملة
 * عبر دمج المكونات الفرعية وتمرير البيانات والخصائص اللازمة لها.
 */
export default function App() {
  // حالة اللغة الحالية للموقع (افتراضياً: العربية 'ar')
  const [lang, setLang] = useState<Lang>('ar');
  // حالة حفظ روابط صور معرض المنتجات المجلوبة من قاعدة بيانات Supabase
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // استخراج النصوص المترجمة للغة النشطة حالياً
  const t = content[lang];
  // التحقق مما إذا كانت اللغة الحالية هي العربية (لتحديد اتجاه الصفحة)
  const isRtl = lang === 'ar';

  /**
    * تأثير (Effect) لجلب صور المنتجات من وحدة التخزين السحابية (Supabase Storage Bucket 'gcport')
    * عند تحميل التطبيق للمرة الأولى.
    */
  useEffect(() => {
    async function fetchImages() {
      try {
        const { data, error } = await supabase.storage.from('gcport').list();
        if (error) throw error;
        
        if (data && data.length > 0) {
          // ترشيح الملفات لتكون صوراً فقط وبناء روابطها العامة الكاملة
          const imageUrls = data
            .filter(file => file.name.match(/\.(jpeg|jpg|gif|png)$/i))
            .map(file => supabase.storage.from('gcport').getPublicUrl(file.name).data.publicUrl);
            
          if (imageUrls.length > 0) {
            setGalleryImages(imageUrls);
          }
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  }, []);

  /**
    * تأثير (Effect) لتحديث سمات عنصر HTML الرئيسي (document.documentElement) 
    * لتغيير الاتجاه (rtl / ltr) ورمز اللغة عند تغيير المستخدم للغة.
    */
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  // دالة لتبديل لغة الموقع بين العربية والإنجليزية
  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  return (
    <div className={`min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-200 ${isRtl ? 'rtl' : 'ltr'}`}>
      
      {/* 1. شريط التنقل العلوي */}
      <Navbar lang={lang} toggleLang={toggleLang} t={t} />

      {/* 2. القسم الترحيبي (Hero Section) */}
      <Hero lang={lang} t={t} isRtl={isRtl} />

      {/* 3. قسم الملخص التنفيذي */}
      <ExecutiveSummary t={t} />

      {/* 4. قسم حقائق وأرقام الشركة */}
      <CompanyFacts t={t} isRtl={isRtl} />

      {/* 5. قسم المنتجات والخدمات والمعرض */}
      <Products lang={lang} t={t} isRtl={isRtl} galleryImages={galleryImages} />

      {/* 6. قسم المصانع والعمليات */}
      <Facilities t={t} isRtl={isRtl} />

      {/* 7. قسم شهادات الجودة والتراخيص */}
      <Certifications lang={lang} t={t} />

      {/* 8. قسم الرؤية والرسالة والقيم */}
      <VisionMissionValues t={t} />

      {/* 9. قسم المزايا التنافسية والعوامل الفريدة */}
      <USP t={t} />

      {/* 10. قسم الأسواق والقطاعات المستهدفة */}
      <TargetMarkets t={t} />

      {/* 11. قسم التوزيع والخدمات اللوجستية */}
      <Logistics t={t} />

      {/* 12. قسم قنوات المبيعات والتسعير */}
      <SalesPricing t={t} isRtl={isRtl} />

      {/* 13. قسم التعبئة والتغليف والملصقات القانونية */}
      <PackagingLabeling t={t} />

      {/* 14. قسم الجداول المقارنة للبيانات */}
      <Tables t={t} />

      {/* 15. قسم المخطط الزمني للنمو والخطط المستقبلية */}
      <Timeline t={t} isRtl={isRtl} />

      {/* 16. تذييل الصفحة وحقوق النشر */}
      <Footer t={t} />

    </div>
  );
}
