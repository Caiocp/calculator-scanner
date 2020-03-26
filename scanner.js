/*
/[[:graph:]]+/ pega qualquer caractere
/\D{1,}/g
*/

let input = "42 + ( 675 * 31 ) - 20925 - 1";

const operators = {
  sum: "+",
  sub: "-",
  mult: "*",
  div: "/",
  pow: "**"
};

function removeSpaces(string) {
  const regex = /\s{2,}/g;

  return string.replace(regex, "");
}

function arrayOfNums(string) {
  const regex = /\D{1,}/g;

  return string.split(regex);
}

function anyOperator(arr) {
  const regex = /[^\d\s()]{1,2}/g;
  let nonDigits = [];

  return regex.exec(arr);
  //return nonDigits;
}

input = removeSpaces(input);
let arr = input.split(" ");

let numArray = arrayOfNums(input);
let nonDigitsArray = anyOperator(input);

console.log(input);
console.log(arr);
console.log(numArray);
console.log(nonDigitsArray);
