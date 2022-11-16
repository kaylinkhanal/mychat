import React from 'react'
import { useSelector} from "react-redux";

const UserChat = ()=> {
  const {username} = useSelector(state=> state.users)
  return (
    <div>
       <h1>Welcome {username}</h1>
    </div>
    )
}

export default UserChat