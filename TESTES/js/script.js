const tarefa = document.querySelector(".task");
const botao = document.querySelector(".submit");
const lista = document.querySelector(".list");

function add() {
  if (!tarefa.value) {
   tarefa.style.border = "2px solid red";
   setTimeout(() => {
    tarefa.style.border = "";
   }, 1500);
   return;
  } 
  else {
    tarefa.style.border = "2px solid black";
    const item = document.createElement("li");
    item.innerText = tarefa.value;
    lista.appendChild(item);
    const erase = document.createElement("button");
    erase.innerText = "APAGAR";
    erase.classList.add("erase");
    item.appendChild(erase);
    erase.addEventListener("click", function () {
    lista.removeChild(item);
    });
  }
}

tarefa.addEventListener ('keypress', function (x) {
  if (x.key === "Enter") {
    x.preventDefault();
    add();
    tarefa.value = "";
  }
});

