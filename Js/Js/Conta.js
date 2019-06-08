$(document).ready(function () {
  console.log("coisa");
  class Instituto {
    constructor(nome, descricao, servicos, localizacao, imagem) {
      this.nome = nome;
      this.descricao = descricao;
      this.servicos = servicos;
      this.localizacao = localizacao;
      this.imagem = imagem;
    }
  }
  $("#geral").click(function () { 
    $(".coisas").hide();
  });

  $("#black").click(function () { 
    $("#formbase").show();  
    
  });
$("#white").click(function(){
  $("#formbase").show();
  $("#teste1").show();
  $("#teste2").show();
  var institutos = JSON.parse(localStorage.getItem("institutos"));

  // let email = $("#Email").val();
  // let key=email.split("@")[0];
  console.log(institutos)

  localStorage.setItem("institutos", JSON.stringify(institutos));
  
})
});
