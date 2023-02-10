function fruits(){
    //var no tiene scope de bloque y se debe tener cuidado porque puede provocar errores en el código.
    if(true){
    var fruit1="Apple1";//function scope
    let fruit2="Kiwi"; //block scope
   
    const fruit3="Banana";//block scope
    console.log("🚀 ~ file: block.js:5 ~ fruits ~ fruit2", fruit2)
    console.log("🚀 ~ file: block.js:7 ~ fruits ~ fruit3", fruit3)
    console.log(fruit1);
    }    
    console.log(fruit1);
    //console.log("🚀 ~ file: block.js:5 ~ fruits ~ fruit2", fruit2)
    //console.log("🚀 ~ file: block.js:7 ~ fruits ~ fruit3", fruit3)
}
fruits()
// Al intentar llamar fuera del alcance de bloque a las variables
//  declaradas con let o const, tenemos un error, mientras que la 
//  variable declarada con var es accedida sin problemas. Esto puede
//   ocasionar un error lógico ya que no estamos protegiendo a la variable 
//   fruit1 (declarada con var), para que solo sea accedida dentro de su bloque,
//    esta puede ser accedida y alterada por otra función y nos puede llevar 
//    tiempo encontrar cuál es el problema. 😥
// .
// Los programadores usualmente no somos muy creativos para nombrar variables, 
// por lo que es común que podamos nombrar en otra función una variable llamada 
// fruit1 (pensando que esta solo va a existir en el ámbito local de la función)
//  y allí cometer el error lógico. 🥵
// .
// No es recomendable usar var 🙅🏻‍♂️ a medida que vayas practicando notarás que 
// con let y const tienes más control sobre las variables que declares. 👌🏻