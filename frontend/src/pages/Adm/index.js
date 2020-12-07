import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Adm() {

    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [datanascimento, setDatanascimento] = useState('');
    const [anoconclusao, setAnoconclusao] = useState('');
    const [turmareferente, setTurmareferente] = useState('');
    

   async function handleAluno(e){
        e.preventDefault();

        const data = {
            nome, 
            matricula,
            datanascimento,
            anoconclusao,
            turmareferente
        };

        try{
             await api.post( 'usuario', data);
            
            alert('Cadastro feito');
        }catch(err){
            alert('Erro ao cadastrar');
        }
    }


    return (
        <div className="adm-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />

                    <h1>Cadastro de Aluno</h1>

                    <Link className="back-link" to="/">
                        <FiArrowLeft />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleAluno}>

                    <input placeholder="Nome Do Aluno"
                        value={nome}
                        onChange={e => setNome(e.target.value)} />

                    <input type="number"
                         placeholder="Matricula"
                         value={matricula}
                        onChange={e => setMatricula(e.target.value)}/>

                    <input 
                         placeholder="Data De Nascimento"
                         value={datanascimento}
                        onChange={e => setDatanascimento(e.target.value)} />

                    <input 
                         placeholder="Ano Conclusão"
                         value={anoconclusao}
                        onChange={e => setAnoconclusao(e.target.value)} />

                    <input 
                         placeholder="Turma Referente"
                         value={turmareferente}
                        onChange={e => setTurmareferente(e.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}