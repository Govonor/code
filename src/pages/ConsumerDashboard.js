import React, { useState, useEffect } from 'react';

const ConsumerDashboard = () => {
  // Initialize state
  const [products, setProducts] = useState([]);

  // Fetch products from an API or use static data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Example API call (replace with your actual API endpoint)
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ConsumerDashboard;
