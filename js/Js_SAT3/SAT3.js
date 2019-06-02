var tab_ExemplesSAT3 = [];

function init_ExemplesSAT3(){
    var tmp_num = 0;
    for(var i=0; i<4; i++){
        tmp_num = i + 1;
        tab_ExemplesSAT3[i] = document.getElementById("divExemple" + tmp_num);
    }
}init_ExemplesSAT3();

for(var i=0; i<4; i++){
    console.log(tab_ExemplesSAT3[i]);
}