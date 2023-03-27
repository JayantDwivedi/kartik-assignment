import React from "react";
import styles from "./styles.module.scss";

interface IPartnerImage {
  imageUrl: string;
  imageText: string;
}
const PartnerImage = ({ imageUrl, imageText }: IPartnerImage) => {
  return (
    <div className={styles.container}>
      <img className={styles.partnerImage} src={imageUrl} alt={imageText} />
      <p className={styles.imageText}>{imageText}</p>
    </div>
  );
};

export default PartnerImage;
