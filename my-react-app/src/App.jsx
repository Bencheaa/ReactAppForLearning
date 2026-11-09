import './App.css'
import ScoreControls from './ScoreControls'
import EditableProfile from './EditableProfile'
import ShoppingList from './ShoppingList'
import EffectExercises from './EffectExercises'

function App() {
  return (
    <div className="app-shell">
      <main className="dashboard">
        <section className="content-grid">
          <div>
            <h2>Shopping list</h2>
            <ShoppingList />
          </div>
          <div className="side-column">
            <h2>Your progress</h2>
            <ScoreControls />
            <EditableProfile />
          </div>
        </section>
        <EffectExercises />
      </main>
    </div>
  )
}

export default App