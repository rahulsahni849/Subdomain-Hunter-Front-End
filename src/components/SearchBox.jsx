import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const FormContainer=styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
`;

const InputFormContainer=styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    flex: 7;
`

const ButtonFormContainer=styled.div`
    flex:1;
    margin:20px 10px 10px 10px;
    border: 1px solid black;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-self: center;
`
function SearchBox() {
  return (
    <Container>
        <Form>
            <FormContainer>
                <InputFormContainer>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search Any Domain.....</Form.Label>
                        <Form.Control type="text" placeholder="Enter any domain name" />
                    </Form.Group>
                </InputFormContainer>
                <ButtonFormContainer>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </ButtonFormContainer>
            </FormContainer>
        </Form>
    </Container>
  );
}

export default SearchBox;