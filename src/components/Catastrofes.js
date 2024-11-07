// src/components/Catastrofes.js
import React from 'react';
import styles from '../styles/Catastrofes.module.css';

function Catastrofes() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Catástrofes Registradas</h1>
            <div className={styles.catastrophesList}>
                <div className={styles.catastropheItem}>Catástrofe 1 - Severidade: Alta</div>
                <div className={styles.catastropheItem}>Catástrofe 2 - Severidade: Média</div>
                {/* Outras catástrofes */}
            </div>
        </div>
    );
}

export default Catastrofes;
