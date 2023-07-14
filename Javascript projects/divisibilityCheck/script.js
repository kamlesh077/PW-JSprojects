let arr = [3,25,6,12,9,26,6];

function DivisibleCheck(arr) {
    let result2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 2!== 0) {
            result2.push(arr[i]);
        }        
    }
    return result2;
}


function divisibilityCheck(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 === 0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(DivisibleCheck(arr));   // Divisible by 3 but not by 2
// console.log(divisibilityCheck(arr));

