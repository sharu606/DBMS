import React, { useState } from "react";
import "./Home.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SemList from "./semester/semester_list/semList";
import NotesShow from "./notesShow/notesShow";

function Home() {
  const [sem, setSem] = useState(1);

  function onSelectSemHandler(sem_no) {
    setSem(sem_no);
  }

  return (
    <div>
      <Row className="g-0">
        <Col xs={3}>
          <SemList onSelectSem={onSelectSemHandler}></SemList>
        </Col>
        <Col>
          <NotesShow sem={sem}></NotesShow>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
