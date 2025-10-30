// ====== VOLUNTARIADO ======
const form = document.getElementById('form-voluntario');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // campos
    const nome = document.getElementById('v-nome');
    const email = document.getElementById('v-email');
    const dispo = document.getElementById('v-dispo');
    const lgpd = document.getElementById('v-lgpd');

    // limpar mensagens
    document.getElementById('v-nome-erro').textContent = '';
    document.getElementById('v-email-erro').textContent = '';
    document.getElementById('v-dispo-erro').textContent = '';
    document.getElementById('v-lgpd-erro').textContent = '';
    document.getElementById('v-sucesso').textContent = '';

    // validações simples
    let ok = true;
    if (!nome.value.trim()) {
      document.getElementById('v-nome-erro').textContent = 'Informe seu nome.';
      ok = false;
    }
    if (!email.validity.valid) {
      document.getElementById('v-email-erro').textContent = 'E-mail inválido.';
      ok = false;
    }
    if (!dispo.value) {
      document.getElementById('v-dispo-erro').textContent = 'Escolha sua disponibilidade.';
      ok = false;
    }
    if (!lgpd.checked) {
      document.getElementById('v-lgpd-erro').textContent = 'É necessário aceitar a política.';
      ok = false;
    }

    if (!ok) return;

    // simula envio e feedback ao usuário
    document.getElementById('v-sucesso').textContent =
      'Inscrição enviada! Em breve entraremos em contato por e-mail. Obrigado por apoiar a vida marinha 💙';

    form.reset();
  });
}

// ====== DOAÇÕES ======
const botoes = document.querySelectorAll('.btn-valor');
const inputOutro = document.getElementById('doa-outro');
const botaoDoar = document.getElementById('doar-agora');
const resumo = document.getElementById('doa-resumo');

let valorSelecionado = null;

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    valorSelecionado = Number(btn.dataset.valor);
    inputOutro.value = '';
    resumo.textContent = `Valor selecionado: R$ ${valorSelecionado},00`;
  });
});

if (inputOutro) {
  inputOutro.addEventListener('input', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    const v = Number(inputOutro.value);
    valorSelecionado = isNaN(v) ? null : v;
    resumo.textContent = valorSelecionado ? `Valor selecionado: R$ ${valorSelecionado},00` : '';
  });
}

if (botaoDoar) {
  botaoDoar.addEventListener('click', () => {
    if (!valorSelecionado || valorSelecionado < 5) {
      resumo.textContent = 'Escolha um valor (mínimo R$ 5).';
      return;
    }
    // Simulação local
    alert(`Doação simulada de R$ ${valorSelecionado},00. Obrigado por apoiar a Onda Azul!`);
    resumo.textContent = 'Obrigado! Sua contribuição faz a diferença 🌊';
    valorSelecionado = null;
    inputOutro.value = '';
    botoes.forEach(b => b.classList.remove('ativo'));
  });
}
// Menu hambúrguer (mobile)
const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
if (toggle && links){
  toggle.addEventListener('click', ()=> {
    links.classList.toggle('open');
  });
}
function showToast(text, ms=2400){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = text;
  t.style.display = 'block';
  setTimeout(()=> t.style.display='none', ms);
}

// exemplo de uso depois do submit do contato:
const formContato = document.getElementById('form-contato');
if (formContato){
  formContato.addEventListener('submit', (e)=>{
    e.preventDefault();
    showToast('Mensagem enviada! 💙');
    formContato.reset();
  });
}

