
import React from "react";


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

              
          </form>
        
          </section>

           <img src={dev} alt="programador" />
      </div>
    )
}