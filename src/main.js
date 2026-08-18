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
const projectDialogCaption = document.querySelector("#project-dialog-caption");
const projectDialogCount = document.querySelector("#project-dialog-count");
const projectDialogGalleryStatus = document.querySelector("#project-dialog-gallery-status");
const projectDialogThumbnails = document.querySelector("#project-dialog-thumbnails");
const projectGalleryPrevious = document.querySelector(".project-gallery-arrow-prev");
const projectGalleryNext = document.querySelector(".project-gallery-arrow-next");
const projectDialogCategory = document.querySelector("#project-dialog-category");
const projectDialogTitle = document.querySelector("#project-dialog-title");
const projectDialogSummary = document.querySelector("#project-dialog-summary");
const projectDialogDescription = document.querySelector("#project-dialog-description");
const projectDialogFeatures = document.querySelector("#project-dialog-features");
const projectDialogClose = document.querySelector(".project-dialog-close");

const projectDetails = {
  recruitment: {
    title: "AI-Assisted Recruitment Operations",
    category: "Recruitment technology & AI",
    summary: "A controlled workspace combining recruitment workflows, system-assisted review, governed escalations and conversational access to authorized records.",
    description: "The platform connects lead intake, candidate stages, documents, assessments, payments, reporting, escalations and controlled handoffs. AI voice and chat assistance helps authorized staff locate context, while system-assisted document checks surface exceptions for human review and approvals remain human-led.",
    features: ["AI voice and chat assistance", "System-assisted document review", "Governed escalation workflows", "Role-based operations"],
    slides: [
      {
        src: "/project-screenshots/recruitment-ai-assistant-v2.jpg",
        alt: "Generic AI assistant welcoming an authorized user to a recruitment workflow",
        caption: "A privacy-safe conversational entry point helps authorized teams request workflow context.",
      },
      {
        src: "/project-screenshots/recruitment-workflow-dashboard-v2.jpg",
        alt: "Abstract recruitment operations dashboard with records, metrics and workflow labels removed",
        caption: "The dashboard structure illustrates stage-based operations without publishing records, metrics or internal taxonomy.",
      },
      {
        src: "/project-screenshots/recruitment-document-review-v2.jpg",
        alt: "Generic automated document review drawer flagging an inconsistency for human review",
        caption: "System-assisted checks surface exceptions without exposing documents, confidence scores or internal review logic.",
      },
      {
        src: "/project-screenshots/recruitment-escalation-workflow-v2.jpg",
        alt: "Anonymous escalation dashboard showing a synthetic workflow example",
        caption: "A governed queue routes operational risks to assigned reviewers without publishing real cases or identities.",
      },
    ],
  },
  finance: {
    title: "Finance Operations & Controls Platform",
    category: "Finance workflow automation",
    summary: "A configurable finance workspace designed around real processes, human review, connected workflows and management visibility.",
    description: "The platform coordinates collections, receipts, payables, billing, partner payouts, treasury, verification and reporting through controlled workflows. Integration queues, maker-checker approvals and audit trails support review, reconciliation and accountable action.",
    features: ["Configurable finance workflows", "Integration and review queues", "Maker-checker approvals", "Audit trails and operational analytics"],
    slides: [
      {
        src: "/project-screenshots/finance-platform-overview-v2.png",
        alt: "Public finance platform page showing a configurable operating system and an illustrative dashboard",
        caption: "This public-facing concept uses illustrative data, not client figures, to show a configurable finance operating model.",
      },
      {
        src: "/project-screenshots/finance-integrations-v2.png",
        alt: "Integration diagram connecting finance operations to ERP, banking, payroll, CRM, invoicing, spreadsheets and custom systems",
        caption: "The public integration map illustrates potential connection points; third-party names do not imply partnership or endorsement.",
      },
      {
        src: "/project-screenshots/finance-ledger-anonymized-v2.png",
        alt: "Anonymized finance ledger interface with client, candidate, account and financial values removed",
        caption: "The ledger structure demonstrates grouped milestones and record handling while live data and internal labels remain unpublished.",
      },
    ],
  },
  training: {
    title: "Training Operations & Handover Hub",
    category: "Training workflow automation",
    summary: "A training operations platform coordinating intake, learning delivery, fees, outcomes and cross-team handover.",
    description: "The platform brings assessments, course and batch assignment, attendance, fees, feedback, completion and handover into one role-based workspace. Prioritized action queues and clear workflow stages are designed to reduce missed handoffs while keeping approvals human-led.",
    features: ["Prioritized action queues", "Integration-ready events", "Role-based workflow stages", "Human-led approvals"],
    slides: [
      {
        src: "/project-screenshots/training-ops-overview-v1.jpg",
        alt: "Blank training intake workflow introduction",
        caption: "A guided intake begins the training workflow without exposing an individual record.",
      },
      {
        src: "/project-screenshots/training-ops-intake-v1.jpg",
        alt: "Empty intake and contact form with no personal details entered",
        caption: "Structured intake keeps required information consistent before assessment and enrollment.",
      },
      {
        src: "/project-screenshots/training-ops-enrollment-v1.jpg",
        alt: "Empty enrollment form for language and placement workflow details",
        caption: "Enrollment fields connect assessment status, language selection and downstream handover.",
      },
    ],
  },
  franchise: {
    title: "Franchise Onboarding & Operations Platform",
    category: "Franchise workflow automation",
    summary: "A modular operations foundation for controlled partner onboarding, compliance review and future center workflows.",
    description: "The implemented first phase automates partner onboarding, controlled document collection, role-based review, approval decisions and audit history. The modular model provides a path toward center operations, admissions, training, assessment, placement, payments and reporting.",
    features: ["Partner onboarding", "Document and review workflows", "Role-based approvals", "Modular operations architecture"],
    slides: [
      {
        src: "/project-screenshots/franchise-ops-overview-v1.jpg",
        alt: "Empty center setup workspace introduction",
        caption: "Center setup is presented as a controlled review and activation workflow.",
      },
      {
        src: "/project-screenshots/franchise-ops-status-v1.jpg",
        alt: "Zero-state center setup status cards for total, submitted and approved",
        caption: "Simple status signals separate submitted work from approved outcomes.",
      },
      {
        src: "/project-screenshots/franchise-ops-review-v1.jpg",
        alt: "Empty center setup review table with readiness and status columns",
        caption: "The review surface keeps partner, readiness, status and action context together.",
      },
    ],
  },
  people: {
    title: "People Operations & Leave Automation",
    category: "People operations technology",
    summary: "A role-based people workspace that brings employee self-service, team visibility and accountable approvals together.",
    description: "The platform supports attendance, workday check-in and check-out, leave requests and balances, manager approvals, notifications, policies, team administration and calendar visibility. Automated rules reduce manual spreadsheet work while sensitive decisions stay human-controlled.",
    features: ["Attendance and leave automation", "Manager approval workflows", "Role-based self-service", "Calendar and policy access"],
    slides: [
      {
        src: "/project-screenshots/people-ops-overview-v1.jpg",
        alt: "Workday dashboard introduction for an HR administrator",
        caption: "The workday view combines attendance, approvals and team signals in one place.",
      },
      {
        src: "/project-screenshots/people-ops-signals-v1.jpg",
        alt: "Zero-state cards for worked time, unread updates and pending approvals",
        caption: "Compact signals highlight workday status and action queues without exposing employee data.",
      },
      {
        src: "/project-screenshots/people-ops-navigation-v1.jpg",
        alt: "Role-based people operations navigation for leave, policies, approvals and calendar",
        caption: "A consistent navigation gives teams direct access to self-service and approval workflows.",
      },
    ],
  },
  assets: {
    title: "Asset Inventory & Allocation Control",
    category: "Asset lifecycle automation",
    summary: "A structured asset system replacing fragmented registers with traceable allocation and movement history.",
    description: "The platform manages asset intake, classification, allocation, vendor and location controls, lifecycle status, structured imports and controlled exports. It gives operations a clearer view of asset placement and status changes over time.",
    features: ["Asset lifecycle automation", "Allocation history", "Multi-location controls", "Structured data imports and exports"],
    slides: [
      {
        src: "/project-screenshots/asset-ops-overview-v1.jpg",
        alt: "Asset inventory entry introduction emphasizing clean and traceable records",
        caption: "A guided entry point establishes a consistent record for each asset.",
      },
      {
        src: "/project-screenshots/asset-ops-intake-v1.jpg",
        alt: "Blank asset intake form for classification, purchase and allocation details",
        caption: "Structured fields organize classification, source and allocation information without live values.",
      },
      {
        src: "/project-screenshots/asset-ops-lifecycle-v1.jpg",
        alt: "Blank asset lifecycle form for allocation, status, shelf life and warranty",
        caption: "Lifecycle controls capture where an asset sits and how its status changes over time.",
      },
    ],
  },
};

let lastProjectTrigger = null;
let activeProjectSlides = [];
let activeProjectSlideIndex = 0;

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

const renderProjectSlide = (index, { announce = true } = {}) => {
  if (!activeProjectSlides.length) return;

  activeProjectSlideIndex = (index + activeProjectSlides.length) % activeProjectSlides.length;
  const slide = activeProjectSlides[activeProjectSlideIndex];
  projectDialogImage.src = slide.src;
  projectDialogImage.alt = slide.alt;
  projectDialogCaption.textContent = slide.caption;
  projectDialogCount.textContent = `${activeProjectSlideIndex + 1} / ${activeProjectSlides.length}`;

  [...projectDialogThumbnails.children].forEach((thumbnail, thumbnailIndex) => {
    if (thumbnailIndex === activeProjectSlideIndex) thumbnail.setAttribute("aria-current", "true");
    else thumbnail.removeAttribute("aria-current");
  });

  if (announce) {
    projectDialogGalleryStatus.textContent = `Screenshot ${activeProjectSlideIndex + 1} of ${activeProjectSlides.length}. ${slide.caption}`;
    window.requestAnimationFrame(() => {
      projectDialogThumbnails
        .querySelector(`[data-slide-index="${activeProjectSlideIndex}"]`)
        ?.scrollIntoView({ block: "nearest", inline: "nearest" });
    });
  }
};

const buildProjectThumbnails = (slides) => {
  projectDialogThumbnails.replaceChildren(
    ...slides.map((slide, index) => {
      const button = document.createElement("button");
      const image = document.createElement("img");
      button.className = "project-gallery-thumbnail";
      button.type = "button";
      button.dataset.slideIndex = String(index);
      button.setAttribute("aria-controls", "project-dialog-image");
      button.setAttribute("aria-label", `Show screenshot ${index + 1} of ${slides.length}: ${slide.caption}`);
      image.src = slide.src;
      image.alt = "";
      image.loading = "lazy";
      image.decoding = "async";
      button.append(image);
      return button;
    }),
  );
};

const openProjectDialog = (projectKey, trigger) => {
  const project = projectDetails[projectKey];
  if (!project || !projectDialog) return;

  lastProjectTrigger = trigger;
  activeProjectSlides = project.slides;
  activeProjectSlideIndex = 0;
  projectDialogGalleryStatus.textContent = "";
  buildProjectThumbnails(activeProjectSlides);
  renderProjectSlide(0, { announce: false });
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

projectGalleryPrevious.addEventListener("click", () => renderProjectSlide(activeProjectSlideIndex - 1));
projectGalleryNext.addEventListener("click", () => renderProjectSlide(activeProjectSlideIndex + 1));

projectDialogThumbnails.addEventListener("click", (event) => {
  const thumbnail = event.target.closest(".project-gallery-thumbnail");
  if (!thumbnail) return;
  renderProjectSlide(Number(thumbnail.dataset.slideIndex));
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

projectDialog.addEventListener("keydown", (event) => {
  const galleryControl = event.target.closest(".project-dialog-media button");
  const galleryKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];

  if (galleryControl && galleryKeys.includes(event.key)) {
    event.preventDefault();
    const focusFollowsSlide = galleryControl.classList.contains("project-gallery-thumbnail");
    let nextIndex = activeProjectSlideIndex;
    if (event.key === "ArrowLeft") nextIndex -= 1;
    if (event.key === "ArrowRight") nextIndex += 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = activeProjectSlides.length - 1;
    renderProjectSlide(nextIndex);

    if (focusFollowsSlide) {
      window.requestAnimationFrame(() => {
        projectDialogThumbnails
          .querySelector(`[data-slide-index="${activeProjectSlideIndex}"]`)
          ?.focus({ preventScroll: true });
      });
    }
    return;
  }

  if (event.key !== "Tab") return;
  const controls = [...projectDialog.querySelectorAll('button:not([disabled]):not([hidden])')].filter(
    (element) => element.getClientRects().length,
  );
  const first = controls[0];
  const last = controls.at(-1);

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
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
