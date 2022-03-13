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
    document.getElementById("pagina-inicial").style.display = "none";

    // if(id == "bom-dia"){
    //     document.getElementById("mensagem").style.display = "flex";
    // }
    // else if(id == "matue"){
    //     document.getElementById("mensagem").style.display = "flex";
    // }
}

function funcaoOpcoesMoreVert1(){
    document.getElementById("opcoes-more-vert").style.display = "inline-block" ;
    document.getElementById("more-vert-p-1").style.display = "none";
    document.getElementById("more-vert-p-2").style.display = "inline-block";
}

function funcaoOpcoesMoreVert2(){
    document.getElementById("opcoes-more-vert").style.display = "none";
    document.getElementById("more-vert-p-2").style.display = "none";
    document.getElementById("more-vert-p-1").style.display = "inline-block";
}

function fecharConversa(){
    document.getElementById("pagina-inicial").style.display = "inline-block";
    document.getElementById("mensagem").style.display = "none";
}

function dadosContatoCloseAbri(){
    document.getElementById("dados-do-contato").style.display = "inline-block";
    document.getElementById("opcoes-more-vert").style.display = "none";
}

function dadosContatoCloseFechar(){
    document.getElementById("opcoes-more-vert").style.display = "none";
    document.getElementById("dados-do-contato").style.display = "none";
    document.getElementById("mensagem").style.display = "flex";
}