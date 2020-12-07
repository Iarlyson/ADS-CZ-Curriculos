import React from 'react';
import {Link} from 'react-router-dom';
import { FiPower, FiX } from 'react-icons/fi';


import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Alunos(){
    return (
        <div className="alunos-container">
            <header>
                <img src={logoImg} alt="logo"/>
                <span>Bem vindo, Administrador</span>

                <Link className="button" to="/Adm">Cadastrar Novo Aluno</Link>
                <button type="button">
                    <FiPower size={19} color="#0e3746" />    
                </button>
            </header>

            <h1>Alunos Cadastrados</h1>
            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Pedro Henrrique</p>

                    <strong>Matricula:</strong>
                    <p>2017120102</p>

                    <strong>Data Nascimento:</strong>
                    <p>15-06-1197</p>


                    <strong>Ano Conclusão:</strong>
                    <p>12 -06-2016</p>


                    <strong>Turma Referente:</strong>
                    <p>2017.1</p>

                    <button type="button">
                        <FiX size={21} color="#0e3746" />
                    </button>
                </li>

                <li>
                    <strong>Nome:</strong>
                    <p>Pedro Henrrique</p>

                    <strong>Matricula:</strong>
                    <p>2017120102</p>

                    <strong>Data Nascimento:</strong>
                    <p>15-06-1197</p>


                    <strong>Ano Conclusão:</strong>
                    <p>12 -06-2016</p>


                    <strong>Turma Referente:</strong>
                    <p>2017.1</p>

                    <button type="button">
                        <FiX size={21} color="#0e3746" />
                    </button>
                </li>
            
                <li>
                    <strong>Nome:</strong>
                    <p>Pedro Henrrique</p>

                    <strong>Matricula:</strong>
                    <p>2017120102</p>

                    <strong>Data Nascimento:</strong>
                    <p>15-06-1197</p>


                    <strong>Ano Conclusão:</strong>
                    <p>12 -06-2016</p>


                    <strong>Turma Referente:</strong>
                    <p>2017.1</p>

                    <button type="button">
                        <FiX size={21} color="#0e3746" />
                    </button>
                </li>
            
                <li>
                    <strong>Nome:</strong>
                    <p>Pedro Henrrique</p>

                    <strong>Matricula:</strong>
                    <p>2017120102</p>

                    <strong>Data Nascimento:</strong>
                    <p>15-06-1197</p>


                    <strong>Ano Conclusão:</strong>
                    <p>12 -06-2016</p>


                    <strong>Turma Referente:</strong>
                    <p>2017.1</p>

                    <button type="button">
                        <FiX size={21} color="#0e3746" />
                    </button>
                </li>
            </ul>
            
        </div>
    )
}