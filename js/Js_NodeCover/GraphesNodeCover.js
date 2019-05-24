// Tableau contenant les noeuds
var nodesG1NodeCover = new vis.DataSet([
    {id: 1, label: '1'},
    {id: 2, label: '2'},
    {id: 3, label: '3'},
    {id: 4, label: '4'},
    {id: 5, label: '5'},
]);

// Tableau contenant les aretes
var edgesG1NodeCover = new vis.DataSet([
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 3, to: 4},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 4, to: 5},
]);




// Tableau contenant les noeuds
var nodesG2NodeCover = new vis.DataSet([
    {id: 1, label: '1'},
    {id: 2, label: '2'},
    {id: 3, label: '3'},
    {id: 4, label: '4'},
    {id: 5, label: '5'},
]);

// Tableau contenant les aretes
var edgesG2NodeCover = new vis.DataSet([
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 1, to: 4},
    {from: 3, to: 4},
    {from: 2, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 4, to: 5},
]);




// Options pour le bon affichage des graphes
// Script utilisé: vis.js (script téléchargé sur internet)
// Une documentation est disponible sur le Web
// http://visjs.org/docs/network/
var options = {
    
    clickToUse: true,
    
    interaction:{
        dragNodes:false, //Pour eviter que les noeuds bougent
        dragView: false, //Pour eviter que le graphe bouge
        zoomView: false,
    },
    
    nodes:{
        shape: 'circle', //Pour avoir des noeuds sous forme de cercle.
    },

    edges: {
        smooth: { //Pour avoir des lignes biens droites
            type: "continuous",
            forceDirection: "none",
            roundness: 1
        }
    }
    
    
};
