document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
  const headerTexts = document.querySelectorAll(".header-text");

  if (header && hero) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.remove("bg-white");
          for (const text of headerTexts) {
            text.classList.remove("text-black");
            text.classList.add("text-white");
          }
        } else {
          header.classList.add("bg-white");
          for (const text of headerTexts) {
            text.classList.add("text-black");
            text.classList.remove("text-white");
          }
        }
      });
    });

    observer.observe(hero);
  }
});
