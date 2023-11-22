import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import logo from "../../assets/images/logo.png";
function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        "@media (max-width:600px)": {
          bgcolor: "#DFE8DE",
          minHeight: "80vh",
        },
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }}>
        {/*Logo Mobile  */}
        <Box
          // p={1}
          sx={{
            "@media (min-width:900px)": { display: "none" },
          }}
        >
          {/* logo */}

          <Box bgcolor="white" p={1}>
            <Box component={"img"} src={logo} />
          </Box>
        </Box>
        {/* sidebar */}
        <Box
          sx={{
            backgroundColor: "white",
            flexBasis: "200px",
            "@media (max-width:899px)": { display: "none" },
          }}
        >
          <SideBar />
        </Box>

        {/* Container */}
        <Box sx={{ flex: "1", bgcolor: "#DFE8DE" }}>{children}</Box>
      </Stack>
    </Box>
  );
}

export default Layout;

const SideBar = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "280px" }} px={4} py={2}>
      <Box>
        {/* logo */}
        <Box component={"img"} src={logo} />
      </Box>
      <Box mt={5}>
        <Stack
          direction="row"
          spacing={3}
          padding={1}
          borderRadius={1}
          bgcolor="rgba(25, 159, 132, 0.2)"
          sx={{ color: "#199F84" }}
        >
          <ForumIcon />
          <Typography fontWeight={500}>Chatbot</Typography>
        </Stack>
      </Box>
    </Box>
  );
};
