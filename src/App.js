import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CartPage from './components/Cart';
import Checkout from './components/Checkout';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FarmerDashboard from './pages/FarmerDashboard';
import ConsumerDashboard from './pages/ConsumerDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Market from './pages/Market'; // Import Market component
import Purchase from './pages/Purchase'; // Import Purchase component
import './App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
              <Route path="/consumer-dashboard" element={<ConsumerDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/market" element={<Market />} /> {/* Add route for Market */}
              <Route path="/purchase" element={<Purchase />} /> {/* Add route for Purchase */}
            </Routes>
          </CartProvider>
        </AuthProvider>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
