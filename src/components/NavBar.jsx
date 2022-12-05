import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const LogOutDiv=styled.div`
    margin-left: 90px;
    font-size: bold;
`;

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Sub-Domain Hunter</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Rahul sahni</a>
          </Navbar.Text>
          <LogOutDiv>
            <Navbar.Text>
                <a href="#logout">Logout</a>
            </Navbar.Text>
          </LogOutDiv>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;