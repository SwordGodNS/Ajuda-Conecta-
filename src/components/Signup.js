// SignUpForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../scripts/firebase';
import { updateProfile } from 'firebase/auth';
import styles from '../styles/Login.module.css';

function Signup({ onSignupSuccess }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleCpfChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2')
                         .replace(/(\d{3})(\d)/, '$1.$2')
                         .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            setCpf(value);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: name,
            });

            setSuccessMessage('Cadastro realizado com sucesso!');
            onSignupSuccess();
        } catch (error) {
            setError('Erro ao cadastrar: ' + error.message);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Cadastrando</h2>
            <p>Preencha seus dados pessoais para criar uma conta</p>
            <form onSubmit={handleSignup}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                    className={styles.fullWidthInput} 
                />
                
                <div className={styles.doubleInput}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className={styles.input} 
                    />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className={styles.input} 
                    />
                </div>
                
                <div className={styles.doubleInput}>
                    <input 
                        type="text" 
                        placeholder="CPF" 
                        value={cpf}
                        onChange={handleCpfChange}
                        required 
                        className={styles.cpfInput} // Aplica a classe de estilo cpfInput
                        maxLength="14"
                    />
                    <div>
                        <label className={styles.label}>Data de Nascimento</label>
                        <input 
                            type="date" 
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required 
                            className={styles.input} 
                        />
                    </div>
                </div>
                
                <div className={styles.doubleInput}>
                    <input 
                        type="text" 
                        placeholder="Bairro" 
                        required 
                        className={styles.input} 
                    />
                    <input 
                        type="text" 
                        placeholder="Número" 
                        required 
                        className={styles.input} 
                    />
                </div>
                
                <div className={styles.doubleInput}>
                    <input 
                        type="text" 
                        placeholder="Cidade" 
                        required 
                        className={styles.input} 
                    />
                    <select required className={styles.input}>
                        <option value="">Estado</option>
                        <option value="SC">SC</option>
                        <option value="RJ">RJ</option>
                        <option value="SP">SP</option>
                    </select>
                </div>

                {error && <p className={styles.error}>{error}</p>}
                {successMessage && <p className={styles.success}>{successMessage}</p>}

                <button type="submit" className={styles.submitBtn}>CADASTRAR</button>
            </form>
        </div>
    );
}

export default Signup;
