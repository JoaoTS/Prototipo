$(document).ready(function () {
    u = JSON.parse(localStorage.getItem("utilizador"));
    institutos = u.favoritos;
    count = 1;
    $.each(institutos,function(index,value){
        url = value.nome.split(" ").join("_")
        $("#content").append("<section id='sec"+count+"' onclick='detalhes("+'"'
        +url+'"'+")' class='row' style='background-color:rgb(231, 231, 231);width: 60%;margin-left:20%;"
        +"text-align: center; height: 50px;line-height:50px;border-bottom:1px black solid;'><div class='col-lg-4' id='nome"
        +count+"'>"+value.nome+"</div><div class='col-lg-4' id='loc"+count+"'>"
        +value.localizacao+"</div><div class='col-lg-4' id='rating"
        +count+"'><i class='fas fa-star'></i></div><br></section>")
        count++;
    })

    
})
function detalhes(url){
    window.location = "Detalhes.html#"+url;
}