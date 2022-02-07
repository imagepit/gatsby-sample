import React from 'react';
import { ListGroup } from 'react-bootstrap';

function LeftSide() {
  return (
    <ListGroup>
      <ListGroup.Item active>最新記事</ListGroup.Item>
      <ListGroup.Item>Link 2</ListGroup.Item>
      <ListGroup.Item>This one is a button</ListGroup.Item>
    </ListGroup>
  );
}

export default LeftSide;
