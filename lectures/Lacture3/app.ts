let username: string = "shiva"
let age: number = 26;
let isAdmin = true

// console.log(username);
let price: number
let productName: string = "Ammo"


// Arrays and tuples

let usersA: string[] = ["Shiva", "Amman"];
let scores: number[] = [66, 85];

// console.log(scores)
let user: [string, number] = ["Shiva", 26]
// console.log(user);

// ANy vs unknown 

let data: any
data = 10
data = "hello"
// console.log(data) // allowed X (dangerous)

let safeData : unknown
safeData = "hi"
if(typeof safeData === "string"){
    safeData.toUpperCase()
    // console.log(safeData)
}

// Functions
function add(a: number, b: number): number{
    return a + b
}
// console.log(add(6,5))

// Arrow functions

const greet = (name: string): string =>{
    return `hello ${name}`
}
// console.log(greet('shiva'))

//Optional parameters

function login(username: string, password?: string){
    console.log(username, password)
}
// login('shiva', 'shiva@123')

//Step 3 Objects & Interfaces 

const uShiva: {
    id: number
    name: string
    isActive: boolean
} = {
    id: 1,
    name: "shiva",
    isActive: true
}
// console.log(uShiva)

// Interface 

interface Students {
    id: number
    name: string
    email?: string
}

const s1: Students = {
    id: 1,
    name: "shiva",
    email: "shiva@gmail.com"
}

// console.log(s1)
// console.log(s1.email)

type ID = number | string

interface Admin {
    id: ID
    role: "admin"
}

// Step 5 Union & Literal Types

// let status: "success"| "error" | "loading"
// status = "done"
// console.log(status)


// # Step 6 Enums

enum Role {
    Admin,
    USER,
    GUEST
}

const myRole: Role = Role.USER
if(myRole === Role.USER){
    console.log("Role is:",myRole)
}