// src/components/AcompanharUser.js
import React from 'react';
import styles from '../styles/AcompanharUser.module.css';

function AcompanharUser() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Acompanhar Minhas Doações</h1>
            <div className={styles.donationStatus}>
                <div className={styles.donationItem}>Doação 1 - Status: Entregue</div>
                <div className={styles.donationItem}>Doação 2 - Status: Em Trânsito</div>
                {/* Outras doações e seus status */}
            </div>
        </div>
    );
}

export default AcompanharUser;
