
let monTimer = document.querySelector('.timer_text');
let minute = 0, seconde = 0;
monTimer.innerHTML = '0'+ minute + ' : '+ '0'+seconde;

let min1 = 05;
let min2 = 10;
let min3 = 15;
let min4 = 20;
let min5 = 25;
    
let monPlay = document.querySelector('#play');
let monPause = document.querySelector('#pause');

let timer;
monPlay.onclick = function(){

    if(monTimer.innerHTML == '0'+ min1 +' : '+ '00'){
        seconde = 59;
        min1--;
        timer = setInterval(function(){ 
            if (seconde < 10) {
                monTimer.innerHTML = '0'+ min1 +' : '+ '0' + seconde;
            }
            else if(seconde > 9){
                monTimer.innerHTML = '0'+ min1 +' : '+ seconde;
            }
            seconde = seconde - 1;
            if ((min1 == 0) && (seconde == 0)) {
                monTimer.innerHTML = '00' + ' : '+ '00';
                clearInterval(timer);
                alert('BRAVO! VOUS POUVEZ PRENDRE UNE PAUSE!');
            }
            if (seconde == 0) {
                min1 = min1 - 1;
                seconde = 59;
            }
           
        },1000);
    }
    else if(monTimer.innerHTML == min2 +' : '+ '00'){
        seconde = 59;
        min2--;
        monTimer.innerHTML = min2 + ' : '+ '00';
        timer = setInterval(function(){ 
            if (seconde < 10) {
                monTimer.innerHTML = min2 +' : '+ '0' + seconde;
            }
            else if(seconde > 9){
                monTimer.innerHTML = min2 +' : '+ seconde;
            }
            seconde = seconde - 1;
            if ((min2 == 0) && (seconde == 0)) {
                monTimer.innerHTML = '00' + ' : '+ '00';
                clearInterval(timer);
                alert('BRAVO! VOUS POUVEZ PRENDRE UNE PAUSE!');
            }
            if (seconde == 0) {
                min2 = min2 - 1;
                seconde = 59;
            }
            
        },1000);
    }
    else if(monTimer.innerHTML == min3 +' : '+ '00'){
        seconde = 59;
        min3--;
        timer = setInterval(function(){ 
            if (seconde < 10) {
                monTimer.innerHTML = min3 +' : '+ '0' + seconde;
            }
            else if(seconde > 9){
                monTimer.innerHTML = min3 +' : '+ seconde;
            }
            seconde = seconde - 1;
            if ((min3 == 0) && (seconde == 0)) {
                monTimer.innerHTML = '00' + ' : '+ '00';
                clearInterval(timer);
                alert('BRAVO! VOUS POUVEZ PRENDRE UNE PAUSE!');
            }
            if (seconde == 0) {
                min3 = min3 - 1;
                seconde = 59;
            }
            
        },1000);
    }
    else if(monTimer.innerHTML == min4 +' : '+ '00'){
        seconde = 59;
        min4--;
        timer = setInterval(function(){ 
            if (seconde < 10) {
                monTimer.innerHTML = min4 +' : '+ '0' + seconde;
            }
            else if(seconde > 9){
                monTimer.innerHTML = min4 +' : '+ seconde;
            }
            seconde = seconde - 1;
            if ((min4 == 0) && (seconde == 0)) {
                monTimer.innerHTML = '00' + ' : '+ '00';
                clearInterval(timer);
                alert('BRAVO! VOUS POUVEZ PRENDRE UNE PAUSE!');
            }
            if (seconde == 0) {
                min4 = min4 - 1;
                seconde = 59;
            }
         
        },1000);
    }
    else if(monTimer.innerHTML == min5 +' : '+ '00'){
        seconde = 59;
        min5--;
        timer = setInterval(function(){ 
            if (seconde < 10) {
                monTimer.innerHTML = min5 +' : '+ '0' + seconde;
            }
            else if(seconde > 9){
                monTimer.innerHTML = min5 +' : '+ seconde;
            }
            seconde = seconde - 1;
            if ((min5 == 0) && (seconde == 0)) {
                monTimer.innerHTML = '00' + ' : '+ '00';
                clearInterval(timer);
                alert('BRAVO! VOUS POUVEZ PRENDRE UNE PAUSE!');
            }
            if (seconde == 0) {
                min5 = min5 - 1;
                seconde = 59;
            }
           
        },1000);
    }

}

monPause.onclick = function(){clearInterval(timer);}
monPause.addEventListener('dblclick', function(){
    monTimer.innerHTML = '00'+' : '+ '00';
})

let fonction1 = () => monTimer.innerHTML = '0'+ min1 +' : '+ '00';
  
let fonction2 = () => monTimer.innerHTML = min2 + ' : '+ '00';
  
let fonction3 = () => monTimer.innerHTML = min3 + ' : '+ '00';
   
let fonction4 = () => monTimer.innerHTML = min4 + ' : '+ '00';

let fonction5 = () => monTimer.innerHTML = min5 + ' : '+ '00';
