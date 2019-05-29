//Script permettant d'ajouter un menu à toutes les pages web du site Internet.


/*
A LIRE: IMPORTANT
Pour Ajouter un nouveau lien dans le menu du site web, vous devez ajouter un nouvel objet de "lien" dans le tableau "liens".
Les paramètre de "lien" sont l'attribut "href", l'attribut "title" et le texte visible à l'écrant
*/


function lien(lien, titre, texte){
    this.lien_href = lien; //href
    this.titre = titre;
    this.texte = texte;
    this.elementA;
} //Objet lien (href, title, texteVisible à l'écran)

var liens = [
    new lien("Clique.html", "Clique", "Clique"),
    new lien("EnsembleIndependant.html", "EnsembleIndependant", "Ensemble Indépendant"),
    new lien("SAT3.html", "SAT3", "3-SAT"),
    new lien("SetPacking.html", "SetPacking", "Set Packing"),
    new lien("NodeCover.html", "NodeCover", "Node Cover"),
];//Tableau de lien

function initLienMenu(){
    for(var i=0; i<liens.length; i++){
        liens[i].elementA = document.createElement("a");
        liens[i].elementA.href = liens[i].lien_href;
        liens[i].elementA.title = liens[i].titre;
        liens[i].elementA.innerHTML = liens[i].texte;
    }
} //Fonction permettant l'initialisation des attributs des balises <a>

initLienMenu();



//--------------------------------------------
//Creation d'un div qui contiendra toutes les balises <a> du menu

var divMenu = document.createElement("div");
divMenu.id = "divMenu";
divMenu.classList.add("menu");
divMenu.classList.add("nav");
//Ajout de class "menu" et "nav" à ce div
for(var i=0; i<liens.length; i++)
    divMenu.appendChild(liens[i].elementA);

var navMenu = document.getElementById("navMenu");
navMenu.append(divMenu);



//--------------------------------------------
var btn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.nav');
var is_optionActif = true;
var is_menuOuvert = false;

btn.onclick = function ouvrirFermerMenu(){
	nav.classList.toggle('nav_open');
    if(is_menuOuvert)
        is_menuOuvert = false;
    else
        is_menuOuvert = true;
    
    if(is_optionActif){
        network.setOptions(optionNonActif);
        is_optionActif = false;
    }
    else{
        network.setOptions(optionActif);
        is_optionActif = true;
    }
}

var optionActif = {
    clickToUse: true,
};
var optionNonActif = {
    clickToUse: false,
};



document.body.onclick = function(e) {

    if(is_menuOuvert){
        var div_cliquable = $('#divMenu');
        var div_cliquable2 = $('#toggle_btn_id');


        // Si ce n'est pas #ma_div ni un de ses enfants
        if( !$(e.target).is(div_cliquable) && !$.contains(div_cliquable[0],e.target) ) {
            if( !$(e.target).is(div_cliquable2) && !$.contains(div_cliquable2[0],e.target) ) {
                nav.classList.toggle('nav_open');
                is_menuOuvert = false;
                
                network.setOptions(optionActif);
                is_optionActif = true;
                
                
            }

        }
    }
    

}

