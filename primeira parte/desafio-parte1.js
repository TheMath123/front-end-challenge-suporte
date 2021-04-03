/* 
    Desafio - Parte 1 - Manipulando o DOM
    Autor: Matheus Prado Agostinho
*/

// 1. Adicione um ícone para Youtube no header apontando para Canal da AutoForce

var networklist = document.querySelector('div .header__networks-list');

var linkYoutube = "https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ";

//Criar o botão
var linkElem = document.createElement('a');
linkElem.setAttribute('href', linkYoutube);
linkElem.setAttribute('target', '_blank');

//Cria o icone
var iconYoutubeHeader = document.createElement('i');
iconYoutubeHeader.setAttribute('class', 'icon icon-youtube-header icon--small icon--hover-youtube');

linkElem.appendChild(iconYoutubeHeader); //Atribui o icone ao botão

networklist.appendChild(linkElem); //Atribui o botão ao header

//  ----



// 2. Modifique o comportamento do menu Whatsapp

var cardWhatsappLinks = document.querySelector('div #wpp-content-0');

function createWhatsAppLinks(linkWhatsapp, text, phone) {
    var item = document.createElement('li');
    item.setAttribute("class", "header__card-whatsapp-item")

    var linkCard = document.createElement('a'); //texto do card
    linkCard.setAttribute('class', 'header-mobile__whatsapp-link');
    linkCard.setAttribute('href', linkWhatsapp);
    linkCard.setAttribute('target', '_blank');

    var textTitle = document.createElement('strong'); //titulo
    textTitle.appendChild(document.createTextNode(text));

    var subText = document.createElement('span'); //telefone
    subText.setAttribute('class', 'header-mobile__whatsapp-number text-mask-phone');
    subText.appendChild(document.createTextNode(phone));

    linkCard.appendChild(textTitle); //adicionando atributos ao card
    linkCard.appendChild(subText);

    var cardIcon = document.createElement('a'); //card do icone
    cardIcon.setAttribute('href', linkWhatsapp);
    cardIcon.setAttribute('target', '_blank');

    var iconWhatsApp1 = document.createElement('i');
    iconWhatsApp1.setAttribute('class', 'icon icon-whatsapp');

    cardIcon.appendChild(iconWhatsApp1); //Adicionando o icone ao botão

    item.appendChild(linkCard);
    item.appendChild(cardIcon)

    return item;
}

function renderListCard() {
    cardWhatsappLinks.innerHTML = "";

    var listCardWhats = document.createElement('ul');
    listCardWhats.setAttribute('class', 'list list--header-phones list--border-bottom');

    var seminovosCard = createWhatsAppLinks("https://api.whatsapp.com/send?phone=551199999999", "Seminovos: ", "+55 (11) 9999-9999");
    var servicosCard = createWhatsAppLinks("https://api.whatsapp.com/send?phone=551111111111", "Serviços: ", "+55 (11) 11111-1111");
    var centralvendasCard = createWhatsAppLinks("https://api.whatsapp.com/send?phone=5511973860742&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20este%20ve%C3%ADculo.", "Central de Vendas: ", "+55 (11) 97386-0742");

    listCardWhats.appendChild(seminovosCard);
    listCardWhats.appendChild(servicosCard);
    listCardWhats.appendChild(centralvendasCard);

    cardWhatsappLinks.appendChild(listCardWhats);

}

renderListCard();

// ----



// 3. Modifique o formulário de "Estou Interessado" em https://testes.autoforce.com.br/autoforce-ford/novos/territory

var formInt = document.querySelector('div .form-conversion__body fieldset') //Formulário

//Adicionando select
var codeSelectType = `
        <select name="selectedTypeVariant" class="form-control" data-choice="active">
            <option value="SUV" selected="">SUV</option>
            <option value="Senda" selected="">Senda</option>
            <option value="Hatch" selected="">Hatch</option>
            <option value="Pickup" selected="">Pickup</option>
        </select>
`;

var divGroupSelect = document.createElement('div');
divGroupSelect.setAttribute('class','form-group');

divGroupSelect.innerHTML = codeSelectType;

formInt.appendChild(divGroupSelect);//Adicionando ao formulário


//Adicionando textarea de mensagem
var divGroup1 = document.createElement('div');
divGroup1.setAttribute('class', 'form-group');

var inputMessage = document.createElement('textarea');
inputMessage.setAttribute('class', 'form-control');
inputMessage.setAttribute('name', 'message');
inputMessage.setAttribute('required', '');
inputMessage.setAttribute('placeholder', 'Mensagem');
inputMessage.setAttribute('data-bouncer-target', '#invalid-name');

var divError = document.createElement('div');
divError.setAttribute('id', 'invalid-name');
divError.setAttribute('class', 'invalid-feedback');

divGroup1.appendChild(inputMessage);
divGroup1.appendChild(divError);

formInt.appendChild(divGroup1);

// ----



// 4. Exiba um modal com o escudo do Palmeiras

//script html do modal
var modalPalmeiras = `
<style>
    .modalPalmeiras {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-family: Arial, Helvetica, sans-serif;
        background: rgba(27, 27, 27, 0.8);
        z-index: 99999;
        opacity:0;
        -webkit-transition: opacity 400ms ease-in;
        -moz-transition: opacity 400ms ease-in;
        transition: opacity 400ms ease-in;
        pointer-events: none;
    }
    .modalPalmeiras:target {
        opacity: 1;
        pointer-events: auto;
    }
    .modalPalmeiras div{
        position: relative;
        margin: 10% auto;
        padding: 15px 20px;
        background: #fff;
    }
    .fechar {
        position: absolute;
        width: 30px;
        right: 15px;
        top: 20px;
        text-align: center;
        line-height: 30px;
        margin-top: 5px;
        background: #ff4545;
        border-radius: 50%;
        font-size: 16px;
        color: #8d0000;
    }
    .contentPameiras {
        align-items: center;
        justify-self: center;
        height: 300px;
        width: 300px;
        border-radius: 10px;
    }
    img {
        width: 100%;
    }
</style>
<a id="abrirModalPalm"href="#abrirModal">Open Modal</a>

<div id="abrirModal" class="modalPalmeiras">
    <div class="contentPameiras">
        <a href="#fechar" title="Fechar" class="fechar">x</a>
        <img src="https://i.imgur.com/RreW7Or.png"/>
    </div>
</div>`;

//adicionando modal ao codigo do site
var divModalPalm = document.createElement('div');

document.querySelector('section').appendChild(divModalPalm);

divModalPalm.innerHTML = modalPalmeiras;

function openModal(){
    document.querySelector('#abrirModalPalm').click()
}

openModal(); //função que abre o modal

// ---- 
