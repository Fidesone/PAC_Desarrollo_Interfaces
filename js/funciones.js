$(document).ready(function(){
  
    var posX = 0;
    var posY = 0;
    var contador = 0;
    var eliminadas = 0;
    var cont = 0;
    var claseBola = 0;
    var arrBolas = [];

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

        $("#tree").append('<div class="bola'+claseBola+'" id="bola'+cont+'"></div>');
        $("#bola"+cont).animate({left: posY, top: posX}, 1000);
        arrBolas.push("bola"+cont);
        contador = contador + 1;
        cont = cont + 1;
        document.getElementById("contador").innerHTML = contador;
    }

    function quitarAdorno(){
        $("#tree").effect("shake", {times:5}, 500);
        eliminadas = eliminadas + contador;
        contador = 0;
        document.getElementById("eliminadas").innerHTML = eliminadas;
        document.getElementById("contador").innerHTML = 0;
        arrBolas.forEach(tirarBolas);
    }

    function tirarBolas(item, index){
      posY = (Math.random() * (320 - 70)) + 70;
      $("#"+item).animate({left: posY, top: 350}, 1000);
      $("#"+item).hide( "explode", {pieces: 24 }, 1000 );
    }
    
    $("#add").click(function(){
        ponerAdorno();


    }); 
    $("#remove").click(function(){

      if ( contador == 0 && eliminadas==0){
        window.alert("Debes introducir un adorno primero")
         
      } else if( contador==0 && eliminadas> 0){ 
        window.alert("Debes introducir un adorno primero")

      
        } else {quitarAdorno() }
       
    });

});  