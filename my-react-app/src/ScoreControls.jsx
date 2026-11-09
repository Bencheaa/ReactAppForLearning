import { useState } from 'react'

function ScoreControls() {
  const [score, setScore] = useState(0)

  const increment = (amount) => {
    setScore((currentScore) => currentScore + amount)
  }

  const decrement = () => {
    setScore((currentScore) => Math.max(0, currentScore - 1))
  }

  return (
    <section>
      <h2>Score controls</h2>
      <p>Score: {score}</p>
      <button type="button" onClick={() => increment(1)}>+1</button>
      <button type="button" onClick={decrement}>-1</button>
      <button type="button" onClick={() => increment(5)}>+5</button>
      <button type="button" onClick={() => {
        increment(1)
        increment(1)
        increment(1)
      }}>+3</button>
      <button type="button" onClick={() => setScore(0)} disabled={score === 0}>
        Reset
      </button>
    </section>
  )
}

export default ScoreControls
