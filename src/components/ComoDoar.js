// src/components/ComoDoar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ComoDoar.module.css';

function ComoDoar() {
    const navigate = useNavigate();

    return (
        <div className={styles.comoDoarContainer}>
            <div className={styles.section} style={{ backgroundImage: 'url(/img/donation.webp)' }}>
                <h1>POR QUE DOAR?</h1>
                <div className={styles.row}>
                    <div>
                        <h2>01.</h2>
                        <p className={styles.title}>Apoio imediato às vítimas</p>
                        <p>Doações ajudam a fornecer necessidades básicas, ajudando-as a sobreviver e a se recuperar após o desastre.</p>
                    </div>
                    <div>
                        <h2>02.</h2>
                        <p className={styles.title}>Reconstrução de comunidades</p>
                        <p>Contribuições financeiras podem acelerar a reconstrução, ajudando comunidades afetadas a se reerguer.</p>
                    </div>
                    <div>
                        <h2>03.</h2>
                        <p className={styles.title}>Solidariedade</p>
                        <p>Doar demonstra empatia e solidariedade, criando um senso de comunidade global.</p>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h2>O caminho da sua doação</h2>
                <div className={styles.cardRow}>
                    <div className={styles.card}>
                        <p>CRIE SUA CONTA</p>
                        <p>Comece criando uma conta para acompanhar suas doações e ver seu impacto.</p>
                    </div>
                    <div className={styles.card}>
                        <p>DOE</p>
                        <p>Selecione o que deseja doar e insira as informações da sua doação.</p>
                    </div>
                    <div className={styles.card}>
                        <p>ENTREGUE</p>
                        <p>Escolha o melhor dia e hora para a entrega dos itens.</p>
                    </div>
                    <div className={styles.card}>
                        <p>ACOMPANHE</p>
                        <p>Rastreie e acompanhe sua entrega até uma família necessitada.</p>
                    </div>
                </div>
            </div>

            <div className={styles.section} style={{ backgroundColor: '#373737', color: 'white' }}>
                <h2>SEJA UM DOADOR</h2>
                <p>Milhares de famílias podem estar esperando sua ajuda</p>
                <button className={styles.donateButton} onClick={() => navigate('/login')}>
                    DOAR
                </button>
                <div className={styles.stats}>
                    <div>
                        <h3>3</h3>
                        <p>Usuários Cadastrados</p>
                    </div>
                    <div>
                        <h3>0</h3>
                        <p>Doações Feitas</p>
                    </div>
                    <div>
                        <h3>0</h3>
                        <p>Entregas Feitas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComoDoar;
