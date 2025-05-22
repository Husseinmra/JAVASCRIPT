window.alert("Bem vindo ao contador")


function contar(){
var ini = document.getElementById("txtinicio")
var fim = document.getElementById("txtfim")
var passo = document.getElementById("txtpasso")
var res = document.getElementById("resultado")
var i = Number(ini.value)
var f = Number(fim.value)
var p = Number(passo.value)

    if(i == 0 || f == 0 || p == 0){
        res.innerHTML = "Impossível contar"
    } else {
          res.innerHTML = "Contando: "
          
          if(p<=0){
            window.alert('Passo invaldio. Considerando PASSO 1')
            p = 1
          }
          //crescente
          if (i<f) {
            for (var c = i; c<=f; c = c + p)
            res.innerHTML += `${c} \u{1F449}`
          }
          //decrescente
          if (i>f) {
            for (var c = i; c>=f; c = c - p)
            res.innerHTML += `${c} \u{1F449}`
          } 



    }
  }
