export interface SkillGroup {
  title: string;
  items: string[];
}

export const groups: SkillGroup[] = [
  {
    title: "Data Science & ML",
    items: [
      "Regression & Forecasting",
      "Classification / Clustering",
      "Feature Engineering",
      "Model Evaluation",
      "XGBoost",
    ],
  },
  {
    title: "Math & Optimization",
    items: [
      "Linear Algebra",
      "Probability & Statistics",
      "Convex Optimization",
      "Linear Programming",
      "Operations Research",
      "Numerical Methods",
    ],
  },
  {
    title: "Tooling",
    items: [
      "Python · Pandas · NumPy",
      "Scikit-learn",
      "FastAPI",
      "Tableau",
      "Git",
    ],
  },
  {
    title: "Web & Product",
    items: [
      "React · Tailwind CSS",
      "Firebase",
      "Figma · UI/UX",
      "Framer Motion",
    ],
  },
];
