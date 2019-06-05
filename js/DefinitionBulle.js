function GetId(id) {
    return document.getElementById(id);
}
var isBulleVisible = false; // La variable i nous dit si la bulle est visible ou non

var tabDefinition = {
    Clique: "Une clique d'un graphe non orienté est un sous-ensemble de sommets dont le sous-graphe induit est complet, c'est-à-dire que deux sommets quelconques de la clique sont toujours adjacents.",
    EnsembleIndependant: "Ensemble indépendant, appelé aussi un stable ou independent set en anglais, est un ensemble de sommets deux à deux non adjacents. ",
    SAT3:"C'est une formules sous formes normales conjonctives des clauses avec exactement 3 littéraux",
    NodeCover:"C'est un sous ensemble V' ⊆ V tel que |V'| ≤ k et toute arête de E a l’une de ses extrémités dans V'",
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

function definir(event) {
    //if (isBulleVisible == false) {
        
        /*  On commence par récupérer le mot se trouvant dans la balise SPAN 
         *  qui a été mousOver.
         *  Puis on transforme la premiere lettre de ce mot en majuscule et le reste en minuscule.
         */
        var mot = event.target.innerHTML;
        mot = mot.charAt(0).toUpperCase() + mot.substring(1).toLowerCase()
        
        if(mot == "Ensemble indépendant")
			mot = "EnsembleIndependant" 
			
		console.log("bdsg " + mot)
        
        GetId("divDefinition").style.visibility = "visible";
        GetId("divDefinition").style.height = "auto";
        GetId("paragrapheDefinition").innerHTML = tabDefinition[mot]; // on copie notre texte dans l'élément html
        isBulleVisible = true;
    /*}*/
}

function cacher() {
    if (isBulleVisible == true) {
        GetId("divDefinition").style.visibility = "hidden"; // Si la bulle est visible on la cache
        GetId("divDefinition").style.height = "0px";
        isBulleVisible = false;
    }
}



//  --------------------------------------------------------------
//  ------------------  DECLARATION DES EVENTS  ------------------  
document.onmousemove = move; // dès que la souris bouge, on appelle la fonction move pour mettre à jour la position de la bulle.

var tab_motADefinir = document.getElementsByClassName("motADefinir");
for(var i=0; i< tab_motADefinir.length; i++){
    tab_motADefinir[i].onmouseover = definir;
    tab_motADefinir[i].onmouseout = cacher;
    
    tab_motADefinir[i].onclick = definir;
    //tab_motADefinir[i].onmouseout = cacher;
}

