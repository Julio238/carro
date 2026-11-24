// Configure com os dados do seu projeto em Supabase > Project Settings > API.
// Use somente a chave publicável/anon no navegador. Nunca coloque service_role aqui.
const SUPABASE_URL = 'https://SEU-PROJETO.supabase.co';
const SUPABASE_ANON_KEY = 'SUA-CHAVE-PUBLICAVEL-OU-ANON';

if (!window.supabase) {
  throw new Error('Biblioteca do Supabase não carregada.');
}
if (SUPABASE_URL.includes('SEU-PROJETO') || SUPABASE_ANON_KEY.includes('SUA-CHAVE')) {
  console.warn('Configure SUPABASE_URL e SUPABASE_ANON_KEY em supabaseClient.js.');
}
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// O papel de administrador deve ser confirmado no servidor (RLS/Policies).
// Este identificador serve apenas para exibir a interface administrativa.
const ADMIN_EMAIL = 'julioqeu@gmail.com';
