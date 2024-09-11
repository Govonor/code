// src/pages/Products.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
