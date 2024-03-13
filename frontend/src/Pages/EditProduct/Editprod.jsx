import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./editprod.css";
export default function Editprod() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [SingleProduct, setSingleProduct] = useState({});
  let { id } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));

  const fetchsingleproduct = async () => {
    setLoading(true);

    const response = await fetch(`/products/${id}`);
    const data = await response.json();
    console.log(data.product);
    setSingleProduct(data.product);
    setLoading(false);
  };
  // console.log(SingleProduct.name);

  const textchange = (ev) => {
    const { value, name } = ev.target;
    setSingleProduct(() => {
      return {
        ...SingleProduct,
        [name]: value,
      };
    });
  };

  const submit = async () => {
    const productdata = { ...SingleProduct };
    const response = await fetch(`/products/edit/${id}`, {
      method: "PUT",
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
  useEffect(() => {
    fetchsingleproduct();
  }, []);

  return (
    <>
      <Container className="Container">
        <h2>Add Product</h2>

        <TextField
          fullWidth
          value={SingleProduct.name}
          name="name"
          onChange={textchange}
          variant="outlined"
        />

        <TextField
          fullWidth
          name="price"
          onChange={textchange}
          value={SingleProduct.price}
          variant="outlined"
        />
        <TextField
          fullWidth
          name="Image"
          onChange={textchange}
          value={SingleProduct.image}
          variant="outlined"
        />
        <TextField
          fullWidth
          onChange={textchange}
          name="description"
          value={SingleProduct.description}
          multiline
          rows={4}
          variant="outlined"
        />
        <Button fullWidth onClick={submit} variant="contained">
          Edit Product
        </Button>
      </Container>
    </>
  );
}
