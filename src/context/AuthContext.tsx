import {  createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email, password) => {
    if (!email || !password) return;

    const demoUser = {
      id: email,
      name:email.split("@")[0],
      email,
    };

    setUser(demoUser);
    localStorage.setItem("auth",JSON.stringify(demoUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
  }

  return <AuthContext.Provider value={{user,login,logout,isAuthenticated :!!user}}>
    {children}
  </AuthContext.Provider> ;
};

export const useAuth = () => {
    const user = useContext(AuthContext);
    return user;
}