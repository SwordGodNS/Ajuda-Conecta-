// src/components/Dashboard.js
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import styles from '../styles/Dashboard.module.css';

// Importação dos componentes das páginas
import User from './User';
import Catastrofes from './Catastrofes';
import Doacoes from './Doacoes';
import Entregas from './Entregas';

// Import DoacoesContext
import { DoacoesContext } from '../context/DoacoesContext';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard'); // Aba ativa inicial
    const [isLoggingOut, setIsLoggingOut] = useState(false); // Controle para tela branca de transição
    const navigate = useNavigate();

    // Access doacoes from context
    const { doacoes } = useContext(DoacoesContext);

    // State for donation filter
    const [doacaoFilter, setDoacaoFilter] = useState('Semanal'); // Default filter

    // State for dynamic doacaoData
    const [dynamicDoacaoData, setDynamicDoacaoData] = useState([]);

    // Function to handle filter change
    const handleDoacaoFilterChange = (event) => {
        setDoacaoFilter(event.target.value);
    };

    // Function to aggregate doacoes based on filter
    const aggregateDoacoes = () => {
        const now = new Date();
        let filteredDoacoes = [];

        // Define the start date based on the filter
        let startDate = new Date();
        switch (doacaoFilter) {
            case 'Diário':
                startDate.setDate(now.getDate() - 6); // Last 7 days
                break;
            case 'Semanal':
                startDate.setDate(now.getDate() - 27); // Last 4 weeks
                break;
            case 'Mensal':
                startDate.setMonth(now.getMonth() - 5); // Last 6 months
                break;
            case 'Trimestral':
                startDate.setMonth(now.getMonth() - 11); // Last 12 months
                break;
            case 'Semestral':
                startDate.setFullYear(now.getFullYear() - 1); // Last 2 years
                break;
            case 'Anual':
                startDate.setFullYear(now.getFullYear() - 5); // Last 5 years
                break;
            default:
                startDate = new Date(0); // All time
        }

        // Filter doacoes based on startDate
        filteredDoacoes = doacoes.filter((doacao) => {
            const doacaoDate = new Date(doacao.data);
            return doacaoDate >= startDate && doacaoDate <= now;
        });

        // Aggregate based on filter
        let aggregation = {};

        filteredDoacoes.forEach((doacao) => {
            const doacaoDate = new Date(doacao.data);
            let key = '';

            switch (doacaoFilter) {
                case 'Diário':
                    // Group by day (e.g., 'Seg', 'Ter', etc.)
                    key = doacaoDate.toLocaleDateString('pt-BR', { weekday: 'short' });
                    break;
                case 'Semanal':
                    // Group by week number
                    const weekNumber = getWeekNumber(doacaoDate);
                    key = `Semana ${weekNumber}`;
                    break;
                case 'Mensal':
                    // Group by month
                    key = doacaoDate.toLocaleString('default', { month: 'short' });
                    break;
                case 'Trimestral':
                    // Group by quarter
                    const quarter = Math.floor(doacaoDate.getMonth() / 3) + 1;
                    key = `Q${quarter} ${doacaoDate.getFullYear()}`;
                    break;
                case 'Semestral':
                    // Group by half-year
                    const half = doacaoDate.getMonth() < 6 ? 'H1' : 'H2';
                    key = `${half} ${doacaoDate.getFullYear()}`;
                    break;
                case 'Anual':
                    // Group by year
                    key = `${doacaoDate.getFullYear()}`;
                    break;
                default:
                    key = 'All';
            }

            if (aggregation[key]) {
                aggregation[key] += 1;
            } else {
                aggregation[key] = 1;
            }
        });

        // Convert aggregation to array suitable for Recharts
        const aggregatedData = Object.keys(aggregation).map((key) => ({
            name: key,
            doacoes: aggregation[key],
        }));

        // Sort the aggregated data based on the filter
        aggregatedData.sort((a, b) => {
            // Implement sorting logic based on filter
            // For simplicity, sort by name
            return a.name.localeCompare(b.name, 'pt-BR', { numeric: true });
        });

        setDynamicDoacaoData(aggregatedData);
    };

    // Helper function to get week number
    const getWeekNumber = (date) => {
        const firstJan = new Date(date.getFullYear(), 0, 1);
        const days = Math.floor((date - firstJan) / (24 * 60 * 60 * 1000));
        return Math.ceil((date.getDay() + 1 + days) / 7);
    };

    // Recompute doacaoData whenever doacoes or doacaoFilter changes
    useEffect(() => {
        aggregateDoacoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [doacoes, doacaoFilter]);

    // Dados para gráficos (Entregas permanecem estáticos)
    const deliveryData = [
        { name: 'Seg', entregas: 12 },
        { name: 'Ter', entregas: 15 },
        { name: 'Qua', entregas: 8 },
        { name: 'Qui', entregas: 20 },
        { name: 'Sex', entregas: 18 },
        { name: 'Sáb', entregas: 10 },
        { name: 'Dom', entregas: 25 },
    ];

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
                            {/* Adicionando Gráfico de Entregas */}
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={deliveryData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="entregas" stroke="#84DA15" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
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
                            <select
                                className={styles['dashboard-donationsFiltro']}
                                value={doacaoFilter}
                                onChange={handleDoacaoFilterChange}
                            >
                                <option>Diário</option>
                                <option>Semanal</option>
                                <option>Mensal</option>
                                <option>Trimestral</option>
                                <option>Semestral</option>
                                <option>Anual</option>
                            </select>
                            {/* Adicionando Gráfico de Doações */}
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={dynamicDoacaoData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="doacoes" fill="#84DA15" />
                                </BarChart>
                            </ResponsiveContainer>
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

                        <div className={styles['dashboard-containerVisoesDetalhadas']} >
                            <p className={styles['dashboard-sectionLabel5']}>Visões Detalhadas</p>
                            <h2 className={styles['dashboard-sectionTitle2']}>Entregas</h2>
                            <div className={styles['dashboard-containerOptions']} >
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
                    <div id="dashboardNav" className={styles['dashboard-containerIcon']} >
                        <img className={styles['dashboard-nav']} src="../img/Performance Macbook.svg" alt="Dashboard" />
                        <p className={styles['dashboard-navText']}>Dashboard</p>
                    </div>
                </div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Usuarios' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Usuarios')}
                >
                    <div id="userNav" className={styles['dashboard-containerIcon']} >
                        <img className={styles['dashboard-nav']} src="../img/Ponto-nav.png" alt="Usuários" />
                        <p className={styles['dashboard-navText']}>Pontos de coleta</p>
                    </div>
                </div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Catastrofes' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Catastrofes')}
                >
                    <div className={styles['dashboard-containerIcon']} >
                        <img className={styles['dashboard-nav']} src="../img/Tornado.svg" alt="Catástrofes" />
                        <p className={styles['dashboard-navText']}>Catástrofes</p>
                    </div>
                </div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Doacoes' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Doacoes')}
                >
                    <div className={styles['dashboard-containerIcon']} >
                        <img className={styles['dashboard-nav']} src="../img/Successful Delivery.svg" alt="Doações" />
                        <p className={styles['dashboard-navText']}>Doações</p>
                    </div>
                </div>

                <div
                    className={`${styles['dashboard-tab']} ${activeTab === 'Entregas' ? styles['activeTab'] : ''}`}
                    onClick={() => setActiveTab('Entregas')}
                >
                    <div className={styles['dashboard-containerIcon']} >
                        <img className={styles['dashboard-nav']} src="../img/Truck-nav.svg" alt="Entregas" />
                        <p className={styles['dashboard-navText']}>Entregas</p>
                    </div>
                </div>

                {/* Botão de Sair */}
                <p className={styles['dashboard-pagesTitle']}>Páginas</p>
                <div className={styles['dashboard-containerWhiteLogout']} onClick={handleLogout}>
                    <div className={styles['dashboard-containerIcon']} >
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
