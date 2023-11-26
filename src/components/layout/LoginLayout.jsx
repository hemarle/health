import React from "react";
import { Box } from "@mui/material";
import bgImage from "../../assets/images/login-bg.png";
function LoginLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: `url(${bgImage}) no-repeat`,
        backgroundSize: "cover",
      }}
      p={{ xs: 2, lg: 6 }}
    >
      <Box sx={{ width: "100%", maxWidth: "400px", borderRadius: "5px" }}>
        {children}
      </Box>
    </Box>
  );
}

export default LoginLayout;
