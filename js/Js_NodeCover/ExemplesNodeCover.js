var container = document.getElementById('divGraphe');
var questionNodeCover = document.getElementById('questionNodeCover');
var buttonOui = document.getElementById('buttonOui');
var buttonNon = document.getElementById('buttonNon');
var reponseNodeCover = document.getElementById('reponseNodeCover');

container.style.height = "300px";

// provide the data in the vis format
var data1NodeCover = {
    nodes: nodesG1NodeCover,
    edges: edgesG1NodeCover,
};


var data2NodeCover = {
    nodes: nodesG2NodeCover,
    edges: edgesG2NodeCover,
};

var network;

function afficherExempleNodeCover(numExemple){
    
    switch (numExemple){
        case 1:
            network = new vis.Network(container, data1NodeCover, options);  
            questionNodeCover.innerHTML = "G contient-il une Node Cover de taille 3?";
            buttonOui.addEventListener("click", function() { afficherReponseNodeCover(1, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseNodeCover(1, "NON");}, false);
            desactiverBouttonReponse()
            reponseNodeCover.innerHTML = "";
            break;
        case 2:
            network = new vis.Network(container, data1NodeCover, options);  
            questionNodeCover.innerHTML = "G contient-il une Node Cover de taille 2?";
            buttonOui.addEventListener("click", function() { afficherReponseNodeCover(2, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseNodeCover(2, "NON");}, false);
            desactiverBouttonReponse()
            reponseNodeCover.innerHTML = "";
            break;
        case 3:
            network = new vis.Network(container, data2NodeCover, options);
            questionNodeCover.innerHTML = "G contient-il une Node Cover de taille 3?";
            buttonOui.addEventListener("click", function() { afficherReponseNodeCover(3, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseNodeCover(3, "NON");}, false);
            desactiverBouttonReponse()
            reponseNodeCover.innerHTML = "";
            break;
        case 4:
            network = new vis.Network(container, data2NodeCover, options);
            questionNodeCover.innerHTML = "G contient-il une Node Cover de taille 4?";
            buttonOui.addEventListener("click", function() { afficherReponseNodeCover(4, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseNodeCover(4, "NON");}, false);
            desactiverBouttonReponse()
            reponseNodeCover.innerHTML = "";
            break;

    }
}




function afficherGraphe1NodeCover() {
    network = new vis.Network(container, data1NodeCover, options);
    buttonOui.addEventListener("click", function() { afficherReponseNodeCover(1, "OUI");}, false);
    buttonNon.addEventListener("click", function() { afficherReponseNodeCover(1, "NON");}, false);
}






function afficherReponseNodeCover(numReponse, reponsePropose){
    switch (numReponse){
        case 1:
            if(reponsePropose == "OUI")
                reponseNodeCover.innerHTML = "Bonne Réponse";
            else
                reponseNodeCover.innerHTML = "Mauvaise Réponse: L'ensemble {1,4,5} couvre toutes les arêtes.";
            break;
        case 2:
            if(reponsePropose == "OUI")
                reponseNodeCover.innerHTML = "Mauvaise Réponse: Il n'existe aucun ensemble de sommets de taille 2 couvrant toutes les arêtes.";
            else
                reponseNodeCover.innerHTML = "Bonne Réponse";
            break;
        case 3:
            if(reponsePropose == "OUI")
                reponseNodeCover.innerHTML = "Mauvaise Réponse: Il n'existe aucun ensemble de sommets de taille 3 couvrant toutes les arêtes.";
            else
                reponseNodeCover.innerHTML = "Bonne Réponse";
            break;
        case 4:
            if(reponsePropose == "OUI")
                reponseNodeCover.innerHTML = "Bonne Réponse";
            else
                reponseNodeCover.innerHTML = "Mauvaise Réponse: L'ensemble {1,3,4,5} couvre toutes les arêtes.";
            break;

    }
}

afficherGraphe1NodeCover()


