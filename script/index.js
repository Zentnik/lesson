console.log("1.");
const numbersArr = [2, 5, 8, 10, 3, 6, 7, 12];

for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] > 3 && numbersArr[i] < 10) {
    console.log(numbersArr[i]);
  }
}

console.log("2.");
const numbers2Arr = [1, 2, 5, 9, 4, 13, 10];

for (let i = 0; i < numbers2Arr.length; i++) {
  if (numbers2Arr[i] == 4) {
    console.log("Наявний!");
    break;
  }
}

console.log("3.");
const mass = [42, 2, 33, 11, 12, 10, 0];
let sum = mass.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);
let avg = sum / mass.length;
console.log("Середнє арифметичне елементів масиву: " + avg);

console.log("4.");
const stringsArr = ["parrot", "bull", "bear", "monkey"];

let num = stringsArr.reduce(function (total, currentString) {
  return total + currentString.length;
}, 0);

console.log("Сумарна кількість символів у всіх стрічках: " + num);

console.log("5.");
const Array = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
let mArray = Array.filter(function (item) {
  return typeof item === "string";
});
console.log("Масив лише зі стрічками:", mArray);
