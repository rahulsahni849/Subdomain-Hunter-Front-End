import styled from "styled-components";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Container } from "react-bootstrap";

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
  return (
    <Container>
        <LoginContainer>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <Title><h3>Log In</h3></Title>
                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                </div>
                <MDBBtn className="mb-4">Sign in</MDBBtn>
            </MDBContainer>
        </LoginContainer>
    </Container>
  );
}

export default Login;