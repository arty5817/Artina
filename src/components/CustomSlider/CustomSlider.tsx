"use client";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const PORTFOLIO = [
  {
    href: "/portfolio/illustrations",
    img: "/ilus2.jpeg",
    title: "Illustrations",
    desc: "This is TOP Illustrations Gallery",
  },
  {
    href: "/portfolio/nature",
    img: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Nature",
    desc: "This is TOP Nature Gallery",
  },
  {
    href: "/portfolio/abstract",
    img: "https://images.pexels.com/photos/4587855/pexels-photo-4587855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Abstract",
    desc: "This is TOP Abstract Gallery",
  },
  {
    href: "/portfolio/aesthetic",
    img: "/aesthetic.jpeg",
    title: "Aesthetic",
    desc: "This is TOP Aesthetic Gallery",
  },
  {
    href: "/portfolio/animal",
    img: "https://images.pexels.com/photos/276377/pexels-photo-276377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Animal",
    desc: "This is TOP Animal Gallery",
  },
  {
    href: "/portfolio/food",
    img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Food",
    desc: "This is TOP Food Art Gallery",
  },
  {
    href: "/portfolio/sport",
    img: "https://images.pexels.com/photos/5560867/pexels-photo-5560867.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sport",
    desc: "This is TOP Sport Art Gallery",
  },
  {
    href: "/portfolio/music",
    img: "https://images.pexels.com/photos/4491536/pexels-photo-4491536.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Music",
    desc: "This is TOP Music Art Gallery",
  },
  {
    href: "/portfolio/love",
    img: "https://images.pexels.com/photos/3139497/pexels-photo-3139497.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Love",
    desc: "This is TOP Love Art Gallery",
  },
];

const CustomSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 10 },

    breakpoints: {
      "(min-width: 767px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      {PORTFOLIO.map(({ href, img, title, desc }) => (
        <div key={title} className="keen-slider__slide number-slide">
          <Link href={href} className={styles.content}>
            <div className={styles.contentOverlay}></div>
            <Image
              width={700}
              height={400}
              className={styles.contentImage}
              src={img}
              alt={title}
            />
            <div className={`${styles.contentDetails} ${styles.fadeInBottom}`}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CustomSlider;
