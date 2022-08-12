
let screen = document.querySelector(".screen");
let tab = new Array();

function saisi(nbr){
    let chiffre = nbr;
    screen.innerHTML += chiffre;
    tab.push(nbr);
}

function calcul(){
    let result = 0;
    
    for (let index = 0; index < tab.length; index++) {
        result += tab[index];
    }
    result = eval(result);
    screen.innerHTML = result;
}


let equal = document.getElementById("=");
equal.addEventListener('dblclick', function(){
    screen.innerHTML = '';
    tab.splice(0, tab.length);
})

/*
function reset(){
    let screen = document.querySelector(".screen");
    screen.innerHTML = '';
}
*/
