export function divisor() {
    //document.body.appendChild(document.createElement("hr"));    
    $("body").append(newTag("hr"));
}
export function novaLinha() {
    //document.body.appendChild(document.createElement("hr"));    
    $("body").append(newTag("br"));
}
export function novoItem(tag, conteudo) {
    /*
    let item = document.createElement(tag);
    item.textContent = conteudo;
    document.body.appendChild(item);
    */
    var element = $(newTag(tag)).text(conteudo);
    $("body").append(element);
}
export function newTag(tag) {
    return $("<" + tag + "></" + tag + ">");
}
export function novaLista(titulo, itens, listaNumerada) {
    /*
      novoItem('h3', titulo)
      let ul = document.createElement('ul');
      itens.forEach(
          function (value) {
              let li = document.createElement('li');
              li.textContent = value;
              ul.appendChild(li);
          }
      );
      document.body.appendChild(ul);
  */
    novoItem('h3', titulo);
    var lista = $(newTag(listaNumerada ? "ol" : "ul"));
    itens.forEach(function (value) {
        var li = $(newTag("li")).text(value);
        lista.append(li);
    });
    $("body").append(lista);
}
export function novoLink(conteudo, url, link_externo) {
    /*
    let item = document.createElement("a");
    item.textContent = conteudo;
    item.setAttribute("href", url)
    document.body.appendChild(item);
    */
    novaLinha();
    var element = $(newTag("a")) //<a></a>
        .text(conteudo) //<a>texto aqui</a>
        .attr("href", url) //<a href='link aqui'> texto aqui</a>
        .attr("target", (link_externo) ? "_blank" : "_self"); //<a href='link aqui' target='_self'> texto aqui</a>
    $("body").append(element);
}
export function novoBotao(conteudo) {
    novaLinha();
    var element = $(newTag("button"))
        .text(conteudo);
    return element;
    // $("body").append(element);
}
export function novoCampo(id, tipo, placeholder) {
    novaLinha();
    var element = $(newTag("input"))
        .attr("type", tipo)
        .attr("id", id)
        .attr("placeholder", placeholder);
    $("body").append(element);
}
export function alertar(conteudo) {
    $(function () {
        alert(conteudo);
    });
}
