import React, { useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '../utils/authContext';


const Title=styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 20px;
`;

const RegisterContainer=styled.div`
    display: flex;
    //background:linear-gradient(#d8ecf0,#d0ebf0);
    background-color: rgba(255,255,255,0.2);
    color: black;
    border-radius: 20px;
    padding: 10px;
    margin: 40px;
`;

function Register() {
 const {register} = useContext(AuthContext);
 return (
    <Container>
        <form onSubmit={register}>
            <RegisterContainer>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    <Title><h3>Sign Up</h3></Title>
                    <span>Email Address</span>
                    <MDBInput wrapperClass='mb-4' id='form1' type='email' name="email"/>
                    <span>User name</span>
                    <MDBInput wrapperClass='mb-4' id='form1' type='text' name="username"/>
                    <span>Password</span>
                    <MDBInput wrapperClass='mb-4' id='form2' type='password' name="password"/>
                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        {/* <a href="!#">Forgot password?</a> */}
                    </div>
                    <MDBBtn className="mb-4">Sign in</MDBBtn>
                </MDBContainer>
            </RegisterContainer>
        </form>
    </Container>
  );

}

export default Register;