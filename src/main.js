import "./styles.css";

document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const skipLink = document.querySelector(".skip-link");
const mainContent = document.querySelector("#main-content");
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const themeSections = [...document.querySelectorAll("[data-nav-theme]")];
const revealItems = [...document.querySelectorAll("[data-reveal]")];
const scrollMeter = document.querySelector(".scroll-meter span");
const hero = document.querySelector(".hero");
const year = document.querySelector("#copyright-year");

const setCoveredContentInert = (isInert) => {
  skipLink.toggleAttribute("inert", isInert);
  mainContent.toggleAttribute("inert", isInert);
  if (isInert) {
    skipLink.setAttribute("aria-hidden", "true");
    mainContent.setAttribute("aria-hidden", "true");
  } else {
    skipLink.removeAttribute("aria-hidden");
    mainContent.removeAttribute("aria-hidden");
  }
};

const closeMenu = ({ restoreFocus = false } = {}) => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
  setCoveredContentInert(false);
  if (restoreFocus) window.requestAnimationFrame(() => menuToggle.focus());
};

const openMenu = () => {
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");
  document.body.classList.add("menu-open");
  setCoveredContentInert(true);
};

menuToggle.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  if (willOpen) openMenu();
  else closeMenu({ restoreFocus: true });
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  const menuIsOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (!menuIsOpen) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu({ restoreFocus: true });
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = [...header.querySelectorAll('a[href], button:not([disabled])')];
  const first = focusable[0];
  const last = focusable.at(-1);

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.matchMedia("(max-width: 860px)").addEventListener("change", (event) => {
  if (!event.matches) closeMenu();
});

const updateScrollMeter = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  scrollMeter.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
};

let scrollTicking = false;
window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(() => {
      updateScrollMeter();
      scrollTicking = false;
    });
  },
  { passive: true },
);
updateScrollMeter();

const themeObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) header.dataset.theme = visible.target.dataset.navTheme;
  },
  { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
);
themeSections.forEach((section) => themeObserver.observe(section));

const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  },
  { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1] },
);
themeSections.forEach((section) => activeSectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
);
revealItems.forEach((item) => revealObserver.observe(item));

const finePointer = window.matchMedia("(pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (finePointer.matches && !reducedMotion.matches) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    hero.style.setProperty("--spot-x", `${x}%`);
    hero.style.setProperty("--spot-y", `${y}%`);
  });
}

year.textContent = `© ${new Date().getFullYear()}`;
