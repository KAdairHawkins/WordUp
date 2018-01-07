import React, { Component } from 'react';
import {
  Container,
  Col,
  Button
} from 'reactstrap';
import Row from './row.js';
import './row.css';

class Wrapper extends Component {
  render() {
    return (
      <div>
          <Row/>
      </div>
    );
  }
}

export default Wrapper;
