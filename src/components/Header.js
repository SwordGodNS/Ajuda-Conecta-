import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Home.module.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const allowedRoutes = ['/', '/como-doar', '/contate', '/como-coletar', '/doar-user', '/acompanhar-user'];
    if (!allowedRoutes.includes(location.pathname)) {
        return null;
    }

    return (
        <header>
            <div className={styles.headerLogo}></div>
            <img className={styles.imgLogo} src="/img/Group.png" alt="Logo" />
            <nav>
                <ul>
                    <li><Link to="/como-doar">ESPAÇO DOADOR</Link></li>
                    <li><Link to="/como-coletar">ESPAÇO COLETOR</Link></li>
                    <li><Link to="/contate">CONTATE</Link></li>
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
