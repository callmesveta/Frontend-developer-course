// 1. Напишите функцию принимающую два числа и возвращающую меньшее из них.

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  let num1 = prompt('Введите первое число: ');
  let num2 = prompt('Введите второе число: ');

  if (num1 === num2) {
    alert('Введите разные числа!');
  } else {
    alert(`Меньшее из двух чисел - ${min(num1, num2)}`);
  }
