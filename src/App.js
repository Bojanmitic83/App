import React, { useState } from "react";
import Axios from "axios";
import Login from "./components/Login/Login";


function App() {

    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")

    const[loginStatus,setLoginStatus] = useState("")

    const login =()=>{
        Axios.post("http://dev.hospitality.appmodule.tv:5001/api-docs/swagger/#/Account/login",{
            username: username,
            password: password
        })
        .then((res)=>{
            // if(res.data.message){
            //     setLoginStatus(res.data.message)
            // }else{
            //     setLoginStatus(res.data[0].username)
            // }
            console.log(res);
        })
    }



    return (
        <div>
            <Login setUsername={setUsername} setPassword={setPassword} login={login}/>
        </div>
    )
}


export default App;