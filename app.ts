const number1 = document.getElementById('num1') as HTMLInputElement;
const number2 = document.getElementById('num2') as HTMLInputElement;
const buttonelement = document.querySelector('button')!;

const numResult: Array<number> = [];
const textResult: string[] = [];

type NumOrString = number | string;
type Result = {val: number; timeStamp: Date};

interface ResultObj {
    val: number; 
    timeStamp: Date
}

function addition(num1: NumOrString, num2: NumOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if(typeof num1 === 'string' && typeof num2 === 'string')
           return num1 + ' ' + num2;
    else
        return +num1 + +num2;
}


function printResult(resultObj: Result){
    console.log(resultObj.val);
    
}

buttonelement.addEventListener('click', () => {
    const n1 = number1.value;
    const n2 = number2.value;
    const result = addition(+n1 , +n2);
    numResult.push(result as number);
    const stringResult = addition(n1, n2);
    textResult.push(stringResult as string);
    printResult({val: result as number, timeStamp: new Date()});
    console.log(numResult, textResult);
})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000)
})

myPromise.then((result) => {
    console.log(result.split('w'));
    
})

