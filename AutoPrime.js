
// Comparador Antes e Depois - todos sliders
const sliders = document.querySelectorAll(".slider");
sliders.forEach(slider => {
  const overlay = slider.parentElement.querySelector(".img-overlay");
  slider.addEventListener("input", function () {
    overlay.style.width = this.value + "%";
  });
});

