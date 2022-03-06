import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Side(props) {
  const { title } = props;
  return (
    <ListGroup>
      <ListGroup.Item active>{title}</ListGroup.Item>
      <ListGroup.Item>Link 2</ListGroup.Item>
      <ListGroup.Item>This one is a button</ListGroup.Item>
    </ListGroup>
  );
}
