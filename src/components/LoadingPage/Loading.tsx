"use client";
import { Grid, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
