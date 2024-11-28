// src/pages/Doacoes.js
import React, { useState, useContext } from "react";
import styles from "../styles/Doacoes.module.css";
import { DoacoesContext } from "../context/DoacoesContext"; // Verifique o caminho

const Doacoes = () => {
  const {
    doacoes,
    adicionarDoacao,
    removerDoacao,
    atualizarDoacao,
  } = useContext(DoacoesContext); // Acessa o contexto

  // Estados para o modal de cadastro/edição
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoacao, setEditingDoacao] = useState(null);
  const [novaDoacao, setNovaDoacao] = useState({
    id: "",
    doador: "",
    cpf: "",
    data: "",
    tipo: "",
    local: "",
    destinatario: "",
    status: "",
  });

  // Estados para o modal de confirmação de exclusão
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [doacaoParaDeletar, setDoacaoParaDeletar] = useState(null);

  // Função para abrir o modal de cadastro
  const handleOpenModal = () => {
    setEditingDoacao(null);
    setNovaDoacao({
      id: "",
      doador: "",
      cpf: "",
      data: "",
      tipo: "",
      local: "",
      destinatario: "",
      status: "",
    });
    setIsModalOpen(true);
  };

  // Função para fechar o modal de cadastro/edição
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingDoacao(null);
    setNovaDoacao({
      id: "",
      doador: "",
      cpf: "",
      data: "",
      tipo: "",
      local: "",
      destinatario: "",
      status: "",
    });
  };

  // Função para lidar com as mudanças nos campos do formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovaDoacao((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para cadastrar uma nova doação
  const handleSubmit = (event) => {
    event.preventDefault();
    adicionarDoacao(novaDoacao);
    handleCloseModal();
  };

  // Função para atualizar uma doação existente
  const handleUpdate = (event) => {
    event.preventDefault();
    atualizarDoacao(editingDoacao.id, novaDoacao);
    handleCloseModal();
  };

  // Função para abrir o modal de edição com os dados da doação selecionada
  const handleEdit = (doacao) => {
    setEditingDoacao(doacao);
    setNovaDoacao(doacao);
    setIsModalOpen(true);
  };

  // Função para abrir o modal de confirmação de exclusão
  const handleDelete = (doacao) => {
    setDoacaoParaDeletar(doacao);
    setIsConfirmModalOpen(true);
  };

  // Função para confirmar a exclusão
  const confirmDelete = () => {
    if (doacaoParaDeletar) {
      removerDoacao(doacaoParaDeletar.id);
      setDoacaoParaDeletar(null);
      setIsConfirmModalOpen(false);
    }
  };

  // Função para cancelar a exclusão
  const cancelDelete = () => {
    setDoacaoParaDeletar(null);
    setIsConfirmModalOpen(false);
  };

  return (
    <div className={styles.doacoesDashboardsContainer}>
      <div className={styles.doacoesTopBoardContainer}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>Admin/</li>
            <li className={styles.navListItem}>
              <strong>Doações</strong>
            </li>
          </ul>
        </nav>
        <h1 className={styles.headerTitleCatastrofes}>Doações</h1>
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Pesquise aqui"
      />
      <button className={styles.addButton} onClick={handleOpenModal}>
        <img
          className={styles.imgButtonCatastrofes}
          src="../img/Add User Male.svg"
          alt="Adicionar Doação"
        />
      </button>

      {/* Lista de doações */}
      <div className={styles.containerDoacoes1}>
        <h2 className={styles.h2Doacoes}>Lista de Doações</h2>
        <div className={styles.doacoesData}>
          <p className={styles.doacoesDataBaseFirst}>ID Doação</p>
          <p className={styles.doacoesDataBase}>Doador</p>
          <p className={styles.doacoesDataBase}>Tipo</p>
          <p className={styles.doacoesDataBase}>Data</p>
          <p className={styles.doacoesDataBase}>Local da Entrega</p>
          <p className={styles.doacoesDataBase}>Destinatário</p>
          <p className={styles.doacoesDataBase}>Status</p>
          <p className={styles.doacoesDataBase}>Ações</p> {/* Nova coluna */}
        </div>
        {/* Renderiza as doações cadastradas */}
        {doacoes.map((doacao) => (
          <div key={doacao.id} className={styles.doacaoItem}>
            <p className={styles.doacoesDataBaseFirst}>{doacao.id}</p>
            <p className={styles.doacoesDataBase}>{doacao.doador}</p>
            <p className={styles.doacoesDataBase}>{doacao.tipo}</p>
            <p className={styles.doacoesDataBase}>{doacao.data}</p>
            <p className={styles.doacoesDataBase}>{doacao.local}</p>
            <p className={styles.doacoesDataBase}>{doacao.destinatario}</p>
            <p className={styles.doacoesDataBase}>{doacao.status}</p>
            <div className={styles.actionButtons}>
              <button
                onClick={() => handleEdit(doacao)}
                className={styles.editButton}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(doacao)}
                className={styles.deleteButton}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Cadastro e Edição */}
      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h4 className={styles.modalTitle}>
              {editingDoacao ? "Editar Doação" : "Cadastrar Nova Doação"}
            </h4>
            <form
              className={styles.form}
              onSubmit={editingDoacao ? handleUpdate : handleSubmit}
            >
              <div className={styles.formGroup}>
                <label htmlFor="doador" className={styles.label}>
                  Doador
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="doador"
                  name="doador"
                  value={novaDoacao.doador}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="cpf" className={styles.label}>
                    CPF
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="cpf"
                    name="cpf"
                    maxLength="14"
                    value={novaDoacao.cpf}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="data" className={styles.label}>
                    Data
                  </label>
                  <input
                    className={styles.inputDate}
                    type="date"
                    id="data"
                    name="data"
                    value={novaDoacao.data}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="tipo" className={styles.label}>
                  Tipo
                </label>
                <select
                  className={styles.inputSelect}
                  id="tipo"
                  name="tipo"
                  value={novaDoacao.tipo}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Alimentos não perecíveis">
                    Alimentos não perecíveis
                  </option>
                  <option value="Água potável">Água potável</option>
                  <option value="Roupas e Calçados">Roupas e Calçados</option>
                  <option value="Produtos de Higiene Pessoal">
                    Produtos de Higiene Pessoal
                  </option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="local" className={styles.label}>
                  Local da Entrega
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="local"
                  name="local"
                  value={novaDoacao.local}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="destinatario" className={styles.label}>
                  Destinatário
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="destinatario"
                  name="destinatario"
                  value={novaDoacao.destinatario}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="status" className={styles.label}>
                  Status
                </label>
                <select
                  className={styles.inputSelect}
                  id="status"
                  name="status"
                  value={novaDoacao.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Pendente">Pendente</option>
                  <option value="Entregue">Entregue</option>
                  <option value="A Caminho">A Caminho</option>
                  <option value="Cancelado">Cancelado</option>
                </select>
              </div>
              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>
                  {editingDoacao ? "Atualizar" : "Cadastrar"}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {isConfirmModalOpen && doacaoParaDeletar && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h4 className={styles.modalTitle}>Confirmar Exclusão</h4>
            <p>
              Você tem certeza que deseja excluir a doação de{" "}
              <strong>{doacaoParaDeletar.doador}</strong>?
            </p>
            <div className={styles.formActions}>
              <button
                className={styles.submitButton}
                onClick={confirmDelete}
              >
                Sim
              </button>
              <button
                className={styles.closeButton}
                onClick={cancelDelete}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doacoes;
