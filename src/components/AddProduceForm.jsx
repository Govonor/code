import React, { useState } from 'react';
import axios from 'axios';

const AddProduceForm = ({ onAddProduce }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/produce', {
        name,
        price: parseFloat(price), // Convert price to number
        quantity: parseInt(quantity, 10), // Convert quantity to number
      });

      onAddProduce(response.data); // Update parent component
      setName('');
      setPrice('');
      setQuantity('');
      setSuccess('Produce added successfully!'); // Success message
    } catch (error) {
      setError('Error adding produce. Please try again.'); // Error handling
      console.error('Error adding produce:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-produce-form">
      <h3>Add New Produce</h3>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
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
