$(document).ready(function () {
    i = JSON.parse(localStorage.getItem("institutos"));
    url = window.location.href.split("#")
    if(url.length==1){
        institutos = i;
    }
    else if(url.length==2){
        console.log("seguiu este")
        institutos = {}
        lol = url[1].split("_").join(" ")
        document.getElementById("searchloc").value=lol;
        $.each(i,function(index,value){
            local = value.localizacao.toLowerCase()
            if(local.includes(lol.toLowerCase())){
                institutos[value.nome]=value;
            }
        })
    }else{console.log("seguiu este lol")
        institutos1 = {}
        institutos = {}
        if(url[1]!="_"){
            console.log("seguiu este?")
        lol = url[1].split("_").join(" ")
        document.getElementById("searchloc").value=lol;
        $.each(i,function(index,value){
            local = value.localizacao.toLowerCase()
            console.log(local)
            if(local.includes(lol.toLowerCase())){
                console.log("lol "+local)
                institutos1[value.nome]=value;
            }
        })
        }else{
            institutos1 = i;
        }
        tipo = url[2].split("_").join(" ")
        $.each(institutos1,function(index,value){
            $.each(value.servicos,function(ind,servico){
                if(servico[0].tipo.toLowerCase()==tipo.toLowerCase()){
                    institutos[value.nome]=value;
                }
            })
           
        })
        
    }
    count = 1;
    $.each(institutos,function(index,value){
        url = value.nome.split(" ").join("_")
        $("#institutos").append("<div id='box0' class='box'><img class='fotoinst0'src='Imagens/spa1.png'><div><a href='Detalhes.html#"
        +url+"' class='extras''><h3 style='float: left;margin-left:30px;color: black;'>"+value.nome+"</h3></a><div class='extras'><label class='coisa'>"
        +"Avaliação: <i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
        +"<i class='fas fa-star'></i></label><i onclick='addFav("+'"'+value.nome+'"'+")'style='float: right;margin-top:20px;margin-right: 20px;'class='far fa-heart'></i></div><br>"
        +"<span class='loc1'>"+value.localizacao+"</span><div class='descini'><h5>Descriçao:</h5><p>"+value.descricao+"</p></div></div></div>")
    })

    
})
function Search(){
    loc = $("#searchloc").val().split(" ").join("_");
    if(window.location.href.split("#").length==1){
        window.location = window.location.href +"#"+loc;
    }
    else if(window.location.href.split("#").length==2){
        window.location = window.location.href.split("#")[0] +"#"+loc
    }
    else{
        window.location = window.location.href.split("#")[0] +"#"+loc+"#"+window.location.href.split("#")[2];
    }
    location.reload();
}
function addFav(nome){
    u = JSON.parse(localStorage.getItem("utilizador"));
    i = JSON.parse(localStorage.getItem("institutos"));
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    u.favoritos.push(i[nome]);
    utilizadores[u.nome]=u;
    localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
    localStorage.setItem("utilizador", JSON.stringify(u));
}
function Filtrar(tipo){
    t = tipo.split(" ").join("_");
    if(window.location.href.split("#").length==1){
        window.location = window.location.href +"#_#"+t
    }else{
    window.location = window.location.href.split("#").slice(0,2).join("#")+"#"+t;
    }
    location.reload();
}

        