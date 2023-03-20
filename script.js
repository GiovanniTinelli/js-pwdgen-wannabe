
/*
  1 Chiedi all’utente il suo nome,
  2 poi chiedi il suo cognome,
  3 poi chiedi il suo colore preferito
  4 Infine scrivi sulla pagina nomecognomecolorepreferito23stampo in pagina l'output
*/

const nome = prompt("nome?")

const cognome = prompt("cognome?")

const colore = prompt("colore preferito?") 

console.log(nome , cognome, colore)

document.getElementById("nome?").innerHTML = nome
document.getElementById("cognome?").innerHTML = cognome
document.getElementById("colorePreferito?").innerHTML = colore