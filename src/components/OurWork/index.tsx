import { Button } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

const OurWork = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our</p>
      <p className={styles.heading}>Work.</p>
      <div className={styles.btnContainer}>
        <Button variant="contained" color="secondary">
          View all
        </Button>
      </div>

      <div className={styles.workImage}>
        <img className={styles.starBucks} src="/images/startBucks.png" alt="" />
      </div>
    </div>
  );
};

export default OurWork;
