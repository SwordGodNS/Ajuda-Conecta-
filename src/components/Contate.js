// src/components/Contate.js
import React from 'react';
import styles from '../styles/Contate.module.css';
function Contate() {
    return (
        <div className={styles.container}>
            <header className={styles.headerContainer}>
                <div className={styles.headerLogo}></div>
                {/* Itens de navegação removidos */}
            </header>
            <div className={styles.line}></div>

            <main className={styles.mainContent}>
                <div className={styles.contactLeft}>
                    <h1 className={styles.title}>CONTATE</h1>
                    <p className={styles.description}>
                        Queremos ouvir você! Se tiver alguma dúvida, sugestão ou deseja entrar em contato para oportunidades
                        de colaboração, fique à vontade para nos enviar uma mensagem. Estamos à disposição para responder
                        suas dúvidas, preencha o formulário ao lado ou envie um e-mail, e retornaremos o mais rápido possível.
                    </p>
                    <div className={styles.contactDetails}>
                        <div className={styles.containerMessage}>
                        </div>
                        <p className={styles.contactLabel}>Contato</p>
                        <p className={styles.contactEmail}>exemplo@gmail.com</p>
                    </div>
                </div>

                <div className={styles.containerForm}>
                    <form>
                        <p className={styles.formTitle}>Preencha o formulário de contato:</p>
                        <label htmlFor="nome">Seu nome</label>
                        <input type="text" id="nome" name="nome" className={styles.inputField} />

                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" className={styles.inputField} />

                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" className={styles.inputField} />

                        <label htmlFor="mensagem">Escreva sua mensagem</label>
                        <textarea id="mensagem" name="mensagem" className={styles.textArea}></textarea>

                        <button type="submit" className={styles.submitButton}>Contatar</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Contate;
