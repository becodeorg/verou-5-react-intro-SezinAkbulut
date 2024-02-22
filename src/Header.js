import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";

const iconCommonStyle = {
  fontSize: "24px",
  color: "#fff",
  marginLeft: "1rem",
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh",
  marginTop: "2rem",
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  color: "white",
  fontSize: "large",
  marginRight: "1rem",
  textDecoration: "none",
};

const Header = () => {
  return (
    <div>
      <h1
        style={{
          color: "white",
          fontSize: "44px",
        }}
      >
        My Todo App
      </h1>

      <div style={headerStyle}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Box
            sx={{
              backgroundColor: "rgba(169, 169, 169, 0.3)",
              borderRadius: "25px",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              color: "white",
              margin: "0",
              border: "#FF61C0 1px solid",
            }}
          >
            <MuiLink
              component={RouterLink}
              to="/"
              color="inherit"
              fontSize={"large"}
              sx={linkStyle}
            >
              <ListItemIcon sx={iconCommonStyle}>
                <HomeIcon />
              </ListItemIcon>
              All
            </MuiLink>
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(169, 169, 169, 0.3)",
              borderRadius: "25px",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              color: "white",
              margin: "0",
              border: "#FF61C0 1px solid",
            }}
          >
            <MuiLink
              component={RouterLink}
              to="/calendar"
              color="inherit"
              fontSize={"large"}
              sx={linkStyle}
            >
              <ListItemIcon sx={iconCommonStyle}>
                <EventIcon />
              </ListItemIcon>
              Calendar
            </MuiLink>
          </Box>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Header;
