import React from "react";
import css from "./EmailVerificationMessage.module.scss";

const EmailVerificationMessage = () => {
  return (
    <div className={css.EmailVerificationMessage}>
      <div className={css.wrapper}>
        <h1>&#x2713;</h1>
        <h2>Email Verification</h2>
        <span>
          Your email has been verefied. You can continue using the application
        </span>
        <button className="primaryButton">Go to Application</button>
      </div>
    </div>
  );
};

export default EmailVerificationMessage;
