import React from "react";

import AuthPage from "../uiComponents/register/AuthPage";

const page = () => {
  return (
    <div>
      {/* <AuthPage type={"register"} /> */}
      {/* <AuthPage type={"login"} /> */}
      {/* <AuthPage type={"enterotp"} /> */}
      <AuthPage type={"EmailVerificationMessage"} />
    </div>
  );
};

export default page;
