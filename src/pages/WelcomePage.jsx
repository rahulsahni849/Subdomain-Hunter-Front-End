import SearchBox from "../components/SearchBox";
import styled from "styled-components";
import TableComponent from "../components/TableComponent";
import { Link } from "react-router-dom";

const Container=styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 100vh;
    align-items: center;
    justify-content: space-around;
`;
const Title=styled.h2`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgba(0,0,0,0.8);
    padding: 10px;
    text-align: center;
    margin: 10px;
    font-size: 50px;
    color: #bbcfd2;
    text-shadow: 2px 2px red;
`;

function WelcomePage() {
  return (
    <Container>
        <Title>
            Welcome To....
            <p></p>
            Sub-Domain Hunter
        </Title>
    </Container>
  );
}

export default WelcomePage;
