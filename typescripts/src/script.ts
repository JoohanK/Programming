/* interface Order {
    adress: string
}

interface TelephoneOrder extends Order {
    calleNumber: string
}

interface InternetOrder extends Order {
    email: string
}

type possibleOrder = TelephoneOrder | InternetOrder | undefined

declare function getOrder():possibleOrder

function identityNumber(arg: number[]): number[] {
    return arg.reverse();
}

function identityString(arg: string[]): string[]{
    return arg.reverse();
}

// Generics
function reverseArray<T>(arg: T[]): T[] {
    return arg.reverse();
}

let stringArray: string[] = ["ett", "två", "tre"]
let numberArray: number[] = [1, 2, 3]

let reversedStringArray: string[] = reverseArray<string>(stringArray)
let reversedNumberArray: number[] = reverseArray<number>(numberArray)

//Enum

enum UserRights {
    Administrator = "ADMINISTRATOR",
    Guests = "GUESTS",
    Students = "STUDENTS"
}

enum Direction {
    Up = "UPP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let move: Direction = Direction.Right
console.log(move);

enum Status {
    Success = 200,
    notFound = 404, // frontend problem
    ServerError = 500 // backend problem
}

let response: number = Status.Success
console.log(response)

// Tuples
let userDetails: [string, number, boolean] = ["johan", 34, true]

function saveCourse(course, callback: Function) {

    setTimeout(() => {
        
        callback("sucess");

    }, 1000); 

}

saveCourse({title:"Typescript Bootcamp"}, 
() => console.log("Save sucessful"));

 */

console.log ("Hello")