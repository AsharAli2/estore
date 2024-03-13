import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import CableIcon from "@mui/icons-material/Cable";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import cartcontext from "../../context/Cartcontext";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Paper,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const pages = ["Phone", "Laptops", "Headphones", "Camera", "Monitors"];

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  let userName;
  if (user) {
    userName = user.userName;
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const location = useLocation();

  if (location.pathname === "/Admin") {
    return null;
  }
  const ItemQuantity = useContext(cartcontext);
  const { cartitem } = ItemQuantity;
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Divider sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => {
                navigate("/");
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // fontFamily: "",
                fontWeight: 700,
                // letterSpacing: ".3rem",
                color: "green",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              ESTORE
            </Typography>
          </Divider>
          <Divider sx={{ display: { xs: "flex", md: "none" } }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    href="#Choose"
                  >
                    <Typography
                      textAlign="center"
                      sx={{ color: "black" }}
                      onClick={() => navigate(`/Category/${page}`)}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Divider>
          <Divider sx={{ display: { xs: "flex", md: "none" } }}>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => {
                navigate("/");
              }}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                // fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: ".3rem",
                color: "green",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              ESTORE
            </Typography>
          </Divider>
          <Divider sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ color: "black" }}
                    onClick={() => navigate(`/Category/${page}`)}
                  >
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Divider>
          <div>
            <Box
              sx={{
                flexGrow: 0,
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {user ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar sx={{ bgcolor: deepOrange[Math.random() * 600] }}>
                        {user.userName.toUpperCase()[0]}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Paper
                      elevation={0}
                      sx={{ width: "150px", textAlign: "center" }}
                    >
                      <div style={{ marginBottom: "8px" }}>
                        <Button
                          sx={{ height: "50px", width: "100px" }}
                          variant="outlined"
                          color="success"
                          onClick={() => navigate(`/UserHistory/${userName}`)}
                        >
                          Purchase History
                        </Button>
                      </div>
                      <div>
                        <Button
                          sx={{}}
                          variant="outlined"
                          color="error"
                          onClick={() => {
                            localStorage.clear();
                            navigate("/");
                          }}
                        >
                          Logout
                        </Button>
                      </div>
                    </Paper>
                  </Menu>
                </Box>
              ) : (
                <LoginIcon
                  sx={{ color: "black", marginLeft: "20px", cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                />
              )}
              <Link to={"/Cart"} style={{ color: "white" }}>
                <IconButton sx={{ p: 0, marginLeft: "10px" }}>
                  <StyledBadge
                    badgeContent={cartitem.length}
                    sx={{ color: "black" }}
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
