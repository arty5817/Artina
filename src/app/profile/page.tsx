"use client";
import styles from "./page.module.scss";
import React, { Suspense, useState } from "react";
import CustomButton from "@/components/CustomButton/CustomButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import Loading from "@/components/LoadingPage/Loading";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm/LoginForm";
const MyProfile = dynamic(() => import("@/components/MyProfile/MyProfile"));
const MyPosts = dynamic(() => import("@/components/MyProfile/MyPosts"));
const AddPost = dynamic(() => import("@/components/MyProfile/AddPost"));
const Settings = dynamic(() => import("@/components/MyProfile/Settings"));

const Profile = () => {
  const [elementToDisplay, setElementToDisplay] = useState(<MyPosts />);
  const router = useRouter();

  const showMyPost = () => {
    setElementToDisplay(<MyPosts />);
  };
  const showAddPost = () => {
    setElementToDisplay(<AddPost />);
  };
  const showSettings = () => {
    setElementToDisplay(<Settings />);
  };

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <LoginForm />;
  }

  return (
    <div className={styles.container}>
      <Suspense fallback={"Loading..."}>
        <MyProfile />
      </Suspense>
      <Suspense fallback={"Loading..."}>{elementToDisplay}</Suspense>

      <div className={styles.settingsContainer}>
        <CustomButton onClick={showMyPost} secondary>
          <CollectionsOutlinedIcon />
        </CustomButton>

        <CustomButton onClick={showAddPost} secondary>
          <AddPhotoAlternateOutlinedIcon />
        </CustomButton>

        <CustomButton disabled>
          <PinterestIcon />
        </CustomButton>

        <CustomButton onClick={showSettings} secondary>
          <SettingsOutlinedIcon />
        </CustomButton>
      </div>
    </div>
  );
};

export default Profile;
