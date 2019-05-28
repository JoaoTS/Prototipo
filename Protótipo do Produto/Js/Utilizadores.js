$(document).ready(function () {
    class Cliente{
        constructor(username,password,email,marcacao){
            this.username = username;
            this.password = password;
            this.email = email;
            this.marcacao = marcacao;
        }
    }
    class Instituto{
        constructor(username,password,email,institutos,contacto){
            this.username = username;
            this.password = password;
            this.email = email;
            this.institutos = institutos;
            this.contacto = contacto;
        }
    }
    utilizadores = {
        "jaquim": new Cliente("user1","","user1@gmail.com",[]),
        "institutomanuel": new Instituto("institutomanuel","","institutomanel@gmail.com","963920013",{})
    }


    if (localStorage.getItem("utilizadores") == null) {
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
        utilizador = {"":null}
        localStorage.setItem("utilizador", JSON.stringify(utilizador));
    }
});