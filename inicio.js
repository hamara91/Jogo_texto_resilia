var botao_1 = document.querySelector("#btn_1");
var botao_2=  document.querySelector("#btn_2");
var texto = document.querySelector("#texto");

function sair_jogo() {
    alert("Poxa, já vai??");
    
    }


function fase_um () {
    texto.textContent = " Você tem a oprtunidade de se juntar ao grupo contrário, mas tem que fingir que está controlado também (imitar gestos, hábitos, e fala)? ";
    botao_1.textContent=" Concordo, vou me juntar à eles";
    botao_2.textContent = " Não,Investigar a distância, mais seguro ";
    botao_1.onclick= perde_jogo_um;
    botao_2.onclick= fase_dois; 
    
}

function fase_dois (){
    texto.textContent = "Descobre  todas as táticas de domínio, precisa junta provas de que a invenção se desvirtuou "
    botao_1.textContent= "Decide se infiltrar nos grupos virtuais";
    botao_2.textContent = " Pede auxílio à seu amigo hacker ";
    botao_1.onclick= perde_jogo_dois;
    botao_2.onclick= fase_tres;
    
}

function perde_jogo_dois (){
    texto.textContent = "OOPS.. parece que descobriram suas intenções e você foi presa"
    botao_1.textContent = " Liga para seu amigo hacker te tirar da prisão";
    botao_2.textContent= "DESISTOO";

    botao_1.onclick= fase_tres;
    botao_2.onclick= perde_jogo_um;
}

function fase_tres(){
    texto.textContent = "Você com ajuda, consegue reunir tudo o que precisa"
    botao_1.textContent = "Com medo de ser pego, vc guarda os documentos e não os utiliza";
    botao_2.textContent= " Você publica os documentos";

    botao_1.onclick= perde_vacilona;
    botao_2.onclick= vitoria;
}

function vitoria () {
    texto.textContent = "PARABÉÉNS !! O mundo foi salvo, graças ... ihh não sei o seu nome (deixa pra próxima). Parabéns!!!";
    botao_1.style.display = "none";
    botao_2.style.display = "none";
}
function perde_vacilona(){
    alert("Rodou!!!! Jura que achou q ia ficar?");
    texto.textContent = " A IA optou por eliminar você!!!"
    botao_1.style.display = "none";
    botao_2.style.display = "none";

}

function perde_jogo_um(){
    texto.textContent = "ueu ueu ueu...se...foi eliminado"
    botao_1.style.display = "none";
    botao_2.style.display = "none";
}