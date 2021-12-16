//PARI E DISPARI


// entrami i pulsanti 
const buttons=document.querySelectorAll(".box");

// creo i pulsanti 
const pari=document.getElementById("pari");
const dispari=document.getElementById("dispari");
const userTextBox=document.getElementById("user-text");
const endText=document.getElementById("end-text");
//scelta dell'utente
let userPosition;
let computerPosition;

//numeri inserito dall' utente
let userNumber;
let computerNumber;
let sum=0;


//          Partendo dall'ultima ogni funzione chiama la successiva 

//4-stabilisco il vincitore
function whoIsTheWinner(){
    sum=userNumber+computerNumber;
    endText.textContent=`il totale è ${sum}`;
    console.log(sum);

    if(sum%2==0 && userPosition=="pari"){
        endText.innerHTML+=` VINCE IL GIOCATORE`;
    }else if(sum%2!=0 && userPosition=="dispari"){
        endText.innerHTML+=` VINCE IL GIOCATORE`;
    }else{
        endText.innerHTML+=` VINCE IL COMPUTER`;
    }
}

//3-genero un numero casuale per il computer
function computerNumberGenerator(){
    computerNumber = Math.floor(Math.random() * 5)+1;
    userTextBox.innerHTML+=" ---- "+computerNumber;
    console.log(`il computer invece è ${computerPosition}, ha scelto ${computerNumber}`);

    //chiamo la funzione che stabilisce il vincitore
    whoIsTheWinner();
}
//2-chiedo di inserire un numero 
function enterNumber(){
    userNumber=parseInt(prompt("Inserisci un numero da 1 a 5"));

    //controllo che sia un numero valido
    while(userNumber<1 || userNumber>5){
        userNumber=parseInt(prompt("Inserisci un numero da 1 a 5"));
    }
    userTextBox.textContent=userNumber;

     //recap della situazione in consolle
    console.log(`il giocatore ha scelto ${userPosition} e il numero inserito è ${userNumber}`);
    
    //chiamo la funzione che sceglie il numero per il computer
    computerNumberGenerator();
}

//1-entrambi i pulsanti sono " in attesa "
for(let element of buttons){
    element.addEventListener("click",function(){
     
        if(element.id=="pari"){
        
            pari.style.backgroundColor="green";
            dispari.style.backgroundColor="orangered";
            userPosition="pari";
            computerPosition="dispari";

        }else{
          
            dispari.style.backgroundColor="green";
            pari.style.backgroundColor="orangered";
            userPosition="dispari";
            computerPosition="pari";

        }

        //chiamo la funzione che chiede il numero al utente
        enterNumber();
    })
}

