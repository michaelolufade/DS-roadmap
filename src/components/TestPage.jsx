import { ArrowLeft, Award, Play, RotateCcw } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGlobal } from "../GlobalContext"
import { nodes as roadmapNodes } from "../data/nodes"
import { getQuestionsByTopic } from "../data/questions/index"
import QuestionView from "./QuestionPage"
import QuizSummaryView from "./QuizSummary"

export default function TestView() {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const { recordAttempt } = useGlobal()

  const targetNode = roadmapNodes.find((n) => n.id === topicId)

  // Quiz State Management
  const [questions, setQuestions] = useState([])
  const [phase, setPhase] = useState("intro") // 'intro' | 'quiz' | 'summary' | 'result'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [testResult, setTestResult] = useState(null)
  const { setIsReview } = useGlobal()

  useEffect(() => {
    if (targetNode?.id) {
      const topicQuestions = getQuestionsByTopic(targetNode.id)
      setQuestions(topicQuestions)
      setCurrentIndex(0)
      setUserAnswers({})
      setPhase("quiz")
    }
  }, [targetNode])

  if (!questions || questions.length === 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#090d16",
          color: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>No questions available for this topic yet</h2>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              backgroundColor: "#1e293b",
              color: "#f8fafc",
              border: "none",
              cursor: "pointer",
              marginTop: 12,
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  // Answer selection handler
  const handleSelectOption = (option) => {
    const currentQ = questions[currentIndex]
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: option,
    }))
  }

  // Next / Previous Navigation Controls
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setPhase("summary")
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // Jump directly to edit a specific question from the summary view
  const handleEditQuestion = (index) => {
    setCurrentIndex(index)
    setPhase("quiz")
  }

  // Grade Quiz and Submit Results
  const handleSubmitQuiz = () => {
    let correctCount = 0

    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount += 1
      }
    })

    const scorePct = Math.round((correctCount / questions.length) * 100)
    const passed = scorePct >= 80 // 80% passing threshold

    // Record score in GlobalContext progress engine
    recordAttempt(targetNode.id, scorePct, passed)

    setTestResult({
      scorePct,
      passed,
      correctCount,
      total: questions.length,
    })

    setPhase("result")
  }

  // Render: Question View Phase
  if (phase === "quiz") {
    const currentQuestion = questions[currentIndex]
    return (
      <QuestionView
        question={currentQuestion}
        currentIndex={currentIndex}
        userAnswers={userAnswers}
        totalQuestions={questions.length}
        selectedAnswer={userAnswers[currentQuestion.id]}
        onSelectOption={handleSelectOption}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onGoToSummary={() => {
          setPhase("summary")
        }}
        topicTitle={targetNode.title}
      />
    )
  }

  // Render: Summary Phase
  if (phase === "summary") {
    return (
      <QuizSummaryView
        questions={questions}
        userAnswers={userAnswers}
        onEditQuestion={handleEditQuestion}
        onSubmitQuiz={handleSubmitQuiz}
        topicTitle={targetNode.title}
      />
    )
  }

  // Render: Final Results Screen
  if (phase === "result") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#090d16",
          color: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div
          style={{
            maxWidth: 480,
            width: "100%",
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: 20,
            padding: 36,
            textAlign: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: testResult.passed
                ? "rgba(52, 211, 153, 0.15)"
                : "rgba(244, 63, 94, 0.15)",
              border: `2px solid ${testResult.passed ? "#34d399" : "#f43f5e"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <Award
              size={32}
              color={testResult.passed ? "#34d399" : "#f43f5e"}
            />
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>
            {testResult.passed ? "Assessment Passed!" : "Needs Improvement"}
          </h2>

          <p style={{ fontSize: 14, color: "#94a3b8", margin: "0 0 24px" }}>
            {testResult.passed
              ? `Great job! You answered ${testResult.correctCount} out of ${testResult.total} questions correctly.`
              : `You scored ${testResult.scorePct}%. Review the material and try again to unlock your progress.`}
          </p>

          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: testResult.passed ? "#34d399" : "#f43f5e",
              marginBottom: 28,
            }}
          >
            {testResult.scorePct}%
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => {
                console.log(topicId, "in click")
                navigate(0)
                setIsReview(false)
              }}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 10,
                backgroundColor: "#1e293b",
                border: "none",
                color: "#f8fafc",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <RotateCcw size={16} /> Retake
            </button>
            <button
              onClick={() => {
                setIsReview(false)
                navigate(-1)
              }}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 10,
                backgroundColor: "#38bdf8",
                border: "none",
                color: "#090d16",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Back to Module
            </button>
            <button
              onClick={() => {
                console.log("its clicking")
                setIsReview(true)
                setCurrentIndex(0)
                setPhase("summary")
              }}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 10,
                backgroundColor: "#1e293b",
                border: "none",
                color: "#f8fafc",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              Review
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#090d16",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          height: 64,
          padding: "0 32px",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1e293b",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            color: "#64748b",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <ArrowLeft size={16} /> Back
        </button>
      </header>

      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div
          style={{
            maxWidth: 480,
            width: "100%",
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: 20,
            padding: 36,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 12,
              color: "#38bdf8",
              backgroundColor: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              display: "inline-block",
              marginBottom: 16,
            }}
          >
            Topic Assessment
          </span>

          <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>
            {targetNode.title}
          </h1>

          <p style={{ fontSize: 14, color: "#94a3b8", margin: "0 0 24px" }}>
            {questions.length} questions to test your proficiency on this topic.
          </p>

          <button
            onClick={() => setPhase("quiz")}
            style={{
              width: "100%",
              padding: "14px 20px",
              borderRadius: 12,
              backgroundColor: "#38bdf8",
              border: "none",
              color: "#090d16",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: "0 4px 14px rgba(56, 189, 248, 0.3)",
            }}
          >
            <Play size={18} fill="#090d16" /> Start Test
          </button>
        </div>
      </main>
    </div>
  )
}
