$(document).ready(function () {
    utilizador = JSON.parse(localStorage.getItem("utilizador"));
    marcacoes = utilizador.marcacao
    count = 1;
    $.each(marcacoes,function(index,value){
        console.log(value.mes);
        if(value.mes=="06"){
            console.log(value.dia);
            $("#"+value.dia).addClass("active")
        }
        $("#tabcomp").append("<tr><td>"+value.instituto.nome+"</td><td>"+value.dia+"/"
        +value.mes+"</td><td>"+value.hora+"</td><td>"+value.instituto.servicos["servico"+value.nservico][0].nome
        +"</td><td>"+value.instituto.servicos["servico"+value.nservico][1]+"</td>><td onclick='eliminar("+'"'+count+'"'+")' id='"+count+"'><i class='fas fa-times'></i></td></tr>");
        count++;
    })
})
function eliminar(id){
    console.log(parseInt(id));
    utilizador = JSON.parse(localStorage.getItem("utilizador"));
    
      utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    
      utilizador.marcacao.splice(parseInt(id)-1,1);
    
      localStorage.setItem("utilizador", JSON.stringify(utilizador));
    
      utilizadores[utilizador.username]=utilizador
    
      localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
    
    location.reload()
}