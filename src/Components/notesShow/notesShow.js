import "./notesShow.css";
import { Container, Navbar } from "react-bootstrap";
import VideoCard from "./videoCard/videoCard";
import Toggle from "./toggle/toggle";

function NotesShow(sem) {
  return (
    <div>
      <Navbar className="p-1 m-0 nav border">
        <Container className="m-0 pl-2">
          <Navbar.Brand href="#">Notey</Navbar.Brand>
        </Container>
      </Navbar>
      <Toggle sem={sem}></Toggle>
      {/* <VideoCard></VideoCard> */}
    </div>
  );
}

export default NotesShow;
