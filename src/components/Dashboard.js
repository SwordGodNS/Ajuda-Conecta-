import React from 'react';
import styles from '../styles/Dashboard.module.css'; // Certifique-se de que o caminho esteja correto

function Dashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.navBarContainer}>
                <div className={styles.logo}></div>
                <div className={styles.dashboardLine}></div>
                <div className={styles.containerWhiteDashboard}>
                    <div className={styles.containerIcon}>
                        <img className={styles.nav} src="../img/Performance Macbook.svg" alt="Dashboard" />
                        <p>Dashboard</p>
                    </div>
                </div>
                <div className={styles.containerWhiteUser}>
                    <div className={styles.containerIcon}>
                        <img className={styles.nav} src="../img/User-nav.svg" alt="Usuários" />
                        <p>Usuários</p>
                    </div>
                </div>
                <div className={styles.containerWhiteCatastrofes}>
                    <div className={styles.containerIcon}>
                        <img className={styles.nav} src="../img/Tornado.svg" alt="Catastrofes" />
                        <p>Catástrofes</p>
                    </div>
                </div>
                <div className={styles.containerWhiteDoacoes}>
                    <div className={styles.containerIcon}>
                        <img className={styles.nav} src="../img/Successful Delivery.svg" alt="Doações" />
                        <p>Doações</p>
                    </div>
                </div>
                <div className={styles.containerWhiteDelivery}>
                    <div className={styles.containerIcon}>
                        <img className={styles.nav} src="../img/Truck-nav.svg" alt="Entregas" />
                        <p>Entregas</p>
                    </div>
                </div>
                <p className={styles.pagesTitle}>Páginas</p>
                <div className={styles.containerWhitePages}>
                    <div className={styles.containerIcon}>
                        <img className={styles.nav} src="../img/User-nav.svg" alt="Perfil" />
                        <p>Perfil</p>
                    </div>
                </div>
                <div className={styles.containerWhiteLogout}>
                    <div className={styles.containerIcon}>
                        <img className={styles.nav} src="../img/Logout.svg" alt="Sair" />
                        <p>Sair</p>
                    </div>
                </div>
            </div>
            <div className={styles.dashboardsContainer}>
                <div className={styles.topBoardContainer}>
                    <nav>
                        <ul>
                            <li><a href="#">Admin/</a></li>
                            <li><strong><a href="#">Dashboards</a></strong></li>
                        </ul>
                    </nav>
                    <h1>Dashboards</h1>
                </div>
                <input type="text" placeholder="Pesquise aqui" />
                <button>VERSÃO USUÁRIO</button>
                
                {/* Contadores de doações, usuários e entregas */}
                <div className={styles.donationTodayContainer}>
                    <p>Doações Hoje</p>
                    <div className={styles.todayContainer}>
                        <img className={styles.today} src="../img/Successful Delivery.svg" alt="Doações Hoje" />
                        <h3 className={styles.todayText}>0</h3>
                    </div>
                </div>
                <div className={styles.usersTodayContainer}>
                    <p>Usuários Hoje</p>
                    <div className={styles.todayContainer}>
                        <img className={styles.today} src="../img/User-nav.svg" alt="Usuários Hoje" />
                        <h3 className={styles.todayText}>0</h3>
                    </div>
                </div>
                <div className={styles.deliveryTodayContainer}>
                    <p>Entregas Hoje</p>
                    <div className={styles.todayContainer}>
                        <img className={styles.today} src="../img/Truck-nav.svg" alt="Entregas Hoje" />
                        <h3 className={styles.todayText}>0</h3>
                    </div>
                </div>

                {/* Seções para entregas e doações */}
                <div className={styles.dashboardDelivery}>
                    <p>Visões Gerais</p>
                    <p>Filtro</p>
                    <h2>Entregas</h2>
                    <select className={styles.filtroDelivery}>
                        <option>Diário</option>
                        <option>Semanal</option>
                        <option>Mensal</option>
                        <option>Trimestral</option>
                        <option>Semestral</option>
                        <option>Anual</option>
                    </select>
                </div>
                <div className={styles.catastrofesContainer}>
                    <h2>Catástrofes</h2>
                </div>

                <div className={styles.usersContainer}>
                    <div className={styles.usersGraficoContainer}></div>
                    <p>Usuários Ativos</p>
                    <h3>3</h3>
                    <p>Usuários Totais</p>
                    <h3>3</h3>
                    <p>Filtro</p>
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
                    <p>Visões Gerais</p>
                    <h2>Doações</h2>
                    <p>Filtro</p>
                    <select className={styles.donationsFiltro}>
                        <option>Diário</option>
                        <option>Semanal</option>
                        <option>Mensal</option>
                        <option>Trimestral</option>
                        <option>Semestral</option>
                        <option>Anual</option>
                    </select>
                </div>

                {/* Ícones rápidos */}
                <div className={styles.containerFastView}>
                    <div className={styles.containerIcons}>
                        <img className={styles.userIcon} src="../img/User-nav.svg" alt="Usuários" />
                    </div>
                    <div className={styles.containerIcons}>
                        <img className={styles.userIcon} src="../img/Tornado.svg" alt="Catástrofes" />
                    </div>
                    <div className={styles.containerIcons}>
                        <img className={styles.userIcon} src="../img/Successful Delivery.svg" alt="Doações" />
                    </div>
                    <div className={styles.containerIcons}>
                        <img className={styles.userIcon} src="../img/Truck-nav.svg" alt="Entregas" />
                    </div>
                </div>

                {/* Visões detalhadas */}
                <div className={styles.containerVisoesDetalhadas}>
                    <p>Visões Detalhadas</p>
                    <h2>Entregas</h2>
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
        </div>
    );
}

export default Dashboard;
