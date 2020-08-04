/* var runningSum = function(nums) {
    let res = [];
    function sum(elem, index, arr){
        res.push(elem)
    }
    nums.map(sum);

    return res;
};

const arr1 = [1,2,3,4];
const nums = [1,2,3,4];
console.log(runningSum(nums));

/////////////////////////////
nums = [1,2,3,4] */


/* var numbers = [1, 5, 10, 15];
function sum(elem,index,array){
    //console.log(`Elem: ${elem} \nIndex: ${index} \narray: ${array}`);
    if(index === 0){
        var a = elem;
        console.log(a)
        return elem;
    } else {
        
        a = elem + a;
        console.log(a, elem);
        return a;
    }
    
}
var doubles = numbers.map(sum);

console.log(doubles); */


//For Each

const numbers = [1, 5, 10, 15];


function sum2 (elem, index){
    let res = [];
    if(index === 0){

        res.push(elem);
    } else {
        res.push(elem + res[index-1]);
    }
}


let res = numbers.forEach(sum2);

console.log(res);
















/* 
var runningSum = function(nums) {
    let res = [];
    
    for (let i=0; i < nums.length; i++){
        if(i === 0){
            res.push(nums[i]);
        } else {
            res.push(nums[i]+res[i-1]);
        }
    }
    return res;
}; 
*/
