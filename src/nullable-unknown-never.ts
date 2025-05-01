{
    // Nullable | Unknown and Never types variation example

// Nullable

const searchName = (value : string | null) => {
    if(value) {
        console.log(`Value Searched... ${value}`)
    }else{
        console.log('Value do not find out!')
    }
}
// searchName('hello')
// searchName(null)


// Unknown type
const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number'){
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The Speed is ${convertedSpeed} ms^-1`);
    }else if (typeof value === 'string') {
        const [ result, unit] = value.split(" ")
        const convertedSpeed = (parseFloat(result) *1000) / 3600;
        console.log(`The Speed is ${convertedSpeed} ms^-1`);
    }else {
        console.log('Unknown Value.')
    }
}
// getSpeedInMeterPerSecond(3000)
// getSpeedInMeterPerSecond(null)


// Never Type
const throwErro = (msg : string) => {
    throw new Error(msg)
}
console.log('Never type throw this error msg')


}