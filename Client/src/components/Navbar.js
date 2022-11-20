import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../reducers/userSlice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const out = () => {
    dispatch(setLogout());
    navigate("/");
  };
  const { username } = useSelector((state) => state.users);
  return (
    <div className="navbar">
      <span className="name">MyChat </span>
      <div className="user">
        <img
          src="https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200446/36649713-man-avatar-user-picture-cartoon-character-vector-illustration.jpg"
          alt=""
        />
        <span>{username}</span>
        <button className="logout" onClick={() => out()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
