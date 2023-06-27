"use client";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Image from "next/image";
import styles from "@/app/profile/page.module.scss";
import { useEffect, useState } from "react";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import { isMobile } from "react-device-detect";

const MyPosts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/curated?page=${randomPage}&per_page=8
  `,
      {
        cache: "no-store",
        headers: {
          Authorization:
            "1fetGfOTnwWHCvx923gyvvQ70pPbSkckAmuUYsDeUcylYLIBmp4cZQCA",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data.photos));
  }, []);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomPage = randomIntFromInterval(1, 999);

  return (
    <div className={styles.profilePostContainer}>
      <h1>My Posts</h1>

      <ImageList
        sx={{
          width: isMobile ? 300 : 600,
          height: 450,
          overflowX: "hidden",
          gridTemplateColumns: isMobile
            ? "repeat(1, 1fr)!important"
            : "repeat(2, 1fr)",
        }}
      >
        {data?.map(({ id, src, photographer, alt }: PostProps) => (
          <ImageListItem key={id}>
            <Image
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL="/loading.png"
              src={src.original}
              alt={alt}
              loading="lazy"
            />
            <ImageListItemBar
              title={photographer}
              subtitle={alt}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${alt}`}
                >
                  <CameraOutlinedIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default MyPosts;
