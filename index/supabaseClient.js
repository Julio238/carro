
const SUPABASE_URL = "https://jwujbtebbapluiwbuupi.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_Be2mCfgonxjjprcIXN_4QA_1UVVz-K9";

if (!window.supabase) {
  throw new Error("Biblioteca Supabase não carregada.");
}

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

window.ADMIN_EMAIL = "julioqeu@gmail.com";
