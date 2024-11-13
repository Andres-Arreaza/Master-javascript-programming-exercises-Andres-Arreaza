// Write your function here
function computeAverageOfNumbers (numbers){
    if (numbers.length == 0) return 0;
    total = 0;
    for(let i =0 ; i < numbers.length; i++){
        total += numbers[i];
    }
    let promedio = total / numbers.length;
    return promedio;
}

let input = [1,2,3,4,5];

console.log(computeAverageOfNumbers(input))

