import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
const _ = require('lodash');
const moment = require('moment');

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
  socket.on('message', function(data) {
    setMsgList(oldArray => [...oldArray, data]);

    // console.log(data)
    // const z = _.uniqBy(data, 'messageId');
    // console.log(z)
  })
}, [socket])

const [message, setMessage] = useState('')

const triggerMessageSend=()=>{
  socket.emit('chat', { sentBy: username , 
  recepient: currentSelectedUserDetails.username,
  date: moment().format('LLLL'),
  message: message,
  messageId: uuidv4()
  })
}

  return (
    <div>
    <div className='chat'>
      <div>
      {currentSelectedUserDetails.username}
      </div>
    {(_.uniqBy(msgList, 'messageId')).map((item,idx)=>{
            return (
              <div style={{backgroundColor: 
                currentSelectedUserDetails.username === item.sentBy 
                ? 'aqua' : 'grey',
                  height:'50px',
                  margin:'10px',
                  marginRight: currentSelectedUserDetails.username === item.sentBy ? '50px' : null}}
                 >
                {item.message}
                <h4>{ moment(item.date).fromNow()}</h4>
              </div>
            )
      })
    } 
      
    </div>
    <div>
    <input placeholder="message" onKeyUp={(e)=>setMessage(e.target.value)}/>
    <button onClick={()=>triggerMessageSend()}>send </button>
    </div>
    </div>
  )
}

export default Chat