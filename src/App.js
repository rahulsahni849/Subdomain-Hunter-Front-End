import Home from './pages/Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

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
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </AppContainer>
  );
}

export default App;
