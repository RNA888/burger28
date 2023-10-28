let name = prompt ("Введите свое имя:","Гость");
alert(`Здравствуйте, ${name}!`);
let firstNumber = prompt ("Введите первое число:");
let secondNumber = prompt ("Введите второе число:");
firstNumber = +firstNumber;
secondNumber = +secondNumber;
const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;
alert(
    `Результат:
    Сумма - ${sum},
    Разность - ${difference },
    Произведение - ${product }
    Деление - ${quotient }`
    );