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

/* let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'Johan'
stringArr.push('Hello')

guitars[0] = 984
guitars.unshift('Jim')

guitars = stringArr
mixedData = guitars

let test = []
let bands: string [] = []
bands.push('Van Helen')

//Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['Johan', 1, false]

myTuple[1] = 42

//Objects

let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'Johan'
exampleObj.prop2 = false

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number) []
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 1928, 'oi812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['!', '11', 'oi812']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log (greetGuitarist(jp))

//Enums

enum Grade {
    U = 2,
    D,
    C,
    B,
    A,
}

console.log(Grade.U) */


// Type aliases

type stringOrNumber = string | number 

type stringOrNumberArray = (string | number) []

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray,
}

type UserId = stringOrNumber


// Literal types
let myName: 'Dave'

let userName: 'Dave' | 'Johan' | 'Amy'
userName = 'Amy'


// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2,4))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b:number) => number 

/* interface mathFunction {
    (a: number, b:number): number 
} */

let multiply: mathFunction = function (a,b) {
    return a * b
}

logMsg(multiply(2, 2))

// Optinal parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        
        return a + b + c
    }
    return a + b 
}

// default param value (...nums)
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  
    return a + b + c 
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3,))
logMsg(sumAll(2,3,))
logMsg(sumAll(undefined, 3))

// rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10,2,3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// costum type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError('this should never happen!')
}