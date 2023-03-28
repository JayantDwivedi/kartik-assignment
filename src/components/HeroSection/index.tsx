import React from "react";
import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.heading}>
          We are <span className={styles.headingRed}>Extensive</span>
        </p>

        <p className={styles.subHeading}>
          Helping you stand out in a crowded market
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
