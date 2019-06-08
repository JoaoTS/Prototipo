
$(document).ready(function () {
  /*data atual*/
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
  console.log(today);
    /*data atual*/

/*______________LOAD____________*/
institutos = JSON.parse(localStorage.getItem("institutos"));
var url1 = window.location.href.split("#")[1];
console.log(url1);
url1 = url1.split("_").join(" ");
url = ""
for(i = 0; i<url1.length;i++){
    url = url+ url1[i]
    console.log(i)
}
console.log(url);
instituto = institutos[url];
console.log(institutos[url]);
$("#titulo").append(instituto.nome);
$("#descricao").append(instituto.descricao);
$("#local").append(instituto.localizacao);
servicos = instituto.servicos;
count = 1;
$.each(servicos,function(index,value){
    $("#servicos").append("<div id='servico"+count+"' class='servicos'><div class='textcoiso'><i id='plus"
    +count+"' class='fas fa-plus' style='margin-top:5px'"+"onclick='plus("
    +count+")'></i><i id='minus"+count+"'class='fas fa-minus' style='display: none;' onclick='minus("+count+")'></i><span>"
    +value[0].nome+"</span><span id='preco"+count+"' class='precos'>"
    +"Preço: "+ value[1]+"<i class='fas fa-euro-sign'></i></span>"+"<p id='descricao"+count+"' style='display: none;'>"+value[0].descricao+"</p><button type='button' id='btnselect"
    +count+"'class='btn btn-success' style='display:none;float: right;margin-top:10px;background-color:black;' onclick='mostrar("
    +count+")'>Marcar</button> <div id='myModal"
    +count+"' class='modal'><div class='modal-content'><span id='close"+count+"'class='close'>&times;</span>"
    +"<table class='tabela'><tr><th class='th01'>Dia</th><th class='th02'>Mês</th><th class='th03'>Hora</th></tr><form><tr><td><select id='Dia"
    +count+"' class='data'><option>12</option><option>13</option><option>14</option><option>15</option></select></td><td class='data'><select id='Mes"
    +count+"'><option>06</option><option>07</option><option>08</option></select></td><td class='data'><select id='Hora"
    +count+"'><option>12:45</option><option>13:15</option><option>14:20</option></select></td></tr></table><div class='formmarc'>"
    +"<button type='button' class='btn btn-success' id='marcar"+count+"' onclick='Marcar("
    +count+',"'+url+'"'+")'>Efetuar Marcação</button></div></form></div></div>")
    count++;
})
function datamarc(){
  
}

/*_____________END LOAD_________*/
   
/*$("#plus1").click(function(){
        $("#plus1").hide();
        $("#serviço1").css("height","100px");
        $("#minus1").show();
        $("#btnselect").show();
});
    $("#minus1").click(function(){
        $("#plus1").show();
        $("#serviço1").css("height","30px");
        $("#minus1").hide();
        $("#btnselect").hide();
    })*/
});

/*modal box de calendario*/
var modal = document.getElementById("myModal");
var btn = document.getElementById("locbtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

$("#locbtn").click(function(){

    modal.style.display = "none";
  
});
 


function plus(id){
        $("#plus"+id).hide();
        $("#servico"+id).css("height","100px");
        $("#minus"+id).show();
        $("#descricao"+id).show();
        $("#btnselect"+id).show();
};
function minus(id){
    $("#plus"+id).show();
    $("#servico"+id).css("height","30px");
    $("#minus"+id).hide();
    $("#descricao"+id).hide();
    $("#btnselect"+id).hide();
}
function Marcar(id,url){
  if(JSON.parse(localStorage.getItem("utilizador"))!="ola"){
  institutos = JSON.parse(localStorage.getItem("institutos"));
  instituto = institutos[url];
  dia = document.getElementById("Dia"+id).value
  mes = document.getElementById("Mes"+id).value
  hora = document.getElementById("Hora"+id).value
  marcacao = new Marcacao(dia,mes,hora,instituto,id)
  utilizador = JSON.parse(localStorage.getItem("utilizador"));
  utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
  utilizador.marcacao.push(marcacao)
  localStorage.setItem("utilizador", JSON.stringify(utilizador));
  utilizadores[utilizador.username]=utilizador
  localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
  console.log("deu")
  console.log(marcacao.dia)}
  else{
    alert("Você não está com a conta logada")
  }
}
function mostrar(id){
    
    var modal = document.getElementById("myModal"+id)
    var btn = document.getElementById("btnselect"+id)
    var span = document.getElementById("close"+id)
    btn.onclick = function() {
        modal.style.display = "block";
      }
      
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}