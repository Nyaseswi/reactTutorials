import React from 'react';
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  ButtonGroup,
  Button
} from 'reactstrap';

export default function NewProjects() {
  return (
    <React.Fragment>
      <h1>New Projects</h1>
      <Container>
      <Row className="my-4">
        <Col>
          <Alert color="primary">
            This is a primary alert!
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Card>
            <CardBody>
              This is the content of the card.
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <ButtonGroup>
            <Button color="primary">Left</Button>
            <Button color="secondary">Middle</Button>
            <Button color="primary">Right</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
    </React.Fragment>
  )
}
