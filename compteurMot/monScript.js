let chaine = document.querySelector("#bloc_input");
let nombre = document.querySelector("#nbr");


let myFunction = function(){

    let i = 0;
    chaine = chaine.value;
    for (let index = 0; index < chaine.length; index++) {
        if(chaine[index] == ' '){
            i++;
        }
    }
    if(chaine == ''){
        nombre.innerHTML = i;
    }else{
        nombre.innerHTML = i+1;
    }
    
}

