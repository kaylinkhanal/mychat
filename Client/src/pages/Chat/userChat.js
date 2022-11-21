import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList } from "../../reducers/messageSlice";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";

const UserChat = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.users);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => dispatch(setUsersList(data.userList)));
  }, []);

  return (
    <div className="user-chat">
      <div className="cont">
        <Sidebar userList={userList}></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default UserChat;
