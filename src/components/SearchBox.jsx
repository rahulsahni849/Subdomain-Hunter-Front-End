import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import TableComponent from './TableComponent';
import { useContext, useState } from 'react';
import AuthContext from '../utils/authContext';
import Spinner from 'react-bootstrap/Spinner';
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
const LoaderContainer=styled.div`
    /* border: 1px solid black; */
    padding: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
function SearchBox() {

    const {authTokens} = useContext(AuthContext)
    const [tableData,setTableData] = useState(null);
    const [domain,setDomain] = useState(null);
    const [status,setStatus]=useState(false);

    const searchClick= async (e) =>{
        e.preventDefault()
        const domain = e.target.domain_name.value
        setDomain(domain)
        if(domain==="" || domain==null){
            alert("Field should not be empty")
            return;
        }

        const url = "http://127.0.0.1:8000/api/domain_service/subdomains/"
        setStatus(true)
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                'Authorization':`Bearer ${authTokens.access}`
            },
            body:JSON.stringify({"name":domain})})
        const resp = await response.json()
        if(resp.data!=null && resp.data.status==200){
            // console.log(resp.data.result.length)
            setStatus(false)
            if(resp.data.result.length===0){
                alert("No subdomains found!")
                setTableData(null)
                return ;
            }
            console.log(resp.data.result)
            setTableData(resp.data.result)
        }
    }
  return (
    <div style={{background:"#9198e5"}}> 
    {/* style={{background: "linear-gradient(#e66465, #9198e5)",backgroundRepeat: "no-repeat"}} */}
    <Container >
        <Form onSubmit={searchClick}>
            <FormContainer>
                <InputFormContainer>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search Any Domain.....</Form.Label>
                        <Form.Control type="text" name="domain_name" placeholder="Enter any domain name" />
                    </Form.Group>
                </InputFormContainer>
                <ButtonFormContainer>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </ButtonFormContainer>
                
            </FormContainer>
            <LoaderContainer>
                {status && <Spinner animation="border" role="status"></Spinner>}
            </LoaderContainer>
        </Form>
        
    </Container>
    
     {tableData!=null && <TableComponent domain={domain} data={tableData}/>}
    </div>
  );
}

export default SearchBox;