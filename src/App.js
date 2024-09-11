import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Context Providers
import { CartProvider } from './components/CartContext';
import { AuthProvider, useAuth } from './components/AuthContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar'; // Reintroduced SearchBar
import FarmerProfile from './components/FarmerProfile';

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

// Private Route Component
const PrivateRoute = ({ element, roles }) => {
  const { user } = useAuth();
  const isAuthorized = roles ? roles.includes(user?.role) : true;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!isAuthorized) {
    return <Navigate to="/" />;
  }

  return element;
};

const App = () => {
  return (
    <Router>
      <Header />
      <SearchBar onSearch={(query) => console.log(query)} /> {/* Reintroduced SearchBar */}
      <main>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
              <Route path="/orders" element={<PrivateRoute element={<Orders />} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/farmer-dashboard" element={<PrivateRoute element={<FarmerDashboard />} roles={['farmer']} />} />
              <Route path="/consumer-dashboard" element={<PrivateRoute element={<ConsumerDashboard />} roles={['consumer']} />} />
              <Route path="/farmer-profile/:id" element={<PrivateRoute element={<FarmerProfile />} roles={['farmer']} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/market" element={<Market />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
