// src/components/Header.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Home.module.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    // Não exibe o cabeçalho se estiver nas rotas '/login' ou '/dashboard'
    if (location.pathname === '/login' || location.pathname === '/dashboard' || location.pathname === '/user') {
        return null;
    }

    return (
        <header>
            <div className={styles.headerLogo}></div>
            <img className={styles.imgLogo} src="/img/Group.png" alt="Logo" />
            <nav>
                <ul>
                    <li><Link to="/como-doar">COMO DOAR</Link></li>
                    <li><Link to="/contate">CONTATE </Link></li>
                    <li><Link to="/contate"></Link></li>
                    <li>
                        <button 
                            id="loginButton" 
                            className={styles.loginButton} 
                            onClick={() => navigate('/login')}
                        >
                            ENTRAR
                        </button>
                    </li>
                </ul>
            </nav>
            <div className={styles.line}></div>
        </header>
    );
}

export default Header;
