import React from 'react';
import styles from "../styles/ComoColetar.module.css";

function ComoColetar() {
    return (
        <div className={styles.imgColetaFundo}>
            <div className={styles.colorColetaFundo}></div>
            <div className={styles.textColeta}>
                <h1 className={styles.coletaTitle}>O modo prático de coletar.</h1>
                <p className={styles.coletaP}>
                    Garanta a segurança e a eficiência das doações com pontos de coleta confiáveis e acompanhamento transparente para os usuários.
                </p>
                <button className={styles.coletaButton}>Entrar</button>
            </div>
            <div className={styles.containersColeta}>
                <div className={styles.containerColeta}>
                    <img className={styles.imgContainerColeta} src="#" />
                    <h2 className={styles.dashboardColetaTitle}>Dashboards</h2>
                    <p className={styles.dashboardColetaP}>
                        Com dados em tempo real, você pode monitorar o status dos pontos de coleta, acompanhar a entrega de suprimentos e acessar gráficos detalhados sobre o que foi arrecadado e distribuído.
                    </p>
                    <button className={styles.dashboardButton}>Veja seu Dashboard</button>
                </div>
                <div className={styles.containerColeta}>
                    <img className={styles.imgContainerColeta} src="#" />
                    <h2 className={styles.dashboardColetaTitle}>Entidades</h2>
                    <p className={styles.dashboardColetaP}>
                        O sistema inclui funcionalidades completas de CRUD (Criar, Listar, Atualizar e Deletar) para gerenciar as principais entidades de doações, entregas e pontos de coleta.
                    </p>
                    <button className={styles.dashboardButton}>Veja seu Dashboard</button>
                </div>
                <div className={styles.containerColeta}>
                    <img className={styles.imgContainerColeta} src="#" />
                    <h2 className={styles.dashboardColetaTitle}>Dashboards</h2>
                    <p className={styles.dashboardColetaP}>
                        Com dados em tempo real, você pode monitorar o status dos pontos de coleta, acompanhar a entrega de suprimentos e acessar gráficos detalhados sobre o que foi arrecadado e distribuído.
                    </p>
                    <button className={styles.dashboardButton}>Veja seu Dashboard</button>
                </div>
            </div>
            <div className={styles.containerFinalColeta}>
                <h2 className={styles.finalTextColeta}>Começe AGORA!</h2>
                <p className={styles.finalPColeta}>
                    A Ajuda Conecta é uma plataforma inovadora que transforma a gestão de doações para catástrofes naturais, conectando solidariedade e eficiência.
                </p>
                <button className={styles.finalButtonColeta}>Cadastrar</button>
            </div>

        </div>
    );
}

export default ComoColetar;
