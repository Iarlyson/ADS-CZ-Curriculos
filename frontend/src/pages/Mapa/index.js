import React, {useEffect } from 'react';
import { useParams } from 'react-router-dom'

//import { Map, GoogleApiWrapper } from 'google-maps-react';
import Mapfront from './html/index.html'


export default function Mapa (){

var {matricula} = useParams();

useEffect(()=>{
  localStorage.setItem("matricula", matricula);
}, [matricula])

function createMarkup() {
  return {__html: Mapfront};
}

    return (
<div dangerouslySetInnerHTML={createMarkup()} />
    );
  
}

