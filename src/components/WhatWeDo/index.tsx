import { Button } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <div>
            <p className={styles.largeHeading}>
              What
              <br /> we do.
            </p>
            <p className={styles.desText}>
              We do lots of stuffs , basically
              <br />
              adding value to your product.
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          {[1, 2, 3, 4].map((ele: number) => (
            <p className={styles.digitalMarketing}>Digital Marketing</p>
          ))}
          <div className={styles.btnContainer}>
            <Button variant="contained">View All</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
