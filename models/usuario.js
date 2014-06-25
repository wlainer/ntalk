module.exports = function(app) {

  var Usuario = function(nome, email){
    this.nome = nome;
    this.email = email;
    this.contatos = [];
  };

  return Usuario;
};