console.log("✅ formularios.js carregado");

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-contato");

  // 🔊 Função para tocar áudio
  function tocarAudio(src) {
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.play().catch(err => console.log("⚠️ Erro ao reproduzir áudio:", err));
  }

  // 🔊 Adiciona evento de foco em todos os campos do formulário
  const campos = form.querySelectorAll("input, textarea");
  campos.forEach(campo => {
    campo.addEventListener("focus", () => {
      tocarAudio("audio/som-formulario.mp3");
    });
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página
    console.log("🚀 Submit interceptado");

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      console.log("❌ Campos faltando");
      mostrarMensagem("erro", "Por favor, preencha todos os campos.");
      return;
    }

    console.log("✅ Sucesso");
    // Mensagem personalizada com o nome do usuário
    mostrarMensagem("sucesso", `Obrigado pelo seu contato ${nome}. Em breve retornaremos.`);

    form.reset();

    // 🔊 Som e foco só depois que a mensagem desaparecer
    setTimeout(() => {
      tocarAudio("audio/telaInicial.wav");
      document.getElementById("titulo").focus();
    }, 5100); // um pouco mais que o tempo da mensagem (5s)
  });
});

