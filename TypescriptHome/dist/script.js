/* let myName: string = 'Johan'
let meaningOfLife: number;
let isLoading: boolean;
let album: any;


myName = 'Johan'
meaningOfLife = 42
isLoading = true
album = 1994

const sum = (a: number, b: string) => {
    return a + b
}

let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g */
// Literal types
let myName;
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 4));
let subtract = function (c, d) {
    return c - d;
};
/* interface mathFunction {
    (a: number, b:number): number
} */
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(2, 2));
// Optinal parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value (...nums)
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// costum type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('this should never happen!');
};
