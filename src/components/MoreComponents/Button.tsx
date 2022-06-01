import React from "react";
import "./styles.css";

const Button = ({
  label,
  onClick,
  icon,
  bannerBtn,
  placeBid1,
  placeBid2,
  authorFollow,
  itemDetails,
  className,
}: any) => {
  return (
    <div onClick={onClick} className={`custom-button ${className}`}>
      {bannerBtn || placeBid1 || placeBid2 || itemDetails ? icon : undefined}
      {label}
    </div>
  );
};

export default Button;
