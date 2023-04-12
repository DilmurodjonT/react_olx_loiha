import React from "react";

const Register = () => {
  function registerUser(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Your password" />
        <input type="url" placeholder="Your avatar" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
