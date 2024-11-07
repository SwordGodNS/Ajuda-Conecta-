// src/components/DoarUser.js
import React from 'react';
import styles from '../styles/DoarUser.module.css';

function DoarUser() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Locais para Doar</h1>
            <div className={styles.locationsList}>
                <div className={styles.locationItem}>Local de Doação 1</div>
                <div className={styles.locationItem}>Local de Doação 2</div>
                {/* Outras opções de doação */}
            </div>
        </div>
    );
}

export default DoarUser;
