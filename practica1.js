
































/*  Ejercicio 2
function mcd(a,b){
     const arrDiv = [2,3,5,7];
     let DivA = [];
     let DivB = [];

     for (let i = 0; i < arrDiv.length; i++) {
      if (a % arrDiv[i] === 0) {
        DivA.push(arrDiv[i]);
      }
      if (b % arrDiv[i] === 0) {
        DivB.push(arrDiv[i]);
      }
     }
     console.log(DivA);
     console.log(DivB);
}

mcd(12,18); */

// if ( ! b)


/* function mcd(a,b){
let fact = [];
    function factores(div){
        if ( (a % div === 0) && (b % div === 0)){
            fact.push();
            return mcd(a/div, b/div);
        } else {
            return factores(div + 1);
        }
    }
} */

/* 

function(60,36)
gcd(36,24)
gcd(24,12)
gcd(12,0)

var gcd = function(a, b) {
  if ( !b ) {
      return a;
  }

  return gcd(b, a % b);
};
console.log(gcd(60, 36));

console.log(60%36);
 */






// EJERCICIO 1

/* let array = ["h","e","l","l","o"]; */

/* function printReverse (array){
  let arrayReverse = [];
  for(let i = array.length-1 ; i >= 0; i--){
    arrayReverse.push(array[i]);
  }
  return arrayReverse;
}

console.log(printReverse(array)); */

/* function printReverse (array){
  let arrayReverse = [];
    function decrementar(i){
      arrayReverse.push(array[i]);
      //console.log(i);
      if (i > 0){
        return decrementar(i - 1);
      } else {
        return arrayReverse;
      }
    }
    return decrementar(array.length - 1);
  }
console.log(printReverse(array)); */