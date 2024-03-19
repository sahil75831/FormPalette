import React from "react";

import AuthPage from "../uiComponents/register/AuthPage";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* <AuthPage type={"enterotp"} /> */}
      {/* <AuthPage type={"EmailVerificationMessage"} /> */}
      {/* */}
      <nav>
        <Link href={"/"} style={{ padding: "1rem" }}>
          Home page
        </Link>
        <Link href={"/login"} style={{ padding: "1rem" }}>
          login
        </Link>
        <Link href={"/register"} style={{ padding: "1rem" }}>
          register
        </Link>
      </nav>
    </div>
  );
};

export default page;
