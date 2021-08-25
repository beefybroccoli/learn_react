import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer(props) {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact US</Nav.Link>
        </Container>
      </Navbar>
      <p>Copyright 2021</p>
    </div>
  );
}
