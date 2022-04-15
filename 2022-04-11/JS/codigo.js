// 1. Declare uma variavel;
var algo = "string qqlr";

// 2. Imprima no console o tipo dessa variavel;
console.log(typeof algo);

// 3. Cria uma variavel para cada tipo e valor abaixo e mostre cada uma no console:
//  .uma string com o seu nome;
var meuNome = "Maicon";

//  .um number com o valor sua idade;
var minhaIdade = 17;
console.log(minhaIdade);

//  .um boolean com o valor se você tem mais do que 18 anos(true) ou menos(false);
var booleano = false;

//  .um array de strings com o nome de 5 professores;
var meusProfessores = ["Leandro", "André", "Newton", "Elias", "Fernanda"];

//  .um objeto com as propriedades sendo dos tipos e valores das variaveis acima;
var objetoProfessores = {
    algo: algo,
    meuNome: meuNome,
    minhaIdade: minhaIdade,
    booleano: booleano,
    meusProfessores: meusProfessores,
};
console.log(objetoProfessores);

// 4. Crie duas variáveis do tipo number (qualquer valor) e imprima o valor da soma das duas;
var um = 1;
var dois = 2;
console.log(um + dois);

// 5. Cria uma função que receba dois parametros e imprima um boolean dizendo se o valor do primeiro parametro é igual o do segundo;
function funcaoBoolean (valor1, valor2) {
    console.log(valor1 === valor2);
}

// 6. Chame a função do item 5 passando dois valores iguais e depois dois valores diferentes;
funcaoBoolean(um, dois)

// 7. Criar uma função onde dentro dela criar um array com o nome de 5 professores e imprima em um alert a segunda posição do array,
// em seguida chamar a execução da função
function criarProfessores () {
    var professores = ["Régis", "Ricardo", "Valdecir", "Willian", "Jessica"];
    console.log(professores[1]);
}
criarProfessores()

// Observação: Não há como usar um alert dentro do JS, e até essa parte da atividade deveráamos estar apenas no JS.



// 8. Criar uma função igual do item 7, porem mostrando todos os valores no console com um for.
function criarProfessores () {
    var professores = ["Régis", "Ricardo", "Valdecir", "Willian", "Jessica"];
    for(let i = 0; i < professores.length; i++) {
        console.log(professores[i]);
    }
}

// 9. Criar uma pagina HTML com os campos Nome, Peso, altura e um botão com o texto enviar.

// 10. Estilize a pagina (livre)

// 11. Criar uma função que capture os valores dos campos do item 9 e faça o seguinte cálculo: 
// pegue o valor do campo peso e divida pelo valor do campo altura multiplicado por ele mesmo, ou seja:
// peso / (altura * altura)


// verifique o resultado e imprima a respectiva mensagem de acordo com as situações abaixo:
// Condição                                   Mensagem
// se o resultado estiver abaixo de 17        [valor do campo nome], você está muito abaixo do peso;
// se o resultado estiver entre 17 e 18,49    [valor do campo nome], você está abaixo do peso;
// se o resultado estiver entre 18,5 e 24,99  [valor do campo nome], você está peso normal;
// se o resultado estiver entre 25 e 29,99    [valor do campo nome], você está acima do peso;
// se o resultado estiver entre 30 e 34,99    [valor do campo nome], você está obesidade I;
// se o resultado estiver entre 35 e 39,99    [valor do campo nome], você está obesidade II;


// referencia e ajuda (ctrl + click): https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics
function calculoDePeso () {

    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (nome != 0 && peso != 0 && altura != 0) {
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        
        const texto = document.createElement("fieldset");

        let imc = peso / (altura * altura);

        if (imc < 17) {
            texto.innerHTML = nome + ", você está muito abaixo do peso";
        } else if (imc <= 18.49) {
            texto.innerHTML = nome + ", você está abaixo do seu peso normal";
        } else if (imc <= 24.99) {
            texto.innerHTML = nome + ", você está no seu peso normal";
        } else if (imc <= 29.99) {
            texto.innerHTML = nome + ", você está acima do peso";
        } else if (imc <= 34.99) {
            texto.innerHTML = nome + ", você está com obesidade I";
        } else if (imc < 39.99) {
            texto.innerHTML = nome + ", você está com obesidade II";
        } else {
            texto.innerHTML = "putz... nem na lista da atividade dizia o que fazer contigo!";
        }
        texto.innerHTML = texto.innerHTML + " " + `(imc = ${imc.toFixed(2)})`;
        resultado.appendChild(texto);
        
    } else {
        alert("Preencha todos os campos para prosseguir.");
    };
}