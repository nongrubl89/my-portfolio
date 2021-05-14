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
              <div className="text-center text-md-left mb-1 ml-md-4">
                <Button
                  id={props.projectId}
                  className="mr-1 border-0 text-dark shadow-sm"
                >
                  <a href={props.linkToProject}>
                    <i class="fas fa-external-link-alt p-1"></i>
                    Live Project
                  </a>
                </Button>
                <Button
                  id={props.codeId}
                  className="border-0 text-dark shadow-sm"
                >
                  <a href={props.linkToCode}>
                    <i className="fas fa-code-branch p-1"></i>
                    Codebase
                  </a>
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
