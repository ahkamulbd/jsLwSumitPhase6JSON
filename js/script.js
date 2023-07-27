const person = {
    name: "Sumit",
    age: 38,
    skill: ["programming", "educator"],
    book: {
        name: "Ekhono Likhinai"
    },
    alive: true,
    disease: null
}

// console.log(person);
// console.log(JSON.stringify(person));

const JSONObj = '{"name":"John", "age":30, "city":"New York"}';

//console.log(JSON.parse(JSONObj));

const jsonString = '{"name": "John", "birth": "1986-12-14", "city": "New York"}';

console.log(jsonString);

// const myObj = JSON.parse(jsonString);

// console.log(new Date(myObj.birth));
// console.log(myObj);
// console.log(myObj.birth);

const myObj = JSON.parse(jsonString, function (key, value) {
    if (key === 'birth') {
        return new Date(value);
    }
    return value;
})
console.log(myObj);