import "./Home.css";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SemList from "./semester/semester_list/semList";

function Home() {
  return (
    <div>
      <Row className="g-0">
        <Col xs={3}>
          <SemList></SemList>
        </Col>
        <Col className="ok">ok</Col>
      </Row>
    </div>
  );
}

export default Home;
