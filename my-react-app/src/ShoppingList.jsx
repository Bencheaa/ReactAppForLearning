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
    <section>
      <h2>Shopping list</h2>
      <form onSubmit={addItem}>
        <label>
          Item
          <input
            type="text"
            value={newItemName}
            onChange={(event) => setNewItemName(event.target.value)}
          />
        </label>
        <button type="submit">Add item</button>
      </form>
      <p>Unpurchased items: {unpurchasedCount}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.purchased}
                onChange={() => toggleItem(item.id)}
              />
              {item.name}
            </label>
            <button type="button" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShoppingList
