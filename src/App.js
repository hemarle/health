import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import Layout from "./components/layout/Layout";
import Chat from "./pages/chat/Chat";
import Landingpage from "./pages/landingpage/Landingpage";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00B277",
        contrastText: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
