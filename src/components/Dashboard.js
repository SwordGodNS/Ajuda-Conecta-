// src/components/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css';
import User from './User';

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  const navigate = useNavigate();

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'user':
        return <User />;
      case 'dashboard':
      default:
        return (
          <div className={styles.dashboardsContainer}>
            <div className={styles.topBoardContainer}>
              <nav>
                <ul>
                  <li><a href="#">Admin/</a></li>
                  <li><a href="#"><strong>Dashboards</strong></a></li>
                </ul>
              </nav>
              <h1>Dashboards</h1>
            </div>
            <input type="text" placeholder="Pesquise aqui" className={styles.searchInput} />
            <button className={styles.userVersionButton}>VERSÃO USUÁRIO</button>

            <div className={styles.donationTodayContainer}>
              <p>Doações Hoje</p>
              <div className={styles.todayContainer}>
                <img className={styles.today} src="/img/Successful Delivery.svg" alt="Ícone Hoje" />
                <h3 className={styles.todayText}>0</h3>
              </div>
            </div>

            <div className={styles.usersTodayContainer}>
              <p>Usuários Hoje</p>
              <div className={styles.todayContainer}>
                <img className={styles.today} src="/img/User-nav.svg" alt="Ícone de Usuário" />
                <h3 className={styles.todayText}>0</h3>
              </div>
            </div>

            <div className={styles.deliveryTodayContainer}>
              <p>Entregas Hoje</p>
              <div className={styles.todayContainer}>
                <img className={styles.today} src="/img/Truck-nav.svg" alt="Ícone de Entrega" />
                <h3 className={styles.todayText}>0</h3>
              </div>
            </div>

            <div className={styles.dashboardDelivery}>
              <p className={styles.visaoGeralDelivery}>Visões Gerais</p>
              <p className={styles.filtro}>Filtro</p>
              <h2 className={styles.tituloDelivery}>Entregas</h2>
              <select className={styles.filtroDelivery}>
                <option>Diário</option>
                <option>Semanal</option>
                <option>Mensal</option>
                <option>Trimestral</option>
                <option>Semestral</option>
                <option>Anual</option>
              </select>
              <div className={styles.legendaContainer}>
                <div className={`${styles.entregasConcluidas} ${styles.circulo1}`}>
                  <p className={styles.graficoFiltro}>Concluídas</p>
                </div>
                <div className={`${styles.entregasConcluidas} ${styles.circulo2}`}>
                  <p className={styles.graficoFiltro}>Em Preparação</p>
                </div>
                <div className={`${styles.entregasConcluidas} ${styles.circulo3}`}>
                  <p className={styles.graficoFiltro}>Em Andamento</p>
                </div>
                <div className={`${styles.entregasConcluidas} ${styles.circulo4}`}>
                  <p className={styles.graficoFiltro}>Canceladas</p>
                </div>
              </div>
            </div>

            <div className={styles.catastrofesContainer}>
              <h2 className={styles.tituloCatastrofes}>Catástrofes</h2>
            </div>

            <div className={styles.usersContainer}>
              <div className={styles.usersGraficoContainer}></div>
              <p className={styles.tituloUsers}>Usuários Ativos</p>
              <h3 className={styles.userAtvText}>3</h3>
              <p className={styles.totalUsers}>Usuários Totais</p>
              <h3 className={styles.userAtvText2}>3</h3>
              <p className={styles.filtroTituloUsers}>Filtro</p>
              <select className={styles.usersFiltro}>
                <option>Diário</option>
                <option>Semanal</option>
                <option>Mensal</option>
                <option>Trimestral</option>
                <option>Semestral</option>
                <option>Anual</option>
              </select>
            </div>

            <div className={styles.containerDoacoesDashboard}>
              <p className={styles.visaoGeralDoacoes}>Visões Gerais</p>
              <h2 className={styles.tituloDoacoes}>Doações</h2>
              <p className={styles.filtroTituloDonations}>Filtro</p>
              <select className={styles.donationsFiltro}>
                <option>Diário</option>
                <option>Semanal</option>
                <option>Mensal</option>
                <option>Trimestral</option>
                <option>Semestral</option>
                <option>Anual</option>
              </select>
            </div>

            <div className={styles.containerFastView}>
              <div className={styles.containerIcons}>
                <img className={styles.userIcon} src="/img/User-nav.svg" alt="Ícone de Usuário" />
              </div>
              <div className={styles.containerIcons}>
                <img className={styles.userIcon} src="/img/Tornado.svg" alt="Ícone de Catástrofes" />
              </div>
              <div className={styles.containerIcons}>
                <img className={styles.userIcon} src="/img/Successful Delivery.svg" alt="Ícone de Doações" />
              </div>
              <div className={styles.containerIcons}>
                <img className={styles.userIcon} src="/img/Truck-nav.svg" alt="Ícone de Entregas" />
              </div>
            </div>

            <div className={styles.containerVisoesDetalhadas}>
              <p className={styles.visoesDetalhadas}>Visões Detalhadas</p>
              <h2 className={styles.tituloVisoesDetalhadas}>Entregas</h2>
              <div className={styles.containerOptions}>
                <p>Código de Rastreio</p>
                <p>Doador</p>
                <p>CEP Doador</p>
                <p>Destinatário</p>
                <p>CEP Destinatário</p>
                <p>Item</p>
                <p>Data</p>
                <p>Status</p>
              </div>
              <div className={styles.line}></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.navBarContainer}>
        <div className={styles.logo}></div>
        <div className={styles.dashboardLine}></div>

        <div className={styles.containerWhiteDashboard} onClick={() => setSelectedComponent('dashboard')}>
          <div className={styles.containerIcon}>
            <img className={styles.nav} src="/img/Performance Macbook.svg" alt="Ícone de Dashboard" />
            <p>Dashboard</p>
          </div>
        </div>

        <div className={styles.containerWhiteUser} onClick={() => setSelectedComponent('user')}>
          <div className={styles.containerIcon}>
            <img className={styles.nav} src="/img/User-nav.svg" alt="Ícone de Usuário" />
            <p>Usuários</p>
          </div>
        </div>

        <div className={styles.containerWhiteCatastrofes} onClick={() => setSelectedComponent('catastrofes')}>
          <div className={styles.containerIcon}>
            <img className={styles.nav} src="/img/Tornado.svg" alt="Ícone de Catástrofes" />
            <p>Catástrofes</p>
          </div>
        </div>

        <div className={styles.containerWhiteDoacoes} onClick={() => setSelectedComponent('doacoes')}>
          <div className={styles.containerIcon}>
            <img className={styles.nav} src="/img/Successful Delivery.svg" alt="Ícone de Doações" />
            <p>Doações</p>
          </div>
        </div>

        <div className={styles.containerWhiteDelivery} onClick={() => setSelectedComponent('entregas')}>
          <div className={styles.containerIcon}>
            <img className={styles.nav} src="/img/Truck-nav.svg" alt="Ícone de Entregas" />
            <p>Entregas</p>
          </div>
        </div>

        <p className={styles.pagesLabel}>Páginas</p>

        <div className={styles.containerWhitePages} onClick={() => setSelectedComponent('perfil')}>
          <div className={styles.containerIcon}>
            <img className={styles.nav} src="/img/User-nav.svg" alt="Ícone de Perfil" />
            <p>Perfil</p>
          </div>
        </div>

        <div className={styles.containerWhiteLogout} onClick={() => navigate('/logout')}>
          <div className={styles.containerIcon}>
            <img className={styles.nav} src="/img/Logout.svg" alt="Ícone de Sair" />
            <p>Sair</p>
          </div>
        </div>
      </div>

      {renderSelectedComponent()}
    </div>
  );
}

export default Dashboard;
