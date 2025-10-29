/* data.js - site data for Hemalatha M (used by script.js)
   This file is plain JS and exposes global variables used by script.js
*/

const profileData = {
  name: "Hemalatha M",
  role: "Data Analyst",
  intro:
    "Passionate Data Analyst focused on turning data into actionable business insights. Skilled in Python, SQL, Tableau, and building lightweight data apps.",
  linkedin: "https://www.linkedin.com/in/hemalatha-m-84b561233/",
  github: "https://github.com/hemalatham236",
  resume: "assets/Hemalatha_resume_updated(2).pdf",
  photo: "assets/profile.jpg" // ensure your photo is at this path
};

const experiences = [
  {
    title: "Data Science Intern (Time Series Forecast)",
    company: "C5i Technologies — Bengaluru",
    date: "Jun 2024 – Dec 2024",
    description:
      "Extracted, cleaned and resampled AirQualityUCI temperature data; performed decomposition, stationarity tests, and feature selection. Built ARIMA/SARIMA/Prophet and XGBoost models and delivered operational recommendations for greenhouse irrigation and energy optimization."
  }
];

const projects = [
  {
    title: "Time Series Forecasting — AirQualityUCI",
    description:
      "Univariate temperature forecasting to optimize greenhouse heating and irrigation strategies. Models: ARIMA, Prophet, XGBoost.",
    link: "https://github.com/hemalatham236/learning/tree/main/hemalatha"
  },
  {
    title: "Netflix Data Analysis",
    description:
      "EDA of Netflix titles to identify trends, genre popularity and content strategy insights.",
    link: "https://github.com/hemalatham236/Netflix--Data-Exploration-and-Visualisation"
  },
  {
    title: "Walmart Sales Analysis",
    description:
      "Applied CLT and confidence intervals on large retail dataset to provide actionable insights.",
    link: "https://github.com/hemalatham236/Walmart--dataset--Confidence-Interval-and-CLT"
  },
  {
    title: "Yulu Bike Sharing EDA",
    description:
      "Hypothesis testing and EDA to understand demand drivers and seasonal patterns.",
    link: "https://github.com/hemalatham236/Yulu-Data-set--Hypothesis-Testing"
  },
  {
    title: "Flask App — Data Upload & Visualizer",
    description:
      "Flask web app to upload CSV/XLSX and generate quick visualizations for analysts.",
    link: "https://github.com/hemalatham236/learning/tree/main/hemalatha"
  }
];

const education = [
  {
    title: "Scaler — Data Science Specialization",
    date: "Nov 2023 – Nov 2024",
    note: "Specialized in Data Science & Machine Learning (SQL, EDA, Python)."
  },
  {
    title: "Careerera — Post Graduate Programme in Data Science",
    date: "Jul 2023 – Aug 2024",
    note: "Comprehensive program in advanced analytics and ML."
  },
  {
    title: "GKVK, Bangalore — B.Sc. Agricultural Marketing & Co-operation",
    date: "2012 – 2016",
    note: "Undergraduate degree with market focus."
  }
];

const certifications = [
  {
    title: "Scaler – Skill Mastery: SQL",
    date: "Mar 2024",
    url: "https://moonshot.scaler.com/s/sl/fcHG28k-XO"
  },
  {
    title: "Python Libraries Certificate — Scaler",
    date: "Apr 2024",
    url: "https://moonshot.scaler.com/s/sl/sEhH-mysYw"
  },
  {
    title: "EDA Fundamentals — Scaler",
    date: "Jun 2024",
    url: "https://moonshot.scaler.com/s/sl/beW6mrNfXR"
  },
  {
    title: "Data Science — Careerera",
    date: "2024",
    url: "https://awards.careerera.com/Q0FSMjAyNC1XUzEwMzk5Ny0xMTQwMDU5LzE"
  }
];
