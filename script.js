/* ========================================================
   script.js  –  Core behaviour for Hemalatha M Portfolio
   ======================================================== */

// ========== NAVBAR TOGGLE (Mobile) ==========
const navToggle = document.createElement("button");
navToggle.className = "nav-toggle";
navToggle.innerHTML = "☰";
document.querySelector("header .container").appendChild(navToggle);

const nav = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.background = "#e63946";
    nav.style.padding = "1rem";
    nav.style.borderRadius = "6px";
  }
});

// Close nav when clicking a link (mobile)
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) nav.style.display = "none";
  });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========== ACTIVE NAV HIGHLIGHT ON SCROLL ==========
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  document.querySelectorAll("nav a").forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
});

// ========== FADE-IN ANIMATION ON SCROLL ==========
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section, .timeline-item, .project-card").forEach((el) => {
  observer.observe(el);
});

// ========== YEAR IN FOOTER ==========
const yearEl = document.querySelector("footer p");
if (yearEl) {
  const yr = new Date().getFullYear();
  yearEl.innerHTML = `© ${yr} Hemalatha M | All Rights Reserved`;
}

// ========== SMALL HELPER: Reduce hero image size gracefully ==========
window.addEventListener("load", () => {
  const heroImg = document.querySelector(".hero-img img");
  if (heroImg) {
    heroImg.style.width = "180px";
    heroImg.style.height = "180px";
    heroImg.style.borderRadius = "50%";
    heroImg.style.objectFit = "cover";
  }
});

// ========== OPTIONAL: Hero animation typing effect ==========
const roles = ["Data Analyst", "Business Analyst", "Machine Learning Enthusiast"];
let idx = 0;
function typeEffect() {
  const roleEl = document.querySelector(".hero-text p");
  if (!roleEl) return;
  roleEl.style.opacity = 0;
  setTimeout(() => {
    roleEl.textContent = roles[idx % roles.length];
    roleEl.style.opacity = 1;
    idx++;
  }, 400);
}
setInterval(typeEffect, 2800);
