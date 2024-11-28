// src/pages/Entregas.js
import React, { useState, useContext } from "react";
import { EntregasContext } from "../context/EntregasContext";
import styles from "../styles/Entregas.module.css";

function Entregas() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [entregaSelecionada, setEntregaSelecionada] = useState(null);
  const [novaEntrega, setNovaEntrega] = useState({
    cpf: "",
    cepDoador: "",
    cepDestinatario: "",
    itens: "",
    lote: "",
    data: "",
    status: "Pendente",
  });

  const { entregas, adicionarEntrega, removerEntrega, editarEntrega } = useContext(EntregasContext);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [entregaParaDeletar, setEntregaParaDeletar] = useState(null);

  const handleAddClick = () => {
    setIsRegistering(true);
    setIsEditing(false);
    setNovaEntrega({
      cpf: "",
      cepDoador: "",
      cepDestinatario: "",
      itens: "",
      lote: "",
      data: "",
      status: "Pendente",
    });
    setEntregaSelecionada(null);
  };

  const handleCloseForm = () => {
    setIsRegistering(false);
    setIsEditing(false);
    setEntregaSelecionada(null);
    setNovaEntrega({
      cpf: "",
      cepDoador: "",
      cepDestinatario: "",
      itens: "",
      lote: "",
      data: "",
      status: "Pendente",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaEntrega((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (isEditing) {
      editarEntrega(entregaSelecionada.id, novaEntrega);
    } else {
      adicionarEntrega(novaEntrega);
    }
    handleCloseForm();
  };

  const handleEditClick = (entrega) => {
    setIsEditing(true);
    setIsRegistering(true);
    setEntregaSelecionada(entrega);
    setNovaEntrega(entrega);
  };

  const handleDeleteClick = (entrega) => {
    setEntregaParaDeletar(entrega);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = () => {
    if (entregaParaDeletar) {
      removerEntrega(entregaParaDeletar.id);
      setEntregaParaDeletar(null);
      setIsConfirmModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setEntregaParaDeletar(null);
    setIsConfirmModalOpen(false);
  };

  // Log para verificar as funções do contexto
  console.log("Funções do contexto:", { adicionarEntrega, removerEntrega, editarEntrega });

  return (
    <div className={styles.entregasContainer}>
      <div className={styles.entregasTopBoardContainer}>
        <nav>
          <ul className={styles.entregasNavList}>
            <li className={styles.entregasNavListItem}>Admin/</li>
            <li className={styles.entregasNavListItem}>
              <strong>Entregas</strong>
            </li>
          </ul>
        </nav>
        <h1 className={styles.entregasHeaderTitle}>Entregas</h1>
      </div>
      <input
        type="text"
        className={styles.entregasSearchInput}
        placeholder="Pesquise aqui"
      />
      <button className={styles.entregasAddButton} onClick={handleAddClick}>
        <img
          className={styles.entregasImgButton}
          src="../img/Add User Male.svg"
          alt="Adicionar Entrega"
        />
      </button>

      {/* Lista de Entregas */}
      <div className={styles.entregasListContainer}>
        <h2 className={styles.entregasListTitle}>Lista de Entregas</h2>
        <div className={styles.entregasDataHeader}>
          <p className={styles.entregasDataColumn}>ID</p>
          <p className={styles.entregasDataColumn}>CPF</p>
          <p className={styles.entregasDataColumn}>CEP Doador</p>
          <p className={styles.entregasDataColumn}>CEP Destinatário</p>
          <p className={styles.entregasDataColumn}>Itens</p>
          <p className={styles.entregasDataColumn}>Lote</p>
          <p className={styles.entregasDataColumn}>Data</p>
          <p className={styles.entregasDataColumn}>Status</p>
          <p className={styles.entregasDataColumn}>Ações</p> {/* Nova coluna */}
        </div>
        {/* Renderiza as entregas cadastradas */}
        {entregas.map((entrega) => (
          <div key={entrega.id} className={styles.entregasDataRow}>
            <p className={styles.entregasDataColumn}>{entrega.id}</p>
            <p className={styles.entregasDataColumn}>{entrega.cpf}</p>
            <p className={styles.entregasDataColumn}>{entrega.cepDoador}</p>
            <p className={styles.entregasDataColumn}>{entrega.cepDestinatario}</p>
            <p className={styles.entregasDataColumn}>{entrega.itens}</p>
            <p className={styles.entregasDataColumn}>{entrega.lote}</p>
            <p className={styles.entregasDataColumn}>{entrega.data}</p>
            <p className={styles.entregasDataColumn}>{entrega.status}</p>
            <div className={styles.entregasActionButtons}>
              <button
                onClick={() => handleEditClick(entrega)}
                className={styles.editButton}
              >
                Editar
              </button>
              <button
                onClick={() => handleDeleteClick(entrega)}
                className={styles.deleteButton}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Cadastro e Edição */}
      {isRegistering && (
        <div className={styles.entregasModal}>
          <div className={styles.entregasModalContent}>
            <h2>{isEditing ? "Editar Entrega" : "Cadastrar Nova Entrega"}</h2>
            <form onSubmit={handleSave}>
              {/* Removido o campo de ID */}
              <div className={styles.entregasFormGroup}>
                <label>CPF:</label>
                <input
                  type="text"
                  name="cpf"
                  value={novaEntrega.cpf}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.entregasFormGroup}>
                <label>CEP Doador:</label>
                <input
                  type="text"
                  name="cepDoador"
                  value={novaEntrega.cepDoador}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.entregasFormGroup}>
                <label>CEP Destinatário:</label>
                <input
                  type="text"
                  name="cepDestinatario"
                  value={novaEntrega.cepDestinatario}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.entregasFormGroup}>
                <label>Itens:</label>
                <input
                  type="text"
                  name="itens"
                  value={novaEntrega.itens}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.entregasFormGroup}>
                <label>Lote:</label>
                <input
                  type="text"
                  name="lote"
                  value={novaEntrega.lote}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.entregasInlineGroup}>
                <div className={styles.entregasFormGroupInline}>
                  <label>Data de Entrega:</label>
                  <input
                    type="date"
                    name="data"
                    value={novaEntrega.data}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.entregasFormGroupInline}>
                  <label>Status:</label>
                  <select
                    name="status"
                    value={novaEntrega.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="Pendente">Pendente</option>
                    <option value="Entregue">Entregue</option>
                  </select>
                </div>
              </div>
              <div className={styles.entregasModalButtons}>
                <button type="submit" className={styles.entregasSaveButton}>
                  {isEditing ? "Atualizar" : "Salvar"}
                </button>
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className={styles.entregasCancelButton}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {isConfirmModalOpen && entregaParaDeletar && (
        <div className={styles.entregasModal}>
          <div className={styles.entregasModalContent}>
            <h2>Confirmar Exclusão</h2>
            <p>
              Você tem certeza que deseja excluir a entrega <strong>ID: {entregaParaDeletar.id}</strong>?
            </p>
            <div className={styles.entregasModalButtons}>
              <button
                onClick={confirmDelete}
                className={styles.entregasSaveButton}
              >
                Sim
              </button>
              <button
                onClick={cancelDelete}
                className={styles.entregasCancelButton}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Entregas;
