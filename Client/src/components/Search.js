import React from 'react'
import {useState} from 'react'

function Search() {
    const [username, setUsername] = useState('')

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
        
        <div className="userChat">
            <img src='https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200446/36649713-man-avatar-user-picture-cartoon-character-vector-illustration.jpg' alt="" />
            <div className="userChatInfo">
                <span>User 1</span>
                <p>Hello</p>
            </div>
        </div>

        <div className="userChat">
            <img src='https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200446/36649713-man-avatar-user-picture-cartoon-character-vector-illustration.jpg' alt="" />
            <div className="userChatInfo">
                <span>User 1</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default Search