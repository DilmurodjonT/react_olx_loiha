import React from "react";
import { useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import c from "./Auth.module.scss";

const Auth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.includes("register")) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <div className={c.auth}>
      <div className={c.auth__form}>
        <ul className={c.auth__nav}>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? c.auth__link__active : null
              }
              to="/auth/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? c.auth__link__active : null
              }
              to="/auth/register"
            >
              Register
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
