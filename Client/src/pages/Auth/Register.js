import{useState} from 'react'



const Register=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmpassword]=useState("");
    const [number,setNumber]=useState("");
const collectData=async ()=>{
    // console.log(name,pass,conpass,number)
    let result= await fetch('http://localhost:5000/register',{
    method:'post',
    body:JSON.stringify({username,password,confirmpassword,number}),
    headers:{
        'Content-type':'application/json'
    }
});
result=await result.json()
console.log(result)
    
}
    return (
        <>
    <div className="head"><h1>Register Page</h1></div>
    
    <div className="reg">
    <input type="text" placeholder="userName" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
    <input type="password" placeholder="ConfirmPassword" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/><br/>
    <input type="number" placeholder="number" value={number} onChange={(e)=>setNumber(e.target.value)}/><br/>
    <button onClick={collectData}>Register Now</button>
    
 
     </div>
     </>
     )
}

export default Register;