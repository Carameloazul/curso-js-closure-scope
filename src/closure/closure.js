function greeting (){
    let username = "Oscar";

    function displayUserName(){
        return `Hello ${username}`
   }
   return displayUserName;
}

const g=greeting();
console.log("🚀 ~ file: closure.js:11 ~ g", g);
console.log(g());

// Los closures permiten acceder al ámbito de una función 
// exterior desde una función interior. En javascript, los
//  closures se crean cada vez que una función es creada.

// Los closures no son siempre utilizados.

// Un closure es cuando una función accede a una variable fuera de su contexto.

// Al trabajar con closures entra en juego el concepto de alcance de las variables.