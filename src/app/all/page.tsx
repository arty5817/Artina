"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import CustomPost from "../../components/CustomPost/CustomPost";

const All = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/curated?page=1&per_page=40
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

  return (
    <div className={styles.mainContainer}>
      {data?.map(({ id, src, photographer, alt }: PostProps) => (
        <CustomPost
          key={id}
          id={id}
          title={photographer}
          description={alt}
          src={src.original}
        />
      ))}
    </div>
  );
};

export default All;
