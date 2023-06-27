"use client";
import styles from "@/app/profile/page.module.scss";
import { TextField } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    setSelectedImage();
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className={styles.profilePostContainer}>
      <h1>Add Post</h1>
      <form className={styles.addPostForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <TextField
            type="text"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div className={styles.formGroup}>
          <TextField
            type="text"
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.customFileUpload}>
            <input
              type="file"
              style={{ display: "none" }}
              name="myImage"
              accept="image/*"
              onChange={imageChange}
            />
            <CloudUploadOutlinedIcon />
            Upload Image File
          </label>
        </div>
        {selectedImage && (
          <div className={styles.preview}>
            <Image
              width={100}
              height={100}
              src={URL.createObjectURL(selectedImage)}
              className={styles.previewImage}
              alt="Error Image"
            />
            <CustomButton
              secondary
              onClick={() => setSelectedImage()}
              className={styles.delete}
            >
              Remove
            </CustomButton>
          </div>
        )}

        <CustomButton onClick={handleSubmit} className={styles.btn} camel>
          POST
        </CustomButton>
      </form>
    </div>
  );
};

export default AddPost;
