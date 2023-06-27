"use client";
import React, { Suspense, useRef, useState } from "react";
import CustomButton from "@/components/CustomButton/CustomButton";
import styles from "./page.module.scss";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stage, useProgress } from "@react-three/drei";
import Phone from "@/components/iPhone14 Model/Phone";
import { TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      style={{
        color: "#53c28b",
        width: 100,
        opacity: progress ? 1 : 0,
        transform: `scale(${progress ? 2 : 1})`,
      }}
      center
    >
      {progress}% loaded
    </Html>
  );
}

const ContactPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showDone, setShowDone] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [rotate, setRotate] = useState(2.0);

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_gob38su",
        "template_71ymdna",
        form.current,
        "gm_mBdEfLYV_J5xHn"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setShowDone(true);
            setDisabled(true);
          }
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <h1 className={styles.title}>Contact Us</h1>
          <TextField
            type="text"
            label="Name"
            value={name}
            name="user_name"
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
          <TextField
            type="text"
            label="Email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            type="text"
            label="Message"
            name="message"
            inputProps={{
              style: {
                height: "80px",
              },
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            fullWidth
          />
          <CustomButton type="submit" camel disabled={disabled}>
            {showDone
              ? "We have recieved your email successfully"
              : "Send Message"}
          </CustomButton>
        </form>
      </div>
      <div className={styles.mapContainer}>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Stage environment="forest" intensity={0.7}>
              <Phone />
            </Stage>
          </Suspense>

          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={rotate}
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default ContactPage;
