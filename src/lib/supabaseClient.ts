import { createClient } from '@supabase/supabase-js';

/**
 * رابط المشروع (Supabase URL) ومفتاح الوصول العام (Anon Key).
 * تُستخدم هذه البيانات للاتصال بقاعدة بيانات وخدمات التخزين السحابي لـ Supabase.
 */
const SUPABASE_URL = 'https://vxedsjxzpekozeyhwbgg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZWRzanh6cGVrb3pleWh3YmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNzE4NTEsImV4cCI6MjA5ODc0Nzg1MX0.IUBTga3l0L-diSKRW45-m5O_a6Z6JHVjVwKlSKcyrwU';

/**
 * تهيئة وتصدير عميل Supabase (supabase client).
 * يُمكّننا هذا العميل من إجراء الاستعلامات والاتصال بـ Storage لجلب صور المنتجات وغيرها.
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
