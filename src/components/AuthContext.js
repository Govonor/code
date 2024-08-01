import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock authentication check (replace with actual auth logic)
    const fetchUser = async () => {
      // Simulate user authentication (replace with actual API call)
      const authenticatedUser = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'John Doe', email: 'john@example.com' }), 1000)
      );
      setUser(authenticatedUser);
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    // Implement your login logic here
    setUser({ name: 'John Doe', email });
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
