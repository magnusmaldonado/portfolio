const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  })
);

// BACK TO TOP
// ================================================================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  let scrollTimer;

  const updateBackToTop = () => {
    const passedFirstViewport = window.scrollY > window.innerHeight;

    // Hide immediately while scrolling
    backToTop.classList.remove("is-visible");

    clearTimeout(scrollTimer);

    // Once scrolling stops, show it only if we're past the first viewport
    scrollTimer = setTimeout(() => {
      if (passedFirstViewport) {
        backToTop.classList.add("is-visible");
      }
    }, 400);
  };

  window.addEventListener("scroll", updateBackToTop, { passive: true });

  backToTop.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
