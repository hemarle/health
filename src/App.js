import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import Layout from "./components/layout/Layout";
import Chat from "./pages/chat/Chat";

function App() {
  return (
    <Box>
      <Chat />
    </Box>
  );
}

export default App;
