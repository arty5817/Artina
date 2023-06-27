"use client";
import styles from "@/app/profile/page.module.scss";
import { Avatar, InputAdornment, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { useSession } from "next-auth/react";

const MyProfile = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div className={styles.profileContainer}>
        <h1>My Profile</h1>
        <Avatar
          variant="square"
          src={status === "authenticated" ? session.user.image : ""}
          size="large"
        />
        <div className={styles.infoLayout}>
          <TextField
            defaultValue={
              status === "authenticated" ? session.user.name : "Name Surname"
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            fullWidth
          />
        </div>
        <div className={styles.infoLayout}>
          <TextField
            defaultValue={
              status === "authenticated" ? session.user.email : "Email Address"
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            fullWidth
          />
        </div>
        <div className={styles.infoLayout}>
          <TextField
            defaultValue={
              status === "authenticated" ? session.user.email : "Username"
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            fullWidth
          />
        </div>
        <div className={styles.infoLayout}>
          <TextField
            defaultValue="Location"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NearMeOutlinedIcon />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            fullWidth
          />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
