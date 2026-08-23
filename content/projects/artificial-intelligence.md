# AI & ML Chapter Projects

One required applied project follows every chapter in the [AI & ML roadmap](../roadmaps/AI.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Data and math

**Shared unit storyline:** Keep one workspace for Data and math. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="ai-phase-1-project"></a>
### AI & ML CHAPTER 1 PROJECT

#### PROJECT: RULE VS LEARNER BENCHMARK

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Understand machine learning as learning a function from data, and why train/test discipline exists.

**Chapter topic:** AI Thinking: Programs That Improve From Examples

**Unit storyline:** Continue the **Data and math** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Rule vs Learner Benchmark as a focused exercise for AI Thinking. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **1.1 — Rules vs Learning - What Machine Learning Actually Is:** Apply Rules vs Learning - What Machine Learning Actually Is to the controlled example and record the reasoning and result.
- **1.2 — Train, Validation, Test - and the Generalization Goal:** Apply Train, Validation, Test - and the Generalization Goal to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Compare a hand-written rule system with a learned classifier on the same small dataset and error table.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Compare a hand-written rule system with a learned classifier on the same small dataset and error table.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to AI Thinking and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create rule-vs-learner-benchmark with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Compare a hand-written rule system with a learned classifier on the same small dataset and error table.
3. Use a metric connected to AI Thinking and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for AI Thinking.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/data/chapter-1-rule-vs-learner-benchmark
git commit -m "feat(rule-vs-learner-benchmark): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 1](../roadmaps/AI.md#phase-1) | [CONTINUE TO AI & ML CHAPTER 2](../roadmaps/AI.md#phase-2)


<a id="ai-phase-2-project"></a>
### AI & ML CHAPTER 2 PROJECT

#### PROJECT: GRADIENT DESCENT VISUALIZER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Build working intuition for vectors/matrices, probability, and derivatives/gradients - not a full math degree.

**Chapter topic:** Math for ML (The Useful Slice)

**Unit storyline:** Continue the **Data and math** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Gradient Descent Visualizer as a focused exercise for Math for ML. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **2.1 — Vectors, Matrices, and Geometry of Data:** Apply Vectors, Matrices, and Geometry of Data to the controlled example and record the reasoning and result.
- **2.2 — Probability, Expectation, and Gradients:** Apply Probability, Expectation, and Gradients to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Implement linear regression and gradient descent with NumPy, plot the loss surface and path, and compare learning rates.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Implement linear regression and gradient descent with NumPy, plot the loss surface and path, and compare learning rates.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by Math for ML, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create gradient-descent-visualizer with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Implement linear regression and gradient descent with NumPy, plot the loss surface and path, and compare learning rates.
3. Show the part of the data or system explained by Math for ML, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for Math for ML.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/data/chapter-2-gradient-descent-visualizer
git commit -m "feat(gradient-descent-visualizer): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 2](../roadmaps/AI.md#phase-2) | [CONTINUE TO AI & ML CHAPTER 3](../roadmaps/AI.md#phase-3)


<a id="ai-phase-3-project"></a>
### AI & ML CHAPTER 3 PROJECT

#### PROJECT: NUMPY/PANDAS DATASET LAB

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Be fluent with NumPy, pandas, and basic plotting so model code is not the bottleneck.

**Chapter topic:** Python for AI

**Unit storyline:** Continue the **Data and math** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build NumPy/Pandas Dataset Lab as a focused exercise for Python for AI. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **3.1 — NumPy - The Array Language of ML:** Implement or demonstrate NumPy - The Array Language of ML in the shared unit project and add a focused check.
- **3.2 — Pandas, Plotting, and Honest EDA:** Implement or demonstrate Pandas, Plotting, and Honest EDA in the shared unit project and add a focused check.

#### SPECIFICATION

- Load, inspect, clean, transform, split, and summarize a tabular dataset with reusable NumPy/pandas functions.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Load, inspect, clean, transform, split, and summarize a tabular dataset with reusable NumPy/pandas functions.
- Give the user one clear main action and keep all other features secondary.
- Use Python for AI in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create numpy-pandas-dataset-lab with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Load, inspect, clean, transform, split, and summarize a tabular dataset with reusable NumPy/pandas functions.
3. Use Python for AI in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Python for AI.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/data/chapter-3-numpy-pandas-dataset-lab
git commit -m "feat(numpy-pandas-dataset-lab): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 3](../roadmaps/AI.md#phase-3) | [CONTINUE TO AI & ML CHAPTER 4](../roadmaps/AI.md#phase-4)


## Classical learning

**Shared unit storyline:** Keep one workspace for Classical learning. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="ai-phase-4-project"></a>
### AI & ML CHAPTER 4 PROJECT

#### PROJECT: REGRESSION AND CLASSIFICATION BASELINE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Fit and interpret linear/logistic models; understand loss and regularization.

**Chapter topic:** Classical Machine Learning

**Unit storyline:** Continue the **Classical learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Regression and Classification Baseline as a focused exercise for Classical Machine Learning. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **4.1 — Linear Regression and Loss Landscapes:** Implement or demonstrate Linear Regression and Loss Landscapes in the shared unit project and add a focused check.
- **4.2 — Logistic Regression and Decision Boundaries:** Implement or demonstrate Logistic Regression and Decision Boundaries in the shared unit project and add a focused check.

#### SPECIFICATION

- Train regression and classification baselines with preprocessing pipelines and compare against a simple dummy model.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Train regression and classification baselines with preprocessing pipelines and compare against a simple dummy model.
- Give the user one clear main action and keep all other features secondary.
- Use Classical Machine Learning in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create regression-and-classification-baseline with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Train regression and classification baselines with preprocessing pipelines and compare against a simple dummy model.
3. Use Classical Machine Learning in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Classical Machine Learning.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/learn/chapter-4-regression-and-classification-baseline
git commit -m "feat(regression-and-classification-baseline): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 4](../roadmaps/AI.md#phase-4) | [CONTINUE TO AI & ML CHAPTER 5](../roadmaps/AI.md#phase-5)


<a id="ai-phase-5-project"></a>
### AI & ML CHAPTER 5 PROJECT

#### PROJECT: LEAKAGE-PROOF EVALUATION HARNESS

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Choose metrics that match the business cost of errors; diagnose under/overfitting.

**Chapter topic:** Evaluation and Generalization

**Unit storyline:** Continue the **Classical learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Leakage-Proof Evaluation Harness as a focused exercise for Evaluation and Generalization. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **5.1 — Metrics Beyond Accuracy:** Implement or demonstrate Metrics Beyond Accuracy in the shared unit project and add a focused check.
- **5.2 — Bias-Variance, Cross-Validation, Leakage:** Implement or demonstrate Bias-Variance, Cross-Validation, Leakage in the shared unit project and add a focused check.

#### SPECIFICATION

- Create train/validation/test splits before preprocessing, run cross-validation, choose metrics, and demonstrate one leakage failure.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create train/validation/test splits before preprocessing, run cross-validation, choose metrics, and demonstrate one leakage failure.
- Give the user one clear main action and keep all other features secondary.
- Use Evaluation and Generalization in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create leakage-proof-evaluation-harness with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Create train/validation/test splits before preprocessing, run cross-validation, choose metrics, and demonstrate one leakage failure.
3. Use Evaluation and Generalization in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Evaluation and Generalization.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/learn/chapter-5-leakage-proof-evaluation-harness
git commit -m "feat(leakage-proof-evaluation-harness): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 5](../roadmaps/AI.md#phase-5) | [CONTINUE TO AI & ML CHAPTER 6](../roadmaps/AI.md#phase-6)


<a id="ai-phase-6-project"></a>
### AI & ML CHAPTER 6 PROJECT

#### PROJECT: ENSEMBLE MODEL SHOWDOWN

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Use decision trees, random forests, and gradient boosting as strong tabular baselines.

**Chapter topic:** Trees and Ensembles

**Unit storyline:** Continue the **Classical learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Ensemble Model Showdown as a focused exercise for Trees and Ensembles. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **6.1 — Decision Trees and Random Forests:** Implement or demonstrate Decision Trees and Random Forests in the shared unit project and add a focused check.
- **6.2 — Gradient Boosting (XGBoost/LightGBM intuition):** Implement or demonstrate Gradient Boosting (XGBoost/LightGBM intuition) in the shared unit project and add a focused check.

#### SPECIFICATION

- Compare decision tree, random forest, and gradient boosting models on the same split, metrics, runtime, and error slices.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Compare decision tree, random forest, and gradient boosting models on the same split, metrics, runtime, and error slices.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Trees and Ensembles and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create ensemble-model-showdown with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Compare decision tree, random forest, and gradient boosting models on the same split, metrics, runtime, and error slices.
3. Use a metric connected to Trees and Ensembles and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Trees and Ensembles.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/learn/chapter-6-ensemble-model-showdown
git commit -m "feat(ensemble-model-showdown): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 6](../roadmaps/AI.md#phase-6) | [CONTINUE TO AI & ML CHAPTER 7](../roadmaps/AI.md#phase-7)


<a id="ai-phase-7-project"></a>
### AI & ML CHAPTER 7 PROJECT

#### PROJECT: NEURAL NETWORK FROM SCRATCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Understand MLPs as stacked linear transforms + nonlinearities.

**Chapter topic:** Neural Network Basics

**Unit storyline:** Continue the **Classical learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Neural Network from Scratch as a focused exercise for Neural Network Basics. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **7.1 — Perceptrons to MLPs:** Implement or demonstrate Perceptrons to MLPs in the shared unit project and add a focused check.
- **7.2 — Overfitting Nets - Regularization, Dropout, Early Stopping:** Implement or demonstrate Overfitting Nets - Regularization, Dropout, Early Stopping in the shared unit project and add a focused check.

#### SPECIFICATION

- Implement a dense neural network forward pass, activations, loss, and training loop in NumPy for a tiny dataset.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Implement a dense neural network forward pass, activations, loss, and training loop in NumPy for a tiny dataset.
- Give the user one clear main action and keep all other features secondary.
- Use Neural Network Basics in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy only.

#### BUILD IT STEP BY STEP

1. Create neural-network-from-scratch with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Implement a dense neural network forward pass, activations, loss, and training loop in NumPy for a tiny dataset.
3. Use Neural Network Basics in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Neural Network Basics.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/learn/chapter-7-neural-network-from-scratch
git commit -m "feat(neural-network-from-scratch): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 7](../roadmaps/AI.md#phase-7) | [CONTINUE TO AI & ML CHAPTER 8](../roadmaps/AI.md#phase-8)


<a id="ai-phase-8-project"></a>
### AI & ML CHAPTER 8 PROJECT

#### PROJECT: TINY AUTOGRAD ENGINE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Understand backprop as chain rule on a computational graph; use SGD/Adam wisely.

**Chapter topic:** Backpropagation and Optimizers

**Unit storyline:** Continue the **Classical learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Tiny Autograd Engine as a focused exercise for Backpropagation and Optimizers. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **8.1 — Backpropagation on a Computational Graph:** Implement or demonstrate Backpropagation on a Computational Graph in the shared unit project and add a focused check.
- **8.2 — SGD, Momentum, Adam, and Training Dynamics:** Implement or demonstrate SGD, Momentum, Adam, and Training Dynamics in the shared unit project and add a focused check.

#### SPECIFICATION

- Create scalar/tensor operations that record a computation graph and compute gradients by reverse-mode automatic differentiation.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create scalar/tensor operations that record a computation graph and compute gradients by reverse-mode automatic differentiation.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Backpropagation and Optimizers explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- PyTorch.
- Jupyter Notebook and Matplotlib.

#### BUILD IT STEP BY STEP

1. Create tiny-autograd-engine with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Create scalar/tensor operations that record a computation graph and compute gradients by reverse-mode automatic differentiation.
3. Represent the important states or data structures from Backpropagation and Optimizers explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for Backpropagation and Optimizers.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/learn/chapter-8-tiny-autograd-engine
git commit -m "feat(tiny-autograd-engine): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 8](../roadmaps/AI.md#phase-8) | [CONTINUE TO AI & ML CHAPTER 9](../roadmaps/AI.md#phase-9)


<a id="ai-phase-9-project"></a>
### AI & ML CHAPTER 9 PROJECT

#### PROJECT: REUSABLE PYTORCH TRAINER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Write clean training loops; debug shapes and device issues.

**Chapter topic:** PyTorch Deep Practice

**Unit storyline:** Continue the **Classical learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reusable PyTorch Trainer as a focused exercise for PyTorch Practice. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **9.1 — Tensors, Autograd, and Modules:** Implement or demonstrate Tensors, Autograd, and Modules in the shared unit project and add a focused check.
- **9.2 — Datasets, Loops, and Debugging Training:** Implement or demonstrate Datasets, Loops, and Debugging Training in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a configurable PyTorch trainer with datasets, batches, device handling, checkpoints, early stopping, metrics, and resume.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a configurable PyTorch trainer with datasets, batches, device handling, checkpoints, early stopping, metrics, and resume.
- Give the user one clear main action and keep all other features secondary.
- Use PyTorch Practice in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- PyTorch and torchvision.
- Jupyter Notebook.

#### BUILD IT STEP BY STEP

1. Create reusable-pytorch-trainer with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Build a configurable PyTorch trainer with datasets, batches, device handling, checkpoints, early stopping, metrics, and resume.
3. Use PyTorch Practice in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for PyTorch Practice.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/learn/chapter-9-reusable-pytorch-trainer
git commit -m "feat(reusable-pytorch-trainer): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 9](../roadmaps/AI.md#phase-9) | [CONTINUE TO AI & ML CHAPTER 10](../roadmaps/AI.md#phase-10)


## Deep learning

**Shared unit storyline:** Keep one workspace for Deep learning. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="ai-phase-10-project"></a>
### AI & ML CHAPTER 10 PROJECT

#### PROJECT: TRANSFER-LEARNING IMAGE CLASSIFIER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Explain convolution, pooling, and transfer learning for images.

**Chapter topic:** CNNs and Computer Vision

**Unit storyline:** Continue the **Deep learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Transfer-Learning Image Classifier as a focused exercise for CNNs and Computer Vision. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **10.1 — Convolutions, Filters, and Hierarchies:** Implement or demonstrate Convolutions, Filters, and Hierarchies in the shared unit project and add a focused check.
- **10.2 — Transfer Learning and Modern Vision Practice:** Implement or demonstrate Transfer Learning and Modern Vision Practice in the shared unit project and add a focused check.

#### SPECIFICATION

- Fine-tune an open pretrained image model on a small labeled dataset and inspect confusion matrix plus misclassified images.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Fine-tune an open pretrained image model on a small labeled dataset and inspect confusion matrix plus misclassified images.
- Give the user one clear main action and keep all other features secondary.
- Use CNNs and Computer Vision in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- PyTorch.
- Hugging Face datasets.

#### BUILD IT STEP BY STEP

1. Create transfer-learning-image-classifier with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Fine-tune an open pretrained image model on a small labeled dataset and inspect confusion matrix plus misclassified images.
3. Use CNNs and Computer Vision in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for CNNs and Computer Vision.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/deep/chapter-10-transfer-learning-image-classifier
git commit -m "feat(transfer-learning-image-classifier): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 10](../roadmaps/AI.md#phase-10) | [CONTINUE TO AI & ML CHAPTER 11](../roadmaps/AI.md#phase-11)


<a id="ai-phase-11-project"></a>
### AI & ML CHAPTER 11 PROJECT

#### PROJECT: SEQUENCE SENTIMENT CLASSIFIER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Understand sequence modeling needs and the bottlenecks that motivated transformers.

**Chapter topic:** Sequence Models (RNN/LSTM Era)

**Unit storyline:** Continue the **Deep learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Sequence Sentiment Classifier as a focused exercise for Sequence Models. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **11.1 — RNNs - State Across Time:** Implement or demonstrate RNNs - State Across Time in the shared unit project and add a focused check.
- **11.2 — LSTMs/GRUs and the Wall That Remained:** Implement or demonstrate LSTMs/GRUs and the Wall That Remained in the shared unit project and add a focused check.

#### SPECIFICATION

- Train a small recurrent or LSTM sentiment classifier with padding, masking, checkpoints, and error analysis.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Train a small recurrent or LSTM sentiment classifier with padding, masking, checkpoints, and error analysis.
- Give the user one clear main action and keep all other features secondary.
- Use Sequence Models in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- sentence-transformers.
- FAISS or Chroma.

#### BUILD IT STEP BY STEP

1. Create sequence-sentiment-classifier with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Train a small recurrent or LSTM sentiment classifier with padding, masking, checkpoints, and error analysis.
3. Use Sequence Models in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Sequence Models.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/deep/chapter-11-sequence-sentiment-classifier
git commit -m "feat(sequence-sentiment-classifier): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 11](../roadmaps/AI.md#phase-11) | [CONTINUE TO AI & ML CHAPTER 12](../roadmaps/AI.md#phase-12)


<a id="ai-phase-12-project"></a>
### AI & ML CHAPTER 12 PROJECT

#### PROJECT: SEMANTIC SEARCH ENGINE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Represent discrete tokens (and more) as vectors where geometry reflects meaning.

**Chapter topic:** Embeddings and Representation Learning

**Unit storyline:** Continue the **Deep learning** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Semantic Search Engine as a focused exercise for Embeddings and Representation Learning. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **12.1 — Word Embeddings and Distributional Meaning:** Implement or demonstrate Word Embeddings and Distributional Meaning in the shared unit project and add a focused check.
- **12.2 — Similarity, Retrieval, and Vector Spaces in Products:** Implement or demonstrate Similarity, Retrieval, and Vector Spaces in Products in the shared unit project and add a focused check.

#### SPECIFICATION

- Embed documents and queries with an open model, index them in FAISS, return top-k results, and measure retrieval relevance.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Embed documents and queries with an open model, index them in FAISS, return top-k results, and measure retrieval relevance.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Embeddings and Representation Learning explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- PyTorch.
- Jupyter Notebook; implement a tiny educational model.

#### BUILD IT STEP BY STEP

1. Create semantic-search-engine with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Embed documents and queries with an open model, index them in FAISS, return top-k results, and measure retrieval relevance.
3. Represent the important states or data structures from Embeddings and Representation Learning explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for Embeddings and Representation Learning.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/deep/chapter-12-semantic-search-engine
git commit -m "feat(semantic-search-engine): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 12](../roadmaps/AI.md#phase-12) | [CONTINUE TO AI & ML CHAPTER 13](../roadmaps/AI.md#phase-13)


## Transformers and LLM systems

**Shared unit storyline:** Keep one workspace for Transformers and LLM systems. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="ai-phase-13-project"></a>
### AI & ML CHAPTER 13 PROJECT

#### PROJECT: TINY TRANSFORMER EXPLAINER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Master self-attention, multi-head attention, and the encoder/decoder patterns.

**Chapter topic:** Transformers

**Unit storyline:** Continue the **Transformers and LLM systems** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Tiny Transformer Explainer as a focused exercise for Transformers. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **13.1 — Self-Attention and Q/K/V:** Implement or demonstrate Self-Attention and Q/K/V in the shared unit project and add a focused check.
- **13.2 — Encoder, Decoder, and Scaling Laws Intuition:** Implement or demonstrate Encoder, Decoder, and Scaling Laws Intuition in the shared unit project and add a focused check.

#### SPECIFICATION

- Implement tokenization, positional information, scaled dot-product attention, masking, and a tiny transformer visualization.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Implement tokenization, positional information, scaled dot-product attention, masking, and a tiny transformer visualization.
- Give the user one clear main action and keep all other features secondary.
- Use Transformers in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create tiny-transformer-explainer with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Implement tokenization, positional information, scaled dot-product attention, masking, and a tiny transformer visualization.
3. Use Transformers in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Transformers.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/transformers/chapter-13-tiny-transformer-explainer
git commit -m "feat(tiny-transformer-explainer): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 13](../roadmaps/AI.md#phase-13) | [CONTINUE TO AI & ML CHAPTER 14](../roadmaps/AI.md#phase-14)


<a id="ai-phase-14-project"></a>
### AI & ML CHAPTER 14 PROJECT

#### PROJECT: PROMPT EXPERIMENT MATRIX

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Use LLMs deliberately: tokenization, context limits, prompting patterns, failure modes.

**Chapter topic:** LLMs and Prompting

**Unit storyline:** Continue the **Transformers and LLM systems** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Prompt Experiment Matrix as a focused exercise for LLMs and Prompting. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **14.1 — Tokens, Context Windows, and Sampling:** Implement or demonstrate Tokens, Context Windows, and Sampling in the shared unit project and add a focused check.
- **14.2 — Prompting Patterns and Failure Modes:** Implement or demonstrate Prompting Patterns and Failure Modes in the shared unit project and add a focused check.

#### SPECIFICATION

- Run a fixed prompt dataset through several system/user prompt variants on a small local model and score format, accuracy, and refusal behavior.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run a fixed prompt dataset through several system/user prompt variants on a small local model and score format, accuracy, and refusal behavior.
- Define one realistic scenario, its boundaries, and the intended reader for the Prompt Experiment Matrix.
- Collect or create the exact inputs needed to apply LLMs and Prompting; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- Ollama with a small open model; store no secrets in code.

#### BUILD IT STEP BY STEP

1. Create prompt-experiment-matrix with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Run a fixed prompt dataset through several system/user prompt variants on a small local model and score format, accuracy, and refusal behavior.
3. Collect or create the exact inputs needed to apply LLMs and Prompting; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for LLMs and Prompting.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/transformers/chapter-14-prompt-experiment-matrix
git commit -m "feat(prompt-experiment-matrix): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 14](../roadmaps/AI.md#phase-14) | [CONTINUE TO AI & ML CHAPTER 15](../roadmaps/AI.md#phase-15)


<a id="ai-phase-15-project"></a>
### AI & ML CHAPTER 15 PROJECT

#### PROJECT: CITATION-FIRST RAG

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Build and critique RAG pipelines; know when RAG beats fine-tuning.

**Chapter topic:** Retrieval-Augmented Generation

**Unit storyline:** Continue the **Transformers and LLM systems** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Citation-First RAG as a focused exercise for Retrieval-Augmented Generation. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **15.1 — The RAG Pipeline:** Implement or demonstrate The RAG Pipeline in the shared unit project and add a focused check.
- **15.2 — Improving RAG - Hybrid, Rerank, Agentic Retrieval:** Implement or demonstrate Improving RAG - Hybrid, Rerank, Agentic Retrieval in the shared unit project and add a focused check.

#### SPECIFICATION

- Chunk local documents, retrieve passages, generate an answer with citations, and refuse when retrieved evidence is too weak.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Chunk local documents, retrieve passages, generate an answer with citations, and refuse when retrieved evidence is too weak.
- Give the user one clear main action and keep all other features secondary.
- Use Retrieval-Augmented Generation in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- sentence-transformers.
- FAISS or Chroma and a model API/local model.

#### BUILD IT STEP BY STEP

1. Create citation-first-rag with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Chunk local documents, retrieve passages, generate an answer with citations, and refuse when retrieved evidence is too weak.
3. Use Retrieval-Augmented Generation in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Retrieval-Augmented Generation.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/transformers/chapter-15-citation-first-rag
git commit -m "feat(citation-first-rag): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 15](../roadmaps/AI.md#phase-15) | [CONTINUE TO AI & ML CHAPTER 16](../roadmaps/AI.md#phase-16)


<a id="ai-phase-16-project"></a>
### AI & ML CHAPTER 16 PROJECT

#### PROJECT: LORA FINE-TUNING REPORT

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Know when and how to fine-tune efficiently; contrast with RAG and prompting.

**Chapter topic:** Fine-Tuning and Alignment Basics

**Unit storyline:** Continue the **Transformers and LLM systems** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build LoRA Fine-Tuning Report as a focused exercise for Fine-Tuning and Alignment. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **16.1 — SFT and Parameter-Efficient Fine-Tuning (LoRA/QLoRA):** Implement or demonstrate SFT and Parameter-Efficient Fine-Tuning (LoRA/QLoRA) in the shared unit project and add a focused check.
- **16.2 — Preferences, RLHF/DPO Literacy, and Safety Trade-offs:** Implement or demonstrate Preferences, RLHF/DPO Literacy, and Safety Trade-offs in the shared unit project and add a focused check.

#### SPECIFICATION

- Train a small LoRA adapter on generated examples, compare it with the base model, and record quality, memory, and time.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Train a small LoRA adapter on generated examples, compare it with the base model, and record quality, memory, and time.
- Define one realistic scenario, its boundaries, and the intended reader for the LoRA Fine-Tuning Report.
- Collect or create the exact inputs needed to apply Fine-Tuning and Alignment; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12.
- Hugging Face Transformers and PEFT.
- PyTorch.

#### BUILD IT STEP BY STEP

1. Create lora-fine-tuning-report with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Train a small LoRA adapter on generated examples, compare it with the base model, and record quality, memory, and time.
3. Collect or create the exact inputs needed to apply Fine-Tuning and Alignment; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Fine-Tuning and Alignment.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/transformers/chapter-16-lora-fine-tuning-report
git commit -m "feat(lora-fine-tuning-report): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 16](../roadmaps/AI.md#phase-16) | [CONTINUE TO AI & ML CHAPTER 17](../roadmaps/AI.md#phase-17)


<a id="ai-phase-17-project"></a>
### AI & ML CHAPTER 17 PROJECT

#### PROJECT: SAFE TOOL-USING AGENT

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Build reliable tool-using loops; avoid autonomous chaos.

**Chapter topic:** Agents and Tool Use

**Unit storyline:** Continue the **Transformers and LLM systems** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Safe Tool-Using Agent as a focused exercise for Agents and Tool Use. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **17.1 — Tool Calling and ReAct Loops:** Implement or demonstrate Tool Calling and ReAct Loops in the shared unit project and add a focused check.
- **17.2 — Memory, Graphs, and Human-in-the-Loop:** Implement or demonstrate Memory, Graphs, and Human-in-the-Loop in the shared unit project and add a focused check.

#### SPECIFICATION

- Build an agent with typed allow-listed tools, confirmation for state changes, iteration limits, timeouts, and prompt-injection defenses.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build an agent with typed allow-listed tools, confirmation for state changes, iteration limits, timeouts, and prompt-injection defenses.
- Give the user one clear main action and keep all other features secondary.
- Use Agents and Tool Use in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Ollama with a small open model.
- Pydantic and a small allow-listed tool set.

#### BUILD IT STEP BY STEP

1. Create safe-tool-using-agent with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Build an agent with typed allow-listed tools, confirmation for state changes, iteration limits, timeouts, and prompt-injection defenses.
3. Use Agents and Tool Use in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Agents and Tool Use.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/transformers/chapter-17-safe-tool-using-agent
git commit -m "feat(safe-tool-using-agent): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 17](../roadmaps/AI.md#phase-17) | [CONTINUE TO AI & ML CHAPTER 18](../roadmaps/AI.md#phase-18)


<a id="ai-phase-18-project"></a>
### AI & ML CHAPTER 18 PROJECT

#### PROJECT: MODEL EVAL AND MONITORING PIPELINE

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Put AI systems under test; observe them; deploy with cost/safety controls.

**Chapter topic:** Evaluation, Safety, and MLOps

**Unit storyline:** Continue the **Transformers and LLM systems** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Model Eval and Monitoring Pipeline as a focused exercise for Evaluation, Safety, and MLOps. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **18.1 — Evaluation That Matches Product Risk:** Add an executable Evaluation That Matches Product Risk procedure with verification and rollback or recovery guidance.
- **18.2 — Safety checks and limits, Observability, Cost, and Deployment:** Add an executable Safety checks and limits, Observability, Cost, and Deployment procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Run a versioned evaluation set on retrieval, answer quality, safety, latency, and drift and display changes over runs.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run a versioned evaluation set on retrieval, answer quality, safety, latency, and drift and display changes over runs.
- Define a small input format, a transformed output format, and where failed records go.
- Use Evaluation, Safety, and MLOps to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Python 3.12.
- pytest and pandas.
- MLflow or simple JSON/CSV experiment logs.

#### BUILD IT STEP BY STEP

1. Create model-eval-and-monitoring-pipeline with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Run a versioned evaluation set on retrieval, answer quality, safety, latency, and drift and display changes over runs.
3. Use Evaluation, Safety, and MLOps to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for Evaluation, Safety, and MLOps.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/transformers/chapter-18-model-eval-and-monitoring-pipeline
git commit -m "feat(model-eval-and-monitoring-pipeline): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 18](../roadmaps/AI.md#phase-18) | [CONTINUE TO AI & ML CHAPTER 19](../roadmaps/AI.md#phase-19)


## Portfolio and hire

**Shared unit storyline:** Keep one workspace for Portfolio and hire. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="ai-phase-19-project"></a>
### AI & ML CHAPTER 19 PROJECT

#### PROJECT: REPRODUCIBLE AI PORTFOLIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Publish 2-4 projects that prove classical ML + deep learning + LLM engineering range.

**Chapter topic:** Portfolio and Projects

**Unit storyline:** Continue the **Portfolio and hire** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reproducible AI Portfolio as a focused exercise for Portfolio and Projects. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **19.1 — Project Ladder That Signals Competence:** Represent Project Ladder That Signals Competence in the design and justify one decision that depends on it.
- **19.2 — Reproducibility, Ethics Notes, and Public Writing:** Represent Reproducibility, Ethics Notes, and Public Writing in the design and justify one decision that depends on it.

#### SPECIFICATION

- Package three best AI artifacts with reproducible commands, fixed seeds, model/data cards, demo inputs, and honest limitations.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Package three best AI artifacts with reproducible commands, fixed seeds, model/data cards, demo inputs, and honest limitations.
- Define one realistic scenario, its boundaries, and the intended reader for the Reproducible AI Portfolio.
- Collect or create the exact inputs needed to apply Portfolio and Projects; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create reproducible-ai-portfolio with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Package three best AI artifacts with reproducible commands, fixed seeds, model/data cards, demo inputs, and honest limitations.
3. Collect or create the exact inputs needed to apply Portfolio and Projects; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Portfolio and Projects.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/hire/chapter-19-reproducible-ai-portfolio
git commit -m "feat(reproducible-ai-portfolio): complete chapter 19 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 19](../roadmaps/AI.md#phase-19) | [CONTINUE TO AI & ML CHAPTER 20](../roadmaps/AI.md#phase-20)


<a id="ai-phase-20-project"></a>
### AI & ML CHAPTER 20 PROJECT

#### PROJECT: ML SYSTEM DESIGN DRILL

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Explain the full chain clearly; design LLM systems with trade-offs; debug with structure.

**Chapter topic:** Interviews

**Unit storyline:** Continue the **Portfolio and hire** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Build ML System Design Drill as a focused exercise for Interviews. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **20.1 — Core ML Drills and "Explain Like Production":** Practice explaining or applying Core ML Drills and "Explain Like Production" under a timer and record the evidence and correction.
- **20.2 — LLM System Design and Behavioral Stories:** Practice explaining or applying LLM System Design and Behavioral Stories under a timer and record the evidence and correction.

#### SPECIFICATION

- Design an ML system under a timer, covering data, training, serving, evaluation, monitoring, safety, cost, and rollback.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Design an ML system under a timer, covering data, training, serving, evaluation, monitoring, safety, cost, and rollback.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Interviews and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases.

#### BUILD IT STEP BY STEP

1. Create ml-system-design-drill with data, notebooks, src, models, and tests folders; create a Python virtual environment.
2. Design an ML system under a timer, covering data, training, serving, evaluation, monitoring, safety, cost, and rollback.
3. Use a metric connected to Interviews and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Interviews.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- artificial-intelligence/hire/chapter-20-ml-system-design-drill
git commit -m "feat(ml-system-design-drill): complete chapter 20 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI & ML CHAPTER 20](../roadmaps/AI.md#phase-20) | [RETURN TO THE AI & ML COURSE](../roadmaps/AI.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="ai-main-portfolio-project"></a>
## AI MAIN PORTFOLIO PROJECT

#### PROJECT: LOCAL CAREER KNOWLEDGE ASSISTANT WITH VERIFIABLE ANSWERS

#### DESCRIPTION

A privacy-friendly assistant that helps job seekers search their own notes, compare skill gaps, and receive answers with exact source citations. Models run locally or use small open weights, so the application requires no paid model API.

#### WHO THIS IS FOR

- Job seeker searching personal study notes and job descriptions
- Career mentor reviewing cited skill-gap summaries
- Project reviewer testing answer quality, safety, and reproducibility

#### WHAT USERS CAN DO

- Import local Markdown/text notes and public job descriptions
- Search semantically and answer only from retrieved passages with citations
- Compare a learner profile with role requirements and explain missing skills
- Show evaluation scores, limitations, and a safe refusal when evidence is absent

#### FREE AND OPEN-SOURCE TECH STACK

- Python 3.12, NumPy, pandas, and scikit-learn
- PyTorch and Hugging Face Transformers with open-weight small models
- sentence-transformers and FAISS
- Ollama for local generation
- FastAPI and Gradio
- MLflow or local JSON experiment tracking
- pytest, Ruff, Docker Engine or Podman; no paid API is required

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - AI Thinking:** Define a rule-based keyword-search baseline and a learning-based alternative; specify what improvement means.
2. **Phase 2 - Math for ML:** Implement cosine similarity and gradient-descent examples on tiny vectors before using libraries.
3. **Phase 3 - Python for AI:** Create reproducible Python data loading, cleaning, configuration, seeding, and command-line workflows.
4. **Phase 4 - Classical Machine Learning:** Train simple regression/classification baselines for role matching and compare them with rules.
5. **Phase 5 - Evaluation and Generalization:** Split by source before training, prevent leakage, and report precision, recall, F1, calibration, and error slices.
6. **Phase 6 - Trees and Ensembles:** Compare decision trees and ensembles for skill classification and inspect feature importance carefully.
7. **Phase 7 - Neural Network Basics:** Build a tiny neural network from NumPy and verify its forward output on known values.
8. **Phase 8 - Backpropagation and Optimizers:** Implement backpropagation for the tiny network and visualize loss under two optimizers.
9. **Phase 9 - PyTorch Practice:** Move the model to a reusable PyTorch trainer with checkpoints, configuration, and deterministic evaluation.
10. **Phase 10 - CNNs and Computer Vision:** Add an optional document-image classifier or screenshot tagger using transfer learning and CPU-friendly samples.
11. **Phase 11 - Sequence Models:** Build a small sequence baseline for sentence or job-description classification and inspect failure cases.
12. **Phase 12 - Embeddings and Representation Learning:** Create document embeddings, a FAISS index, semantic search, and a clearly measured retrieval baseline.
13. **Phase 13 - Transformers:** Implement a tiny transformer attention explainer and connect its concepts to the chosen open model.
14. **Phase 14 - LLMs and Prompting:** Create prompt templates for cited answers, compare prompt variants on a fixed question set, and store results.
15. **Phase 15 - Retrieval-Augmented Generation:** Chunk documents, retrieve passages, generate grounded answers, show citations, and refuse when retrieval is weak.
16. **Phase 16 - Fine-Tuning and Alignment:** Fine-tune only a tiny open model or adapter on generated examples; compare it with the unchanged baseline and stop if it adds no value.
17. **Phase 17 - Agents and Tool Use:** Add allow-listed tools for search and profile comparison with typed arguments, confirmation, timeouts, and output validation.
18. **Phase 18 - Evaluation, Safety, and MLOps:** Build automated retrieval, answer, safety, latency, and drift checks; log model, data, prompt, and result versions.
19. **PHASE 19 - Portfolio and Projects (REQUIRED CAPSTONE-COMPLETION STEP):** Polish the local Gradio app, add model/data cards, select an open-source license, and include honest limitations in the interface.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Practice an ML system-design review covering data, serving, evaluation, monitoring, privacy, cost, and rollback.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `local-career-knowledge-assistant` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: problem framing, dataset, baseline model, and reproducible evaluation split**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "feat(career-assistant): establish data and baseline evaluation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: trained models, error analysis, embeddings, retrieval, and grounded generation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "feat(career-assistant): build evaluated retrieval pipeline"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: agent workflow, serving layer, observability, and safety controls**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "feat(career-assistant): integrate assistant service and safeguards"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: adversarial evaluation, monitoring, optimization, and reproducibility checks**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "test(career-assistant): verify quality safety and reproducibility"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: model cards, limitations, demo data, and local portfolio application**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "docs(career-assistant): complete verifiable assistant release"
git tag -a career-assistant-v1.0.0 -m "First complete career-assistant release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Download the chosen small open model through Ollama and run the API, vector index, and Gradio UI locally.
2. Create a CPU-only Docker image and confirm it starts without any paid API key.
3. Deploy a lightweight demo using a tiny model on a Render free web service if it fits current memory limits; allow cold starts and keep the local version canonical.
4. If live inference is too heavy, publish a static interactive sample with precomputed queries to GitHub Pages instead of paying for compute.
5. Use free GitHub Actions on the public repository for tests, linting, and a small evaluation set; do not download a large model in CI.
6. Test every public sample for private data, prompt injection, unsupported claims, and working citations before sharing it.

> **MAIN PROJECT NAVIGATION:** [REVIEW AI PHASE 19](../roadmaps/AI.md#phase-19) | [REVIEW AI PHASE 20](../roadmaps/AI.md#phase-20) | [RETURN TO THE AI ROADMAP](../roadmaps/AI.md#phase-index)
