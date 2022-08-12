
function ajouter_Supprimer(){
    
    let textArrea = document.querySelector("input");
    textArrea = textArrea.value;

    let liste = document.querySelector(".myList");
    
    let li = document.createElement("li");
    li.id = textArrea;
    
    let myBtn = document.createElement("button");
    myBtn.innerHTML= "supprimer";
    myBtn.className = 'yellowBtn';
    myBtn.id = textArrea; 

    myBtn.addEventListener('click', function(){
        let identifiant = this.id;
        let elSup = document.getElementById(identifiant);
      
        let liste = document.querySelector(".myList");
        liste.removeChild(elSup);
    })

    let text = document.createTextNode(textArrea);
    
    li.appendChild(text);
    li.appendChild(myBtn);
    liste.appendChild(li);
};
