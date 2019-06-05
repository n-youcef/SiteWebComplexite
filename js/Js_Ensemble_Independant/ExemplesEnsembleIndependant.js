var container = document.getElementById('divGraphe');
var questionEnsembleIndependant = document.getElementById('questionEnsembleIndependant');
var buttonOui = document.getElementById('buttonOui');
var buttonNon = document.getElementById('buttonNon');
var reponseClique = document.getElementById('reponseClique');

container.style.height = "300px";

// provide the data in the vis format
var data1EnsembleIndependant = {
    nodes: nodesG1EnsembleIndependant,
    edges: edgesG1EnsembleIndependant,
};


var data2EnsembleIndependant = {
    nodes: nodesG2EnsembleIndependant,
    edges: edgesG2EnsembleIndependant,
};

var network;

function afficherExempleEnsembleIndependant(numExemple){
    switch (numExemple){
        case 1:
            network = new vis.Network(container, data1EnsembleIndependant, options);  
            questionEnsembleIndependant.innerHTML = "G contient-il un ensemble independant de taille 3?";
            buttonOui.addEventListener("click", function() { afficherReponseEnsembleIndependant(1, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseEnsembleIndependant(1, "NON");}, false);
            reponseEnsembleIndependant.innerHTML = "";
            break;
        case 2:
            network = new vis.Network(container, data1EnsembleIndependant, options);  
            questionEnsembleIndependant.innerHTML = "G contient-il un ensemble independant de taille 4?";
            buttonOui.addEventListener("click", function() { afficherReponseEnsembleIndependant(2, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseEnsembleIndependant(2, "NON");}, false);
            reponseEnsembleIndependant.innerHTML = "";
            break;
        case 3:
            network = new vis.Network(container, data2EnsembleIndependant, options);
            questionEnsembleIndependant.innerHTML = "G contient-il un Ensemble Independant de taille 5?";
            buttonOui.addEventListener("click", function() { afficherReponseEnsembleIndependant(3, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseEnsembleIndependant(3, "NON");}, false);
            reponseEnsembleIndependant.innerHTML = "";
            break;
        case 4:
            network = new vis.Network(container, data2EnsembleIndependant, options);
            questionEnsembleIndependant.innerHTML = "G contient-il un ensemble independant de taille 4?";
            buttonOui.addEventListener("click", function() { afficherReponseEnsembleIndependant(4, "OUI");}, false);
            buttonNon.addEventListener("click", function() { afficherReponseEnsembleIndependant(4, "NON");}, false);
            reponseEnsembleIndependant.innerHTML = "";
            break;

    }
}









function afficherReponseEnsembleIndependant(numReponse, reponsePropose){
    switch (numReponse){
        case 1:
            if(reponsePropose == "OUI")
                reponseEnsembleIndependant.innerHTML = "Mauvaise Réponse : les ensemble independants {1, 3}, {1, 5}, {2, 5}, {4}. et la taille maximal est de 2";
            else
                reponseEnsembleIndependant.innerHTML = "Bonne Réponse";
            break;
        case 2:
            if(reponsePropose == "OUI")
                reponseEnsembleIndependant.innerHTML = "provisoire: C'est FAUXX";
            else
                reponseEnsembleIndependant.innerHTML = "provisoire: C'est FAUX";
            break;
        case 3:
            if(reponsePropose == "OUI")
                reponseEnsembleIndependant.innerHTML = "provisoire: C'est FAUXX";
            else
                reponseEnsembleIndependant.innerHTML = "provisoire: C'est FAUX";
            break;
        case 4:
            if(reponsePropose == "OUI")
                reponseEnsembleIndependant.innerHTML = "Bonne Réponse:  {1,5,6,8}";
            else
                reponseEnsembleIndependant.innerHTML = "Mauvaise Réponse";
            break;

    }
}


function afficherGraphe1EnsembleIndependant() {
    network = new vis.Network(container, data1EnsembleIndependant, options);
    buttonOui.addEventListener("click", function() { afficherReponseEnsembleIndependant(1, "OUI");}, false);
    buttonNon.addEventListener("click", function() { afficherReponseEnsembleIndependant(1, "NON");}, false);
}

afficherGraphe1EnsembleIndependant()

