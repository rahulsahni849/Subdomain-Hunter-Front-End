import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function SubDomainRender() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Sub-Domain Hunter</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Rahul sahni</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SubDomainRender;