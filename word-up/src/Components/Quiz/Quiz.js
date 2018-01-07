import React, { Component } from "react";

class Quiz extends Component {
    state = {
        q1: {word: "vapid", definition: "lacking flavor, zest, animation, or spirit : flat, dull"}
        , q2: {word: "sacerdotal", definition: "of or relating to priests or a priesthood"}
        , q3: {word: "fete", definition: "festival"}
        , correctAnswers: 0
        , wrongAnswer: 0
        , timedOut: 0
        , gameStarted: false
        , time: 20
        , chosenWord: ""
        , chosenDefinition: ""
    }

    componentWillMount(){
        //document.click
    }

    count = () => {
        this.setState(time: time -= 1)
        if (this.state.time < 0){
            //clearTimeout(intervalId);
            this.setState(timedOut: timedOut += 1)
        }
    }

    questionChooser = () => {
        this.setState({chosenWord: this.state.q1.word});
        this.setState({chosenDefinition: this.state.q1.definition});

    }

    render() {
        return(
            <div>
                Fuuuu
            </div>
        )
    }
}

export default Quiz