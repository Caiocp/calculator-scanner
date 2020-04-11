const arrayToTable = require("array-to-table");

const tokensValue = {
  "+": "SOMA",
  "-": "SUBTRAÇÃO",
  "*": "MULTIPLICAÇÃO",
  "/": "DIVISÃO",
  "**": "EXPONENCIAÇÃO",
  "(": "PESQ",
  ")": "PDIR",
};

function removeSpaces(string) {
  const regex = /\s{2,}/g;

  return string.replace(regex, " ");
}

function invalidToken(string) {
  const regex = /[^\d+-//*()\s]/g;

  let token = string.match(regex);

  return { unexpectedToken: !!token, token };
}

function getValues(inputArray) {
  let value = [];
  inputArray.forEach((el) => {
    switch (el) {
      case "+":
        value.push(tokensValue["+"]);
        break;
      case "-":
        value.push(tokensValue["-"]);
        break;
      case "*":
        value.push(tokensValue["*"]);
        break;
      case "/":
        value.push(tokensValue["/"]);
        break;
      case "**":
        value.push(tokensValue["**"]);
        break;
      case "(":
        value.push(tokensValue["("]);
        break;
      case ")":
        value.push(tokensValue[")"]);
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
  const { unexpectedToken, token } = invalidToken(input);
  if (unexpectedToken) {
    return console.log(`Type error: unexpected token "${token}"`);
  } else {
    const inputArray = input.split(" ");
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
    return arrayToTable(tableArray);
  }
}

const output = table("1 + 2 / 2");
if (output) console.log(output);

/* exemplos
---> +1 * 2
---> +5 ** 2 - ( 4 )
---> -5 - -7
---> - ( 8 + 12 ) ** 1 * 3 / -4
---> a2 + ( 3 - 5 )
---> 1 + 2 / b
*/
