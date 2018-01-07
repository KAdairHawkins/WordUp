import React, { Component } from "react";

class Hangman extends Component {
    state = {blankWord: [],
        winNumber: 0,
        lossNumber: 0,
        guesses: [],
        guessesRemaining: 9,
        guessedWord: "",
        chosenWord: this.props.selectedWord,
        chosenDefinition: this.props.selectedWord.definition
    }

    componentDidLoad(){
        console.log("Hangman Working")
    }

    componentWillMount(){
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
        this.blankGenerator(this.state.chosenWord);
        console.log(this.state.blankWord)
    }

    //Generates a bunch of underscores
    blankGenerator = (word) => {
        for (let i = 0; i < word.length; i++){
            this.state.blankWord.push("_");
        }
    }    

    //Updates the blank word if it finds the letter in it
    //Then checks if you've won
    hangman = (chosenWord, letter) => {
        for(let i = 0; i < chosenWord.length; i++){
            //works out such that if a character in chosenWord is equal to the typed letter, the appropriate underscore in this.blankWord is replaced with that letter in chosenWord. 
            if (chosenWord[i].toLowerCase() === letter.toLowerCase()){
                this.state.blankWord[i]=this.state.chosenWord[i];
                //update the page HTML with the new partially-underscored word 
                this.setState({guessedWord: this.state.blankWord.join(" ")});
                console.log("Foo" + this.state.guessedWord)
                //check if you got the word
                if (this.state.blankWord.join("") === this.state.chosenWord) {
                    //Increments the number of wins
                    this.state.winNumber+=1;
                    //resets the various fields
                    this.setState({guessesRemaining: 9});
                    this.state.guesses = [];
                } 
            } 
        }
    }


    handleKeyPress = (event) => {
        console.log("Win Number:" + this.state.winNumber);
        console.log("Triggering")
        //sanitize input
        const letter = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(letter)

        //runs through the Hangman code
        this.hangman(this.state.chosenWord, letter);

        //Ensures the user won't be counted wrong for guessing a letter that's capitalized in the word
        let blankWordLowerCase = []
        for (let i = 0 ; i < this.state.blankWord.length; i++) {
            console.log("Undefined" + this.state.blankWord);
            console.log(this.state.blankWord);
           blankWordLowerCase[i] = this.state.blankWord[i].toLowerCase();
        };
        console.log(blankWordLowerCase);
        //if (you can't find what key you pressed in the "already guessed" index) AND (the character code of your letter is lower-case-A or later)
        //AND (the character code of your letter is lower-case-Z or earlier AND (the guess isn't part of the displayed word yet))
        if(this.state.guesses.indexOf(letter) === -1 && letter.charCodeAt() > 93 && letter.charCodeAt() < 123 && blankWordLowerCase.indexOf(letter) === -1){
            let newGuess = this.state.guesses;
            newGuess.push(letter);
            this.setState(this.state.guesses: newGuess);
            console.log(this.state.guesses);
            if (this.state.chosenWord.toLowerCase().indexOf(letter) === -1){    
                this.state.guessesRemaining-=1
            }
            //Finally found the correct position in the code to put this such that it doesn't require an extra keypress to trigger the fail state.
            if (this.state.guessesRemaining < 1) {
                //Increments the number of losses
                this.setState({lossNumber: this.state.lossNumber + 1});
                //Insert code here to yell at the user for sucking.
            }
        }
    }

    render() {
            return (
              <div>    
                <p>Wins Number: {this.state.winNumber}</p>
                <p>Guessed Word: {this.state.guessedWord}</p>
                <p>Guessed Letters: {this.state.guesses.join("")}</p>
              </div>
            );
        }
    }

export default Hangman;