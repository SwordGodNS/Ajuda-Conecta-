// src/components/Header.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/HeaderUser.module.css';

function HeaderUser() {
    const navigate = useNavigate();
    const location = useLocation();

    // Exibe o cabeçalho apenas nas rotas '/', '/como-doar' e '/contate'
    const allowedRoutes = ['/doar-user', '/acompanhar-user'];
    if (!allowedRoutes.includes(location.pathname)) {
        return null;
    }

    return (
        <header>
        <div className={styles.headerLogoUser}></div>
        <img className={styles.imgLogoUser} src="/img/Group.png" alt="Logo" />
        <nav>
            <ul>
                <li><Link to="/como-doar">HOME</Link></li>
                <li><Link to="/contate">DOAR </Link></li>
                <li><Link to="/contate">ACOMPANHAR </Link></li>
                <li>
                </li>
            </ul>
        </nav>
        <div className={styles.line}></div>
    </header>
    );
}

export default HeaderUser;
