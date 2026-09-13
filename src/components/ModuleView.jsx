import { CheckCircle2, Circle, Lock } from "lucide-react"
import { branches, nodes as roadmapNodes } from "../data/nodes"
import { getLockReason, getNodeStatus } from "../utils/status"

const STATUS_ICON = {
  locked: Lock,
  available: Circle,
  completed: CheckCircle2,
}

export default function ModuleView({ branchId, progress, onSelectNode }) {
  const meta = branches[branchId] || { label: branchId, color: "#38bdf8" }
  const topics = roadmapNodes.filter((n) => n.branch === branchId)
  const allNodesById = Object.fromEntries(roadmapNodes.map((n) => [n.id, n]))

  const branchColor = meta.color || "#38bdf8"

  return (
    <div
      style={{
        maxWidth: 680,
        margin: "0 auto",
        padding: "32px 24px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            margin: "0 0 6px",
            color: "#f8fafc",
            letterSpacing: "-0.4px",
          }}
        >
          {meta.label}
        </h2>
        <p style={{ fontSize: 14, color: "#94a3b8", margin: 0 }}>
          {topics.length} topic{topics.length === 1 ? "" : "s"} in this module
        </p>
      </div>

      {/* Vertical Topic Timeline */}
      <div style={{ position: "relative" }}>
        {topics.map((node, i) => {
          const status = getNodeStatus(node, progress)
          const Icon = STATUS_ICON[status]
          const isLast = i === topics.length - 1
          const locked = status === "locked"
          const isCompleted = status === "completed"
          const lockReason = locked ? getLockReason(node, allNodesById) : null

          // Icon container styling based on node state
          const iconBg = isCompleted
            ? "rgba(52, 211, 153, 0.15)"
            : locked
              ? "rgba(15, 23, 42, 0.6)"
              : `${branchColor}1F`

          const iconBorder = isCompleted
            ? "#34d399"
            : locked
              ? "#334155"
              : branchColor

          const iconColor = isCompleted
            ? "#34d399"
            : locked
              ? "#64748b"
              : branchColor

          return (
            <div key={node.id} style={{ display: "flex", gap: 16 }}>
              {/* Timeline Connector Pillar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: iconBg,
                    border: `2px solid ${iconBorder}`,
                    flexShrink: 0,
                    boxShadow: isCompleted
                      ? "0 0 12px rgba(52, 211, 153, 0.2)"
                      : !locked
                        ? `0 0 12px ${branchColor}33`
                        : "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon size={16} color={iconColor} />
                </div>

                {!isLast && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 32,
                      backgroundColor: isCompleted ? "#34d399" : "#1e293b",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                )}
              </div>

              {/* Topic Interactive Card */}
              <button
                onClick={() => !locked && onSelectNode(node)}
                disabled={locked}
                style={{
                  flex: 1,
                  textAlign: "left",
                  marginBottom: isLast ? 0 : 20,
                  padding: "16px 20px",
                  borderRadius: 14,
                  backgroundColor: locked ? "rgba(15, 23, 42, 0.4)" : "#0f172a",
                  border: `1px solid ${
                    locked ? "rgba(255, 255, 255, 0.05)" : "#1e293b"
                  }`,
                  cursor: locked ? "not-allowed" : "pointer",
                  opacity: locked ? 0.55 : 1,
                  boxShadow: locked ? "none" : "0 4px 14px rgba(0, 0, 0, 0.25)",
                  transition:
                    "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!locked) {
                    e.currentTarget.style.transform = "translateX(4px)"
                    e.currentTarget.style.borderColor = branchColor
                    e.currentTarget.style.boxShadow = `0 6px 20px rgba(0, 0, 0, 0.35), 0 0 12px ${branchColor}22`
                  }
                }}
                onMouseLeave={(e) => {
                  if (!locked) {
                    e.currentTarget.style.transform = "translateX(0)"
                    e.currentTarget.style.borderColor = "#1e293b"
                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(0, 0, 0, 0.25)"
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      margin: 0,
                      color: locked ? "#64748b" : "#f8fafc",
                    }}
                  >
                    {node.title}
                  </h4>
                  {isCompleted && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#34d399",
                        backgroundColor: "rgba(52, 211, 153, 0.1)",
                        padding: "2px 8px",
                        borderRadius: 10,
                        border: "1px solid rgba(52, 211, 153, 0.2)",
                      }}
                    >
                      Done
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: 13,
                    color: locked ? "#f43f5e" : "#818cf8",
                    marginTop: 6,
                    marginBottom: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {locked ? (
                    <span style={{ color: "#94a3b8" }}>🔒 {lockReason}</span>
                  ) : (
                    node.description
                  )}
                </p>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
