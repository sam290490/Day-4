const sampleJson = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "isStudent": false,
    "hobbies": ["reading", "traveling", "playing guitar"],
}

//for loop
const keys = Object.keys(sampleJson);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key + ": " + sampleJson[key]);
}


//for in
for (let key in sampleJson) {
    console.log(key + ": " + sampleJson[key]);
}

//for of
const keys1 = Object.keys(sampleJson);
for (let key of keys1) {
    console.log(key + ": " + sampleJson[key]);
}
