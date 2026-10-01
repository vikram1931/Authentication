import React from "react";
import { useAuth } from "../context/AuthContext";
export default function Signin() {
  const { session } = useAuth();
  return (
    <>
      <h1 className="landing-header">Paper Like A Boss</h1>
      <h2>@</h2>
    </>
  );
}
