{

// Ternary Operator || Optional Chaining || Nullish Coalescing Operator

// normal operator vs ternary operator
const age = 12;

if (age >= 18){
    console.log('You are Adult')
}else{
    console.log('You are Underage')
}

const isAdult = age >= 18 ? "You'r an Adult" : "You'r a Underage"
// console.log(isAdult)


// Nullish Coalescing Operator
// jodi kono variable er maan sudhu matro null | undifined use korte hoy 
// sekhetre Nullish Coalescing use kora best.

const isAuthenticated = undefined
const result = isAuthenticated ?? 'Guest'
// console.log({result})


// Optional Chaining with using nullish Coalescing

type User = {
    name: string,
    work: 'Student' | 'Job Holder' | 'Businessman' | 'Not working',
    gender: 'Male' | 'Female' | 'Others',
    address: {
        permanentAddress?: {
            road: string,
            area: string,
            distric: string
        },
        presentAddress?: {
            road: string,
            area: string,
            distric: string
        },
    },
    isAdmin: false
}

const user1 : User = {
    name: "Hablu",
    work: 'Not working',
    gender: 'Male',
    address: {
        permanentAddress: {
            road: '322/7',
            area: 'Katalia',
            distric: 'Feni'
        },
    },
    isAdmin: false
}
const user2 : User = {
    name: "Hablu",
    work: 'Not working',
    gender: 'Male',
    address: {
        presentAddress: {
            road: '27/3',
            area: 'Sadar',
            distric: 'Feni Twon'
        },
    },
    isAdmin: false
}

const presentAddress = user1?.address?.presentAddress ?? 'Present and Permanent Address is same.'
const permanentAddress = user2?.address?.permanentAddress ?? 'Present and Permanent Address is same.'
console.log({presentAddress})
console.log({permanentAddress})



}