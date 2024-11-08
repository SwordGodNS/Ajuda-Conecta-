import React from 'react';
import styles from '../styles/Dashboard.module.css'; 

function Dashboard() {
    return (
        <div className={styles['dashboard-container']}>
            <div className={styles['dashboard-navBarContainer']}>
                <div className={styles['dashboard-logo']}></div>
                <div className={styles['dashboard-dashboardLine']}></div>
                <div className={styles['dashboard-containerWhiteDashboard']}>
                    <div id='dashboardNav'className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']}  src="../img/Performance Macbook.svg" alt="Dashboard" />
                        <p className={styles['dashboard-navText']}>Dashboard</p>
                    </div>
                </div>
                <div className={styles['dashboard-containerWhiteUser']}>
                    <div id='userNav'className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/User-nav.svg" alt="Usuários" />
                        <p className={styles['dashboard-navText']}>Usuários</p>
                    </div>
                </div>
                <div className={styles['dashboard-containerWhiteCatastrofes']}>
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Tornado.svg" alt="Catastrofes" />
                        <p className={styles['dashboard-navText']}>Catástrofes</p>
                    </div>
                </div>
                <div className={styles['dashboard-containerWhiteDoacoes']}>
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Successful Delivery.svg" alt="Doações" />
                        <p className={styles['dashboard-navText']}>Doações</p>
                    </div>
                </div>
                <div className={styles['dashboard-containerWhiteDelivery']}>
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Truck-nav.svg" alt="Entregas" />
                        <p className={styles['dashboard-navText']}>Entregas</p>
                    </div>
                </div>
                <p className={styles['dashboard-pagesTitle']}>Páginas</p>
                <div className={styles['dashboard-containerWhitePages']}>
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/User-nav.svg" alt="Perfil" />
                        <p className={styles['dashboard-navText']}>Perfil</p>
                    </div>
                </div>
                <div className={styles['dashboard-containerWhiteLogout']}>
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Logout.svg" alt="Sair" />
                        <p className={styles['dashboard-navText']}>Sair</p>
                    </div>
                </div>
            </div>
            <div className={styles['dashboard-dashboardsContainer']}>
                <div className={styles['dashboard-topBoardContainer']}>
                    <nav className={styles['dashboard-navContainer']}>
                        <ul className={styles['dashboard-navList']}>
                            <li className={styles['dashboard-navItem1']}><a href="#" className={styles['dashboard-navLink']}>Admin/</a></li>
                            <li className={styles['dashboard-navItem2']}><strong><a href="#" className={styles['dashboard-navLink']}>Dashboards</a></strong></li>
                        </ul>
                    </nav>
                    <h1 className={styles['dashboard-title']}>Dashboards</h1>
                </div>
                <input type="text" placeholder="Pesquise aqui" className={styles['dashboard-searchInput']} />
                <button className={styles['dashboard-button']}>VERSÃO USUÁRIO</button>
                
                {/* Contadores de doações, usuários e entregas */}
                <div className={styles['dashboard-donationTodayContainer']}>
                    <p className={styles['dashboard-todayLabel']}>Doações Hoje</p>
                    <div className={styles['dashboard-todayContainer']}>
                        <img className={styles['dashboard-today']} src="../img/Successful Delivery.svg" alt="Doações Hoje" />
                        <h3 className={styles['dashboard-todayText']}>0</h3>
                    </div>
                </div>
                <div className={styles['dashboard-usersTodayContainer']}>
                    <p className={styles['dashboard-todayLabel']}>Usuários Hoje</p>
                    <div className={styles['dashboard-todayContainer']}>
                        <img className={styles['dashboard-today']} src="../img/User-nav.svg" alt="Usuários Hoje" />
                        <h3 className={styles['dashboard-todayText']}>0</h3>
                    </div>
                </div>
                <div className={styles['dashboard-deliveryTodayContainer']}>
                    <p className={styles['dashboard-todayLabel']}>Entregas Hoje</p>
                    <div className={styles['dashboard-todayContainer']}>
                        <img className={styles['dashboard-today']} src="../img/Truck-nav.svg" alt="Entregas Hoje" />
                        <h3 className={styles['dashboard-todayText']}>0</h3>
                    </div>
                </div>

                {/* Seções para entregas e doações */}
                <div className={styles['dashboard-dashboardDelivery']}>
                    <p className={styles['dashboard-sectionLabel1']}>Visões Gerais</p>
                    <p className={styles['dashboard-sectionLabel2']}>Filtro</p>
                    <h2 className={styles['dashboard-sectionTitle']}>Entregas</h2>
                    <select className={styles['dashboard-filtroDelivery']}>
                        <option>Diário</option>
                        <option>Semanal</option>
                        <option>Mensal</option>
                        <option>Trimestral</option>
                        <option>Semestral</option>
                        <option>Anual</option>
                    </select>
                </div>
                <div className={styles['dashboard-catastrofesContainer']}>
                    <h2 className={styles['dashboard-sectionTitle']}>Catástrofes</h2>
                </div>

                <div className={styles['dashboard-usersContainer']}>
                    <div className={styles['dashboard-usersGraficoContainer']}></div>
                    <p className={styles['dashboard-usersLabel1']}>Usuários Ativos</p>
                    <h3 className={styles['dashboard-usersText1']}>3</h3>
                    <p className={styles['dashboard-usersLabel2']}>Usuários Totais</p>
                    <h3 className={styles['dashboard-usersText2']}>3</h3>
                    <p className={styles['dashboard-usersLabel']}>Filtro</p>
                    <select className={styles['dashboard-usersFiltro']}>
                        <option>Diário</option>
                        <option>Semanal</option>
                        <option>Mensal</option>
                        <option>Trimestral</option>
                        <option>Semestral</option>
                        <option>Anual</option>
                    </select>
                </div>

                <div className={styles['dashboard-containerDoacoesDashboard']}>
                    <p className={styles['dashboard-sectionLabel4']}>Visões Gerais</p>
                    <h2 className={styles['dashboard-sectionTitle']}>Doações</h2>
                    <p className={styles['dashboard-sectionLabel3']}>Filtro</p>
                    <select className={styles['dashboard-donationsFiltro']}>
                        <option>Diário</option>
                        <option>Semanal</option>
                        <option>Mensal</option>
                        <option>Trimestral</option>
                        <option>Semestral</option>
                        <option>Anual</option>
                    </select>
                </div>

                {/* Ícones rápidos */}
                <div className={styles['dashboard-containerFastView']}>
                    <div className={styles['dashboard-containerIcons']}>
                        <img className={styles['dashboard-userIcon']} src="../img/User-nav.svg" alt="Usuários" />
                    </div>
                    <div className={styles['dashboard-containerIcons']}>
                        <img className={styles['dashboard-userIcon']} src="../img/Tornado.svg" alt="Catástrofes" />
                    </div>
                    <div className={styles['dashboard-containerIcons']}>
                        <img className={styles['dashboard-userIcon']} src="../img/Successful Delivery.svg" alt="Doações" />
                    </div>
                    <div className={styles['dashboard-containerIcons']}>
                        <img className={styles['dashboard-userIcon']} src="../img/Truck-nav.svg" alt="Entregas" />
                    </div>
                </div>

                {/* Visões detalhadas */}
                <div className={styles['dashboard-containerVisoesDetalhadas']}>
                    <p className={styles['dashboard-sectionLabel5']}>Visões Detalhadas</p>
                    <h2 className={styles['dashboard-sectionTitle2']}>Entregas</h2>
                    <div className={styles['dashboard-containerOptions']}>
                        <p className={styles['dashboard-optionLabel']}>Código de Rastreio</p>
                        <p className={styles['dashboard-optionLabel']}>Doador</p>
                        <p className={styles['dashboard-optionLabel']}>CEP Doador</p>
                        <p className={styles['dashboard-optionLabel']}>Destinatário</p>
                        <p className={styles['dashboard-optionLabel']}>CEP Destinatário</p>
                        <p className={styles['dashboard-optionLabel']}>Item</p>
                        <p className={styles['dashboard-optionLabel']}>Data</p>
                        <p className={styles['dashboard-optionLabel']}>Status</p>
                    </div>
                    <div className={styles['dashboard-line']}></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
