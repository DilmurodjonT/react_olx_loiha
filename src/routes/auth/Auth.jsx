import React from "react";
import { Outlet, Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/auth/register">Register</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
