// src/components/Doacoes.js
import React from 'react';
import styles from '../styles/Doacoes.module.css';

function Doacoes() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Gerenciar Doações</h1>
            <div className={styles.donationsList}>
                <div className={styles.donationItem}>Doação 1</div>
                <div className={styles.donationItem}>Doação 2</div>
                {/* Outras doações */}
            </div>
        </div>
    );
}

export default Doacoes;
