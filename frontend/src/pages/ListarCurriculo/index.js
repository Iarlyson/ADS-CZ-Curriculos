import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';



import './styles.css';
import logoImg from '../../assets/logo.png';

import GoogleApiWrapper from './../Mapa/index';

export default function ListarCurriculo() {

    const [alunos, setAlunos] = useState([]);
    const [curriculos, setCurriculo] = useState([]);

    var { matricula } = useParams();

    useEffect(() => {
        api.get(`usuario/${matricula}`).then(response => {
            setAlunos(response.data);
        })
    }, [matricula]);


    useEffect(() => {
        api.get(`curriculo/${matricula}`).then(response => {
            setCurriculo(response.data);
        })
    }, [matricula]);






    return (
        <div className="lista-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />
                    <h1> Seu Curriculo</h1>


                   <GoogleApiWrapper className="mapa" />


                </section>
                <ul>

                    {alunos.map(aluno => (
                        <li key={aluno.id}>

                            <strong>Nome</strong>
                            <p>{aluno.nome}</p>
                            <strong>Matricula</strong>
                            <p>{aluno.matricula}</p>
                            <strong>Data Nascimento</strong>
                            <p>{aluno.datanascimento}</p>
                            <strong>Data de Conclusao</strong>
                            <p>{aluno.datadeconclusao}</p>
                            <strong>Turma Referente</strong>
                            <p>{aluno.turmareferente}</p>
                        </li>
                    ))}
                    {curriculos.map(curriculo => (
                        <li key={curriculo.id}>

                            <strong>Descrição</strong>
                            <p>{curriculo.descricao}</p>
                            <strong>Email</strong>
                            <p>{curriculo.email}</p>
                            <strong>Telefone</strong>
                            <p>{curriculo.telefone}</p>
                            <strong>Linkedin</strong>
                            <p>{curriculo.linkedin}</p>
                            <strong>github</strong>
                            <p>{curriculo.github}</p>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    );
}