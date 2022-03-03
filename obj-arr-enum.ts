// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple: fixed number of elements and types in order
// } = {
//   name: 'Cynthia',
//   age: 28,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// or can use enum:
enum Role { ADMIN, READ_ONLY, AUTHOR }; // can set ADMIN = 5, then the rest will increment, can also set to string

const person = {
  name: 'Cynthia',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()) // can use a string method because the string type is inferred
  // console.log(hobby.map()) does not work because map() is an array method, not string method
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}