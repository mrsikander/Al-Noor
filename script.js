
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Reveal elements smoothly when the page loads.
    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index * 100, 500)}ms`;

        requestAnimationFrame(() => {
            element.classList.add("visible");
        });
    });

    // Display the visitor's local time.
    const clock = document.getElementById("clock");

    function updateClock() {
        if (!clock) return;

        clock.textContent = new Intl.DateTimeFormat(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }).format(new Date());
    }

    updateClock();
    setInterval(updateClock, 1000);
});

