


let conta = null
let i = 0

function transformaEmHorasMinutosSegundos(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}


function contar() {
  if (conta !== null) {
    return;
  }
  const tempo = document.querySelector('.container h1')
  const iniciar = document.querySelector('#iniciar')
  conta = setInterval ( function () {
    tempo.innerHTML = transformaEmHorasMinutosSegundos(i);
    i++;
  }, 1000)
  const para = setTimeout(function() {
    clearInterval(conta)
  }, 86400000)
  tempo.style.color = 'black';

}

function parar () {
  const tempo = document.querySelector('.container h1')
if (conta != null) {
  clearInterval(conta);
}
  tempo.style.color = 'rgba(245, 55, 55, 0.85';
}

function zerar() {
  const tempo = document.querySelector('.container h1');
  const zerar = document.querySelector('#zerar');

  // Para o contador se estiver rodando
  if (conta != null) {
    clearInterval(conta);
    conta = null;
  }

  // Zera o valor da contagem
  i = 0;

  // Atualiza o texto
  tempo.innerHTML = transformaEmHorasMinutosSegundos(i);

  // Opcional: volta cor ao normal
  tempo.style.color = 'black';
}

function zeroAEsquerda(num) {
  return num <= 60 ? num : `0${num}`;
}

