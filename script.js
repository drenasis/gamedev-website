// Subtle randomized flicker timing so the CRT doesn't feel metronomic
(function () {
  const flicker = document.querySelector(".crt-flicker");
  if (!flicker) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  function reflicker() {
    flicker.style.animationDuration = (5 + Math.random() * 4).toFixed(2) + "s";
  }
  reflicker();
  flicker.addEventListener("animationiteration", reflicker);
})();

// Tiny tilt on joker cards for a bit of tactile "holding a card" feel
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  document.querySelectorAll(".jcard, .jokerframe").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
    card.style.transformStyle = "preserve-3d";
  });
})();
