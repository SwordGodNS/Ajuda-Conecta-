// src/components/Entregas.js
import React from 'react';
import styles from '../styles/Entregas.module.css';

function Entregas() {
    return (
        <div className={styles.catastrofesContainer}>
            <div className={styles.topBoardContainer}>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>Admin/</li>
                        <li className={styles.navListItem}>
                            <strong>Entregas</strong>
                        </li>
                    </ul>
                </nav>
                <h1 className={styles.headerTitleCatastrofes}>Entregas</h1>
            </div>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Pesquise aqui"
            />
            <button className={styles.addButton}>
                <img
                    className={styles.imgButtonCatastrofes}
                    src="../img/Add User Male.svg"
                    alt="Adicionar Catástrofe"
                />
            </button>
            <div className={styles.listContainer}>
                <h2 className={styles.listTitle}>Lista de Entregas</h2>
                <div className={styles.dataHeader}>
                    <p className={styles.dataColumn}>ID Entrega</p>
                    <p className={styles.dataColumn}>CPF Doador</p>
                    <p className={styles.dataColumn}>CEP Doador</p>
                    <p className={styles.dataColumn}>CEP Destinatário</p>
                    <p className={styles.dataColumn}>Itens</p>
                    <p className={styles.dataColumn}>Lote</p>
                    <p className={styles.dataColumn}>Data de Entrega</p>
                    <p className={styles.dataColumn}>Status</p>
                </div>
            </div>
            </div>
            );
}

            export default Entregas;
