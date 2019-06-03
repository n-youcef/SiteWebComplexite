var tab_ExemplesSAT3 = [];

function init_ExemplesSAT3(){
    var tmp_num = 0;
    for(var i=0; i<4; i++){
        tmp_num = i + 1;
        tab_ExemplesSAT3[i] = document.getElementById("divExemple" + tmp_num);
    }
}init_ExemplesSAT3();

function init_affichageExempleSAT3(){
    for(var i=0; i<4; i++){
        tab_ExemplesSAT3[i].style.visibility = "hidden";
        tab_ExemplesSAT3[i].style.height = "0px";
    }
    
    tab_ExemplesSAT3[0].style.visibility = "visible";
    tab_ExemplesSAT3[0].style.height = "auto";
}init_affichageExempleSAT3();



function afficherExempleSAT3(numExemple){
    for(var i=0; i<4; i++){
        tab_ExemplesSAT3[i].style.visibility = "hidden";
        tab_ExemplesSAT3[i].style.height = "0px";
    }
    
    tab_ExemplesSAT3[numExemple-1].style.visibility = "visible";
    tab_ExemplesSAT3[numExemple-1].style.height = "auto"; 
}