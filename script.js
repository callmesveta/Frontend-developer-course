// Вынесите массив с меню и объект с ценами на ингредиенты в отдельные файлы JSON и получите данные из них с помощью fetch.
// Весь код из прошлых уроков выполните после получения данных из файлов.


let food;

fetch('/menu.json')
    .then((response) => response.json())
    .then((response) => {
        food = response;
        return fetch('/ingredients.json');
    })
.then((response) => response.json())
.then(ingredients => {

    
// 1. Себестоимость блюд с помощью 'reduce'.

    console.log(`1. Себестоимость блюд с помощью 'reduce'.`);

    food.forEach(function (item, index, arr) {
        let costPrice = item.ingredients.reduce(function (sum, item, index) {
            return sum + ingredients[item].price;
        }, 0);
        item.costPrice = costPrice;
    });

    food.forEach(function (item, index, arr) {
        console.log(`Блюдо: ${item.name}`);
        console.log(`Себестоимость: ${item.costPrice}`);
    });

// 2. Используйте `map` , чтобы получить массив с объектами в которых содержится только название и стоимость каждого блюда.

    console.log(`2. Массив с названием и стоимостью блюд с помощью 'map'.`);

    let nameAndPrice = food.map(function(item, index, arr) {
        return [item.name, item.price];
    });

    console.log(nameAndPrice);

// 3. Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.

console.log(`3. Одно вегетарианское блюдо с помощью 'some'.`);

let veganFood = food.some(function (item, index, arr) {
    return item.ingredients.some(function (item, index, arr) {
        return ingredients[item].vegan == true;
    })
});

console.log(veganFood);


// 4. Определите, полностью ли у вас вегетарианское меню с помощью `every`.

console.log(`4. Проверяем полностью ли у нас вегетарианское меню с помощью 'every'.`);

let veganMenuAll = food.every(function (item, index, arr) {
    return checkVeganMenu = item.ingredients.every(function (item, index, arr) {
        return ingredients[item].vegan == true;
    });
});

console.log(veganMenuAll);

// 5. Создайте массив с вегетарианскими блюдами с помощью filter.

console.log(`5. Массив с вегетарианскими блюдами с помощью 'filter'.`);

let veganFoodMassive = food.filter(function (item, index, arr) {
    return item.ingredients.every(function (item, index, arr) {
        return ingredients[item].vegan == true;
    });
});

console.log(veganFoodMassive);

})