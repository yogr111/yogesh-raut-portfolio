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
const projectButtons = [...document.querySelectorAll(".project-open")];
const projectDialog = document.querySelector("#project-dialog");
const projectDialogImage = document.querySelector("#project-dialog-image");
const projectDialogCategory = document.querySelector("#project-dialog-category");
const projectDialogTitle = document.querySelector("#project-dialog-title");
const projectDialogSummary = document.querySelector("#project-dialog-summary");
const projectDialogDescription = document.querySelector("#project-dialog-description");
const projectDialogFeatures = document.querySelector("#project-dialog-features");
const projectDialogClose = document.querySelector(".project-dialog-close");

const projectDetails = {
  cda: {
    title: "CDA + POGO",
    category: "AI-assisted recruitment operations",
    image: "/project-screenshots/cda-pogo-v1.png",
    imageAlt: "POGO AI voice and chat assistant in the CDA operations platform",
    summary: "One controlled workspace for recruitment operations, team coordination and AI-assisted access to authorized candidate context.",
    description: "CDA connects lead intake, candidate pipelines, documents, assessments, meetings, payments, reporting and controlled handoffs. POGO, its AI-powered voice and chat assistant, helps authorized staff locate and summarize records while decisions and approvals remain with the responsible team.",
    features: ["POGO AI voice + chat", "Workflow orchestration", "Role-based operations", "React, Fastify & PostgreSQL"],
  },
  accountspro: {
    title: "AccountsPro",
    category: "Intelligent finance operations",
    image: "/project-screenshots/accountspro-v1.jpg",
    imageAlt: "AccountsPro public interface introducing its intelligent accounting operating system",
    summary: "A configurable finance operating system designed around real processes, review controls, connected workflows and integrations.",
    description: "AccountsPro brings collections, receipts, payables, billing, partner payouts, treasury, verification and management reporting into controlled workflows. Integration queues, maker-checker approvals and audit trails make finance activity easier to review, reconcile and act on.",
    features: ["Configurable finance workflows", "Integration queues", "Maker-checker approvals", "Audit trails & operational analytics"],
  },
  training: {
    title: "LangTraining Hub Pro",
    category: "Connected training operations",
    image: "/project-screenshots/langtraining-hub-v1.jpg",
    imageAlt: "Blank new candidate intake workflow in LangTraining Hub Pro",
    summary: "A training operations platform coordinating intake, learning delivery, fees, outcomes and cross-team handover.",
    description: "The platform brings assessments, course and batch assignment, attendance, fees, feedback, completion and handover into one role-based workspace. Prioritized action queues and clear workflow stages are designed to reduce missed handoffs while keeping approvals human-led.",
    features: ["Prioritized action queues", "Integration-ready events", "Role-based workflow stages", "Human-in-the-loop approvals"],
  },
  franchise: {
    title: "Novalife Skills Franchise OS",
    category: "Franchise workflow automation",
    image: "/project-screenshots/franchise-os-v1.jpg",
    imageAlt: "Empty Center Setup review workspace in Novalife Skills Franchise OS",
    summary: "A modular operations foundation for secure franchise onboarding, review and future center workflows.",
    description: "Its first phase automates partner onboarding, secure document collection, role-based review, approval decisions and audit history. The modular operating model creates a controlled path toward center operations, admissions, training, assessment, placement, payments and reporting.",
    features: ["Secure partner onboarding", "KYC review workflows", "Modular operations architecture", "Next.js & PostgreSQL"],
  },
  hrms: {
    title: "Novalife HRMS",
    category: "People operations automation",
    image: "/project-screenshots/hrms-v1.jpg",
    imageAlt: "Novalife HRMS workday dashboard with role-based navigation",
    summary: "A role-based people workspace that brings employee self-service, team visibility and accountable approvals together.",
    description: "HRMS supports attendance, punch-in and punch-out, leave requests and balances, manager approvals, notifications, policies, team administration and calendar visibility. Automated rules reduce spreadsheet dependency while sensitive HR decisions stay human-controlled.",
    features: ["Attendance & leave automation", "Manager approval workflows", "Role-based self-service", "Python & Flask"],
  },
  inventory: {
    title: "Novalife Inventory",
    category: "Digital asset lifecycle control",
    image: "/project-screenshots/inventory-v1.jpg",
    imageAlt: "Novalife Inventory dashboard header and navigation",
    summary: "A structured inventory system replacing fragmented registers with traceable asset movement and allocation history.",
    description: "The platform manages asset intake, classification, allocation, vendor and location controls, lifecycle status, structured imports and controlled exports. It gives operations a clearer view of where assets sit and how their status changes over time.",
    features: ["Asset lifecycle automation", "Allocation history", "Multi-location control", "Django-based operations"],
  },
};

let lastProjectTrigger = null;

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

const openProjectDialog = (projectKey, trigger) => {
  const project = projectDetails[projectKey];
  if (!project || !projectDialog) return;

  lastProjectTrigger = trigger;
  projectDialogImage.src = project.image;
  projectDialogImage.alt = project.imageAlt;
  projectDialogCategory.textContent = project.category;
  projectDialogTitle.textContent = project.title;
  projectDialogSummary.textContent = project.summary;
  projectDialogDescription.textContent = project.description;
  projectDialogFeatures.replaceChildren(
    ...project.features.map((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }),
  );

  closeMenu();
  document.body.classList.add("dialog-open");
  projectDialog.showModal();
  window.requestAnimationFrame(() => projectDialogClose.focus());
};

projectButtons.forEach((button) => {
  button.addEventListener("click", () => openProjectDialog(button.dataset.project, button));
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

projectDialog.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  event.preventDefault();
  projectDialogClose.focus();
});

projectDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  if (lastProjectTrigger?.isConnected) {
    window.requestAnimationFrame(() => lastProjectTrigger.focus());
  }
});

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
