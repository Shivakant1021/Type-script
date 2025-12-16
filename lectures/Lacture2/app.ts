type UserData = {
    name: string;
    age: number;
    isActive: boolean;
    balance: number;
};

const userAd: UserData[] = [
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
console.log(activeUser?.name); // Output: Shiva


