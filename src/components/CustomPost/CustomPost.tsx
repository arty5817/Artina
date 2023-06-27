"use client";
import styles from "@/app/all/page.module.scss";
import Image from "next/image";
import { Avatar, InputAdornment, TextField } from "@mui/material";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import CustomButton from "@/components/CustomButton/CustomButton";

const CustomPost = ({ src, title, description, alt, id }: PostProps) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/loading.png"
          width={300}
          height={250}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.postProfile}>
          <Avatar />
          <p>@{title}</p>
          <p>ID</p>
          <CustomButton secondary>{id}</CustomButton>
        </div>
        <TextField
          defaultValue={title}
          InputProps={{
            startAdornment: (
              <InputAdornment style={{ color: "#53c28b" }} position="start">
                <CameraEnhanceOutlinedIcon />
              </InputAdornment>
            ),
            readOnly: true,
          }}
          fullWidth
        />
        <TextField
          defaultValue={
            description.length === 0
              ? "The photo is uploaded without description ⨺➄⧻⒏"
              : description
          }
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          label={description.length === 0 ? "⨺➄⧻⒏" : "Description"}
        />
      </div>
    </div>
  );
};

export default CustomPost;
