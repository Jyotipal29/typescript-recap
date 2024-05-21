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

// const fn1 = () => {
//   console.log(`hey jyoti`);
// };
// const run = (fn1: () => void) => {
//   setTimeout(() => {
//     fn1();
//   }, 1000);
// };

// console.log(run(fn1));

// interfacees

// to assign a type to the user object you can use interface

//1 create a functio  isLegal that returns true or false if a user is above 18. it takes a user as an input
// interface User {
//   firstName: string,
//   lastName:string
//   age: number
//   email?: string
// }
// let user = {
//   firstName: "jyoti",
//   lastName:"pal",
//   age: 19
// }



// const isLegal = (user:User) => {
//   if (user?.age > 18) {
//     return true;
//   }
//   return false;

// }
// console.log(isLegal(user))
/// only interface is alloowd to implement classes  not types



// types
// very similar to interface types let you aggregate data together

type User  = {
  name: string
  email: string
  age:number
  
}

// types let you do few things
//1 unions

// type password = string | number


//2 interface
// What if you want to create a type that has every property of multiple types/ interfaces
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//   name: "harkirat",
//   startDate: new Date(),
//   department: "Software developer",
// };



// arrays

//1 Given an array of positive integers as input, return the maximum value in the array


// let arr = [1, 2, 3, 4]

// const maxVal = (arr: number[]) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] > max)
//     max = arr[i]
//   }

//   return max;
// }


// console.log(maxVal(arr))


//enums

//
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// function doSomething(keyPressed: Direction) {
//   // do something.
// }

// doSomething(Direction.Up);








