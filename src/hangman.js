class Hangman {
    constructor(word, remainingGuess){
        this.word = word.toLowerCase().split('')
        this.remainingGuess = remainingGuess
        this.guessedLetters = []
        this.status = 'playing'

    }
    calculateStatus(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ' )
        



    //or
    // const unguessedLetters = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })

    // const finished = unguessedLetters.length === 0  



    //or

    // let finished = true
    // this.word.forEach((letter) => {
    //     if(this.guessedLetters.includes(letter)){

    //     }else{
    //         finished = false
    //     }
    // })
    if(this.remainingGuess === 0){
        this.status = 'failed'
    }else if(finished){
        this.status = 'finished'
    }else{
        this.status = 'playing'
    }

    }
    get statusMessage(){
        if(this.status === 'playing'){
            return `guesses left ${this.remainingGuess}`
        }else if (this.status === 'failed'){
            return `Nice try! the word was ${this.word.join('')}`
        }else{
            return 'Great work, you guessed the word'
        }

    }
    get puzzle(){
        let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }else{
            puzzle += '*'
        }
        
        
    });
    return puzzle

    }
    makeGuess(guess){
        guess = guess.toLowerCase()
     const isUnique = !this.guessedLetters.includes(guess)
     const badGuess = !this.word.includes(guess)
     if(this.status !== 'playing'){
         return
     }
     
     if(isUnique){
         this.guessedLetters.push(guess)
     }
     if(isUnique && badGuess){
         this.remainingGuess--   
     }
     this.calculateStatus()

    }
}

export {Hangman as default}





