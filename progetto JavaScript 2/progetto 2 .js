
//ESERCIZIO 1

function crazySum(num1, num2){
    if(num1 === num2) {
        return(num1 + num2 ) * 3
    } else {
        return (num1 + num2)
    }
} 
console.log(crazySum(5, 3));


//ESERCIZIO 2

function boundary(numero) {  
    if ((numero > 20 && numero <= 100) || numero === 400) {
       return true
    } else {
       return false
    }
   }
   console.log(boundary(400));

   
//ESERCIZIO 3

function reverseString(stringa) { 
    return stringa.split("").reverse("").join("")
} 
reverseString("EPICODE")

console.log(reverseString("EPICODE"));


//ESERCIZIO 4

function upperFirst(stringa){
    
    let frase = stringa.split(" ")

    let arrayDaCiclare = []

    for(i = 0; i < frase.length; i++){
        let collocamento = frase[i].charAt(0)
        let maiuscole = collocamento.toUpperCase()
        let interazione = frase[i].slice(1)
        let unione = maiuscole + interazione

        arrayDaCiclare.push(unione)
    }

    console.log(arrayDaCiclare.join(" "));
}

upperFirst("buona sera")


//ESERCIZIO 5 

function giveMeRandom(numeroN) {
    
    let numeroRandom = numeroN

    numeroRandom = Math.floor(Math.random() * 101)

    return numeroRandom
}

let risultato = giveMeRandom()

console.log(risultato);


//ESERCIZIO EXTRA 1 


function crazyDiff(num1, num2) {

    let differenza = num1 - num2

    let risultato = differenza

    if(differenza > 19) {
        return risultato * 3
    } else {
        return risultato
    }
}

console.log(crazyDiff(100, 19));

//ESERCIZIO EXTRA 2

function codifyString(stringa) {

    if(stringa.startsWith("CODE")){
        return stringa
    } else {
        return "CODE" + stringa
    }
    
}

let result = codifyString("CIAO")

console.log(result);


//ESERCIZIO EXTRA 3 

function check3and7(num3, num7) {
    if(num3 %3 === 0 && num7 %7 === 0){
        return true
    } else {
        return false
    }
}

let quindi = check3and7(2, 10)

console.log(quindi);