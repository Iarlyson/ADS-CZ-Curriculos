import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiX } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Alunos(){

    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [datanascimento, setDatanascimento] = useState('');
    const [datadeconclusao, setDatadeconclusao] = useState('');
    const [turmareferente, setTurmareferente] = useState('');
    
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

  async function atualizarAlunos(id){


        const data = {
            nome, 
            matricula,
            datanascimento,
            datadeconclusao,
            turmareferente
        };
        
      

        try{
           await api.put( `usuario/${id}`, data);

            alert("feito")
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
                    <form onSubmit={atualizarAlunos}>
                    <li key={aluno.id}>

                    <strong>Nome:</strong>
                    <input type="text" defaultValue={aluno.nome}
                    onChange={e => setNome(e.target.value)}  />

                    <strong>Matricula:</strong>
                    <input type="number" defaultValue={aluno.matricula}
                    onChange={e => setMatricula(e.target.value)}/>

                    <strong>Data Nascimento:</strong>
                    <input defaultValue={aluno.datanascimento} 
                    onChange={e => setDatanascimento(e.target.value)} />

                    <strong>Ano Conclusão:</strong>
                    <input  defaultValue={aluno.datadeconclusao}
                    onChange={e => setDatadeconclusao(e.target.value)} />

                    <strong>Turma Referente:</strong>
                    <input defaultValue={aluno.turmareferente}
                    onChange={e => setTurmareferente(e.target.value)} />

                    <button onClick={() => deltarAlunos(aluno.id)} type="button">
                        <FiX size={21} color="#0e3746" />
                    </button>
                    
                    <input className="btAtualiza" type="submit" onClick={() => atualizarAlunos(aluno.id)}  value="Atualizar"/>
                    </li>

                     </form>

                ))}

            </ul>
            
        </div>
    )
}