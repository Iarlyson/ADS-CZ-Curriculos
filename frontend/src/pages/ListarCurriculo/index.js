import React, { useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FiPower } from 'react-icons/fi';




import './styles.css';


import GoogleApiWrapper from './../Mapa/index';

export default function ListarCurriculo() {

    const [alunos, setAlunos] = useState([]);
    const [curriculos, setCurriculo] = useState([]);

    var { matricula } = useParams();
    const history = useHistory();

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

    async function deltarCurriculo(matricula){

        try{
            await api.delete(`curriculo/${matricula}`);

            alert("Deletado !")
            history.push(`/viewcurriculo/${matricula}`);

        }catch(err){
            alert('erro ao deletar, tente novamente');
        }
    }

    function editCurriculo(data){
        localStorage.setItem('curriculoEmail',data.email);
        localStorage.setItem('curriculoMatricula',data.matricula);
        localStorage.setItem('curriculoTelefone',data.telefone);
        localStorage.setItem('curriculoTrabalhando',data.trabalhando);
        localStorage.setItem('curriculoTecnologia',data.tecnologia);
        localStorage.setItem('curriculoLinkedin',data.linkedin);
        localStorage.setItem('curriculoGithub',data.github);
        localStorage.setItem('curriculoDescricao',data.descricao);
        history.push(`/editarcurriculo/${data.matricula}`);
        
      }




    return (
        <div className="lista-container">
            <div className="content">

         
            
                <section>
                
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

                            <strong>Email</strong>
                            <p>{curriculo.email}</p>
                            <strong>Telefone</strong>
                            <p>{curriculo.telefone}</p>
                            <strong>Trabalhando ?</strong>
                            <p>{curriculo.trabalhando}</p>
                            <strong>Tecnologias</strong>
                            <p>{curriculo.tecnologia}</p>
                            <strong>Linkedin</strong>
                            <p>{curriculo.linkedin}</p>
                            <strong>github</strong>
                            <p>{curriculo.github}</p>
                            <strong>Descrição</strong>
                            <p>{curriculo.descricao}</p>
                                <br/>
                            <button className="botao" onClick={() => deltarCurriculo(curriculo.matricula)} type="button">Deletar</button>
                            <button className="botao" onClick={() => editCurriculo(curriculo)} type="button">Editar</button>

                        </li>
                    ))}

                </ul>
            </div>

        </div>
    );
}