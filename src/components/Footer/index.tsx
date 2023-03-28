import React from "react";

import styles from "./styles.module.scss";

const links = [
  { id: 1, link: "#", name: "Home page" },
  { id: 2, link: "#", name: "About us" },
  { id: 3, link: "#", name: "Book audit" },
  { id: 4, link: "#", name: "Contact us" },
  { id: 5, link: "#", name: "Our services" },
  { id: 6, link: "#", name: "Blogs" },
];

const socialIcons = [
  { id: 1, link: "/images/insta.png", name: "insta" },
  { id: 2, link: "/images/fb.png", name: "fb" },
  { id: 3, link: "/images/twitter.png", name: "twitter" },
];
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>Logo</div>
        <div className={styles.navLinksContainer}>
          {links?.map((link) => {
            return (
              <a className={styles.link} href={link.link}>
                {link.name}
              </a>
            );
          })}
        </div>
        <div className={styles.iconContainer}>
          {socialIcons?.map((icon) => {
            return <img src={icon.link} alt={icon.name} />;
          })}
        </div>
      </div>
      <p className={styles.copyright}>Copyright@2023</p>
    </div>
  );
};

export default Footer;
