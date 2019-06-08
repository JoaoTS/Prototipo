/*class Instituto{
    constructor(nome,descricao,servicos,localizacao,imagem){
        this.nome = nome;
        this.descricao = descricao;
        this.servicos = servicos;
        this.localizacao = localizacao;
        this.imagem = imagem;
    }
}
class Servico{
    constructor(nome,tipo,descricao){
        this.nome = nome
        this.descricao = descricao
        this.tipo = tipo;
    }
}*/
$(document).ready(function () {
    
    pedicure = new Servico("Pedicure","Estética","Faz-se uma pedicure");
    arteunhas = new Servico("Arte de Unhas","Unhas","É uma maneira criativa de pintar, decorar, realçar, e embelezar as unhas. É um tipo de arte que pode ser feito nas unhas das mãos e dos pés.")
    balimass = new Servico("Bali Massagem","Massagens","Técnicas de massagem balinesa incluem acupressão, enrolamento e “flicking” de pele, acariciamento firme e suave, percussão e aplicação de óleos essenciais.")
    beardt = new Servico("Beard Trimming","Barba","Tal como indica pelo nome 'Beard trimming' é aparar a barba por um profissional qualificado.");

    var institutos = {"Spa Origins": new Instituto("Spa Origins","Lorem ipsum dolor sit amet, consectetur adipiscing elit.",{"servico1":[arteunhas,"20.2"],"servico2":[beardt,"5.3"]},"Aveiro","lol.png"),
                        "Barbeiro do Luis": new Instituto("Barbeiro do Luis","Lorem ipsum dolor sit amet, consectetur adipiscing elit.",{"servico1":[beardt,"20.2"],"servico2":[balimass,"5.3"]},"Porto","rofl.png")}
    

    if (localStorage.getItem("institutos") == null) {
        localStorage.setItem("institutos", JSON.stringify(institutos));
        console.log("___LOADED___")
    }
});