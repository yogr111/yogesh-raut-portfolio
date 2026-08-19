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
const projectDialogShell = document.querySelector(".project-dialog-shell");

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
        src: "/project-screenshots/training-ops-dashboard-v2.png",
        alt: "Sanitized training operations dashboard with navigation visible and operational data covered by opaque redactions",
        caption: "An operational overview coordinates intake, batches, fees, completions and handover while live figures, organizations and people remain unpublished.",
      },
      {
        src: "/project-screenshots/training-ops-reports-v2.png",
        alt: "Sanitized training reporting and audit interface with navigation visible and live records covered by opaque redactions",
        caption: "Role-based reporting brings filters, status monitoring and audit review together while identities, dates and operational figures remain unpublished.",
      },
      {
        src: "/project-screenshots/training-ops-learning-experience-v2.png",
        alt: "Public language academy landing page presenting global career-focused training",
        caption: "The public learning experience connects language training, AI-assisted practice, certification and interview preparation.",
      },
    ],
  },
  franchise: {
    title: "Franchise Onboarding & Operations Platform",
    category: "Franchise workflow automation",
    summary: "A role-based franchise operations platform connecting partner onboarding, compliance review and day-to-day center workflows.",
    description: "The platform brings partner onboarding, controlled document collection, KYC decisions and approval checkpoints into a role-based workspace. Its modular operations layer also supports center setup, candidate admissions, batch and attendance management, and grievance handling; payments, assessment, certificates and placement support remain pending modules.",
    features: ["Partner and KYC onboarding", "Center and candidate workflows", "Batch, attendance and grievance operations", "Role-based review workflow"],
    slides: [
      {
        src: "/project-screenshots/franchise-ops-access-v2.png",
        alt: "Sanitized sign-in screen for a franchise onboarding and operations platform",
        caption: "A dedicated sign-in experience protects access to the franchise operations workspace.",
      },
      {
        src: "/project-screenshots/franchise-ops-dashboard-v2.png",
        alt: "Sanitized franchise operations dashboard with navigation visible and private account, metric and partner data covered",
        caption: "The head-office interface presents partner onboarding and review alongside broader center operations while identities, locations, dates and live figures remain unpublished.",
      },
      {
        src: "/project-screenshots/franchise-ops-compliance-review-v2.png",
        alt: "Sanitized KYC review workspace with navigation visible and partner identity, progress and document states covered",
        caption: "A structured review interface organizes business-document checks and approval progress while protecting partner records and workflow state.",
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
  candidateMobile: {
    title: "Candidate Journey Mobile App",
    category: "Mobile self-service & workflow visibility",
    summary: "An authenticated cross-platform mobile workspace that gives candidates a clear view of journey status, outstanding requests, document activity and recorded payment milestones.",
    description: "Built with React Native and TypeScript, the app combines candidate sign-in with a four-tab dashboard for journey updates, action requests, document uploads and payment visibility. Candidates can review assigned tasks, select and upload requested files, track uploaded-document history and view recorded payment milestones. Periodic refresh keeps the experience aligned with the operational workflow.",
    features: ["React Native and TypeScript", "iOS and Android targets", "Request-led multi-file upload", "Journey and milestone visibility"],
    gallery: "portrait",
    slides: [
      {
        src: "/project-screenshots/candidate-mobile-sign-in-v1.png",
        alt: "Illustrative iOS candidate app sign-in screen with masked placeholder fields",
        caption: "This AI-generated synthetic sign-in view represents authenticated candidate access without exposing real identities, credentials or company branding.",
      },
      {
        src: "/project-screenshots/candidate-mobile-home-v1.png",
        alt: "Illustrative iOS candidate journey dashboard showing status and self-service areas",
        caption: "This AI-generated synthetic home view brings journey status, requests, documents and payments together without operational content.",
      },
      {
        src: "/project-screenshots/candidate-mobile-requests-v1.png",
        alt: "Illustrative iOS request screen for selecting and uploading generic documents",
        caption: "This AI-generated synthetic request flow demonstrates native file selection and upload while keeping real document types and candidate records private.",
      },
    ],
  },
  connectedOps: {
    title: "Connected Business Operations & Automation",
    category: "Business systems integration & automation",
    summary: "A business operations integration programme connecting Zoho applications and WhatsApp workflows to reduce manual handoffs and improve everyday efficiency.",
    description: "Worked with organisational teams to embed connected Zoho products into daily operations—from custom applications and CRM workflows to documents, projects, meetings, campaigns and messaging automation. The work streamlined recurring processes, improved coordination and made operational information easier to manage without publishing organization-specific logic or records.",
    features: [
      "Custom operational applications with Zoho Creator",
      "CRM and relationship workflows with Zoho CRM",
      "Cross-application automation with Zoho Flow",
      "Documents and approvals with Zoho Writer and Zoho Sign",
      "Work coordination with Zoho Projects and Zoho Meeting",
      "Engagement through Zoho Campaigns, Zoho SalesIQ and Zoho Social",
      "WhatsApp integration and automation through Wati",
    ],
    slides: [
      {
        src: "/project-screenshots/connected-operations-creator-dashboard-v2.png",
        alt: "Sanitized Zoho Creator operations dashboard with safe navigation visible and live data covered by opaque redactions",
        caption: "Operational visibility in Zoho Creator, with safe navigation retained and organization names, identities and live metrics irreversibly removed.",
      },
      {
        src: "/project-screenshots/connected-operations-flow-library-v2.png",
        alt: "Sanitized Zoho Flow workspace with navigation visible and private workflow details covered by opaque redactions",
        caption: "Cross-application automation in Zoho Flow, with product navigation visible while workflow names, deployment states and account details remain unpublished.",
      },
      {
        src: "/project-screenshots/connected-operations-portal-admin-v2.png",
        alt: "Sanitized Zoho Creator portal administration view with navigation visible and application details covered by opaque redactions",
        caption: "Purpose-built portal administration in Zoho Creator, with application names, portal addresses and user counts irreversibly removed.",
      },
      {
        src: "/project-screenshots/connected-operations-crm-dashboard-v2.png",
        alt: "Sanitized Zoho CRM dashboard with navigation visible and organization metrics covered by opaque redactions",
        caption: "CRM workflow visibility in Zoho CRM, with generic navigation retained and organization identifiers, dates and live figures removed.",
      },
      {
        src: "/project-screenshots/connected-operations-messaging-analytics-v2.png",
        alt: "Sanitized Wati WhatsApp automation dashboard with navigation visible and account data covered by opaque redactions",
        caption: "WhatsApp operations through Wati, with product navigation visible while phone numbers, account details, dates and operational metrics remain unpublished.",
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
      const activeThumbnail = projectDialogThumbnails.querySelector(`[data-slide-index="${activeProjectSlideIndex}"]`);
      if (!activeThumbnail) return;

      const stripBounds = projectDialogThumbnails.getBoundingClientRect();
      const thumbnailBounds = activeThumbnail.getBoundingClientRect();
      if (thumbnailBounds.left < stripBounds.left) {
        projectDialogThumbnails.scrollLeft -= stripBounds.left - thumbnailBounds.left;
      } else if (thumbnailBounds.right > stripBounds.right) {
        projectDialogThumbnails.scrollLeft += thumbnailBounds.right - stripBounds.right;
      }
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
  projectDialogShell.scrollTop = 0;
  projectDialogThumbnails.scrollLeft = 0;
  projectDialog.dataset.gallery = project.gallery ?? "landscape";
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
  window.requestAnimationFrame(() => {
    projectDialogShell.scrollTop = 0;
    projectDialogThumbnails.scrollLeft = 0;
    projectDialogClose.focus();
  });
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
