import { createContext, useContext, useState } from "react"
import { useProgress } from "./hooks/useProgress"

const GlobalContext = createContext(null)

export const GlobalProvider = ({ children }) => {
  const [selectedNode, setSelectedNode] = useState(null)
  const [isReview, setIsReview] = useState(false)
  const { progress, recordAttempt, resetProgress } =
    useProgress("data-science-v1")

  return (
    <GlobalContext.Provider
      value={{
        selectedNode,
        setSelectedNode,
        progress,
        recordAttempt,
        resetProgress,
        isReview,
        setIsReview,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider")
  }
  return context
}
