import React, {Component} from 'react';
import {
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
  render() {
    return (<div>
      <Container fluid={true}>
        <Row>
{/* Hangman */}
          <Col>
            <Row>
              <Col className="hangmanTitle">
                <h1>Hangman</h1>
              </Col>
            </Row>
            <Row>
        {/* Images for Hangman */}
          <Col>
            <Card className="staticImg">
              <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt=""/>
            </Card>
          </Col>
          <Col>
            <Card className="dynamicImg">
              <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt=""/>
            </Card>
          </Col>
          </Row>

          <Row>
          <Col>
            <Card className="correctLetters">
              <CardBody>
                <CardTitle>
                  <span>Correct Letters</span>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="usedLetters">
              <CardBody>
                <CardTitle>
                  <span>Used Letters</span>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card body="body" className="text-center">
              <CardTitle className="word">This is where the word goes.</CardTitle>
              <CardText className="wordDefinition">This is where the definition goes.</CardText>
              <Button className="Play" tag="a" color="success" size="large" href="http://reactstrap.github.io" target="_blank">Play Again!</Button>
            </Card>
          </Col>
        </Row>
      </Col>



      <Col>
          {/* Giphy */}
          <Row>
            <Col></Col>
            <Col>
              <h1>Hints!</h1>
            </Col>
            <Col></Col>
            <Row>
              <Col>
                <Card className="Giphy1">
                  <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt="Card image cap"/>
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
          </Row>

      </Col>

      </Row>
    </Container>
  </div>)
  }
}

export default ContainerComponent;
