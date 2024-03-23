"use client";
import React, { useState } from "react";
import css from "./LoginForm.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  // const [successMessage, setSuccessMessage] = useState(false);
  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_SERVERBASEURL}`;
    try {
      const response = await fetch(`${url}/authentication/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        console.log("response.json() : ", await response.json());
        router.push("/dashboard");
      } else {
        console.log("response.status : ", response.status);
        throw new Error("error in form submit during login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleBlur = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };
  return (
    <div className={css.LoginForm}>
      <form onSubmit={(e) => handleSubmit(e)} className={css.wrapper}>
        <input
          type="email"
          placeholder="email"
          className={css.inputElement}
          value={formValues.email}
          onChange={(e) => handleChange(e)}
          name="email"
          required={true}
          onBlur={handleBlur}
          focused={focused.email.toString()}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" // this will elemenate the double usage of @
        />
        <input
          type="password"
          placeholder="password"
          className={css.inputElement}
          value={formValues.password}
          onChange={(e) => handleChange(e)}
          name="password"
          required={true}
          onBlur={handleBlur}
          focused={focused.password.toString()}
          pattern="(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"
        />
        {/* <Link href={"/login/verification"}> */}

        <button className="primaryButton" type="submit">
          Login
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default LoginForm;
