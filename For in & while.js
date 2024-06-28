//Write a for...in loop to print all keys of an object.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021
};

for (let key in car) {
  console.log(key);
}
//Write a for...in loop to print all values of an object.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021
};

for (let key in car) {
  console.log(car[key]);
}
//Write a for...in loop to calculate the total price of all items in an object where the keys are item names and the values are their prices.
const items = {
  apple: 1.5,
  banana: 2.0,
  orange: 1.2
};

let totalPrice = 0;
for (let key in items) {
  totalPrice += items[key];
}
console.log(totalPrice);
//Write a for...in loop to count the number of properties in an object.
const student = {
  name: "Alice",
  age: 25,
  grade: "A",
  major: "Computer Science"
};

let count = 0;
for (let key in student) {
  count++;
}
console.log(count);

//while loop
// Write a while loop to print numbers from 10 to 1
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
//Write a while loop to print the elements of an array.
const array = [1, 2, 3, 4, 5];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
//Write a while loop to calculate the sum of all even numbers between 1 and 50.
let sum = 0;
let i = 2;
while (i <= 50) {
    sum += i;
    i += 2;
}
console.log(sum);
//Write a while loop to find the greatest common divisor (GCD) of two given numbers.
let a = 56; // example number
let b = 98; // example number
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log(a);
