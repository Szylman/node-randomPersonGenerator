const fs = require('node:fs/promises');

const genders = ['M', 'F'];
const maleNames = ['Dawid', 'Dominik', 'Piot', 'Pawel', 'Adam', 'Przemyslaw', 'Jakub'];
const femaleNames = ['Wiktoria', 'Alicja', 'Paulina', 'Justyma', 'Aleksandra', 'Patrycja', 'Karolina'];
const lastNames = ['Holmes', 'Reed', 'Hunt', 'Duncan', 'Singh', 'Gardiner', 'Nelson', 'Hanson'];

const people = [];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (i=0; i<20; i++) {
    const person = {}

    person.gender = randChoice(genders);
    if (person.gender === 'M') person.name = randChoice(maleNames);
    if (person.gender === 'F') person.name = randChoice(femaleNames);
    person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    person.age = Math.floor(Math.random() * (78 - 18) + 18);
    person.phoneNumber = Math.floor(Math.random() * (790000000 - 500000000) + 500000000);
    person.email = `${person.name.toLowerCase()}.${person.lastName.toLowerCase()}@gmail.com`;

    people.push(person);
}

const data = JSON.stringify(people)

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});