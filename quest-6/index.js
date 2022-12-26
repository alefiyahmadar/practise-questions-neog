var textLoad=document.querySelector("#text");
var loadBtn=document.querySelector("#btn");

loadBtn.addEventListener("click" , function hideMsg(){
    textLoad.style.display="none";

    textLoad.innerText="Hello World!"
    
    textLoad.style.display="flex"
})


