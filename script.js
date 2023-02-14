let syrniki = {                        //блюдо
  ingredients: 'творог, мука, яйцо',   //ингредиенты
  costPrice: 50,                       //себестоимость
  price: 100                           //цена блюда
};

let carbonara = {
  ingredients: 'паста, бекон, сливки, сыр',
  costPrice: 180,
  price: 350
};

let bananaToast = {
  ingredients: 'тост, Нутелла, банан',
  costPrice: 30,
  price: 60
};


let food = ['syrniki', 'carbonara', 'bananaToast']; //создали массив из блюд


// 1. удаляем первое блюдо и смещаем массив налево

food.shift();

console.log('1.'+' '+food[0]);


// 2. добавляем удалённое блюдо и ставим первым в списке

food.unshift('syrniki');

console.log('2.'+' '+food[0]);



// 3. считаем, сколько заработаем на проданных блюдах

let summPrice = syrniki.price+carbonara.price+bananaToast.price; //сумма за три проданных блюда

let summCostPrice = syrniki.costPrice+carbonara.costPrice+bananaToast.costPrice; //сумма себестоимости трёх блюд

console.log('3.'+' '+'Выручка за три проданных блюда = '+`${summPrice-summCostPrice}`); //выручка


// 4. удаляем элементы из массива, кроме одного - bananaToast

delete food[0];

delete food[1];

//food.splice(0, 2); ---- либо можно удалить так, чтобы не оставить пустых мест в массиве

console.log('4.'+' '+food[0]);
console.log(food[1]);
console.log(food[2]);





