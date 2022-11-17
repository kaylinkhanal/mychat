import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import io from 'socket.io-client';

const socket = io("http://localhost:3001");
function Chat() {
  const { currentSelectedUserDetails } = useSelector((state) => state.message);

useEffect(()=>{
  socket.on('connection', ()=>{
      console.log("connected to server")
  })
},[])

useEffect(()=>{
  socket.on('message', function(data, json) {
    console.log(data, json);
  });
})


const triggerMessageSend=()=>{
  socket.emit('chat', message )
}
  const [message, setMessage] = useState('')
 
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