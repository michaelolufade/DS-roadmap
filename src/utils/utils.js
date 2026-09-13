export function getRandomQuestions(questionSet) {
  const tests = []
  const selected = new Set()

  for (const level of Object.values(questionSet)) {
    let count = 5

    while (count > 0) {
      let randInt = Math.floor(Math.random() * 20)

      let selectedQuestion = level[randInt]

      selectedQuestion = {
        ...selectedQuestion,
        options: shuffleArray(selectedQuestion.options),
      }

      if (!selected.has(selectedQuestion.id)) {
        selected.add(selectedQuestion.id)
        tests.push(selectedQuestion)
        count--
      }
    }
  }

  return shuffleArray(tests)
}

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
