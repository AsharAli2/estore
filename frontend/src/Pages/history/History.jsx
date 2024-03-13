import {
  Card,
  Container,
  MenuItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function History() {
  const [detail, setdetail] = useState([]);
  let { userName } = useParams();
  const [open, setopen] = useState(false);
  const fetchproducts = async () => {
    const response = await fetch(
      `http://localhost:8000/order/history/${userName}`
    );
    const data = await response.json();
    setdetail(data.history);
  };
  useEffect(() => {
    fetchproducts();
  }, []);
  setTimeout(() => {
    setopen(true);
  }, 3000);

  return (
    <>
      <Container>
        <h1 style={{ fontFamily: "cursive" }}>Welcome {detail.userName}</h1>

        {detail.products ? (
          <>
            <h3>Your Previously Purchased Items</h3>
            <Stack spacing={4} direction="row" useFlexGap flexWrap="wrap">
              {detail.products.map((item) => {
                return (
                  <>
                    <Card
                      sx={{
                        maxWidth: 240,
                        maxHeight: 300,
                      }}
                    >
                      <MenuItem sx={{ justifyContent: "center" }}>
                        <Typography
                          variant="inherit"
                          noWrap
                          style={{
                            color: "black",
                            fontFamily: "monospace",
                          }}
                        >
                          Product
                        </Typography>
                      </MenuItem>
                      <MenuItem>
                        <Typography
                          variant="inherit"
                          noWrap
                          style={{ color: "blue" }}
                        >
                          {item.pname}
                        </Typography>
                      </MenuItem>
                      <Typography
                        variant="body2"
                        style={{
                          color: "green",
                          fontSize: "15px",
                          paddingLeft: "16px",
                        }}
                      >
                        Rs.{item.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          color: "green",
                          fontSize: "15px",
                          paddingLeft: "16px",
                        }}
                      >
                        Date: {item.date}
                      </Typography>
                    </Card>
                  </>
                );
              })}
            </Stack>
          </>
        ) : (
          <>
            {open && (
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
                  Your History is empty
                </h1>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
}
