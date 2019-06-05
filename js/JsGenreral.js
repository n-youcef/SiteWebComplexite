function obj_buttonExemple(){
    this.numBoutton;
    this.elementButton;
} //Objet

var tab_bouttonExemple = [];

function init_buttonsExemples(){
    var tmp_num;
    for(var i=0; i<4; i++){
        tab_bouttonExemple[i] = new obj_buttonExemple();
        tab_bouttonExemple[i].numBoutton = i+1; 
        tmp_num = tab_bouttonExemple[i].numBoutton;
        tab_bouttonExemple[i].elementButton = document.getElementById("btn" + tmp_num);
    }
    tab_bouttonExemple[0].elementButton.addEventListener("click", function() { activerBoutton(1);}, false);
    tab_bouttonExemple[1].elementButton.addEventListener("click", function() { activerBoutton(2);}, false);
    tab_bouttonExemple[2].elementButton.addEventListener("click", function() { activerBoutton(3);}, false);
    tab_bouttonExemple[3].elementButton.addEventListener("click", function() { activerBoutton(4);}, false);
}init_buttonsExemples();


function activerBoutton(numBoutton){
    for(var i=0; i<4; i++)
        tab_bouttonExemple[i].elementButton.classList.remove("bouttonActiver");
    tab_bouttonExemple[numBoutton-1].elementButton.classList.add("bouttonActiver");
    
}

window.onload = function() { tab_bouttonExemple[0].elementButton.classList.toggle('bouttonActiver');}


//---------------------------------------------------------------


var buttonOuiReponse = document.getElementById("buttonOui");
var buttonNonReponse = document.getElementById("buttonNon");

buttonOuiReponse.addEventListener("click", function() { activerBouttonReponse("OUI");}, false);
buttonNonReponse.addEventListener("click", function() { activerBouttonReponse("NON");}, false);

function activerBouttonReponse(bool_reponse){
    if(bool_reponse == "OUI"){
        buttonOuiReponse.classList.add("bouttonActiver");
        buttonNonReponse.classList.remove("bouttonActiver");
    }
    else{
        buttonNonReponse.classList.add("bouttonActiver");
        buttonOuiReponse.classList.remove("bouttonActiver");
    }
}

function desactiverBouttonReponse(){
    buttonOuiReponse.classList.remove("bouttonActiver");
    buttonNonReponse.classList.remove("bouttonActiver");
}