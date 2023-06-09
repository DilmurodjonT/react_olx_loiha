import React from "react";
import c from "./Navbar.module.scss";
import { Container, MainLink } from "../../utils/Components";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";
import { FiMessageCircle, FiHeart, FiUser, FiMenu } from "react-icons/fi";
import { UniversalLink } from "../../utils/Components";
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { pathname } = useLocation();
  // console.log(pathname);
  function menuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }
  console.log(isMenuOpen);
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
                <li
                  onClick={() => {
                    i18n.changeLanguage("uz");
                  }}
                >
                  O'Z
                </li>
                <span> | </span>
                <li
                  onClick={() => {
                    i18n.changeLanguage("ru");
                  }}
                >
                  RU
                </li>
                <span> | </span>
                <li
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  EN
                </li>
              </ul>
              <UniversalLink
                text={t("message")}
                link="/"
                icon={<FiMessageCircle />}
              />
              <UniversalLink text="" Link="/" icon={<FiHeart />} />
              <UniversalLink
                text={t("account")}
                link="/auth/login"
                icon={<FiUser />}
              />
            </div>
            <MainLink text={"E'lon berish"} link={"/"} type={"light"} />
            <FiMenu className={c.mobile__menu__icon} onClick={menuToggle} />
          </div>
        </Container>
        <div
          className={`${c.mobile__menu} ${isMenuOpen ? c.active__menu : ""}`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
