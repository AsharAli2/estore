import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CableIcon from "@mui/icons-material/Cable";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
export default function Admin() {
  localStorage.clear();
  return (
    <>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid
          item
          xs={2}
          sx={{
            padding: "0px !important",
            textAlign: "center",
            height: "100vh",

            backgroundColor: "#101A32",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              backgroundColor: "#1b2342",
              paddingTop: "15px",
              paddingBottom: "10px",
            }}
          >
            <CableIcon
              sx={{
                color: "#1976D2",
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Estore
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DashboardOutlinedIcon sx={{ color: "grey" }} />
            <Button variant="" sx={{ color: "white" }}>
              Dashboard
            </Button>
          </div>
        </Grid>
        <Grid item xs={10} sx={{ height: "100vh" }}></Grid>
      </Grid>
    </>
  );
}
