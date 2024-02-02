const movimiento = document.querySelectorAll(".imagens");

movimiento.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("activar");
  });
});

function removeActiveClasses() {
  movimiento.forEach((panel) => {
    panel.classList.remove("activar");
  });
}
