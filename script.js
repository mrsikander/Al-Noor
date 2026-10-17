
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".main-logo");
  const logoFrame = document.querySelector(".logo-frame");

  // Add a graceful fallback if the original image path is incorrect.
  logo.addEventListener("error", () => {
    logoFrame.classList.add("image-error");
    console.error(
      "Alnoor logo not found. Check assets/alnoor-logo.png."
    );
  });

  // Subtle mouse movement on desktop.
  const container = document.querySelector(".logo-container");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    container &&
    !reducedMotion &&
    window.matchMedia("(pointer: fine)").matches
  ) {
    container.addEventListener("pointermove", (event) => {
      const rect = container.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      logoFrame.style.transform =
        `translate(${x * 5}px, ${y * 5}px)`;
    });

    container.addEventListener("pointerleave", () => {
      logoFrame.style.transform = "";
    });
  }
});
