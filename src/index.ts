let course : string = "Next level web developer"
console.log(course)


// Basic Data Type of typeScipt

// String
let naam : string = "Rahul"

// Number
let age : number = 21

// Boolean
let isMale : boolean = true

// Undefined
let x : undefined = undefined

// Null
let y : null = null


// Declare and specipice assign
let fr : number;
fr = 54;

// Arrays

// String Array
let names : string[] = ['Bablu', 'Gablu', 'Hablu']
names.push('Dablu')
// console.log(names)

// Number Array
let ageNumber : number[] = [42, 23, 24]
ageNumber.push(34)


// Tuple --> Array --> Order --> Type of value
let coOrdenates : [number, number] = [23, 56]

let ageName : [number, string, boolean] = [23, 'Bablu', true]
ageName[0] = 42;
console.log(ageName)


// Referance type ---> Object

const user : {
    firstName: string;
    middleName?: string  // Optional
    lastName: string;
    age: number;
    isMarried: boolean;
    readonly nationality: "Bangladesh"
} = {
    firstName: 'Fakhruddin',
    lastName: 'Ahmed',
    age: 23,
    isMarried: false,
    nationality: "Bangladesh"
}
