import React, { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Snackbar } from "@mui/material";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const textchange = (ev) => {
    const { value, name } = ev.target;
    if (name === "userName") {
      setuserName(value);
    }
    if (name === "password") {
      setpassword(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "phone") {
      setPhone(value);
    }
    if (name === "address") {
      setAddress(value);
    }
  };
  const submit = async () => {
    const userData = { userName, password, Email, Phone, Address };
    const response = await fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (data.user) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      setState({ vertical: "top", horizontal: "center", open: true });
    }
  };
  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }
    setState({ open: false, vertical: "top", horizontal: "center" });
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <input
          type="username"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={textchange}
        />
        <input
          type="Password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={textchange}
        />
        <input
          type="Email"
          name="email"
          placeholder="Email"
          value={Email}
          onChange={textchange}
        />
        <input
          type="Phone"
          name="phone"
          placeholder="Phone"
          value={Phone}
          onChange={textchange}
        />
        <input
          type="Address"
          name="address"
          placeholder="Address"
          value={Address}
          onChange={textchange}
        />
        <Button
          onClick={submit}
          disabled={
            !userName.length ||
            !password.length ||
            !Email.length ||
            !Phone ||
            !Address
          }
        >
          Register
        </Button>
        {/* Will show after successfully registered */}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          onClose={handleClose}
        >
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            User Successfully Registered
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default RegisterPage;
