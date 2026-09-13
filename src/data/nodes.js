// Node shape:
// {
//   id, title, branch, phase, description,
//   resources: [{ label, url }],
//   dependsOn: [nodeId, ...],
//   quiz: { passingScore, questions: [{ id, prompt, options, correctIndex }] }
// }
//
// `branch` drives layout/coloring in the tree. `phase` is kept for reference
// back to the source roadmap (0-8) but isn't required by the graph logic.
//

// question banks per topic. passingScore is fraction correct required (0-1).
const TAGS = {
  article: "article",
  book: "book",
  course: "course",
}

export const nodes = [
  // ---------- Phase 0: Meta-skills (no prerequisites, always available) ----------
  {
    id: "meta-learning-skills",
    title: "Learning How to Learn",
    branch: "meta",
    phase: 0,
    description:
      "Spaced repetition (Anki), deliberate practice, active recall: the tools you'll use for everything that follows.",
    resources: [
      { label: "Anki", url: "https://apps.ankiweb.net/", tag: TAGS.article },
      {
        label:
          "Applying the Science of Learning to the University and Beyond: Teaching for Long-Term Retention and Transfer",
        url: "https://www.researchgate.net/publication/44833082_Applying_the_Science_of_Learning_to_the_University_and_Beyond_Teaching_for_Long-Term_Retention_and_Transfer",
        tag: TAGS.article,
      },
      {
        label:
          "The Testing Effect: Illustrating a Fundamental Concept and Changing Study Strategies",
        url: "https://www.researchgate.net/publication/274434159_The_Testing_Effect_Illustrating_a_Fundamental_Concept_and_Changing_Study_Strategies",
        tag: TAGS.article,
      },
    ],
    dependsOn: [],
    nodeType: "info",
    quiz: {
      passingScore: 0.8,
      questions: [],
    },
  },
  {
    id: "reading-literature",
    title: "Reading Primary Literature",
    branch: "meta",
    phase: 0,
    description:
      "Get comfortable reading papers, not just blog posts: a skill you'll need by the time you reach research-level work.",
    resources: [
      {
        label: "How to Read a Paper by S. Keshav",
        url: "https://www.lib.sfu.ca/system/files/32376/paper-reading.pdf",
        tag: TAGS.article,
      },
      {
        label: "Ten simple rules for reading a scientific paper",
        url: "https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1008032",
        tag: TAGS.article,
      },
      {
        label: "How to seriously read a scientific paper",
        url: "https://news.ycombinator.com/item?id=24986727",
        tag: TAGS.article,
      },
      { label: "Zotero", url: "https://www.zotero.org/", tag: TAGS.article },
      {
        label: "Connected Papers",
        url: "https://www.connectedpapers.com/",
        tag: TAGS.article,
      },
      {
        label: "Semantic Scholars",
        url: "https://www.semanticscholar.org/",
        tag: TAGS.article,
      },
    ],
    dependsOn: [],
    nodeType: "info",
    quiz: {
      passingScore: 0.8,
      questions: [],
    },
  },
  {
    id: "technical-writing",
    title: "Technical Writing",
    branch: "meta",
    phase: 0,
    description:
      "Write up every project as if for a technical audience. Communication is a core deliverable, not an afterthought.",
    resources: [
      {
        label:
          "MIT's Introduction to Technical Communication: Explorations in Scientific and Technical Writing",
        url: "https://opencw.aprende.org/courses/writing-and-humanistic-studies/21w-732-5-introduction-to-technical-communication-explorations-in-scientific-and-technical-writing-fall-2006/index.htm",
        tag: TAGS.course,
      },
      {
        label: "Google's Technical Writing",
        url: "https://developers.google.com/tech-writing",
        tag: TAGS.course,
      },
    ],
    dependsOn: [],
    nodeType: "info",
    quiz: {
      passingScore: 0.8,
      questions: [],
    },
  },
  {
    id: "build-in-public",
    title: "Build in Public",
    branch: "meta",
    phase: 0,
    description:
      "Document everything: GitHub, a blog, notebooks. Creates a public trail of growth and forces clarity of thought.",
    resources: [
      {
        label: "GitHub Pages",
        url: "https://docs.github.com/en/pages",
        tag: TAGS.article,
      },
      {
        label: "Kaggle Notebook",
        url: "https://www.kaggle.com/code",
        tag: TAGS.article,
      },
      {
        label: "Hashnode",
        url: "https://hashnode.com/",
        tag: TAGS.article,
      },
      {
        label: "Medium / Towards Data Science",
        url: "https://towardsdatascience.medium.com/",
        tag: TAGS.article,
      },
    ],
    dependsOn: [],
    nodeType: "info",
    quiz: {
      passingScore: 0.8,
      questions: [],
    },
  },

  // ---------- Phase 1: Math foundations ----------
  {
    id: "algebra-precalc",
    title: "Algebra & Precalculus",
    branch: "math",
    phase: 1,
    description: "Functions, graphs, exponents/logs, trigonometry basics.",
    resources: [
      {
        label: "Khan Academy: Precalculus",
        url: "https://www.khanacademy.org/math/precalculus",
        tag: TAGS.course,
      },
      {
        label: "Khan Academy: Algebra 1",
        url: "https://www.khanacademy.org/math/algebra-1-essentials",
        tag: TAGS.course,
      },
      {
        label: "Khan Academy: Algebra 2",
        url: "https://www.khanacademy.org/math/algebra-2-essentials",
        tag: TAGS.course,
      },
    ],
    dependsOn: [],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "log_b(x) is the inverse function of:",
          options: ["b^x", "x^b", "b*x", "x/b"],
          correctIndex: 0,
        },
      ],
    },
  },
  {
    id: "calculus",
    title: "Calculus",
    branch: "math",
    phase: 1,
    description:
      "Differential and integral calculus, partial derivatives, gradients, chain rule: critical for backpropagation later.",
    resources: [
      {
        label: "MIT OCW 18.01",
        url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
        tag: TAGS.course,
      },
      {
        label: "MIT OCW 18.02",
        url: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
        tag: TAGS.course,
      },
    ],
    dependsOn: ["algebra-precalc"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "The chain rule is used to differentiate:",
          options: [
            "A sum of two functions",
            "A composition of functions, f(g(x))",
            "A constant",
            "An integral",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    branch: "math",
    phase: 1,
    description:
      "Vectors, matrices, eigenvalues/eigenvectors, SVD, matrix decompositions: underlies PCA, embeddings, neural nets, recommenders.",
    resources: [
      {
        label: "MIT 18.06 (Gilbert Strang)",
        url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
        tag: TAGS.course,
      },
      {
        label: "3Blue1Brown: Essence of Linear Algebra",
        url: "https://www.3blue1brown.com/topics/linear-algebra",
        tag: TAGS.course,
      },
    ],
    dependsOn: ["calculus"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "An eigenvector of a matrix A is a vector v such that:",
          options: [
            "Av = 0",
            "Av = λv for some scalar λ",
            "A + v = v",
            "v is orthogonal to every row of A",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "probability-statistics",
    title: "Probability & Statistics",
    branch: "math",
    phase: 1,
    description:
      "Distributions, Bayes' theorem, hypothesis testing, confidence intervals, p-values, power analysis, and Bayesian statistics.",
    resources: [
      {
        label: "Introduction to Probability (Blitzstein & Hwang)",
        url: "",
        tag: TAGS.book,
      },
      {
        label: "Harvard Stat 110",
        url: "https://projects.iq.harvard.edu/stat110",
        tag: TAGS.book,
      },
      { label: "All of Statistics (Wasserman)", url: "", tag: "book" },
    ],
    dependsOn: ["algebra-precalc", "calculus"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "A p-value of 0.03 means:",
          options: [
            "There is a 3% chance the null hypothesis is true",
            "There is a 3% chance of observing data this extreme (or more) if the null hypothesis is true",
            "The effect size is 0.03",
            "The result is definitely significant",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "optimization",
    title: "Optimization",
    branch: "math",
    phase: 1,
    description:
      "Convex optimization, gradient descent and variants, Lagrange multipliers, constrained optimization.",
    resources: [
      {
        label: "Convex Optimization (Boyd & Vandenberghe, free PDF)",
        url: "https://web.stanford.edu/~boyd/cvxbook/",
        tag: TAGS.book,
      },
    ],
    dependsOn: ["calculus", "linear-algebra"],
    quiz: {
      passingScore: 0.8,
    },
  },
  {
    id: "discrete-math-algorithms",
    title: "Discrete Math & Algorithms",
    branch: "math",
    phase: 1,
    description:
      "Combinatorics, graph theory basics, Big-O complexity: needed for algorithmic thinking and efficient code.",
    resources: [],
    dependsOn: ["algebra-precalc"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "An algorithm with O(n log n) complexity, compared to O(n^2), is generally:",
          options: [
            "Slower for large n",
            "Faster for large n",
            "The same speed always",
            "Undefined",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ---------- Phase 2: Programming & CS foundations ----------
  {
    id: "python-mastery",
    title: "Python (Deep Mastery)",
    branch: "programming",
    phase: 2,
    description:
      "Data structures, OOP, writing clean/testable code: the lingua franca of data science.",
    resources: [],
    dependsOn: [],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Which is mutable in Python?",
          options: ["tuple", "str", "list", "frozenset"],
          correctIndex: 2,
        },
      ],
    },
  },
  {
    id: "sql",
    title: "SQL",
    branch: "programming",
    phase: 2,
    description:
      "Joins, window functions, query optimization. Non-negotiable: real data lives in databases.",
    resources: [],
    dependsOn: [],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Which JOIN returns all rows from the left table, matched rows from the right, and NULLs where there's no match?",
          options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "RIGHT JOIN"],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    branch: "programming",
    phase: 2,
    description:
      "Arrays, trees, graphs, hash maps, sorting/searching, complexity analysis.",
    resources: [
      { label: "CS50", url: "https://cs50.harvard.edu/", tag: "Course" },
    ],
    dependsOn: ["python-mastery", "discrete-math-algorithms"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Average-case lookup time in a hash map is:",
          options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
          correctIndex: 0,
        },
      ],
    },
  },
  {
    id: "git-version-control",
    title: "Git & Version Control",
    branch: "programming",
    phase: 2,
    description: "For reproducibility and collaboration.",
    resources: [],
    dependsOn: [],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "`git rebase` differs from `git merge` mainly in that it:",
          options: [
            "Deletes commit history",
            "Rewrites commit history onto a new base rather than creating a merge commit",
            "Only works on remote branches",
            "Is identical to git merge",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "command-line-linux",
    title: "Command Line & Linux Basics",
    branch: "programming",
    phase: 2,
    description: "Comfort in a shell environment.",
    resources: [],
    dependsOn: [],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Which command shows running processes in Linux?",
          options: ["ls", "ps", "cd", "mkdir"],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "software-engineering-practices",
    title: "Software Engineering Practices",
    branch: "programming",
    phase: 2,
    description:
      "Testing, debugging, code review, packaging code properly: not just notebooks.",
    resources: [],
    dependsOn: ["python-mastery", "data-structures-algorithms"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "A unit test primarily verifies:",
          options: [
            "The whole application works end-to-end",
            "A small, isolated piece of code behaves as expected",
            "The UI renders correctly",
            "The server has enough memory",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "second-language",
    title: "A Second Language (R / Scala / Java)",
    branch: "programming",
    phase: 2,
    description: "R for stats-heavy work, Scala/Java for big data ecosystems.",
    resources: [],
    dependsOn: ["python-mastery"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "R is especially well-suited for:",
          options: [
            "Mobile app development",
            "Statistical computing and graphics",
            "Low-level systems programming",
            "Game engines",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ---------- Phase 3: Core data science skills ----------
  {
    id: "data-wrangling-eda",
    title: "Data Wrangling & EDA",
    branch: "core-ds",
    phase: 3,
    description:
      "Pandas/NumPy mastery, handling missing data and outliers, cleaning pipelines, visualization (Matplotlib/Seaborn/Plotly), Tufte's visualization theory.",
    resources: [],
    dependsOn: ["python-mastery", "sql"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "In Pandas, which method fills missing values?",
          options: ["dropna()", "fillna()", "isna()", "melt()"],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "classical-stats-experimentation",
    title: "Classical Statistics & Experimentation",
    branch: "core-ds",
    phase: 3,
    description:
      "A/B testing design, causal inference basics, experimental design, regression analysis (linear, logistic) done deeply.",
    resources: [
      { label: "Causal Inference: The Mixtape", url: "", tag: "book" },
      { label: "The Book of Why (Judea Pearl)", url: "", tag: "book" },
    ],
    dependsOn: ["probability-statistics"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "In an A/B test, randomization primarily exists to:",
          options: [
            "Make the test run faster",
            "Balance confounding variables between groups",
            "Guarantee statistical significance",
            "Reduce the sample size needed",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "ml-fundamentals",
    title: "Machine Learning Fundamentals",
    branch: "core-ds",
    phase: 3,
    description:
      "Supervised & unsupervised learning, model evaluation (cross-validation, bias-variance, ROC/AUC, precision-recall), feature engineering.",
    resources: [
      {
        label: "An Introduction to Statistical Learning (ISLR, free)",
        url: "https://www.statlearning.com/",
        tag: "book",
      },
      {
        label: "The Elements of Statistical Learning (ESL)",
        url: "https://hastie.su.domains/ElemStatLearn/",
        tag: "book",
      },
      { label: "Andrew Ng's ML Specialization", url: "", tag: "Course" },
    ],
    dependsOn: [
      "data-wrangling-eda",
      "classical-stats-experimentation",
      "linear-algebra",
      "optimization",
    ],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "High variance / low bias models tend to:",
          options: [
            "Underfit the training data",
            "Overfit the training data",
            "Always generalize better",
            "Ignore the training data entirely",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "from-scratch-ml",
    title: "ML From Scratch (No sklearn)",
    branch: "core-ds",
    phase: 3,
    description:
      "Implement linear regression, logistic regression, a decision tree, and k-means from scratch in NumPy: this is where real understanding is forged.",
    resources: [],
    dependsOn: ["ml-fundamentals", "linear-algebra"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Implementing gradient descent for linear regression from scratch primarily tests your understanding of:",
          options: [
            "API documentation",
            "The underlying loss function and its derivative",
            "Cloud deployment",
            "SQL joins",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ---------- Phase 4: Deep learning ----------
  {
    id: "neural-net-fundamentals",
    title: "Neural Network Fundamentals",
    branch: "deep-learning",
    phase: 4,
    description:
      "Forward/backprop, activation functions, loss functions, optimizers (SGD, Adam).",
    resources: [
      {
        label: "Deep Learning (Goodfellow, Bengio, Courville)",
        url: "https://www.deeplearningbook.org/",
        tag: "book",
      },
    ],
    dependsOn: [
      "ml-fundamentals",
      "calculus",
      "linear-algebra",
      "optimization",
    ],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Backpropagation computes gradients using:",
          options: [
            "Random search",
            "The chain rule applied layer by layer",
            "Brute-force enumeration",
            "Only the final layer's error",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "cnn-rnn-transformers",
    title: "CNNs, RNNs/LSTMs, Transformers",
    branch: "deep-learning",
    phase: 4,
    description:
      "CNNs for vision, RNNs/LSTMs for sequences, Transformers for language and beyond.",
    resources: [
      {
        label: "Andrej Karpathy: Neural Networks Zero to Hero",
        url: "",
        tag: "book",
      },
    ],
    dependsOn: ["neural-net-fundamentals"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "The core mechanism that lets Transformers relate distant tokens to each other is:",
          options: [
            "Convolution",
            "Self-attention",
            "Max pooling",
            "Recurrence",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "dl-frameworks",
    title: "Deep Learning Frameworks",
    branch: "deep-learning",
    phase: 4,
    description:
      "PyTorch (preferred for research/flexibility), TensorFlow (for production familiarity).",
    resources: [
      { label: "fast.ai", url: "https://www.fast.ai/", tag: "Article" },
    ],
    dependsOn: ["neural-net-fundamentals"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "In PyTorch, autograd is used to:",
          options: [
            "Automatically clean datasets",
            "Automatically compute gradients via a computation graph",
            "Automatically deploy models",
            "Automatically tune hyperparameters",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "training-dynamics",
    title: "Training Dynamics",
    branch: "deep-learning",
    phase: 4,
    description:
      "Regularization, batch norm, learning rate schedules, mixed precision.",
    resources: [],
    dependsOn: ["neural-net-fundamentals"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Dropout is a regularization technique that works by:",
          options: [
            "Removing outlier data points",
            "Randomly zeroing out activations during training",
            "Increasing the learning rate",
            "Adding more layers",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "nn-from-scratch",
    title: "Neural Net From Scratch (No Autograd)",
    branch: "deep-learning",
    phase: 4,
    description:
      "Implement a neural net from scratch, then implement backprop by hand.",
    resources: [],
    dependsOn: ["neural-net-fundamentals", "from-scratch-ml"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Writing backprop by hand (no autograd) is valuable mainly because it:",
          options: [
            "Runs faster than autograd in production",
            "Forces a precise understanding of how gradients flow through the network",
            "Is required by all ML libraries",
            "Removes the need for a loss function",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ---------- Phase 5: Specializations ----------
  {
    id: "nlp",
    title: "NLP",
    branch: "specialization",
    phase: 5,
    description:
      "Tokenization, embeddings, transformers, LLM fine-tuning, prompt engineering, RAG systems.",
    resources: [],
    dependsOn: ["cnn-rnn-transformers", "dl-frameworks"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "RAG (retrieval-augmented generation) primarily improves an LLM's responses by:",
          options: [
            "Retraining the whole model per query",
            "Retrieving relevant external context and feeding it into the prompt",
            "Increasing the model's temperature",
            "Removing the tokenizer",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    branch: "specialization",
    phase: 5,
    description:
      "Object detection, segmentation, generative vision models (diffusion, GANs).",
    resources: [],
    dependsOn: ["cnn-rnn-transformers", "dl-frameworks"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Semantic segmentation differs from object detection in that it:",
          options: [
            "Only draws bounding boxes",
            "Classifies every pixel in the image",
            "Only works on grayscale images",
            "Requires no training data",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "time-series",
    title: "Time Series & Forecasting",
    branch: "specialization",
    phase: 5,
    description:
      "ARIMA, state-space models, Prophet, deep learning approaches (temporal transformers).",
    resources: [],
    dependsOn: ["ml-fundamentals"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Stationarity in a time series means:",
          options: [
            "The series never changes value",
            "Statistical properties like mean and variance are constant over time",
            "The series has a strong trend",
            "The series has no noise",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "recommender-systems",
    title: "Recommender Systems",
    branch: "specialization",
    phase: 5,
    description:
      "Collaborative filtering, matrix factorization, embedding-based retrieval.",
    resources: [],
    dependsOn: ["ml-fundamentals"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Collaborative filtering makes recommendations based primarily on:",
          options: [
            "Item metadata only",
            "Patterns of interaction across many users/items",
            "Random sampling",
            "The item's price",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "causal-inference-econometrics",
    title: "Causal Inference & Econometrics",
    branch: "specialization",
    phase: 5,
    description:
      "Instrumental variables, difference-in-differences, synthetic control, uplift modeling.",
    resources: [],
    dependsOn: ["classical-stats-experimentation"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Difference-in-differences estimates a causal effect by comparing:",
          options: [
            "Two random samples at one point in time",
            "Changes over time in a treatment group vs. a control group",
            "Only the treatment group before and after",
            "Correlation coefficients",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "reinforcement-learning",
    title: "Reinforcement Learning",
    branch: "specialization",
    phase: 5,
    description: "MDPs, Q-learning, policy gradients, RLHF.",
    resources: [],
    dependsOn: ["neural-net-fundamentals", "optimization"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "In an MDP, the policy defines:",
          options: [
            "The reward function",
            "A mapping from states to actions",
            "The transition probabilities",
            "The discount factor",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "mlops-production",
    title: "MLOps & Production ML",
    branch: "specialization",
    phase: 5,
    description:
      "Deployment, monitoring, CI/CD for ML, feature stores, data/model versioning, scaling (Spark, distributed training).",
    resources: [],
    dependsOn: ["software-engineering-practices", "ml-fundamentals"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Model drift refers to:",
          options: [
            "A bug in the training code",
            "Degradation in model performance as real-world data distribution changes",
            "GPU overheating during training",
            "A type of regularization",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "big-data-engineering",
    title: "Big Data Engineering",
    branch: "specialization",
    phase: 5,
    description:
      "Spark, Hadoop ecosystem, streaming (Kafka), cloud platforms (AWS/GCP/Azure data & ML services).",
    resources: [],
    dependsOn: ["sql", "software-engineering-practices"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Apache Kafka is primarily used for:",
          options: [
            "Batch-only ETL jobs",
            "High-throughput distributed streaming/messaging",
            "Model training",
            "Data visualization",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "bayesian-probabilistic-programming",
    title: "Bayesian Modeling & Probabilistic Programming",
    branch: "specialization",
    phase: 5,
    description: "PyMC, Stan.",
    resources: [],
    dependsOn: ["probability-statistics"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "In Bayesian inference, the posterior distribution is proportional to:",
          options: [
            "The prior alone",
            "The likelihood times the prior",
            "The likelihood alone",
            "The p-value",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ---------- Phase 6: Domain expertise ----------
  {
    id: "domain-expertise",
    title: "Domain Expertise (Pick 1-2)",
    branch: "domain",
    phase: 6,
    description:
      "Go deep enough in finance, healthcare, biology, climate, etc. to read domain research papers fluently. Data science divorced from domain knowledge produces technically correct but useless results.",
    resources: [],
    dependsOn: ["ml-fundamentals"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Why does domain expertise matter for a data scientist?",
          options: [
            "It's optional polish, not core to the work",
            "It helps frame the right question and interpret results correctly",
            "It replaces the need for statistics",
            "It only matters for academic research",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ---------- Phase 7: Research-level mastery ----------
  {
    id: "read-papers",
    title: "Continuous Paper Reading",
    branch: "research",
    phase: 7,
    description:
      "NeurIPS, ICML, ICLR, JMLR, ACL proceedings: read continuously.",
    resources: [],
    dependsOn: ["reading-literature", "cnn-rnn-transformers"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "ICML, NeurIPS, and ICLR are primarily:",
          options: [
            "Data science bootcamps",
            "Major ML research conferences",
            "Cloud computing vendors",
            "Python libraries",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "reproduce-papers",
    title: "Reproduce Published Results",
    branch: "research",
    phase: 7,
    description:
      "Reproduce results from papers yourself: a key filter for genuine understanding.",
    resources: [],
    dependsOn: ["read-papers"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Failing to reproduce a paper's reported results most often reveals:",
          options: [
            "That reproduction is pointless",
            "Missing details, hyperparameter sensitivity, or implementation gaps",
            "That the paper is always wrong",
            "That your hardware is broken",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "open-source-contribution",
    title: "Open Source Contribution",
    branch: "research",
    phase: 7,
    description:
      "Contribute to open-source ML/DS libraries (sklearn, PyTorch, Hugging Face).",
    resources: [],
    dependsOn: ["software-engineering-practices", "read-papers"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "A good first open-source contribution typically starts with:",
          options: [
            "Rewriting the entire codebase",
            "A small, well-scoped issue or documentation fix",
            "Forking and never submitting a PR",
            "Deleting failing tests",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "publish-research",
    title: "Publish Original Research/Analysis",
    branch: "research",
    phase: 7,
    description:
      "Publish your own research or well-documented novel analyses/methods.",
    resources: [],
    dependsOn: ["reproduce-papers"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Peer review of a research submission primarily exists to:",
          options: [
            "Guarantee the paper gets published",
            "Have independent experts assess validity and rigor before publication",
            "Speed up publication time",
            "Replace the need for experiments",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "conferences",
    title: "Attend / Present at Conferences",
    branch: "research",
    phase: 7,
    description:
      "Attend and present at conferences; consider a PhD or equivalent independent research depth.",
    resources: [],
    dependsOn: ["publish-research"],
    nodeType: "info",
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Presenting research at a conference is valuable mainly because it:",
          options: [
            "Is purely ceremonial",
            "Exposes your work to expert feedback and the broader community",
            "Guarantees future funding",
            "Is required to use any ML library",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ---------- Phase 8: "Best ever" differentiators ----------
  {
    id: "taste",
    title: "Taste",
    branch: "differentiators",
    phase: 8,
    description:
      "Knowing which problems are worth solving, and which sophisticated technique is overkill for a simple problem.",
    resources: [],
    dependsOn: ["ml-fundamentals", "domain-expertise"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "'Taste' in a data scientist's judgment most often shows up as:",
          options: [
            "Always using the newest, most complex model",
            "Matching technique complexity to the actual problem constraints",
            "Avoiding all simple baselines",
            "Ignoring business context",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "communication",
    title: "Communication",
    branch: "differentiators",
    phase: 8,
    description:
      "Translating complex analysis into decisions non-technical stakeholders can act on.",
    resources: [],
    dependsOn: ["technical-writing"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "The best measure of a good stakeholder-facing data science presentation is:",
          options: [
            "How much math it shows",
            "Whether the audience can make a decision from it",
            "How long it is",
            "How many charts it includes",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "skepticism",
    title: "Skepticism",
    branch: "differentiators",
    phase: 8,
    description:
      "Rigorously interrogating your own results: multiple testing, data leakage, confounders, overfitting to noise.",
    resources: [],
    dependsOn: ["classical-stats-experimentation"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "Data leakage in a model most often causes:",
          options: [
            "Underfitting",
            "Unrealistically good validation performance that fails in production",
            "Slower training",
            "Lower memory usage",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "breadth-depth",
    title: "Breadth + Depth (T/Comb-shaped skills)",
    branch: "differentiators",
    phase: 8,
    description:
      "Deep in several areas, broad across all: the T-shaped or comb-shaped skill profile.",
    resources: [],
    dependsOn: ["domain-expertise", "taste"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "A 'T-shaped' skill profile means:",
          options: [
            "Expertise in exactly one narrow area only",
            "Broad general knowledge plus deep expertise in one or more areas",
            "Equal shallow knowledge across everything",
            "No specialization at all",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "end-to-end-building",
    title: "Building End-to-End",
    branch: "differentiators",
    phase: 8,
    description:
      "Not just modeling: framing the question, gathering data, building the system, deploying it, measuring real-world impact.",
    resources: [],
    dependsOn: ["mlops-production"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "An 'end-to-end' data science project includes:",
          options: [
            "Only the model training step",
            "Problem framing through deployment and impact measurement",
            "Only the data collection step",
            "Only the final report",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "teaching",
    title: "Teaching",
    branch: "differentiators",
    phase: 8,
    description:
      "The clearest sign of mastery is being able to teach it. Mentor others, write, speak.",
    resources: [],
    dependsOn: ["communication"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt:
            "Being able to teach a concept clearly is a strong signal of:",
          options: [
            "Nothing in particular",
            "Genuine, structured understanding of the material",
            "Only public speaking skill",
            "Memorization without understanding",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
  {
    id: "ethics-responsibility",
    title: "Ethics & Responsibility",
    branch: "differentiators",
    phase: 8,
    description:
      "Understanding bias, fairness, privacy, and the societal impact of your models.",
    resources: [],
    dependsOn: ["ml-fundamentals"],
    quiz: {
      passingScore: 0.8,
      questions: [
        {
          id: "q1",
          prompt: "A model trained on historically biased data will typically:",
          options: [
            "Automatically correct the bias",
            "Tend to reproduce or amplify that bias unless explicitly addressed",
            "Have no relationship to the training data's bias",
            "Only affect training speed",
          ],
          correctIndex: 1,
        },
      ],
    },
  },
]

// Convenience: branch metadata for layout/coloring in the roadmap UI
export const branches = {
  meta: { label: "Meta-Skills", color: "#94a3b8" },
  math: { label: "Math Foundations", color: "#f59e0b" },
  programming: { label: "Programming & CS", color: "#3b82f6" },
  "core-ds": { label: "Core Data Science", color: "#10b981" },
  "deep-learning": { label: "Deep Learning", color: "#8b5cf6" },
  specialization: { label: "Specializations", color: "#ec4899" },
  domain: { label: "Domain Expertise", color: "#14b8a6" },
  research: { label: "Research Mastery", color: "#ef4444" },
  differentiators: { label: "Differentiators", color: "#eab308" },
}

// function toCamelCase(str) {
//   return str
//     .toLowerCase()
//     .replace(/[_\-\s]+(.)/g, (_, char) => char.toUpperCase())
// }

// import fs from "fs"

// nodes.map((node) => {
//   const qName = toCamelCase(node.id)
//   const text = `// Questions for ${node.id}

//   export const ${qName} = []

//   `
//   console.log(node.id)
//   fs.writeFileSync(`./src/data/questions/${node.id}.js`, text)
// })

// const indexFile = "./src/data/questions/index.js"

// fs.writeFileSync(indexFile, `// Universal loader for questions\n`)

// nodes.map((node) => {
//   fs.appendFileSync(
//     indexFile,
//     `import { ${toCamelCase(node.id)} } from "./${node.id}"\n`,
//   )
// })

// const startDict = `\n\nconst questionRegistry = {\n`

// fs.appendFileSync(indexFile, startDict)

// nodes.map((node) => {
//   fs.appendFileSync(indexFile, `"${node.id}": ${toCamelCase(node.id)},\n`)
// })

// fs.appendFileSync(indexFile, `};\n`)
