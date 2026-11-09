import { useState } from 'react'

function Counter() {
  // useState returns [currentValue, functionToUpdateValue]
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(current => current + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(current => current - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default Counter