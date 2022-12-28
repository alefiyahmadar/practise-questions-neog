


    var object1 = {
        name:"ram",
        age:2500 ,
        power:"treta"
    }
    
    var object2 = {
        name:"krishna",
        age:2325 ,
        power:"dwapar"
    }
    
    
function powerOfName(object1 , object2){

var powerObjectOne=(((object1.name).length)*35)
var powerObjectTwo=(((object2.name).length)*35)

if(powerObjectTwo > powerObjectOne){

    return object2.name
} else{

    return object1.name
}

    
}
console.log(powerOfName(object1 , object2))