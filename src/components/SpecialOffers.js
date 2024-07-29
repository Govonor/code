import React from 'react';

const SpecialOffers = ({ offers }) => {
  return (
    <div className="special-offers">
      <ul>
        {offers.length > 0 ? (
          offers.map(offer => (
            <li key={offer.id}>
              <h4>{offer.title}</h4>
              <p>Discount: {offer.discount}% off</p>
              <p>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <p>No special offers available.</p>
        )}
      </ul>
    </div>
  );
};

export default SpecialOffers;
