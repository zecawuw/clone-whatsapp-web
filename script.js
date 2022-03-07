function funcaoPesquisa(){
    document.getElementById("pesquisar").value = " ";
    document.getElementById("arrow-back").style.display = "inline-block";
    document.getElementById("search").style.display = "none";
}

function funcaoButtonPesquisa(){
    document.getElementById("pesquisar").value = "Pesquisar ou começar uma nova conversa"
    document.getElementById("arrow-back").style.display = "none";
    document.getElementById("search").style.display = "inline-block";
}

function funcaoContatos(id){
    document.getElementById("mensagem").style.display = "flex";

    // if(id == "bom-dia"){
    //     document.getElementById("mensagem").style.display = "flex";
    // }
    // else if(id == "matue"){
    //     document.getElementById("mensagem").style.display = "flex";
    // }
}

