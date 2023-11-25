import React from "react";
import { Box } from "@mui/material";
function LoginLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "green",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "400px", borderRadius: "5px" }}>
        {children}
      </Box>
    </Box>
  );
}

export default LoginLayout;
