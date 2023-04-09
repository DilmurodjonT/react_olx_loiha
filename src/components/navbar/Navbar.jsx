import React from "react";
import c from "./Navbar.module.scss";
import Container from "../../utils/Components";
import logo from "../../assets/logo.png";
import { useLocation, Link } from "react-router-dom";
import { FiMessageCircle } from "react-icons/fi";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return pathname.includes("/auth") ? (
    <></>
  ) : (
    <div className={c.navbar}>
      <div className={c.container}>
        <Container>
          <div className={c.navbar__wrapper}>
            <div className={c.navbar__logo__wrapper}>
              <img src={logo} alt="" />
            </div>
            <div className={c.navbar__menu}>
              <ul className={c.navbar__language__list}>
                <li>O'Z</li>
                <span> | </span>
                <li>RU</li>
                <span> | </span>
                <li>EN</li>
              </ul>
              <Link className={c.navbar__link}>
                <FiMessageCircle />
                Xabarlar
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
