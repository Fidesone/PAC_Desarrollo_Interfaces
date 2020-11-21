$(document).ready(function(){
    $("#add").click(function(){
        
        $("#main").append("<div class='ball'></div>")
             
        });
        
    });


    function addball(){
        var contador=0;
    }

    $('#remove').click(function(){
        $("#img").effect("shake")



    var posX=0;
    var posY=0;

    //llamada a las funciones





    function changeposition(){
        posX=(Math.random() * 500) + 1;
        posY= (Math.random() * 500) +1;
        $("#bola").animate({"left": posX, "top":posY})
    }

    //setInterval(changeposition, 2000);
})






 