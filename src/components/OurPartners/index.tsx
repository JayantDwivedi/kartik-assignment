import React from "react";
import { partners } from "../../constants/partners";
import PartnerImage from "../PartnerImage";
import styles from "./styles.module.scss";

const OurPartners = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our</p>
      <p className={styles.heading}>Partners.</p>
      <p className={styles.subText}>Your success is our success.</p>

      <div className={styles.partnerImageContainer}>
        {partners.map((partner: any) => {
          return (
            <PartnerImage
              key={partner.id}
              imageText={partner.imageName}
              imageUrl={partner.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurPartners;
