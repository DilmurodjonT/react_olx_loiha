import React from "react";
import { useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import c from "./Auth.module.scss";
import { useTranslation } from "react-i18next";

const Auth = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.includes("register")) {
      navigate("/auth/login");
    }
  }, [navigate, pathname]);

  return (
    <div className={c.auth}>
      <div className={c.circle}></div>
      <div className={c.auth__form}>
        <div className={c.auth__links}>
          <a href="/">{t("log in via Facebook")}</a>
          <a href="/">{t("access through Apple")}</a>
          <a href="/">{t("sign in with Google")}</a>
        </div>
        <div className={c.auth__or__section}>
          <div className={c.auth__stick}></div>
          <h3>{t("or")}</h3>
          <div className={c.auth__stick}></div>
        </div>
        <ul className={c.auth__nav}>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? c.auth__link__active : null
              }
              to="/auth/login"
            >
              {t("login")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? c.auth__link__active : null
              }
              to="/auth/register"
            >
              {t("register")}
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
