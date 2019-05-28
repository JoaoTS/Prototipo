$(document).ready(function () {
    institutos = JSON.parse(localStorage.getItem("institutos"));
    count = 1;
    $.each(institutos,function(index,value){
        url = value.nome.split(" ").join("_")
        $("#institutos").append("<div id='box0' class='box'><img class='fotoinst0'src='Imagens/spa1.png'><div><a href='Detalhes.html#"
        +url+"'><h3 style='float: left;margin-left:30px;color: black;'>"+value.nome+"</h3></a><div class='extras'><label class='coisa'>"
        +"Avaliação: <i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
        +"<i class='fas fa-star'></i></label><i style='float: right;margin-top:20px;margin-right: 20px;'class='far fa-heart'></i></div><br>"
        +"<span class='loc1'>"+value.localizacao+"</span><div class='descini'><h5>Descriçao:</h5><p>"+value.descricao+"</p></div></div></div>")
    })
})