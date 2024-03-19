import React from "react";
import css from "../RegisterForm/Register.module.scss";

const RegisterForm = () => {
  return (
    <div className={css.RegisterForm}>
      <form action="" className={css.wrapper}>
        <input type="text" placeholder="name" className={css.inputElement} />
        <input type="email" placeholder="email" className={css.inputElement} />
        <input
          type="text"
          placeholder="organisation"
          className={css.inputElement}
        />
        <input
          type="password"
          placeholder="password"
          className={css.inputElement}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className={css.inputElement}
        />

        <button className="primaryButton">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
