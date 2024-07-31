// src/contexts/LoadingContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Define o tempo de carregamento para 1 segundo

      return () => clearTimeout(timer);
    }
  }, [loading, setLoading]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
