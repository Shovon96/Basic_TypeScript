"use strict";
// Learning normal function and arrow function
// normal function with typeScript type defined
function add(num1, num2) {
    return num1 + num2;
}
add(33, 54);
// Arrow function 
const addArrow = (num1, num2) => num1 + num2;
// Object --> Function --> Method
const userBalance = {
    name: "shovon",
    address: "Bangladesh",
    oldBalance: 0,
    addBalance(newBalance) {
        return `Your New Balance is: ${this.oldBalance + newBalance}`;
    }
};
// CallBack Array Function
const arr = [2, 4, 6];
const newArray = arr.map((ind) => ind * ind);
