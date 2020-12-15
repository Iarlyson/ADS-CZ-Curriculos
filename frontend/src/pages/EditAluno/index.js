import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Alunos(){
    
    const userNome = localStorage.getItem('userName');
    const userMatricula = localStorage.getItem('userMatricula');
    const userDataNascimento = localStorage.getItem('userDataNascimento');
    const userDataDeConclusao = localStorage.getItem('userDataDeConclusao');
    const userTurmaReferente = localStorage.getItem('userTurmaReferente');
    
    const history = useHistory();


    const [nome, setNome] = useState(userNome);
    const [datanascimento, setDatanascimento] = useState(userDataNascimento);
    const [datadeconclusao, setDatadeconclusao] = useState(userDataDeConclusao);
    const [turmareferente, setTurmareferente] = useState(userTurmaReferente);
    




  async function atualizarAlunos(e){
    e.preventDefault();

        const data = {
            nome, 
            datanascimento,
            datadeconclusao,
            turmareferente
        }
        
      

        try{
           await api.put( `usuario/${userMatricula}`, data);
           alert('Editado com sucesso.');
           localStorage.clear();
           history.push('/alunos');

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
                    <form onSubmit={atualizarAlunos}>
                    <li>

                    <strong>Nome:</strong>
                    <input type="text" value={nome}
                    onChange={e => setNome(e.target.value)}  />


                    <strong>Data Nascimento:</strong>
                    <input type="text" value={datanascimento} 
                    onChange={e => setDatanascimento(e.target.value)} />

                    <strong>Ano Conclusão:</strong>
                    <input  type="text" value={datadeconclusao}
                    onChange={e => setDatadeconclusao(e.target.value)} />

                    <strong>Turma Referente:</strong>
                    <input type="text" value={turmareferente}
                    onChange={e => setTurmareferente(e.target.value)} />

                    
                    <input className="btAtualiza" type="submit" value="Atualizar"/>
                    </li>

                     </form>


            </ul>
            
        </div>
    )
}