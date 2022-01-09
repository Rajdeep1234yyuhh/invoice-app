import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

const Login = ({auth,setAuth}) => {
    const history= useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit=()=>{
        if(username==="admin" && password==="123")
        {
            setAuth(true);
            history.push("/invoicer")
        }
        else
        {
            alert("wrong info")
        }
    }
    return (
        <div>
            <form style={{display:"flex", flexDirection:"column" , margin:"200px"}} onSubmit={handleSubmit}>
                <label className='w-full bg-200 rounded-lg p-3' htmlFor="user_name">User Name</label>
                <input className='w-full bg-blue-200 rounded-lg' onChange={(e) => setUsername(e.target.value)} type="text" />
                <label className='w-full bg-200 rounded-lg p-3' htmlFor="Password">Password</label>
                <input className='w-full bg-blue-200 rounded-lg' onChange={(e) => setPassword(e.target.value)} type="password" />
                <button className='bg-blue-500 rounded-lg shadow text-white py-2 px-6 border-2 border-blue-500 hover:bg-transparent transition-all duration-300 hover:text-blue-500 mt-5' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login
