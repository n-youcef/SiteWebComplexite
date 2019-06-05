var container = document.getElementById('divGraphe');
var questionClique = document.getElementById('questionClique');
var buttonOui = document.getElementById('buttonOui');
var buttonNon = document.getElementById('buttonNon');
var reponseClique = document.getElementById('reponseClique');


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
    
    switch (numExemple){
        case 1:
            questionClique.innerHTML = "Sj contient-il 2 ensembles mutuellement disjoints?";
            buttonOui.addEventListener("click", function() { afficherReponseClique(1, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseClique(1, "NON");}, false);
            reponseClique.innerHTML = "";
            desactiverBouttonReponse();
            break;
        case 2:
            questionClique.innerHTML = "Sj contient-il 4 ensembles mutuellement disjoints?";
            buttonOui.addEventListener("click", function() { afficherReponseClique(2, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseClique(2, "NON");}, false);
            reponseClique.innerHTML = "";
            desactiverBouttonReponse();
            break;
        case 3:
            questionClique.innerHTML = "Sj contient-il 3 ensembles mutuellement disjoints?";
            buttonOui.addEventListener("click", function() { afficherReponseClique(3, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseClique(3, "NON");}, false);
            reponseClique.innerHTML = "";
            desactiverBouttonReponse();
            break;
        case 4:
            questionClique.innerHTML = "Sj contient-il 3 ensembles mutuellement disjoints?";
            buttonOui.addEventListener("click", function() { afficherReponseClique(4, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseClique(4, "NON");}, false);
            reponseClique.innerHTML = "";
            desactiverBouttonReponse();
            break;

    }
}



function afficherReponseClique(numReponse, reponsePropose){
    switch (numReponse){
        case 1:
            if(reponsePropose == "OUI")
                reponseClique.innerHTML = "Bonne Réponse";
            else
                reponseClique.innerHTML = "Mauvaise Réponse: Nous avons les ensembles S1 et S2 qui sont disjoints.";
            break;
        case 2:
            if(reponsePropose == "OUI")
                reponseClique.innerHTML = "Bonne Réponse";
            else
                reponseClique.innerHTML = "Mauvaise Réponse: Nous avons quatre ensembles dont les sommets sont differents les uns des autres.";
            break;
        case 3:
            if(reponsePropose == "OUI")
                reponseClique.innerHTML = "Mauvaise Réponse : Les ensembles S1 et S3 ont les sommets 3 et 4 en commun. Les ensembles S2 et S3 ont les sommets 5 et 6 ont communs.";
            else
                reponseClique.innerHTML = "Bonne Réponse";
            break;
        case 4:
            if(reponsePropose == "OUI")
                reponseClique.innerHTML = "Mauvaise Réponse: Les ensembles S1 et S3 ont le sommet 1 en commun.";
            else
                reponseClique.innerHTML = "Bonne Réponse";
            break;

    }
}


function afficherGraphe1Clique() {
    buttonOui.addEventListener("click", function() { afficherReponseClique(1, "OUI");}, false);
    buttonNon.addEventListener("click", function() { afficherReponseClique(1, "NON");}, false);
}afficherGraphe1Clique();