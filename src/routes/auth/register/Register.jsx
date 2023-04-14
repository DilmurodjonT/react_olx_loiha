import React, { useState } from "react";
import axios from "axios";
import c from "./Register.module.scss";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  function registerUser(e) {
    e.preventDefault();
    axios
      .post("https://api.escuelajs.co/api/v1/users/", userdata)
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <form className={c.register__form} onSubmit={registerUser}>
        <input
          required
          type="text"
          placeholder={t("your name")}
          value={userdata.name}
          onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder={t("your email")}
          value={userdata.email}
          onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
        />
        <input
          required
          minLength={8}
          type="password"
          placeholder={t("your password")}
          value={userdata.password}
          onChange={(e) =>
            setUserdata({ ...userdata, password: e.target.value })
          }
        />
        <input
          required
          type="url"
          placeholder={t("your avatar")}
          value={userdata.avatar}
          onChange={(e) => setUserdata({ ...userdata, avatar: e.target.value })}
        />
        <button type="submit">{t("register")}</button>
      </form>
    </div>
  );
};

export default Register;
