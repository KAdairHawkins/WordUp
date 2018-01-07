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
        , correctAnswer: {}
    }
    }
    
    correctAnswerPicker = () => {
        let foo = Math.floor(Math.random() * this.state.questions.length);
        //Look. This is bad. I shouldn't do this. But the damn thing won't update otherwise.
        this.state.correctAnswer = this.state.questions[foo]
    }

    componentWillMount() {
        //document.addEventListener("click")
        this.questionChooser()
        this.correctAnswerPicker();
    }

    count = () => {
        this.setState(time: time -= 1)
        if (this.state.time < 0){
            //clearTimeout(intervalId);
            this.setState(timedOut: timedOut += 1)
        }
    }

    questionChooser = () => {
        this.correctAnswerPicker();
        const stateArray = this.state.questions.slice();
        const holderArray = [];
        //because the dumb thing is splicing the state.questions as well, so I'm having to count down rather than up
        for(let i = 0; i < this.state.questions.length; i++ ){
            let foo = Math.floor(Math.random() * stateArray.length)
            holderArray.push(stateArray[foo]);
            stateArray.splice(foo, 1);
            console.log("State");
            console.log(this.state.questions);
        }
        this.setState({chosenQuestions:holderArray})
    }

    handleClick = (id) => {
        this.setState({displayAnswers: "visible"})
        console.log(id);
        if(id === this.state.correctAnswer.definition){
            console.log("Correct!");
        }
    }

    render() {
        let items = this.state.chosenQuestions.map(question => {
                return(<div key={question.id}><button onClick = {() => {this.handleClick(question.definition)}}>{question.word}</button><span className={this.state.displayAnswers}>{question.definition}</span></div>)
            })
        console.log(items);
        return(
            <div>
            <h2>{this.state.correctAnswer.definition}</h2>
            {items}
            </div>
        )
    }
}

export default Quiz