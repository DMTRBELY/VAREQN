const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}
/* ========================================
   PORTFOLIO FILTERS
======================================== */

const filterButtons = document.querySelectorAll(".filter-button");
const portfolioCards = document.querySelectorAll(".portfolio-card");
const portfolioEmpty = document.querySelector(".portfolio-empty");

if (filterButtons.length && portfolioCards.length) {

  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const selectedFilter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach((item) => {
        const isActive = item === button;

        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      portfolioCards.forEach((card) => {

        const category = card.dataset.category;

        const shouldShow =
          selectedFilter === "all" ||
          selectedFilter === category;

        card.hidden = !shouldShow;

        if (shouldShow) {
          visibleCount++;
        }

      });

      if (portfolioEmpty) {
        portfolioEmpty.hidden = visibleCount !== 0;
      }

    });

  });

}
