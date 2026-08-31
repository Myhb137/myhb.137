Build a completely new personal portfolio website for **Mohamed Yahia Benaissa**, a Mathematics student and aspiring **Data Scientist / Machine Learning Engineer / Data Analyst**.

The portfolio should feel like a **high-end technical research lab meets modern editorial portfolio**.

Do NOT make it look like a generic developer portfolio, SaaS landing page, AI template, or colorful startup website.

The design should communicate:

**MATHEMATICS → DATA → MACHINE LEARNING → SYSTEMS → REAL PRODUCTS**

The visitor should immediately understand that this person is a mathematically trained builder who can analyze data, build ML models, understand the underlying mathematics, and turn models into usable products.

---

# 1. CORE DESIGN DIRECTION

Create a sophisticated, minimal, technical visual identity.

Design references:

* Linear
* Vercel
* Stripe Press
* modern scientific publications
* high-end architecture portfolios
* technical research labs
* editorial Swiss design

But do NOT copy any existing website.

### Visual language

Use:

* off-white / warm white background
* near-black typography
* subtle gray borders
* one distinctive accent color
* extremely subtle grid systems
* thin dividers
* large typography
* generous whitespace
* monospace labels
* technical metadata
* subtle mathematical / data-inspired visual elements

Avoid:

* gradients everywhere
* glassmorphism
* excessive rounded cards
* floating blobs
* generic AI brain graphics
* stock photography
* huge animated 3D objects
* excessive icons
* rainbow colors
* fake statistics
* fake testimonials
* fake companies
* fake experience

The website should feel **quiet, intelligent, precise and confident**.

---

# 2. TYPOGRAPHY

Use two font families.

### Display font

Use something distinctive and editorial such as:

* Instrument Serif
* Playfair Display
* or another elegant serif

Use it sparingly for large statements and section titles.

### Technical font

Use:

* IBM Plex Mono
* Geist Mono
* JetBrains Mono

for:

* labels
* project numbers
* metadata
* technology tags
* navigation
* small technical information

Body text should use a clean modern sans-serif such as:

* Inter
* Geist

Typography hierarchy must be strong.

---

# 3. NAVIGATION

Create a minimal sticky navigation.

Left:

**MHB / LAB**

Right:

WORK
STACK
ABOUT
CONTACT

Add a small status indicator:

● AVAILABLE FOR OPPORTUNITIES

The navigation should become slightly blurred/translucent while scrolling but remain extremely subtle.

Mobile navigation should be clean and minimal.

---

# 4. HERO SECTION

The hero should be the strongest part of the website.

Do NOT use a traditional:

"Hi, I'm Mohamed"

Instead use something more distinctive.

Main headline:

**I build systems from data.**

Below it:

**Mathematics × Data Science × Machine Learning**

Then a short description:

"Mathematics student building machine learning systems, analytical tools, and digital products — from exploratory analysis and optimization to deployed APIs."

Add two CTA buttons:

**VIEW SELECTED WORK ↘**

**LET'S TALK ↗**

Under the CTA, add a small technical metadata line:

ALGERIA
MATHEMATICS
DATA SCIENCE / ML
2026

---

# 5. HERO VISUAL

Create a subtle interactive mathematical/data visualization on the right side or behind the hero.

It could be:

* coordinate system
* animated regression line
* scattered data points
* subtle graph
* optimization path
* mathematical function
* moving points converging toward an optimum

The visualization must be subtle.

It should feel like an actual mathematical model rather than decorative animation.

Example concept:

A scatter plot gradually develops a regression line.

Small labels:

x₁
x₂
ŷ
loss
gradient

Keep it elegant and monochrome with the single accent color.

On mobile, simplify the visualization rather than removing the hero identity completely.

---

# 6. INTRO / POSITIONING

Create a section immediately after the hero.

Small label:

01 — APPROACH

Large statement:

**I don't start with the model.
I start with the problem.**

Supporting text:

"Good machine learning is rarely about choosing the fanciest algorithm. I focus on understanding the data, defining the right features, evaluating the model honestly, and turning the result into something usable."

Then show a horizontal process:

01 Understand
→
02 Explore
→
03 Engineer
→
04 Model
→
05 Evaluate
→
06 Deploy

Each step should have a tiny technical description when hovered.

---

# 7. SELECTED WORK

Create the main project section.

Section label:

02 — SELECTED WORK

Headline:

**Projects built at the intersection of math, data, and systems.**

Use a large editorial project list rather than generic cards.

Each project should have:

* number
* year
* title
* category
* problem
* what was built
* technologies
* measurable outcome
* GitHub link
* live demo when available

On hover:

* subtle background shift
* project number moves slightly
* arrow animation
* optional miniature visualization

On mobile, convert each project into a clean stacked block.

---

# 8. USE THESE PROJECTS EXACTLY

Create a `projects` data structure and render the project section from it.

Use this exact data:

```js
const projects = [
  {
    n: "01",
    name: "Productivity Prediction",
    tag: "Machine Learning · Regression",
    year: "2026",
    problem:
      "Student productivity is influenced by multiple behavioral and academic factors, making it difficult to estimate productivity from individual signals alone.",
    built:
      "End-to-end ML pipeline trained on 20,000 student records using exploratory analysis, feature selection, model comparison, and XGBoost hyperparameter tuning. Deployed the trained model through a FastAPI prediction API.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "FastAPI",
    ],
    impact:
      "Final XGBoost model achieved R² = 99.25%, with MAE of 1.10 and RMSE of 1.39 on the test set.",
    link: "https://github.com/Myhb137/Productivity-Prediction",
    demo: "https://summit-score-ai.vercel.app/",
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
```

Do NOT invent additional projects.

---

# 9. FEATURE THE PRODUCTIVITY PROJECT

Make Productivity Prediction the featured project.

Give it slightly more visual weight than the others.

Create a small technical visualization showing:

20,000 records
→ feature engineering
→ model comparison
→ XGBoost
→ SHAP
→ FastAPI

Also show:

R²
99.25%

MAE
1.10

RMSE
1.39

Important:
Do not make these look like fake SaaS statistics.

Present them as model evaluation metrics.

The GitHub and Live Demo buttons should work.

---

# 10. PROJECT INTERACTION

When clicking a project, open an elegant project detail panel or route.

Project detail should contain:

01 / PROJECT

Title

Problem

Approach

Model / System

Technology

Results

Links

For ML projects, include:

Dataset
Features
Models tested
Evaluation metrics
Interpretability
Deployment

For UI/UX projects, include:

Research
User flow
Wireframes
Design system
Prototype

Do not fabricate information that isn't provided.

---

# 11. SKILLS / STACK

Section:

03 — STACK

Headline:

**The tools I reach for — picked for the problem, not the resume.**

Use four categories.

```js
const groups = [
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
```

Design these as technical panels rather than colorful skill badges.

Add subtle hover interactions.

---

# 12. MATHEMATICS SECTION

This is important because mathematics differentiates me from generic junior developers.

Create a dedicated section:

04 — MATHEMATICS

Headline:

**Before machine learning, there was mathematics.**

Explain briefly:

"My mathematical background shapes how I approach machine learning: thinking in terms of structure, optimization, probability, and numerical behavior."

Show animated mathematical concepts:

Linear Algebra
Probability
Statistics
Optimization
Numerical Methods
Operations Research

Include subtle equations such as:

f(x) = wx + b

∇J(θ)

arg min θ J(θ)

P(A|B)

But keep them tasteful and readable.

Do not turn this into a math textbook.

---

# 13. ABOUT SECTION

Create a concise personal section.

Headline:

**A mathematician learning to build with data.**

Content:

"Currently studying Mathematics while specializing independently in data science, machine learning, analytics, and AI systems."

Mention:

* Mathematics background
* Data Science
* Machine Learning
* Analytics
* AI systems
* UI/UX
* Frontend development

Emphasize that the combination is intentional:

**Mathematics gives me the foundation.
Data gives me the evidence.
Engineering makes it useful.**

Do not make exaggerated claims.

---

# 14. CURRENT FOCUS

Create a small "NOW" section.

Label:

NOW — 2026

Show:

LEARNING
Advanced Machine Learning

BUILDING
Practical ML systems and data products

EXPLORING
AI systems + automation

LOOKING FOR
Data Scientist · ML Engineer · Data Analyst

Make this section feel like a live research notebook.

---

# 15. CONTACT SECTION

Use this exact information:

Email:
[mohamedyahiabenaissa@gmail.com](mailto:mohamedyahiabenaissa@gmail.com)

GitHub:
https://github.com/myhb137

LinkedIn:
https://www.linkedin.com/in/myhb137/

Section headline:

**Have a problem worth modeling?**

Supporting text:

"I'm open to Data Scientist, ML Engineer, and Analyst roles — full-time, internships, or focused freelance engagements."

Create three elegant contact cards:

EMAIL
[mohamedyahiabenaissa@gmail.com](mailto:mohamedyahiabenaissa@gmail.com)

GITHUB
@myhb137

LINKEDIN
Mohamed Yahia Benaissa

Buttons must actually work.

---

# 16. FOOTER

Minimal footer.

Left:

● MHB / LAB

Middle:

Data · Mathematics · Systems

Right:

© 2026

Add:

Built with React · Tailwind · too much coffee

Keep it understated.

---

# 17. ANIMATIONS

Use Framer Motion where appropriate.

Animations should feel **technical and intentional**, not flashy.

Use:

* fade/slide entrance
* staggered project rows
* subtle number transitions
* hover translations
* mathematical visualization animation
* smooth anchor scrolling
* section reveal

Avoid:

* bouncing elements
* excessive parallax
* huge transitions
* slow page animations

Performance matters.

Respect:

`prefers-reduced-motion`

---

# 18. RESPONSIVE DESIGN

The site must be excellent on:

* desktop
* laptop
* tablet
* mobile

Desktop should feel editorial and spacious.

Mobile should feel intentionally designed rather than compressed desktop UI.

Project information should stack naturally.

Navigation should become a clean mobile menu.

Mathematical visualizations should simplify on small screens.

---

# 19. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* visible focus states
* proper contrast
* accessible buttons
* meaningful aria labels
* reduced motion support
* external links with appropriate rel attributes

---

# 20. PERFORMANCE

Keep the site fast.

Avoid unnecessary libraries.

Lazy-load heavy visual components if necessary.

Do not add unnecessary image assets.

Use CSS for most decorative visuals.

Do not use huge background images.

---

# 21. CODE ARCHITECTURE

Use clean React components.

Suggested structure:

```text
src/
  components/
    Navigation.tsx
    Hero.tsx
    Approach.tsx
    Projects.tsx
    Skills.tsx
    Mathematics.tsx
    About.tsx
    Now.tsx
    Contact.tsx
    Footer.tsx

  data/
    projects.ts
    skills.ts

  pages/
    Index.tsx
```

Keep project and skills data separate from presentation where possible.

Use reusable components.

Avoid giant components.

---

# 22. COLOR SYSTEM

Primary:

Near-black:
#111111

Background:

Warm white:
#F7F7F4

Muted:

#777777

Borders:

#DCDCD7

Accent:

Choose ONE sophisticated signal color, preferably:

electric green / acid green

Use it sparingly for:

* status indicators
* important metrics
* hover states
* active navigation
* mathematical visualization
* selected words

Do NOT turn the entire website green.

---

# 23. MICRO DETAILS

Add tiny technical details throughout the site.

Examples:

`01 / 07`

`2026`

`SYSTEM STATUS: ONLINE`

`MODEL / XGBOOST`

`R² = 0.9925`

`INPUT → MODEL → OUTPUT`

`LAT: 36.7°`

But don't overdo them.

The goal is to make the website feel like an engineer's personal laboratory.

---

# 24. IMPORTANT CONTENT RULES

Do not invent:

* work experience
* companies
* clients
* awards
* certifications
* testimonials
* users
* revenue
* fake metrics

Only use information provided in this prompt.

Where information is missing, keep the design clean rather than inventing content.

---

# 25. FINAL EXPERIENCE

The final website should feel like visiting the portfolio of someone who could realistically become:

**Data Scientist → ML Engineer → AI Systems Builder**

It should communicate:

"I understand the mathematics."

"I can work with data."

"I can build models."

"I can evaluate them."

"I can deploy them."

"I can also build the interface around them."

The portfolio should NOT scream "LOOK AT ALL MY TECHNOLOGIES."

It should quietly communicate competence.

The overall feeling should be:

**precise · intelligent · technical · modern · ambitious · understated**

Build the entire website fully functional, polished, responsive, and production-ready.
