import React from "react";
import Input from "../components/Input";
import "../assets/scss/pages/page8.scss";

export default function Page8() {
  return (
    <div className="page8_container" id="Waitinglist">
      <div className="page8_container_text">
        <div className="title">Book A Demo Now</div>
      </div>
      <div className="page8_text_container">
        <div className="card_container">
          <div className="email_container">
            <div>
              <div className="full_width" style={{ "margin-bottom": "5px" }}>
                <Input
                  name="name"
                  type="text"
                  placeholder="Ex. John Doe"
                  label="Name "
                />
              </div>
              <div className="full_width" style={{ "margin-bottom": "5px" }}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Ex. mail@website.com"
                  label="Email "
                />
              </div>
              <div className="full_width" style={{ "margin-bottom": "5px" }}>
                <Input
                  name="company name"
                  type="text"
                  placeholder="Ex. XYZ PVT LTD"
                  label="Company Name "
                />
              </div>
              <div className="full_width" style={{ "margin-bottom": "15px" }}>
                <Input
                  name="designation"
                  type="text"
                  placeholder="Ex. Operational Head"
                  label="Your title "
                />
              </div>
              <a href="#Waitinglist" className="button_container_style">
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
