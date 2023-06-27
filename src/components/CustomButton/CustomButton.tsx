"use client";
import { Button, styled } from "@mui/material";
import cx from "classnames";

const StyledButton = styled(Button)({
  backgroundColor: "#454545",
  color: "#fff",
  height: 40,
  lineHeight: 2,
  borderRadius: 8,
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    backgroundColor: "#5a5a5a",
  },

  "&.camel": {
    border: "1px solid #53c28b",
    backgroundImage:
      "linear-gradient(90deg, rgba(30,100,55,1) 0%, rgba(83,194,139,1) 36%, rgba(91,250,255,1) 100%)",
    zIndex: 1,

    "&::before": {
      content: "''",
      position: "absolute",
      inset: 0,
      opacity: 0,
      zIndex: -1,
      backgroundImage:
        "linear-gradient(90deg, rgba(91,250,255,1) 0%, rgba(83,194,139,1) 63%, rgba(30,100,55,1) 100%)",
      transition: "all 0.3s ease-in-out",
    },

    "&:hover": {
      "&::before": {
        opacity: 1,
      },
    },
  },

  "&.secondary": {
    color: "#ffffff",
    background: "transparent",
    border: "1px solid #53c28b",

    "&:hover": {
      background: "#53C28B17 0% 0% no-repeat padding-box;",
    },
  },

  "&.Mui-disabled": {
    background: "#C9C9C9",
    color: "#929292",
    border: "1px solid #929292",
  },
});

// @ts-ignore
const CustomButton = ({ camel, secondary, className, ...props }) => {
  return (
    <StyledButton
      className={cx({ [className]: className, camel, secondary })}
      {...props}
    />
  );
};

export default CustomButton;
