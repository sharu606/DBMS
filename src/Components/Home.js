import "./Home.css";
import { Row, Col } from "react-bootstrap";
import SemList from "./semester/semester_list/semList";

function Home() {
  return (
    <div>
      <Row className="g-0">
        <Col xs={3}>
          <SemList></SemList>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Home;
