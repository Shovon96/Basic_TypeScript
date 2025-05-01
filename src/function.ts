// Learning normal function and arrow function

// normal function with typeScript type defined

function add (num1 : number, num2: number) : number {
    return num1 + num2;
}
add (33, 54)

// Arrow function 
const addArrow = (num1: number, num2: number) : number => num1 + num2;


// Object --> Function --> Method
const userBalance = {
    name: "shovon",
    address: "Bangladesh",
    oldBalance: 0,
    addBalance (newBalance: number) : string {
        return `Your New Balance is: ${this.oldBalance + newBalance}`;
    }
}


// CallBack Array Function

const arr : number[] = [2, 4, 6];
const newArray : number[] = arr.map((ind : number) : number=> ind*ind);