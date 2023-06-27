"use client";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products with Artina
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href="/portfolio">
          <CustomButton camel>See Our Works</CustomButton>
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.imageCont}>
          <Image
            src="https://images.pexels.com/photos/15675725/pexels-photo-15675725/free-photo-of-person-holding-plant-on-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={400}
            alt="logo"
            height={500}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
