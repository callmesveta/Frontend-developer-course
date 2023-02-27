let i = 0;

while (i <= 10) {
    alert(i);
    i = i+2;
}




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



let syrniki = { 
    name: 'Сырники',                            //блюдо
    //ingredients: ['творог', 'мука', 'яйцо'],   //ингредиенты
    //costPrice: 50,                             //себестоимость
    price: 90                                 //цена блюда
  };
  
  
  
  let carbonara = {
    name: 'Карбонара',
    //ingredients: ['паста', 'бекон', 'сливки', 'сыр'],
    //costPrice: 175,
    price: 320
  };
  
  
  
  let bananaToast = {
    name: 'Тосты с бананом',
    //ingredients: ['тост', 'Нутелла', 'банан'],
    //costPrice: 30,
    price: 55
  };
  
  
  let food = [syrniki, carbonara, bananaToast];

  let syrnikiIngredients = ['творог', 'мука', 'яйцо'];

  let carbonaraIngredinets = ['паста', 'бекон', 'сливки', 'сыр'];

  let bananaToastIngredients = ['тост', 'нутелла', 'банан'];


  let syrnikiIngredientsPrice = {
    'творог': 20,
    'мука': 10,
    'яйцо': 20
  }
  
  let syrnikiIngredientsSum = 0;
  for (let key in syrnikiIngredientsPrice) {
    syrnikiIngredientsSum += syrnikiIngredientsPrice[key];
  }

  alert(`Себестоимость блюда "Сырники" - ${syrnikiIngredientsSum}`);



  let carbonaraIngredientsPrice = {
    'паста': 50,
    'бекон': 50,
    'сливки': 40,
    'сыр': 35
  }

  let carbonaraIngredientsSum = 0;
  for (let key in carbonaraIngredientsPrice) {
    carbonaraIngredientsSum += carbonaraIngredientsPrice[key];
  }
  
  alert(`Себестоимость блюда "Карбонара" - ${carbonaraIngredientsSum}`);



  let bananaToastIngredientsPrice = {
    'тост': 10,
    'нутелла': 10,
    'банан': 10
  }

  let bananaToastIngredientsSum = 0;
  for (let key in bananaToastIngredientsPrice) {
    bananaToastIngredientsSum += bananaToastIngredientsPrice[key];
  }
  
  alert(`Себестоимость блюда "Тосты с бананом" - ${bananaToastIngredientsSum}`);



  alert(`Доход от проданного блюда "Сырники" - ${syrniki.price-syrnikiIngredientsSum}`);
  alert(`Доход от проданного блюда "Карбонара" - ${carbonara.price-carbonaraIngredientsSum}`);
  alert(`Доход от проданного блюда "Тосты с бананом" - ${bananaToast.price-bananaToastIngredientsSum}`);