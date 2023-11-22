import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import Layout from "./components/layout/Layout";
import Chat from "./pages/chat/Chat";
import Landingpage from "./pages/landingpage/Landingpage";

function App() {
  return (
    <Box>
      <Landingpage />
      <Chat />
    </Box>
  );
}

export default App;
