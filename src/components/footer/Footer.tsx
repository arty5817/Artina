import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";

const socials = [
  {
    img: "/1.png",
    href: "https://www.facebook.com/17artur17",
    alt: "facebook",
  },
  {
    img: "/2.png",
    href: "https://www.instagram.com/",
    alt: "instagram",
  },
  {
    img: "/3.png",
    href: "https://twitter.com/arty1758",
    alt: "tweet",
  },
  {
    img: "/5.png",
    href: "https://github.com/arty5817",
    alt: "github",
  },
];

interface SocialProp {
  img: string;
  href: string;
  alt?: string;
}

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; {new Date().getFullYear()} All rights reserved. Artina.</div>
      <div className={styles.social}>
        {socials.map(({ img, alt, href }: SocialProp) => (
          <a key={alt} target="_blank" href={href} rel="noopener noreferrer">
            <Image
              src={img}
              width={15}
              height={15}
              className={styles.icon}
              alt={alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
