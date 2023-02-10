// El scope local de función (function scope) es el
//  entorno donde las variables locales solo se pueden 
//  acceder desde una función del programa.

// En este scope no importa que las variables sean declaradas
//  con var, let o const. Sin embargo, ten presente que se puede
//   redeclarar una variable con var, pero no con let y const.

function greeting (){
    let userName="Ana";
    
    console.log("🚀 ~ file: function.js:12 ~ greeting ~ rta", rta)
    console.log(userName);
var candela="coco"
    if(userName==="Ana"){
        console.log(`Hello ${userName}`)    
    }
}

greeting();
//onsole.log(candela);//No se puede acceder a la variable candela porque está en el scope de la function

//console.log(userName);// No se puede acceder a userName porque no esta en el global scope