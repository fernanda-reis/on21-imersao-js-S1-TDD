//1
function convertCelsiusToFahrenheit(temperature) {
  var tempConverted = (temperature * 9) / 5 + 32;

  return tempConverted;
}

//2
function checkEvenNumber(num) {
  let result = "";

  if (isNaN(num)) {
    result = num + " não é um número";
  } else {
    if (num % 2 == 0) {
      result = num + " é um número par";
    } else {
      result = num + " é um número ímpar";
    }
  }

  return result;
}

//TDD

//6
function sum(num1, num2) {
  let result = num1 + num2;

  if (num1 == num2) {
    result *= 3;
  }

  return result;
}

//7
function revert(string) {
  return (result = string.split("").reverse().join(""));
}

//8
function Calculadora() {
  function soma(num1, num2) {
    return num1 + num2;
  }

  function subtracao(num1, num2) {
    return num1 - num2;
  }

  function multiplicacao(num1, num2) {
    return num1 * num2;
  }

  function divisao(num1, num2) {
    return num1 / num2;
  }

  function fatorial(num) {
    var fatorialCalc = num;
    var resultado = fatorialCalc;
    for (var i = 1; i < fatorialCalc; i++) {
      resultado *= i;
    }
    return resultado;
  }

  function somaEDivide(num1, num2, num3) {
    return (num1 + num2) / num3;
  }

  return {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    fatorial,
    somaEDivide,
  };
}

//9
function calculaTroco(num, array) {
  if (isNaN(num)) {
    return NaN;
  }

  let result = [];

  while (num > 0) {
    if (num > array[array.length - 1]) {
      num = num - array[array.length - 1];
      result.push(array[array.length - 1]);
    } else {
      for (i = 0; i <= array.length; i++) {
        if (array[i] > num) {
          num = num - array[i - 1];
          result.push(array[i - 1]);
          break;
        } else if (array[i] === num) {
          num = num - array[i];
          result.push(array[i]);
          break;
        }
      }
    }
  }
  return result;
}

module.exports = {
  convertCelsiusToFahrenheit,
  checkEvenNumber,
  sum,
  revert,
  Calculadora,
  calculaTroco,
};
