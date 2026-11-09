import './App.css'
import Welcome from './Welcome'
import Counter from './Counter'
import NameForm from './NameForm'
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <h1>React notes</h1>
      <Welcome name="Alice" age={25} />
      <Counter />
      <NameForm />
      <TodoList />
    </div>
  )
}

export default App