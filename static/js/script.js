
function sanitizeInput(input) {
    input = input.toLowerCase()
    input = input.trim()

    return input
}

function calcoloPercentuale(contatore, totale = 7) {
    let percentuale = (contatore / totale) *100

    return percentuale
}

let firstName = "";

while (firstName === null || firstName.trim() === "" || !isNaN(firstName)) {
    firstName = prompt("Qual è il tuo nome? (Il nome non può essere vuoto né un numero)");
}

firstName = sanitizeInput(firstName)
console.log("Benvenuto " + firstName)


let contatore = 0
let ans1 = prompt("In quale città gioca la squadra di calcio Lazio?")
ans1 = sanitizeInput(ans1)
if(ans1 === "roma"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'roma' ")
} 

let ans2 = prompt("Quale è la capitale della Francia?")
ans2 = sanitizeInput(ans2)
if(ans2 === "parigi"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'parigi' ")
} 

let ans3 = prompt("Quale è il nome del santo patrono di Bari? (solo il nome)")
ans3 = sanitizeInput(ans3)
if(ans3 === "nicola"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'nicola' ")
} 

let ans4 = prompt("Quale è il cognome di un famoso attaccante degli anni '90 di nome Igor?")
ans4 = sanitizeInput(ans4)
if(ans4 === "protti"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'protti' ")
} 

let ans5 = prompt("Quale è la capitale del Giappone?")
ans5 = sanitizeInput(ans5)
if(ans5 === "tokyo"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'tokyo' ")
}

let ans6 = prompt("Quale è la capitale della Spagna?")
ans6 = sanitizeInput(ans6)
if(ans6 === "madrid"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'madrid' ")
}

let ans7 = prompt("Quale è il cognome del famoso rapper italiano con nome d'arte Gue?")
ans7 = sanitizeInput(ans7)
if(ans7 === "fini"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'fini' ")
}

let percentuale = calcoloPercentuale(contatore)
console.log(`Complimenti, hai indovinato ${contatore} domande su 7, con una percentuale del ${percentuale}%`)