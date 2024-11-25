// src/components/AcompanharUser.js
import React from 'react';
import styles from '../styles/AcompanharUser.module.css';

function AcompanharUser() {
    return (
    <div className={styles.mainContent}>
        <div className={styles.colorVid}>
        </div>
        <h1 className={styles.acompanharH1}>Acompanhe</h1>
        <p className={styles.acompanharP}>Digite seu código de rastreio abaixo</p>
        <input type='text' className={styles.acompanharInput}></input>
    </div>
    );
}

export default AcompanharUser;
