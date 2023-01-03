import React, { useState } from "react";
import "../assets/scss/components/input.scss";

export default function Input({ name, type, placeholder, label, value }) {
  return (
    <div className="input_container">
      <div className="input_label">
        {label} <span className="compulsory_icon">*</span>
      </div>
      <input
        type={type}
        className="input_style"
        name={name}
        placeholder={placeholder}
        {...value}
        required
      />
    </div>
  );
}
