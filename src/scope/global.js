//variable 

var a;//estamos declarando la variable a
var b = "b"; //aquí estamos declarando y asignamos el string "b"
b="bb"; // reasignación 
var a ="aa"; //redeclaracion 

//Global scope

var fruit= "Apple"; //Global
console.log(fruit);
function bestFruit(){
    console.log(fruit);

}

bestFruit()

function countries(){
    country = "Colombia";//Global
    console.log(country);
}

countries();

console.log(country);