
const SUPABASE_URL = "https://jwujbtebbapliuwbuupi.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_Be2mCfgonxjjprcIXN_4QA_1UVVz-K9";

if (!window.supabase) {
  throw new Error("Biblioteca do Supabase não carregada.");
}

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const ADMIN_EMAIL = "julioqeu@gmail.com";
