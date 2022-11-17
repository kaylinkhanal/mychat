import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../../reducers/userSlice';


const UserChat = ()=> {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const {username} = useSelector(state=> state.users)

  
  const out=()=>{
    dispatch(setLogout())
    navigate('/');
    }
    
  return (
    <div className='loginp'>
       <h1>Welcome {username}</h1>
      
       <button onClick={out}>Logout</button>
    </div>
    )
}

export default UserChat