// Shared script: theme toggle + nav active state
(function () {
  const STORAGE_KEY = "wa-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.querySelector(".theme-toggle__label").textContent = theme === "dark" ? "Light" : "Dark";
    }
  }

  function initTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const theme = stored || "light";
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Expose
  window.waTheme = { toggle: toggleTheme, apply: applyTheme };

  // Init ASAP to avoid FOUC
  initTheme();

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);

    // Highlight current nav link
    const path = location.pathname.split("/").pop();
    document.querySelectorAll(".ds-nav__links a").forEach(a => {
      const href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        a.setAttribute("aria-current", "page");
      }
    });
  });
})();
