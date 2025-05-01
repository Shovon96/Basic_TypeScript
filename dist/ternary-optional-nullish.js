"use strict";
var _a, _b, _c, _d;
{
    // Ternary Operator || Optional Chaining || Nullish Coalescing Operator
    // normal operator vs ternary operator
    const age = 12;
    if (age >= 18) {
        console.log('You are Adult');
    }
    else {
        console.log('You are Underage');
    }
    const isAdult = age >= 18 ? "You'r an Adult" : "You'r a Underage";
    // console.log(isAdult)
    // Nullish Coalescing Operator
    // jodi kono variable er maan sudhu matro null | undifined use korte hoy 
    // sekhetre Nullish Coalescing use kora best.
    const isAuthenticated = undefined;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const user1 = {
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
    };
    const user2 = {
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
    };
    const presentAddress = (_b = (_a = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _a === void 0 ? void 0 : _a.presentAddress) !== null && _b !== void 0 ? _b : 'Present and Permanent Address is same.';
    const permanentAddress = (_d = (_c = user2 === null || user2 === void 0 ? void 0 : user2.address) === null || _c === void 0 ? void 0 : _c.permanentAddress) !== null && _d !== void 0 ? _d : 'Present and Permanent Address is same.';
    console.log({ presentAddress });
    console.log({ permanentAddress });
}
