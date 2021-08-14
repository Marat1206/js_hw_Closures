// function counter(){
//     let counter = 0;
//     return function (num){
//         counter += num;
//         return counter;
//     }
// }
//
// let sum = counter();
// console.log(sum(1));
// console.log(sum(3));
// console.log(sum(10));
//
//



function counter(counterNum = 0, counterStep = 1){
    let counterSum = counterNum;

    function counterCalc (){
        return  counterSum += counterStep;
    }
    function reset(){
       return  counterSum = 0;
    }

    function isEven(){
        if (counterSum % 2 === 0 || counterSum % 2 !== 0){
            return counterSum * counterStep;
        }
        return null;
    }
    return {counterCalc, reset, isEven};
}



let result = counter(2,2 );

console.log(result.counterCalc());
console.log(result.isEven());
console.log(result.reset());












