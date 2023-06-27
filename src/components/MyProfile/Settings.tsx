"use client";
import styles from "@/app/profile/page.module.scss";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Modal,
  Switch,
  Typography,
} from "@mui/material";
import CustomButton from "@/components/CustomButton/CustomButton";
import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = React.useState({
    private: false,
    notifications: false,
    activity: true,
  });
  const [confirmDelete, setConfirmDelete] = useState(false);
  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.settingContainer}>
          <h1>Settings</h1>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.private}
                    onChange={handleChange}
                    name="private"
                  />
                }
                label="Private account"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications}
                    onChange={handleChange}
                    name="notifications"
                  />
                }
                label="Notification"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.activity}
                    onChange={handleChange}
                    name="activity"
                  />
                }
                label="Activity Status"
              />
              <br />
              <br />
              <CustomButton onClick={() => setConfirmDelete(true)} secondary>
                Delete Account
              </CustomButton>
            </FormGroup>
            <Modal
              open={confirmDelete}
              onClose={() => setConfirmDelete(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={styles.confirmDelete}>
                <Typography>
                  This will delete your account and you will not be able to have
                  access anymore
                </Typography>
                <CustomButton onClick={() => setConfirmDelete(false)} secondary>
                  Accept
                </CustomButton>
              </Box>
            </Modal>
            <FormHelperText sx={{ color: "inherit" }}>
              Be careful we will not be able to recover your account anymore
            </FormHelperText>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default Settings;
