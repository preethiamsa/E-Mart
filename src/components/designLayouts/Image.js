import React from "react";

const Image = ({ imgSrc, className,styles }) => {
  return <img style={styles} className={className} src={imgSrc} alt={imgSrc} />;
};

export default Image;
