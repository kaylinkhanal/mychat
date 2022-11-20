import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import io from 'socket.io-client';

const socket = io("http://localhost:3001");
function Chat() {
  const { currentSelectedUserDetails } = useSelector((state) => state.message);
  const {username} = useSelector(state=> state.users)
  const [msgList, setMsgList] = useState([])

useEffect(()=>{
  socket.on('connection', ()=>{
      console.log("connected to server")
  })
},[])

useEffect(()=>{
  socket.on('message', function(data, json) {
    const originalMsgList = msgList
    originalMsgList.push(json)
    console.log(originalMsgList)
    setMsgList(originalMsgList)
  });
})
const [message, setMessage] = useState('')

const triggerMessageSend=()=>{
  socket.emit('chat', { sentBy: username , 
  recepient: currentSelectedUserDetails.username,
  date: Date.now(),
  message: message
  })
}

//  const usersList = [{sentBy: 'kyalin', message: 'hello k cha nimisha'},
//  {sentBy: 'nimisha', message: 'thik cha sir'},
//  {sentBy: 'nimisha', message: 'tapai ko k cha'}
// ]
  return (
    <div>
    <div className='chat'>
      <div>
      {currentSelectedUserDetails.username}
      </div>

      {JSON.stringify(msgList)}
      {msgList.map((item,idx)=>{
            return (
              <div style={{backgroundColor: 
                currentSelectedUserDetails.username === item.sentBy 
                ? 'aqua' : 'grey',
                  height:'50px',
                  margin:'10px',
                  marginRight: currentSelectedUserDetails.username === item.sentBy ? '50px' : null}}
                 >
                {item.message}
              </div>
            )
      })}
      
    </div>
    <div>
    <input placeholder="message" onKeyUp={(e)=>setMessage(e.target.value)}/>
    <button onClick={()=>triggerMessageSend()}>send </button>
    </div>
    </div>
  )
}

export default Chat