// const randomBtnColor = document.getElementById('randomBtn')
// const randomTextColor = document.getElementById('text')


// randomBtnColor.addEventListener('click', () => {
//     let val1 = Math.round(Math.random() * 255)
//     let val2 = Math.round(Math.random() * 255)
//     let val3 = Math.round(Math.random() * 255)
//     console.log(val1)
//     randomTextColor.style.color = `rgba(${val1}, ${val3}, ${val3})`;
// })


// const textCount = document.getElementById('textCount')
// let count = 0;


// document.getElementById('addBtn').addEventListener('click', () => {
//     count++;
//     textCount.textContent = `Счеётчик ${count}`;
// })

// document.getElementById('minusBtn').addEventListener('click', () => {
//     count--;
//     textCount.textContent = `Счеётчик ${count}`;
// })



const inputData = document.getElementById('inputData')
const btnGuess = document.getElementById('btnGuess')
const btnFail = document.getElementById('btnFail')
const gameRes = document.getElementById('gameRes')
let gameShag = document.getElementById('game__shag')
let attemps;
let randomNum;


function startGame() {
    attemps = 5;
    randomNum = Math.round((Math.random() * 20) + 1)
    console.log(randomNum)
    inputData.value = "";
    gameShag.style.display = 'block';
    gameShag.textContent = `У вас осталось ${attemps}`;
}

btnGuess.addEventListener('click', () => {
    let userGuess = +inputData.value;
    // console.log(typeof userGuess.value)

    if (!userGuess) {
        gameRes.textContent = "Введите число"
    }
    if (userGuess == randomNum) {
        gameRes.textContent = "Вы угадали число"
        btnGuess.style.display = 'none'
        gameRes.style.color = 'green'
    } else {
        attemps--;
        if (attemps == 0) {
            gameRes.textContent = "У вас 0 попыток"
            btnGuess.style.display = 'none'
            gameShag.style.display = 'none'

        } else {
            gameRes.textContent = `Ваше число ${(userGuess > randomNum) ? "Больше" : "Меньше"} загаданного`
            game__shag.textContent = `У вас ${attemps} попыток`
        }
    }
})

btnFail.addEventListener('click', startGame)


startGame()
