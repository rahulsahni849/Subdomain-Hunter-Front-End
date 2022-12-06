import styled from "styled-components";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBBadge
}
from 'mdb-react-ui-kit';
import { Container } from "react-bootstrap";
import AuthContext from "../utils/authContext";
import { useContext } from "react";
import { useRef } from "react";

const Title=styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 20px;
`;

const LoginContainer=styled.div`
    display: flex;
    //background:linear-gradient(#d8ecf0,#d0ebf0);
    background-color: rgba(255,255,255,0.2);
    color: black;
    border-radius: 20px;
    padding: 10px;
    margin: 40px;
    flex-direction: column;

`;
function Login() {
  const {login} = useContext(AuthContext)
 
  return (
    <Container>
        <LoginContainer>
          <form onSubmit={login}>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
                <Title><h3>Log In</h3></Title>
                <span>Email Address</span>
                <MDBInput wrapperClass='mb-4' id='form1' type='email' name="email"/>
                <span>Password</span>
                <MDBInput wrapperClass='mb-4' id='form2' type='password' name="password"/>
                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                </div>
                <MDBBtn className="mb-4">Sign in</MDBBtn>
            </MDBContainer>
          </form>
        </LoginContainer>
    </Container>
  );
}

export default Login;