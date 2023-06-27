"use client";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import styles from "@/app/profile/page.module.scss";

const itemData = [
  {
    img: "/ilus5.jpeg",
    title: "HeartBook",
    author: "@bkristastucchio",
  },
  {
    img: "/nature.jpeg",
    title: "Forest Art",
    author: "@rollelflex_graphy726",
  },
  {
    img: "/abstract.jpeg",
    title: "Piano Van Gog",
    author: "@helloimnik",
  },
  {
    img: "/about.jpg",
    title: "Lucky Tree",
    author: "@nolanissac",
  },
];

const MyPosts = () => {
  return (
    <div className={styles.profilePostContainer}>
      <h1>My Posts</h1>
      <ImageList sx={{ width: 500, height: 450, justifyItems: "center" }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Image
              width={200}
              height={200}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <p>{item.title}</p>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default MyPosts;
