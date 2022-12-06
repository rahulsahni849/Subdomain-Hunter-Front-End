import WelcomePage from '../pages/WelcomePage';
import AuthContext from './authContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


const PrivateRoute=({children,...rest}) => {
    const {user} = useContext(AuthContext)
    const nav = useNavigate();
    if(user){
        return children
    }
    window.location="/"
    return <WelcomePage />
}

export default PrivateRoute;