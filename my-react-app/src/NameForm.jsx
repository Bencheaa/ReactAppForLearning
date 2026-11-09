import { useState } from 'react'

function NameForm() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page refresh
    setSubmittedName(name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name here..."
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      {submittedName && (
        <p>Hello, {submittedName}! Nice to meet you.</p>
      )}
    </div>
  )
}

export default NameForm