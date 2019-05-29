function GetId(id) {
    return document.getElementById(id);
}
var isBulleVisible = false; // La variable i nous dit si la bulle est visible ou non

var tabDefinition = {
    Clique: "Une clique d'un graphe non orienté est, en théorie des graphes, un sous-ensemble des sommets de ce graphe dont le sous-graphe induit est complet, c'est-à-dire que deux sommets quelconques de la clique sont toujours adjacents.",
    Graphe: "Ensemble de sommets (ou points) et d'arcs (ou lignes orientées) ou d'arêtes (ou lignes non orientées) liant certains couples de points.",
};

function move(e) {
    if (isBulleVisible) { // Si la bulle est visible, on calcul en temps reel sa position ideale
        var longueurBlocPrincipal =document.getElementById("blocPrincipal").offsetWidth;
        var largBody = (document.body.clientWidth);
        
        var borneGauche = ((largBody - longueurBlocPrincipal)/2) + 10;
        var borneDroite = ((largBody - longueurBlocPrincipal)/2) + 800;
        
        var longueur = 10;
         
        if(largBody > 800){
            if((event.pageX - 243) > borneGauche)
                longueur = event.pageX - 243;
            else
            longueur = borneGauche;
        }
        
            
        
        GetId("divDefinition").style.left = longueur + "px";
        GetId("divDefinition").style.top = event.pageY - 70 + "px";
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
