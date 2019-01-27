/**
 * Create 2019/01/27
 * 點擊按鈕，換色及文字
 * 單一原則 single responsable principle
 */
let quote = [
    {
        name: "Thomas",
        content: "If you don’t learn to think when you are young, you may never learn."
    },
    {
        name: "Aesop",
        content: "Treat other people as you hope they will treat you."
    },
    {
        name: "Steve Jobs",
        content: "Your time is limited, so don’t waste it living someone else’s life."
    }
]

let colors = ['bg-blue', 'bg-purple', 'bg-green']

function btnClick () {
    changeQuote()
    changeBackgroundColor()
}
function changeQuote () {
    let number = getRandomNumber(quote.length)
    document.getElementById('quote').innerHTML = quote[number]["content"]
    document.getElementById('creator').innerHTML = quote[number]["name"]
}
function changeBackgroundColor () {
    let number = getRandomNumber(colors.length)
    document.body.classList.add(colors[number])
    RemoveClass(number)
}
function getRandomNumber (limit) {
    let number = Math.floor((Math.random() * limit))
    return number
}
function RemoveClass (randomNum) {
    for (let i = 0; i < colors.length; i++) {
        if (i !== randomNum) {
            document.body.classList.remove(colors[i])
        }
    }
}

