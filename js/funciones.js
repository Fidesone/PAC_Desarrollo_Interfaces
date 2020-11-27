$(document).ready(function(){
  

  
    var posX = 0;
    var posY = 0;
    var contador = 0;
    var eliminadas = 0;
    var cont = 0;
    var claseBola = 0;
    var arrBolas = [];
    var nieve = 0;

    function minieve(){

      $.fn.snow();

    }

    function stopnieve(){
      
    }

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
        minieve();
    
    }); 

    $("#remove").click(function(){

      stopnieve();

      if ( contador == 0 && eliminadas==0){
        window.alert("Debes introducir un adorno primero")
         
      } else if( contador==0 && eliminadas> 0){ 
        window.alert("Debes introducir un adorno primero")

      
        } else {quitarAdorno() }

        
       
    });



    // jQuery Snow Effect Plugin
    
 (function($){$.fn.snow=function(options){var $flake=$('<div id="flake" />').css({'position':'absolute','top':'-50px'}).html('&#10052;'),documentHeight=$(document).height(),documentWidth=$(document).width(),defaults={minSize:10,maxSize:20,newOn:500,flakeColor:"#FFFFFF"},options=$.extend({},defaults,options);var interval=setInterval(function(){var startPositionLeft=Math.random()*documentWidth-100,startOpacity=0.5+Math.random(),sizeFlake=options.minSize+Math.random()*options.maxSize,endPositionTop=documentHeight-40,endPositionLeft=startPositionLeft-100+Math.random()*200,durationFall=documentHeight*10+Math.random()*5000;$flake.clone().appendTo('body').css({left:startPositionLeft,opacity:startOpacity,'font-size':sizeFlake,color:options.flakeColor}).animate({top:endPositionTop,left:endPositionLeft,opacity:0.2},durationFall,'linear',function(){$(this).remove()});},options.newOn);};})(jQuery);

});  