import "./Navbar.css";
import logo from "../../assets/kinishop_logo.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";

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

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar src={logo} alt="logo kinishop" />
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit">Productos</Button>
            <Button color="inherit">Adopciones</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Contacto</Button>
            <Box sx={{ flexGrow: 1 }} /> {/* Spacer to center the buttons */}
            <IconButton>
              <CartWidget />
            </IconButton>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
  //navbar
};
