import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import useFormInput from "../hooks";
import { setItemInLocalStorage, getItemFromLocalStorage } from "../utils";
import { toast } from "react-toastify";
import "../assets/scss/pages/page8.scss";

export default function Page8() {
  const name = useFormInput("");
  const email = useFormInput("");
  const companyName = useFormInput("");
  const designation = useFormInput("");
  const password = useFormInput("");

  useEffect(() => {
    const user = getItemFromLocalStorage("user");
    if (user) {
      toast.success("user is Logged In");
    } else {
      toast.error("user is NOT Logged In");
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      name.value === "" ||
      email.value === "" ||
      companyName.value === "" ||
      designation.value === "" ||
      password.value === ""
    ) {
      toast.error("please enter all fields");
      return;
    }
    const userDetails = { name, email, companyName, designation, password };
    setItemInLocalStorage("user", userDetails);
    toast.success("user registered in local storage");
  };

  return (
    <div className="page8_container" id="Waitinglist">
      <div className="page8_container_text">
        <div className="title">Book A Demo Now</div>
      </div>
      <div className="page8_text_container">
        <div className="card_container">
          <div className="email_container">
            <div>
              <div className="full_width" style={{ marginBottom: "5px" }}>
                <Input
                  name="name"
                  type="text"
                  placeholder="Ex. John Doe"
                  label="Name "
                  value={name}
                />
              </div>
              <div className="full_width" style={{ marginBottom: "5px" }}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Ex. mail@website.com"
                  label="Email "
                  value={email}
                />
              </div>
              <div className="full_width" style={{ marginBottom: "5px" }}>
                <Input
                  name="company name"
                  type="text"
                  placeholder="Ex. XYZ PVT LTD"
                  label="Company Name "
                  value={companyName}
                />
              </div>
              <div className="full_width" style={{ marginBottom: "5px" }}>
                <Input
                  name="designation"
                  type="text"
                  placeholder="Ex. Operational Head"
                  label="Your title "
                  value={designation}
                />
              </div>
              <div className="full_width" style={{ marginBottom: "15px" }}>
                <Input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  label="Password "
                  value={password}
                />
              </div>
              <a
                href="#Waitinglist"
                className="button_container_style"
                onClick={handleClick}
              >
                <div>
                  <span className="text_button">Book Demo</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp"
        alt="bg"
        className="waiting_list"
      />
    </div>
  );
}
