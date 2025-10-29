/* data.js — dynamic content for the portfolio */

/* Experience */
const experiences = [
  {
    title: "Data Science Intern (Time Series Forecast)",
    company: "C5i Company — Bengaluru",
    date: "Jun 2024 – Dec 2024",
    bullets: [
      "Cleaned and aggregated AirQualityUCI data: 9,357 records → 391 daily points.",
      "Performed decomposition, stationarity tests, Granger causality & feature selection (Lasso).",
      "Built ARIMA, SARIMA, Prophet, Holt-Winters & XGBoost models; evaluated via MAE.",
      "Delivered actionable insights to optimize greenhouse heating, cooling & irrigation.",
      "Developed dashboards and a Flask app for dataset upload & basic visualizations."
    ]
  }
];

/* Projects */
const projects = [
  {
    title: "Time Series Forecasting — AirQualityUCI",
    desc: "Univariate temperature forecasting using ARIMA, Prophet, XGBoost. Cleaned 9k+ records into daily series and produced forecasts to aid greenhouse management.",
    tools: "Python, ARIMA, Prophet, XGBoost",
    link: "https://github.com/hemalatham236/TimeSeries-Temperature-AirQualityUCI" // change if different
  },
  {
    title: "EDA on Ad Performance Data",
    desc: "Exploratory analysis of ad metrics (spend, impressions, clicks) and Customer Engagement Score (CES) to identify high-impact campaign strategies.",
    tools: "Python, Pandas, Seaborn, Excel",
    link: "https://github.com/hemalatham236/Ad-Performance-EDA"
  },
  {
    title: "Flask Application — Data Upload & Visualizer",
    desc: "Flask app to upload CSV/XLSX/Parquet and create quick visualizations (scatter, head preview). Includes error handling and dynamic dropdowns.",
    tools: "Flask, Python, HTML, CSS, JS",
    link: "https://github.com/hemalatham236/your-flask-app" /* update if your real repo name is different */
  }
];

/* Education */
const education = [
  {
    title: "Scaler — Data Science specialization",
    date: "Nov 2023 – Nov 2024",
    desc: "Scaler Academy specialization in Data Science & Machine Learning."
  },
  {
    title: "Careerera — Post Graduate Programme in Data Science",
    date: "Jul 2023 – Aug 2024",
    desc: "Post Graduate Programme covering advanced analytics and ML."
  },
  {
    title: "GKVK, Bangalore — B.Sc. Agricultural Marketing & Co-operation",
    date: "2012 – 2016",
    desc: "Bachelor of Science with focus on agricultural marketing."
  }
];

/* Certifications */
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

/* Contact info (displayed in contact section) */
const contact = {
  email: "hemalatham236@gmail.com",
  github: "https://github.com/hemalatham236",
  linkedin: "https://www.linkedin.com/in/hemalatha-m-84b561233/"
};
