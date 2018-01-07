// Variables
import React, { Component } from "react";
import Hangman from "../Hangman";
import Giphy from "../Giphy";
import Quiz from "../Quiz";

class HangmanBox extends Component {
    state = {//db : require("./models"),
    wordList : [],
    selectedWord: ""
    }

    componentDidMount(){
        console.log("This is working Box")
    }

    // Query the DB for a word list
    /*componentDidMount(){
        this.db.Words.findAll({}).then(function(dbWord){
        for (let i = 0; i < dbWord.length; i++){
            this.wordList.push({word: dbWord[i].word, definition: dbWord[i].definition})
        }
        this.selectedWord = this.wordList[Math.floor(Math.random() * this.wordList.length)]
    })
    }*/


    // Pass the word to the Hangman Game and the Giphy

    render() {
        return (
          <div>
            <Hangman selectedWord="SupBro"/>
            <Giphy selectedWord="selectedWord"/>
            <Quiz selectedWord="Foo" />
          </div>
        );
      }
    }
export default HangmanBox
