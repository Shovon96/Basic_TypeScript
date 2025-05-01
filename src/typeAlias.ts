// Type Alias with object and Fuction

type Student = {
    name: string,
    age: number,
    gender: string,
    address: string,
    contactNo?: string
}

const student1 : Student = {
    name: 'Hablu',
    age: 32,
    gender: 'Male',
    address: 'Bangladesh',
    contactNo: '01247294984',
}
const student2 : Student = {
    name: 'Joly',
    age: 23,
    gender: 'Female',
    address: 'Bangladesh',
    contactNo: '0127545424',
}
const student3 : Student = {
    name: 'Bablu',
    age: 24,
    gender: 'Male',
    address: 'Bangladesh',
    contactNo: '0186743434',
}

// console.log(student3)

// Type Alias with Fuction

type AddNumber = (num1: number, num2: number) => number
const addNumber : AddNumber= (num1, num2) => num1 + num2;

console.log(addNumber(11, 22));