//11. Verificação de Número Positivo ou Negativo:

function verificarSinal(nume) {
    if (nume > 0) {
        console.log("Positivo");
    } else if (nume < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}

let numeroUsuario = parseFloat(prompt("Digite um número:"));

verificarSinal(numeroUsuario);

//12. Função para Converter Celsius em Fahrenheit:

function converterTemperatura(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const temperaturaC = parseFloat(prompt("Qual a temperatura em Celsius:"));
const temperaturaF = converterTemperatura(temperaturaC);
alert(` ${temperaturaF}°F`);

//13. Laço While para Somatório: 

let soma = 0;  
let i = 1;     

while (i <= 100) {
    soma += i; 
    i++;       
}

console.log(`A soma dos números de 1 até 100 é: ${soma}`);

//14. Substituição de Palavras em String:





