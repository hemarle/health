import React from "react";
import LoginLayout from "../../components/layout/LoginLayout";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
function Register() {
  return (
    <LoginLayout>
      <Box bgcolor="white" p={3} borderRadius="8px" width="100%">
        <Typography variant="h6" align="center" mb={5}>
          Create an Account
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {}}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Box mb={4}>
                <TextField
                  fullWidth
                  placeholder="Full Name"
                  type="text"
                  label="Full Name"
                  variant="outlined"
                  onChange={(e) => setFieldValue("FullName", e.target.value)}
                />
              </Box>
              <Box mb={4}>
                <TextField
                  fullWidth
                  placeholder="Email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setFieldValue("email", e.target.value)}
                />
              </Box>
              <Box mb={4}>
                <TextField
                  fullWidth
                  placeholder="Phone"
                  type="text"
                  label="Phone"
                  variant="outlined"
                  onChange={(e) => setFieldValue("Phone", e.target.value)}
                />
              </Box>
              <Box mb={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    fullWidth
                    placeholder="Select Gender"
                    label="Gender"
                  >
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={4}>
                <TextField
                  fullWidth
                  placeholder="Password"
                  type="password"
                  label="Password"
                  variant="outlined"
                />
              </Box>
              <Box mb={5}>
                <FormControlLabel
                  control={<Checkbox defaultChecked required />}
                  label="I agree to the Terms and Conditions"
                />
              </Box>
              <Box mb={2}>
                <Button fullWidth type="submit" variant="contained" mt={3}>
                  Sign In
                </Button>
              </Box>
            </Form>
          )}
        </Formik>

        <Typography align="center">
          Already have an account?{" "}
          <span>
            <Link to="/login" style={{ color: "#00B277" }}>
              Sign in
            </Link>
          </span>
        </Typography>
      </Box>
    </LoginLayout>
  );
}

export default Register;
