import React from "react";
import { Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';


import './styles.css';

import logoImg from '../../assets/logo.png';
import dev from '../../assets/dev.png';

export default function Logon(){
    return (
      <div className="logon-container">
          <section className="form">
          <img src={logoImg} alt="ads-cz" />

          <form>
              <h1>Faça seu Login</h1>
              <input placeholder="Matricula" />
              <button className="button" type="submit">Entrar</button>
              
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