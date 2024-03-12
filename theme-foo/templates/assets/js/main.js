window.onload = function(){
    let doc_client_w = document.getElementsByTagName("body")[0].clientWidth;
let base = 1920;
let fontsize  = 16;
let curfont = (doc_client_w/base)*fontsize;
document.getElementsByTagName("html")[0].style.fontSize = curfont +"px"
document.getElementsByTagName("body")[0].style.fontSize = curfont +"px"
}

