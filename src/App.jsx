import { ArrowLeft } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import "./App.css"
import ModuleView from "./components/ModuleView"
import NodeContent from "./components/NodeContent"
import RoadmapDashboard from "./components/RoadmapDashboard"
import { branches, nodes as roadmapNodes } from "./data/nodes"
import { useGlobal } from "./GlobalContext"
import { getOverallProgress } from "./utils/status"

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { progress, resetProgress, selectedNode, setSelectedNode } = useGlobal()

  const view = searchParams.get("branch") ?? "dashboard"

  const overallPct = Math.round(
    getOverallProgress(roadmapNodes, progress) * 100,
  )
  const inModule = view !== "dashboard"

  const handleSelectModule = (branchId) => {
    setSearchParams({ branch: branchId })
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#090d16",
        color: "#f8fafc",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Frosted Dark Header */}
      <header
        style={{
          padding: "14px 24px",
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {inModule && (
            <button
              onClick={() => setSearchParams({})}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "#94a3b8",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "6px 12px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)"
                e.currentTarget.style.color = "#f8fafc"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.05)"
                e.currentTarget.style.color = "#94a3b8"
              }}
            >
              <ArrowLeft size={14} /> Back
            </button>
          )}
          <h1
            style={{
              fontSize: 16,
              fontWeight: 700,
              margin: 0,
              color: "#f8fafc",
              letterSpacing: "-0.2px",
            }}
          >
            {inModule ? branches[view]?.label : "Data Science Roadmap"}
          </h1>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Progress Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              padding: "4px 12px",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#38bdf8",
                boxShadow: "0 0 8px #38bdf8",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#cbd5e1",
              }}
            >
              {overallPct}% complete
            </span>
          </div>

          <button
            onClick={resetProgress}
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "#64748b",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f43f5e"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#64748b"
            }}
          >
            Reset progress
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
        {view === "dashboard" ? (
          <RoadmapDashboard
            progress={progress}
            onSelectModule={handleSelectModule}
          />
        ) : (
          <ModuleView
            branchId={view}
            progress={progress}
            onSelectNode={setSelectedNode}
          />
        )}
      </main>

      <NodeContent
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
    </div>
  )
}
