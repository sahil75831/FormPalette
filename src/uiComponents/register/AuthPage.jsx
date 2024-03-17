import React from "react";
import RegisterForm from "../register/RegisterForm/RegisterForm";
import css from "./Auth.module.scss";
import LoginForm from "./LoginForm/LoginForm";
import EnterOtp from "../../uiComponents/register/enterOtp/EnterOtp";
import EmailVerificationMessage from "../register/emailVerificationMessage/EmailVerificationMessage";

const AuthPage = ({ type }) => {
  let headContent = "";
  let subHeadContent = "";
  let formType = "";

  if (type === "register") {
    headContent = "Create an Account";
    subHeadContent = "Enter your credentials below to Create an Account";
    formType = <RegisterForm />;
  } else if (type === "login") {
    headContent = "Login into your Account";
    subHeadContent = "Enter your credentials below to Login into your Account";
    formType = <LoginForm />;
  } else if (type === "enterotp") {
    headContent = "Account Verification";
    subHeadContent =
      "Enter the otp sent to you, below to make sure everything works fine";
    formType = <EnterOtp />;
  } else {
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
              {/* {formType} */}
              <EmailVerificationMessage />

              <div className={css.sectionTwo_agreement}>
                {type === "register" ? (
                  <>
                    By clicking signup you agree to our
                    <span>Terms of service</span>
                    and
                    <span>privacy policy</span>
                  </>
                ) : (
                  <>
                    Already have an Account<span>Login</span>
                  </>
                )}
              </div>
              <div className={css.sectionTwo_login}>
                {type === "register" ? (
                  <>
                    Already have an account
                    <span>Login </span>
                  </>
                ) : (
                  <>
                    <span>Forget Password</span>?
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
