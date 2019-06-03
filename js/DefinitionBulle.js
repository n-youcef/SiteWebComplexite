function GetId(id) {
    return document.getElementById(id);
}
var isBulleVisible = false; // La variable i nous dit si la bulle est visible ou non

var tabDefinition = {
    Clique: "Une clique d'un graphe non orienté est, en théorie des graphes, un sous-ensemble des sommets de ce graphe dont le sous-graphe induit est complet, c'est-à-dire que deux sommets quelconques de la clique sont toujours adjacents.",
    Graphe: "Ensemble de sommets (ou points) et d'arcs (ou lignes orientées) ou d'arêtes (ou lignes non orientées) liant certains couples de points.",
};

function move(e) {

    if (isBulleVisible) { 
        var longueurBlocPrincipal =document.getElementById("blocPrincipal").offsetWidth;
        
        if(longueurBlocPrincipal >= 800){
            var widthBody = (document.body.clientWidth);
        
            var espaceBlanc = ((widthBody - longueurBlocPrincipal)/2);
        
            var borneGauche = espaceBlanc + 49;
            var borneDroite = espaceBlanc + 750;
        
            var longueur = event.pageX - 250;;
         
            if(!((event.pageX - 250) > borneGauche))
                longueur = borneGauche;
            
            if(!((event.pageX + 250) < borneDroite))
                longueur = borneDroite -500;
            
            GetId("divDefinition").style.left = longueur + "px";
            GetId("divDefinition").style.top = event.pageY - 70 + "px";
        }
     
        else{
            // Si la bulle est visible, on calcul en temps reel sa position ideale
            GetId("divDefinition").style.left = event.pageX + "px";
            GetId("divDefinition").style.top = event.pageY - 70 + "px";   
        }
    }
}

function definir(text) {
    if (isBulleVisible == false) {
        GetId("divDefinition").style.visibility = "visible";
        GetId("divDefinition").innerHTML = tabDefinition[text]; // on copie notre texte dans l'élément html
        isBulleVisible = true;
    }
}

function cacher() {
    if (isBulleVisible == true) {
        GetId("divDefinition").style.visibility = "hidden"; // Si la bulle est visible on la cache
        isBulleVisible = false;
    }
}

document.onmousemove = move; // dès que la souris bouge, on appelle la fonction move pour mettre à jour la position de la bulle.



var tab_motADefinir = document.getElementsByClassName("motADefinir");


//creer un tableau qui contiendra les mots a definir
var tab_mot;

for(var i=0; i< tab_motADefinir.length; i++){
    
}


for(var i=0; i< tab_motADefinir.length; i++){
    //utiliserr ce nouveau tableau pour utiliser comme parametre fonction definir(...) 
    tab_motADefinir[i].addEventListener("mouseover", function() { definir(tab_motADefinir[i].innerHTML);}, false);
    tab_motADefinir[i].addEventListener("mouseout", function() { cacher();}, false);
    //tab_motADefinir[i].onmouseover = test3;
}

function test3(num){
    console.log("heyyyyyy " + num);
}
