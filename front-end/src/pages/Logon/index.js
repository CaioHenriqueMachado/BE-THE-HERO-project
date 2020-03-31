import React, {useState} from 'react';

// Para não recarrecar pagina.
import {Link, useHistory} from 'react-router-dom';

// Para importar determinado icone
import {FiLogIn} from 'react-icons/fi';

//Para a API
import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    const [id, setId] = useState('');

    // Para voltar para a tela de login 
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
            
        }catch(err){
            alert('Falha no login, tente novamente!!')
        }

    }

    return (
     <div className="logon-container">
         <section className="form">
            <img src={logoImg} alt="Logo"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu Logon</h1>

                <input placeholder="Sua ID"
                 value={id}
                 onChange={e => setId(e.target.value)} 
                 />

                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn  size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </form>
         </section>
         <img src={heroesImg} alt="Heroes" />
     </div>

    );

}