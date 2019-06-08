/*class Cliente{
    constructor(username,password,email,marcacao){
        this.username = username;
        this.password = password;
        this.email = email;
        this.marcacao = marcacao;
    }
}
class CInstituto{
    constructor(username,password,email,institutos,contacto){
        this.username = username;
        this.password = password;
        this.email = email;
        this.institutos = institutos;
        this.contacto = contacto;
    }
}*/
$(document).ready(function () {


    utilizadores = {
        "User1": new Cliente("user1","","user1@gmail.com",[],[]),
        "institutomanuel": new CInstituto("institutomanuel","","institutomanel@gmail.com","","963920013"),
        "AnaAzevedo": new Cliente("Ana1","a1234567","Azevedo234@gmail.com",[],[]),
        "Instituto Pinto": new CInstituto("InstituitoPinto","","SalaoPinto@gmail.com","Salao do Pinto": new Instituto("Salao do Pinto","Apesar de sermos recentes temos muita experiência",{"servico1":[beardt,"20.2"],"servico2":[balimass,"5.3"],"servico3":[Balayage,"20"],"servico4":[maquilhar,"22,5"],"servico5":[Geoterapia,"23.5"]},"Aveiro","img1.png"),"256940012"),
        "Spa Origins": new CInstituto("SpaOrigins","Origins256","origins@gmail.com",new Instituto("Spa Origins","Nosso compromisso com nossos clientes é primordial!",{"servico1":[arteunhas,"20.2"],"servico2":[beardt,"5.3"],"servico3":[mascaras,"15"],"servico4":[Crioterapia,"200"],"servico5":[depilacao,"20.5"],"servico6":[pedicure,"20.5"]},"Aveiro","spa1.png"),"256940012"),
        "MiguelSilva": new Cliente("MiguelSilva","silvaMiguel","miguel2434@gmail.com",[],[])
    }


    if (localStorage.getItem("utilizadores") == null) {
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
        utilizador = "ola"
        localStorage.setItem("utilizador", JSON.stringify(utilizador));
    }
    if(JSON.parse(localStorage.getItem("utilizador"))!="ola"){
        $("#dropdownindex").attr("class","dropdown");
        $("#log").attr("class","login d-none");
    }
    else{
        $("#dropdownindex").attr("class","dropdown d-none");
        $("#log").attr("class","login");

    }
    $("#subm").click(function(){
        username = $("#user").val();
        password = $("#pass").val();
        email = $("#email").val();
        utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
        t = true;
        $.each(utilizadores,function(index,value){
            if(value.username==username){
                alert("Já existe uma conta com esse username")
                t = false;
                return;
            }
        })
        if(t){
            u = new Cliente(username,password,email,[],[]);
            utilizadores[u.username]=u;
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
            utilizador = u;
            localStorage.setItem("utilizador", JSON.stringify(utilizador));
            alert("Deu")
            window.location = "index.html"
        }
    })
    $("#subi").click(function(){
        alert("lole")
        var x = true;
    var nome = $("#nome").val();
    var pass = $("#pass").val();
    var local = $("#local").val();
    var mail =  $("#email").val();
    $("#lblnome").text("");
    $("#lblmail").text("");
    $("#lblpass").text("");
    $("#lblloc").text("");
    alert(x);
        if(nome.length<5){
            $("#lblnome").append("O nome tem que ter no minimo 5 caracteres");
            x = false;
        }
        if(mail.length<10){
            $("#lblmail").append("O mail tem que ter no minimo 10 caracteres");
            x=false;
        }    
        else if( mail.indexOf("@")>=mail.indexOf(".")){
            $("#lblmail").append("A @ tem que estar antes do .");
            x=false;
        }
        if(pass.length<8){
            $("#lblpass").append("A password tem que ter no minimo 8 caracteres");
        x=false;
        }
        if(local.length<5){
            $("#lblloc").append("A localizaçao tem que ter no minimo 5 caracteres");
            x=false;
        }
        if(x){
            utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
            t = true;
            $.each(utilizadores,function(index,value){
                if(value.username==nome){
                    alert("Já existe uma conta com esse username")
                    t = false;
                    return;
                }
            })
            if(t){
                instituto = new Instituto(nome,"",{},local,"");
                cont = parseInt(localStorage.getItem("cont"))    
                console.log(cont)      
                for(i=1;i<=cont;i++){
                    console.log(i);
                    tipo = $("#tipo"+i+" option:selected" ).val();
                    console.log(tipo);
                    preco = $("#preco"+i).val();
                    snome = $("#nome"+i).val();
                    desc = $("#desc"+i).val();
                    servico = new Servico(snome,tipo,desc);
                    console.log("dá")
                    console.log(servico)
                    instituto.servicos["servico"+i]= [servico,preco];
                }
                utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
                conta = new CInstituto(nome,pass,mail,instituto,"")
                utilizadores[nome]=conta;
                localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
                utilizador = conta;
                localStorage.setItem("utilizador", JSON.stringify(utilizador));
                inst = JSON.parse(localStorage.getItem("institutos"));
                inst[instituto.nome]=instituto;
                localStorage.setItem("institutos", JSON.stringify(inst));
                alert("lol");}
        }
});
    
    /*$( "#formtodo" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        console.log("pff")
        event.preventDefault();
      });
    $( "#subm" ).click(function() {
        $( "#formtodo" ).submit();
        console.log("lol")
    });*/
});
function Sair(){
    utilizador = "ola"
    localStorage.setItem("utilizador", JSON.stringify(utilizador));
    window.location = "index.html"
}

