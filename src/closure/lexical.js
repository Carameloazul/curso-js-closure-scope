const myGlobal=0;

// Ámbito léxico
// El ámbito léxico se refiere al alcance de una 
// variable siguiendo la cadena de scopes. Una variable
//  se puede abordar desde un nivel inferior hasta uno
//   superior, pero no al contrario.

function myFunction(){
    const myNumber=1;
    console.log("🚀 ~ file: lexical.js:2 ~ myGlobal\n\b",myGlobal);


    function parent(){ //function interna
        const inner=2;
        console.log(myNumber, myGlobal);
   
        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}
myFunction();