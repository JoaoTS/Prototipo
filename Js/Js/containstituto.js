$(document).ready(function () {
    var cont = 1;
    localStorage.setItem("cont",String(cont))
    $("#btnadd").click(function () {
        cont++;
        $("#outroserv").append('<strong class="cab2" style="background-color:white;border-radius:3px;">Serviço'+cont+':</strong><br>'
            + '<div class="row" style="margin-left: 4%;width:95%; border:blueviolet solid 1px;border-radius: 10px;"><div  class="col-lg-4 col-md-4 col-sm-6 col-12"> '
            + '<select id="tipo' +cont + '" class="form-control serv" name="tiposerv"><option value="" selected disabled hidden>Tipo de Serviço</option><option value="cabelo">Cabelo</option><option value="unhas">Unhas</option>'
            + '<option value="remocao de cabelo">Remoçao de Cabelo</option><option value="estetica">Estética</option><option value="massagens">Massagens</option><option value="maquilhagem">Maquilhagem</option>'
            + '<option value="barba">Barba</option><option value="spa">Spa</option></select></div>'
            + '<div class="col-lg-4 col-md-4 col-sm-6 col-12"><input id="preco'+cont+'"class="form-control serv"type="text" placeholder="Preço do Serviço"></div>'
            + '<div class="col-lg-4 col-md-4 col-sm-6 col-12"><input id="nome'+cont+'" class="form-control serv"type="text" placeholder="Nome do Serviço"></div>'
            + '<div class="col-lg-4 col-md-4 col-sm-6 col-12"><input id="duracao'+cont+'" class="form-control serv"type="text" placeholder="Duração do Serviço (Minutos)"></div>'
            + '<div class="col-lg-4 col-md-4 col-sm-6 col-12" style="height: 90%;"><input id="desc'+cont+'"class="form-control serv" type="text" placeholder="Descrição do Serviço"></div></div><br>'
        )
        localStorage.setItem("cont",String(cont))
    });
   
    




});