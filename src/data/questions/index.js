// Universal loader for questions
import { metaLearningSkills } from "./meta-learning-skills"
import { readingLiterature } from "./reading-literature"
import { technicalWriting } from "./technical-writing"
import { buildInPublic } from "./build-in-public"
import { algebraPrecalc } from "./algebra-precalc"
import { calculus } from "./calculus"
import { linearAlgebra } from "./linear-algebra"
import { probabilityStatistics } from "./probability-statistics"
import { optimization } from "./optimization"
import { discreteMathAlgorithms } from "./discrete-math-algorithms"
import { pythonMastery } from "./python-mastery"
import { sql } from "./sql"
import { dataStructuresAlgorithms } from "./data-structures-algorithms"
import { gitVersionControl } from "./git-version-control"
import { commandLineLinux } from "./command-line-linux"
import { softwareEngineeringPractices } from "./software-engineering-practices"
import { secondLanguage } from "./second-language"
import { dataWranglingEda } from "./data-wrangling-eda"
import { classicalStatsExperimentation } from "./classical-stats-experimentation"
import { mlFundamentals } from "./ml-fundamentals"
import { fromScratchMl } from "./from-scratch-ml"
import { neuralNetFundamentals } from "./neural-net-fundamentals"
import { cnnRnnTransformers } from "./cnn-rnn-transformers"
import { dlFrameworks } from "./dl-frameworks"
import { trainingDynamics } from "./training-dynamics"
import { nnFromScratch } from "./nn-from-scratch"
import { nlp } from "./nlp"
import { computerVision } from "./computer-vision"
import { timeSeries } from "./time-series"
import { recommenderSystems } from "./recommender-systems"
import { causalInferenceEconometrics } from "./causal-inference-econometrics"
import { reinforcementLearning } from "./reinforcement-learning"
import { mlopsProduction } from "./mlops-production"
import { bigDataEngineering } from "./big-data-engineering"
import { bayesianProbabilisticProgramming } from "./bayesian-probabilistic-programming"
import { domainExpertise } from "./domain-expertise"
import { readPapers } from "./read-papers"
import { reproducePapers } from "./reproduce-papers"
import { openSourceContribution } from "./open-source-contribution"
import { publishResearch } from "./publish-research"
import { conferences } from "./conferences"
import { taste } from "./taste"
import { communication } from "./communication"
import { skepticism } from "./skepticism"
import { breadthDepth } from "./breadth-depth"
import { endToEndBuilding } from "./end-to-end-building"
import { teaching } from "./teaching"
import { ethicsResponsibility } from "./ethics-responsibility"

const questionRegistry = {
  "meta-learning-skills": metaLearningSkills,
  "reading-literature": readingLiterature,
  "technical-writing": technicalWriting,
  "build-in-public": buildInPublic,
  "algebra-precalc": algebraPrecalc,
  calculus: calculus,
  "linear-algebra": linearAlgebra,
  "probability-statistics": probabilityStatistics,
  optimization: optimization,
  "discrete-math-algorithms": discreteMathAlgorithms,
  "python-mastery": pythonMastery,
  sql: sql,
  "data-structures-algorithms": dataStructuresAlgorithms,
  "git-version-control": gitVersionControl,
  "command-line-linux": commandLineLinux,
  "software-engineering-practices": softwareEngineeringPractices,
  "second-language": secondLanguage,
  "data-wrangling-eda": dataWranglingEda,
  "classical-stats-experimentation": classicalStatsExperimentation,
  "ml-fundamentals": mlFundamentals,
  "from-scratch-ml": fromScratchMl,
  "neural-net-fundamentals": neuralNetFundamentals,
  "cnn-rnn-transformers": cnnRnnTransformers,
  "dl-frameworks": dlFrameworks,
  "training-dynamics": trainingDynamics,
  "nn-from-scratch": nnFromScratch,
  nlp: nlp,
  "computer-vision": computerVision,
  "time-series": timeSeries,
  "recommender-systems": recommenderSystems,
  "causal-inference-econometrics": causalInferenceEconometrics,
  "reinforcement-learning": reinforcementLearning,
  "mlops-production": mlopsProduction,
  "big-data-engineering": bigDataEngineering,
  "bayesian-probabilistic-programming": bayesianProbabilisticProgramming,
  "domain-expertise": domainExpertise,
  "read-papers": readPapers,
  "reproduce-papers": reproducePapers,
  "open-source-contribution": openSourceContribution,
  "publish-research": publishResearch,
  conferences: conferences,
  taste: taste,
  communication: communication,
  skepticism: skepticism,
  "breadth-depth": breadthDepth,
  "end-to-end-building": endToEndBuilding,
  teaching: teaching,
  "ethics-responsibility": ethicsResponsibility,
}

export function getQuestionsByTopic(topicId) {
  return questionRegistry[topicId] || []
}
