
const frase = document.querySelector('.container')
const data = new Date();
const diaDaSemana = data.getDay() +1; // Domingo é 0, então adicionamos 1 para que comece em 1
const dia = data.getDate();
const mes = data.getMonth() + 1; // Janeiro é 0
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();
const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;


function verificarDiaDaSemana(diaDaSemana) {
  if (diaDaSemana === 0) {
    return 'Domingo';
  } else if (diaDaSemana === 1) {
    return 'Segunda-feira';
  } else if (diaDaSemana === 2) {
    return 'Terça-feira';
  } else if (diaDaSemana === 3) {
    return 'Quarta-feira';
  } else if (diaDaSemana === 4) {
    return 'Quinta-feira';
  } else if (diaDaSemana === 5) {
    return 'Sexta-feira';
  } else if (diaDaSemana === 6) {
    return 'Sábado';
  }
}

function verificarMes(mes) {
  if (mes === 1) {
    return 'Janeiro';
  } else if (mes === 2) {
    return 'Fevereiro';
  } else if (mes === 3) {
    return 'Março';
  } else if (mes === 4) {
    return 'Abril';
  } else if (mes === 5) {
    return 'Maio';
  } else if (mes === 6) {
    return 'Junho';
  } else if (mes === 7) {
    return 'Julho';
  } else if (mes === 8) {
    return 'Agosto';
  } else if (mes === 9) {
    return 'Setembro';
  } else if (mes === 10) {
    return 'Outubro';
  } else if (mes === 11) {
    return 'Novembro';
  } else if (mes === 12) {
    return 'Dezembro';
  }
}

function zeroEsquerda(hora, minutos, segundos) {
  const hr = hora < 10 ? `0${hora}` : hora;
  const min = minutos < 10 ? `0${minutos}` : minutos;
  const seg = segundos < 10 ? `0${segundos}` : segundos;
  return `${hr}:${min}:${seg}`;
}

frase.innerHTML = `<h1>Hoje é ${verificarDiaDaSemana(diaDaSemana)}, ${dia} de ${verificarMes(mes)} de ${ano} ${zeroEsquerda(hora, minutos, segundos)}.</h1>`
