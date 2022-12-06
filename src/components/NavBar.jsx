import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../utils/authContext';

const LogOutDiv=styled.div`
    font-size: bold;
`;

const NameTitle=styled.div`
  display: flex;
  color: white;
  margin-left: 20px;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`
const CustomButton=styled.button`
    border-color: transparent;
    background-color: transparent;
    color: white;
    margin: 10px;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
`

const LoginDiv=styled.div`
  margin: 10px;
  padding: 5px;
  font-size: 15px;
  
`

const RegisterDiv=styled.div`
  margin: 10px;
  padding: 5px;
`

const ActionDiv=styled.div`
  //border: 1px solid red;
  display: flex;
  color: white;
  margin-left: 20px;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`

function NavBar() {
  const {logout,user} = useContext(AuthContext)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/home" style={{textDecoration:'None',color:"white"}}>Sub-Domain Hunter</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            {user &&
              <NameTitle>
              Signed in as : <i style={{color:'red',marginLeft:"10px"}}>{user.username}</i>
            </NameTitle>
            }
          <ActionDiv>
            {user &&
            <LogOutDiv>
                    <CustomButton onClick={logout}>Logout</CustomButton>
              </LogOutDiv>
            }
            {!user &&
              <><LoginDiv>
              <Link style={{textDecoration:'none',color: "white"}} to="/login">Login</Link>
              </LoginDiv>
              <RegisterDiv>
                <Link style={{textDecoration:'none',color: "white"}}  to="/register">Register</Link>
              </RegisterDiv></>
              }
          </ActionDiv>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;