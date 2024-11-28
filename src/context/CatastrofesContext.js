// src/context/CatastrofesContext.js
import React, { createContext, useState, useEffect } from "react";

export const CatastrofesContext = createContext();

export const CatastrofesProvider = ({ children }) => {
  const [catastrofes, setCatastrofes] = useState(() => {
    const storedData = localStorage.getItem("catastrofes");
    return storedData ? JSON.parse(storedData) : [];
  });

  const adicionarCatastrofe = (novaCatastrofe) => {
    const updatedCatastrofes = [...catastrofes, novaCatastrofe];
    setCatastrofes(updatedCatastrofes);
    localStorage.setItem("catastrofes", JSON.stringify(updatedCatastrofes));
  };

  return (
    <CatastrofesContext.Provider value={{ catastrofes, adicionarCatastrofe }}>
      {children}
    </CatastrofesContext.Provider>
  );
};
