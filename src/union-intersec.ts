// Type of Union and Intersection

// union mane hocche je kono akta hobe and
// Intersection mane hoche sobgulo hote hobe

// Union Types

type JuniorDeveloper = 'Fakibaz Developer' | 'FrontendDeveloper'
type MidlevelDeveloper = 'FullstackDeveloper' | 'BackendDeveloper' | 'FrontendDeveloper'

type Developer = JuniorDeveloper | MidlevelDeveloper

const newDeveloper : JuniorDeveloper = 'FrontendDeveloper'

type developerUser = {
    name: string,
    position: string,
    email?: string,
    gender: 'Male' | 'Female' | 'Others',
    phoneNo?: string
}

const devUser1 : developerUser = {
    name: 'Hablu',
    position: 'Fakibaz Developer',
    email: 'hablu5313@example.com',
    gender: 'Male',
    phoneNo: '01875939954'
}
const devUser2 : developerUser = {
    name: 'Gulbul',
    position: 'Frontend Developer',
    email: 'gulbul8423@example.com',
    gender: 'Male',
    phoneNo: '01734944354'
}
console.log(devUser1)
console.log(devUser2)

// Type of Intersection
type FrontendDeveloper = {
    skills: string[],
    designation1: 'Frontend Developer'
}
type BackendDeveloper = {
    skills: string[],
    designation2: 'Backend Developer'
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper : FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'JS', 'Express', 'Node JS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}

console.log(fullstackDeveloper)