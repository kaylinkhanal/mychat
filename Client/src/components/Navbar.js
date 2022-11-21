import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const out = () => {
    dispatch(setLogout());
    navigate("/");
  };
  const { username } = useSelector((state) => state.users);

  const addImg = async () => {
    const formData = new FormData();
    const requestOptions = {
      method: "POST",
      body: formData,
      dataType: "jsonp",
    };
    await fetch("http://localhost:3000/uploads/", requestOptions);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

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
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" name="avatar" onChange={handleFile} />
        </Form.Group>
        <button className="logout" onClick={() => addImg()}>
          Upload Avatar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
