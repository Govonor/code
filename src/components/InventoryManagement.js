import React, { useState } from 'react';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    { item: 'Tomatoes', quantity: 50 },
    { item: 'Potatoes', quantity: 100 },
  ]);
  const [newItem, setNewItem] = useState('');
  const [newQuantity, setNewQuantity] = useState('');

  const handleAddItem = () => {
    if (newItem && newQuantity) {
      setInventory([...inventory, { item: newItem, quantity: parseInt(newQuantity) }]);
      setNewItem('');
      setNewQuantity('');
    }
  };

  return (
    <div className="inventory-management">
      <h3>Current Inventory</h3>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>{item.item}: {item.quantity} units</li>
        ))}
      </ul>
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Item name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default InventoryManagement;
