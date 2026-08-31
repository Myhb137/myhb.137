export interface Project {
  n: string;
  name: string;
  tag: string;
  year: string;
  problem: string;
  built: string;
  tech: string[];
  impact: string;
  link: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    n: "01",
    name: "Productivity Prediction",
    tag: "Machine Learning · Regression",
    year: "2026",
    problem:
      "Student productivity is influenced by multiple behavioral and academic factors, making it difficult to estimate productivity from individual signals alone.",
    built:
      "End-to-end ML pipeline trained on 20,000 student records using exploratory analysis, feature selection, model comparison, and XGBoost hyperparameter tuning. Deployed the trained model through a FastAPI prediction API.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP", "FastAPI"],
    impact:
      "Final XGBoost model achieved R² = 99.25%, with MAE of 1.10 and RMSE of 1.39 on the test set.",
    link: "https://github.com/Myhb137/Productivity-Prediction",
    demo: "https://summit-score-ai.vercel.app/",
    featured: true,
  },
  {
    n: "02",
    name: "Wejha — AI Discovery Assistant",
    tag: "AI System · Full-Stack",
    year: "2026",
    problem:
      "Users struggle to plan outings due to fragmented information across maps, reviews, and blogs.",
    built:
      "AI-powered assistant that recommends places and generates itineraries using structured data and LLM-based conversational interface.",
    tech: ["React", "TypeScript", "Tailwind", "Gemini"],
    impact:
      "Built full product loop: data layer, AI reasoning system, and conversational UX.",
    link: "https://github.com/Myhb137/Dz-Wejha",
  },
  {
    n: "03",
    name: "Bouraq — Travel Agency Dashboard",
    tag: "Full-Stack · Admin System",
    year: "2026",
    problem:
      "Travel agencies lacked a structured system to manage and publish offers efficiently.",
    built:
      "Admin dashboard for managing travel offers with a focus on usability and operational efficiency.",
    tech: ["React", "Dashboard Design", "UI/UX"],
    impact:
      "Improved offer management workflow and reduced manual operations complexity.",
    link: "https://github.com/Myhb137/Yusr-Dashboard",
  },
  {
    n: "04",
    name: "Tourism ML Forecasting",
    tag: "Machine Learning · Forecasting",
    year: "2025",
    problem:
      "Tourism operator decisions were based on intuition, leading to inefficient marketing spend and unstable revenue planning.",
    built:
      "End-to-end ML pipeline forecasting revenue, bookings, and marketing efficiency using engineered temporal and campaign features. Applied gradient boosting models and SHAP for interpretability.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP"],
    impact:
      "Reduced prediction error (MAPE -12%) and identified inefficient ad channels responsible for ~30% of spend.",
    link: "https://github.com/Myhb137/Multi-Service-Travel-Marketplace-Analytics-System",
  },
  {
    n: "05",
    name: "Gradient Descent Engine",
    tag: "Optimization · Mathematics",
    year: "2025",
    problem:
      "Understanding optimization behavior in machine learning from first principles.",
    built:
      "Implemented gradient descent from scratch to study convergence, learning rates, and cost minimization behavior.",
    tech: ["Python", "NumPy", "Mathematical Optimization"],
    impact:
      "Strengthened understanding of optimization theory and ML training dynamics.",
    link: "https://github.com/Myhb137/Gradiant-decent",
  },
  {
    n: "06",
    name: "Analytics Dashboards",
    tag: "Data Analysis · Automation",
    year: "2025",
    problem:
      "Business teams relied on slow, fragmented spreadsheet reporting.",
    built:
      "Automated data pipelines using Pandas and SQL with KPI computation and dashboard visualization.",
    tech: ["Python", "Pandas", "SQL", "Plotly", "Streamlit"],
    impact:
      "Reduced reporting time from hours to minutes through automation.",
    link: "https://github.com/Myhb137/automation-EDA",
  },
  {
    n: "07",
    name: "Trips Fi Bladi",
    tag: "UI/UX Design System",
    year: "2024",
    problem:
      "Need for a modern, local-first tourism identity avoiding generic travel platform design patterns.",
    built:
      "Complete UI/UX system including user flows, wireframes, and high-fidelity prototypes in Figma.",
    tech: ["Figma", "UX Research", "Design Systems"],
    impact:
      "Delivered production-ready design system used for MVP development.",
    link: "https://github.com/Myhb137/Algeria-VR-tour",
  },
];
