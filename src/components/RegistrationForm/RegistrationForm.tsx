"use client";
import CustomButton from "@/components/CustomButton/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CustomTextFieldEye from "@/components/CustomTextFieldPassword/CustomTextFieldEye";
import { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFullName = name + " " + lastName;
    const userEmail = email;
    const userPass = password;

    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userFullName,
        userEmail,
        userPass,
      }),
    }).then((response) => {
      console.log(response);
      // router.push("/profile?success=true");
    });
  };

  return (
    <>
      <Box
        sx={{
          p: 3,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="First Name"
                inputProps={{
                  maxLength: 15,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                InputProps={{
                  maxLength: 20,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputProps={{
                  maxLength: 33,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextFieldEye
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                label={"Password"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Share my registration data with Artina's content providers for marketing purposes."
              />
            </Grid>
          </Grid>
          <CustomButton camel type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </CustomButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/profile" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RegistrationForm;
