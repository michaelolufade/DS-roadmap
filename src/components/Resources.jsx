import { BookOpen, ExternalLink, FileText, GraduationCap } from "lucide-react"

const TAG_CONFIG = {
  article: {
    label: "Article",
    icon: FileText,
    color: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.1)",
  },
  course: {
    label: "Course",
    icon: GraduationCap,
    color: "#a855f7",
    bg: "rgba(168, 85, 247, 0.1)",
  },
  book: {
    label: "Book",
    icon: BookOpen,
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.1)",
  },
}

function ResourceItem({ resource }) {
  const config = TAG_CONFIG[resource.tag] || TAG_CONFIG.article
  const TagIcon = config.icon

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 14px",
        borderRadius: 10,
        backgroundColor: "#1e293b",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.8)"
        e.currentTarget.style.borderColor = config.color
        e.currentTarget.style.transform = "translateX(2px)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#1e293b"
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)"
        e.currentTarget.style.transform = "translateX(0)"
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}
      >
        {/* Type Icon Badge */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: config.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <TagIcon size={16} color={config.color} />
        </div>

        {/* Title and Tag Label */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#f8fafc",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {resource.label}
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: config.color,
              textTransform: "uppercase",
              letterSpacing: "0.4px",
            }}
          >
            {config.label}
          </span>
        </div>
      </div>

      <ExternalLink
        size={14}
        color="#64748b"
        style={{ flexShrink: 0, marginLeft: 8 }}
      />
    </a>
  )
}

export default function Resources({ selectedTopic }) {
  const resources = selectedTopic?.resources || []

  return (
    <div style={{ width: "100%" }}>
      <h4
        style={{
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          color: "#64748b",
          margin: "0 0 12px 0",
        }}
      >
        Recommended Learning Resources
      </h4>

      {resources.length === 0 ? (
        <p
          style={{
            fontSize: 13,
            color: "#475569",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          No extra resources listed for this topic.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {resources.map((resource, idx) => (
            <ResourceItem
              key={resource.url || resource.label || idx}
              resource={resource}
            />
          ))}
        </div>
      )}
    </div>
  )
}
