// data.js
// Dynamic data for Hemalatha M portfolio (populated from resume)

// -------------------- CONTACT --------------------
const contact = {
  name: "Hemalatha M",
  email: "hemalatham236@gmail.com",
  phone: "+91 79750 25711",
  github: "https://github.com/hemalatham236",
  linkedin: "https://www.linkedin.com/in/hemalatha-m-84b561233/",
  resume: "assets/Hemalatha_resume_updated(2).pdf"
};

// -------------------- EXPERIENCE --------------------
// Taken from resume: C5i internship + relevant bullets
const experiences = [
  {
    title: "Data Science Intern (Time Series Forecast)",
    company: "C5i Company — Bengaluru",
    date: "Jun 2024 – Dec 2024",
    bullets: [
      "Extracted and transformed large datasets using Python, ensuring data readiness for analysis.",
      "Conducted data cleaning, aggregation, and resampling on AirQualityUCI (9,357 records → 391 daily points).",
      "Applied time-series decomposition, stationarity tests, and feature selection using Granger causality, correlation, and Lasso.",
      "Built and fine-tuned predictive models (ARIMA, SARIMA, Prophet, Holt-Winters, XGBoost) for temperature forecasting.",
      "Evaluated model performance using MAE and produced actionable model comparisons.",
      "Delivered insights to optimize greenhouse heating, cooling and irrigation systems (operational recommendations).",
      "Collaborated in dashboard development for visual reporting and created a Flask app for dataset upload & quick visualization.",
      "Performed EDA on Ad Performance data to study Customer Engagement Score (CES) vs ad metrics (spend, impressions, clicks)."
    ]
  }
];

// -------------------- PROJECTS --------------------
// Projects and GitHub links as listed in your resume
const projects = [
  {
    title: "Time Series Forecasting — AirQualityUCI",
    desc: "Univariate temperature forecasting: cleaned & aggregated AirQualityUCI data, applied decomposition and stationarity tests and trained ARIMA/SARIMA/Prophet/XGBoost models to support greenhouse management.",
    tools: "Python, Pandas, ARIMA, Prophet, XGBoost, Flask",
    link: "https://github.com/hemalatham236/learning/tree/main/hemalatha"
  },
  {
    title: "Netflix Business Case Study",
    desc: "Analyzed 8,800+ Netflix titles to surface content trends, genre popularity and rating patterns to guide content strategy.",
    tools: "Python, Pandas, Matplotlib, Seaborn",
    link: "https://github.com/hemalatham236/Netflix--Data-Exploration-and-Visualisation"
  },
  {
    title: "Walmart Business Case Study",
    desc: "Analyzed 550k+ Walmart customer records; applied Central Limit Theorem & confidence intervals to drive demographic insights and marketing strategy recommendations.",
    tools: "Python, Statistics, CLT",
    link: "https://github.com/hemalatham236/Walmart--dataset--Confidence-Interval-and-CLT"
  },
  {
    title: "Yulu Business Case Study",
    desc: "Bike sharing demand analysis: ANOVA, t-tests and correlation analysis to identify seasonal and weather factors affecting ridership and improve forecasting.",
    tools: "Python, Pandas, SciPy, Visualization",
    link: "https://github.com/hemalatham236/Yulu-Data-set--Hypothesis-Testing"
  },
  {
    title: "Target Business Case Study (SQL)",
    desc: "SQL-based analysis of customer order patterns to identify peak times and inefficiencies; recommended strategies that improved cost efficiency.",
    tools: "SQL, Data Modelling",
    link: "#" // no repo link provided in resume — replace if you have one
  },
  {
    title: "Flask Application — Data Upload & Visualizer",
    desc: "Application using Flask to upload CSV/XLSX/Parquet, preview top rows and create quick scatter plots with dynamic dropdowns and error handling.",
    tools: "Flask, Python, HTML, CSS, JavaScript",
    link: "https://github.com/hemalatham236/learning/tree/main/hemalatha"
  }
];

// -------------------- EDUCATION --------------------
const education = [
  {
    school: "Scaler Academy",
    degree: "Data Science Specialization",
    date: "Dec 2023 – Present",
    note: "Focused on SQL, EDA, Python libraries and applied ML workflows."
  },
  {
    school: "Careerera",
    degree: "Post Graduate Programme in Data Science",
    date: "Jul 2023 – Aug 2024",
    note: "Comprehensive program covering advanced analytics and ML."
  },
  {
    school: "Gandhi Krishi Vignana Kendra (GKVK), Bangalore",
    degree: "B.Sc. Agricultural Marketing & Co-operation",
    date: "2012 – 2016",
    note: "Undergraduate degree with practical exposure to agricultural markets."
  }
];

// -------------------- CERTIFICATIONS --------------------
// Exact certificate links you provided in resume
const certifications = [
  {
    title: "Scaler – Skill Mastery: SQL",
    issuer: "Scaler",
    date: "Mar 2024",
    url: "https://moonshot.scaler.com/s/sl/fcHG28k-XO"
  },
  {
    title: "Python Libraries Certificate from Scaler",
    issuer: "Scaler",
    date: "Apr 2024",
    url: "https://moonshot.scaler.com/s/sl/sEhH-mysYw"
  },
  {
    title: "EDA Fundamentals Certificate from Scaler",
    issuer: "Scaler",
    date: "Jun 2024",
    url: "https://moonshot.scaler.com/s/sl/beW6mrNfXR"
  },
  {
    title: "Data Science Certificate from Careerera",
    issuer: "Careerera",
    date: "2024",
    url: "https://awards.careerera.com/Q0FSMjAyNC1XUzEwMzk5Ny0xMTQwMDU5LzE"
  }
];

// -------------------- RENDER HELPERS --------------------
// Utility to safely find a container by multiple possible IDs
function findFirstContainer(ids = []) {
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) return el;
  }
  return null;
}

// Create and append an experience timeline item
function createTimelineItem(item) {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  const bulletsHtml = item.bullets ? `<ul>${item.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>` : '';
  div.innerHTML = `
    <h3>${escapeHtml(item.title)}</h3>
    ${item.company ? `<p class="muted">${escapeHtml(item.company)} • ${escapeHtml(item.date)}</p>` : `<p class="muted">${escapeHtml(item.date)}</p>`}
    ${item.description ? `<p>${escapeHtml(item.description)}</p>` : bulletsHtml}
  `;
  return div;
}

// Create and append a project card (works with .project-card or .card styles)
function createProjectCard(p) {
  const div = document.createElement('div');
  div.className = 'project-card card';
  div.innerHTML = `
    <h4>${escapeHtml(p.title || p.name)}</h4>
    <p>${escapeHtml(p.desc || p.description)}</p>
    <p class="meta">${escapeHtml(p.tools || '')}</p>
    ${p.link && p.link !== '#' ? `<a href="${p.link}" class="view" target="_blank" rel="noopener">View Project</a>` : ''}
  `;
  return div;
}

// Create education / cert item
function createSimpleItem(item) {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  div.innerHTML = `
    <h3>${escapeHtml(item.school || item.title || item.name)}</h3>
    <p class="muted">${escapeHtml(item.date || item.degree || '')}</p>
    <p>${escapeHtml(item.note || item.description || '')}</p>
    ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener">View</a>` : ''}
  `;
  return div;
}

// Safe HTML escape
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"'`=\/]/g, function (s) {
    return ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;',
      "'": '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;'
    })[s];
  });
}

// -------------------- RENDER ON LOAD --------------------
document.addEventListener('DOMContentLoaded', () => {
  // Contact: (if your HTML has elements to show contact, fill them)
  const emailEl = document.querySelector('[data-contact="email"]');
  if (emailEl) emailEl.href = `mailto:${contact.email}`;

  // Experience: populate into any of these container IDs
  const expContainer = findFirstContainer(['experience-timeline', 'experience-list', 'experience', 'experience-list-container']);
  if (expContainer) {
    experiences.forEach(exp => {
      expContainer.appendChild(createTimelineItem(exp));
    });
  }

  // Projects: look for multiple possible project container IDs
  const projectsContainer = findFirstContainer(['projects-grid', 'project-list', 'projects', 'portfolio-grid', 'project-list-container']);
  if (projectsContainer) {
    // If your CSS expects a grid wrapper element with class .project-card, we append project cards
    projects.forEach(p => {
      projectsContainer.appendChild(createProjectCard(p));
    });
  }

  // Education
  const eduContainer = findFirstContainer(['education-timeline', 'education-list', 'education', 'education-list-container']);
  if (eduContainer) {
    education.forEach(ed => {
      eduContainer.appendChild(createSimpleItem(ed));
    });
  }

  // Certifications
  const certContainer = findFirstContainer(['certs-grid', 'certification-list', 'certifications-timeline', 'certification-list-container', 'certification-list']);
  if (certContainer) {
    certifications.forEach(c => {
      certContainer.appendChild(createSimpleItem(c));
    });
  }

  // If there are known ID names from older HTML variants you used earlier, also fill them
  // e.g., older index.html used ids: project-list, experience-list, certification-list
  const fallbackProjectList = document.getElementById('project-list');
  if (fallbackProjectList && !projectsContainer) {
    projects.forEach(p => fallbackProjectList.appendChild(createProjectCard(p)));
  }

  // Fill contact card if present
  const githubEl = document.querySelector('[data-contact="github"]');
  if (githubEl) githubEl.href = contact.github;
  const linkedinEl = document.querySelector('[data-contact="linkedin"]');
  if (linkedinEl) linkedinEl.href = contact.linkedin;

  // Insert resume link into elements with data-resume attribute
  const resumeEls = document.querySelectorAll('[data-resume]');
  resumeEls.forEach(el => {
    el.href = contact.resume;
  });
});
