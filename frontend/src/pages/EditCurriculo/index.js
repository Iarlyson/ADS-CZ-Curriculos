import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Alunos(){
    
    const curriculoEmail = localStorage.getItem('curriculoEmail');
    const curriculoMatricula = localStorage.getItem('curriculoMatricula');
    const curriculoTelefone = localStorage.getItem('curriculoTelefone');
    const curriculoTrabalhando = localStorage.getItem('curriculoTrabalhando');
    const curriculoTecnologia = localStorage.getItem('curriculoTecnologia');
    const curriculoLinkedin = localStorage.getItem('curriculoLinkedin');
    const curriculoGithub = localStorage.getItem('curriculoGithub');
    const curriculoDescricao = localStorage.getItem('curriculoDescricao');
    const history = useHistory();


    const [email, setEmail] = useState(curriculoEmail);
    const [telefone, setTelefone] = useState(curriculoTelefone);
    const [trabalhando, setTrabalhando] = useState(curriculoTrabalhando);
    const [tecnologia, setTecnologia] = useState(curriculoTecnologia);
    const [linkedin, setLinkedin] = useState(curriculoLinkedin);
    const [github, setGithub] = useState(curriculoGithub);
    const [descricao, setDescricao] = useState(curriculoDescricao);




  async function atualizarCurriculo(e){
    e.preventDefault();

        const data = {
            email, 
            telefone,
            trabalhando,
            tecnologia,
            linkedin,
            github,
            descricao
        }
        
      

        try{
           await api.put( `curriculo/${curriculoMatricula}`, data);
           alert('Editado com sucesso.');
           localStorage.clear();
           history.push(`/viewcurriculo/${curriculoMatricula}`);

        }catch(err){
            alert('erro ao atualizar, tente novamente');
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
                    <form onSubmit={atualizarCurriculo}>
                    <li>

                    <strong>Email:</strong>
                    <input type="text" value={email}
                    onChange={e => setEmail(e.target.value)}  />
   

                    <strong>Telefone:</strong>
                    <input type="text" value={telefone} 
                    onChange={e => setTelefone(e.target.value)} />

                    <strong>Trabalhando?</strong>
                    <select  value={trabalhando} onChange={e => setTrabalhando(e.target.value)} >
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                 

                    <strong>Tecnologias:</strong>
                    <input type="text" value={tecnologia}
                    onChange={e => setTecnologia(e.target.value)} />

                    <strong>Linkedin:</strong>
                    <input type="text" value={linkedin} 
                    onChange={e => setLinkedin(e.target.value)} />

                    <strong>GitHub:</strong>
                    <input  type="text" value={github}
                    onChange={e => setGithub(e.target.value)} />

                    <strong>Descrição:</strong>
                    <input type="text" value={descricao}
                    onChange={e => setDescricao(e.target.value)} />
                    
                    <input className="btAtualiza" type="submit" value="Atualizar"/>
                    </li>

                     </form>


            </ul>
            
        </div>
    )
}