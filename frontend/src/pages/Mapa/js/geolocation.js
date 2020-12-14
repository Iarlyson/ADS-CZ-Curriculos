/*Variaveis: Mapa, marcador, janela de informação e Janela de Mensagem*/
var map;
var marker;
var infowindow;
var messagewindow;
var geoinfo;
var pontoSalvo = '<div id="message" style="color:black;">Ponto Salvo</div>';
var formvazio = '<center><h3 style="color:black;">Cadastrar Moradia</h3></center><div id="formvazio">'+
             
              '<div class="row">'+
                '<div class="input-field col s12">'+
                  '<input id="nome" type="text" class="validate">'+
                  '<label for="nome">Nome</label>'+
              '</div>'+
              '<div class="row">'+
                '<div class="input-field col s12">'+
                  '<input id="telefone" type="text" class="validate">'+
                  '<label for="telefone">Telefone</label>'+
              '</div>'+
              '<div class="row">'+
                '<div class="input-field col s12">'+
                  '<input id="meuEmail" type="email" class="validate">'+
                  '<label for="meuEmail">Email</label>'+
              '</div>'+
              '<div class="row">'+
                '<div class="input-field col s12">'+
                  '<input id="aluguel" type="text" class="validate">'+
                  '<label for="aluguel">Alugel</label>'+
              '</div>'+
              
              'Tipo de Moradias: <select id="tipoMoradia">'+
                    '<option value="Casa">Casa</option>'+
                    '<option value="Casa coletiva">Casa coletiva</option>'+
                    '<option value="Sobrado">Sobrado</option>'+
                    '<option value="Apartamento">Apartamento</option>'+
                    '<option value="Apartamento coletivo">Apartamento coletivo</option>'+
                         '</select>'+
                         '<br/><br/><center><input class="btn-large waves-effect waves-light blue-grey darken-4" type="button" value="Salvar" onclick="salvarFirebase()"/></center>'+
              
            '</div>';

            //'<select class="browser-default"><option value="" disabled selected>Choose your option</option><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select>'




/*Iniciar mapa*/
function initMap() {
  var california = {lat: -7.1630766, lng: -37.9007674};
  map = new google.maps.Map(document.getElementById('map'), {
    center: california,
    zoom: 7.8
  });

}


function Cadastra(){
  initMap()
 
  // //Codigo para Geolocalização.
  Geolocalizacao();


  //Variaveis para os marcadores
  EventoMarcarCadastrar();


//função de geolocalização
function Geolocalizacao(){
geoinfoWindow = new google.maps.InfoWindow;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    geoinfoWindow.setPosition(pos);
    geoinfoWindow.setContent('<p style="color:black;">Localização encontrada.<p/>');
    geoinfoWindow.open(map);
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, geoinfoWindow, map.getCenter());
  });
} else {
  // Browser não suporta geolocalização
  handleLocationError(false, geoinfoWindow, map.getCenter());
}
}



//Mostra os erros se a geolocalização falhar
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      '<p style="color:black;">Error: Tudo pronto para cadastrar :)' :
                      'Error: seu browser não suporta geolocalização.<p/>');
infoWindow.open(map);
}

}



//Evento pra criar um marcador e pra cadastrar eventos clicando no marcador
function EventoMarcarCadastrar(){

  

infowindow = new google.maps.InfoWindow({
  content: formvazio

});

//Inicializando variavel messagewindow(Mensagem de ponto salvo)
messagewindow = new google.maps.InfoWindow({
  content: pontoSalvo
});

//Evento com Função para criar marcadores
google.maps.event.addListener(map, 'click', function(event) {

  marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: event.latLng,
    map: map

    
  });

  //Evento para quando clicar em alguma marcador a tela de cadastro vai ser aberta(infowindo)
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });

});
}

function salvarFirebase(){
var nome = document.getElementById('nome').value;
var telefone = document.getElementById('telefone').value;
var email = document.getElementById('meuEmail').value;

var aluguel = document.getElementById('aluguel').value;
var tipoMoradia = document.getElementById('tipoMoradia').value;

var latlng = marker.getPosition();
var lat = latlng.lat();
var long = latlng.lng();

var localizacao = {
  nome : nome,
  telefone : telefone,
  email: email,
  aluguel : aluguel,
  tipoMoradia : tipoMoradia,
  lat : lat,
  long : long
}

document.getElementById("nome").value="";
document.getElementById("telefone").value="";
document.getElementById("meuEmail").value="";
document.getElementById("aluguel").value="";

let db = firebase.database().ref().child('Moradias').push(localizacao);
db.set(localizacao);

alert("Moradia Cadastrada!!!");

}









function Procurar(){

  initMap();
  firebase.database().ref('Moradias').on('value', function (snapshot){
    snapshot.forEach(function (item){ 
      
      
      var info = '<center><h3 style="color:black;">Detalhes da Moradia</h3><div id="formpreenchido"></center>'+
      '<table style="color:black"; '+
      '<tr><td>Nome:</td> <td><label>' +item.val().nome + '</label></td> </tr>'+
      '<tr><td>Telefone:</td> <td><label>' + item.val().telefone + '</label></td> </tr>'+
      '<tr><td>Meu email:</td> <td><label>' + item.val().email + '</label></td> </tr>'+
      '<tr><td>Valor do aluguel:</td> <td><label>' + item.val().aluguel + '</label></td> </tr>'+
      '<tr><td>Tipo de moradia:</td> <td><label>' + item.val().tipoMoradia + '</label></td> </tr>';
     
      var telaInformacao = new google.maps.InfoWindow({
        content: info
      });
      
      //Inicializando variavel messagewindow(Mensagem de ponto salvo)
      messagewindow = new google.maps.InfoWindow({
        content: pontoSalvo,
        maxWidth:800
      });
      var marker2;
      //Evento com Função para criar marcadores
      var position = new google.maps.LatLng(item.val().lat, item.val().long);
      marker2 = new google.maps.Marker({
          position: position,
          map: map
        });
      
        //Evento para quando clicar em alguma marcador a tela de cadastro vai ser aberta(infowindo)
        google.maps.event.addListener(marker2, 'click', function() {
          telaInformacao.open(map, marker2);
        });
        
      }); 
     });
}




function Filtrar(){
  initMap();
  
  firebase.database().ref('Moradias').on('value', function (snapshot){
    snapshot.forEach(function (item){ 
      
if(document.getElementById('tipoMoradiafiltro').value==item.val().tipoMoradia){
  var info = '<center><h3 style="color:black;">Detalhes da Moradia</h3><div id="formpreenchido"></center>'+
  '<table style="color:black"; '+
  '<tr><td>Nome:</td> <td><label>' +item.val().nome + '</label></td> </tr>'+
  '<tr><td>Telefone:</td> <td><label>' + item.val().telefone + '</label></td> </tr>'+
  '<tr><td>Meu email:</td> <td><label>' + item.val().email + '</label></td> </tr>'+
  '<tr><td>Valor do aluguel:</td> <td><label>' + item.val().aluguel + '</label></td> </tr>'+
  '<tr><td>Tipo de moradia:</td> <td><label>' + item.val().tipoMoradia + '</label></td> </tr>';
 
  var telaInformacao = new google.maps.InfoWindow({
    content: info
  });
  
  //Inicializando variavel messagewindow(Mensagem de ponto salvo)
  messagewindow = new google.maps.InfoWindow({
    content: pontoSalvo,
    maxWidth:800
  });
  var marker3;
  //Evento com Função para criar marcadores
  var position = new google.maps.LatLng(item.val().lat, item.val().long);
  marker3 = new google.maps.Marker({
      position: position,
      map: map
    });
  
    //Evento para quando clicar em alguma marcador a tela de cadastro vai ser aberta(infowindo)
    google.maps.event.addListener(marker3, 'click', function() {
      telaInformacao.open(map, marker3);
    });
  }
  }); 
 });
 

}