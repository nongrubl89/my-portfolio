import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardComponent from "./CardComponent";
import ProjectDescription from "./ProjectDescription";
import ProjectTitle from "./ProjectTitle";
import Link from "./Link.js";

const Project = React.forwardRef((props, ref) => {
  return (
    <Container fluid className="card-container pt-3 pb-3" ref={ref}>
      <CardComponent
        projectId="tdl-button"
        linkToCode="https://github.com/nongrubl89/react-to-do-list"
        linkToProject="http://lisaburgnon.com/react-to-do-list/"
        codeId="tdlgh-button"
        title="React To-Do List"
        body="A to-do list made with React. Users can create to-do projects and add tasks to the project. I used React-Bootstrap for the styling. I am currently working on adding sign-in with Google Firebase so users can save their tasks to Google's Realtime DB."
      />
      <CardComponent
        projectId="bt-button"
        codeId="btgh-button"
        title="Book Tracker"
        linkToCode="https://github.com/nongrubl89/Book-Tracker-App"
        linkToProject="http://lisaburgnon.com/Book-Tracker-App/"
        body="As a book nerd, I was excited to create an app where users can track what they're currently reading, and discover new books they might like. Users can track read and unread books, rate books, and discover other books by an author thanks to the New York Times books API."
      />
      <CardComponent
        projectId="cvg-button"
        linkToCode="https://github.com/nongrubl89/React-CV-Generator"
        linkToProject="http://lisaburgnon.com/React-CV-Generator/"
        codeId="cvggh-button"
        title="React CV Generator"
        body="This app takes the guesswork out of creating a resume. Users can input their information and the app will generate a resume that can be downloaded as a .pdf file"
      />
    </Container>
  );
});

export default Project;
