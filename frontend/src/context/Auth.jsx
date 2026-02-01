import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize with null or check sessionStorage on refresh
  const [user, setUser] = useState(null); 

  const login = (userData) => setUser(userData); // userData = { name: 'Ali', role: 'admin' }
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);