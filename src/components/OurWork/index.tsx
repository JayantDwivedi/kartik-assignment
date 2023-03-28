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
        <div className={styles.nikeContainer}>
          <img src="/images/startBucks.png" alt="" />
          <p className={styles.marketing}>Digital Marketing</p>
          <p className={styles.brandName}>StarBucks</p>
          <p className={styles.descText}>
            Our ad campaign brought 80% footfall to the company{" "}
          </p>
        </div>

        <div className={styles.nikeContainer}>
          <img className={styles.nikeImage} src="/images/nike.png" alt="nike" />
          <p className={styles.marketing}>Digital Marketing</p>
          <p className={styles.brandName}>Nike</p>
          <p className={styles.descText}>
            Our ad campaign brought 80% footfall to the company{" "}
          </p>
        </div>
      </div>

      <div className={styles.workImage}>
        <div className={styles.nikeContainer}>
          <img className={styles.nikeImage} src="/images/nike.png" alt="nike" />
          <p className={styles.marketing}>Digital Marketing</p>
          <p className={styles.brandName}>Nike</p>
          <p className={styles.descText}>
            Our ad campaign brought 80% footfall to the company{" "}
          </p>
        </div>
        <div className={styles.nikeContainer}>
          <img src="/images/startBucks.png" alt="" />
          <p className={styles.marketing}>Digital Marketing</p>
          <p className={styles.brandName}>StarBucks</p>
          <p className={styles.descText}>
            Our ad campaign brought 80% footfall to the company{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
