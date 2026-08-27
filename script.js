var num1 = document.getElementById("um");
var num2 = document.getElementById("dois");
var num3 = document.getElementById("tres");
var num4 = document.getElementById("quatro");
var num5 = document.getElementById("cinco");
var num6 = document.getElementById("seis");
var num7 = document.getElementById("sete");
var num8 = document.getElementById("oito");
var num9 = document.getElementById("nove");
var num0 = document.getElementById("zero");

var escrito = document.getElementById("escrito");

num1.addEventListener("click", function() {
    if(escrito.textContent.length <= 15){
    escrito.textContent += "1";
    }
});

num2.addEventListener("click", function() {
    if(escrito.textContent.length <= 15){
    escrito.textContent += "2";
    }
});

num3.addEventListener("click", function() {
    if(escrito.textContent.length <= 15){
    escrito.textContent += "3";
    }
});

num4.addEventListener("click", function() {
   if(escrito.textContent.length <= 15){
    escrito.textContent += "4";
    }
});

num5.addEventListener("click", function() {
    if(escrito.textContent.length <= 15){
    escrito.textContent += "5";
    }
});

num6.addEventListener("click", function() {
    if(escrito.textContent.length <= 15){
    escrito.textContent += "6";
    }
});

num7.addEventListener("click", function() {
    if(escrito.textContent.length <= 15){
    escrito.textContent += "7";
    }
});

num8.addEventListener("click", function() {
    if(escrito.textContent.length <= 15){
    escrito.textContent += "8";
    }
});

num9.addEventListener("click", function() {
    if(escrito.textContent.length <= 15){
    escrito.textContent += "9";
    }
});

num0.addEventListener("click", function() {
  if(escrito.textContent.length <= 15){
    escrito.textContent += "0";
    }
});


var limpar = document.getElementById("limp");

limpar.addEventListener("click", function() {
    escrito.textContent = "";
});


var numero1;
var numero2;
var operacao;


var adicao = document.getElementById("adc");
var multiplicacao = document.getElementById("mult");
var divisao = document.getElementById("div");
var subtracao = document.getElementById("sub");
var igual = document.getElementById("igual");


adicao.addEventListener("click", function() {
    operacao = "+";
    numero1 = escrito.textContent;
    escrito.textContent = "";
});


multiplicacao.addEventListener("click", function() {
    operacao = "*";
    numero1 = escrito.textContent;
    escrito.textContent = "";
});


subtracao.addEventListener("click", function() {
    operacao = "-";
    numero1 = escrito.textContent;
    escrito.textContent = "";
});


divisao.addEventListener("click", function() {
    operacao = "/";
    numero1 = escrito.textContent;
    escrito.textContent = "";
});


igual.addEventListener("click", function() {

    numero2 = escrito.textContent;

    if (operacao == "+") {
        escrito.textContent = Number(numero1) + Number(numero2);
    }

    if (operacao == "*") {
        escrito.textContent = Number(numero1) * Number(numero2);
    }

    if (operacao == "-") {
        escrito.textContent = Number(numero1) - Number(numero2);
    }

    if (operacao == "/") {
        escrito.textContent = Number(numero1) / Number(numero2);
    }

});
