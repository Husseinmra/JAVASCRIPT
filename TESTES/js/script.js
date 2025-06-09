
const form = document.querySelector ('#form');
const peso = document.querySelector ('#peso');
const altura = document.querySelector ('#altura');
const res = document.querySelector ('#resultado');

function calcularIMC() {
  const pesonum = Number(peso.value.replace(',', '.'));
  const alturanum = Number(altura.value.replace(',', '.'));
  if (pesonum == 0 || alturanum == 0 || isNaN(pesonum) || isNaN(alturanum)) {
    res.classList.add('erro');
    res.innerHTML = 'Preencha os campos corretamente!';
  } else {
    const imc = pesonum / (alturanum * alturanum);
    res.classList.remove('erro');
    res.innerHTML = `Seu IMC é ${imc.toFixed(3)}`;
    return imc; 
  }    
}

function criarP (imc) {
  const p = document.createElement('p');
  p.classList.add('resultado');
  res.appendChild(p);

  if (imc < 18.5) {
    p.innerHTML += 'Abaixo do peso';
    p.classList.add('abaixo');
  }
  else if (imc >= 18.5 && imc < 24.9) {
    p.innerHTML += 'Peso normal';
    p.classList.add('normal');
  } 
  else if (imc >= 25 && imc < 29.9) {
    p.innerHTML += 'Sobrepeso';
    p.classList.add('sobrepeso');
  } 
  else if (imc >= 30 && imc < 34.9) {
    p.innerHTML += 'Obesidade grau I';
    p.classList.add('obesidade1');
  } 
  else if (imc >= 35 && imc < 39.9) {
    p.innerHTML += 'Obesidade grau II';
    p.classList.add('obesidade2');
  } 
  else {
    p.innerHTML += 'Obesidade grau III ou mórbida';
    p.classList.add('obesidade3');
  }
}

form.addEventListener('submit', function(event){
  event.preventDefault(); // Impede o envio do formulário
  res.innerHTML = ''; 
  const imc = calcularIMC();
  if (imc) {
    criarP(imc);
  }
  

});



