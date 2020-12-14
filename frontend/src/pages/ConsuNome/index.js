import React, {useState, useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom';
import { BsSearch} from 'react-icons/bs';

import './styles.css';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';

export default function ConsuNome() {

    const [pesquisa, setPesquisa] = useState('');
    const [alunos, setAlunos] = useState([]);
    const [filter02, setFilter02] = useState([]);

    const history = useHistory();

    useEffect(() =>{
        api.get(`usuario/`).then(response => {
            setAlunos(response.data);
        })
    }, []);
    

    useEffect(() =>{
        setFilter02(
            alunos.filter(aluno => {
                return aluno.nome.toLowerCase().includes(pesquisa.toLowerCase())
            })
        )
    }, [pesquisa, alunos])


    function curriculoUser(matriculaid){
        history.push(`/viewcurriculo/${matriculaid}` );
    }


    return (
        <div className="consunome-container">
            <header>
                <img src={logoImg} alt="logo" />
                <input type='text'  placeholder="Buscar Usuario pro Nome"
                onChange={e => setPesquisa(e.target.value)}/>
                <Link className="butao" to="/consutec">Pesquisa por Tecnologia</Link>
            </header>

            <ul>
                {filter02.map(aluno => (
                    <li key={aluno.id}>
                    <strong>Nome</strong>
                    <p>{aluno.nome}</p>   
                    <strong>Matricula</strong>
                    <p>{aluno.matricula}</p>  
                    <button onClick={() => curriculoUser(aluno.matricula)} type="button">
                        <BsSearch size={20} color="0e3746" />
                    </button>
                 </li>
                 ))}
            </ul>
        </div>
    );
}