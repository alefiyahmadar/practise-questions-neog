var userOne = document.querySelector("#number-one")
var userTwo = document.querySelector("#number-two")
var addition =document.querySelector("#add")
var subTract =document.querySelector("#subtract")
var multiPly =document.querySelector("#multiply")
var divide =document.querySelector("#divide")
var output = document.querySelector("#output")

addition.addEventListener("click" ,function getSum(){


    var sum = Number(userOne.value) + Number(userTwo.value)
    output.innerText=sum
})

subTract.addEventListener("click" ,function getSubtract(){


    if(userOne.value > userTwo.value){
        var subtract = userOne.value - userTwo.value
        output.innerText=subtract
    }
    else if(userOne.value === userTwo.value){

        var subtract = userOne.value - userTwo.value
        output.innerText=subtract
    }else{
        
        var subtract = userOne.value - userTwo.value
        output.innerText=("When a small number is subtracted from a greater number the output will be negative " +subtract)
    
}
})

multiPly.addEventListener("click" ,function getProduct(){


    var product = Number(userOne.value) * Number(userTwo.value)
    output.innerText=product
})

divide.addEventListener("click" ,function getAns(){

    if(userOne.value % userTwo.value === 0){

        var ans = (userOne.value / userTwo.value)
        output.innerText=ans
    }else{

        
        var ans = userOne.value / userTwo.value
        output.innerText=(userOne.value + " is not divisible by " +userTwo.value + " therefore remainder is " + ans)
    }
    
})

