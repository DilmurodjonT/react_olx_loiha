import React from "react";
import c from "./Navbar.module.scss";
import { Container } from "../../utils/Components";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";
import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";
import { UniversalLink } from "../../utils/Components";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return pathname.includes("/auth") ? (
    <></>
  ) : (
    <nav className={c.navbar}>
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
              <UniversalLink
                text="Xabarlar"
                Link="/"
                icon={<FiMessageCircle />}
              />
              <UniversalLink text="" Link="/" icon={<FiHeart />} />
              <UniversalLink text="Xisobingiz" Link="/auth" icon={<FiUser />} />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
