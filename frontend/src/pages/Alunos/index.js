import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiX } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Alunos(){

    const [nome, setNome] = useState('');

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

    function atualizarAlunos(id){
 


        const data = {
            nome, 
        };
        
      

        try{
            api.put( `usuario/${id}`, data);
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
                    <input defaultValue={aluno.nome}
                    onChange={e => setNome(e.target.value)}  />

                    <strong>Matricula:</strong>
                    <input defaultValue={aluno.matricula}/>

                    <strong>Data Nascimento:</strong>
                    <input type="date" defaultValue={aluno.date}/>

                    <strong>Ano Conclusão:</strong>
                    <input  defaultValue={aluno.datadeconclusao} />

                    <strong>Turma Referente:</strong>
                    <input defaultValue={aluno.turmareferente}  />

                    <button onClick={() => deltarAlunos(aluno.id)} type="button">
                        <FiX size={21} color="#0e3746" />
                    </button>
                    <input type="submit" onClick={() => atualizarAlunos(aluno.id)}  value="Atualizar"/>
                    </li>

                     </form>

                ))}

            </ul>
            
        </div>
    )
}