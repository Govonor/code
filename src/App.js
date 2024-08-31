import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context Providers
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Checkout from './components/Checkout';  // Correct path for Checkout
import Cart from './components/Cart';  // Correct path for Cart

// Pages
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
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
import Market from './pages/Market';
import Purchase from './pages/Purchase';

// Global Styles
import './App.css';

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
              <Route path="/cart" element={<Cart />} />  {/* Updated path for Cart */}
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
              <Route path="/market" element={<Market />} />
              <Route path="/purchase" element={<Purchase />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
