# [DS Roadmap](https://ds-roadmap-two.vercel.app/): The git statRoadmap to Becoming a Data Scientist

*Assuming zero prior knowledge, and no constraint on time or money.*

This roadmap is built in layers: **foundations → core skills → specialization → mastery → frontier contribution**. Each layer builds strict prerequisites for the next. The goal isn't just "employable data scientist" — it's genuine world-class depth: the kind where you could derive the methods from scratch, not just call `.fit()`.

---

## Phase 0: Mindset & Meta-Skills (ongoing, start immediately)

- **Learn how to learn.** Study spaced repetition (Anki), deliberate practice principles (Anders Ericsson), and active recall. You'll use these tools for everything below.
- **Learn to read primary literature.** Data science is downstream of math, stats, and CS research. You need to be comfortable reading papers, not just blog posts, by the end of this roadmap.
- **Learn to write.** The best data scientists communicate findings clearly. Start a habit of writing up every project as if for a technical audience.
- **Build a "build in public" habit.** Document everything — GitHub, a blog, or notebooks. This creates a public trail of your growth and forces clarity of thought.

---

## Phase 1: Mathematical Foundations (6–12 months)

You cannot shortcut this. Every advanced technique is math wearing a costume.

### 1.1 Algebra & Precalculus (if truly starting at zero)
- Functions, graphs, exponents/logs, trigonometry basics.

### 1.2 Calculus
- Differential and integral calculus (single variable, then multivariable).
- Partial derivatives, gradients, chain rule (critical for backpropagation later).
- Resources: MIT OCW 18.01/18.02, *Calculus* by James Stewart.

### 1.3 Linear Algebra
- Vectors, matrices, eigenvalues/eigenvectors, SVD, matrix decompositions.
- This is arguably THE most important math for data science — it underlies PCA, embeddings, neural nets, recommender systems.
- Resources: MIT 18.06 (Gilbert Strang), 3Blue1Brown's *Essence of Linear Algebra*, Brilliant.org for practice.

### 1.4 Probability & Statistics
- Probability theory: distributions, Bayes' theorem, random variables, expectation/variance.
- Statistical inference: hypothesis testing, confidence intervals, p-values, power analysis.
- Bayesian statistics (not just frequentist) — deeply.
- Resources: *Introduction to Probability* (Blitzstein & Hwang), Harvard Stat 110 (free on YouTube), *All of Statistics* (Wasserman).

### 1.5 Optimization
- Convex optimization, gradient descent and variants, Lagrange multipliers, constrained optimization.
- Resource: *Convex Optimization* (Boyd & Vandenberghe, free PDF).

### 1.6 Discrete Math & Algorithms
- Combinatorics, graph theory basics, Big-O complexity.
- Needed for algorithmic thinking and efficient code.

---

## Phase 2: Programming & Computer Science Foundations (parallel with Phase 1, 6–12 months)

- **Python** — the lingua franca of data science. Master it deeply: data structures, OOP, writing clean/testable code.
- **SQL** — non-negotiable. Real data lives in databases. Learn joins, window functions, query optimization.
- **Data structures & algorithms** — arrays, trees, graphs, hash maps, sorting/searching, complexity analysis. (CS50, or *Cracking the Coding Interview* for practice.)
- **Version control (Git/GitHub)** — for reproducibility and collaboration.
- **Command line & Linux basics.**
- **Software engineering practices** — testing, debugging, code review, packaging code properly (not just notebooks).
- **A second language eventually** — R (for stats-heavy work) and/or Scala/Java (useful in big data ecosystems).

---

## Phase 3: Core Data Science Skills (12–18 months)

### 3.1 Data Wrangling & Exploratory Data Analysis (EDA)
- Pandas, NumPy mastery.
- Handling missing data, outliers, data cleaning pipelines.
- Data visualization: Matplotlib, Seaborn, Plotly — and the *theory* of visualization (Edward Tufte's work on visual communication).

### 3.2 Classical Statistics & Experimentation
- A/B testing design, causal inference basics, experimental design.
- Regression analysis (linear, logistic) — deeply, not just as a library call.
- Resource: *Causal Inference: The Mixtape* (Cunningham), *The Book of Why* (Judea Pearl).

### 3.3 Machine Learning Fundamentals
- Supervised learning: linear/logistic regression, decision trees, random forests, gradient boosting (XGBoost/LightGBM/CatBoost), SVMs, k-NN.
- Unsupervised learning: clustering (k-means, hierarchical, DBSCAN), dimensionality reduction (PCA, t-SNE, UMAP).
- Model evaluation: cross-validation, bias-variance tradeoff, ROC/AUC, precision-recall, calibration.
- Feature engineering and selection.
- Resources: *An Introduction to Statistical Learning* (ISLR, free), then *The Elements of Statistical Learning* (ESL, the harder sequel), Andrew Ng's Machine Learning Specialization.

### 3.4 Build the "from scratch" habit
- Implement linear regression, logistic regression, a decision tree, and k-means **from scratch in NumPy** — no sklearn. This is where real understanding is forged.

---

## Phase 4: Deep Learning (12–18 months)

- Neural network fundamentals: forward/backprop, activation functions, loss functions, optimizers (SGD, Adam).
- CNNs for vision, RNNs/LSTMs for sequences, Transformers for language and beyond.
- Frameworks: PyTorch (preferred for research/flexibility), TensorFlow (for production familiarity).
- Training dynamics: regularization, batch norm, learning rate schedules, mixed precision.
- Resources: *Deep Learning* (Goodfellow, Bengio, Courville — free online), fast.ai courses, Andrej Karpathy's "Neural Networks: Zero to Hero" (build GPT from scratch).
- **Implement a neural net from scratch (no autograd), then implement backprop by hand.**

---

## Phase 5: Specialized Domains (choose depth in several, 12–24 months)

You now branch based on interest, but a "best ever" data scientist has working fluency in most of these:

- **NLP** — tokenization, embeddings, transformers, LLM fine-tuning, prompt engineering, RAG systems.
- **Computer Vision** — object detection, segmentation, generative vision models (diffusion, GANs).
- **Time Series & Forecasting** — ARIMA, state-space models, Prophet, deep learning approaches (temporal transformers).
- **Recommender Systems** — collaborative filtering, matrix factorization, embedding-based retrieval.
- **Causal Inference & Econometrics** — instrumental variables, difference-in-differences, synthetic control, uplift modeling.
- **Reinforcement Learning** — MDPs, Q-learning, policy gradients, RLHF.
- **MLOps & Production ML** — model deployment, monitoring, CI/CD for ML, feature stores, data/model versioning, scaling (Spark, distributed training).
- **Big Data Engineering** — Spark, Hadoop ecosystem, streaming (Kafka), cloud platforms (AWS/GCP/Azure data & ML services).
- **Bayesian Modeling & Probabilistic Programming** — PyMC, Stan.

---

## Phase 6: Domain Expertise (ongoing)

The best data scientists aren't just technicians — they deeply understand a domain (finance, healthcare, biology, climate, etc.). Pick 1–2 domains and go deep enough to read domain research papers fluently. Data science divorced from domain knowledge produces technically correct but useless results.

---

## Phase 7: Research-Level Mastery (2+ years)

- Read papers continuously — NeurIPS, ICML, ICLR, JMLR, ACL proceedings.
- Reproduce results from papers yourself.
- Contribute to open-source ML/DS libraries (sklearn, PyTorch, Hugging Face).
- Publish your own research or well-documented novel analyses/methods.
- Attend/present at conferences.
- Consider a PhD or equivalent independent research depth — not required, but this is where true frontier mastery tends to live.

---

## Phase 8: The "Best Ever" Differentiators

Technical skill alone doesn't make you the *best ever*. These separate elite practitioners from merely excellent ones:

1. **Taste** — knowing which problems are worth solving, and which sophisticated technique is overkill for a simple problem.
2. **Communication** — translating complex analysis into decisions non-technical stakeholders act on.
3. **Skepticism** — rigorously interrogating your own results before anyone else does (multiple testing, data leakage, confounders, overfitting to noise).
4. **Breadth + depth combo** — T-shaped or even "comb-shaped" skill profile: deep in several areas, broad across all.
5. **Building things end-to-end** — not just modeling, but framing the business/scientific question, gathering data, building the system, deploying it, and measuring real-world impact.
6. **Teaching** — the clearest sign of mastery is being able to teach it. Mentor others, write, speak.
7. **Ethics & responsibility** — understanding bias, fairness, privacy, and the societal impact of your models.

---

## Suggested Timeline Summary (rough, non-linear in practice)

| Phase | Focus | Time |
|---|---|---|
| 0 | Meta-skills | Ongoing |
| 1 | Math foundations | 6–12 mo |
| 2 | Programming/CS | 6–12 mo (parallel) |
| 3 | Core DS/ML | 12–18 mo |
| 4 | Deep learning | 12–18 mo |
| 5 | Specializations | 12–24 mo |
| 6 | Domain expertise | Ongoing |
| 7 | Research mastery | 2+ years |
| 8 | Differentiators | Lifetime |

Realistically, this is a **5–10 year journey** even with infinite time and full dedication, because true mastery requires not just consuming information but accumulating thousands of hours of hands-on project experience, failure, and iteration. The math and theory can be learned faster; the *judgment* takes the longest.

---

## A Note on Projects (the part that actually builds skill)

Reading and courses only get you so far. At every phase, work on real projects — Kaggle competitions, open datasets, your own data collection, contributing to research replications. Aim for a portfolio that shows range: a from-scratch ML implementation, a deployed end-to-end ML product, a causal inference study, a deep learning project, and a piece of original research or analysis that taught you something nobody else knew before.
