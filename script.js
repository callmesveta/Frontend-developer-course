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
  
  
let food = [syrniki, carbonara, bananaToast]; //массив блюд


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

let nonVeganIngredients = ['творог', 'яйцо', 'бекон', 'сливки', 'сыр']; //массив с невегетарианскими ингредиентами
  
// 1. Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует `reduce` .
// 2. Используйте `map` , чтобы получить массив с объектами в которых содержится только название и стоимость каждого блюда.
// 3. Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.
// 4. Определите, полностью ли у вас вегетарианское меню с помощью `every`.
// 5. Создайте массив с вегетарианскими блюдами с помощью filter.

//Посчитали стоимость приготовления динамически (с помощью цикла).

// 1. Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует `reduce` .

console.log(`1. Себестоимость блюд с помощью 'reduce'.`);

food.forEach(function (item, index, arr) {
    let costPrice = item.ingredients.reduce(function (sum, item, index, arr) {
        return sum + ingredientsPrice[item];
    }, 0);

item.costPrice = costPrice;
});

food.forEach(function (item, index) {
    console.log(item.name);
    console.log(item);
});

//2. Используйте `map` , чтобы получить массив с объектами в которых содержится только название и стоимость каждого блюда.

console.log(`2. Массив с названием и стоимостью блюд с поомщью 'map'.`);

let nameAndPrice = food.map(function(item, index, arr) {
    return [item.name, item.price];
});

console.log(nameAndPrice);

// 3. Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.

console.log(`3. Одно вегетарианское блюдо с помощью 'some'.`);

let veganFood = food.some(function (item, index, arr) {
    let checkVeganFood = item.ingredients.some(function (item, index, arr) {
        return nonVeganIngredients.includes(item);
    });
    return checkVeganFood;
});

console.log(veganFood);

//4. Определите, полностью ли у вас вегетарианское меню с помощью `every`.

console.log(`4. Проверяем полностью ли у нас вегетарианское меню с помощью 'every'.`);

let veganMenuAll = food.every(function (item, index, arr) {
    let checkVeganMenu = item.ingredients.some(function (item, index, arr) {
        return nonVeganIngredients.includes(item);
    });
    return checkVeganMenu;
});

console.log(veganMenuAll);

//5. Создайте массив с вегетарианскими блюдами с помощью filter.

console.log(`5. Создаём массив с вегетарианскими блюдами с помощью 'filter'.`);

let veganFoodMassive = food.filter(function (item, index, arr) {
    let veganFood = item.ingredients.some(function (item, index, arr) {
        return nonVeganIngredients.includes(item);
    });
    return !veganFood;
});

console.log(veganFoodMassive);


