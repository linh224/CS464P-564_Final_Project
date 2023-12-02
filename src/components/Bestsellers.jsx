import React from 'react';
import IsbnCategory from './IsbnCategory';
import { Col } from 'react-bootstrap';

function Bestsellers() {
  return (
    <Col className='d-flex w-100'>
      <IsbnCategory />
    </Col>
  );
}

export default Bestsellers;
