import React from "react";
import RegisterForm from "../register/RegisterForm/RegisterForm";
import ResetPassword from "../register/resetPassword/ResetPassword";
import css from "./Auth.module.scss";
import LoginForm from "./LoginForm/LoginForm";
import EnterOtp from "../../uiComponents/register/enterOtp/EnterOtp";
import EmailVerificationMessage from "../register/emailVerificationMessage/EmailVerificationMessage";

const AuthPage = ({ type }) => {
  let headContent = "";
  let subHeadContent = "";
  let formType = "";
  let textBelowButton = "";
  let bottomTextBelowButton = "";

  if (type === "register") {
    headContent = "Create an Account";
    subHeadContent = "Enter your credentials below to Create an Account";
    formType = <RegisterForm />;
    textBelowButton = (
      <>
        By clicking signup you agree to our
        <span>Terms of service</span>
        and
        <span>privacy policy</span>
      </>
    );
    bottomTextBelowButton = (
      <>
        Already have an account
        <span>Login </span>
      </>
    );
  }
  if (type === "login") {
    headContent = "Login into your Account";
    subHeadContent = "Enter your credentials below to Login into your Account";
    formType = <LoginForm />;
    textBelowButton = (
      <>
        Create an account
        <span>Sign Up</span>
      </>
    );
    bottomTextBelowButton = (
      <>
        <span>Forget Password</span>?
      </>
    );
  }
  if (type === "enterotp") {
    headContent = "Account Verification";
    subHeadContent =
      "Enter the otp sent to you, below to make sure everything works fine";
    formType = <EnterOtp />;
  }
  if (type === "resetPassowrd") {
    headContent = "Reset Password";
    subHeadContent = "Your password will be reset by email";
    formType = <ResetPassword />;
    textBelowButton = (
      <>
        Back to
        <span>Login</span>
      </>
    );
  }
  if (type === "EmailVerificationMessage") {
    formType = <EmailVerificationMessage />;
  }

  return (
    <div className={css.AuthPage}>
      <div className={css.conatiner}>
        <div className={css.sectionOne}>
          <div className={css.header}>ACME</div>
          <div className={css.logo}>
            <img
              src="https://img.freepik.com/premium-vector/logo-that-says-brand-logo-it_562643-4501.jpg"
              alt="brand image"
            />
          </div>
          <div className={css.footer}>
            <span>&copy; ACME Privacy Policy and Cookies Policy</span>
          </div>
        </div>
        <div className={css.sectionTwo}>
          <div className={css.sectionTwo_wrapper}>
            <div className={css.sectionTwo_one}>
              <h1>{headContent}</h1>
              <span>{subHeadContent}</span>
            </div>
            <div className={css.sectionTwo_two}>
              {formType}
              <div className={css.sectionTwo_agreement}>{textBelowButton}</div>
              <div className={css.sectionTwo_login}>
                {bottomTextBelowButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
