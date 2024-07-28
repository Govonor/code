// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './styles/ProductList.css'; // Update to match the file name

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or use static data
    const exampleProducts = [
      { id: 1, name: 'Tomatoes', description: 'Fresh tomatoes', price: 2.5, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Potatoes', description: 'Organic potatoes', price: 1.5, image: 'https://via.placeholder.com/150' }
    ];
    setProducts(exampleProducts);
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
