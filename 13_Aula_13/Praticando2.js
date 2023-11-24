function soma(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var resultado = parseFloat(n1.value) + parseFloat(n2.value); 

    document.getElementById("resultado").value =  resultado;
}

function subtracao(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var resultado = parseFloat(n1.value) -  parseFloat(n2.value); 

    document.getElementById("resultado").value =  resultado;
}

function multiplicacao(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var resultado = parseFloat(n1.value) *  parseFloat(n2.value); 

    document.getElementById("resultado").value =  resultado;
}

function divisao(){
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var resultado = parseFloat(n1.value) / parseFloat(n2.value); 

    document.getElementById("resultado").value =  resultado;
}

var btn = document.querySelectorAll("button");

function mudaCor(Element) {
    Element.style.backgroundColor = "rgb(20, 68, 202)";
}

function corNormal(Element) {
    Element.style.backgroundColor = "rgb(22, 147, 231)";
}

