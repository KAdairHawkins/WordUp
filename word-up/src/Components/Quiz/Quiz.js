import React, { Component } from "react";
import "./Quiz.css";

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {
        questions: [
            {word: "vapid", definition: "lacking flavor, zest, animation, or spirit : flat, dull", id: 0}
            , {word: "sacerdotal", definition: "of or relating to priests or a priesthood", id: 1}
            , {word: "fete", definition: "festival", id: 2}
            ]
        , correctAnswers: 0
        , wrongAnswer: 0
        , timedOut: 0
        , gameStarted: false
        , time: 20
        , chosenWord: ""
        , chosenDefinition: ""
        , displayAnswers: "hidden"
        , chosenQuestions: []
    }
    }
    

    componentWillMount() {
        //document.addEventListener("click")
        this.questionChooser()
        console.log("New Chosen Questions")
        console.log(this.state.chosenQuestions)
    }

    count = () => {
        this.setState(time: time -= 1)
        if (this.state.time < 0){
            //clearTimeout(intervalId);
            this.setState(timedOut: timedOut += 1)
        }
    }

    questionChooser = () => {
        const stateArray = this.state.questions;
        console.log("Length " + this.state.questions.length)
        const holderArray = [];
        //because the dumb thing is splicing the state.questions as well, so I'm having to count down rather than up
        for(let i = this.state.questions.length; i > 0; i--){
            let foo = Math.floor(Math.random() * stateArray.length)
            holderArray.push(stateArray[foo]);
            stateArray.splice(foo, 1);
        }
        this.setState({chosenQuestions:holderArray})
    }

    handleClick = () => {
        this.setState({displayAnswers: "visible"})
        console.log(this.state.chosenQuestions)
    }

    render() {
        return(
            <div>
                <h3>{this.state.chosenQuestions[0].definition}</h3>
                <div><button onClick = {this.handleClick} >{this.state.chosenQuestions[0].word}</button><span className={this.state.displayAnswers}>{this.state.chosenQuestions[0].definition}</span></div>
                <div><button onClick = {this.handleClick} >{this.state.chosenQuestions[1].word}</button><span className={this.state.displayAnswers}>{this.state.chosenQuestions[1].definition}</span></div>
                <div><button onClick = {this.handleClick} >{this.state.chosenQuestions[2].word}</button><span className={this.state.displayAnswers}>{this.state.chosenQuestions[2].definition}</span></div>
            </div>
        )
    }
}

export default Quiz