var click = false;

//var calculadora = document.getElementById("calculadora-display");

function curtir(){
  var curtir = document.getElementById("curtir1");
  if(click == false){
    curtir.innerText = "Você curtiu isso";
    click = true;
  }
  else {
    curtir.innerText = "";
    click = false;
  }
  return click;
  //display.value = display.value + valorAtual;
}

function comentar(){
  var getTexto = document.getElementById("texto");
  var publicar = document.getElementById("inserirComentario");
  publicar.innerText = getTexto.value;
  console.log("entrou aqui");
}




window.onload = function() {
  var botaoCurtir = document.getElementById("btCurtir");
  botaoCurtir.addEventListener("click", curtir);
  var comenta = document.getElementById("comentario");
  comenta.addEventListener("click", comentar);

  //display = document.getElementById("calculadora-display");
}

//salvar informações

localStorage.setItem("comentario", "curtir");
