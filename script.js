const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botaoCalcular = document.querySelector(".botao");
const elementoResultado = document.querySelector(".resultado");

const pesoPadrao = 55;
const alturaPadrao = 1.6;

peso.value = pesoPadrao;
altura.value = alturaPadrao;

const elementoPeso = document.querySelector(".valorPeso");
const elementoAltura = document.querySelector(".valorAltura");

elementoPeso.innerHTML = pesoPadrao;
elementoAltura.innerHTML = alturaPadrao;

let valorPeso = 55;

function alterarPeso() {
  valorPeso = this.value;
  elementoPeso.innerText = valorPeso;
}

peso.addEventListener("input", alterarPeso);

let valorAltura = 1.6;
function alterarAltura() {
  valorAltura = this.value;
  elementoAltura.innerText = valorAltura;
}

altura.addEventListener("input", alterarAltura);

calcularImc();
function calcularImc() {
  const resultado = valorPeso / valorAltura ** 2;
  let situacao;
  if (resultado < 18.5) {
    situacao = "Você esta abaixo do peso";
  } else if (resultado >= 18.5 && resultado <= 24.9) {
    situacao = "Peso normal";
  } else if (resultado > 25 && resultado < 29.5) {
    situacao = "você está no sobrepeso";
  } else if (resultado > 29.5 && resultado < 34.9) {
    situacao = "você está no obeso";
  } else if (resultado > 35) {
    situacao = "voce está com obesidade mórbida";
  }
  elementoResultado.innerText = "IMC: " + resultado.toFixed(1) + " " + situacao;
}

botaoCalcular.addEventListener("click", calcularImc);
