import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand  className="fs-2 p-3 fw-bold">Super To-Dos</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;