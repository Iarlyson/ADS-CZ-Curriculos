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
        api.get(`usuario/`).then(response => {
            setAlunos(response.data);
        })
    }, []);

    async function deltarAlunos(matricula){

        try{
            await api.delete(`usuario/${matricula}`);

            setAlunos(alunos.filter(aluno => aluno.matricula !== matricula));
            alert("Deletado !")
        }catch(err){
            alert('erro ao deletar, tente novamente');
        }
    }

  
    function editUser(data){
        localStorage.setItem('userName',data.nome);
        localStorage.setItem('userMatricula',data.matricula);
        localStorage.setItem('userDataNascimento',data.datanascimento);
        localStorage.setItem('userDataDeConclusao',data.datadeconclusao);
        localStorage.setItem('userTurmaReferente',data.turmareferente);
        history.push(`/editaraluno/${data.matricula}`);

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
                <Link className="button" to="/consunome">Pesquisar</Link>
                <button onClick={Logout} type="button">
                    <FiPower size={19} color="#0e3746" />    
                </button>
            </header>

            <h1>Alunos Cadastrados</h1>
            <ul>
                {alunos.map(aluno => (
                    <form>
                    <li key={aluno.id}>

                    <strong>Nome:</strong>
                    <input type="text" value={aluno.nome} />

                    <strong>Matricula:</strong>
                    <input value={aluno.matricula} />
                                    
                    <strong>Data Nascimento:</strong>
                    <input value={aluno.datanascimento} />

                    <strong>Ano Conclusão:</strong>
                    <input  value={aluno.datadeconclusao}  />

                    <strong>Turma Referente:</strong>
                    <input value={aluno.turmareferente}/>

                    <button onClick={() => deltarAlunos(aluno.matricula)} type="button">
                        <FiX size={21} color="#0e3746" />
                    </button>
                    
                    <input className="btAtualiza" onClick={() => editUser(aluno)} type="submit"  value="Atualizar"/>
                    </li>

                     </form>

                ))}

            </ul>
            
        </div>
    )
}