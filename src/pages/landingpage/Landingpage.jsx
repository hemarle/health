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
} from "@mui/material";

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
        minHeight: "50vh",
      }}
    >
      <Typography variant="h3" mb={2}>
        Get Answers
      </Typography>
      <Typography variant="body2" mb={3}>
        From Symptoms
      </Typography>
      <Button variant="contained"> Get Started</Button>
    </Box>
  );
}

function Features() {
  return (
    <Box>
      <Stack direction="row" spacing={6} justifyContent="center">
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
        <Typography variant="h4">Real Time diagnosis</Typography>
        <Typography variant="body1">Real Time diagnosis</Typography>
        <Button variant="contained">Get Started</Button>
      </CardContent>
    </Card>
  );
}

function About() {
  return (
    <Box>
      <Stack direction={{ xs: "column-reverse", md: "row" }}>
        <Box>
          <img src="" />
        </Box>
        <Box>
          <Typography variant="h5"> How it works</Typography>

          <ul>
            <li>
              {/* icon */}
              <Typography variant="body2"> Describe your bla bla</Typography>
            </li>
          </ul>
        </Box>
      </Stack>
    </Box>
  );
}

function Newsletter() {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
      }}>
      <Typography variant="h5"> Subscribe to our newsletter</Typography>
      <Typography variant="body2"> Subscribe to our newsletter</Typography>
      <input placeholder="Enter your email here" />
      <Button variant="contained">Subscribe</Button>
    </Box>
  );
}
function Footer() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "20vh",
        }}
      >
        <Typography variant="body2">kjd</Typography>
        <Typography variant="hy">Request More Information</Typography>
        <Typography variant="body1">Myblabla bla</Typography>
        <Button variant="contained">Contact Us</Button>
        <Typography variant="body2">Myblabla bla</Typography>
      </Box>
      <Stack direction="row" justifyContent="space-evenly">
        <Box>{/* image */}</Box>
        <Box component="ul">
          <li> IN</li>
        </Box>
      </Stack>
    </Box>
  );
}
