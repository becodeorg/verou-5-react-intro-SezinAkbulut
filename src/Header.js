import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";

const iconStyle = {
  fontSize: "24px",
  color: "#fff",
};

const Header = () => {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Box
        sx={{
          backgroundColor: "rgba(169, 169, 169, 0.3)",
          borderRadius: "5px",
          padding: "8px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MuiLink
          component={RouterLink}
          to="/"
          color="inherit"
          fontSize={"large"}
        >
          <ListItemIcon sx={{ marginLeft: "12px", maxWidth: "20px" }}>
            <HomeIcon style={iconStyle} />
          </ListItemIcon>
          Home
        </MuiLink>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(169, 169, 169, 0.3)",
          borderRadius: "5px",
          padding: "8px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MuiLink
          component={RouterLink}
          to="/calendar"
          color="inherit"
          fontSize={"large"}
        >
          <ListItemIcon sx={{ marginLeft: "12px", maxWidth: "20px" }}>
            <EventIcon style={iconStyle} />
          </ListItemIcon>
          Calendar
        </MuiLink>
      </Box>
    </Breadcrumbs>
  );
};

export default Header;
