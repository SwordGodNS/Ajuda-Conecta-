import React, { useState } from "react";
import styles from "../styles/User.module.css";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cpf, setCpf] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formatCpf = (value) => {
    const cleanValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    return cleanValue
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
  };

  const handleCpfChange = (event) => {
    const input = event.target.value;
    setCpf(formatCpf(input)); // Aplica a formatação ao CPF
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Usuário cadastrado com sucesso!");
    handleCloseModal();
  };

  return (
    <div className={styles.catastrofesContainer}>
    <div className={styles.topBoardContainer}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Admin/</li>
          <li className={styles.navListItem}>
            <strong>Pontos de Coleta</strong>
          </li>
        </ul>
      </nav>
      <h1 className={styles.headerTitleCatastrofes}>Pontos de Coleta</h1>
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
      <h2 className={styles.listTitle}>Lista de Pontos de Coleta</h2>
      <div className={styles.dataHeader}>
        <p className={styles.dataColumn}>ID Ponto</p>
        <p className={styles.dataColumn}>Nome</p>
        <p className={styles.dataColumn}>Estado</p>
        <p className={styles.dataColumn}>Cidade</p>
        <p className={styles.dataColumn}>Rua</p>
        <p className={styles.dataColumn}>Número</p>
        <p className={styles.dataColumn}>Hórario de Funcionamento</p>
        <p className={styles.dataColumn}>Doações Aceitas</p>
        <p className={styles.dataColumn}>Status</p>
      </div>
    </div>
      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h4 className={styles.modalTitle}>Cadastrar novo ponto</h4>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="username">
                  Nome
                </label>
                <input
                  className={styles.input}
                  id="username"
                  type="text"
                  required
                />
              </div>
              <label className={styles.label} htmlFor="username">
                  Estado
                </label>
                <input
                  className={styles.input}
                  id="username"
                  type="text"
                  required
                />
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="cidade">
                  Cidade
                </label>
                <input
                  className={styles.input}
                  id="cidade"
                  type="text"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="rua">
                  Rua
                </label>
                <input
                  className={styles.input}
                  id="rua"
                  type="text"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="numero">
                  Número
                </label>
                <input
                  className={styles.input}
                  id="numero"
                  type="number"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="horario">
                  Horário de Funcionamento
                </label>
                <input
                  className={styles.input}
                  id="numero"
                  type="number"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="doaçoes">
                  Doações Aceitas
                </label>
                <input
                  className={styles.input}
                  id="doaçoes"
                  type="text"
                  required
                />
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

export default User;
