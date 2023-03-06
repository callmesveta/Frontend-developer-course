//1. Выведите все четные числа до 10 включительно. ⭐не используйте оператор **continue**.

let i = 0;

while (i <= 10) {
    alert(i);
    i = i+2;
}



//2. Создайте бесконечный цикл и прервите его на 5-ой итерации.

let femaleNames = ['Светлана', 'Ольга', 'Татьяна', 'Анна', 'Мария', 'Елена', 'Евгения', 'Александра', 'Юлия'];
let femaleNamesString = '';

{
    let i = 0;
    
    while(i < femaleNames.length) {
       
        femaleNamesString += femaleNames[i] + ',';

        alert(`Женские имена: ${femaleNamesString}`);

        if (i === 4) {
        break;
        }   

    i++;

    }
}



//3.1. Создайте массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации.

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
  


  //3.2. Посчитайте стоимость приготовления динамически (с помощью цикла).

  for (i = 0; i < food.length; i++) {
    let sum = 0;
    for (let j = 0; j < food[i].ingredients.length; j++) {
      sum += ingredientsPrice[food[i].ingredients[j]];
    }
    food[i].costPrice = sum;
  };



  //3.3 Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда.

  for (i = 0; i < food.length; i++) {
    food[i].profit = food[i].price - food[i].costPrice;
  };

  alert(`Массив с данными о себестоимости и прибыли от каждого блюда: ${JSON.stringify(food)}`);