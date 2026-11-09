import { useEffect, useState } from 'react'

function TitleCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const previousTitle = document.title
    document.title = `Count: ${count}`

    return () => {
      document.title = previousTitle
    }
  }, [count])

  return (
    <article className="exercise-card">
      <h3>1. Document title</h3>
      <p>The count is shown in the page and browser tab.</p>
      <strong className="exercise-value">{count}</strong>
      <div className="exercise-actions">
        <button type="button" onClick={() => setCount((value) => value - 1)}>-</button>
        <button type="button" onClick={() => setCount((value) => value + 1)}>+</button>
      </div>
    </article>
  )
}

function EscapeSearch() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const clearOnEscape = (event) => {
      if (event.key === 'Escape') {
        setQuery('')
      }
    }

    window.addEventListener('keydown', clearOnEscape)
    return () => window.removeEventListener('keydown', clearOnEscape)
  }, [])

  return (
    <article className="exercise-card">
      <h3>2. Keyboard subscription</h3>
      <p>Press Escape anywhere to clear the search.</p>
      <input
        className="exercise-input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
        aria-label="Search"
      />
    </article>
  )
}

function UserLookup() {
  const [userId, setUserId] = useState('1')
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const loadUser = async () => {
      setIsLoading(true)
      setError('')
      setUser(null)

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error('User not found')
        }

        setUser(await response.json())
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadUser()
    return () => controller.abort()
  }, [userId])

  return (
    <article className="exercise-card">
      <h3>3. Fetch a user</h3>
      <p>Change the ID to load a different user.</p>
      <input
        className="exercise-input"
        type="number"
        min="1"
        max="10"
        value={userId}
        onChange={(event) => setUserId(event.target.value || '1')}
        aria-label="User ID"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className="exercise-error">{error}</p>}
      {user && (
        <div className="user-result">
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </div>
      )}
    </article>
  )
}

function EffectExercises() {
  return (
    <section className="effects-section">
      <h2>Effects exercises</h2>
      <div className="exercise-grid">
        <TitleCounter />
        <EscapeSearch />
        <UserLookup />
      </div>
    </section>
  )
}

export default EffectExercises
