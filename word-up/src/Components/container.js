import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
 UncontrolledDropdown,
 Dropdown,
 DropdownToggle,
 DropdownMenu,
 DropdownItem,
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
import './students.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(../images/WordUpLangingPage.jpg)"
};

class ContainerComponent extends Component {
constructor(props) {
    super(props);
    this.state = {
      blankWord: [],
      collapsed: true,
      winNumber: 0,
      lossNumber: 0,
      guesses: [" "],
      guessesSoFar: 0,
      guessedWord: "",
      chosenWord: this.props.selectedWord.word,
      chosenDefinition: this.props.selectedWord.definition,
      hangmanImages: ["https://i.imgur.com/SSZYnHL.png", "https://i.imgur.com/cc1GLcT.png", "https://i.imgur.com/8cZAcXF.png", "https://i.imgur.com/W1Hx7Ow.png", "https://i.imgur.com/7xdTxUJ.png", "https://i.imgur.com/urZJPRc.png", "https://i.imgur.com/Pob9VWl.png"],
      data: {},
      firstGiphyUrl: "",
      secondGiphyUrl: "",
      thirdGiphyUrl: "",
      fourthGiphyUrl: ""
    }
    this.setState = this.setState.bind(this);
  }

    apiCall(selectedWord) {
      let state = this.state
      let dataHolder = {}
      const queryUrl= "https://api.giphy.com/v1/gifs/search?api_key=44bb524d90374ef48090c7de2ce02d06&q=" + this.state.chosenWord
      fetch(queryUrl)
      .then(function(response){
        response.json().then(function(data){
          state.data = data.data
          console.log(state.data);
        })
      })

    };

    componentDidMount(){
        console.log("Hangman Working")
        console.log(this.state.data);
        this.giphyTimer();
    }

    componentWillMount(){
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
        this.blankGenerator(this.state.chosenWord);
        console.log(this.state.blankWord)

        this.apiCall()
    }

    //Generates a bunch of underscores
    blankGenerator = (word) => {
        for (let i = 0; i < word.length; i++){
            this.state.blankWord.push("_ ");
        }
    }

    //Don't judge me.
    giphyTimer = () => {
      let that=this
      setTimeout(function(){
        that.setState({
          firstGiphyUrl: that.state.data[0].images.fixed_height.url,
          secondGiphyUrl: that.state.data[1].images.fixed_height.url,
          thirdGiphyUrl: that.state.data[2].images.fixed_height.url,
          fourthGiphyUrl: that.state.data[3].images.fixed_height.url
        })
        console.log("Firing")
      }, 150)

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
        //sanitize input

        console.log(this.state.data[0].images.fixed_height.url);
        const letter = String.fromCharCode(event.keyCode).toLowerCase();

        //runs through the Hangman code
        this.hangman(this.state.chosenWord, letter);

        //Ensures the user won't be counted wrong for guessing a letter that's capitalized in the word
        let blankWordLowerCase = []
        for (let i = 0 ; i < this.state.blankWord.length; i++) {
           blankWordLowerCase[i] = this.state.blankWord[i].toLowerCase();
        };
        //if (you can't find what key you pressed in the "already guessed" index) AND (the character code of your letter is lower-case-A or later)
        //AND (the character code of your letter is lower-case-Z or earlier AND (the guess isn't part of the displayed word yet))
        if(this.state.guesses.indexOf(letter) === -1 && letter.charCodeAt() > 93 && letter.charCodeAt() < 123 && blankWordLowerCase.indexOf(letter) === -1){
            let newGuess = this.state.guesses;
            newGuess.push(letter);
            this.setState(this.state.guesses: newGuess);
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

  render() {
    return (<div className="body" style={ sectionStyle }>
      <Container fluid={true} className="body">
        <Row>
        <Col className="Navplace">
        <Nav vertical>
        <NavItem>
          <NavLink href="#" active>Link</NavLink>
        </NavItem>
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    </Col>
    <Col>


        <Container>

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
            <Card className="dynamicImg">
              <CardImg top="top" width="100%" src={this.state.hangmanImages[this.state.guessesSoFar]} alt=""/>
            </Card>
          </Col>
          </Row>

          <Row>
          <Col>
            <Card className="correctLetters">
              <CardBody>
                <CardTitle className="spanTitle">
                  <span>{this.state.blankWord}</span>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="usedLetters">
              <CardBody>
                <CardTitle className="spanTitle">
                  <span>{this.state.guesses}</span>
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
              <Button className="Play" tag="a" color="success" size="large" href="/" target="_blank">Play Again!</Button>
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
            <Row>
              <Col>
                <Card className="Giphy1">
                  <CardImg top="top" width="100%" src={this.state.firstGiphyUrl} alt="Card image cap" className="giphyImg"/>
                </Card>
              </Col>
              <Col>
                <Card className="Giphy2">
                  <CardImg top="top" width="100%" src={this.state.secondGiphyUrl} alt="Card image cap" className="giphyImg"/>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="Giphy3">
                  <CardImg top="top" width="100%" src={this.state.thirdGiphyUrl} alt="Card image cap" className="giphyImg"/>
                </Card>
              </Col>
              <Col>
                <Card className="Giphy4">
                  <CardImg top="top" width="100%" src={this.state.fourthGiphyUrl} alt="Card image cap" className="giphyImg"/>
                </Card>
              </Col>
            </Row>
          </Row>

      </Col>

      </Row>
      </Container>
    </Col>
  </Row>
    </Container>
  </div>)
  }
}

export default ContainerComponent;
