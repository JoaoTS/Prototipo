class Cliente{
    constructor(username,password,email,marcacao,favoritos){
        this.username = username;
        this.password = password;
        this.email = email;
        this.marcacao = marcacao;
        this.favoritos = favoritos;
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
}
class Instituto{
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
}