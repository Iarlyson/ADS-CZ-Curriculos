import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import { FiPower} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Alunos(){
var nomedobanco;
var matriculadobanco;
var datanascimentodobanco;
var datadeconclusaodobanco;
var turmareferentedobanco;
    const [nome, setNome] = useState('');
    const [idmatricula, setMatricula] = useState('');
    const [datanascimento, setDatanascimento] = useState('');
    const [datadeconclusao, setDatadeconclusao] = useState('');
    const [turmareferente, setTurmareferente] = useState('');
    
    const [alunos, setAlunos] = useState([]);
    const history = useHistory();
    var {matricula} = useParams();
    {alunos.map(aluno => (
        nomedobanco = useState(aluno.nome)
    ))};

    useEffect(() =>{
        api.get(`usuario/${matricula}`).then(response => {
            setAlunos(response.data);
        })
    }, [matricula]);

  async function atualizarAlunos(matriculaid){


        const data = {
            nome, 
            idmatricula,
            datanascimento,
            datadeconclusao,
            turmareferente
        };
        
      

        try{
           await api.put( `usuario/${matriculaid}`, data);

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
                    <form onSubmit={atualizarAlunos}>
                    <li>

                    <strong>Nome:</strong>
                    <input type="text" value={nome}
                    onChange={e => setNome(e.target.value)}  />

                    <strong>Matricula:</strong>
                    <input type="number" value={idmatricula}
                    onChange={e => setMatricula(e.target.value)}/>

                    <strong>Data Nascimento:</strong>
                    <input value={datanascimento} 
                    onChange={e => setDatanascimento(e.target.value)} />

                    <strong>Ano Conclusão:</strong>
                    <input  value={datadeconclusao}
                    onChange={e => setDatadeconclusao(e.target.value)} />

                    <strong>Turma Referente:</strong>
                    <input value={turmareferente}
                    onChange={e => setTurmareferente(e.target.value)} />

                    
                    <input className="btAtualiza" type="submit" onClick={() => atualizarAlunos(aluno.matricula)}  value="Atualizar"/>
                    </li>

                     </form>


            </ul>
            
        </div>
    )
}