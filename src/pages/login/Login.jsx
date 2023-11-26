import React from "react";
import LoginLayout from "../../components/layout/LoginLayout";
import { useLogin } from "../../hooks/api/useAuthenticate";
import facebookIcon from "../../assets/icons/facebook.png";
import mailIcon from "../../assets/icons/mail.png";
import googleIcon from "../../assets/icons/google.png";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const loginAPI = useLogin();
  return (
    <LoginLayout>
      <Box bgcolor="white" p={3} borderRadius="8px" width="100%">
        <Typography variant="h6" align="center" mb={5}>
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            loginAPI.mutate(values, {
              onSuccess: (res) => {
                navigate("/chat");
                console.log({ res });
              },
              onError: (error) => {
                console.log({ error });
                toast.error(`Error: ${error.response.data?.message}`);
              },
              onSettled: () => {
                setSubmitting(false);
              },
            });
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Box mb={4}>
                <TextField
                  fullWidth
                  required
                  placeholder="Email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setFieldValue("email", e.target.value)}
                />
              </Box>
              <Box mb={4}>
                <TextField
                  required
                  fullWidth
                  placeholder="Password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  onChange={(e) => setFieldValue("password", e.target.value)}
                />
              </Box>
              <Box mb={5}>
                <Typography
                  variant="body1"
                  color="primary.main"
                  fontWeight={500}
                  align="right"
                >
                  Forgot password?
                </Typography>
              </Box>
              <Box>
                <Button
                  disabled={isSubmitting}
                  fullWidth
                  type="submit"
                  variant="contained"
                  mt={3}
                >
                  {isSubmitting ? "Logging in ..." : "   Sign In"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box mt={5} mb={3}>
          <Divider>Or sign in with</Divider>
        </Box>
        <Box
          mb={3}
          sx={{ display: "flex", justifyContent: "center", gap: "15px" }}
        >
          {/* Icons */}
          <Box>
            <img src={mailIcon} />
          </Box>
          <Box>
            <img src={facebookIcon} />
          </Box>
          <Box>
            <img src={googleIcon} />
          </Box>
        </Box>
        <Typography align="center">
          Don't Have an account?{" "}
          <span>
            <Link to="/register" style={{ color: "#00B277" }}>
              Sign up
            </Link>
          </span>
        </Typography>
      </Box>
    </LoginLayout>
  );
}

export default Login;
