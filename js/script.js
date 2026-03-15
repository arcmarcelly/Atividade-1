/* =======================================================================
Navegação entre as telas
======================================================================= */

const botaoCadastro = document.getElementById("botao-cadastro");
const botaoAcessar = document.getElementById("botao-acessar");
const botaoCadastrar = document.getElementById("botao-cadastrar");
const botaoSair = document.getElementById("botao-sair");

if (botaoCadastro) {
  botaoCadastro.addEventListener("click", function(){
    window.location.href = "telas/cadastro.html";
  });
}

if (botaoAcessar) {
  botaoAcessar.addEventListener("click", function(){
    window.location.href = "telas/home.html";
  });
}

if (botaoCadastrar) {
  botaoCadastrar.addEventListener("click", function(){
    window.location.href = "../index.html";
  });
}

if (botaoSair) {
  botaoSair.addEventListener("click", function(){
    window.location.href = "../index.html";
  });
}

/* =======================================================================
   API CEP
   ======================================================================= */
const cepInput = document.getElementById("cep");

if (cepInput) {

cepInput.addEventListener("blur", function () {

let cep = cepInput.value.replace(/\D/g, "");

if (cep.length !== 8) {
alert("CEP inválido");
return;
}

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.json())
.then(dados => {

if (dados.erro) {
alert("CEP não encontrado");
return;
}

document.getElementById("rua").value = dados.logradouro;
document.getElementById("bairro").value = dados.bairro;
document.getElementById("cidade").value = dados.localidade;
document.getElementById("estado").value = dados.uf;

})
.catch(() => {
alert("Erro ao buscar CEP");
});

});

}


