# Data Chapter Projects

One required applied project follows every chapter in the [Data roadmap](../roadmaps/Data.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Analyst core

**Shared unit storyline:** Keep one workspace for Analyst core. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="data-phase-1-project"></a>
### DATA CHAPTER 1 PROJECT

#### PROJECT: DECISION METRIC BRIEF

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Understand the path from a click, transaction, or sensor reading to a business decision - and where analysts and engineers sit on that path.

**Chapter topic:** Data Thinking: How Decisions Get Made from Raw Events

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Decision Metric Brief as a focused exercise for Data Thinking. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **1.1 — Data Lifecycle & Analyst vs Engineer:** Apply Data Lifecycle & Analyst vs Engineer to the controlled example and record the reasoning and result.
- **1.2 — Structured, Semi-structured, Unstructured Data & Data as a Product:** Apply Structured, Semi-structured, Unstructured Data & Data as a Product to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Turn a fictional business question into a one-page metric definition containing grain, formula, segments, owner, decision, guardrail, and known limitation.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Turn a fictional business question into a one-page metric definition containing grain, formula, segments, owner, decision, guardrail, and known limitation.
- Define one realistic scenario, its boundaries, and the intended reader for the Decision Metric Brief.
- Collect or create the exact inputs needed to apply Data Thinking; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- LibreOffice Calc.
- A small CSV file.
- No coding required.

#### BUILD IT STEP BY STEP

1. Create decision-metric-brief with data/raw, data/processed, src, tests, and output folders.
2. Turn a fictional business question into a one-page metric definition containing grain, formula, segments, owner, decision, guardrail, and known limitation.
3. Collect or create the exact inputs needed to apply Data Thinking; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Data Thinking.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-1-decision-metric-brief
git commit -m "feat(decision-metric-brief): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 1](../roadmaps/Data.md#phase-1) | [CONTINUE TO DATA CHAPTER 2](../roadmaps/Data.md#phase-2)


<a id="data-phase-2-project"></a>
### DATA CHAPTER 2 PROJECT

#### PROJECT: SPREADSHEET KPI DASHBOARD

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Treat tables as typed, filterable facts - and learn the hygiene that makes later SQL and Python saner.

**Chapter topic:** Spreadsheets & Data Literacy

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Spreadsheet KPI Dashboard as a focused exercise for Spreadsheets and Data Literacy. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **2.1 — Tidy Tables, Types, and Dirty Data:** Implement or demonstrate Tidy Tables, Types, and Dirty Data in the shared unit project and add a focused check.
- **2.2 — PivotTables, Lookups, and Spreadsheet Automation Limits:** Implement or demonstrate PivotTables, Lookups, and Spreadsheet Automation Limits in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a LibreOffice Calc dashboard from a small sales CSV using typed columns, formulas, lookups, a pivot table, filters, and three labeled KPIs.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a LibreOffice Calc dashboard from a small sales CSV using typed columns, formulas, lookups, a pivot table, filters, and three labeled KPIs.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by Spreadsheets and Data Literacy, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- LibreOffice Calc.
- Pivot tables and charts.
- No coding required.

#### BUILD IT STEP BY STEP

1. Create spreadsheet-kpi-dashboard with data/raw, data/processed, src, tests, and output folders.
2. Build a LibreOffice Calc dashboard from a small sales CSV using typed columns, formulas, lookups, a pivot table, filters, and three labeled KPIs.
3. Show the part of the data or system explained by Spreadsheets and Data Literacy, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for Spreadsheets and Data Literacy.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-2-spreadsheet-kpi-dashboard
git commit -m "feat(spreadsheet-kpi-dashboard): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 2](../roadmaps/Data.md#phase-2) | [CONTINUE TO DATA CHAPTER 3](../roadmaps/Data.md#phase-3)


<a id="data-phase-3-project"></a>
### DATA CHAPTER 3 PROJECT

#### PROJECT: REPRODUCIBLE DATA CLI

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Use Python as a tool for reading files, transforming rows, and automating boring cleaning - not as software engineering for its own sake.

**Chapter topic:** Python for Data

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reproducible Data CLI as a focused exercise for Python for Data. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **3.1 — Python Foundations for Analysis and Pipelines:** Apply Python Foundations for Analysis and Pipelines to the controlled example and record the reasoning and result.
- **3.2 — Files, APIs, Virtual Environments, Notebooks vs Scripts:** Apply Files, APIs, Virtual Environments, Notebooks vs Scripts to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Create a Python CLI that reads CSV, validates required columns and types, prints data-quality counts, and writes a deterministic cleaned file.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create a Python CLI that reads CSV, validates required columns and types, prints data-quality counts, and writes a deterministic cleaned file.
- Give the user one clear main action and keep all other features secondary.
- Use Python for Data in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects.

#### BUILD IT STEP BY STEP

1. Create reproducible-data-cli with data/raw, data/processed, src, tests, and output folders.
2. Create a Python CLI that reads CSV, validates required columns and types, prints data-quality counts, and writes a deterministic cleaned file.
3. Use Python for Data in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Python for Data.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-3-reproducible-data-cli
git commit -m "feat(reproducible-data-cli): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 3](../roadmaps/Data.md#phase-3) | [CONTINUE TO DATA CHAPTER 4](../roadmaps/Data.md#phase-4)


<a id="data-phase-4-project"></a>
### DATA CHAPTER 4 PROJECT

#### PROJECT: SQL BOOKSTORE DATABASE

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Ask precise questions of tables using SELECT, filters, ordering, and expressions - including the strange logic of NULLs.

**Chapter topic:** SQL Foundations

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build SQL Bookstore Database as a focused exercise for SQL Foundations. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **4.1 — SELECT, WHERE, ORDER BY, LIMIT, and NULLs:** Apply SELECT, WHERE, ORDER BY, LIMIT, and NULLs to the controlled example and record the reasoning and result.
- **4.2 — Expressions, Casting, CASE, and String/Date Functions:** Apply Expressions, Casting, CASE, and String/Date Functions to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Create authors, books, customers, orders, and order_items in PostgreSQL and answer ten progressively harder SQL questions.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create authors, books, customers, orders, and order_items in PostgreSQL and answer ten progressively harder SQL questions.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use SQL Foundations to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- PostgreSQL 16.
- DBeaver or pgAdmin.
- SQL only.

#### BUILD IT STEP BY STEP

1. Create sql-bookstore-database with data/raw, data/processed, src, tests, and output folders.
2. Create authors, books, customers, orders, and order_items in PostgreSQL and answer ten progressively harder SQL questions.
3. Use SQL Foundations to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for SQL Foundations.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-4-sql-bookstore-database
git commit -m "feat(sql-bookstore-database): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 4](../roadmaps/Data.md#phase-4) | [CONTINUE TO DATA CHAPTER 5](../roadmaps/Data.md#phase-5)


<a id="data-phase-5-project"></a>
### DATA CHAPTER 5 PROJECT

#### PROJECT: SALES COHORT ANALYSIS

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Combine tables correctly and summarize rows without lying to yourself about grain.

**Chapter topic:** SQL Joins & Aggregations

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Sales Cohort Analysis as a focused exercise for SQL Joins and Aggregations. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **5.1 — INNER, LEFT, RIGHT, FULL Joins and Fan-out:** Implement or demonstrate INNER, LEFT, RIGHT, FULL Joins and Fan-out in the shared unit project and add a focused check.
- **5.2 — GROUP BY, HAVING, and Aggregation Correctness:** Implement or demonstrate GROUP BY, HAVING, and Aggregation Correctness in the shared unit project and add a focused check.

#### SPECIFICATION

- Join customer, order, and payment tables to calculate monthly cohorts, retention, revenue, and repeat-purchase rate.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Join customer, order, and payment tables to calculate monthly cohorts, retention, revenue, and repeat-purchase rate.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to SQL Joins and Aggregations and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas, Matplotlib, and seaborn.

#### BUILD IT STEP BY STEP

1. Create sales-cohort-analysis with data/raw, data/processed, src, tests, and output folders.
2. Join customer, order, and payment tables to calculate monthly cohorts, retention, revenue, and repeat-purchase rate.
3. Use a metric connected to SQL Joins and Aggregations and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for SQL Joins and Aggregations.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-5-sales-cohort-analysis
git commit -m "feat(sales-cohort-analysis): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 5](../roadmaps/Data.md#phase-5) | [CONTINUE TO DATA CHAPTER 6](../roadmaps/Data.md#phase-6)


<a id="data-phase-6-project"></a>
### DATA CHAPTER 6 PROJECT

#### PROJECT: WINDOW FUNCTION ANALYTICS PACK

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Structure multi-step queries clearly and answer time-aware analytic questions without destroying grain.

**Chapter topic:** Advanced SQL

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Window Function Analytics Pack as a focused exercise for Advanced SQL. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **6.1 — Subqueries and CTEs:** Implement or demonstrate Subqueries and CTEs in the shared unit project and add a focused check.
- **6.2 — Window Functions (Ranking, Running Totals, LAG/LEAD):** Implement or demonstrate Window Functions (Ranking, Running Totals, LAG/LEAD) in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a SQL pack using CTEs and window functions for rank, running total, moving average, lag, percent-of-total, and sessionization.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a SQL pack using CTEs and window functions for rank, running total, moving average, lag, percent-of-total, and sessionization.
- Give the user one clear main action and keep all other features secondary.
- Use Advanced SQL in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- PostgreSQL 16.
- DBeaver or pgAdmin.
- SQL window functions.

#### BUILD IT STEP BY STEP

1. Create window-function-analytics-pack with data/raw, data/processed, src, tests, and output folders.
2. Build a SQL pack using CTEs and window functions for rank, running total, moving average, lag, percent-of-total, and sessionization.
3. Use Advanced SQL in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Advanced SQL.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-6-window-function-analytics-pack
git commit -m "feat(window-function-analytics-pack): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 6](../roadmaps/Data.md#phase-6) | [CONTINUE TO DATA CHAPTER 7](../roadmaps/Data.md#phase-7)


<a id="data-phase-7-project"></a>
### DATA CHAPTER 7 PROJECT

#### PROJECT: A/B TEST ANALYZER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Separate signal from noise with descriptive statistics, sampling literacy, and a sane relationship to hypothesis tests and A/B experiments.

**Chapter topic:** Statistics for Analysts

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build A/B Test Analyzer as a focused exercise for Statistics for Analysts. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **7.1 — Descriptive Statistics and Distributions:** Apply Descriptive Statistics and Distributions to the controlled example and record the reasoning and result.
- **7.2 — Sampling, Inference, and A/B Testing Literacy:** Apply Sampling, Inference, and A/B Testing Literacy to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Calculate sample size, confidence interval, lift, and significance for a two-group experiment and warn when assumptions are violated.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Calculate sample size, confidence interval, lift, and significance for a two-group experiment and warn when assumptions are violated.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Statistics for Analysts and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas, SciPy, and Matplotlib.

#### BUILD IT STEP BY STEP

1. Create a-b-test-analyzer with data/raw, data/processed, src, tests, and output folders.
2. Calculate sample size, confidence interval, lift, and significance for a two-group experiment and warn when assumptions are violated.
3. Use a metric connected to Statistics for Analysts and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Statistics for Analysts.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-7-a-b-test-analyzer
git commit -m "feat(a-b-test-analyzer): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 7](../roadmaps/Data.md#phase-7) | [CONTINUE TO DATA CHAPTER 8](../roadmaps/Data.md#phase-8)


<a id="data-phase-8-project"></a>
### DATA CHAPTER 8 PROJECT

#### PROJECT: DIRTY DATASET CLEANER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Wrangle tabular data programmatically - clean types, handle missingness, join/group/reshape - without Excel.

**Chapter topic:** Pandas & Wrangling

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Dirty Dataset Cleaner as a focused exercise for Pandas and Wrangling. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **8.1 — DataFrames, Cleaning, Types, Missing Data:** Implement or demonstrate DataFrames, Cleaning, Types, Missing Data in the shared unit project and add a focused check.
- **8.2 — GroupBy, Merge, Concat, Melt/Pivot:** Implement or demonstrate GroupBy, Merge, Concat, Melt/Pivot in the shared unit project and add a focused check.

#### SPECIFICATION

- Clean a deliberately dirty dataset with explicit rules for nulls, duplicates, types, categories, dates, outliers, and rejected rows.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Clean a deliberately dirty dataset with explicit rules for nulls, duplicates, types, categories, dates, outliers, and rejected rows.
- Give the user one clear main action and keep all other features secondary.
- Use Pandas and Wrangling in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects.

#### BUILD IT STEP BY STEP

1. Create dirty-dataset-cleaner with data/raw, data/processed, src, tests, and output folders.
2. Clean a deliberately dirty dataset with explicit rules for nulls, duplicates, types, categories, dates, outliers, and rejected rows.
3. Use Pandas and Wrangling in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Pandas and Wrangling.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-8-dirty-dataset-cleaner
git commit -m "feat(dirty-dataset-cleaner): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 8](../roadmaps/Data.md#phase-8) | [CONTINUE TO DATA CHAPTER 9](../roadmaps/Data.md#phase-9)


<a id="data-phase-9-project"></a>
### DATA CHAPTER 9 PROJECT

#### PROJECT: EXECUTIVE DATA STORY

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Choose charts that answer questions honestly, then package them into dashboards and narratives people can act on.

**Chapter topic:** Visualization & Storytelling

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Executive Data Story as a focused exercise for Visualization and Storytelling. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **9.1 — Choosing Honest Charts:** Implement or demonstrate Choosing Honest Charts in the shared unit project and add a focused check.
- **9.2 — Dashboards and BI Tools (Tableau / Power BI / Plotly):** Implement or demonstrate Dashboards and BI Tools (Tableau / Power BI / Plotly) in the shared unit project and add a focused check.

#### SPECIFICATION

- Turn one analysis into an executive-ready sequence of three charts: context, key finding, and recommended action.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Turn one analysis into an executive-ready sequence of three charts: context, key finding, and recommended action.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by Visualization and Storytelling, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects.

#### BUILD IT STEP BY STEP

1. Create executive-data-story with data/raw, data/processed, src, tests, and output folders.
2. Turn one analysis into an executive-ready sequence of three charts: context, key finding, and recommended action.
3. Show the part of the data or system explained by Visualization and Storytelling, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for Visualization and Storytelling.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-9-executive-data-story
git commit -m "feat(executive-data-story): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 9](../roadmaps/Data.md#phase-9) | [CONTINUE TO DATA CHAPTER 10](../roadmaps/Data.md#phase-10)


<a id="data-phase-10-project"></a>
### DATA CHAPTER 10 PROJECT

#### PROJECT: PRODUCT FUNNEL EDA

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Turn curiosity into decisions: explore datasets systematically, design metrics that match product reality, and write insight memos that change minds.

**Chapter topic:** EDA, Metrics & Analytics

**Unit storyline:** Continue the **Analyst core** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Product Funnel EDA as a focused exercise for EDA, Metrics, and Analytics. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **10.1 — Exploratory Data Analysis Workflow:** Represent Exploratory Data Analysis Workflow in the design and justify one decision that depends on it.
- **10.2 — Metric Design, Funnels, Cohorts, and Insight Memos:** Represent Metric Design, Funnels, Cohorts, and Insight Memos in the design and justify one decision that depends on it.

#### SPECIFICATION

- Analyze a signup-to-purchase funnel by step, segment, and time; identify the largest drop and test one alternative explanation.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Analyze a signup-to-purchase funnel by step, segment, and time; identify the largest drop and test one alternative explanation.
- Give the user one clear main action and keep all other features secondary.
- Use EDA, Metrics, and Analytics in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas, Matplotlib, and seaborn.

#### BUILD IT STEP BY STEP

1. Create product-funnel-eda with data/raw, data/processed, src, tests, and output folders.
2. Analyze a signup-to-purchase funnel by step, segment, and time; identify the largest drop and test one alternative explanation.
3. Use EDA, Metrics, and Analytics in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for EDA, Metrics, and Analytics.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/analyst/chapter-10-product-funnel-eda
git commit -m "feat(product-funnel-eda): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 10](../roadmaps/Data.md#phase-10) | [CONTINUE TO DATA CHAPTER 11](../roadmaps/Data.md#phase-11)


## Engineering depth

**Shared unit storyline:** Keep one workspace for Engineering depth. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="data-phase-11-project"></a>
### DATA CHAPTER 11 PROJECT

#### PROJECT: NORMALIZED ORDER DATABASE

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Design transactional schemas that stay correct under inserts and updates - keys, relationships, normalization to 3NF, then indexes and query plans that make those schemas fast enough to use.

**Chapter topic:** Relational Modeling (OLTP)

**Unit storyline:** Continue the **Engineering depth** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Normalized Order Database as a focused exercise for Relational Modeling. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **11.1 — Keys, Relationships, and Normalization to 3NF:** Represent Keys, Relationships, and Normalization to 3NF in the design and justify one decision that depends on it.
- **11.2 — Indexes, EXPLAIN, and Query Plans:** Represent Indexes, EXPLAIN, and Query Plans in the design and justify one decision that depends on it.

#### SPECIFICATION

- Design a normalized order system with customers, products, inventory, orders, payments, and shipments plus constraints and indexes.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Design a normalized order system with customers, products, inventory, orders, payments, and shipments plus constraints and indexes.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Relational Modeling to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- PostgreSQL 16.
- DBeaver or pgAdmin.
- SQL DDL and constraints.

#### BUILD IT STEP BY STEP

1. Create normalized-order-database with data/raw, data/processed, src, tests, and output folders.
2. Design a normalized order system with customers, products, inventory, orders, payments, and shipments plus constraints and indexes.
3. Use Relational Modeling to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for Relational Modeling.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/engineer/chapter-11-normalized-order-database
git commit -m "feat(normalized-order-database): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 11](../roadmaps/Data.md#phase-11) | [CONTINUE TO DATA CHAPTER 12](../roadmaps/Data.md#phase-12)


<a id="data-phase-12-project"></a>
### DATA CHAPTER 12 PROJECT

#### PROJECT: STAR SCHEMA WAREHOUSE

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Separate analytical workloads from transactional systems, then model analytics as facts and dimensions with declared grain - including slowly changing dimensions when history matters.

**Chapter topic:** Warehouses & Dimensional Modeling

**Unit storyline:** Continue the **Engineering depth** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Star Schema Warehouse as a focused exercise for Warehouses and Dimensional Modeling. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **12.1 — OLTP vs OLAP and the Data Warehouse:** Represent OLTP vs OLAP and the Data Warehouse in the design and justify one decision that depends on it.
- **12.2 — Star Schema, Snowflake, Grain, Facts & Dimensions:** Represent Star Schema, Snowflake, Grain, Facts & Dimensions in the design and justify one decision that depends on it.
- **12.3 — Slowly Changing Dimensions (SCD Type 1 & 2):** Represent Slowly Changing Dimensions (SCD Type 1 & 2) in the design and justify one decision that depends on it.

#### SPECIFICATION

- Create a star schema with order facts and customer, product, channel, and date dimensions, including slowly changing history.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create a star schema with order facts and customer, product, channel, and date dimensions, including slowly changing history.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Warehouses and Dimensional Modeling to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- PostgreSQL 16.
- dbdiagram.io.
- SQL star schema.

#### BUILD IT STEP BY STEP

1. Create star-schema-warehouse with data/raw, data/processed, src, tests, and output folders.
2. Create a star schema with order facts and customer, product, channel, and date dimensions, including slowly changing history.
3. Use Warehouses and Dimensional Modeling to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for Warehouses and Dimensional Modeling.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/engineer/chapter-12-star-schema-warehouse
git commit -m "feat(star-schema-warehouse): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 12](../roadmaps/Data.md#phase-12) | [CONTINUE TO DATA CHAPTER 13](../roadmaps/Data.md#phase-13)


<a id="data-phase-13-project"></a>
### DATA CHAPTER 13 PROJECT

#### PROJECT: INCREMENTAL ETL PIPELINE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Move data from sources into analytical systems reliably - choosing ETL vs ELT, then building loads that are idempotent, incremental, and stored in efficient columnar formats.

**Chapter topic:** ETL / ELT Pipelines

**Unit storyline:** Continue the **Engineering depth** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Incremental ETL Pipeline as a focused exercise for ETL and ELT Pipelines. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **13.1 — Extract, Transform, Load vs ELT:** Implement or demonstrate Extract, Transform, Load vs ELT in the shared unit project and add a focused check.
- **13.2 — Idempotency, Incremental Loads, and Columnar Formats (Parquet):** Implement or demonstrate Idempotency, Incremental Loads, and Columnar Formats (Parquet) in the shared unit project and add a focused check.

#### SPECIFICATION

- Load changed source rows into a warehouse incrementally with checkpoints, deduplication, upsert, quarantine, and reconciliation.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Load changed source rows into a warehouse incrementally with checkpoints, deduplication, upsert, quarantine, and reconciliation.
- Define a small input format, a transformed output format, and where failed records go.
- Use ETL and ELT Pipelines to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Python 3.12.
- PostgreSQL 16.
- pandas and SQLAlchemy.

#### BUILD IT STEP BY STEP

1. Create incremental-etl-pipeline with data/raw, data/processed, src, tests, and output folders.
2. Load changed source rows into a warehouse incrementally with checkpoints, deduplication, upsert, quarantine, and reconciliation.
3. Use ETL and ELT Pipelines to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for ETL and ELT Pipelines.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/engineer/chapter-13-incremental-etl-pipeline
git commit -m "feat(incremental-etl-pipeline): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 13](../roadmaps/Data.md#phase-13) | [CONTINUE TO DATA CHAPTER 14](../roadmaps/Data.md#phase-14)


<a id="data-phase-14-project"></a>
### DATA CHAPTER 14 PROJECT

#### PROJECT: SCHEDULED AIRFLOW PIPELINE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Schedule and monitor data work as DAGs with retries and sensors, and package runtimes with Docker so the same pipeline runs on your laptop and in prod.

**Chapter topic:** Orchestration (Airflow) & Containers

**Unit storyline:** Continue the **Engineering depth** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Scheduled Airflow Pipeline as a focused exercise for Airflow and Containers. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **14.1 — DAGs, Operators, Sensors, Retries:** Implement or demonstrate DAGs, Operators, Sensors, Retries in the shared unit project and add a focused check.
- **14.2 — Docker for Reproducible Data Work:** Implement or demonstrate Docker for Reproducible Data Work in the shared unit project and add a focused check.

#### SPECIFICATION

- Schedule extract, validate, load, and quality tasks in Airflow with dependencies, retries, backfill, and a visible failed-task path.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Schedule extract, validate, load, and quality tasks in Airflow with dependencies, retries, backfill, and a visible failed-task path.
- Define a small input format, a transformed output format, and where failed records go.
- Use Airflow and Containers to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Python 3.12.
- Apache Airflow.
- PostgreSQL 16.

#### BUILD IT STEP BY STEP

1. Create scheduled-airflow-pipeline with data/raw, data/processed, src, tests, and output folders.
2. Schedule extract, validate, load, and quality tasks in Airflow with dependencies, retries, backfill, and a visible failed-task path.
3. Use Airflow and Containers to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for Airflow and Containers.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/engineer/chapter-14-scheduled-airflow-pipeline
git commit -m "feat(scheduled-airflow-pipeline): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 14](../roadmaps/Data.md#phase-14) | [CONTINUE TO DATA CHAPTER 15](../roadmaps/Data.md#phase-15)


<a id="data-phase-15-project"></a>
### DATA CHAPTER 15 PROJECT

#### PROJECT: DBT ANALYTICS PROJECT

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Treat warehouse SQL transforms as a software project: layered models, ref()/source() lineage, tests, docs, and CI.

**Chapter topic:** Analytics Engineering with dbt

**Unit storyline:** Continue the **Engineering depth** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build dbt Analytics Project as a focused exercise for Analytics Engineering with dbt. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **15.1 — Models, Layers (staging/intermediate/marts), ref() and source():** Implement or demonstrate Models, Layers (staging/intermediate/marts), ref() and source() in the shared unit project and add a focused check.
- **15.2 — Tests, Documentation, and CI for Analytics Code:** Implement or demonstrate Tests, Documentation, and CI for Analytics Code in the shared unit project and add a focused check.

#### SPECIFICATION

- Create dbt sources, staging models, marts, tests, freshness, snapshots, documentation, and lineage for the order warehouse.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create dbt sources, staging models, marts, tests, freshness, snapshots, documentation, and lineage for the order warehouse.
- Give the user one clear main action and keep all other features secondary.
- Use Analytics Engineering with dbt in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- dbt Core.
- PostgreSQL 16.
- SQL and YAML.

#### BUILD IT STEP BY STEP

1. Create dbt-analytics-project with data/raw, data/processed, src, tests, and output folders.
2. Create dbt sources, staging models, marts, tests, freshness, snapshots, documentation, and lineage for the order warehouse.
3. Use Analytics Engineering with dbt in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Analytics Engineering with dbt.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/engineer/chapter-15-dbt-analytics-project
git commit -m "feat(dbt-analytics-project): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 15](../roadmaps/Data.md#phase-15) | [CONTINUE TO DATA CHAPTER 16](../roadmaps/Data.md#phase-16)


<a id="data-phase-16-project"></a>
### DATA CHAPTER 16 PROJECT

#### PROJECT: CLOUD WAREHOUSE MIGRATION

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Be literate across modern cloud analytical platforms (BigQuery, Snowflake, lakehouse patterns), and operate them with cost control, access discipline, and separate environments.

**Chapter topic:** Cloud Data Platforms

**Unit storyline:** Continue the **Engineering depth** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Cloud Warehouse Migration as a focused exercise for Cloud Data Platforms. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **16.1 — BigQuery / Snowflake / Lakehouse Literacy:** Implement or demonstrate BigQuery / Snowflake / Lakehouse Literacy in the shared unit project and add a focused check.
- **16.2 — Cost Control, Access, and Environments (dev/prod):** Implement or demonstrate Cost Control, Access, and Environments (dev/prod) in the shared unit project and add a focused check.

#### SPECIFICATION

- Move the same warehouse models between local PostgreSQL and DuckDB-compatible files while documenting dialect and performance changes.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Move the same warehouse models between local PostgreSQL and DuckDB-compatible files while documenting dialect and performance changes.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Cloud Data Platforms to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects.

#### BUILD IT STEP BY STEP

1. Create cloud-warehouse-migration with data/raw, data/processed, src, tests, and output folders.
2. Move the same warehouse models between local PostgreSQL and DuckDB-compatible files while documenting dialect and performance changes.
3. Use Cloud Data Platforms to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for Cloud Data Platforms.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/engineer/chapter-16-cloud-warehouse-migration
git commit -m "feat(cloud-warehouse-migration): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 16](../roadmaps/Data.md#phase-16) | [CONTINUE TO DATA CHAPTER 17](../roadmaps/Data.md#phase-17)


<a id="data-phase-17-project"></a>
### DATA CHAPTER 17 PROJECT

#### PROJECT: DISTRIBUTED SPARK BATCH JOB

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Understand distributed compute with Spark: partitions, lazy evaluation, and the join/shuffle performance basics that decide whether a job finishes or melts the cluster.

**Chapter topic:** Big Data with Spark

**Unit storyline:** Continue the **Engineering depth** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Distributed Spark Batch Job as a focused exercise for Big Data with Spark. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **17.1 — Distributed Compute, Partitions, and Lazy Evaluation:** Implement or demonstrate Distributed Compute, Partitions, and Lazy Evaluation in the shared unit project and add a focused check.
- **17.2 — Joins, Shuffles, and Performance Basics:** Implement or demonstrate Joins, Shuffles, and Performance Basics in the shared unit project and add a focused check.

#### SPECIFICATION

- Aggregate a partitioned trip dataset with PySpark, avoid unnecessary shuffles, and compare result and runtime with pandas/Polars.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Aggregate a partitioned trip dataset with PySpark, avoid unnecessary shuffles, and compare result and runtime with pandas/Polars.
- Give the user one clear main action and keep all other features secondary.
- Use Big Data with Spark in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- PySpark.
- A local Spark installation.

#### BUILD IT STEP BY STEP

1. Create distributed-spark-batch-job with data/raw, data/processed, src, tests, and output folders.
2. Aggregate a partitioned trip dataset with PySpark, avoid unnecessary shuffles, and compare result and runtime with pandas/Polars.
3. Use Big Data with Spark in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Big Data with Spark.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/engineer/chapter-17-distributed-spark-batch-job
git commit -m "feat(distributed-spark-batch-job): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 17](../roadmaps/Data.md#phase-17) | [CONTINUE TO DATA CHAPTER 18](../roadmaps/Data.md#phase-18)


<a id="data-phase-18-project"></a>
### DATA CHAPTER 18 PROJECT

#### PROJECT: KAFKA STREAMING METRICS

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Understand log-based event streaming: topics, partitions, producers, consumers, delivery semantics, and when batch is still the right answer.

**Chapter topic:** Streaming with Apache Kafka

**Unit storyline:** Continue the **Engineering depth** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Kafka Streaming Metrics as a focused exercise for Streaming with Kafka. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **18.1 — Topics, Partitions, Producers, and Consumers:** Implement or demonstrate Topics, Partitions, Producers, and Consumers in the shared unit project and add a focused check.
- **18.2 — Delivery Semantics and When Streaming Is Worth It:** Implement or demonstrate Delivery Semantics and When Streaming Is Worth It in the shared unit project and add a focused check.

#### SPECIFICATION

- Publish simulated order events to Kafka and calculate windowed order counts and revenue with duplicate and late-event handling.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Publish simulated order events to Kafka and calculate windowed order counts and revenue with duplicate and late-event handling.
- Give the user one clear main action and keep all other features secondary.
- Use Streaming with Kafka in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Apache Kafka.
- Docker Compose for the local broker.

#### BUILD IT STEP BY STEP

1. Create kafka-streaming-metrics with data/raw, data/processed, src, tests, and output folders.
2. Publish simulated order events to Kafka and calculate windowed order counts and revenue with duplicate and late-event handling.
3. Use Streaming with Kafka in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Streaming with Kafka.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/engineer/chapter-18-kafka-streaming-metrics
git commit -m "feat(kafka-streaming-metrics): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 18](../roadmaps/Data.md#phase-18) | [CONTINUE TO DATA CHAPTER 19](../roadmaps/Data.md#phase-19)


## Portfolio and hire

**Shared unit storyline:** Keep one workspace for Portfolio and hire. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="data-phase-19-project"></a>
### DATA CHAPTER 19 PROJECT

#### PROJECT: DATA QUALITY PORTFOLIO

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Prove the full chain with portfolio projects and treat data quality as a first-class feature, not a hope.

**Chapter topic:** Projects, Data Quality & Portfolio

**Unit storyline:** Continue the **Portfolio and hire** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Data Quality Portfolio as a focused exercise for Data Quality and Portfolio. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **19.1 — Building Analyst and Engineer Portfolio Projects:** Implement or demonstrate Building Analyst and Engineer Portfolio Projects in the shared unit project and add a focused check.
- **19.2 — Data Quality, Tests, and Observability:** Implement or demonstrate Data Quality, Tests, and Observability in the shared unit project and add a focused check.

#### SPECIFICATION

- Package one batch and one analytics workflow with automated schema, null, uniqueness, relationship, freshness, and reconciliation checks.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Package one batch and one analytics workflow with automated schema, null, uniqueness, relationship, freshness, and reconciliation checks.
- Define one realistic scenario, its boundaries, and the intended reader for the Data Quality Portfolio.
- Collect or create the exact inputs needed to apply Data Quality and Portfolio; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects.

#### BUILD IT STEP BY STEP

1. Create data-quality-portfolio with data/raw, data/processed, src, tests, and output folders.
2. Package one batch and one analytics workflow with automated schema, null, uniqueness, relationship, freshness, and reconciliation checks.
3. Collect or create the exact inputs needed to apply Data Quality and Portfolio; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Data Quality and Portfolio.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/hire/chapter-19-data-quality-portfolio
git commit -m "feat(data-quality-portfolio): complete chapter 19 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 19](../roadmaps/Data.md#phase-19) | [CONTINUE TO DATA CHAPTER 20](../roadmaps/Data.md#phase-20)


<a id="data-phase-20-project"></a>
### DATA CHAPTER 20 PROJECT

#### PROJECT: TIMED ANALYTICS CASE STUDY

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Communicate SQL skill, analytics judgment, and (for engineers) pipeline design clearly under pressure.

**Chapter topic:** Interview Mastery

**Unit storyline:** Continue the **Portfolio and hire** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Build Timed Analytics Case Study as a focused exercise for Interview Mastery. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **20.1 — SQL Interviews:** Practice explaining or applying SQL Interviews under a timer and record the evidence and correction.
- **20.2 — Analytics Case Interviews:** Practice explaining or applying Analytics Case Interviews under a timer and record the evidence and correction.
- **20.3 — Data Engineering System Design Interviews:** Practice explaining or applying Data Engineering System Design Interviews under a timer and record the evidence and correction.
- **20.4 — Behavioral Interviews and Mock Loops:** Practice explaining or applying Behavioral Interviews and Mock Loops under a timer and record the evidence and correction.

#### SPECIFICATION

- Complete a timed business case from raw data through SQL/Python analysis, chart, recommendation, and spoken explanation.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Complete a timed business case from raw data through SQL/Python analysis, chart, recommendation, and spoken explanation.
- Define one realistic scenario, its boundaries, and the intended reader for the Timed Analytics Case Study.
- Collect or create the exact inputs needed to apply Interview Mastery; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12.
- Jupyter Notebook.
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects.

#### BUILD IT STEP BY STEP

1. Create timed-analytics-case-study with data/raw, data/processed, src, tests, and output folders.
2. Complete a timed business case from raw data through SQL/Python analysis, chart, recommendation, and spoken explanation.
3. Collect or create the exact inputs needed to apply Interview Mastery; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Interview Mastery.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

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
git add -- data/hire/chapter-20-timed-analytics-case-study
git commit -m "feat(timed-analytics-case-study): complete chapter 20 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA CHAPTER 20](../roadmaps/Data.md#phase-20) | [RETURN TO THE DATA COURSE](../roadmaps/Data.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="data-main-portfolio-project"></a>
## DATA MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN CITY MOBILITY ANALYTICS PLATFORM

#### DESCRIPTION

A reproducible data platform that ingests open or generated trip data, checks its quality, builds analytics models, and serves a public dashboard for transport planners and residents.

#### WHO THIS IS FOR

- Transport analyst investigating delays, demand, and service quality
- City planner comparing routes and time periods
- Resident viewing simple, non-technical service trends

#### WHAT USERS CAN DO

- Ingest batch trip files and a simulated live event stream
- Create trustworthy route, stop, time, delay, and ridership metrics
- Show filters, maps or charts, data freshness, and quality status
- Rebuild the platform from raw data with repeatable commands

#### FREE AND OPEN-SOURCE TECH STACK

- Python 3.12, pandas, Polars, and JupyterLab
- PostgreSQL, DuckDB, and SQL
- Apache Airflow, dbt Core, Apache Spark, and Apache Kafka
- Great Expectations Core or Soda Core
- Apache Superset or Streamlit
- Docker Engine or Podman with Compose
- GitHub Actions and GitHub Pages; optional Render free web service for a small dashboard

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Data Thinking:** Define the decision questions, metric owners, event grain, and what the data cannot prove.
2. **Phase 2 - Spreadsheets and Data Literacy:** Create a LibreOffice Calc prototype with clean types, formulas, a pivot table, and one chart.
3. **Phase 3 - Python for Data:** Build a Python CLI that validates a raw CSV and writes a typed, cleaned file.
4. **Phase 4 - SQL Foundations:** Load stops, routes, trips, and events into PostgreSQL and answer basic filtering and grouping questions.
5. **Phase 5 - SQL Joins and Aggregations:** Join the tables to calculate route-level trips, riders, delays, and cancellation rates.
6. **Phase 6 - Advanced SQL:** Add window functions for rolling averages, ranks, period comparisons, and consecutive delay streaks.
7. **Phase 7 - Statistics for Analysts:** Calculate confidence intervals or a controlled before/after test and state assumptions in plain language.
8. **Phase 8 - Pandas and Wrangling:** Create a pandas/Polars cleaning layer for nulls, duplicates, invalid timestamps, and impossible values.
9. **Phase 9 - Visualization and Storytelling:** Build an accessible dashboard with correctly chosen chart types, units, labels, and annotations.
10. **Phase 10 - EDA, Metrics, and Analytics:** Perform EDA, define a metric tree, segment results, and turn one finding into an operational recommendation.
11. **Phase 11 - Relational Modeling:** Normalize the operational PostgreSQL model and enforce keys, uniqueness, checks, and referential integrity.
12. **Phase 12 - Warehouses and Dimensional Modeling:** Create a star schema with trip facts and route, stop, vehicle, and date dimensions.
13. **Phase 13 - ETL and ELT Pipelines:** Build an incremental ETL job with checkpoints, idempotent loads, quarantine, and row-count reconciliation.
14. **Phase 14 - Airflow and Containers:** Schedule the pipeline in Airflow and run every component in local containers with retry and alert behavior.
15. **Phase 15 - Analytics Engineering with dbt:** Create dbt staging, intermediate, and mart models with tests, sources, freshness, and generated lineage.
16. **Phase 16 - Cloud Data Platforms:** Reproduce the warehouse on free/local PostgreSQL or DuckDB and separate platform-specific SQL behind adapters.
17. **Phase 17 - Big Data with Spark:** Process a larger partitioned dataset with local PySpark and compare its cost with pandas/Polars.
18. **Phase 18 - Streaming with Kafka:** Publish simulated vehicle events to Kafka and maintain a windowed delay metric with late-event handling.
19. **PHASE 19 - Data Quality and Portfolio (REQUIRED CAPSTONE-COMPLETION STEP):** Add automated quality gates, a small data catalog, open-source license, sample data, and a polished public dashboard.
20. **PHASE 20 - Interview Mastery (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Complete a timed SQL/analytics case using the platform and explain metric definitions, trade-offs, and failures aloud.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-city-mobility-analytics-platform` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: metric contract, spreadsheet prototype, validated CSV flow, and SQL foundation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "feat(mobility-data): establish metrics and ingestion foundation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: joined analytics, statistics, wrangling, and dashboard story**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "feat(mobility-data): build trusted mobility analytics"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: warehouse model, incremental pipeline, Airflow, and dbt lineage**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "feat(mobility-data): integrate warehouse and orchestrated models"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: portable platform, Spark batch, and Kafka streaming verification**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "test(mobility-data): verify batch and streaming pipelines"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: quality gates, catalog, sample data, and polished dashboard**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "docs(mobility-data): complete city mobility analytics release"
git tag -a mobility-data-v1.0.0 -m "First complete mobility-data release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run the full platform locally with Docker Compose using PostgreSQL, Airflow, Kafka, dbt, and the chosen dashboard.
2. Create a lightweight public-demo mode that reads prebuilt DuckDB/Parquet outputs and contains no personal or secret data.
3. Deploy static charts and the data dictionary to GitHub Pages for a guaranteed free public portfolio page.
4. Optionally deploy the lightweight Streamlit dashboard to a Render free web service and accept its sleep and quota limits.
5. Use a public-repository GitHub Actions workflow to run SQL linting, Python tests, dbt tests, and a small pipeline smoke test for free.
6. Test the published dashboard on phone and desktop and include the last successful data timestamp inside the interface.

> **MAIN PROJECT NAVIGATION:** [REVIEW DATA PHASE 19](../roadmaps/Data.md#phase-19) | [REVIEW DATA PHASE 20](../roadmaps/Data.md#phase-20) | [RETURN TO THE DATA ROADMAP](../roadmaps/Data.md#phase-index)
