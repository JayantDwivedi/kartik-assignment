import { Close, Menu } from "@mui/icons-material";
import { Button, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import SidebarDrawer from "../SidebarDrawer";
import styles from "./styles.module.scss";

const sidebar = [
  { id: 1, name: "Services", link: "#" },
  { id: 2, name: "About us", link: "#" },
  { id: 3, name: "Contact us", link: "#" },
  { id: 4, name: "Blog", link: "#" },
];

const Header = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo} />
        <div className={styles.navBar}>
          <div className={styles.navLink}>Contact</div>
          <div className={styles.navLink}>Work</div>
          <div className={styles.moreLink}>
            <IconButton
              aria-label="menu"
              onClick={() => setIsOpenSidebar(true)}
            >
              <Menu />
            </IconButton>
          </div>
        </div>
      </div>
      <Drawer
        anchor={"right"}
        open={isOpenSidebar}
        onClose={() => setIsOpenSidebar(false)}
      >
        <div className={styles.sidebarContainer}>
          <div className={styles.btnContainer}>
            <div className={styles.moreLink}>
              <IconButton onClick={() => setIsOpenSidebar(false)}>
                <Close />
              </IconButton>
            </div>
          </div>
          <div className={styles.sideNavs}>
            {sidebar?.map((menu) => {
              return (
                <a className={styles.links} href={menu.link}>
                  {menu.name}
                </a>
              );
            })}
          </div>
          <div>
            <Button variant="contained" color="secondary">
              book an free marketing audit
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
