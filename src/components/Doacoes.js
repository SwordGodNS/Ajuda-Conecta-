import React, { useState } from "react";
import styles from "../styles/Doacoes.module.css";

const Doacoes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Doação cadastrada com sucesso!");
    handleCloseModal();
  };

  return (
    <div className={styles.doacoesDashboardsContainer}>
      {/* Título e navegação */}
      <div className={styles.doacoesTopBoardContainer}>
        <nav>
        <ul className={styles.navList}>
            <li className={styles.navListItem}>Admin/</li>
            <li className={styles.navListItem}>
              <strong>Doações</strong>
            </li>
          </ul>
        </nav>
        <h1 className={styles.doacoesH1}>Doações</h1>
      </div>

      {/* Campo de pesquisa */}
      <input
        type="text"
        className={styles.doacoesInput}
        placeholder="Pesquise aqui"
      />

      {/* Lista de doações */}
      <div className={styles.containerDoacoes}>
        <h2 className={styles.h2Doacoes}>Lista de Doações</h2>
        <div className={styles.doacoesData}>
          <p className={styles.doacoesDataBaseFirst}>ID Doação</p>
          <p className={styles.doacoesDataBase}>Doador</p>
          <p className={styles.doacoesDataBase}>Tipo</p>
          <p className={styles.doacoesDataBase}>Data</p>
          <p className={styles.doacoesDataBase}>Local da Entrega</p>
          <p className={styles.doacoesDataBase}>Destinatário</p>
          <p className={styles.doacoesDataBase}>Status</p>
          {/* Botão de adicionar */}
          <button className={styles.add} onClick={handleOpenModal}>
            <img
              className={styles.imgButton}
              src="../img/Add User Male.svg"
              alt="Adicionar Doação"
            />
          </button>
        </div>
        <div className={styles.doacoesLineCont}></div>
      </div>

      {/* Modal de cadastro */}
      {isModalOpen && (
        <div id="overlay" className={styles.overlay}>
          <div id="modal" className={styles.modal}>
            <h4 className={styles.modalTitle}>Cadastrar Nova Doação</h4>
            <form id="doacaoForm" className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="doador" className={styles.label}>
                  Doador
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="doador"
                  name="doador"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cpf" className={styles.label}>
                  CPF
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="data" className={styles.label}>
                  Data
                </label>
                <input
                  className={styles.input}
                  type="date"
                  id="data"
                  name="data"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="tipo" className={styles.label}>
                  Tipo
                </label>
                <select className={styles.input} id="tipo" name="tipo" required>
                  <option value="">Selecione</option>
                  <option value="alimentos">Alimentos não perecíveis</option>
                  <option value="agua">Água potável</option>
                  <option value="roupas">Roupas e Calçados</option>
                  <option value="higiene">Produtos de Higiene Pessoal</option>
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
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="status" className={styles.label}>
                  Status
                </label>
                <select className={styles.input} id="status" name="status" required>
                  <option value="">Selecione</option>
                  <option value="pendente">Pendente</option>
                  <option value="entregue">Entregue</option>
                </select>
              </div>
              <div className={styles.formActions}>
                <button className={styles.submitButton} type="submit">
                  Cadastrar
                </button>
                <button
                  className={styles.closeButton}
                  type="button"
                  onClick={handleCloseModal}
                >
                  Fechar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doacoes;
