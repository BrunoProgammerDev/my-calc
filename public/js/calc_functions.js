const lista =  []

function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 9) return;
    console.log(display);
    if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '0';
}

var operador = ''
var valor1 = 0
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    valor1 = display.value;
    operador = btn.value;

    lista.push(valor1);
    lista.push(operador);
    console.log(lista);

    display.value = '0';

}

//function raizquadrada(valor){
    //const display = document.getElementById('display');
    //const valor2 = parseInt(display.value);
    //valor = valor * valor2 
    // //valor = Math.sqrt(valor);
    //return valor;

//}


function calcularOperacao(){
    const display = document.getElementById('display');
    lista.push(display.value);
    console.log(lista);

    const operacao = lista.join(' ');
    console.log(operacao);

    const valor2 = display.value;
    if (operador === "^") {
        valor1 = Math.pow(valor1, valor2);
    } 
    else if (operador === "√"){
        valor1 = Math.sqrt(valor1);
    } else {
        valor1 = eval(operacao);
    }
    display.value = valor1;
    operador = '';
    lista.length = 0;
}       


function manipularTeclado(){
    if(/[0-9\(\)\.]/.test(event.key))
        atualizarDisplay({value: event.key});
}
