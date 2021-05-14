import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

export default function CardComponent(props) {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col md={8}>
        <Card className="border-0 mb-3">
          <Row className="d-flex justify-content-md-end justify-content-xs-center align-items-center no-gutters">
            <Col className="text-center text-md-right">
              <Card.Title>{props.title}</Card.Title>
            </Col>
            <Col md={8}>
              <Card.Body className="text-center text-md-left">
                <Card.Text>{props.body}</Card.Text>
              </Card.Body>
              <div className="text-center text-md-left mb-1">
                <Button className=" mr-1 button-in-card border-0 text-dark shadow-sm">
                  Live Project
                </Button>
                <Button className="button-in-card border-0 text-dark shadow-sm">
                  Codebase
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
