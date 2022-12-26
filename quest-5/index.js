var studentOne = document.querySelectorAll(".student-one")
var studentTwo = document.querySelectorAll(".student-two")
var studentThree = document.querySelectorAll(".student-three")
var studentFour = document.querySelectorAll(".student-four")
var studentFive = document.querySelectorAll(".student-five")
var studentForm = document.querySelector("#form")
var checkBtn =document.querySelector("#check-button")
 var output = document.querySelector("#output")




function readEntries(){

    var formData =new FormData(studentForm)
    for (let entries of formData.entries())
    output.innerText=en


    

    
}




checkBtn.addEventListener("click",readEntries )
