var username = "shiva";
var age = 26;
var isAdmin = true;
// console.log(username);
var price;
var productName = "Ammo";
// Arrays and tuples
var usersA = ["Shiva", "Amman"];
var scores = [66, 85];
// console.log(scores)
var user = ["Shiva", 26];
// console.log(user);
// ANy vs unknown 
var data;
data = 10;
data = "hello";
// console.log(data) // allowed X (dangerous)
var safeData;
safeData = "hi";
if (typeof safeData === "string") {
    safeData.toUpperCase();
    // console.log(safeData)
}
// Functions
function add(a, b) {
    return a + b;
}
// console.log(add(6,5))
// Arrow functions
var greet = function (name) {
    return "hello ".concat(name);
};
// console.log(greet('shiva'))
//Optional parameters
function login(username, password) {
    console.log(username, password);
}
// login('shiva', 'shiva@123')
//Step 3 Objects & Interfaces 
var uShiva = {
    id: 1,
    name: "shiva",
    isActive: true
};
var s1 = {
    id: 1,
    name: "shiva",
    email: "shiva@gmail.com"
};
// Step 5 Union & Literal Types
// let status: "success"| "error" | "loading"
// status = "done"
// console.log(status)
// # Step 6 Enums
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var myRole = Role.USER;
if (myRole === Role.USER) {
    // console.log("Role is:",myRole)
}
// STEP 7 Generics Advance 
function identity(value) {
    return value;
}
identity("Hello");
identity(100);
//Real use API Response
function apiResponse(data) {
    return data;
}
apiResponse({ id: 1, name: "shiva" });
