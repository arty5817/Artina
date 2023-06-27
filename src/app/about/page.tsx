import styles from "./page.module.scss";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";
import Link from "next/link";

export const metadata = {
  title: "Artina About Us",
  description: "Artina a photo sharing app for social fun",
};
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/16649525/pexels-photo-16649525/free-photo-of-dark-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are We?</h1>
          <p className={styles.desc}>
            Somehow you may ask who are we but its just for fun I`m working
            alone right now my name is Arthur and I`m the developer and designer
            of this beautiful site ( google also had part in this project lol )
            soo idk what to tell you this is a beautiful test project if you
            love it just send me your opinion via contact page.
            <br /> Thank You!
            <br />
            <br />
            if you have any questions to us just send an email and we will reply
            extremly fast as we can just tell your offers or needs and we can
            implement it for contact down below navigate to contact page and
            have fun during your adventure of researching this project :)
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            In this awesome website we used the most modern technologied in
            website developement whole website is including material UI
            elements, this project was made by next.js app we tried our best
            design tools, more then 70% in this awesome project containes
            reusable components... My suggestion to take a look in desktop
            version cause I think its better in design. Have fun with all
            project dark/light mode ;)
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps Responsive
          </p>
          <Link href="/contact">
            <CustomButton secondary>Contact</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
