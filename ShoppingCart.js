import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, deleteItem } from '../cartSlice';

const ShoppingCart = () => {
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart">
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <img src={item.thumbnail} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => dispatch(increment(item.id))}>+</button>
                <button onClick={() => dispatch(decrement(item.id))}>-</button>
                <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice}</h3>
          <button onClick={() => alert('Coming Soon')}>Checkout</button>
          <button onClick={() => (window.location.href = '/')}>Continue Shopping</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
