import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./category.css";
import { useNavigate } from "react-router";
export default function Category() {
  const navigate = useNavigate();

  return (
    <>
      {/* Heading */}
      <div style={{ marginBottom: "40px" }} id="Choose">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: { xs: "19px", sm: "24px", md: "29px", lg: "34px" },
          }}
        >
          Certified Pre-Owned Devices
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: { xs: "8px", sm: "10px", md: "12x", lg: "14px" },
          }}
        >
          Certified by our team of experts, backed with ESTORE's 1-2 Years
          Warranty!
        </Typography>
      </div>

      {/* Categories */}
      <Grid container>
        <Grid item xs={3}>
          <div
            className="image"
            style={{ paddingBottom: "2px", paddingRight: "2px" }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
              sx={{
                height: { xs: "15vh", sm: "30vh", md: "35vh", lg: "50vh" },
                width: "100%",
                cursor: "pointer",
              }}
            />
            <div style={{ position: "absolute", textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  m: 0,
                  color: "white",
                  textAlign: "center",
                  fontSize: { xs: "16px", sm: "22px", md: "28px", lg: "34px" },
                }}
              >
                Camera
              </Typography>
              <Button
                onClick={() => {
                  navigate("/Category/Camera");
                }}
                sx={{
                  borderBottom: "2px solid white",
                  color: "white",
                  fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "14px" },
                }}
                variant="text"
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div
            className="image"
            style={{ paddingBottom: "2px", paddingRight: "2px" }}
          >
            <Box
              component="img"
              src="https://static-01.daraz.pk/p/04b3c3f1c80194a1e0cc41623b386487.jpg"
              sx={{
                height: { xs: "15vh", sm: "30vh", md: "35vh", lg: "50vh" },
                width: "100%",
                cursor: "pointer",
              }}
            />
            <div style={{ position: "absolute", textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  m: 0,
                  color: "white",
                  textAlign: "center",
                  fontSize: { xs: "16px", sm: "22px", md: "28px", lg: "34px" },
                }}
              >
                Combo
              </Typography>
              <Button
                onClick={() => {
                  navigate("/Category/Combo");
                }}
                sx={{
                  fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "14px" },
                  borderBottom: "2px solid white",
                  color: "white",
                }}
                variant="text"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="image" style={{}}>
            <Box
              component="img"
              src="/phone.jpg"
              // sx={{ height: { lg: 580 }, width: { lg: 440 } }}
              sx={{
                height: { xs: "30vh", sm: "60vh", md: "70vh", lg: "100vh" },
                width: "100%",
                cursor: "pointer",
              }}
            />
            <div style={{ position: "absolute", textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  m: 0,
                  color: "white",
                  textAlign: "center",
                  fontSize: { xs: "16px", sm: "22px", md: "28px", lg: "34px" },
                }}
              >
                Phone
              </Typography>
              <Button
                onClick={() => {
                  navigate("/Category/Phone");
                }}
                sx={{
                  fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "14px" },
                  borderBottom: "2px solid white",
                  color: "white",
                }}
                variant="text"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="image" style={{ paddingBottom: "2px" }}>
            <Box
              component="img"
              src="https://img.freepik.com/premium-photo/black-wireless-headphones-isolated-black-background_95544-15.jpg"
              sx={{
                height: { xs: "15vh", sm: "30vh", md: "35vh", lg: "50vh" },
                width: "50%",
                paddingRight: "2px",
                paddingLeft: "2px",
                cursor: "pointer",
              }}
            />
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1525373698358-041e3a460346?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
              sx={{
                height: { xs: "15vh", sm: "30vh", md: "35vh", lg: "50vh" },
                width: "50%",
                cursor: "pointer",
              }}
            />
            <div
              style={{
                width: "50%",
                position: "absolute",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div style={{ width: "25%" }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    m: 0,
                    color: "white",
                    textAlign: "center",
                    fontSize: {
                      xs: "16px",
                      sm: "22px",
                      md: "28px",
                      lg: "34px",
                    },
                  }}
                >
                  Headset
                </Typography>
                <Button
                  onClick={() => {
                    navigate("/Category/Headphones");
                  }}
                  sx={{
                    fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "14px" },
                    borderBottom: "2px solid white",
                    color: "white",
                  }}
                  variant="text"
                >
                  Buy Now
                </Button>
              </div>
              <div style={{ width: "25%" }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    m: 0,
                    color: "white",
                    textAlign: "center",
                    fontSize: {
                      xs: "16px",
                      sm: "22px",
                      md: "28px",
                      lg: "34px",
                    },
                  }}
                >
                  Laptops
                </Typography>
                <Button
                  onClick={() => {
                    navigate("/Category/Laptops");
                  }}
                  sx={{
                    fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "14px" },
                    borderBottom: "2px solid white",
                    color: "white",
                  }}
                  variant="text"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="image" style={{ paddingLeft: "2px" }}>
            <Box
              component="img"
              src="https://png.pngtree.com/background/20230527/original/pngtree-monitor-with-black-backgrounds-and-black-reflections-picture-image_2762500.jpg"
              sx={{
                height: { xs: "15vh", sm: "30vh", md: "35vh", lg: "50vh" },
                width: "100%",
                cursor: "pointer",
              }}
            />
            <div style={{ position: "absolute", textAlign: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  m: 0,
                  color: "white",
                  textAlign: "center",
                  fontSize: { xs: "16px", sm: "22px", md: "28px", lg: "34px" },
                }}
              >
                Monitors
              </Typography>
              <Button
                onClick={() => {
                  navigate("/Category/Monitors");
                }}
                sx={{
                  fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "14px" },
                  borderBottom: "2px solid white",
                  color: "white",
                }}
                variant="text"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
