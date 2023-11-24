function pedeNome(){
    var Nome = prompt("Qual seu nome?");
    document.getElementById("nome").innerText = "Seja Bem-Vindo " + Nome;
}

document.addEventListener("DOMContentLoaded", function(){
    pedeNome();
})

function adicionaParagrafo(){
    var NovoParagrafo = document.createElement("p");
    NovoParagrafo.innerHTML = "Lorem Ipsum sit amet consectetur adipiscing elit. Doloremque Ducimus, facere <br>" +
                              "exercitationem saepe culpa iste magni neque dolorum , enim loboriosam officiis ullam vitae odio <br>" +
                              "possimus ipsum esse harum ut amet.";
    document.getElementById("paragrafo").appendChild(NovoParagrafo);
}

function RemoveParagrafo(){
    var removerParagrafo = document.getElementById("paragrafo");
    paragrafo.innerHTML = "";
}
