import uuidv4 from 'uuid/v4'
import validator from 'validator'
import Hangman from './hangman'
import getPuzzle from './requests'

console.log(validator.isEmail('aditya@xyz.com'));

console.log(uuidv4());

const puzzle = document.querySelector('#puzzle')
const reamainingGuess = document.querySelector('#remaining-guess')

let game1 




window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
     
})

const render = () => {
    puzzle.innerHTML = ''
    reamainingGuess.textContent = game1.statusMessage
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzle.appendChild(letterEl)
    })
    

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()