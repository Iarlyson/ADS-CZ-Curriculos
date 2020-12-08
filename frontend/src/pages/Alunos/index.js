import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiX } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Alunos(){

    const [alunos, setAlunos] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        api.get('usuario').then(response => {
            setAlunos(response.data);
        })
    }, []);

    async function deltarAlunos(id){
        try{
            await api.delete(`usuario/${id}`);

            setAlunos(alunos.filter(aluno => aluno.id !== id));
        }catch(err){
            alert('erro ao deletar, tente novamente');
        }
    }

    function Logout(){
        history.push('/');
    }


    return (
        <div className="alunos-container">
            <header>
                <img src={logoImg} alt="logo"/>
                <span>Bem vindo, Administrador</span>

                <Link className="button" to="/Adm">Cadastrar Novo Aluno</Link>
                <button onClick={Logout} type="button">
                    <FiPower size={19} color="#0e3746" />    
                </button>
            </header>

            <h1>Alunos Cadastrados</h1>
            <ul>
                {alunos.map(aluno => (
                    <li key={aluno.id}>
                    <strong>Nome:</strong>
                    <p>{aluno.nome}</p>

                    <strong>Matricula:</strong>
                    <p> {aluno.matricula} </p>

                    <strong>Data Nascimento:</strong>
                    <p>{aluno.datanascimento}</p>

                    <strong>Ano Conclusão:</strong>
                    <p>{aluno.anoconclusao}</p>

                    <strong>Turma Referente:</strong>
                    <p>{aluno.turmareferente}</p>

                    <button onClick={() => deltarAlunos(aluno.id)} type="button">
                        <FiX size={21} color="#0e3746" />
                    </button>
                </li>
                ))}

            </ul>
            
        </div>
    )
}