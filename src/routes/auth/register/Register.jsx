import React, { useState } from "react";

const Register = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  function registerUser(e) {
    e.preventDefault();
    console.log(userdata);
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Your name"
          value={userdata.name}
          onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your email"
          value={userdata.email}
          onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Your password"
          value={userdata.password}
          onChange={(e) =>
            setUserdata({ ...userdata, password: e.target.value })
          }
        />
        <input
          type="url"
          placeholder="Your avatar"
          value={userdata.avatar}
          onChange={(e) => setUserdata({ ...userdata, avatar: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
