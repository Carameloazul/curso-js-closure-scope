var firstName;//undefined
firstName="Oscar"
console.log("🚀 ~ file: re.js:3 ~ firstName", firstName)


var lastName="David";//declarar y asignar
lastName="Ana";//reasignamos a la variable lastName
console.log("🚀 ~ file: re.js:8 ~ lastName", lastName)

var secondName="David";//declarando y asignando
console.log("🚀 ~ file: re.js:11 ~ secondName", secondName)
var secondName="Ana";//reasignando
console.log("🚀 ~ file: re.js:12 ~ secondName", secondName)


//Let 

let fruit="Apple"//declara y asignar
fruit="Kiwi"//reasignar
console.log("🚀 ~ file: re.js:20 ~ fruit", fruit)

//let fruit ="Banana"//Con let no se puede redeclarar la variable

//const 
// Estructuras de datos declaradas con const
// Las estructuras de datos, como los arrays u objetos, 
// declaradas con const pueden cambiar las referencias de
//  sus elementos, a este concepto se lo denomina mutabilidad. 
//  Sin embargo, siguen las mismas reglas ya mencionadas, no
//   puedes redeclarar ni reasignar una variable de estructura de datos.
const animal="dog";//declara y asigna
//animal="cat";//no se puede reasignar a una variable const
console.log("🚀 ~ file: re.js:28 ~ animal", animal)
//const animal ="Snake"//la variable const no se puede redeclarar

const vehicles=[];
vehicles.push("vehiculo");
console.log("🚀 ~ file: re.js:33 ~ vehicles", vehicles);

vehicles.pop();
console.log("🚀 ~ file: re.js:36 ~ vehicles", vehicles)
