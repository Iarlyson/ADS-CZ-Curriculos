import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Adm() {
    return (
        <div className="adm-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />

                    <h1>Cadastro de Aluno</h1>

                    <Link className="back-link" to="/adm">
                        <FiArrowLeft />
                        Voltar
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome Do Aluno" />
                    <input type="number" placeholder="Matricula" />
                    <input type="date"  placeholder="Data De Nascimento" />
                    <input type="date" placeholder="Ano Conclusão" />
                    <input type="number" placeholder="Turma Referente" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}