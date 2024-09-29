let firstName = "";

while (firstName === null || firstName === "" || !isNaN(firstName)) {
    firstName = prompt("Qual è il tuo nome? (Il nome non può essere vuoto né un numero)");
}

console.log("Benvenuto " + firstName);


let contatore = 0
let ans1 = prompt("In quale città gioca la squadra di calcio Lazio?")
ans1 = ans1.toLowerCase()
ans1 = ans1.trim()
if(ans1 === "roma"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'roma' ")
} 

let ans2 = prompt("Quale è la capitale della Francia?")
ans2 = ans2.toLowerCase()
ans2 = ans2.trim()
if(ans2 === "parigi"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'parigi' ")
} 

let ans3 = prompt("Quale è il nome del santo patrono di Bari? (solo il nome)")
ans3 = ans3.toLowerCase()
ans3 = ans3.trim()
if(ans3 === "nicola"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'nicola' ")
} 

let ans4 = prompt("Quale è il cognome di un famoso attaccante degli anni '90 di nome Igor?")
ans4 = ans4.toLowerCase()
ans4 = ans4.trim()
if(ans4 === "protti"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'protti' ")
} 

let ans5 = prompt("Quale è la capitale del Giappone?")
ans5 = ans5.toLowerCase()
ans5 = ans5.trim()
if(ans5 === "tokyo"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'tokyo' ")
}

let ans6 = prompt("Quale è la capitale della Spagna?")
ans6 = ans6.toLowerCase()
ans6 = ans6.trim()
if(ans6 === "madrid"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'madrid' ")
}

let ans7 = prompt("Quale è il cognome del famoso rapper italiano con nome d'arte Gue?")
ans7 = ans7.toLowerCase()
ans7 = ans7.trim()
if(ans7 === "fini"){
    contatore += 1
    console.log("Complimenti, hai indovinato la risposta! ")
} else {
    console.log("Mi dispiace, ma la risposta corretta era 'fini' ")
}

let percentuale = (contatore / 7) * 100
console.log(`Complimenti, hai indovinato ${contatore} domande su 7, con una percentuale del ${percentuale}%`)