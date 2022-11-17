import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
function Chat() {
  const { currentSelectedUserDetails } = useSelector((state) => state.message);
  const [message, setMessage] = useState('')
  const triggerMessageSend = () => {
    console.log(message)
  }

  return (
    <>
    <div className='chat'>
      <div>
      {currentSelectedUserDetails.username}
      </div>
        <input placeholder="message" onKeyUp={(e)=>setMessage(e.target.value)}/>
        <button onClick={()=>triggerMessageSend()}>send </button>
    </div>
    </>
  )
}

export default Chat