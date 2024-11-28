// src/context/EntregasContext.js
import React, { createContext, useState, useEffect } from "react";

// Cria o contexto
export const EntregasContext = createContext();

// Cria o provedor do contexto
export const EntregasProvider = ({ children }) => {
  const [entregas, setEntregas] = useState(() => {
    // Inicializa com dados do localStorage, se disponíveis
    const storedData = localStorage.getItem("entregas");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    // Atualiza o localStorage sempre que as entregas mudarem
    localStorage.setItem("entregas", JSON.stringify(entregas));
  }, [entregas]);

  // Função para adicionar uma nova entrega
  const adicionarEntrega = (novaEntrega) => {
    setEntregas([...entregas, novaEntrega]);
  };

  // Função para remover uma entrega pelo ID
  const removerEntrega = (id) => {
    console.log("Removendo entrega com ID:", id); // Log para debugging
    setEntregas(entregas.filter((entrega) => entrega.id !== id));
  };

  // Função para editar uma entrega pelo ID
  const editarEntrega = (id, entregaAtualizada) => {
    console.log("Editando entrega com ID:", id, "Dados:", entregaAtualizada); // Log para debugging
    setEntregas(
      entregas.map((entrega) =>
        entrega.id === id ? { ...entrega, ...entregaAtualizada } : entrega
      )
    );
  };

  return (
    <EntregasContext.Provider
      value={{
        entregas,
        adicionarEntrega,
        removerEntrega,
        editarEntrega,
      }}
    >
      {children}
    </EntregasContext.Provider>
  );
};
