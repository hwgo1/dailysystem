document.addEventListener("DOMContentLoaded", function () {
  const difficultyOptions = document.querySelectorAll(".difficulty-option");
  const difficultyInput = document.getElementById("task-difficulty");
  const expInput = document.getElementById("task-exp");
  const form = document.getElementById("task-form");

  // Configurar estado inicial
  const activeOption = document.querySelector(".difficulty-option.active");
  if (activeOption) {
    difficultyInput.value = activeOption.getAttribute("data-difficulty");
    expInput.value = activeOption.getAttribute("data-exp");
  } else {
    const defaultOption = document.querySelector(".difficulty-option.d");
    if (defaultOption) {
      defaultOption.classList.add("active");
      difficultyInput.value = "D";
      expInput.value = "50";
    }
  }

  // Adicionar eventos de clique para cada opção de dificuldade
  difficultyOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remover a classe "active" de todas as opções
      difficultyOptions.forEach((opt) => opt.classList.remove("active"));

      // Adicionar classe "active" à opção selecionada
      this.classList.add("active");

      // Atualizar os campos ocultos
      const difficulty = this.getAttribute("data-difficulty");
      const exp = this.getAttribute("data-exp");

      difficultyInput.value = difficulty;
      expInput.value = exp;

      console.log(`Dificuldade selecionada: ${difficulty}, EXP: ${exp}`);
    });
  });

  // Verificar os valores antes do envio do formulário
  form.addEventListener("submit", function (event) {
    const nameInput = document.getElementById("task-name");

    // Verificar se o nome está preenchido
    if (!nameInput.value.trim()) {
      event.preventDefault();
      alert("Por favor, digite o nome da missão!");
      return;
    }

    // Verificar se a dificuldade está definida
    if (!difficultyInput.value) {
      // Definir valor padrão se estiver vazio
      difficultyInput.value = "D";
      expInput.value = "50";
    }
  });
});
