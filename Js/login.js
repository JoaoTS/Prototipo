function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    var logged = false;
    $.each(utilizadores,function(index,value){
        if(username==value.username){
            if(password==value.password){
                utilizador = value
                logged= true
                return false
            }
            else{
            }
        }
        else{
        }
    })

    if(logged){
        alert ("Login successfully");
        localStorage.setItem("utilizador", JSON.stringify(utilizador));
        window.location.href = "index.html";}
        
    else
        alert("Invalid username and password");
$("#password").val("");
    }
    
function create(){
    sucesso();

}
function sucesso(){

}

