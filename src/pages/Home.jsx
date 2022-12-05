import SearchBox from "../components/SearchBox";
import styled from "styled-components";
import TableComponent from "../components/TableComponent";


const HomeContainer=styled.div`
    display: flex;
    flex-direction: column;
`;
const HomeName=styled.h2`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgba(0,0,0,0.8);
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    margin: 10px;
`;

function Home() {
  return (
    <HomeContainer>
        <HomeName>
            Sub-Domain Finder
        </HomeName>
        <SearchBox />
        <TableComponent />
    </HomeContainer>
  );
}

export default Home;
