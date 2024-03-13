import * as React from "react";
import { useState, useEffect } from "react";
import "./carousal.css";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import demo from "../../../public/Video/Computer.mp4";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
function Carousal() {
  return (
    <>
      {/* <Container> */}
      <div
        className="bg"
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <div style={{ marginTop: "70px" }}>
          <div style={{ textAlign: "center" }}>
            <img src="/device.png" alt="" style={{ width: "30%" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
              }}
            >
              Certified Pre Owned
            </Typography>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
              }}
            >
              Devices
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 200,
              }}
            >
              With 1-2 Years Warranty and 7-Day returns!
            </Typography>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="text"
              sx={{
                borderBottom: "2px solid black",
                color: "black",
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="video">
        <div>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              textAlign: "center",
              fontFamily: "monospace",
              fontSize: { xs: "14px", sm: "16px", md: "18x", lg: "20px" },
            }}
          >
            CHOOSE FROM
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              fontSize: { xs: "33px", sm: "38px", md: "43px", lg: "48px" },
            }}
          >
            The Best
          </Typography>
        </div>
        {/* <div style={{ width: "100%", textAlign: "center" }}>
          <video
            src={demo}
            style={{ width: "80%" }}
            autoPlay
            playsinline
            muted
            loop
          ></video>
        </div> */}
      </div>
    </>
  );
}

export default Carousal;
