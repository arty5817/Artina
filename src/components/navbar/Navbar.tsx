"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle";
import Image from "next/image";
import logo from "../../../public/Images/logo.png";
import CustomButton from "@/components/CustomButton/CustomButton";
import { usePathname, useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { isMobile } from "react-device-detect";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";

const links = [
  {
    id: 1,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 2,
    title: "All",
    url: "/all",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    signOut().then(() => router.push("/"));
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image priority={true} src={logo} alt={logo} className={styles.img} />
      </Link>
      {isMobile ? (
        <div className={styles.mobileNav}>
          <CustomButton secondary onClick={() => setOpen(true)}>
            <MenuRoundedIcon />
          </CustomButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={(e) => setOpen(false)}
            PaperProps={{
              sx: {
                minWidth: 250,
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
          >
            <List>
              <ListItem className={styles.menuHead}>
                <IconButton onClick={() => setOpen(false)}>
                  <CancelPresentationOutlinedIcon />
                </IconButton>
                <DarkModeToggle onClick={() => setOpen(false)} />
              </ListItem>
              {links.map((link) => (
                <ListItem
                  key={link.id}
                  className={styles.menuItems}
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={link.url}
                    className={`${
                      pathname === link.url
                        ? styles.mobileActive
                        : styles.mobileLink
                    }`}
                  >
                    {link.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      ) : (
        <div className={styles.links}>
          <DarkModeToggle />
          {links.map((link) => (
            <Tooltip key={link.id} leaveDelay={200} title={link.title} arrow>
              <Link
                key={link.id}
                href={link.url}
                className={`${
                  pathname === link.url ? styles.active : styles.link
                }`}
              >
                {link.title}
              </Link>
            </Tooltip>
          ))}
          {status === "authenticated" && (
            <Tooltip leaveDelay={200} arrow title="My Profile">
              <Avatar
                sx={{ cursor: "pointer", border: 1 }}
                onClick={() => router.push("/profile")}
                variant="square"
                src={status === "authenticated" ? session.user.image : ""}
              />
            </Tooltip>
          )}
          <Box>
            {status === "unauthenticated" || status === "loading" ? (
              <CustomButton camel onClick={() => router.push("/profile")}>
                Dashboard
              </CustomButton>
            ) : (
              <CustomButton secondary onClick={handleSignOut}>
                Log Out
              </CustomButton>
            )}
          </Box>
        </div>
      )}
    </div>
  );
};

export default Navbar;
