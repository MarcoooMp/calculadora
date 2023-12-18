function insertCommand(number) { //Faz os números aparecem na tela//
    var number_plus = document.getElementById('results').innerHTML;
    document.getElementById('results').innerHTML = number_plus + number
}; //Cria uma váriavél chamada number_plus e adiciona a variavél number, 
//fazendo ambas aparecerem na calculadora//



function cleanAll() {
    document.getElementById('results').innerHTML = ""
}; //Essa function limpa a tela da calculadora//


function del() {
    var results = document.getElementById('results').innerHTML;
    document.getElementById('results').innerHTML = results.substring(0, results.length - 1);
}

function calculate() {
    var results = document.getElementById('results').innerHTML;
    if (results) {
        document.getElementById('results').innerHTML = eval(results);
    }
    else {
        document.getElementById('results').innerHTML = "Insira valores";
    }

}