//PALINDROMA
//Inserisci una parola e una funzione stabilisce se è una parola
//palindroma o no 

//funzione riceve una stringa , restituisce un booleano
function isPalindroma(word){
  
    let temp=[];
    //riempio l'array temp con le lettere della parola inserita al contrario 
    for(let i=word.length; i>=0; i--){
      temp.push(word[i]);
    }
    
    //confronto parola con il suo rovescio 
    for(let i=0;i<parola.length;i++){
        
        // appena trova una lettera che non corrisponde
        //la funzione restituisce false e si blocca
       if(parola[i]!=temp[i+1]){
          return false;
       }
    }
    //se invece tutte gli elementi sono uguali restituisce true.
    return true;
}

const parola=prompt("Inserisci una parola");

//chiamo la funzione
let palindroma=isPalindroma(parola);

//stampo in console il risultato
console.log(palindroma);

