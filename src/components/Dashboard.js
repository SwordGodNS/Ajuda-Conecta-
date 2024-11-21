// src/components/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css';

// Importação dos componentes das páginas
import User from './User';
import Catastrofes from './Catastrofes';
import Doacoes from './Doacoes';
import Entregas from './Entregas';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard'); // Aba ativa inicial
    const [isLoggingOut, setIsLoggingOut] = useState(false); // Controle para tela branca de transição
    const navigate = useNavigate();

    // Função para lidar com o clique no botão Sair
    const handleLogout = () => {
        setIsLoggingOut(true); // Ativa a tela branca
        setTimeout(() => {
            navigate('/'); // Redireciona para a página inicial após 1.5 segundos
        }, 1500);
    };

    // Função para renderizar o conteúdo da aba ativa
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Usuarios':
                return <User />;
            case 'Catastrofes':
                return <Catastrofes />;
            case 'Doacoes':
                return <Doacoes />;
            case 'Entregas':
                return <Entregas />;
            default:
                return (
                    <>
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
                    </>
                );
        }
    };

    // Exibe a tela branca enquanto o logout está ativo
    if (isLoggingOut) {
        return <div style={{ backgroundColor: 'white', height: '100vh', width: '100vw' }}></div>;
    }

    return (
        <div className={styles['dashboard-container']}>
            {/* Barra lateral */}
            <div className={styles['dashboard-navBarContainer']}>
                <div className={styles['dashboard-logo']}></div>
                <div className={styles['dashboard-dashboardLine']}></div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Dashboard' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Dashboard')}
                >
                    <div id="dashboardNav" className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Performance Macbook.svg" alt="Dashboard" />
                        <p className={styles['dashboard-navText']}>Dashboard</p>
                    </div>
                </div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Usuarios' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Usuarios')}
                >
                    <div id="userNav" className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/User-nav.svg" alt="Usuários" />
                        <p className={styles['dashboard-navText']}>Usuários</p>
                    </div>
                </div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Catastrofes' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Catastrofes')}
                >
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Tornado.svg" alt="Catástrofes" />
                        <p className={styles['dashboard-navText']}>Catástrofes</p>
                    </div>
                </div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Doacoes' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Doacoes')}
                >
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Successful Delivery.svg" alt="Doações" />
                        <p className={styles['dashboard-navText']}>Doações</p>
                    </div>
                </div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Entregas' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Entregas')}
                >
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Truck-nav.svg" alt="Entregas" />
                        <p className={styles['dashboard-navText']}>Entregas</p>
                    </div>
                </div>

                {/* Botão de Sair */}
                <p className={styles['dashboard-pagesTitle']}>Páginas</p>
                <div className={styles['dashboard-containerWhiteLogout']} onClick={handleLogout}>
                    <div className={styles['dashboard-containerIcon']}>
                        <img className={styles['dashboard-nav']} src="../img/Logout.svg" alt="Sair" />
                        <p className={styles['dashboard-navText']}>Sair</p>
                    </div>
                </div>
            </div>

            {/* Conteúdo Principal */}
            <div className={styles['dashboard-dashboardsContainer']}>
                {renderTabContent()}
            </div>
        </div>
    );
}

export default Dashboard;
