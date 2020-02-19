var email = ["luca@gmail.com", "paolo@gmail.com", "marta@gmail.com"];
console.log(email);
var newMail = prompt('Inserisci la tua mail')
console.log(newMail);
var idoneita;
for (var i = 0; i < email.length; i++) {
    if (newMail == email[i]){
        idoneita = 0
    }
}

if ( idoneita == 0) {
    console.log('Complimenti puoi accedere');
}

else {
    console.log('Accesso negato');
}



var numeroUno = Math.random() * 10;
console.log(numeroUno);
var numeroDue = Math.random() * 10;
console.log(numeroDue);
var numeroUnoA = Math.round(numeroUno);
console.log(numeroUnoA);
var numeroDueA = Math.round(numeroDue);
console.log(numeroDueA);
if (numeroUnoA > numeroDueA){
    console.log('NumeroUno ha vinto');
}
else if (numeroUnoA < numeroDueA){
    console.log('NumeroDue ha vinto');
}
else {
    console.log('Avete pareggiato');
}
