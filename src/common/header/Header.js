import React from "react";
import { Button } from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="app-logo" src={Logo} alt="" />
      <Button variant="contained" style={{ marginLeft: "auto" }}>
        Login
      </Button>
    </div>
  );
};

export default Header;
