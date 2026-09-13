import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ListChecks,
} from "lucide-react"
import { useGlobal } from "../GlobalContext"
import FormattedText from "./FormattedText"

export default function QuestionView({
  question,
  currentIndex,
  userAnswers,
  totalQuestions,
  selectedAnswer,
  onSelectOption,
  onNext,
  onPrevious,
  onGoToSummary,
  topicTitle = "Knowledge Evaluation",
}) {
  const { isReview } = useGlobal()
  const answeredCount = Object.keys(userAnswers).filter(
    (key) => userAnswers[key] !== undefined && userAnswers[key] !== null,
  ).length

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
      {/* Test Header Component */}
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
            Question {currentIndex + 1} of {totalQuestions}
          </span>
        </div>

        {/* Right side controls: Progress & Direct Summary Jump Button */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: 20,
              backgroundColor: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              color: "#38bdf8",
            }}
          >
            {isReview
              ? 100
              : Math.round((answeredCount / totalQuestions) * 100)}
            % Complete
          </div>

          <button
            onClick={onGoToSummary}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 8,
              backgroundColor: "#1e293b",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              color: "#f8fafc",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#334155"
              e.currentTarget.style.borderColor = "#38bdf8"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#1e293b"
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)"
            }}
          >
            <ListChecks size={16} color="#38bdf8" /> Review Summary
          </button>
        </div>
      </header>

      {/* Main Body Content */}
      <main
        style={{
          flex: 1,
          maxWidth: 720,
          width: "100%",
          margin: "0 auto",
          padding: "40px 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Question Box */}
          <div
            style={{
              padding: 24,
              borderRadius: 16,
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <FormattedText content={question.body} />
          </div>

          {/* Options Grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {question.options.map((option, idx) => {
              const isSelected = selectedAnswer === option
              const isCorrect = option === question.correctAnswer

              let borderColor = isSelected ? "#38bdf8" : "#1e293b"
              let textColor = isSelected ? "#38bdf8" : "#f8fafc"
              let bgColor = isSelected ? "rgba(56, 189, 248, 0.1)" : "#0f172a"

              // 2. Review State (isReview === true)
              if (isReview) {
                if (isCorrect) {
                  // Highlight the correct answer in green
                  borderColor = "#34d399"
                  textColor = "#34d399"
                  bgColor = "rgba(52, 211, 153, 0.1)"
                } else if (isSelected && !isCorrect) {
                  // Highlight selected wrong answer in red
                  borderColor = "#f43f5e"
                  textColor = "#f43f5e"
                  bgColor = "rgba(244, 63, 94, 0.1)"
                } else {
                  // Dim remaining unselected wrong options
                  borderColor = "#1e293b"
                  textColor = "#64748b"
                  bgColor = "#090d16"
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isReview}
                  onClick={() => onSelectOption(option)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "16px 20px",
                    borderRadius: 12,
                    backgroundColor: bgColor,
                    border: `1px solid ${borderColor}`,
                    color: textColor,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    boxShadow: isSelected
                      ? "0 0 15px rgba(56, 189, 248, 0.15)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected && !isReview) {
                      e.currentTarget.style.borderColor = "#334155"
                      e.currentTarget.style.backgroundColor =
                        "rgba(30, 41, 59, 0.5)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected && !isReview) {
                      e.currentTarget.style.borderColor = "#1e293b"
                      e.currentTarget.style.backgroundColor = "#0f172a"
                    }
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        backgroundColor: isSelected
                          ? "#38bdf8"
                          : "rgba(255, 255, 255, 0.05)",
                        color: isSelected ? "#090d16" : "#94a3b8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <FormattedText content={option} />
                  </div>

                  {isSelected && <CheckCircle2 size={18} color="#38bdf8" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Bottom Navigation Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid #1e293b",
          }}
        >
          <button
            onClick={onPrevious}
            disabled={currentIndex === 0}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 20px",
              borderRadius: 10,
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              color: currentIndex === 0 ? "#475569" : "#f8fafc",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              fontWeight: 600,
              fontSize: 14,
              opacity: currentIndex === 0 ? 0.5 : 1,
            }}
          >
            <ArrowLeft size={16} /> Previous
          </button>

          <button
            onClick={onNext}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 10,
              backgroundColor: "#38bdf8",
              border: "none",
              color: "#090d16",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 14,
              boxShadow: "0 4px 14px rgba(56, 189, 248, 0.3)",
            }}
          >
            {currentIndex === totalQuestions - 1 ? "Review Answers" : "Next"}{" "}
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  )
}
