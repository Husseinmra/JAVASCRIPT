
const form = document.querySelector ('#form');
const peso = document.querySelector ('#peso');
const altura = document.querySelector ('#altura');
const res = document.querySelector ('#resultado');
function calcularIMC() {
  const pesonum = Number(peso.value);
  const alturanum = Number(altura.value);
  if (pesonum == 0 || alturanum == 0) {
    window.alert("Preencha os campos com valores válidos.");
  } else {
    const imc = pesonum / (alturanum * alturanum);
    res.innerHTML = `Seu IMC é ${imc}`;
  }
    
}
addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário
});

