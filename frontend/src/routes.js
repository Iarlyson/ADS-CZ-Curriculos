import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Adm from './pages/Adm';
import EditAluno from './pages/EditAluno'
import Alunos from './pages/Alunos';
import Curriculo from './pages/curriculo';
import Mapa from './pages/Mapa';
import ListarCurriculo from './pages/ListarCurriculo';
import ConsuNome from './pages/ConsuNome';




export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/adm" component={Adm} />
                <Route path="/alunos/" component={Alunos} />
                <Route path='/editaraluno/:matricula' component={EditAluno} />
                <Route path='/curriculo/:matricula' component={Curriculo} />
                <Route exact path='/mapa/:matricula' component={Mapa} />
                <Route path='/viewcurriculo/:matricula' component={ListarCurriculo} />
                <Route path='/consunome' component={ConsuNome} />
               
            </Switch>
        </BrowserRouter>
    );
}