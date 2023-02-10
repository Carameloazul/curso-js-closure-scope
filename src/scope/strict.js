  "use strict"
  // Al usar use strict  JS me da un error ReferenceError: pi is not defined
  // var pi //al asignar el valor a la variable pi,
  // JS automaticamente declara antes la variable como tipo var
   //var pi=3.1454;
   // console.log("🚀 ~ file: strict.js:2 ~ pi", pi)

function myFunction(){
    "use strict"
    return pi=3,1445
//     El modo estricto añade restricciones al lenguaje para prevenir
//    errores comunes y mejorar la seguridad del código. Algunas de
//    las restricciones incluyen:

// No se pueden usar variables sin declarar previamente.

// No se puede usar una palabra reservada como nombre de variable o función.

// No se puede hacer una asignación a una propiedad no escribible.

// No se puede usar un objeto global como objeto “this” en una función sin objeto.

// Se recomienda usar ‘use strict’ en todos los archivos JavaScript para garantizar
// una mejor calidad del código y prevenir errores.

}
myFunction()
// El modo estricto es una funcionalidad que le permite al motor
//  de JavaScript cambiar la manera en que ejecuta el código. En
//   este modo, se reduce las cosas que podemos hacer, esto es bueno
//    porque permite manejar errores que son poco perceptibles o que
//     el motor de JavaScript sobreentiende y ayuda a su compilación
//      para corregirlos.

// Este en el código colocando en la primera línea "use strict" para todo 
// el archivo. También puede utilizarse en la primera línea de una función,
//  pero no para un bloque en específico.


    // El modo estricto tiene varios cambios en la semántica normal de JavaScript:

    // Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
    
    // Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: 
    // a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
    
    // Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript

    // El modo estricto se aplica a un script completo o 
    // a funciones individuales. No se aplica a bloques entre
    //  corchetes {}; intentar aplicarlo en tales contextos no hace nada.