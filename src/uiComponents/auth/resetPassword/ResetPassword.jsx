import React from "react";
import css from "./ResetPassword.module.scss";

const ResetPassword = () => {
  return (
    <div className={css.ResetPassword}>
      <form action="" className={css.wrapper}>
        <input type="email" placeholder="email" className={css.inputElement} />
        <input
          type="password"
          placeholder="new password"
          className={css.inputElement}
        />
        <input
          type="password"
          placeholder="confirm password"
          className={css.inputElement}
        />
        <button className="primaryButton">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
