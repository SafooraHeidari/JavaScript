///////////////////////////// maximum of two numbers /////////////////////////////////
function max(a,b){
    if (a>b) return a;
    else return b;
}

console.log(max(5,0))

///////////////////////////// string or not /////////////////////////////////////////
function isString(a){
    if (typeof(a) === "string"){
        console.log("string")
    }
    else {
        console.log("not string")
    }
}

isString("salam")

///////////////////////////// FizzBuzz /////////////////////////////////////////////
function fizzBuzz(a){
    if (typeof(a) !== "number") return NaN;
    if (a%3 === 0 && a%5 === 0) return "FizzBuzz";
    else if (a%3 === 0) return "Fizz";
    else if (a%5 === 0) return "Buzz";
    else return a;
}

console.log(fizzBuzz(21))
console.log(fizzBuzz(30))
console.log(fizzBuzz(42))
console.log(fizzBuzz(100))
console.log(fizzBuzz(7))
console.log(fizzBuzz("salam"))

///////////////////////////// Power 2 ///////////////////////////////////////////////
function pow2(a){
    return 2**Math.ceil(Math.log2(a))
}

console.log(pow2(95))
console.log(pow2(1010))
console.log(pow2(3512))
console.log(pow2(72))
console.log(pow2(31))
console.log(pow2(64))

///////////////////////////// Complete numbers ///////////////////////////////////////
function complete(n){
    let val = 0;
    for (let i = 1; i < n; i++){
        if (n%i === 0){
            val += i;
        }
    }
    return (val === n);
}
// console.log(complete(27))
// console.log(complete(6))

for (let i = 1; i < 2000; i++){
    if (complete(i)){
        console.log(i)
    }
}

///////////////////////////// Prime numbers /////////////////////////////////////////
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    if (n === 1) return false;
    else return true;
}
function numPrime(a,b){
    let n = a;
    let arr = [];
    while( n < b ){
        if (isPrime(n)){
            arr.push(n);

        }
        n++;
    }
    return arr;
}
console.log(numPrime(1,1000))

///////////////////////////// Hard passwords /////////////////////////////////////////
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    if (n === 1) return false;
    else return true;
}
function isHard(n){
    let strNum = n.toString();
    let m = strNum.length;
    for (let i = 0; i < m; i++){
        if (!isPrime(Number(strNum.substring(0,m-i)))){
            return false;
        }
    }
    return true;
}

function HardPass(n){
    for (let i = 10**(n-1); i < 10**n; i++){
        if (isHard(i)){
            console.log(i)
        }
    }
}

HardPass(3)








