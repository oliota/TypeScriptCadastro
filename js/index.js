import * as html from "./html.js";
html.novoItem("h2", "Cadastro");
var chave = "alunos";
var alunos = new Array;
html.novoCampo("nome", "text", "informe o nome do " + chave);
carregarLocalStorage();
exibirListaAlunos();
criarBotaoAlertarEu();
//--------------------------------------------
function carregarLocalStorage() {
    if (localStorage.getItem(chave) == null) {
        var objeto = JSON.stringify(alunos);
        localStorage.setItem(chave, objeto);
    }
    else {
        alunos = JSON.parse(localStorage.getItem(chave));
    }
    if (localStorage.getItem("eu") == null) {
        localStorage.setItem("eu", "Rubem Oliota");
    }
}
function exibirListaAlunos() {
    html.novaLista(chave, alunos, true);
    var adicionar = html.novoBotao("Adicionar " + chave);
    adicionar.on("click", function () {
        var texto = $("#nome").val().toString();
        alunos.push(texto);
        salvarLista();
    });
    $("body").append(adicionar);
}
function salvarLista() {
    var objeto = JSON.stringify(alunos);
    localStorage.setItem(chave, objeto);
    $("h3").remove();
    $("ol").remove();
    html.novaLista(chave, alunos, true);
}
function criarBotaoAlertarEu() {
    var botao = html.novoBotao("Alert eu");
    botao.on("click", function () {
        alert(localStorage.getItem("eu"));
        localStorage.setItem("eu", localStorage.getItem("eu") + " _ ");
    });
    $("body").append(botao);
}
