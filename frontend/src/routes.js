import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Adm from './pages/Adm';
import Alunos from './pages/Alunos';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/adm" component={Adm} />
                <Route path="/alunos" component={Alunos} />
            </Switch>
        </BrowserRouter>
    );
}