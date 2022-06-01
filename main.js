let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    console.log(`Key ${key} có giá trị là ${user[key]}`);
}