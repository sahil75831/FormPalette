"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const userJson = localStorage.getItem("digiExcel_user");

  useEffect(() => {
    if (!userJson) {
      router.push("/login");
    }
  }, [userJson, router]);

  if (userJson) {
    return <>{children}</>;
  } else {
    return null; // or a loading indicator if you prefer
  }
};

export default ProtectedRoute;
