import React from "react";
import "./error.css";

import Logo from "../../components/Logo";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <Logo />
      <h1>Page not found</h1>
      <Link className="link" to={"/"}>
        Back to Home
      </Link>
    </div>
  );
}
