
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

let numeroUuario = parseFloat(prompt("Digite um número:"));

verificarSinal(numeroUuario);

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

function substituirPalavra(texto) {
    const textoSub = texto.replace(/azul/g, "vermelho");
    return textoSub;
}


const entradaUsuario = prompt("Digite uma frase:");
const novaFrase = substituirPalavra(entradaUsuario);
alert(novaFrase);


//15. Verificação de Tamanho de String:

function verificarTamanho(texto) {
    if (texto.length > 10) {
        return "A frase tem mais de 10 caracteres.";
    } else {
        return "A frase tem 10 caracteres ou menos.";
    }
}

const entradaUsu = prompt("Digite uma frase:");
const resultado = verificarTamanho(entradaUsu);
alert(resultado);

//16. Criando e Acessando Array:

const frutas = [];
for (let i = 0; i < 5; i++) {
    const fruta = prompt(`Digite a fruta ${i + 1}:`);
    frutas.push(fruta); 
}

console.log(`A terceira fruta é: ${frutas[2]}`);

//17. Função com Valor Padrão em Dois Parâmetros:

function saudacao(nome, saudacao = "Bem-vindo(a)") {
    return `${saudacao}, ${nome}!`;
}

const nomeUsuario = prompt("Qual o seu nome?:");

const saudacaoUsuario = prompt("Digite uma saudação:");

const resultao = saudacao(nomeUsuario, saudacaoUsuario || undefined);
alert(resultao);




//18. Verificação de Nota:

function verificarAprovacao(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

const notaUsuario = parseFloat(prompt("Digite a sua nota:"));

const resul = verificarAprovacao(notaUsuario);
alert(resul);



//19. Laço for para Contagem de Pares:

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) { 
        console.log(i); 
    }
}

//20. Contagem de Vogais:

let palavra = prompt ("Digite uma palavra:");

function contarvogais (Palavra){

    const Vogais = "aeiouAEIOU"
    let contador = 0

        for (let letra of palavra){
            if (Vogais.includes(letra)){
                contador++;
            }
        }
        console.log(contador);
    }
    contarvogais(palavra)   
//21. Soma dos Elementos de um Array:


//22. Função para Dobrar Números:

function dobrarNumero(numero) {
    return numero * 2; 
}

const numeroUsuario = parseFloat(prompt("Digite um número:"));

const resutado = dobrarNumero(numeroUsuario);
alert(`O dobro é ${resutado}.`);



//23. Laço While para Contagem de Pares:


let nmero = 2; 

while (nmero <= 20) {
    console.log(nmero); 
    nmero += 2; 
}

//25. Verificação de Ano Bissexto:

function anoBissexto(ano) {

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true; 
    } else {
        return false; 
    }
}

const anoUsuario = parseInt(prompt("Digite um ano:"));
const rsultado = anoBissexto(anoUsuario);
alert(`O ano ${anoUsuario} é bissexto? ${rsultado}`);












