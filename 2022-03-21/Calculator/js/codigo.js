function calc () {

    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    let soma = +valor1 + +valor2
    
    let resultado = document.getElementById("resultado");
    resultado.value = soma;
    
}