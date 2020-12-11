import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';


import './styles.css';



import logoImg from '../../assets/logo.png';
import dev from '../../assets/dev.png';

export default function Logon(){
  const [matricula, setMatricula] = useState('');
  const history = useHistory();

 
  async function handleAluno(e){
    e.preventDefault();

   
    try{
      alert(await (await api.get( `usuario/${matricula}`)).statusText)
         await api.get( `usuario/${matricula}`);
        //alert('Cadastro feito');
        history.push(`curriculo/${matricula}`);
    }catch(err){
        alert('Erro no login');
    }
}

    return (
      <div className="logon-container">
          <section className="form">
          <img src={logoImg} alt="ads-cz" />

          <form onSubmit={handleAluno} >
              <h1>Faça seu Login</h1>
              <input type="text" placeholder="matricula"
                        value={matricula}
                        onChange={e => setMatricula(e.target.value)} />

              <button className="button"  type="submit">Entrar</button>
              
              <Link className="back-link" to="/adm">
                <FiLogIn />
                Você um administrador? Entre aqui!!
              </Link>
              
          </form>
        
          </section>

           <img src={dev} alt="programador" />
      </div>
    )
}