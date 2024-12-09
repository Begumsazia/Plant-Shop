import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import { useSelector } from 'react-redux';

const App = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <Router>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart <span>({totalQuantity})</span>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
