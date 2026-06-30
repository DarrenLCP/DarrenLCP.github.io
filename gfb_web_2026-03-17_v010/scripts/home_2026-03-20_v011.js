const toggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector("[data-site-header]");
const navLinks = document.querySelectorAll(".site-nav a");

function closeMenu() {
  if (!toggle || !header) return;
  toggle.setAttribute("aria-expanded", "false");
  header.classList.remove("is-open");
}

toggle?.addEventListener("click", () => {
  if (!header) return;
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  header.classList.toggle("is-open", !expanded);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 960) closeMenu();
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 960) closeMenu();
});
