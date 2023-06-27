import dynamic from "next/dynamic";
import { Suspense } from "react";
import styles from "../page.module.scss";
const RegistrationForm = dynamic(
  () => import("@/components/RegistrationForm/RegistrationForm")
);

export const metadata = {
  title: "Artina Registration",
  description: "Artina Registration Strong",
};
const RegistrationPage = () => {
  return (
    <div className={styles.register}>
      <Suspense fallback={"Loading..."}>
        <RegistrationForm />
      </Suspense>
    </div>
  );
};

export default RegistrationPage;
