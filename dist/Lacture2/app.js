"use strict";
const user = [
    {
        name: "Shiva",
        age: 25,
        isActive: true,
        balance: 300
    },
    {
        name: "Aman",
        age: 30,
        isActive: false,
        balance: 150
    }
];
// console.log(user);
// loop
const activeUser = user.find(user => user.isActive === true);
console.log(activeUser === null || activeUser === void 0 ? void 0 : activeUser.name); // Output: Shiva
