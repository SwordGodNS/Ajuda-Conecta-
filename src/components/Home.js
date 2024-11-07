// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';

function Home() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <main>
                <h1 className={styles.h1Home}>AJUDACONECTA</h1>
                <p className={styles.subtitle}>Seu site que conecta doações</p>
                <p className={styles.p1}>
                    Seu gesto pode fazer a diferença na reconstrução de vidas e na 
                    recuperação de áreas devastadas, promovendo a união em tempos de crise.
                </p>
                <button id="howDonate" className={styles.donationButton}>Veja como Doar</button>
            </main>
        </div>
    );
}

export default Home;
