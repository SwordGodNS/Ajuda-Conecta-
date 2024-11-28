// src/pages/Catastrofe.js
import React, { useState, useContext } from "react";
import { CatastrofesContext } from "../context/CatastrofesContext"; // Importa o contexto
import styles from "../styles/Catastrofes.module.css"; // Importa os estilos
import { estadosECidades } from "../components/brasil.js"; // Importa estados e cidades

const Catastrofe = () => {
  const {
    catastrofes,
    adicionarCatastrofe,
    removerCatastrofe,
    atualizarCatastrofe,
  } = useContext(CatastrofesContext); // Acessa o contexto

  // Estados para o modal de cadastro/edição
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [editingCatastrofe, setEditingCatastrofe] = useState(null);
  const [novaCatastrofe, setNovaCatastrofe] = useState({
    id: "",
    nome: "",
    estado: "",
    cidade: "",
    tipo: "",
    data: "",
    gravidade: "",
    status: "",
  });

  // Estados para o modal de confirmação de exclusão
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [catastrofeParaDeletar, setCatastrofeParaDeletar] = useState(null);

  // Função para abrir o modal de cadastro
  const handleOpenModal = () => {
    setEditingCatastrofe(null);
    setNovaCatastrofe({
      id: "",
      nome: "",
      estado: "",
      cidade: "",
      tipo: "",
      data: "",
      gravidade: "",
      status: "",
    });
    setEstadoSelecionado("");
    setCidadeSelecionada("");
    setIsModalOpen(true);
  };

  // Função para fechar o modal de cadastro/edição
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCatastrofe(null);
    setNovaCatastrofe({
      id: "",
      nome: "",
      estado: "",
      cidade: "",
      tipo: "",
      data: "",
      gravidade: "",
      status: "",
    });
    setEstadoSelecionado("");
    setCidadeSelecionada("");
  };

  // Função para lidar com as mudanças nos campos do formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovaCatastrofe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para cadastrar uma nova catástrofe
  const handleSubmit = (event) => {
    event.preventDefault();
    adicionarCatastrofe(novaCatastrofe);
    handleCloseModal();
  };

  // Função para atualizar uma catástrofe existente
  const handleUpdate = (event) => {
    event.preventDefault();
    atualizarCatastrofe(editingCatastrofe.id, novaCatastrofe);
    handleCloseModal();
  };

  // Função para abrir o modal de edição com os dados da catástrofe selecionada
  const handleEdit = (catastrofe) => {
    setEditingCatastrofe(catastrofe);
    setNovaCatastrofe(catastrofe);
    setEstadoSelecionado(catastrofe.estado);
    setCidadeSelecionada(catastrofe.cidade);
    setIsModalOpen(true);
  };

  // Função para abrir o modal de confirmação de exclusão
  const handleDelete = (catastrofe) => {
    setCatastrofeParaDeletar(catastrofe);
    setIsConfirmModalOpen(true);
  };

  // Função para confirmar a exclusão
  const confirmDelete = () => {
    if (catastrofeParaDeletar) {
      removerCatastrofe(catastrofeParaDeletar.id);
      setCatastrofeParaDeletar(null);
      setIsConfirmModalOpen(false);
    }
  };

  // Função para cancelar a exclusão
  const cancelDelete = () => {
    setCatastrofeParaDeletar(null);
    setIsConfirmModalOpen(false);
  };

  return (
    <div className={styles.catastrofesContainer}>
      <div className={styles.topBoardContainer}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>Admin/</li>
            <li className={styles.navListItem}>
              <strong>Catástrofes</strong>
            </li>
          </ul>
        </nav>
        <h1 className={styles.headerTitleCatastrofes}>Catástrofes</h1>
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
          alt="Adicionar Catástrofe"
        />
      </button>
      <div className={styles.listContainer}>
        <h2 className={styles.listTitle}>Lista de Catástrofes</h2>
        <div className={styles.dataHeader}>
          <p className={styles.dataColumn}>ID Catástrofe</p>
          <p className={styles.dataColumn}>Nome</p>
          <p className={styles.dataColumn}>Estado</p>
          <p className={styles.dataColumn}>Cidade</p>
          <p className={styles.dataColumn}>Tipo</p>
          <p className={styles.dataColumn}>Data</p>
          <p className={styles.dataColumn}>Gravidade</p>
          <p className={styles.dataColumn}>Status</p>
          <p className={styles.dataColumn}>Ações</p> {/* Nova coluna */}
        </div>
        {catastrofes.map((catastrofe) => (
          <div key={catastrofe.id} className={styles.dataRow}>
            <p className={styles.dataColumn}>{catastrofe.id}</p>
            <p className={styles.dataColumn}>{catastrofe.nome}</p>
            <p className={styles.dataColumn}>{catastrofe.estado}</p>
            <p className={styles.dataColumn}>{catastrofe.cidade}</p>
            <p className={styles.dataColumn}>{catastrofe.tipo}</p>
            <p className={styles.dataColumn}>{catastrofe.data}</p>
            <p className={styles.dataColumn}>{catastrofe.gravidade}</p>
            <p className={styles.dataColumn}>{catastrofe.status}</p>
            <div className={styles.actionButtons}>
              <button
                onClick={() => handleEdit(catastrofe)}
                className={styles.editButton}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(catastrofe)}
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
              {editingCatastrofe ? "Editar Catástrofe" : "Cadastrar Nova Catástrofe"}
            </h4>
            <form
              className={styles.form}
              onSubmit={editingCatastrofe ? handleUpdate : handleSubmit}
            >
              <div className={styles.formGroup}>
                <label htmlFor="nome" className={styles.label}>
                  Nome
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="nome"
                  name="nome"
                  value={novaCatastrofe.nome}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="estado" className={styles.label}>
                  Estado
                </label>
                <select
                  className={styles.inputSelect}
                  id="estado"
                  name="estado"
                  value={estadoSelecionado}
                  onChange={(e) => setEstadoSelecionado(e.target.value)}
                  required
                >
                  <option value="">Selecione um estado</option>
                  {Object.keys(estadosECidades).map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cidade" className={styles.label}>
                  Cidade
                </label>
                <select
                  className={styles.inputSelect}
                  id="cidade"
                  name="cidade"
                  value={cidadeSelecionada}
                  onChange={(e) => setCidadeSelecionada(e.target.value)}
                  required
                  disabled={!estadoSelecionado}
                >
                  <option value="">Selecione uma cidade</option>
                  {estadoSelecionado &&
                    estadosECidades[estadoSelecionado].map((cidade) => (
                      <option key={cidade} value={cidade}>
                        {cidade}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="tipo" className={styles.label}>
                  Tipo
                </label>
                <select
                  className={styles.inputSelect}
                  id="tipo"
                  name="tipo"
                  value={novaCatastrofe.tipo}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Terremoto">Terremoto</option>
                  <option value="Tsunami">Tsunami</option>
                  <option value="Furacão">Furacão</option>
                  <option value="Ciclone">Ciclone</option>
                  <option value="Inundação">Inundação</option>
                  <option value="Deslizamento">Deslizamento</option>
                </select>
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
                  value={novaCatastrofe.data}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="gravidade" className={styles.label}>
                  Gravidade
                </label>
                <select
                  className={styles.inputSelect}
                  id="gravidade"
                  name="gravidade"
                  value={novaCatastrofe.gravidade}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Alta">Alta</option>
                  <option value="Moderada">Moderada</option>
                  <option value="Baixa">Baixa</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="status" className={styles.label}>
                  Status
                </label>
                <select
                  className={styles.inputSelect}
                  id="status"
                  name="status"
                  value={novaCatastrofe.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Aviso Emitido">Aviso Emitido</option>
                  <option value="Em Curso">Em Curso</option>
                  <option value="Sob Controle">Sob Controle</option>
                </select>
              </div>
              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>
                  {editingCatastrofe ? "Atualizar" : "Cadastrar"}
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
      {isConfirmModalOpen && catastrofeParaDeletar && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h4 className={styles.modalTitle}>Confirmar Exclusão</h4>
            <p>
              Você tem certeza que deseja excluir a catástrofe{" "}
              <strong>{catastrofeParaDeletar.nome}</strong>?
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

export default Catastrofe;
