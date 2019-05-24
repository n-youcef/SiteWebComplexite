var container = document.getElementById('divGraphe');
var questionClique = document.getElementById('questionClique');
var buttonOui = document.getElementById('buttonOui');
var buttonNon = document.getElementById('buttonNon');
var reponseClique = document.getElementById('reponseClique');

// provide the data in the vis format
var data1Clique = {
    nodes: nodesG1Clique,
    edges: edgesG1Clique,
};


var data2Clique = {
    nodes: nodesG2Clique,
    edges: edgesG2Clique,
};

function afficherExempleClique(numExemple){
    var network;
    switch (numExemple){
        case 1:
            network = new vis.Network(container, data1Clique, options);  
            questionClique.innerHTML = "G contient-il une clique de taille 3?";
            buttonOui.addEventListener("click", function() { afficherReponseClique(1, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseClique(1, "NON");}, false);
            reponseClique.innerHTML = "";
            break;
        case 2:
            network = new vis.Network(container, data1Clique, options);  
            questionClique.innerHTML = "G contient-il une clique de taille 4?";
            buttonOui.addEventListener("click", function() { afficherReponseClique(2, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseClique(2, "NON");}, false);
            reponseClique.innerHTML = "";
            break;
        case 3:
            network = new vis.Network(container, data2Clique, options);
            questionClique.innerHTML = "G contient-il une clique de taille 5?";
            buttonOui.addEventListener("click", function() { afficherReponseClique(3, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseClique(3, "NON");}, false);
            reponseClique.innerHTML = "";
            break;
        case 4:
            network = new vis.Network(container, data2Clique, options);
            questionClique.innerHTML = "G contient-il une clique de taille 4?";
            buttonOui.addEventListener("click", function() { afficherReponseClique(4, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseClique(4, "NON");}, false);
            reponseClique.innerHTML = "";
            break;

    }
}


function afficherGraphe1Clique() {
    var network = new vis.Network(container, data1Clique, options);
    buttonOui.addEventListener("click", function() { afficherReponseClique(1, "OUI");}, false);
    buttonNon.addEventListener("click", function() { afficherReponseClique(1, "NON");}, false);
}






function afficherReponseClique(numReponse, reponsePropose){
    switch (numReponse){
        case 1:
            if(reponsePropose == "OUI")
                reponseClique.innerHTML = "Bonne Réponse: on voit bien les sommets 2,4 et 5 qui forment un triangle dans le graphe";
            else
                reponseClique.innerHTML = "Mauvaise Réponse ";
            break;
        case 2:
            if(reponsePropose == "OUI")
                reponseClique.innerHTML = "Mauvaise Réponse car il n,existe pas de sous graphe complet de taille 4 dans ce graphe";
            else
                reponseClique.innerHTML = "Bonne Réponse";
            break;
        case 3:
            if(reponsePropose == "OUI")
                reponseClique.innerHTML = "Mauvaise Réponse : on a un graphe de 5 sommet non complet impossible d'avoir un clique de taille 5";
            else
                reponseClique.innerHTML = "Bonne Réponse";
            break;
        case 4:
            if(reponsePropose == "OUI")
                reponseClique.innerHTML = "Bonne Réponse: on voit bien les sommets 1,2,3 et 4 qui forment un sous graphe complet dans le graphe";
            else
                reponseClique.innerHTML = "Mauvaise Réponse";
            break;

    }
}

afficherGraphe1Clique()
