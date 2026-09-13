import { ArrowRight, CheckCircle2, X } from "lucide-react"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobal } from "../GlobalContext"
import { getNodeStatus } from "../utils/status"
import Resources from "./Resources"

const NODE_TYPE = {
  info: "info",
  course: "course",
}

function Btn({ selectedTopic, status }) {
  const navigate = useNavigate()
  const { recordAttempt } = useGlobal()

  const isInfo = selectedTopic.nodeType === NODE_TYPE.info
  const isCompleted = status === "Completed"

  const btnTxt = isInfo
    ? isCompleted
      ? "Completed"
      : "Mark as Done"
    : "Test Out"

  function handleInfoClick() {
    if (isCompleted) return
    recordAttempt(selectedTopic.id, 100, true)
  }

  function handleClickTest() {
    navigate(`test/${selectedTopic.id}`)
  }

  return (
    <button
      onClick={isInfo ? handleInfoClick : handleClickTest}
      disabled={isInfo && isCompleted}
      style={{
        width: "100%",
        padding: "14px 20px",
        borderRadius: 12,
        fontWeight: 600,
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        cursor: isInfo && isCompleted ? "default" : "pointer",
        transition: "all 0.2s ease",
        backgroundColor: isCompleted ? "rgba(52, 211, 153, 0.15)" : "#38bdf8",
        color: isCompleted ? "#34d399" : "#090d16",
        border: isCompleted
          ? "1px solid rgba(52, 211, 153, 0.3)"
          : "1px solid transparent",
        boxShadow: isCompleted ? "none" : "0 4px 14px rgba(56, 189, 248, 0.3)",
      }}
      onMouseEnter={(e) => {
        if (!isCompleted) {
          e.currentTarget.style.backgroundColor = "#7dd3fc"
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(56, 189, 248, 0.4)"
        }
      }}
      onMouseLeave={(e) => {
        if (!isCompleted) {
          e.currentTarget.style.backgroundColor = "#38bdf8"
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(56, 189, 248, 0.3)"
        }
      }}
    >
      {isCompleted ? (
        <>
          <CheckCircle2 size={16} /> {btnTxt}
        </>
      ) : (
        <>
          {btnTxt} <ArrowRight size={16} />
        </>
      )}
    </button>
  )
}

export default function NodeContent({ selectedNode, setSelectedNode }) {
  const nodeRef = useRef(null)
  const { progress } = useGlobal()

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        selectedNode &&
        nodeRef.current &&
        !nodeRef.current.contains(event.target)
      ) {
        setSelectedNode(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [selectedNode, setSelectedNode])

  if (!selectedNode) {
    return null
  }

  const isCompleted = getNodeStatus(selectedNode, progress) === "completed"
  const status = isCompleted ? "Completed" : "Incomplete"

  return (
    <div
      ref={nodeRef}
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
        width: 380,
        maxWidth: "100vw",
        backgroundColor: "#0f172a",
        borderLeft: "1px solid #1e293b",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          height: 64,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #1e293b",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          flexShrink: 0,
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#f8fafc",
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {selectedNode.title}
        </h3>
        <button
          onClick={() => setSelectedNode(null)}
          style={{
            background: "transparent",
            border: "none",
            color: "#64748b",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 6,
            borderRadius: 8,
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#f8fafc"
            e.currentTarget.style.backgroundColor = "#1e293b"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#64748b"
            e.currentTarget.style.backgroundColor = "transparent"
          }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Drawer Scrollable Content Area */}
      <div
        style={{
          flex: 1,
          padding: 24,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Status Badge & Description */}
        <div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 12,
              display: "inline-block",
              marginBottom: 12,
              color: isCompleted ? "#34d399" : "#818cf8",
              backgroundColor: isCompleted
                ? "rgba(52, 211, 153, 0.1)"
                : "rgba(129, 140, 248, 0.1)",
              border: `1px solid ${
                isCompleted
                  ? "rgba(52, 211, 153, 0.2)"
                  : "rgba(129, 140, 248, 0.2)"
              }`,
            }}
          >
            {status}
          </span>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#94a3b8",
              margin: 0,
            }}
          >
            {selectedNode.description}
          </p>
        </div>

        <hr style={{ border: 0, borderTop: "1px solid #1e293b", margin: 0 }} />

        <Resources selectedTopic={selectedNode} />
      </div>

      <div
        style={{
          padding: 20,
          borderTop: "1px solid #1e293b",
          backgroundColor: "#0f172a",
          flexShrink: 0,
        }}
      >
        <Btn selectedTopic={selectedNode} status={status} />
      </div>
    </div>
  )
}
