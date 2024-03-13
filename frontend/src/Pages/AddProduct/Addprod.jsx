import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./addprod.css";
import { useNavigate } from "react-router-dom";
export default function Addprod() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));

  const textchange = (ev) => {
    const { value, name } = ev.target;
    if (name == "name") {
      setname(value);
    }
    if (name == "Price") {
      setprice(value);
    }
    if (name == "Image") {
      setimage(value);
    }
    if (name == "Description") {
      setdescription(value);
    }
  };

  const submit = async () => {
    const productdata = { name, price: +price, image, description };
    const response = await fetch("/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productdata),
    });
    console.log(response);
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Container className="Container">
        <h2>Add Product</h2>

        <TextField
          fullWidth
          value={name}
          name="name"
          onChange={textchange}
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
        />

        <TextField
          fullWidth
          name="Price"
          onChange={textchange}
          value={price}
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          fullWidth
          name="Image"
          onChange={textchange}
          label="Image"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          fullWidth
          onChange={textchange}
          name="Description"
          value={description}
          multiline
          rows={4}
          id="outlined-basic"
          label="Description"
          variant="outlined"
        />
        <Button fullWidth onClick={submit} variant="contained">
          Add Product
        </Button>
      </Container>
    </>
  );
}
