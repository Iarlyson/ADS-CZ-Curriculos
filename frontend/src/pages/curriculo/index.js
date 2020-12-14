import React, {useState, useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';


import logoImg from '../../assets/logo.png';

export default function Curriculo(){

    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [trabalho, setTrabalhando] = useState('');
    const [tecnologia, setTecnologia] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [github, setGithub] = useState('');
    const [descricao, setDescricao] = useState('');

    const [alunos, setAlunos] = useState([]);
    const history = useHistory();

    var {matricula} = useParams();

    useEffect(() =>{
        api.get(`usuario/${matricula}`).then(response => {
            setAlunos(response.data);
        })
    }, [matricula]);
var trabalhando = trabalho.toString();
    async function handleAluno(e){
        e.preventDefault();

        const data = {
            matricula,
            email, 
            telefone,
            trabalhando,
            tecnologia,
            linkedin,
            github,
            descricao
        };

        try{
             await api.post( `curriculo/${matricula}`, data);
            //alert('Cadastro feito');
            history.push(`/viewcurriculo/${matricula}`);
        }catch(err){
            alert('Erro ao cadastrar');
        }
    }

   


    return (
         <div className="curriculo-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />

                
                   
                    <ul>
                    {alunos.map(aluno => (
                    <li key={aluno.id}>

                            <strong>Nome</strong>
                            <input Value={aluno.nome} />
                            <strong>Matricula</strong>
                            <input Value={aluno.matricula} />
                            <strong>Data Nascimento</strong>
                            <input Value={aluno.datanascimento} />
                            <strong>Data de Conclusao</strong>
                            <input Value={aluno.datadeconclusao} />
                            <strong>Turma Referente</strong>
                            <input Value={aluno.turmareferente} />

                        </li>
                        ))}

                    </ul>
                   

                </section>
               
                <form onSubmit={handleAluno}>

                <label>
                        Trabalhando?
                    <select  value={trabalho} onChange={e => setTrabalhando(e.target.value)} >
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                    </label>
                    
                    <input type="email"
                         placeholder="Email" value={email}
                         onChange={e => setEmail(e.target.value)} />
                      

                    <input type="number"
                         placeholder="Telefone"
                         value={telefone}
                         onChange={e => setTelefone(e.target.value)} />
                  
                    <input type="text"
                         placeholder="tecnologia"
                         value={tecnologia}
                         onChange={e => setTecnologia(e.target.value)} />
                    <input type="text"
                         placeholder="LinkedIn"
                         value={linkedin}
                         onChange={e => setLinkedIn(e.target.value)} />

                    <input type="text"
                         placeholder="Github" value={github}
                         onChange={e => setGithub(e.target.value)} />

                     <textarea placeholder="Descricao" value={descricao}
                         onChange={e => setDescricao(e.target.value)} />
        
                    <button  className="button" type="submit">Cadastrar</button>


                </form>
            </div>
        </div>
    )
}