var container = document.getElementById('divGraphe');
var questionClique = document.getElementById('questionClique');
var buttonOui = document.getElementById('buttonOui');
var buttonNon = document.getElementById('buttonNon');
var reponseClique = document.getElementById('reponseClique');

// provide the data in the vis format
var data1 = {
    nodes: nodes,
    edges: edges,
};


var data2 = {
    nodes: nodesG2,
    edges: edgesG2,
};

function afficherExemple(numExemple){
    var network;
    switch (numExemple){
        case 1:
            network = new vis.Network(container, data1, options);  
            questionClique.innerHTML = "G contient-il une clique de taille 3?";
            buttonOui.addEventListener("click", function() { afficherReponse(1);}, false);
            buttonNon.addEventListener("click", function() { afficherReponse(1);}, false);
            reponseClique.innerHTML = "";
            break;
        case 2:
            network = new vis.Network(container, data1, options);  
            questionClique.innerHTML = "G contient-il une clique de taille 4?";
            buttonOui.addEventListener("click", function() { afficherReponse(2);}, false);
            buttonNon.addEventListener("click", function() { afficherReponse(2);}, false);
            reponseClique.innerHTML = "";
            break;
        case 3:
            network = new vis.Network(container, data2, options);
            questionClique.innerHTML = "G contient-il une clique de taille 5?";
            buttonOui.addEventListener("click", function() { afficherReponse(3);}, false);
            buttonNon.addEventListener("click", function() { afficherReponse(3);}, false);
            reponseClique.innerHTML = "";
            break;
        case 4:
            network = new vis.Network(container, data2, options);
            questionClique.innerHTML = "G contient-il une clique de taille 4?";
            buttonOui.addEventListener("click", function() { afficherReponse(4);}, false);
            buttonNon.addEventListener("click", function() { afficherReponse(4);}, false);
            reponseClique.innerHTML = "";
            break;

    }
}


function afficherGraphe1() {
    var network = new vis.Network(container, data1, options);
    buttonOui.addEventListener("click", function() { afficherReponse(1);}, false);
    buttonNon.addEventListener("click", function() { afficherReponse(1);}, false);
}






function afficherReponse(numReponse){
    switch (numReponse){
        case 1:
            reponseClique.innerHTML = "provisoire: C'est VRAI";
            break;
        case 2:
            reponseClique.innerHTML = "provisoire: C'est FAUX";
            break;
        case 3:
            reponseClique.innerHTML = "provisoire: C'est FAUX";
            break;
        case 4:
            reponseClique.innerHTML = "provisoire: C'est VRAI";
            break;

    }
}

afficherGraphe1()