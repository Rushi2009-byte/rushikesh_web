function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if (position < screen - 100) {
      el.classList.add("show");
    }
  });
});