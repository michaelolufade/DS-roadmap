import { useState, useEffect, useCallback } from "react"

const STORAGE_PREFIX = "progress:"

export function useProgress(roadmapId) {
  const key = `${STORAGE_PREFIX}${roadmapId}`

  const [progress, setProgress] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(progress))
    } catch {}
  }, [progress, key])

  const recordAttempt = useCallback((nodeId, score, passed) => {
    setProgress((prev) => ({
      ...prev,
      [nodeId]: {
        status: passed ? "completed" : (prev[nodeId]?.status ?? "available"),
        bestScore: Math.max(score, prev[nodeId]?.bestScore ?? 0),
        attempts: (prev[nodeId]?.attempts ?? 0) + 1,
        completedAt: passed
          ? (prev[nodeId]?.completedAt ?? Date.now())
          : prev[nodeId]?.completedAt,
      },
    }))
  }, [])

  const resetProgress = useCallback(() => {
    setProgress({})
  }, [])

  return { progress, recordAttempt, resetProgress }
}
