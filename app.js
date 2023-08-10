let intentos = 0;
let numeroUsusario = Number(prompt('adivina el numero o no'));
const numeroMisterioso = 5;

do {
if (numeroUsusario === numeroMisterioso) {
    console.log('el numero es misterioso');
}else {
    numeroUsusario = Number(prompt('intenta de nuevo'));
}   
intentos++;
} while (numeroUsusario !== numeroMisterioso);