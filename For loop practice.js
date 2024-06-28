//Write a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Write a for loop to print even numbers from 2 to 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
//Write a for loop to print the elements of an array.
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//Write a for loop to calculate the sum of all numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
//Write a for loop to find the factorial of a given number.
const num = 5; // example number
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);
