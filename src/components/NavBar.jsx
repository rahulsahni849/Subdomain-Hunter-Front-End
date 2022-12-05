import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogOutDiv=styled.div`
    margin-left: 90px;
    font-size: bold;
`;

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/home" style={{textDecoration:'None',color:"white"}}>Sub-Domain Hunter</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: Rahul sahni
          </Navbar.Text>
          <LogOutDiv>
            <Navbar.Text>
                <a href="#logout">Logout</a>
                <div>
                    <Link to="/login">login</Link>
                    <Link to="/register">register</Link>
                </div>
            </Navbar.Text>
          </LogOutDiv>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;