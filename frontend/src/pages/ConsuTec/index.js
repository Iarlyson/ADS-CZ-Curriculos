import React, {useState, useEffect} from 'react';

import { BsSearch} from 'react-icons/bs';


import './styles.css';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';


export default function ConsuTec(){

    const [pesquisa, setPesquisa] = useState('');
    const [curriculos, setCurriculos] = useState([]);
    const [filter02, setFilter02] = useState([]);


    useEffect(() =>{
        api.get(`curriculo/`).then(response => {
            setCurriculos(response.data);
        })
    }, []);

    useEffect(() =>{
        setFilter02(
            curriculos.filter(curriculo => {
                return curriculo.descricao.toLowerCase().includes(pesquisa.toLowerCase())
            })
        )
    }, [pesquisa, curriculos])


 



    return(
          <div className="consutec-container">
            <header>
                <img src={logoImg} alt="logo" />
                <input type='text'  placeholder="Buscar Usuario por Tecnologia"
                onChange={e => setPesquisa(e.target.value)}/>
            </header>

            <ul>
      
            {filter02.map(curriculo => (
                    <li key={curriculo.id}>

                            <strong>Descrição</strong>
                            <p>{curriculo.descricao}</p>
                            <strong>Tecnologias</strong>
                            <p>{curriculo.tecnologia}</p>
                            <button  type="button">
                                <BsSearch size={20} color="0e3746" />
                            </button>
                           
                        </li>
            ))}

            </ul>
        </div>
    );
    
} 