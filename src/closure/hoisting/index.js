//var  nameofDog; //undefined

// console.log(nameofDog);
// var nameofDog="Elmo";
// console.log("馃殌 ~ file: index.js:5 ~ nameofDog", nameofDog);

// Hoisting es un t茅rmino para describir que las declaraciones de 
// variables y funciones son desplazadas a la parte superior del scope 
// m谩s cercano, scope global o de funci贸n. Esto sucede solamente con 
// las declaraciones y no con las asignaciones.

// El c贸digo permanece igual, solo es una interpretaci贸n del motor de
//  JavaScript. En el caso de las variables solamente sucede cuando
//   son declaradas con var.

//var elmo //JS elev贸 elmo y le asign贸 undefined
nameOfDog();


function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

//var elmo="Elmito";//Si no declaro elmo me dice que no est谩 definido