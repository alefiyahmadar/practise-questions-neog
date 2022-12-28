var userNews = document.querySelector("#news")
var userSource = document.querySelector("#source")
var userOutput = document.querySelector("#output")
var userBtn =document.querySelector("#btn")

function getNewsAndSrc(){


var falseNews=["whatsapp","facebook","telegram"]
for(var i=0; i<falseNews.length; i++){


    var source = userSource.value.toLowerCase();


if(source === falseNews[i]){


     userOutput.innerText=("Don't believe things on FB , Whatsapp and Telegram")
}
}


}




userBtn.addEventListener("click" , getNewsAndSrc)