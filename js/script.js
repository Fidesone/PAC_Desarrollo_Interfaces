var bolasCreadas;
var bolasEliminadas;
var color = ["blue", "red", "yellow", "green", "purple"];

function adornar(){
    var bola =$('<div class"bola"></div>')
    var positionTop = randomRange(50,300);
    var positionLeft = 0;

    if (positionTop >=50 && positionTop <=90){
        var positionLeft=randomRange(190, 230);
    } else if(posicionTop > 80 && posicionTop <= 130) {
        
        var posicionLeft = randomRange(170, 260);
    } else if (posicionTop > 130 && posicionTop <= 220) {
        
        var posicionLeft = randomRange(136, 265);
        
    } else if (posicionTop > 210 && posicionTop <= 320) {
        
        var posicionLeft = randomRange(115, 300);
}

}
