// src/components/Entregas.js
import React from 'react';
import styles from '../styles/Entregas.module.css';

function Entregas() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Gerenciar Entregas</h1>
            <div className={styles.deliveriesList}>
                <div className={styles.deliveryItem}>Entrega 1</div>
                <div className={styles.deliveryItem}>Entrega 2</div>
                {/* Outras entregas */}
            </div>
        </div>
    );
}

export default Entregas;
