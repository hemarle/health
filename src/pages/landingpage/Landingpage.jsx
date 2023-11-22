import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import MedicationIcon from "@mui/icons-material/Medication";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import hero from "../../assets/images/hero-bg.png";
import logo from "../../assets/images/logo.png";
import mobileImg from "../../assets/images/Mobiles.png";
import aiImg from "../../assets/icons/ai.png";
function Landingpage() {
  return (
    <Box>
      <Header />
      <Hero />
      <Features />
      <About />
      <Newsletter />
      <Footer />
    </Box>
  );
}

export default Landingpage;

function Header() {
  const navigate = useNavigate();
  return (
    <Box
      p={{ xs: 2, md: 3, lg: 4 }}
      px={{ xs: 2, lg: 8 }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <img src={logo} />
      </Box>
      <Box>
        <Button variant="contained" onClick={() => navigate("/chat")}>
          {" "}
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
function Hero() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        maxHeight: "900px",
        background: `url(${hero}) no-repeat`,
        backgroundSize: "cover",
        "@media (max-width:600px)": {
          height: "auto",
          padding: "60px 20px",
        },
      }}
    >
      <Typography
        variant="h3"
        mb={4}
        fontWeight={600}
        fontSize={{ xs: 40, lg: 64 }}
        align={"center"}
        sx={{
          maxWidth: "900px",
          lineHeight: "89px",
          color: "#332F2F",
          "@media (max-width:600px)": {
            lineHeight: "50px",
            textAlign: "left",
            // padding: "0 10px",
          },
        }}
      >
        Get answers to your medical questions with{" "}
        <span style={{ color: "#00B277" }}>myhealthpal</span>
      </Typography>
      <Typography
        variant="body2"
        mb={5}
        fontSize={24}
        sx={{ maxWidth: "616px", color: "#71788A" }}
      >
        From Symptoms to Diagnosis, our AI Powered Chatbots are programmed to
        serve you in unique ways.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/chat")}>
        {" "}
        Get Started
      </Button>
    </Box>
  );
}

function Features() {
  return (
    <Box p={{ xs: 2, md: 3, lg: 4 }} pb={{ xs: 2, lg: 8 }}>
      <Typography
        variant="h3"
        align="center"
        fontSize={40}
        fontWeight={500}
        my={4}
        mb={6}
        sx={{ color: "#332F2F" }}
      >
        Features
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={{ lg: 8 }}
        justifyContent="center"
      >
        <FeatureCard
          avatar={<MedicationIcon sx={{ color: "rgba(133, 95, 206, 0.8)" }} />}
          avatarColor="rgba(133, 95, 206, .1)"
          title="Real time Diagnosis"
          content="Real time diagnosis and recommendations."
        />
        <FeatureCard
          avatar={<MonitorHeartIcon sx={{ color: "rgba(39, 174, 96, 0.8)" }} />}
          avatarColor="rgba(39, 174, 96, .1)"
          title="Routine medical Check up"
          content="Promote overall health and well-being, such as maintaining a healthy diet, exercising regularly, and getting enough sleep."
        />
        <FeatureCard
          avatar={<img src={aiImg} alt="robot ai" />}
          title="Personalized AI Chatbot"
          content="From Symptoms to Diagnosis, our AI Powered Chatbots are programmed to serve you in unique ways."
        />
      </Stack>
    </Box>
  );
}
function FeatureCard({ avatar, avatarColor, title, content }) {
  const navigate = useNavigate();
  return (
    <Box mb={{ xs: 7, lg: 3 }} mx={2}>
      {" "}
      <Card sx={{ width: "353px" }} elevation={4} mb={2} raised={4}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: avatarColor || "transparent" }}>
              {avatar}
            </Avatar>
          }
        />

        <CardContent>
          <Typography
            variant="h4"
            fontSize={24}
            fontWeight={500}
            mb={2}
            sx={{ color: "#332F2F" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            fontSize={14}
            fontWeight={400}
            mb={3}
            sx={{ height: "70px" }}
          >
            {content}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/chat")}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

function About() {
  return (
    <Box
      sx={{ bgcolor: "rgba(25, 159, 132, 0.1)" }}
      px={{ xs: 2, md: 6 }}
      py={{ xs: 2, md: 8 }}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="space-evenly"
      >
        <Box py={{ xs: 4, lg: 0 }}>
          <img src={mobileImg} alt="mobile phone" />
        </Box>
        <Box>
          <Typography
            variant="h5"
            fontSize={40}
            fontWeight={500}
            sx={{ color: "#332F2F" }}
            mb={7}
          >
            {" "}
            How it works
          </Typography>

          <ul>
            {[
              "Describe your primary symptom(s).",
              "The chatbot's machine learning algorithms analyze the symptom description, identifying keywords and patterns.",
              "The chatbot processes the collected information, including symptom severity, duration, medications, allergies, and medical conditions.",
              "Using the processed information and AI algorithms, the chatbot generates tailored recommendations, ranging from immediate medical attention to lifestyle changes or consulting a healthcare professional.",
            ].map((text) => (
              <li
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "18px",
                }}
              >
                {/* icon */}
                <CheckIcon
                  sx={{ bgcolor: "green", color: "white", borderRadius: "5px" }}
                />
                <Typography
                  variant="body2"
                  fontSize={14}
                  sx={{
                    maxWidth: "500px",
                    color: "#71788A",
                    lineHeight: "22px",
                  }}
                >
                  {" "}
                  {text}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Stack>
    </Box>
  );
}

function Newsletter() {
  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h5"
          fontSize={40}
          fontWeight={500}
          sx={{ color: "#332F2F" }}
          mb={2}
          align="center"
        >
          Subscribe to our newsletter
        </Typography>
        <Typography
          mb={3}
          variant="body2"
          fontSize={14}
          sx={{ color: "#71788A" }}
        >
          {" "}
          Get e-mail updates about our latest news and special offers
        </Typography>
        <Box mb={2} sx={{ width: "100%" }}>
          <TextField
            fullWidth
            placeholder="Enter your email here"
            sx={{ borderRadius: "99px" }}
          />{" "}
        </Box>
        <Button variant="contained">Subscribe</Button>
      </Box>
    </Box>
  );
}
function Footer() {
  return (
    <Box
      p={3}
      py={{ xs: 3, lg: 6 }}
      sx={{
        bgcolor: "rgba(25, 159, 132, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "20vh",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="body2"
          mb={2}
          fontSize={14}
          sx={{ color: "#0A142F" }}
          align="center"
        >
          REVOLUTIONIZING HEALTHCARE
        </Typography>
        <Typography
          variant="h5"
          fontWeight={500}
          fontSize={{ xs: 30, lg: 40 }}
          mb={2}
          align="center"
          sx={{ color: "#332F2F" }}
        >
          Request More Information
        </Typography>
        <Typography variant="body1" align="center" color="#22293B" mb={3}>
          MyHealthPal, healthcare company which is developing a unique way of
          bridging the gap between patients and Doctors.
        </Typography>
        <Box mb={4}>
          <Button variant="contained">Contact Us</Button>
        </Box>
        <Typography variant="body2" fontSize={14} color="#0A142F">
          © 2023 MyHealthPal, LLC
        </Typography>
      </Box>
      <Stack
        mt={8}
        px={{ xs: 2, lg: 16 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={3}
        sx={{ width: "100%" }}
      >
        <Box>
          <img src={logo} alt="health padi" />
        </Box>
        <Box
          component="ul"
          sx={{ display: "flex", gap: "18px", listStyle: "none" }}
        >
          <li>
            <LinkedInIcon
              sx={{
                color: "#0A142F               ",
                border: "2px solid rgba(10, 20, 47, 0.2)",
                borderRadius: "50%",
                padding: "10px",
                fontSize: "45px",
              }}
            />
          </li>
          <li>
            <InstagramIcon
              sx={{
                color: "#0A142F               ",
                border: "2px solid rgba(10, 20, 47, 0.2)",
                borderRadius: "50%",
                padding: "10px",
                fontSize: "45px",
              }}
            />
          </li>
          <li>
            <FacebookIcon
              color="white"
              sx={{
                color: "#0A142F               ",
                border: "2px solid rgba(10, 20, 47, 0.2)",
                borderRadius: "50%",
                padding: "10px",
                fontSize: "45px",
              }}
            />
          </li>
          <li>
            <YouTubeIcon
              color="white"
              sx={{
                color: "#0A142F               ",
                border: "2px solid rgba(10, 20, 47, 0.2)",
                borderRadius: "50%",
                padding: "10px",
                fontSize: "45px",
              }}
            />
          </li>
        </Box>
      </Stack>
    </Box>
  );
}
