
var qtdJogos = localStorage.setItem('qtdJogos', 0)
var vitorias = localStorage.setItem('vitorias', 0)
var empates = localStorage.setItem('empates', 0)
var derrotas = localStorage.setItem('derrotas', 0)

function batalhar (choose) {
    
    localStorage.setItem('qtdJogos', +localStorage.getItem('qtdJogos') + 1)
    
    // localStorage.setItem(vitorias, +localStorage.getItem(vitorias) + 1)
    // localStorage.setItem(derrotas, +localStorage.getItem(derrotas) + 1)
    
    
    let npcEscolha = Math.floor(Math.random() * (3 - 0) + 1);
    
    // 1 = pedra
    // 2 - papel
    // 3 - tesoura

    switch (choose) {
        case 1:
            switch (npcEscolha) {
                case 1:
                    alert("empate");
                    localStorage.setItem('empates', +localStorage.getItem('empates') + 1);
                    break;
                case 2:
                    alert("perdeu")
                    localStorage.setItem('derrotas', +localStorage.getItem('derrotas') + 1);
                    break;
                case 3: 
                    alert("venceu");
                    localStorage.setItem('vitorias', +localStorage.getItem('vitorias') + 1);
                }
            break;

        case 2:
            switch (npcEscolha) {
                case 1:
                    alert("venceu");
                    localStorage.setItem('vitorias', +localStorage.getItem('vitorias') + 1);
                    break;
                case 2:
                    alert("empate")
                    localStorage.setItem('empates', +localStorage.getItem('empates') + 1);
                    break;
                case 3: 
                    alert("perdeu");
                    localStorage.setItem('derrotas', +localStorage.getItem('derrotas') + 1);
                    break;
                }
            break;

        case 3:
            switch (npcEscolha) {
                case 1:
                    alert("perdeu");
                    localStorage.setItem('derrotas', +localStorage.getItem('derrotas') + 1);
                    break;
                case 2:
                    alert("venceu")
                    localStorage.setItem('vitorias', +localStorage.getItem('vitorias') + 1);

                    break;
                case 3: 
                    alert("empate");
                    localStorage.setItem('empates', +localStorage.getItem('empates') + 1);
                }
                
            }
            console.log(choose)
            console.log(npcEscolha)

            // const resultado = document.getElementById("resultado");
    
            document.getElementById("qtdJogos").innerHTML = +localStorage.getItem('qtdJogos');
            document.getElementById("vitorias").innerHTML = +localStorage.getItem('vitorias');
            document.getElementById("derrotas").innerText = +localStorage.getItem('derrotas');
            document.getElementById("empates").innerText = +localStorage.getItem('empates');
}