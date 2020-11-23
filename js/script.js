$(document).ready(function(){

   
    var ball=0;
    var increase=0;

    $("#add").click(function(){  
        
       
        $("#tree").append('<div class="ball" id="ball '+ ball+'"></div>')
        $(".ball"+ ball).animate({"left": posX, "top": posY}, 2000);  
        increase=increase + 1;
        ball=ball + 1;
        document.getElementById("increase").innerHTML = increase;
        });
        
   
    });
    
      
function posX(ball){
    posX=(Math.random() * 500) +1;
}
function posY(ball){
    posY=(Math.random() * 500) +1;
}
    

    $('#remove').click(function(){
        $("#img").effect("shake")



    var posX=0;
    var posY=0;

    





    function changeposition(){
        posX=(Math.random() * 500) + 1;
        posY= (Math.random() * 500) +1;
        $(".ball").animate({"left": posX, "top":posY})
    }

    setInterval(changeposition, 2000);
})






 