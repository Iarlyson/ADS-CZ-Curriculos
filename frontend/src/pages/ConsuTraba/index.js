import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { BsSearch} from 'react-icons/bs';
import { FiPower } from 'react-icons/fi';


import './styles.css';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';


export default function ConsuTec(){

    const [pesquisa, setPesquisa] = useState('');
    const [curriculos, setCurriculos] = useState([]);
    const [filter02, setFilter02] = useState([]);
  
    const history = useHistory();


    useEffect(() =>{
        api.get('curriculo/').then(response => {
            setCurriculos(response.data);
        })
    }, []);

   

    useEffect(() =>{
        setFilter02(
            curriculos.filter(curriculo => {
                return curriculo.trabalhando.toLowerCase().includes(pesquisa.toLowerCase())
            })
        )
    }, [pesquisa, curriculos])
  
    function curriculoUser(matriculaid){
        history.push(`/viewcurriculo/${matriculaid}` );
    }

    
    function Logout(){
        history.push('/');
    }

    return(
          <div className="consutec-container">
            <header>
                <img src={logoImg} alt="logo" />
                <span>Trabalhando ?</span>

                <select  value={pesquisa} onChange={e => setPesquisa(e.target.value)} >
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                
                <button onClick={Logout} type="button">
                    <FiPower size={19} color="#0e3746" />    
                </button>
            </header>

            <ul>
      
            { filter02.map(curriculo => (
                    <li key={curriculo.id}>
                            <strong>Trabalhando</strong>
                            <p>{curriculo.trabalhando}</p>
                            <strong>Tecnologias</strong>
                            <p>{curriculo.tecnologia}</p>
                            <strong>Matricula</strong>
                            <p>{curriculo.matricula}</p>
                            

                            <button onClick={() => curriculoUser(curriculo.matricula)} type="button">
                                <BsSearch size={20} color="0e3746" />
                            </button>
                           
                        </li>
            ))}

            </ul>
        </div>
    );
    
} 