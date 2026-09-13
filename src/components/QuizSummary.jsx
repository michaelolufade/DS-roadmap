import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Edit2,
  Send,
  X,
} from "lucide-react"
import { useGlobal } from "../GlobalContext"
import FormattedText from "./FormattedText"

export default function QuizSummaryView({
  questions,
  userAnswers,
  onEditQuestion,
  onSubmitQuiz,
  topicTitle = "Knowledge Evaluation",
}) {
  const { isReview } = useGlobal()
  console.log("isReview: ", isReview)
  const answeredCount = Object.keys(userAnswers).filter(
    (key) => userAnswers[key] !== undefined && userAnswers[key] !== null,
  ).length

  const isComplete = answeredCount === questions.length

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
      {/* Test Header */}
      <header
        style={{
          height: 64,
          padding: "0 32px",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #1e293b",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#38bdf8" }}>
            {topicTitle}
          </span>
          <ChevronRight size={16} color="#64748b" />
          <span style={{ fontSize: 13, color: "#94a3b8" }}>
            Submission Review
          </span>
        </div>

        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: 20,
            backgroundColor: isComplete
              ? "rgba(52, 211, 153, 0.1)"
              : "rgba(245, 158, 11, 0.1)",
            border: `1px solid ${
              isComplete ? "rgba(52, 211, 153, 0.2)" : "rgba(245, 158, 11, 0.2)"
            }`,
            color: isComplete ? "#34d399" : "#f59e0b",
          }}
        >
          {answeredCount} of {questions.length} Answered
        </div>
      </header>

      {/* Main Review Content */}
      <main
        style={{
          flex: 1,
          maxWidth: 720,
          width: "100%",
          margin: "0 auto",
          padding: "40px 24px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>
            Review Your Answers
          </h2>
          <p style={{ fontSize: 14, color: "#94a3b8", margin: 0 }}>
            Check your choices before finalizing your submission.
          </p>
        </div>

        {/* Question Review Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {questions.map((q, idx) => {
            const answer = userAnswers[q.id]
            const hasAnswered = answer !== undefined && answer !== null

            let isCorrect = isReview ? answer === q.correctAnswer : true

            return (
              <div
                key={q.id}
                style={{
                  padding: 20,
                  borderRadius: 14,
                  backgroundColor: "#0f172a",
                  border: "1px solid #1e293b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#64748b",
                      }}
                    >
                      Q{idx + 1}
                    </span>
                    {hasAnswered ? (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: isCorrect ? "#34d399" : "#ff5656",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        {isCorrect ? (
                          <CheckCircle2 size={13} />
                        ) : (
                          <X size={13} />
                        )}{" "}
                        Answered
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: isCorrect ? "#f59e0b" : "#ff5656",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        {isCorrect ? (
                          <AlertCircle size={13} />
                        ) : (
                          <X size={13} />
                        )}{" "}
                        Unanswered
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#f8fafc",
                      margin: "0 0 4px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {q.question}
                  </p>

                  <p
                    style={{
                      fontSize: 13,
                      color: hasAnswered ? "#38bdf8" : "#64748b",
                      margin: 0,
                    }}
                  >
                    {hasAnswered ? (
                      <FormattedText content={`Your Answer: ${answer}`} />
                    ) : (
                      "No answer selected"
                    )}
                  </p>
                </div>

                <button
                  onClick={() => onEditQuestion(idx)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    backgroundColor: "#1e293b",
                    border: "none",
                    color: "#f8fafc",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    flexShrink: 0,
                  }}
                >
                  {isReview ? (
                    "View"
                  ) : (
                    <>
                      <Edit2 size={13} /> Edit
                    </>
                  )}
                </button>
              </div>
            )
          })}
        </div>

        {/* Submit Container */}
        <div
          style={{
            marginTop: 36,
            paddingTop: 24,
            borderTop: "1px solid #1e293b",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={onSubmitQuiz}
            style={{
              width: "100%",
              padding: "16px 24px",
              borderRadius: 12,
              backgroundColor: "#34d399",
              border: "none",
              color: "#090d16",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: "0 4px 14px rgba(52, 211, 153, 0.3)",
            }}
          >
            <Send size={18} /> {isReview ? "Done" : "Submit Assessment"}
          </button>
        </div>
      </main>
    </div>
  )
}
