import { LoginPass } from './loginPassword.js'
import { yourAge } from './age.js'


let nextStep = false;

while (true) {

    let enterAge = prompt(yourAge(`Введите свой возраст:`));

    if (enterAge >= 18) {
        nextStep = true;
        break;
    } else {
        alert (`Вход на сайт только с 18 лет :(`);
    }
};

while (nextStep) {
    let enterData = {
        'login': '',
        'password': '',
        'result': ''
    }
   
    enterData.login = prompt('Введите логин:');
    enterData.password = prompt('Введите пароль:');
    enterData.result = LoginPass(enterData.login, enterData.password);
    
    let messages = {
       'User Error': 'Такого пользователя не существует :(\nПопробуй ещё раз!',
       'Password Error': 'Неправильный пароль :(\nПопробуй ещё раз!',
       'Success': 'Успешный вход!',
    }
 
    alert(messages[enterData.result]);

    if (messages[enterData.result] === 'Success') {
        nextStep = false;
    }
}