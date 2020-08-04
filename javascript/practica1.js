function pakiman(vida)
{
    vida = vida + vida;
    vida++;
    return vida;
}
var vida = 2;
vida = pakiman(vida);

console.log(vida)

// 3. Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

/* function range(x,y){
  let res = []
  if(y > x){
  for(let i = x+1; i < y; i++){
    res.push(i)
  }}else{
    for(let i = y+1; i < x; i++){
      res.push(i)
    }
  }
  return res
}

console.log(range(10,2))
 */



 

// intento con doble puntero t.t


/* range (4,10)
n = 10
res = [2,3,4,.....]
 */
/* 

let res = [];
function range(x,y){
    if (x < y-1){
        res.push(x+1);
    } else {
        return res;
    }
    return range(x+1,y);
}

console.log(range(2,10)); */




/* var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  { console.log(list)
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9)); */

// IIEF
//(function d(){console.log("Hola Mundo")})()


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

