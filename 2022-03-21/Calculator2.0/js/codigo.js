function calc () {

    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let operador = document.getElementById("operador").value

    let calculo = eval(`${+valor1} ${operador} ${+valor2}`);       
  
    let resultado = document.getElementById("resultado");
    resultado.value = calculo

};
    