// ===========================
// PORTFOLIO DATA - Hemalatha M
// ===========================

const profileData = {
  name: "Hemalatha M",
  role: "Data Analyst",
  intro:
    "I'm passionate about transforming raw data into meaningful insights that drive smarter business decisions. Skilled in SQL, Python, Power BI, Excel, and Tableau.",
  linkedin: "https://www.linkedin.com/in/hemalatha-m-84b561233/",
  resume: "Hemalatha_resume_updated(2).pdf",
  photo: "IMG_20210804_130808.jpg",
};

// ---------------------------
// EXPERIENCE SECTION
// ---------------------------
const experiences = [
  {
    title: "Data Science Intern",
    company: "C5i Technologies",
    duration: "Jul 2024 – Oct 2024",
    description:
      "Worked on Time Series Forecasting of Temperature Trends using AirQualityUCI dataset. Predicted greenhouse temperature for optimizing irrigation and energy costs.",
  },
  {
    title: "Application Developer",
    company: "C5i Technologies",
    duration: "Jun 2024 – Jul 2024",
    description:
      "Developed Flask-based web applications integrating HTML, CSS, and JavaScript. Focused on building interactive dashboards for analytics and visualization.",
  },
];

// ---------------------------
// PROJECTS SECTION
// ---------------------------
const projects = [
  {
    name: "Netflix Data Analysis",
    description:
      "Explored Netflix content trends by genre, release year, and region to identify viewer preferences and content strategy insights.",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    name: "Walmart Sales Forecasting",
    description:
      "Performed time series analysis to forecast sales and improve inventory management efficiency for different stores.",
    tech: ["Python", "StatsModels", "ARIMA"],
  },
  {
    name: "Yulu Bike Sharing EDA",
    description:
      "Analyzed bike rental patterns across seasons and weather conditions using EDA and hypothesis testing.",
    tech: ["Python", "Seaborn", "pandas", "ANOVA"],
  },
  {
    name: "Flask Web App Development",
    description:
      "Created interactive data visualization dashboards using Flask, HTML, CSS, and JavaScript for real-time analytics.",
    tech: ["Flask", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Time Series Forecasting (AirQualityUCI)",
    description:
      "Forecasted temperature trends using univariate models to aid greenhouse optimization in agriculture.",
    tech: ["Python", "Machine Learning", "Time Series"],
  },
];

// ---------------------------
// EDUCATION SECTION
// ---------------------------
const education = [
  {
    degree: "Bachelor of Engineering (Computer Science)",
    university: "Anna University",
    duration: "2019 – 2023",
  },
];

// ---------------------------
// CERTIFICATIONS SECTION
// ---------------------------
const certifications = [
  {
    title: "Scaler – Skill Mastery: SQL",
    link: "https://moonshot.scaler.com/s/sl/fcHG28k-XO",
  },
  {
    title: "Scaler – Python Libraries",
    link: "https://moonshot.scaler.com/s/sl/sEhH-mysYw",
  },
  {
    title: "Scaler – EDA Fundamentals",
    link: "https://moonshot.scaler.com/s/sl/beW6mrNfXR",
  },
  {
    title: "Careerera – Data Science Certificate",
    link: "https://awards.careerera.com/Q0FSMjAyNC1XUzEwMzk5Ny0xMTQwMDU5LzE",
  },
];

// ---------------------------
// EXPORT (for script.js usage)
// ---------------------------
export {
  profileData,
  experiences,
  projects,
  education,
  certifications,
};
