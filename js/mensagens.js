console.log("✅ mensagens.js carregado");

function mostrarMensagem(tipo, texto) {
  const resultado = document.getElementById("mensagem-resultado");

  // Limpa antes para forçar reanúncio pelo leitor de tela
  resultado.textContent = "";
  resultado.className = "mensagem " + tipo;

  // Pequeno atraso para garantir que o leitor de tela detecte a mudança
  setTimeout(() => {
    resultado.textContent = texto;

    // força reflow pra animação funcionar sempre
    void resultado.offsetWidth;

    resultado.classList.add("show");

    // 🔊 Foco automático na mensagem para acessibilidade
    resultado.focus();

    // ⏳ Remove a mensagem da tela após 5 segundos
    setTimeout(() => {
      resultado.classList.remove("show");
      resultado.textContent = ""; // limpa o texto para sumir completamente
    }, 5000);
  }, 100);
}
