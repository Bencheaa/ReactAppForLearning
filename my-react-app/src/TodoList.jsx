import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      setTodos(currentTodos => [
        ...currentTodos,
        { id: Date.now(), text: inputValue, completed: false },
      ])
      setInputValue('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(currentTodos => currentTodos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h3>My Todo List</h3>
      
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <button
              type="button"
              aria-pressed={todo.completed}
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </button>
            <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <p>Total todos: {todos.length} | Completed: {todos.filter(t => t.completed).length}</p>
    </div>
  )
}

export default TodoList