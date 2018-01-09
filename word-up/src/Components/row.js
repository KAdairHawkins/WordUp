import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';


class RowComponent extends Component {
  render() {
    return (
      <div>
        <Container fluid = {true}>
          <Row>
            <Col>
              <h1>Welcome to React</h1>
              <p>
                <Button
                  tag="a"
                  color="success"
                  size="large"
                  href="http://reactstrap.github.io"
                  target="_blank"
                >
                  View Reactstrap Docs
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default RowComponent;
