import Home from './pages/Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const AppContainer=styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: linear-gradient(#e66465, #9198e5);
  background-repeat: no-repeat;

`

function App() {
  return (
    <AppContainer>
        <NavBar />
        <Home />
    </AppContainer>
  );
}

export default App;
