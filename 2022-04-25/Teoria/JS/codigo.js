// function mostraValor(params) {
//     var valor = ''
    
    /*
//     if (valor === 1) {
//         console.log('SIM')
//     } else if (valor === 2) {
//         console.log('TALVEZ')
//     } else {
//         console.log('NAO')
//     }

    */
    
/*
    // switch (valor) {
    //     case 1:
    //         console.log('SIM');
    //         break;

    //     case 2: 
    //         console.log('Talvez')
    //         break;

    //     default:
    //         console.log('Nao encontrado')
    //         break;
    // }
}

*/


// function mostraValor(params) {
//     var valor = 'Texto/com/espaços';

//     debugger
//     valor = valor.replaceAll('/', '@')


//     console.log(valor.length)
//     //valor = valor.split('@');
//     valor = valor.split('/');
//     console.log(valor);
// }


// function mostraValor (params) {
//     var valor = 'Texto com espaços';
//     console.log(valor)

//     // valor = valor.substring(0, 5);
//     // valor = valor.toUpperCase();
//     // valor = valor.includes('Texto')
//     // valor= valor.concat('203')

//     valor = valor.trim()
//     console.log(valor)
// }


function mostraValor(params) {
    var valores = ['valor 1', 'valor 2', 'valor 3', 'valor 2']
    console.log(valores)
    
    valores.push('valor 4');

    console.log(valores);

    // var finded = valores.find((valor) => valor.includes('2'));
    //     console.log(finded)

    var finded = valores.filter((valor) => valor.includes('2') || valor.includes('4'));
        console.log(finded)
}




mostraValor()