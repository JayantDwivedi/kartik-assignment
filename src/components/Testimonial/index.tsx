import React from "react";
import styles from "./styles.module.scss";
const Testimonials = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Testimonials</p>

      <div className={styles.card}>
        <div className={styles.quoteContainer}>
          <img className={styles.image} src="/images/quote.png" alt="" />
          <p className={styles.quote}>“Working with Extensive is great” </p>
        </div>
        <div className={styles.authorContainer}>
          <p className={styles.name}>-Hershel </p>
          <p className={styles.designation}>Head of director GGPL PVT LTD. </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
