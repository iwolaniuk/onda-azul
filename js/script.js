// 1️⃣ Mensagem de boas-vindas
window.addEventListener("load", () => {
  alert("🌊 Bem-vindo(a) à ONG Onda Azul!");
});

// 2️⃣ Manipulação do DOM (alterar título da página de projetos)
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h2");
  if (titulo) {
    titulo.textContent = "Nossos projetos para proteger a vida marinha 🌊";
  }
});

// 3️⃣ Validação do formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const erro = document.getElementById("erro");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        erro.textContent = "Por favor, preencha todos os campos.";
      } else {
        erro.textContent = "";
        alert("Mensagem enviada com sucesso! 💌");
        form.reset();
      }
    });
  }
});
// 🌙 Alternar modo escuro
document.addEventListener("DOMContentLoaded", () => {
  const toggleDark = document.getElementById("toggle-dark");
  if (toggleDark) {
    toggleDark.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleDark.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Modo Claro"
        : "🌙 Modo Escuro";
    });
  }
});
// ====== MENU HAMBÚRGUER ======
document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (btnMenu && navLinks) {
    btnMenu.addEventListener("click", () => {
      navLinks.classList.toggle("ativo");
    });
  }
});

