$(document).ready(function () {
    utilizador = JSON.parse(localStorage.getItem("utilizador"));
    marcacoes = utilizador.marcacao
    count = 1;
    $.each(marcacoes,function(index,value){
        $("#tabcomp").append("<tr><td>"+value.instituto.nome+"</td><td>"+value.dia+"/"
        +value.mes+"</td><td>"+value.hora+"</td><td>"+value.instituto.servicos["servico"+value.nservico][0].nome
        +"</td><td>"+value.instituto.servicos["servico"+value.nservico][1]+"</td></tr>");
    })
})