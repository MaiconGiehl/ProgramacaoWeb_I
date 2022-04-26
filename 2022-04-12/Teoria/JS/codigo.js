// function insert () {
//     var button = document.createElement("button");
//     var buttonText = "Enviar " + Math.floor(Math.random() * (100 - 1) + 1);

//     button.innerHTML = buttonText;


//     button.setAttribute("onClick", "showMessage('" + buttonText + "')");
//     console.log(button);
//     document.body.appendChild(button);

// }

// function showMessage (param) {
//     alert(param)
// }


// ---------------------------------------- // --------------------------------------------- //

// window.onload = insert();
// window.onload = insert();

// function insert () {
//     var pessoas =  ['Pessoa 1', 'Pessoa 3', 'Pessoa 17'];

//     for ( let index = 0; index < pessoas.length; index++) {
//         var li = document.createElement('li');
        
//         li.innerHTML = pessoas[index]
//         li.setAttribute('onClick', "deleteLi(this)")

//         document.body.appendChild(li)
//     }
// }

// function deleteLi (child) {
//     console.log(child)
//     document.body.removeChild(child)

// }


window.onload = insert();

function insert () {
    var pessoas =  ['Pessoa 1', 'Pessoa 3', 'Pessoa 17'];

    for ( let index = 0; index < pessoas.length; index++) {
        var button = document.createElement('button');
        button.innerHTML = "Excluir"
        button.setAttribute('onClick', "deleteLi('" + index + "')")
        
        var div = document.createElement('div');
        div.innerHTML = pessoas[index];
        div.appendChild(button);
        div.setAttribute('id', index)
        console.log(div)
        document.body.appendChild(div)
    }
}

function deleteLi (child) {
    console.log(child)
    const div = document.getElementById(child)
    document.body.removeChild(div)

}

