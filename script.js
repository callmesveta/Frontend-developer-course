 let syrniki = { 
  name: 'Сырники',                            //блюдо
  ingredients: ['творог', 'мука', 'яйцо'],   //ингредиенты
  costPrice: 50,                             //себестоимость
  price: 100                                 //цена блюда
};



let carbonara = {
  name: 'Карбонара',
  ingredients: ['паста', 'бекон', 'сливки', 'сыр'],
  costPrice: 180,
  price: 350
};



let bananaToast = {
  name: 'Тосты с бананом',
  ingredients: ['тост', 'Нутелла', 'банан'],
  costPrice: 30,
  price: 60
};


let food = [syrniki.name, carbonara.name, bananaToast.name];

// 1. удаляем первое блюдо и смещаем массив налево

food.shift();

console.log(`1. ${JSON.stringify(food[0])}`);



// 2. добавляем удалённое блюдо и ставим первым в списке, удаляем один ингредиент "мука"

food.unshift(JSON.stringify(syrniki.name));

console.log(`2. ${food[0]}`);

syrniki.ingredients.splice(1, 1);

console.log(syrniki.ingredients);




// 3. считаем, сколько заработаем на проданных блюдах

let summPrice = syrniki.price+carbonara.price+bananaToast.price; //сумма за три проданных блюда

let summCostPrice = syrniki.costPrice+carbonara.costPrice+bananaToast.costPrice; //сумма себестоимости трёх блюд

console.log(`3. Выручка за три проданных блюда = ${summPrice-summCostPrice}`); //сумма выручки за три блюда

console.log(`Выручка за Сырники = ${syrniki.price-syrniki.costPrice}`);

console.log(`Выручка за Карбонару = ${carbonara.price-carbonara.costPrice}`);

console.log(`Выручка за Тосты с бананом = ${bananaToast.price-bananaToast.costPrice}`);



// 4. удаляем элементы из массива, кроме одного - bananaToast


food.splice(0, 2);

console.log(`4. ${JSON.stringify(food[0])}`);
console.log(JSON.stringify(food[1]));
console.log(JSON.stringify(food[2]));





