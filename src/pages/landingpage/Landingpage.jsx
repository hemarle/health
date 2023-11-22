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
import hero from "../../assets/images/hero-bg.png";
import mobileImg from "../../assets/images/Mobiles.png";
import CheckIcon from "@mui/icons-material/Check";
function Landingpage() {
  return (
    <Box>
      <Hero />

      <Features />
      <About />
      <Newsletter />
      <Footer />
    </Box>
  );
}

export default Landingpage;
function Hero() {
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
      }}
    >
      <Typography
        variant="h3"
        mb={4}
        fontWeight={600}
        fontSize={64}
        align="center"
        sx={{ maxWidth: "900px", lineHeight: "89px", color: "#332F2F" }}
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
      <Button variant="contained"> Get Started</Button>
    </Box>
  );
}

function Features() {
  return (
    <Box p={{ xs: 2, md: 3, lg: 4 }}>
      <Typography
        variant="h3"
        align="center"
        fontSize={40}
        fontWeight={500}
        my={4}
        sx={{ color: "#332F2F" }}
      >
        Features
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={8}
        justifyContent="center"
      >
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </Stack>
    </Box>
  );
}
function FeatureCard() {
  return (
    <Card>
      <CardHeader avatar={<Avatar></Avatar>} />

      <CardContent>
        <Typography
          variant="h4"
          fontSize={24}
          fontWeight={500}
          mb={2}
          sx={{ color: "#332F2F" }}
        >
          Real Time diagnosis
        </Typography>
        <Typography
          variant="body1"
          fontSize={14}
          fontWeight={400}
          mb={1}
          sx={{ height: "60px" }}
        >
          Real Time diagnosis
        </Typography>
        <Button fullWidth variant="contained">
          Get Started
        </Button>
      </CardContent>
    </Card>
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
        <Box>
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
            <li style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              {/* icon */}
              <CheckIcon
                sx={{ bgcolor: "green", color: "white", borderRadius: "5px" }}
              />
              <Typography variant="body2">
                {" "}
                Describe your primary symptom(s).
              </Typography>
            </li>
          </ul>
        </Box>
      </Stack>
    </Box>
  );
}

function Newsletter() {
  return (
    <Box
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
      sx={{
        bgcolor: "rgba(25, 159, 132, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "20vh",
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
        >
          REVOLUTIONIZING HEALTHCARE
        </Typography>
        <Typography
          variant="h5"
          fontWeight={500}
          fontSize={40}
          mb={2}
          sx={{ color: "#332F2F" }}
        >
          Request More Information
        </Typography>
        <Typography variant="body1" align="center" color="#22293B" mb={3}>
          MyHealthPal, healthcare company which is developing a unique way of
          bridging the gap between patients and Doctors.
        </Typography>
        <Box  mb={4} >

        <Button variant="contained">
          Contact Us
        </Button>
        </Box>
        <Typography variant="body2" fontSize={14} color="#0A142F">© 2023 MyHealthPal, LLC</Typography>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Box>{/* image */}</Box>
        <Box component="ul">
          <li> IN</li>
        </Box>
      </Stack>
    </Box>
  );
}
