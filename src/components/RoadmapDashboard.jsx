import { Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { nodes as roadmapNodes, branches } from "../data/nodes";
import { getModuleStatus, getBranchProgress } from "../utils/status";

const STATUS_CONFIG = {
  locked: { label: "Locked", color: "#64748b", bg: "rgba(100, 116, 139, 0.1)" },
  available: { label: "Ready to start", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.1)" },
  "in-progress": { label: "In progress", color: "#818cf8", bg: "rgba(129, 140, 248, 0.1)" },
  completed: { label: "Completed", color: "#34d399", bg: "rgba(52, 211, 153, 0.1)" },
};

export default function RoadmapDashboard({ progress, onSelectModule }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 20,
        padding: 32,
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {Object.entries(branches).map(([branchId, meta]) => {
        const status = getModuleStatus(branchId, roadmapNodes, progress);
        const pct = Math.round(
          getBranchProgress(roadmapNodes, progress, branchId) * 100
        );
        const nodeCount = roadmapNodes.filter((n) => n.branch === branchId).length;
        const locked = status === "locked";
        const statusMeta = STATUS_CONFIG[status] || STATUS_CONFIG.available;

        // Dynamic border/accent colors based on branch metadata or status
        const accentColor = meta.color || "#4f46e5";

        return (
          <button
            key={branchId}
            onClick={() => onSelectModule(branchId)}
            disabled={locked}
            style={{
              textAlign: "left",
              backgroundColor: locked ? "rgba(15, 23, 42, 0.4)" : "#0f172a",
              border: `1px solid ${locked ? "rgba(255, 255, 255, 0.05)" : "#1e293b"}`,
              borderRadius: 16,
              padding: 24,
              cursor: locked ? "not-allowed" : "pointer",
              opacity: locked ? 0.55 : 1,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              position: "relative",
              overflow: "hidden",
              boxShadow: locked
                ? "none"
                : "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03)",
              transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!locked) {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.boxShadow = `0 14px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px ${accentColor}33`;
              }
            }}
            onMouseLeave={(e) => {
              if (!locked) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#1e293b";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03)";
              }
            }}
          >
            {/* Header: Label & Status Icon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  margin: 0,
                  color: locked ? "#64748b" : "#f8fafc",
                  letterSpacing: "-0.3px",
                }}
              >
                {meta.label}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: locked ? "rgba(255, 255, 255, 0.03)" : `${accentColor}1A`,
                  border: `1px solid ${locked ? "transparent" : `${accentColor}33`}`,
                }}
              >
                {locked ? (
                  <Lock size={15} color="#64748b" />
                ) : status === "completed" ? (
                  <CheckCircle2 size={16} color="#34d399" />
                ) : (
                  <ArrowRight size={16} color={accentColor} />
                )}
              </div>
            </div>

            {/* Status Pill Badge & Topic Count */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: statusMeta.color,
                  backgroundColor: statusMeta.bg,
                  padding: "4px 10px",
                  borderRadius: 12,
                  border: `1px solid ${statusMeta.color}33`,
                }}
              >
                {statusMeta.label}
              </span>

              <span style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>
                {nodeCount} topic{nodeCount === 1 ? "" : "s"}
              </span>
            </div>

            {/* Progress Track */}
            <div style={{ width: "100%", marginTop: 4 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: locked ? "#475569" : "#94a3b8",
                }}
              >
                <span>Progress</span>
                <span>{pct}%</span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "#1e293b",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    borderRadius: 3,
                    background: locked
                      ? "#334155"
                      : `linear-gradient(90deg, ${accentColor}, #38bdf8)`,
                    transition: "width 300ms ease",
                  }}
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}