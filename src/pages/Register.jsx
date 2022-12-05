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
 
 return (
    <Container>
        <RegisterContainer>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <Title><h3>Sign Up</h3></Title>
                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
                <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                </div>
                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
            </MDBContainer>
        </RegisterContainer>
    </Container>
  );
}

export default Register;