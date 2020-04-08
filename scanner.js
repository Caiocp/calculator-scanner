const arrayToTable = require("array-to-table");

const operatorsValue = {
  "+": "SOMA",
  "-": "SUBTRAÇÃO",
  "*": "MULTIPLICAÇÃO",
  "/": "DIVISÃO",
  "**": "EXPONENCIAÇÃO",
};

const parenthesisValue = {
  "(": "PESQ",
  ")": "PDIR",
};

function removeSpaces(string) {
  const regex = /\s{2,}/g;

  return string.replace(regex, " ");
}

function arrayOfNums(string) {
  const regex = /\d{1,}/g;

  let array = string.match(regex);

  return array;
}

function anyOperator(string) {
  const regex = /[^a-zA-Z\d\s()]{1,}/g;

  let teste = string.match(regex);

  return teste;
}

function anyParenthesis(string) {
  const regex = /[()]{1,}/g;

  let teste = string.match(regex);

  return teste;
}

function invalidToken(string) {
  const regex = /[^\d+-//*()\s]/g;

  let token = string.match(regex);

  return { bool: !!token, token };
}

function getValues(inputArray) {
  let value = [];
  inputArray.forEach((el) => {
    switch (el) {
      case "+":
        value.push(operatorsValue["+"]);
        break;
      case "-":
        value.push(operatorsValue["-"]);
        break;
      case "*":
        value.push(operatorsValue["*"]);
        break;
      case "/":
        value.push(operatorsValue["/"]);
        break;
      case "**":
        value.push(operatorsValue["**"]);
        break;
      case "(":
        value.push(parenthesisValue["("]);
        break;
      case ")":
        value.push(parenthesisValue[")"]);
        break;
      default:
        value.push(el);
        break;
    }
  });
  return value;
}

function getTypes(inputArray) {
  let type = [];
  inputArray.forEach((el) => {
    switch (el) {
      case "+":
        type.push("Operador");
        break;
      case "-":
        type.push("Operador");
        break;
      case "*":
        type.push("Operador");
        break;
      case "/":
        type.push("Operador");
        break;
      case "**":
        type.push("Operador");
        break;
      case "(":
        type.push("Pontuação");
        break;
      case ")":
        type.push("Pontuação");
        break;
      default:
        type.push("Número");
        break;
    }
  });
  return type;
}

function table(input) {
  input = removeSpaces(input);
  const { bool, token } = invalidToken(input);
  if (bool) {
    console.log(`Type error: unexpected token "${token}"`);
  } else {
    const inputArray = input.split(" ");
    // const operators = anyOperator(input) || [];
    // const parenthesis = !!anyParenthesis(input) ? anyParenthesis(input) : "";
    // const nums = arrayOfNums(input);
    const valueArray = getValues(inputArray);
    const typeArray = getTypes(inputArray);
    let tableArray = [];

    for (let i = 0; i < inputArray.length; i++) {
      tableArray[i] = {
        lexema: inputArray[i],
        tipo: typeArray[i],
        valor: valueArray[i],
      };
    }
    const table = arrayToTable(tableArray);
    console.log(table);
  }
}

table("1 * 2");
