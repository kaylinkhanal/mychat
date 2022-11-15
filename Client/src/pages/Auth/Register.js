import {useState} from 'react'



const Register=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmpassword]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const collectData=async ()=>{
    let result= await fetch('http://localhost:3001/register',{
    method:'post',
    body:JSON.stringify({username,password,phoneNumber: number, email}),
    headers:{
        'Content-type':'application/json'
    }
    });
    result=await result.json()
    }

    return (
      <>
        <div className="head">
          <h1>Register Page</h1>
        </div>
        <div className="reg">
          <input
            type="text"
            placeholder="userName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="ConfirmPassword"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <button onClick={collectData}>Register Now</button>
        </div>
      </>
    );
}

export default Register;