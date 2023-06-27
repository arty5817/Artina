"use client";
import styles from "./page.module.scss";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useRouter } from "next/navigation";
import CustomPost from "@/components/CustomPost/CustomPost";
import { Suspense, useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const Category = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/search?query=${params.category}&page=${page}&per_page=10`,
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
  }, [page]);

  return (
    <>
      <div className={styles.headContainer}>
        <CustomButton camel onClick={() => router.back()}>
          Back
        </CustomButton>
        <h1>{params.category}</h1>
      </div>
      <Suspense fallback={null}>
        <div className={styles.container}>
          {data?.map(({ id, src, photographer, alt }: PostProps) => (
            <div className={styles.post}>
              <CustomPost
                key={id}
                id={id}
                title={photographer}
                description={alt}
                src={src.original}
              />
            </div>
          ))}
          <div className={styles.pagination}>
            <Pagination
              count={33}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Category;
