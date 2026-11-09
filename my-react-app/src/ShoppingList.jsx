import { useState } from 'react'

function ShoppingList() {
  const [items, setItems] = useState([])
  const [newItemName, setNewItemName] = useState('')

  const addItem = (event) => {
    event.preventDefault()
    const name = newItemName.trim()

    if (!name) {
      return
    }

    setItems((currentItems) => [
      ...currentItems,
      { id: crypto.randomUUID(), name, purchased: false },
    ])
    setNewItemName('')
  }

  const toggleItem = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item,
      ),
    )
  }

  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const unpurchasedCount = items.filter((item) => !item.purchased).length

  return (
    <section className="shopping-card" id="shopping-list">
      <div className="card-header">
        <div className="list-title">
          <span className="list-icon">⌑</span>
          <div>
            <h3>Shopping list</h3>
            <p>{items.length ? `${unpurchasedCount} items left to get` : 'Plan your next shop'}</p>
          </div>
        </div>
        <button className="more-button" type="button" aria-label="More list options">•••</button>
      </div>
      <form className="add-item-form" onSubmit={addItem}>
        <label className="sr-only" htmlFor="new-item">Add an item</label>
        <input
          id="new-item"
          type="text"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
          placeholder="Add something to your list..."
        />
        <button className="add-button" type="submit" aria-label="Add item">+</button>
      </form>
      <ul className="shopping-items">
        {items.map((item) => (
          <li key={item.id}>
            <label className={item.purchased ? 'purchased' : ''}>
              <input
                type="checkbox"
                checked={item.purchased}
                onChange={() => toggleItem(item.id)}
              />
              <span className="custom-checkbox" />
              <span>{item.name}</span>
            </label>
            <button className="remove-button" type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
              ×
            </button>
          </li>
        ))}
      </ul>
      {!items.length && (
        <div className="empty-list">
          <span aria-hidden="true">✦</span>
          <p>Your list is ready when you are.</p>
        </div>
      )}
    </section>
  )
}

export default ShoppingList
