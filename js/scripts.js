document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const navCollapse = document.querySelector(".navbar-collapse");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");
  const themeLabel = themeToggle.querySelector(".theme-label");
  const heroPortrait = document.getElementById("heroPortrait");
  const revealPage = () => document.body.classList.remove("is-loading");

  document.getElementById("year").textContent = new Date().getFullYear();
  const updateNavigation = () => navbar.classList.toggle("scrolled", window.scrollY > 18);
  updateNavigation();
  window.addEventListener("scroll", updateNavigation, { passive: true });

  const savedTheme = localStorage.getItem("portfolio-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.body.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    themeIcon.className = `bi ${isDark ? "bi-sun-fill" : "bi-moon-stars-fill"} theme-icon`;
    themeLabel.textContent = isDark ? "Light" : "Dark";
  };
  applyTheme(savedTheme || preferredTheme);

  if (heroPortrait.complete) {
    revealPage();
  } else {
    heroPortrait.addEventListener("load", revealPage, { once: true });
    heroPortrait.addEventListener("error", revealPage, { once: true });
  }

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const collapse = bootstrap.Collapse.getInstance(navCollapse);
      if (collapse) collapse.hide();
    });
  });
});
