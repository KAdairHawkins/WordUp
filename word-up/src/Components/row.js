import React, { Component } from 'react';
import {
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import './row.css';

class Row extends Component {
  render() {
    return (
      <div>
          <Col>
            <h1>Can you see me now?</h1>
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
      </div>
    );
  }
}

export default Row;
