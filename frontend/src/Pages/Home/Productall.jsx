import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Home/Product.css";
import {
  Button,
  Stack,
  Card,
  CardMedia,
  Typography,
  Container,
  MenuItem,
  Rating,
  Grid,
  Input,
  Radio,
  Checkbox,
  FormControlLabel,
  Box,
  Slider,
} from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 0;

export default function Productall() {
  let [Product, setProduct] = useState([]);
  const [brands, setbrands] = useState([]);

  // RESPONSIVE WRT WIDTH
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { name } = useParams();
  let value = 3;
  if (windowWidth < 1000) {
    value = 4;
  }
  if (windowWidth < 800) {
    value = 6;
  }

  // FETCHING ALL PRODUCT
  const fetchproducts = async () => {
    // setIsLoading(true);
    const response = await fetch(`/products/Category/${name}`);
    const data = await response.json();
    setProduct(data.Product);

    // setIsLoading(false);
  };
  useEffect(() => {
    fetchproducts();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  //BRAND
  let brand = [];
  Product.forEach((element) => {
    if (!brand.includes(element.Brand)) {
      brand.push(element.Brand);
    }
  });
  const handlechange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      console.log(value);
      setbrands([...brands, value]);
    } else {
      setbrands(brands.filter((e) => e !== value));
    }
  };
  // FILTER PRODUCT WRT BRANDS
  if (brands.length != 0) {
    Product = Product.filter((item) => brands.includes(item.Brand));
  }

  // REACT SLIDER
  const [value2, setValue2] = React.useState([0, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ fontFamily: "sans-serif" }}>Filter</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {brand.map((item) => {
                return (
                  <>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={item}
                      value={item}
                      onChange={(e) => handlechange(e)}
                    />
                  </>
                );
              })}
            </div>
          </Grid>

          {/* <Grid item xs={12}> */}
          {/* <Grid
              container
              columns={9}
              spacing={2}
              sx={{ justifyContent: "center" }}
            > */}
          {Product.map((item) => {
            return (
              <Grid item xs={value}>
                <Link to={`/Product/${item._id}`}>
                  <Card
                    sx={{
                      maxWidth: 240,
                      maxHeight: 300,
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 200,
                        width: 240,
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                      image={item.image}
                      title="green iguana"
                    />
                    <MenuItem>
                      <Typography
                        variant="inherit"
                        noWrap
                        style={{ color: "black", justifyContent: "center" }}
                      >
                        {item.name}
                      </Typography>
                    </MenuItem>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        style={{
                          color: "black",
                          fontSize: "12px",
                          paddingLeft: "16px",
                        }}
                      >
                        Rs.{item.price}
                      </Typography>
                    </div>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        {/* </Grid> */}
        {/* </Grid> */}
      </Container>
    </>
  );
}
