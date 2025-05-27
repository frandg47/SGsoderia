import { useState, useEffect } from "react";
import { useGet } from "./useGet";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: userData, loading } = useGet("http://localhost:3000/users");

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    if (loading || !userData) {
      return false;
    }

    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  return { isAuthenticated, login, logout, loading };
}
