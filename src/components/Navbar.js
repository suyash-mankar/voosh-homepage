import React from "react";
import "../assets/scss/components/navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar_container">
      <div>
        <img
          src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp"
          alt="voosh-logo"
          className="voosh_logo"
        />
      </div>
    </div>
  );
}
