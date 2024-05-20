// to run node a.js

// let x: number = 1;
// console.log(x);

// 1 write a function that greets a user given their first name

// const greet = (name: string, email: string, age: number) => {
//   console.log(`hello ${name}`);
// };

// greet("jyoti", "a", 2);

//2 write a function that calculates the sum of two functions

// type inference -> here even if i dont give type to the function it will infer that both the input is number so the out put is going to be a number smart right
// const sum = (a: number, b: number) => {
//   return a + b;
// };

// sum(2, 2);

// 3 return true or false based on if auser is 18+

// const isEighteen = (age: number): boolean => {
//   if (age > 18) {
//     return true;
//   }
//   return false;
// };

// console.log(isEighteen(19));

//4 create a function that takes another functions as input and runs it after 1 sec

const fn1 = () => {
  console.log(`hey jyoti`);
};
const run = (fn1: () => void) => {
  setTimeout(() => {
    fn1();
  }, 1000);
};

console.log(run(fn1));
