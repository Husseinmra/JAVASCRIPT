var num = document.getElementById("txtinicio");
var lista = document.getElementById("inum");
var res = document.getElementById("resultado");

function adicionar() {
  if (num.value.length == 0) {
    window.alert("Digite um número");
  } else {
    var n = Number(num.value);
    var item = document.createElement("option");
    item.text = `Valor ${n} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = `Valores adicionados com sucesso!.`;
  }
}

function verificar () {
  
}