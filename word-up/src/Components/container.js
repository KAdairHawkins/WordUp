import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button
} from 'reactstrap';
import './images/Hangman_game.jpg';
import './images/Hangman-0.png';
import './container.css';


class ContainerComponent extends Component {
  state = {blankWord: [],
        winNumber: 0,
        lossNumber: 0,
        guesses: [" "],
        guessesSoFar: 0,
        guessedWord: "",
        chosenWord: this.props.selectedWord.word,
        chosenDefinition: this.props.selectedWord.definition,
        hangmanImages: ["https://i.imgur.com/SSZYnHL.png", "https://i.imgur.com/cc1GLcT.png", "https://i.imgur.com/8cZAcXF.png", "https://i.imgur.com/W1Hx7Ow.png", "https://i.imgur.com/7xdTxUJ.png", "https://i.imgur.com/urZJPRc.png", "https://i.imgur.com/Pob9VWl.png"]
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
            this.state.blankWord.push("_ ");
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
                    this.setState({guessesSoFar: 0});
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
                this.state.guessesSoFar+=1
            }
            //Finally found the correct position in the code to put this such that it doesn't require an extra keypress to trigger the fail state.
            if (this.state.guessesSoFar < 1) {
                //Increments the number of losses
                this.setState({lossNumber: this.state.lossNumber + 1});
                //Insert code here to yell at the user for sucking.
            }
        }
    }
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (<div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container fluid={true}>
        <Row>
{/* Hangman */}
          <Col>
            <Row>
              <Col className="hangmanTitle">
                <h1 id="titleHangman">Hangman</h1>
              </Col>
            </Row>
            <Row>
        {/* Images for Hangman */}
          <Col>
            <Card className="staticImg">
              <CardImg top="top" width="100%" src="https://i.imgur.com/RisnVCi.jpg" alt=""/>
            </Card>
          </Col>
          <Col>
            <Card className="dynamicImg">
              <CardImg top="top" width="100%" src={this.state.hangmanImages[this.state.guessesSoFar]} alt=""/>
            </Card>
          </Col>
          </Row>

          <Row>
          <Col>
            <Card className="correctLetters">
              <CardBody>
                <CardTitle className="letterBox">
                  <span>{this.state.blankWord}</span>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="usedLetters">
              <CardBody>
                <CardTitle className="letterBox">
                  <span className="guesses">{this.state.guesses}</span>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card body="body" className="text-center">
              <CardTitle className="word">{this.state.chosenWord.word}</CardTitle>
              <CardText className="wordDefinition">{this.state.chosenWord.definition}</CardText>
              <Button className="Play" tag="a" color="success" size="large" href="/">Play Again!</Button>
            </Card>
          </Col>
        </Row>
      </Col>



      <Col>
          {/* Giphy */}
          <Row>
            <Col></Col>
            <Col>
              <h1 id="titleGiphy">Hints!</h1>
            </Col>
            <Col></Col>
          </Row>
            <Row>
              <Col>
                <Card className="Giphy1">
                  <CardImg top="top" width="100%" src="https://media2.giphy.com/media/kTZBUjdRlZB3G/200w.gif" alt="Card image cap"/>
                </Card>
              </Col>
              <Col>
                <Card className="Giphy2">
                  <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt="Card image cap"/>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="Giphy3">
                  <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt="Card image cap"/>
                </Card>
              </Col>
              <Col>
                <Card className="Giphy4">
                  <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt="Card image cap"/>
                </Card>
              </Col>
            
          </Row>

      </Col>

      </Row>
    </Container>
  </div>)
  }
}

export default ContainerComponent;
