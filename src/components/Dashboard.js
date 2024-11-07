// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../scripts/firebase';

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate('/login'); // Redireciona para o login se o usuário não estiver autenticado
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return (
        <div>
            {user ? (
                <h1>Bem-vindo, {user.displayName || "Usuário"}</h1> 
                // Exibe o displayName do usuário se estiver disponível; caso contrário, exibe "Usuário"
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default Dashboard;
