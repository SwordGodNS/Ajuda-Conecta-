// src/context/DoacoesContext.js
import React, { createContext, useState, useEffect } from "react";

// Cria o contexto
export const DoacoesContext = createContext();

// Cria o provedor do contexto
export const DoacoesProvider = ({ children }) => {
  const [doacoes, setDoacoes] = useState(() => {
    const storedData = localStorage.getItem("doacoes");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("doacoes", JSON.stringify(doacoes));
  }, [doacoes]);

  // Função para adicionar uma doação
  const adicionarDoacao = (novaDoacao) => {
    const novoId = `DO${doacoes.length + 1}`; // Gera um ID único
    setDoacoes([...doacoes, { ...novaDoacao, id: novoId }]);
  };

  // Função para remover uma doação pelo ID
  const removerDoacao = (id) => {
    setDoacoes(doacoes.filter((doacao) => doacao.id !== id));
  };

  // Função para atualizar uma doação pelo ID
  const atualizarDoacao = (id, doacaoAtualizada) => {
    setDoacoes(
      doacoes.map((doacao) =>
        doacao.id === id ? { ...doacao, ...doacaoAtualizada } : doacao
      )
    );
  };

  console.log("DoacoesContext Provider:", {
    doacoes,
    adicionarDoacao,
    removerDoacao,
    atualizarDoacao,
  });

  return (
    <DoacoesContext.Provider
      value={{
        doacoes,
        adicionarDoacao,
        removerDoacao,
        atualizarDoacao,
      }}
    >
      {children}
    </DoacoesContext.Provider>
  );
};
