import React from 'react'
import { useSelector} from "react-redux";
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';

const UserChat = ()=> {
  const {username} = useSelector(state=> state.users)
  return (
    <div className='user-chat'>
      <div className="cont">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
    )
}

export default UserChat