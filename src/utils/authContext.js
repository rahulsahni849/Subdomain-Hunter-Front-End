import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext=createContext()

export default AuthContext;

export const AuthProvider=(({children})=>{
    
    let [user,setUser] = useState(()=> localStorage.getItem('authTokens')!=null?jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access):null);
    let [authTokens,setAuthTokens] = useState(()=> (localStorage.getItem('authTokens')!=null?JSON.parse(localStorage.getItem('authTokens')):null));

    let navigate = useNavigate();

    const login=async (e)=>{
        e.preventDefault()
        let response = await fetch("http://127.0.0.1:8000/api/user/login/",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({'email':e.target.email.value,'password':e.target.password.value})
        })

        let resp = await response.json()
        if(resp.data!=null && resp.data.status==200 ){
            setAuthTokens(resp.data.token)
            setUser(jwt_decode(resp.data.token.access))
            localStorage.setItem("authTokens",JSON.stringify(resp.data.token));
            navigate("/home");
        }else{
            //console.log(resp)
            alert(resp.data.error);
        }
    }


    const register=async (e)=>{
        e.preventDefault()
        // console.log(e)
        let response = await fetch("http://127.0.0.1:8000/api/user/register/",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({'email':e.target.email.value,'name':e.target.username.value,'password':e.target.password.value,'password2':e.target.password.value})
        })

        let resp = await response.json()
        if(resp.data!=null && resp.data.status==201 ){
            setAuthTokens(resp.data.token)
            setUser(jwt_decode(resp.data.token.access))
            localStorage.setItem("authTokens",JSON.stringify(resp.data.token));
            navigate("/home");
        }else{
            console.log(resp)
            alert(JSON.stringify(resp.errors));
        }
    }

    const logout=()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate("/");
    }


    let contextData={
        login:login,
        register:register,
        logout:logout,
        user:user,
        authTokens:authTokens
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
});