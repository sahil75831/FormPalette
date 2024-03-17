import React from "react";
import css from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={css.LoginForm}>
      <form action="" className={css.wrapper}>
        <input type="email" placeholder="email" className={css.inputElement} />
        <input
          type="password"
          placeholder="password"
          className={css.inputElement}
        />

        <button className="primaryButton">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
