// Destructuring

// Two many type of destructuring: 
// 1.Object Destructuring
// 2. Array Destructuring.

// 1.Object Destructuring

const userInfo = {
    id: '00321',
    name: {
        firstName: 'Herry',
        lastName: 'Paw'
    },
    address: 'Bangladesh',
    contactNo: '01493893249',
    gender: 'Male'
}

const { address, name:{firstName, lastName}} = userInfo;

// console.log(`${firstName} ${lastName} live in the ${address}`) // with destructuring

// console.log(`${userInfo.name.firstName} ${userInfo.name.lastName} live in country the ${userInfo.address}`) // without destructuring


// Array Destructuring
const fruitesName = ['Watermalon', 'Grape', 'Apple', 'Orange', 'Pineapple', 'Goava', 'Stravary']

// const [ , , favouriteFruite] = fruitesName // if you want to just show the Favourite Fruite or specifice one
const [ , , favouriteFruite, ...rest] = fruitesName // if you want to show the specifice one to last one
console.log(favouriteFruite, rest)