function burgue(){ //Abrir/fechar menu hamburgue
    if(document.querySelector("#check").checked){
        $('.mainMenu').show();
    }else{
        $('.mainMenu').hide();
        closedMenuInst = true;
        $('.menuInst').hide();
    }
}

var closedMenuInst = true; //flag do menu de instituição

function menuInst(){ //Abrir/fechar menu de instituição
    if(closedMenuInst){
        $('.menuInst').show();
        closedMenuInst = false;
        $('.seta').css('transform','rotate(180deg)');
    }else{
        closedMenuInst = true;
        $('.menuInst').hide();
        $('.seta').css('transform','rotate(0deg)');
    }
}


