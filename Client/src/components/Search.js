import React, {useState, useEffect}  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setUserSelectedDetails } from "../reducers/messageSlice";
function Search() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const {allUsers} = useSelector(state=> state.message)

    const getUsername = (e) => {
        console.log(e)
    }
    const onChange = (e) => {
        setUsername((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
        console.log(e.target.value)
    }

  return (
    <div className="search">
        <div className="searchForm">
        <input
            type="text"
            placeholder="Find a user"
            onKeyDown={getUsername}
            onChange={onChange}
            // value={username} 
        />
        </div>
        {/* {err && <span>User not found!</span>} */}
        {allUsers?.map((item,id)=>{
            return <div 
            onClick={()=> dispatch(setUserSelectedDetails(item))} 
            className="userChat">
            <img src='https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200446/36649713-man-avatar-user-picture-cartoon-character-vector-illustration.jpg' alt="" />
            <div className="userChatInfo">
                <span>{item.username}</span>
                {/* <p>Hello</p> */}
            </div>
        </div>
        })}
    </div>
  )
}

export default Search