import React, { Component } from 'react';
import {
  Container,
  Col,
  Row,
  Button
} from 'reactstrap';
import Line from './row.js';

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Container>
          <Line/>
        </Container>
      </div>
    );
  }
}

export default Wrapper;
