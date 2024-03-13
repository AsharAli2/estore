import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Snackbar } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);
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
  };
  const submit = async () => {
    const userData = { userName, password };

    const response = await fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    setdata(data);
    if (data.User) {
      localStorage.setItem("user", JSON.stringify(data.User.isUser));
      localStorage.setItem("token", JSON.stringify(data.token));

      setTimeout(() => {
        navigate("/");
      }, 3000);
      setState({ vertical: "bottom", horizontal: "center", open: true });
    }
    if (data.message == "Wrong Password") {
      setState({ vertical: "bottom", horizontal: "center", open: true });
    }
    if (data.message == "No User Found") {
      setState({ vertical: "bottom", horizontal: "center", open: true });
    }
  };
  const handleClose = (event, reason) => {
    setState({ open: false, vertical: "top", horizontal: "center" });
  };
  console.log(data);
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="username"
          name="userName"
          required
          placeholder="Username"
          value={userName}
          onChange={textchange}
        />
        <input
          required
          type="Password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={textchange}
        />

        <Button
          onClick={submit}
          disabled={!userName.length || !password.length}
        >
          Signin
        </Button>
        <div>
          <h5>---------------- New to Estore ----------------</h5>
        </div>

        <Button className="register" onClick={() => navigate("/Register")}>
          Create your Estore account
        </Button>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={2000}
          key={vertical + horizontal}
          onClose={handleClose}
        >
          {data.User ? (
            <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
              {data.message}
            </Alert>
          ) : (
            <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
              {data.message}
            </Alert>
          )}
        </Snackbar>
      </div>
    </div>
  );
};

export default LoginPage;
