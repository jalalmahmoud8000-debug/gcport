import React from 'react';

/**
 * واجهة الخصائص لمكون تذييل الصفحة.
 */
interface FooterProps {
  t: any; // كائن نصوص الترجمة الحالي
}

/**
 * مكون تذييل الصفحة (Footer Component).
 * يعرض حقوق النشر المحفوظة لشركة جولد كلين في أسفل الصفحة.
 */
export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 bg-black border-t border-white/10 text-center text-neutral-500 text-sm">
      <p>{t.footer.rights}</p>
    </footer>
  );
}
