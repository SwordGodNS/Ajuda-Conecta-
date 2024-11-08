import React from 'react';
import styles from '../styles/User.module.css';

const Dashboard = () => {
  return (
    <div className={styles.userNavBarContainer}>
      <div className={styles.userLogo}></div>
      <div className={styles.userDashboardLine}></div>
      <div className={styles.userContainerWhiteDashboard} id="dashboardNav">
        <div className={styles.userContainerIcon}>
          <img className={styles.navUser} src="../img/Performance Macbook.svg" alt="Dashboard Icon" />
          <p className={styles.userText}>Dashboard</p>
        </div>
      </div>
      <div className={styles.userContainerWhiteUser} id="userNav">
        <div className={styles.userContainerIcon}>
          <img className={styles.navUser} src="../img/User-nav.svg" alt="User Icon" />
          <p className={styles.userText}>Usuários</p>
        </div>
      </div>
      <div className={styles.userContainerWhiteCatastrofes} id="catastrofesNav">
        <div className={styles.userContainerIcon}>
          <img className={styles.navUser} src="../img/Tornado.svg" alt="Tornado Icon" />
          <p className={styles.userText}>Catástrofes</p>
        </div>
      </div>
      <div className={styles.userContainerWhiteDoacoes} id="donationNav">
        <div className={styles.userContainerIcon}>
          <img className={styles.navUser} src="../img/Successful Delivery.svg" alt="Doações Icon" />
          <p className={styles.userText}>Doações</p>
        </div>
      </div>
      <div className={styles.userContainerWhiteDelivery} id="deliveryNav">
        <div className={styles.userContainerIcon}>
          <img className={styles.navUser} src="../img/Truck-nav.svg" alt="Entregas Icon" />
          <p className={styles.userText}>Entregas</p>
        </div>
      </div>
      <p className={styles.userP2}>Páginas</p>
      <div className={styles.userContainerWhitePages}>
        <div className={styles.userContainerIcon}>
          <img className={styles.navUser} src="../img/User-nav.svg" alt="Perfil Icon" />
          <p className={styles.userText}>Perfil</p>
        </div>
      </div>
      <div className={styles.userContainerWhiteLogout}>
        <div className={styles.userContainerIcon}>
          <img className={styles.nav} src="../img/Logout.svg" alt="Logout Icon" />
          <p className={styles.userText}>Sair</p>
        </div>
      </div>

      <div className={styles.userDashboardsContainer}>
        <div className={styles.userTopBoardContainer}>
          <nav>
            <ul className={styles.userList}>
              <li className={styles.userListItem}>
                <a href="#" className={styles.userLink}>Admin/</a>
              </li>
              <li className={styles.userListItem2}>
                <a href="../html/dashboards.html" className={styles.userLink}>
                  <strong>Usuários</strong>
                </a>
              </li>
            </ul>
          </nav>
          <h1 className={styles.userH1}>Usuários</h1>
        </div>

        <input type="text" className={styles.userInput} placeholder="Pesquise aqui" />
        <button className={styles.userVersion}>VERSÃO USUÁRIO</button>
        <button className={styles.add}>
          <img className={styles.imgButton} src="../img/Add User Male.svg" alt="Add User" id="openModalButton" />
        </button>

        <div className={styles.containerUsers}>
          <h2 className={styles.h2User2}>Lista de Usuários</h2>
          <div className={styles.userData}>
            <p className={styles.userDataBaseFirst}>ID Usuário</p>
            <p className={styles.userDataBase}>Nome</p>
            <p className={styles.userDataBase}>E-mail</p>
            <p className={styles.userDataBase}>Doações</p>
            <p className={styles.userDataBase}>Último Acesso</p>
          </div>
          <div className={styles.userLineCont}></div>
        </div>

        <div id="overlay" className={styles.overlay}>
          <div id="modal" className={styles.modal}>
            <h4 className={styles.h4}>Cadastrar Novo Usuário</h4>
            <form id="userForm">
              <label htmlFor="username" className={styles.label}>Nome</label>
              <input className={styles.nome} type="text" id="username" name="username" required />

              <label htmlFor="cpf" className={styles.label}>CPF</label>
              <input className={styles.CPF} type="number" id="cpf" name="cpf" required />

              <label htmlFor="email" className={styles.label}>E-mail</label>
              <input className={styles.email} type="text" id="email" name="email" required />

              <label htmlFor="senha" className={styles.label}>Senha</label>
              <input className={styles.senha} type="password" id="senha" name="senha" required />

              <label htmlFor="type" className={styles.label}>Tipo</label>
              <select className={styles.select}>
                <option value=""></option>
                <option value="admin">Administrador</option>
                <option value="user">Comum</option>
              </select>

              <button className={styles.Cadastrar} type="submit">Cadastrar</button>
              <button className={styles.closeModal} type="button" id="closeModalButton">Fechar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
