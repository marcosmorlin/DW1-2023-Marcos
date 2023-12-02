var corNormal ="";
function mudaCorClique(id){
    var caixa = document.getElementById(id);

    if(caixa){

    corNormal = window.getComputedStyle(caixa).backgroundColor;

    }

    if (corNormal && corNormal !== 'rgba(0, 0, 0, 0)') {
        document.body.style.backgroundColor = corNormal;
    }
}

function passarPonteiro(id){
    var caixa = document.getElementById(id);

    if(caixa){
    var corNormal = window.getComputedStyle(caixa).backgroundColor;
    }

    if(corNormal){
        document.body.style.backgroundColor = corNormal;
        var preview = document.getElementById("preview");
    }

    if (!preview) {
        preview = document.createElement("p");
        preview.innerHTML = "Preview";
        preview.id = "preview";
        document.body.appendChild(preview);
    }

}

function voltaCorMouse(id){

    document.body.style.backgroundColor = corNormal;
    
    var preview = document.getElementById("preview");
    if(preview){
        preview.parentNode.removeChild(preview);
    }

}

function remove(){
    document.body.style.backgroundColor = "";

}