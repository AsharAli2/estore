import React, { useState } from "react";
import "./Cart.css";
import cartcontext from "../../context/Cartcontext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useContext } from "react";
import {
  Backdrop,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ClassNames } from "@emotion/react";
export default function Cart() {
  const navigate = useNavigate();
  const CartItem = useContext(cartcontext);
  const { cartitem } = CartItem;
  const [name, setname] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  let price = 0;
  let productArr = [];
  cartitem.map((e) => {
    price = e.price + price;
    productArr.push(e.name);
  });
  const Discount = price * 0.02;
  const totalprice = price - Discount;
  const products = { pname: productArr, price: totalprice, date: new Date() };
  // console.log(userName);
  const submit = async () => {
    const userName = user.userName;
    const detail = { products, userName };
    const response = await fetch("/order/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detail),
    });
    const data = await response.json();

    setOpen(true);

    // if (!open) {
    //   navigate("/");
    // }
  };
  const handleClose = () => {
    setOpen(false);
    cartitem.length = 0;
  };
  return (
    <>
      {cartitem.length != 0 ? (
        <Grid
          container
          sx={{ m: 0, direction: "row-reverse", marginTop: "10px" }}
        >
          <Grid item xs={12} sm={9} md={9}>
            {cartitem.map((items) => {
              return (
                <>
                  <Stack
                    spacing={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <img src={items.image} height={"200"} />
                      </div>

                      <div
                        style={{
                          fontFamily: "cursive",
                          marginBottom: "10px",
                        }}
                      >
                        {items.name}
                      </div>
                      <div>Rs.{items.price}</div>
                    </div>
                  </Stack>
                </>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <div
              style={{ backgroundColor: "whitesmoke", borderRadius: "15px" }}
            >
              <h4
                style={{
                  color: "grey",
                  paddingLeft: "15px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  borderBottom: "1px dotted grey",
                  margin: "0px",
                }}
              >
                PRICE DETAILS
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                <p>Price ({cartitem.length} items)</p>
                <p>Rs.{price}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                <p>Discount</p>
                <p>Rs.{Discount}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0px 15px 15px 15px",
                  borderBottom: "1px dotted grey",
                }}
              >
                <p>Delivery Charges</p>
                <div style={{ display: "flex" }}>
                  <p style={{ textDecoration: "line-through" }}>Rs.250</p>
                  <p style={{ color: "green" }}>&nbsp;Free</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 15px 15px 15px",
                  borderBottom: "1px dotted grey",
                }}
              >
                <h3>Total Charges</h3>
                <h3>Rs.{totalprice}</h3>
              </div>
              <div style={{ textAlign: "center", paddingBottom: "15px" }}>
                <p style={{ color: "green", padding: "5px 15px 5px 15px" }}>
                  You will save Rs.{Discount} on this order
                </p>
                <Button variant="contained" onClick={submit}>
                  PROCEED TO CHECKOUT
                </Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    fontSize: "large",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "green", fontSize: "60px" }}
                      />
                      <h3>
                        Your Order is successfully placed.Our Rider will contact
                        you shortly
                      </h3>
                    </div>
                    <Button variant="contained" onClick={handleClose}>
                      OK
                    </Button>
                  </Paper>
                </Backdrop>
              </div>
            </div>
          </Grid>
        </Grid>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ maxHeight: "80vh", maxWidth: "100vw" }}
              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
              alt=""
            />
            <h1 style={{ position: "absolute", fontFamily: "cursive" }}>
              Your ECart is empty
            </h1>
          </div>
        </>
      )}
    </>
  );
}
