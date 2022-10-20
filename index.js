let numberToGuess = Math.floor(Math.random() * 1000)

console.log('Я загадал число: ', numberToGuess)

let numberFromUser;


while (numberFromUser !== null && +numberFromUser !== numberToGuess) {
    numberFromUser = prompt('Введите число от 0 до 999: ');
    console.log('Your number: ', +numberFromUser)
    if (numberFromUser) {
        if (isNaN(numberFromUser) || (+numberFromUser < 0 && +numberFromUser >= 1000)) {
            alert('Вы ввели не число от 0 до 999!');
        } else if (numberFromUser > +numberToGuess) {
            alert('Загаданное число <');
        } else if (numberFromUser < +numberToGuess) {
            alert('Загаданное число >');
        }
    } else {
        alert('Пустое поле!')
    }
}
alert('Вы выиграли')


