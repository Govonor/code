import React from 'react';

const Wishlist = ({ wishlist }) => {
  return (
    <div className="wishlist">
      <ul>
        {wishlist.length > 0 ? (
          wishlist.map(item => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default Wishlist;
