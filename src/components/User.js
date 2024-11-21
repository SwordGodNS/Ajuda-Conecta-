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
    <div className={styles.userDashboardsContainer}>
      <div className={styles.userTopBoardContainer}>
        <nav>
          <ul className={styles.userList}>
            <li className={styles.userListItem}>
              <a href="#" className={styles.userLink}>
                Admin/
              </a>
            </li>
            <li className={styles.userListItem2}>
              <strong>Usuários</strong>
            </li>
          </ul>
        </nav>
        <h1 className={styles.userH1}>Usuários</h1>
      </div>

      <input
        type="text"
        className={styles.userInput}
        placeholder="Pesquise aqui"
      />
      <button className={styles.userVersion}>VERSÃO USUÁRIO</button>

      <div className={styles.containerUsers}>
        <h2 className={styles.h2User2}>Lista de Usuários</h2>
        <div className={styles.userData}>
          <p className={styles.userDataBaseFirst}>ID Usuário</p>
          <p className={styles.userDataBase}>Nome</p>
          <p className={styles.userDataBase}>E-mail</p>
          <p className={styles.userDataBase}>Doações</p>
          <p className={styles.userDataBase}>Último Acesso</p>
          <button className={styles.add} onClick={handleOpenModal}>
            <img
              className={styles.imgButton}
              src="../img/Add User Male.svg"
              alt="Adicionar Usuário"
            />
          </button>
        </div>
        <div className={styles.userLineCont}></div>
      </div>

      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h4 className={styles.modalTitle}>Cadastrar Novo Usuário</h4>
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
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="cpf">
                  CPF
                </label>
                <input
                  className={styles.input}
                  id="cpf"
                  type="text"
                  value={cpf}
                  onChange={handleCpfChange}
                  maxLength="14" // Limita o tamanho ao formato "XXX.XXX.XXX-XX"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">
                  E-mail
                </label>
                <input
                  className={styles.input}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="senha">
                  Senha
                </label>
                <input
                  className={styles.input}
                  id="senha"
                  type="password"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="type">
                  Tipo
                </label>
                <select className={styles.input} id="type" required>
                  <option value="">Selecione</option>
                  <option value="admin">Administrador</option>
                  <option value="user">Usuário Comum</option>
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

export default User;
