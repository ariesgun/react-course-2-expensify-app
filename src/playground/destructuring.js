// Object Destructuring
const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

// renaming: age -> umur
const {name, age: umur} = person;
// Equals to
// const name = person.name;
// const age  = person.age;

// Template string
console.log(`${name} is ${umur}.`);

// Array Destructuring
const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147'
];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);