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



// 2. Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. В эту функцию должны передаваться все данные для расчета профита, результат расчетов присвойте в объект блюда.

let syrniki = { 
    name: 'Сырники',                            
    ingredients: ['творог', 'мука', 'яйцо'],   
    costPrice: 0,                             
    price: 90,
    profit: 0                                 
  };
  
  
  
  let carbonara = {
    name: 'Карбонара',
    ingredients: ['паста', 'бекон', 'сливки', 'сыр'],
    costPrice: 0,
    price: 320,
    profit: 0
  };
  
  
  
  let bananaToast = {
    name: 'Тосты с бананом',
    ingredients: ['тост', 'Нутелла', 'банан'],
    costPrice: 0,
    price: 55,
    profit: 0
  };
  
  
  let food = [syrniki, carbonara, bananaToast];


  let ingredientsPrice = {
    'творог': 20,
    'мука': 10,
    'яйцо': 20,
    'паста': 50,
    'бекон': 50,
    'сливки': 40,
    'сыр': 35,
    'тост': 10,
    'Нутелла': 10,
    'банан': 10
  }
  


  //Посчитали стоимость приготовления динамически (с помощью цикла).

  for (i = 0; i < food.length; i++) {
    let sum = 0;
    for (let j = 0; j < food[i].ingredients.length; j++) {
      sum += ingredientsPrice[food[i].ingredients[j]];
    }
    food[i].costPrice = sum;
  };



  //Функция расчёта профита блюд

  function profit1(price, costPrice) {
    return price - costPrice;
  }


  let profitString = '';

  for (let i = 0; i < food.length; i++) {
    food[i].profit = profit1(food[i].price, food[i].costPrice);
    profitString += (`Блюдо: ${food[i].name};  Себестоимость: ${food[i].costPrice};  Цена: ${food[i].price};  Прибыль: ${food[i].profit}\n`);
  };

  alert(profitString);