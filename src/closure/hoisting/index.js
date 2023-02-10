//var  nameofDog; //undefined

// console.log(nameofDog);
// var nameofDog="Elmo";
// console.log("🚀 ~ file: index.js:5 ~ nameofDog", nameofDog);

// Hoisting es un término para describir que las declaraciones de 
// variables y funciones son desplazadas a la parte superior del scope 
// más cercano, scope global o de función. Esto sucede solamente con 
// las declaraciones y no con las asignaciones.

// El código permanece igual, solo es una interpretación del motor de
//  JavaScript. En el caso de las variables solamente sucede cuando
//   son declaradas con var.

//var elmo //JS elevó elmo y le asignó undefined
nameOfDog();


function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

//var elmo="Elmito";//Si no declaro elmo me dice que no está definido