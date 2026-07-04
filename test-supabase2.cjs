const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://vxedsjxzpekozeyhwbgg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZWRzanh6cGVrb3pleWh3YmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNzE4NTEsImV4cCI6MjA5ODc0Nzg1MX0.IUBTga3l0L-diSKRW45-m5O_a6Z6JHVjVwKlSKcyrwU';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function run() {
  const { data, error } = await supabase.storage.from('gcport').list();
  const imageUrls = data
            .filter(file => file.name.match(/\.(jpeg|jpg|gif|png)$/i))
            .map(file => {
               return supabase.storage.from('gcport').getPublicUrl(file.name).data.publicUrl;
            });
  console.log(imageUrls);
}
run();
