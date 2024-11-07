// src/components/User.js
import React, { useState } from 'react';
import styles from '../styles/User.module.css';

function User() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className={styles.container}>
            <button className={styles.addButton} onClick={() => setModalOpen(true)}>Adicionar Usuário</button>
            <div className={styles.userTable}>
                <div className={styles.tableHeader}>Lista de Usuários</div>
                {/* Tabela de usuários com dados fictícios para exemplo */}
                <div className={styles.userRow}>Usuário 1</div>
                <div className={styles.userRow}>Usuário 2</div>
                {/* Mais linhas da tabela aqui */}
            </div>
            {isModalOpen && (
                <div className={styles.overlay} onClick={() => setModalOpen(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <h4>Adicionar Novo Usuário</h4>
                        <input type="text" placeholder="Nome" className={styles.inputField} />
                        <input type="text" placeholder="Email" className={styles.inputField} />
                        <button className={styles.modalButton}>Cadastrar</button>
                        <button className={styles.closeModal} onClick={() => setModalOpen(false)}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default User;
