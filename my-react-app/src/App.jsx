import './App.css'
import ScoreControls from './ScoreControls'
import EditableProfile from './EditableProfile'
import ShoppingList from './ShoppingList'

function App() {
  return (
    <div className="App">
      <h1>useState exercises</h1>
      <ScoreControls />
      <EditableProfile />
      <ShoppingList />
    </div>
  )
}

export default App