import React, { useState } from 'react';
import axios from 'axios';

const AddProduceForm = ({ onAddProduce }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/produce', { name, price, quantity })
      .then(response => {
        onAddProduce(response.data); // Update parent component
        setName('');
        setPrice('');
        setQuantity('');
      })
      .catch(error => console.error('Error adding produce:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="add-produce-form">
      <h3>Add New Produce</h3>
      <input
        type="text"
        placeholder="Produce Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">Add Produce</button>
    </form>
  );
};

export default AddProduceForm;
