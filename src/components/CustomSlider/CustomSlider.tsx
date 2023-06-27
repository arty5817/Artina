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
    desc: "It always seems impossible until it`s Done",
  },
  {
    href: "/portfolio/nature",
    img: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Nature",
    desc: "Nature is the source of all true knowledge.",
  },
  {
    href: "/portfolio/abstract",
    img: "https://images.pexels.com/photos/4587855/pexels-photo-4587855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Abstract",
    desc: "Abstraction allows man to see with his mind what he cannot see physically with his eyes. ",
  },
  {
    href: "/portfolio/aesthetic",
    img: "/aesthetic.jpeg",
    title: "Aesthetic",
    desc: "Do not let people's compliments get to your head, and do not let people's criticism get to your heart.",
  },
  {
    href: "/portfolio/animal",
    img: "https://images.pexels.com/photos/276377/pexels-photo-276377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Animal",
    desc: "Until one has loved an animal, a part of one's soul remains unawakened.",
  },
  {
    href: "/portfolio/food",
    img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Food",
    desc: "Tell me what you eat, and I will tell you who you are.",
  },
  {
    href: "/portfolio/sport",
    img: "https://images.pexels.com/photos/5560867/pexels-photo-5560867.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sport",
    desc: "The only one who can tell you ‘you can’t win’ is you and you don’t have to listen.",
  },
  {
    href: "/portfolio/music",
    img: "https://images.pexels.com/photos/4491536/pexels-photo-4491536.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Music",
    desc: "Where words fail, music speaks.",
  },
  {
    href: "/portfolio/travel",
    img: "https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Travel",
    desc: "Find amazing travel places with us",
  },
  {
    href: "/portfolio/love",
    img: "https://images.pexels.com/photos/3139497/pexels-photo-3139497.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Love",
    desc: "L is for the way you look at me... O is for the only one I see...",
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
