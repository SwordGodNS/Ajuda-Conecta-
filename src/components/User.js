// src/components/User.js
import React from 'react';
import styles from '../styles/User.module.css';

function User() {
    return (
        <div className={styles.userContainer}>
            <h1>Usuários</h1>
            <div className={styles.addDonationContainer}>
                <button className={styles.addDonationButton}>
                    <img src="/img/Add User Male.svg" alt="Adicionar Doação" />
                </button>
            </div>
            <div className={styles.userListContainer}>
                <h2>Lista de Usuários</h2>
                <table className={styles.userTable}>
                    <thead>
                        <tr>
                            <th>ID Usuário</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Doações</th>
                            <th>Último Acesso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Adicione as linhas da tabela aqui */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
