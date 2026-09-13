import katex from "katex"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

/**
 * Parses $inline math$ and $$block math$$ using KaTeX
 */
function RenderMathText({ text }) {
  if (!text) return null

  // Split on $$block math$$ or $inline math$
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g)

  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          const math = part.slice(2, -2)
          const html = katex.renderToString(math, { displayMode: true })
          return (
            <div
              key={i}
              style={{ margin: "12px 0" }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )
        } else if (part.startsWith("$") && part.endsWith("$")) {
          const math = part.slice(1, -1)
          const html = katex.renderToString(math, { displayMode: false })
          return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />
        }
        return <span key={i}>{part}</span>
      })}
    </span>
  )
}

/**
 * Main Renderer: Handles Multi-line Code Blocks (```), Inline Code (`), and Math ($)
 */
export default function FormattedText({ content }) {
  if (!content) return null

  // Split string by ```code blocks``` OR `inline code`
  // Capturing group keeps the matches in the resulting array
  const segments = content.split(/(```[\s\S]*?```|`[^`]+`)/g)

  return (
    <span>
      {segments.map((segment, i) => {
        // 1. Multi-line Code Block (```language\n code ```)
        if (segment.startsWith("```") && segment.endsWith("```")) {
          const innerContent = segment.slice(3, -3).trim()
          const firstLineEnd = innerContent.indexOf("\n")

          let language = "javascript"
          let code = innerContent

          // Check if first line specifies a language (e.g. ```python)
          if (firstLineEnd !== -1) {
            const possibleLang = innerContent.slice(0, firstLineEnd).trim()
            if (possibleLang && !possibleLang.includes(" ")) {
              language = possibleLang
              code = innerContent.slice(firstLineEnd + 1)
            }
          }

          return (
            <div
              key={i}
              style={{
                borderRadius: 8,
                overflow: "hidden",
                margin: "12px 0",
                border: "1px solid #1e293b",
              }}
            >
              <SyntaxHighlighter
                language={language}
                style={atomDark}
                customStyle={{
                  backgroundColor: "#05080f",
                  fontSize: "13px",
                  padding: "14px",
                  margin: 0,
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          )
        }

        // 2. Inline Code (`code`)
        if (segment.startsWith("`") && segment.endsWith("`")) {
          const codeText = segment.slice(1, -1)
          return (
            <code
              key={i}
              style={{
                backgroundColor: "rgba(51, 65, 85, 0.5)",
                color: "#38bdf8",
                padding: "2px 6px",
                borderRadius: "4px",
                fontFamily: "monospace",
                fontSize: "0.9em",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              {codeText}
            </code>
          )
        }

        // 3. Regular text & KaTeX Math ($ ... $)
        return <RenderMathText key={i} text={segment} />
      })}
    </span>
  )
}
