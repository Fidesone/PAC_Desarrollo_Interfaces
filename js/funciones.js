$(document).ready(function(){
  

  
    var posX = 0;
    var posY = 0;
    var contador = 0;
    var eliminadas = 0;
    var cont = 0;
    var claseBola = 0;
    var arrBolas = [];
    var nieve = 0;


    // Lo que queremos hacer aquí es que las bolas se coloquen aleatoriamente dentro del arbol. Para ello hacemos un if-else.
    
    function ponerAdorno(){
        posX = (Math.random() * (300 - 30)) + 30;   
        if (posX <=300 && posX >=245) {
          posY = (Math.random() * (320 - 70)) + 70;
          } else if (posX  <245 && posX >=160) {
            posY = (Math.random() * (290 - 90)) + 90;
          } else if (posX  <160 && posX >=90) {
            posY = (Math.random() * (250 - 120)) + 120;
          } else {
            posY = (Math.random() * (210 - 150)) + 150;
          } 
        
        claseBola = Math.floor(Math.random() * 5 + 1);

        // Creamos un div con un id diferente cada vez (cont) para que no se cree el mismo div todo el rato

        $("#tree").append('<div class="bola'+claseBola+'" id="bola'+cont+'"></div>');
        $("#bola"+cont).animate({left: posY, top: posX}, 1000);
        arrBolas.push("bola"+cont);
        contador = contador + 1;
        cont = cont + 1;
        document.getElementById("contador").innerHTML = contador;
    }
      //de esta manera estamos "sacudiendo" el arbol para que las bolas caigan al suelo

    function quitarAdorno(){
        $("#tree").effect("shake", {times:5}, 500);
        eliminadas = eliminadas + contador;
        contador = 0;
        document.getElementById("eliminadas").innerHTML = eliminadas;
        document.getElementById("contador").innerHTML = 0;
        arrBolas.forEach(tirarBolas);
    }
    // con esta funcion tiramos las bolas al suelo, y finalmente las esconde con .hide

    function tirarBolas(item, index){
      posY = (Math.random() * (320 - 70)) + 70;
      $("#"+item).animate({left: posY, top: 350}, 1000);
      $("#"+item).hide( "explode", {pieces: 24 }, 1000 );
    }
    
    window.addEventListener("load", function(){
      document.getElementById("musica").addEventListener("click", sonarMusica);
      document.getElementById("musica").addEventListener("click", quitarMusica);
    });

    
      // Le hemos añadido un boton de "musica" para darle un poco de ambiente navideño

    function sonarMusica(){
      var sonido= document.createElement("iframe");
      sonido.setAttribute("src", "audio/adeste_fideles.mp3")
      document.body.appendChild(sonido);
      document.getElementById("musica").removeEventListener("click", sonarMusica);
    }
     function quitarMusica (){

       var iframe = document.getElementsByTagName("iframe");

       if (iframe.length > 0){
        iframe[0].parentNode.removeChild(iframe[0]);
        document.getElementById("musica").addEventListener("click", sonarMusica);
      }

     }



    // las funciones.click llaman a otras funciones al darle click a los botones donde están situadas

    $("#add").click(function(){
        ponerAdorno();
        
    
    }); 

    $("#remove").click(function(){

      //Creo una alerta para que no se pueda mover el arbol sino contiene adornos.

      if ( contador == 0 && eliminadas==0){
        window.alert("Debes introducir un adorno primero")
         
      } else if( contador==0 && eliminadas> 0){ 
        window.alert("Debes introducir un adorno primero")

      
        } else {quitarAdorno() }

        
       
    });



    
    
 

});  