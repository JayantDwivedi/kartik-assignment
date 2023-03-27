import { Button } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>who we are</p>
      <p className={styles.largeHeading}>We are Extensive.</p>
      <p className={styles.desText}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <Button variant="contained">BOOK A FREE MARKETING AUDIT </Button>
    </div>
  );
};

export default WhoWeAre;
