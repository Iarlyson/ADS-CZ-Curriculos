import React  from 'react';
import {Link} from 'react-router-dom';

import './styles.css';


import logoImg from '../../assets/logo.png';

export default function curriculo(){


    return (
         <div className="curriculo-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />

                    
                    <Link className="button" to="/mapa">Visualizar Mapa</Link>
                    <ul>
                     
                        <li >
                            <strong>Nome</strong>
                            <p>....</p>
                            <strong>Matricula</strong>
                            <p>....</p>
                            <strong>Data Nascimento</strong>
                            <p>...</p>
                            <strong>Data de Conclusao</strong>
                            <p>....</p>
                            <strong>Turma Referente</strong>
                            <p>....</p>

                        </li>
                       
                    </ul>
                   

                </section>
               
                <form >
                    <input type="email"
                         placeholder="Email"
                      />

                    <input type="number"
                         placeholder="Telefone"
                         />

                    <input type="text"
                         placeholder="LinkedIn"
                         />

                    <input type="text"
                         placeholder="Github"
                         />

                     <textarea placeholder="Descricao"
                        />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}