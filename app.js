"use strict";
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const buttonelement = document.querySelector('button');
const numResult = [];
const textResult = [];
function addition(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof num1 === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2;
    else
        return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonelement.addEventListener('click', () => {
    const n1 = number1.value;
    const n2 = number2.value;
    const result = addition(+n1, +n2);
    numResult.push(result);
    const stringResult = addition(n1, n2);
    textResult.push(stringResult);
    printResult({ val: result, timeStamp: new Date() });
    console.log(numResult, textResult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
