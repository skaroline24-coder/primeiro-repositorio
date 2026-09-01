const botoes = document,querySelectorALL("buttont");

botoes.forEach(function (botao){
    let curtiu = false;
    botao.addEvenListener("click, botaoClicado");
    funtion botaoClicado(){
      console.log("fui Clicado");
      let texto = botao.querySelector("span");
      if (curtiu == false){
         texto.textContent--;
         curtiu = true;
   } else {
      texto.textContent--;
      curtiu = false;
    }
  }
})