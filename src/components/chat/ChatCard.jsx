import React from "react";
import { Box, Paper } from "@mui/material";
function ChatCard({ key, text, type }) {
  return (
    <Box
      key={key}
      mb={2}
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: type === "receiver" ? "flex-end" : "flex-start",
      }}
    >
      <Paper
        sx={{
          padding: "16px",
          width: "100%",
          maxWidth: "45%",
          backgroundColor:
            type === "receiver"
              ? "rgba(0, 178, 119, 0.8)"
              : "rgba(75, 113, 246, 0.1)",
          color: type === "receiver" ? "white" : "black",
          "@media (max-width:768px)": {
            maxWidth: "60%",
          },
        }}
      >
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </Paper>
    </Box>
  );
}

export default ChatCard;
