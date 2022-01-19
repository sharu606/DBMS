import "./semCard.css";
import { Container } from "react-bootstrap";

function SemCard(props) {
  return (
    <Container
      className="sem-btn"
      onClick={() => {
        props.onClick(props.num);
      }}
    >
      <div className="sem-title rounded border p-3 shadow">
        Semester {props.num}
      </div>
    </Container>
  );
}

export default SemCard;
