// src/components/UserMenu.js
import React from 'react';
import styles from '../styles/UserMenu.module.css';

function UserMenu() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Menu do Usuário</h1>
            <div className={styles.menuOptions}>
                <div className={styles.menuItem}>Acompanhar Doações</div>
                <div className={styles.menuItem}>Fazer Doação</div>
                <div className={styles.menuItem}>Perfil</div>
            </div>
        </div>
    );
}

export default UserMenu;
