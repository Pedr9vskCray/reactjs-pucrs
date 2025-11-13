import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function NavBar({ paginas }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        color: "#333",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "left" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          {paginas.map((pagina, index) => {
            const isActive = location.pathname === pagina.path;

            return (
              <Button
                key={index}
                onClick={() => handleNavigation(pagina.path)}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderRadius: "20px",
                  fontWeight: 500,
                  backgroundColor: isActive
                    ? "rgba(75, 0, 130, 0.12)"
                    : "transparent",
                  color: "#333",
                  borderColor: "rgba(75, 0, 130, 0.15)",
                  "&:hover": {
                    backgroundColor: "rgba(75, 0, 130, 0.15)",
                    borderColor: "rgba(75, 0, 130, 0.3)",
                  },
                }}
              >
                {pagina.text}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
