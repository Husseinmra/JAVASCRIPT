function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var nascimento = document.getElementById("txtano").value;
  var idade = ano - Number(nascimento);
  var resultado = document.getElementById("res");
  var txt = document.querySelector('section#res p#text');
  var sexo = document.getElementsByName('radsex');
  var img = document.getElementById('imagem');

  if (nascimento == 0 || nascimento > ano) {
    window.alert("Digite um ano válido");
    return; // impede execução com dados inválidos
  }

  
  if (sexo[0].checked) {
    if (idade <= 10) {
      img.src = "imagem2/crianca-h.jpg";
    } else if (idade <= 17) {
      img.src = "imagem2/adolescente-h.jpg";
    } else if (idade <= 50) {
      img.src = "imagem2/jovem-h.jpg";
    } else {
      img.src = "imagem2/velho-h.png";
    }
    img.style.display = "block";
    txt.innerHTML = `Você é homem e tem ${idade} anos.`;
    
    
  } else if (sexo[1].checked) {
    if (idade <= 10) {
      img.src = "imagem2/crianca-m.jpg";
    } else if (idade <= 17) {
      img.src = "imagem2/adolescente-m.jpg";
    } else if (idade <= 50) {
      img.src = "imagem2/jovem-m.jpg";
    } else {
      img.src = "imagem2/velha-m.jpg";
    }
    
    img.style.display = "block";
    txt.innerHTML = `Você é mulher e tem ${idade} anos.`;
    
  }



  
    





  

















}