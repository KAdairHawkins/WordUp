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

class ContainerComponent extends Component {
  render() {
    return (<div>
      <Container fluid={true}>
        <Row>
          <Col>
            <h1>Hangman Div</h1>
            <Row>
              <Col>
                <Card>
                  <CardImg top="top" width="100%" src="./images/Hangman_game.jpg" alt="Card image cap"/>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardImg top="top" width="100%" src="./Hangman-0.png" alt="Card image cap"/>
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
                  <Card>
                    <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt="Card image cap"/>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt="Card image cap"/>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt="Card image cap"/>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=300&h=275" alt="Card image cap"/>
                  </Card>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button tag="a" color="success" size="large" href="http://reactstrap.github.io" target="_blank">
              Play Again!
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>)
  }
}

export default ContainerComponent;
