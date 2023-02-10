// function moneyBox(coins){
    
//     let saveCoins=0;
//     saveCoins+=coins;
//     console.log("🚀 ~ file: mymoneybox.js:4 ~ moneyBox ~ saveCoins", saveCoins)
//    }
//  moneyBox(5);
//  moneyBox(5);

 function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log("🚀 ~ file: mymoneybox.js:14 ~ countCoins ~ saveCoins", saveCoins)
    }
    return countCoins;
}
const mymoneybox= moneyBox();
mymoneybox(5);
mymoneybox(5);
mymoneybox(10);

const moneyBoxAna= moneyBox();
moneyBoxAna(5)
moneyBoxAna(5)
moneyBoxAna(5)