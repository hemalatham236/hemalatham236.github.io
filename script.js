/* script.js
   Populate site dynamically, handle nav, typing, and simple animations.
   Place this file in repo root and ensure index.html references it.
*/

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Data (projects, experience, education, certs, contact) ----------
  const experiences = [
    {
      title: "Data Science Intern (Time Series Forecast)",
      company: "C5i Company — Bengaluru",
      date: "Jun 2024 – Dec 2024",
      bullets: [
        "Cleaned and aggregated AirQualityUCI data from 9,357 records to 391 daily points.",
        "Performed decomposition, stationarity tests, Granger causality & Lasso feature selection.",
        "Built ARIMA, SARIMA, Prophet, Holt-Winters & XGBoost models; evaluated using MAE.",
        "Delivered insights to optimize greenhouse heating, cooling & irrigation.",
        "Developed dashboards and a Flask app for dataset upload & quick visualization."
      ]
    }
  ];

  const projects = [
    {
      title: "Time Series Forecasting — AirQualityUCI",
      desc: "Univariate temperature forecasting with ARIMA, Prophet and XGBoost to improve greenhouse control.",
      tools: "Python, ARIMA, Prophet, XGBoost",
      link: "https://github.com/hemalatham236/TimeSeries-Temperature-AirQualityUCI"
    },
    {
      title: "EDA on Ad Performance Data",
      desc: "Exploratory analysis of ad spend, impressions & clicks to derive Customer Engagement Score insights.",
      tools: "Python, Pandas, Seaborn, Excel",
      link: "https://github.com/hemalatham236/Ad-Performance-EDA"
    },
    {
      title: "Flask Application — Data Upload & Visualizer",
      desc: "Flask app to upload CSV/XLSX/Parquet and create quick visualizations and dataset previews.",
      tools: "Flask, Python, HTML, CSS, JavaScript",
      link: "https://github.com/hemalatham236/your-flask-app"
    },
    {
      title: "Netflix Data Analysis",
      desc: "Analyzed 8,800+ Netflix titles to uncover content trends, genre popularity and ratings insights.",
      tools: "Python, Pandas, Matplotlib",
      link: "https://github.com/hemalatham236/Netflix--Data-Exploration-and-Visualisation"
    },
    {
      title: "Walmart Sales Analysis",
      desc: "Applied CLT & statistical analysis on 550k+ records to derive mean purchase confidence intervals and customer insights.",
      tools: "Python, Statistics",
      link: "https://github.com/hemalatham236/Walmart--dataset--Confidence-Interval-and-CLT"
    },
    {
      title: "Yulu Bike Sharing Analysis",
      desc: "EDA and hypothesis testing on bike-sharing data to detect seasonal and weather effects on demand.",
      tools: "Python, SciPy, Visualization",
      link: "https://github.com/hemalatham236/Yulu-Data-set--Hypothesis-Testing"
    }
  ];

  const education = [
    { title: "Scaler — Data Science specialization", date: "Nov 2023 – Nov 2024", desc: "Scaler Academy specialization in Data Science & Machine Learning." },
    { title: "Careerera — Post Graduate Programme in Data Science", date: "Jul 2023 – Aug 2024", desc: "Post Graduate Programme covering advanced analytics & ML." },
    { title: "GKVK, Bangalore — B.Sc. Agricultural Marketing & Co-operation", date: "2012 – 2016", desc: "Bachelor of Science with focus on agricultural marketing." }
  ];

  const certifications = [
    { title: "Scaler – Skill Mastery: SQL", issuer: "Scaler", date: "Mar 2024", url: "https://moonshot.scaler.com/s/sl/fcHG28k-XO" },
    { title: "Python Libraries Certificate from Scaler", issuer: "Scaler", date: "Apr 2024", url: "https://moonshot.scaler.com/s/sl/sEhH-mysYw" },
    { title: "EDA Fundamentals Certificate from Scaler", issuer: "Scaler", date: "Jun 2024", url: "https://moonshot.scaler.com/s/sl/beW6mrNfXR" },
    { title: "Data Science Certificate from Careerera", issuer: "Careerera", date: "2024", url: "https://awards.careerera.com/Q0FSMjAyNC1XUzEwMzk5Ny0xMTQwMDU5LzE" }
  ];

  const contact = {
    email: "hemalatham236@gmail.com",
    github: "https://github.com/hemalatham236",
    linkedin: "https://www.linkedin.com/in/hemalatha-m-84b561233/"
  };

  // ---------- Utility: Insert year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Populate experience timeline ----------
  const expContainer = document.getElementById('experience-timeline');
  if (expContainer) {
    experiences.forEach((exp, i) => {
      const side = (i % 2 === 0) ? 'left' : 'right';
      const item = document.createElement('div');
      item.className = `timeline-item ${side}`;
      item.innerHTML = `<h3>${escapeHtml(exp.title)}</h3>
                        <p class="muted">${escapeHtml(exp.company)} • ${escapeHtml(exp.date)}</p>
                        <ul>${exp.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`;
      expContainer.appendChild(item);
    });
  }

  // ---------- Populate projects grid ----------
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projects.forEach(p => {
      const c = document.createElement('div');
      c.className = 'card';
      c.innerHTML = `<h3>${escapeHtml(p.title)}</h3>
                     <p>${escapeHtml(p.desc)}</p>
                     <p class="meta">Tools: ${escapeHtml(p.tools)}</p>
                     <a class="view" href="${p.link}" target="_blank" rel="noopener">View Project</a>`;
      projectsGrid.appendChild(c);
    });
  }

  // ---------- Populate education timeline ----------
  const eduContainer = document.getElementById('education-timeline');
  if (eduContainer) {
    education.forEach((ed, i) => {
      const side = (i % 2 === 0) ? 'left' : 'right';
      const item = document.createElement('div');
      item.className = `timeline-item ${side}`;
      item.innerHTML = `<h3>${escapeHtml(ed.title)}</h3><p class="muted">${escapeHtml(ed.date)}</p><p>${escapeHtml(ed.desc)}</p>`;
      eduContainer.appendChild(item);
    });
  }

  // ---------- Populate certifications ----------
  const certsGrid = document.getElementById('certs-grid');
  if (certsGrid) {
    certifications.forEach(c => {
      const el = document.createElement('div');
      el.className = 'card';
      el.innerHTML = `<h3>${escapeHtml(c.title)}</h3>
                      <p class="muted">${escapeHtml(c.issuer)} • ${escapeHtml(c.date)}</p>
                      <a class="view" href="${c.url}" target="_blank" rel="noopener">View Certificate</a>`;
      certsGrid.appendChild(el);
    });
  }

  // ---------- Navbar smooth behavior & mobile toggle ----------
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', () => {
    if (!nav) return;
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth < 900 && nav) nav.style.display = 'none';
      }
    });
  });

  // ---------- Active nav on scroll ----------
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(navLinks).map(l => document.querySelector(l.getAttribute('href')));
  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 80;
    navLinks.forEach((link, i) => {
      const sec = sections[i];
      if (!sec) return;
      if (sec.offsetTop <= fromTop && (sec.offsetTop + sec.offsetHeight) > fromTop) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  // ---------- Typing-like subtle highlight (static fallback) ----------
  // (deliberately simple — no external libs)
  const typed = document.querySelector('.hero-role');
  if (typed) {
    // minor animation: fade in words
    let roles = ["Data Analyst", "Business Analyst", "Machine Learning Enthusiast"];
    let i = 0;
    setInterval(() => {
      typed.style.opacity = 0;
      setTimeout(() => {
        typed.textContent = roles[i % roles.length].replace(/ /g, ' • ');
        typed.style.opacity = 1;
        i++;
      }, 450);
    }, 2800);
  }

  // ---------- small helper ----------
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"'`=\/]/g, function (s) {
      return ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;',
        "'": '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;'
      })[s];
    });
  }
});
