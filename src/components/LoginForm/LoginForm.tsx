"use client";
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CustomButton from "@/components/CustomButton/CustomButton";
import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "@/components/LoadingPage/Loading";
import React, { useState } from "react";
import CustomTextFieldEye from "@/components/CustomTextFieldPassword/CustomTextFieldEye";

const LoginForm = () => {
  const router = useRouter();

  const { data: session, status } = useSession();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    router.push("/profile");
  }

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
        <Typography sx={{ color: "red" }} component="h3" variant="h6">
          currently you can log in only via providers
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <CustomTextFieldEye
            margin="normal"
            name="password"
            label="Password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <CustomButton camel type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
            Sign In
          </CustomButton>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <CustomButton
              secondary
              sx={{ m: 2, p: 3.5, width: 300 }}
              onClick={() => signIn("google")}
              startIcon={
                <Image alt="google" width={30} height={30} src="/google.png" />
              }
            >
              Continue With Google
            </CustomButton>
            <CustomButton
              secondary
              sx={{ m: 2, p: 3.5, width: 300 }}
              onClick={() => signIn("facebook")}
              startIcon={
                <Image
                  alt="facebook"
                  width={30}
                  height={30}
                  src="/facebook.png"
                />
              }
            >
              Continue With Facebook
            </CustomButton>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/profile/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
