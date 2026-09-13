export function getRandomQuestions(questionSet) {
  const tests = []
  const selected = new Set()

  for (const level of Object.values(questionSet)) {
    let count = 5

    while (count > 0) {
      let randInt = Math.floor(Math.random() * 20)

      let selectedQuestion = level[randInt]

      if (!selected.has(selectedQuestion.id)) {
        selected.add(selectedQuestion.id)
        tests.push(selectedQuestion)
        count--
      }
    }
  }

  tests.sort(() => Math.random() - 0.5)
  return tests
}
