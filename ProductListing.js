import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, thumbnail: '/aloe.jpg', category: 'Indoor' },
  { id: 2, name: 'Snake Plant', price: 15, thumbnail: '/snake.jpg', category: 'Indoor' },
  // Add more products
];

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-listing">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.thumbnail} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
