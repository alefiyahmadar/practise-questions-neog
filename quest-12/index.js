var userOutput=document.querySelector("#output");
var userBtn =document.querySelector("#btn")


var object1 = 
{
    name:"ram",
    age:25,
    yuga:"treta"
}
var object2 =
{
    name:"krishna",
    age:31,
    yuga:"dwapar"
}


function calculateAge(){

    if(object1.age < object2.age){

        console.log(object1.name)
    } 


}


userBtn.addEventListener("click" , calculateAge)