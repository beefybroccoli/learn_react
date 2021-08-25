import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar(props) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">African Marketplace</Navbar.Brand>
        <Nav.Link href="/product">Product</Nav.Link>
        <Nav.Link href="/inventory">Inventory</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Container>
    </Navbar>
  );
}
