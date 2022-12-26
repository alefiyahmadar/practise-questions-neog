var userName = document.querySelector("#username")
var userPassword = document.querySelector("#password");
var userSubmit = document.querySelector("#submit")
var output= document.querySelector("#output")

function errorMessage(msg){
output.innerText=msg
output.style.display="block";
}

userSubmit.addEventListener("click" , function check(){

    var userPasswordi=userPassword.length
    console.log(userPasswordi)
})



// function checkPassword(){
//     var userPassword=userPassword.length
//     console.log(userPassword)

//     var userPassworddummy = ("hello")
//     var lengthi=userPassworddummy.length
    

//     if(userPassword === lengthi){
//         errorMessage("it is 5")

//     }else{

//         errorMessage("not 5")
//     }
// }




// userSubmit.addEventListener("click" , checkPassword)