import { Menu } from "@mui/icons-material";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo} />
      <div className={styles.navBar}>
        <div className={styles.navLink}>Contact</div>
        <div className={styles.navLink}>Work</div>
        <div className={styles.moreLink}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
