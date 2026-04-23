document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".container");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
      container.classList.add("active");
    });

    btn.addEventListener("mouseleave", () => {
      container.classList.remove("active");
    });

    btn.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--x", x + "px");
      container.style.setProperty("--y", y + "px");
    });

  });

});