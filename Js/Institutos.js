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
    
    pedicure = new Servico("Pedicure","Estetica","Faz-se uma pedicure");
    arteunhas = new Servico("Arte de Unhas","Unhas","É uma maneira criativa de pintar, decorar, realçar, e embelezar as unhas. É um tipo de arte que pode ser feito nas unhas das mãos e dos pés.")
    balimass = new Servico("Bali Massagem","Massagens","Técnicas de massagem balinesa incluem acupressão, enrolamento e “flicking” de pele, acariciamento firme e suave, percussão e aplicação de óleos essenciais.")
    beardt = new Servico("Beard Trimming","Barba","Tal como indica pelo nome 'Beard trimming' é aparar a barba por um profissional qualificado.");
    Balayage  = new Servico("Balayage","Cabelo","É uma palavra francesa que significa, em tradução literal, varrer ou pintar.  Ou seja, é muito natural, com linhas bem fininhas da raiz às pontas, sem marcas e que se mesclam à cor do seu cabelo, sem que seja possível identificar que um trabalho foi feito nos fios.");
    depilacao = new Servico("Depilação em linha","Remocao de Cabelo","Depilação com linha é uma técnica de depilação temporária, que consiste em apenas utilizar um fio 100% de algodão. Esse fio é torcido e enrolado com as duas mãos, inserindo a sua extremidade na boca, de forma a provocar pressão no mesmo.");
    Geoterapia = new Servico("Geoterapia","Estetica"," É um tratamento holístico e natural com frutos da terra. Ela utiliza-se de argila, barro, pedras e cristais, como ferramentas reequilibrastes.");
    mascaras = new Servico("Máscaras capilares ","Spa","São tratamentos que são formulados com óleos, manteigas e outros ingredientes hidratantes. Eles passam mais tempo afundando e cuidando do cabelo do que o seu shampoo ou condicionador, dando benefícios dramáticos em um único uso.");
    esticar = new Servico("Esticar cabelo","Cabelo","- O processo começa com a aplicação de um relaxante, que ajuda a quebrar as ligações de proteína em seu cabelo. O cabelo é então endireitado e um neutralizador é aplicado, o que reconstrói os laços com uma estrutura alterada.");
    Crioterapia= new Servico("Crioterapia do corpo","Spa","A crioterapia em todo o corpo envolve a permanência em uma pequena câmara a -80 ° C.");
    maquilhar= new Servico("Coloração orgânica","Maquilhagem","Oferecer uma coloração permanente que substitui a amônia e ingredientes sintéticos por ingredientes naturais.");


    var institutos = {"Spa Origins": new Instituto("Spa Origins","O nosso compromisso com nossos clientes é primordial!",{"servico1":[arteunhas,"20.2"],"servico2":[beardt,"5.3"],"servico3":[mascaras,"15"],"servico4":[Crioterapia,"200"],"servico5":[depilacao,"20.5"],"servico6":[pedicure,"20.5"]},"Aveiro","spa1.png"),
                        "Barbeiro do Luis": new Instituto("Barbeiro do Luis","Tenha o melhor corte do Mundo!",{"servico1":[beardt,"20.2"],"servico2":[balimass,"5.3"],"servico3":[depilacao,"25"]},"Porto","spa1.png"),
                        "Salao do Pinto": new Instituto("Salao do Pinto","Apesar de sermos recentes temos muita experiência",{"servico1":[beardt,"20.2"],"servico2":[balimass,"5.3"],"servico3":[Balayage,"20"],"servico4":[maquilhar,"22,5"],"servico5":[Geoterapia,"23.5"]},"Aveiro","img1.png")}
                        
    

    if (localStorage.getItem("institutos") == null) {
        localStorage.setItem("institutos", JSON.stringify(institutos));
        console.log("___LOADED___")
    }
});