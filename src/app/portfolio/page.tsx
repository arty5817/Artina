import styles from "./page.module.scss";
import CustomSlider from "@/components/CustomSlider/CustomSlider";
export const metadata = {
  title: "Artina Gallery",
  description: "Artina a photo sharing app for social fun",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>

      <div className={styles.galleryContain}>
        <CustomSlider />
      </div>
    </div>
  );
};

export default Portfolio;
