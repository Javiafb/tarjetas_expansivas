const movimiento = document.querySelectorAll(".imagens");

movimiento.forEach((imgs) => {
  imgs.addEventListener("click", () => {
    removeActiveClasses();
    imgs.classList.add("activar");
  });
});

function removeActiveClasses() {
  movimiento.forEach((imgs) => {
    imgs.classList.remove("activar");
  });
}
