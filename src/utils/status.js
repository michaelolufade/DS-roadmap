// Node status is always DERIVED from progress + dependsOn, never stored as
// its own field. This guarantees it can never drift out of sync — e.g. if
// you manually edit localStorage or add a new prerequisite to a node later,
// status just recalculates correctly on the next render.

export function getNodeStatus(node, progress) {
  if (progress[node.id]?.status === "completed") return "completed"

  const prereqsMet = node.dependsOn.every(
    (depId) => progress[depId]?.status === "completed",
  )

  return prereqsMet ? "available" : "locked"
}

// Module (branch) status for the dashboard cards. A module is "locked"
// until at least one of its nodes has its cross-module prerequisites met -
// it doesn't need ALL prereqs done, just enough to have a foothold.
export function getModuleStatus(branchId, nodes, progress) {
  const branchNodes = nodes.filter((n) => n.branch === branchId)
  if (branchNodes.length === 0) return "locked"

  const reachable = branchNodes.some(
    (n) => getNodeStatus(n, progress) !== "locked",
  )
  if (!reachable) return "locked"

  const completedCount = branchNodes.filter(
    (n) => getNodeStatus(n, progress) === "completed",
  ).length

  if (completedCount === branchNodes.length) return "completed"
  if (completedCount > 0) return "in-progress"
  return "available"
}

export function getBranchProgress(nodes, progress, branchId) {
  const branchNodes = nodes.filter((n) => n.branch === branchId)
  if (branchNodes.length === 0) return 0

  const completed = branchNodes.filter(
    (n) => progress[n.id]?.status === "completed",
  ).length

  return completed / branchNodes.length
}

export function getOverallProgress(nodes, progress) {
  if (nodes.length === 0) return 0

  const completed = nodes.filter(
    (n) => progress[n.id]?.status === "completed",
  ).length

  return completed / nodes.length
}

export function getLockReason(node, allNodesById) {
  const missing = node.dependsOn.filter((depId) => depId) // all deps, resolved below
  const missingTitles = node.dependsOn
    .map((depId) => allNodesById[depId]?.title)
    .filter(Boolean)

  if (missingTitles.length === 0) return null
  return `Complete ${missingTitles.join(", ")} first`
}
